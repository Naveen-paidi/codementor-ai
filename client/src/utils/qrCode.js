/**
 * Lightweight, zero-dependency QR Code generator for JavaScript.
 * Supports Byte mode with Error Correction Level M/L for URLs and text.
 * Location: client/src/utils/qrCode.js
 */

// Galois Field GF(256) Math tables
const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256);

(function initGF() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    EXP_TABLE[i + 255] = x;
    LOG_TABLE[x] = i;
    x = (x << 1) ^ (x & 0x80 ? 0x11d : 0);
  }
})();

function gmul(a, b) {
  if (a === 0 || b === 0) return 0;
  return EXP_TABLE[LOG_TABLE[a] + LOG_TABLE[b]];
}

function polyMul(p1, p2) {
  const result = new Uint8Array(p1.length + p2.length - 1);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      result[i + j] ^= gmul(p1[i], p2[j]);
    }
  }
  return result;
}

function polyMod(dividend, divisor) {
  let result = new Uint8Array(dividend);
  while (result.length >= divisor.length) {
    const lead = result[0];
    if (lead !== 0) {
      for (let i = 0; i < divisor.length; i++) {
        result[i] ^= gmul(divisor[i], lead);
      }
    }
    result = result.subarray(1);
  }
  return result;
}

function getGeneratorPoly(degree) {
  let g = new Uint8Array([1]);
  for (let i = 0; i < degree; i++) {
    g = polyMul(g, new Uint8Array([1, EXP_TABLE[i]]));
  }
  return g;
}

// QR Version table: [version, totalCodewords, dataCodewordsM, ecCodewordsM]
const QR_VERSIONS = [
  null,
  { v: 1, size: 21, data: 16, ec: 10, align: [] },
  { v: 2, size: 25, data: 28, ec: 16, align: [6, 18] },
  { v: 3, size: 29, data: 44, ec: 26, align: [6, 22] },
  { v: 4, size: 33, data: 64, ec: 36, align: [6, 26] },
  { v: 5, size: 37, data: 86, ec: 48, align: [6, 30] },
  { v: 6, size: 41, data: 108, ec: 64, align: [6, 34] },
  { v: 7, size: 45, data: 124, ec: 72, align: [6, 22, 38] }
];

export function createQRCode(text) {
  const utf8 = new TextEncoder().encode(text);
  const dataLen = utf8.length;

  // Pick smallest fitting version
  let info = null;
  for (let v = 1; v < QR_VERSIONS.length; v++) {
    if (QR_VERSIONS[v].data - 3 >= dataLen) {
      info = QR_VERSIONS[v];
      break;
    }
  }
  if (!info) info = QR_VERSIONS[QR_VERSIONS.length - 1];

  const { size, data: maxData, ec: ecTotal, align } = info;

  // 1. Bit buffer: Byte mode (0100) + length (8 bits for v1-9) + data
  const bits = [];
  function pushBits(val, len) {
    for (let i = len - 1; i >= 0; i--) {
      bits.push((val >> i) & 1);
    }
  }

  pushBits(0b0100, 4); // Byte mode
  pushBits(dataLen, 8); // 8-bit length indicator
  for (let b of utf8) pushBits(b, 8);

  // Terminator
  while (bits.length < maxData * 8 && bits.length % 8 !== 0) bits.push(0);
  while (bits.length < maxData * 8 && bits.length <= (maxData * 8 - 4)) {
    pushBits(0, 4);
    break;
  }
  while (bits.length % 8 !== 0) bits.push(0);

  // Convert bits to byte array
  const dataBytes = new Uint8Array(maxData);
  for (let i = 0; i < bits.length; i += 8) {
    let byteVal = 0;
    for (let j = 0; j < 8; j++) {
      byteVal = (byteVal << 1) | (bits[i + j] || 0);
    }
    dataBytes[i / 8] = byteVal;
  }

  // Pad with alternating 0xEC, 0x11
  let padIdx = Math.floor(bits.length / 8);
  let padToggle = false;
  while (padIdx < maxData) {
    dataBytes[padIdx++] = padToggle ? 0x11 : 0xec;
    padToggle = !padToggle;
  }

  // 2. Reed-Solomon Error Correction
  const genPoly = getGeneratorPoly(ecTotal);
  const msgPadded = new Uint8Array(maxData + ecTotal);
  msgPadded.set(dataBytes, 0);
  const remainder = polyMod(msgPadded, genPoly);

  const fullStream = new Uint8Array(maxData + ecTotal);
  fullStream.set(dataBytes, 0);
  fullStream.set(remainder, maxData);

  // 3. Matrix construction
  const matrix = Array.from({ length: size }, () => new Int8Array(size).fill(-1));
  const isFunction = Array.from({ length: size }, () => new Uint8Array(size));

  function setFunc(r, c, val) {
    if (r >= 0 && r < size && c >= 0 && c < size) {
      matrix[r][c] = val ? 1 : 0;
      isFunction[r][c] = 1;
    }
  }

  // Finder patterns
  function drawFinder(row, col) {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const nr = row + r;
        const nc = col + c;
        if (nr < 0 || nr >= size || nc < 0 || nc >= size) continue;
        const isBorder = (r === -1 || r === 7 || c === -1 || c === 7);
        if (isBorder) {
          setFunc(nr, nc, 0);
        } else if (r === 0 || r === 6 || c === 0 || c === 6) {
          setFunc(nr, nc, 1);
        } else if (r >= 2 && r <= 4 && c >= 2 && c <= 4) {
          setFunc(nr, nc, 1);
        } else {
          setFunc(nr, nc, 0);
        }
      }
    }
  }

  drawFinder(0, 0);
  drawFinder(0, size - 7);
  drawFinder(size - 7, 0);

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    const val = i % 2 === 0 ? 1 : 0;
    if (isFunction[6][i] === 0) setFunc(6, i, val);
    if (isFunction[i][6] === 0) setFunc(i, 6, val);
  }

  // Alignment patterns for v2+
  if (align && align.length > 0) {
    for (let r of align) {
      for (let c of align) {
        if (isFunction[r][c] === 1) continue;
        for (let dr = -2; dr <= 2; dr++) {
          for (let dc = -2; dc <= 2; dc++) {
            const isRim = Math.abs(dr) === 2 || Math.abs(dc) === 2;
            const isCenter = dr === 0 && dc === 0;
            setFunc(r + dr, c + dc, isRim || isCenter ? 1 : 0);
          }
        }
      }
    }
  }

  // Dark module
  setFunc(4 * info.v + 9, 8, 1);

  // Reserve format info area
  for (let i = 0; i <= 8; i++) {
    if (isFunction[8][i] === 0) isFunction[8][i] = 1;
    if (isFunction[i][8] === 0) isFunction[i][8] = 1;
  }
  for (let i = size - 8; i < size; i++) {
    if (isFunction[8][i] === 0) isFunction[8][i] = 1;
    if (isFunction[i][8] === 0) isFunction[i][8] = 1;
  }

  // 4. Data placement (2-column zigzag upwards/downwards)
  let bitIdx = 0;
  const totalDataBits = fullStream.length * 8;
  let dir = -1; // -1 = up, 1 = down
  let r = size - 1;
  let c = size - 1;

  while (c > 0) {
    if (c === 6) c--; // Skip timing column
    for (let step = 0; step < size; step++) {
      const curRow = r;
      for (let colOffset = 0; colOffset < 2; colOffset++) {
        const curCol = c - colOffset;
        if (isFunction[curRow][curCol] === 0) {
          let b = 0;
          if (bitIdx < totalDataBits) {
            const byte = fullStream[Math.floor(bitIdx / 8)];
            b = (byte >> (7 - (bitIdx % 8))) & 1;
            bitIdx++;
          }
          // Mask 0: (row + col) % 2 === 0
          const mask = (curRow + curCol) % 2 === 0;
          matrix[curRow][curCol] = b ^ (mask ? 1 : 0);
        }
      }
      r += dir;
    }
    dir = -dir;
    r += dir;
    c -= 2;
  }

  // 5. Format info for Mask 0 and Level M: 0b101010000010010
  const formatBits = [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0];
  const formatCoords = [
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 7], [8, 8],
    [7, 8], [5, 8], [4, 8], [3, 8], [2, 8], [1, 8], [0, 8]
  ];
  for (let i = 0; i < 15; i++) {
    const val = formatBits[i];
    const [fr, fc] = formatCoords[i];
    matrix[fr][fc] = val;
  }

  const formatCoords2 = [
    [size - 1, 8], [size - 2, 8], [size - 3, 8], [size - 4, 8],
    [size - 5, 8], [size - 6, 8], [size - 7, 8],
    [8, size - 8], [8, size - 7], [8, size - 6], [8, size - 5],
    [8, size - 4], [8, size - 3], [8, size - 2], [8, size - 1]
  ];
  for (let i = 0; i < 15; i++) {
    const val = formatBits[i];
    const [fr, fc] = formatCoords2[i];
    matrix[fr][fc] = val;
  }

  return {
    size,
    isDark: (row, col) => matrix[row][col] === 1
  };
}

export function drawQRCode(ctx, text, x, y, size, darkColor = '#0F172A', lightColor = '#FFFFFF') {
  const qr = createQRCode(text);
  const cellSize = size / qr.size;

  ctx.save();
  ctx.fillStyle = lightColor;
  ctx.fillRect(x, y, size, size);

  ctx.fillStyle = darkColor;
  for (let r = 0; r < qr.size; r++) {
    for (let c = 0; c < qr.size; c++) {
      if (qr.isDark(r, c)) {
        ctx.fillRect(
          Math.floor(x + c * cellSize),
          Math.floor(y + r * cellSize),
          Math.ceil(cellSize),
          Math.ceil(cellSize)
        );
      }
    }
  }
  ctx.restore();
}

export default { createQRCode, drawQRCode };


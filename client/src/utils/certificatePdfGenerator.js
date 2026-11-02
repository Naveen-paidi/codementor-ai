/**
 * CodeMentor Dedicated Certificate PDF & High-Res Image Generator.
 * Exactly implements the classic CodeMentor Academy Certificate:
 * - Warm ivory canvas (#FCFAF6) with rich #1E1B4B typography
 * - Double bronze/gold border (#8B7355) with 4 corner L-bracket accents
 * - Background watermark Award crest
 * - Vibrant gradient CM emblem (Indigo -> Purple) + "CodeMentor Academy"
 * - Bronze tracked "Certificate of Specialization & Mastery"
 * - Italic serif "This is to officially certify that"
 * - Large commanding serif recipient name
 * - Full curriculum completion statement
 * - Rounded course track capsule pill with indigo border
 * - Bottom row: "Issued On" + formatted date + boxed ID,
 *   Gold circular verified seal with shield check,
 *   and "Academic Board of Directors" + "Autonomous Verification Authority" + verification URL.
 * - Single-page binary PDF (1024 x 724 pt, 1.414:1) with ZERO blank space at top/bottom/sides.
 * Location: client/src/utils/certificatePdfGenerator.js
 */

export const CANVAS_WIDTH = 2048;
export const CANVAS_HEIGHT = 1448; // Exactly 1.414 A4 Landscape aspect ratio
export const PDF_WIDTH = 1024;
export const PDF_HEIGHT = 724;

/**
 * Render the entire certificate onto an HTML5 Canvas at 2048 x 1448 px (2x Retina).
 */
export async function renderCertificateToCanvas(certificate) {
  const canvas = document.createElement('canvas');
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  const ctx = canvas.getContext('2d');

  if (!ctx) throw new Error('Failed to acquire canvas 2D context');

  const studentName = certificate?.student_name || certificate?.studentName || 'CodeMentor Scholar';
  const courseTitle = certificate?.course_title || certificate?.courseTitle || 'JavaScript Programming Specialist';
  const certId = certificate?.id || 'CM-CERT-JAVASCRIPT-FUJEJ5';
  const issuedDate = new Date(certificate?.issued_at || Date.now()).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const origin = (typeof window !== 'undefined' && window.location?.origin) || 'https://codementor.academy';
  const verifyUrl = `${origin}/verify-certificate/${certId}`;

  // --------------------------------------------------------------------------
  // 1. BASE BACKGROUND & DOUBLE BRONZE/GOLD BORDER
  // --------------------------------------------------------------------------
  ctx.fillStyle = '#FCFAF6'; // Authentic warm ivory background
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Outer bronze border line (rounded)
  ctx.strokeStyle = '#8B7355';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.roundRect(28, 28, CANVAS_WIDTH - 56, CANVAS_HEIGHT - 56, 20);
  ctx.stroke();

  // Inner bronze border line (crisp rectangle)
  ctx.strokeStyle = '#8B7355';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.rect(48, 48, CANVAS_WIDTH - 96, CANVAS_HEIGHT - 96);
  ctx.stroke();

  // --------------------------------------------------------------------------
  // 2. FOUR CORNER L-BRACKET ORNAMENTS
  // --------------------------------------------------------------------------
  const bracketOffset = 72;
  const bracketLen = 84;
  ctx.strokeStyle = '#8B7355';
  ctx.lineWidth = 3.5;
  ctx.lineCap = 'square';

  // Top-Left L-bracket
  ctx.beginPath();
  ctx.moveTo(bracketOffset, bracketOffset + bracketLen);
  ctx.lineTo(bracketOffset, bracketOffset);
  ctx.lineTo(bracketOffset + bracketLen, bracketOffset);
  ctx.stroke();

  // Top-Right L-bracket
  ctx.beginPath();
  ctx.moveTo(CANVAS_WIDTH - bracketOffset - bracketLen, bracketOffset);
  ctx.lineTo(CANVAS_WIDTH - bracketOffset, bracketOffset);
  ctx.lineTo(CANVAS_WIDTH - bracketOffset, bracketOffset + bracketLen);
  ctx.stroke();

  // Bottom-Left L-bracket
  ctx.beginPath();
  ctx.moveTo(bracketOffset, CANVAS_HEIGHT - bracketOffset - bracketLen);
  ctx.lineTo(bracketOffset, CANVAS_HEIGHT - bracketOffset);
  ctx.lineTo(bracketOffset + bracketLen, CANVAS_HEIGHT - bracketOffset);
  ctx.stroke();

  // Bottom-Right L-bracket
  ctx.beginPath();
  ctx.moveTo(CANVAS_WIDTH - bracketOffset - bracketLen, CANVAS_HEIGHT - bracketOffset);
  ctx.lineTo(CANVAS_WIDTH - bracketOffset, CANVAS_HEIGHT - bracketOffset);
  ctx.lineTo(CANVAS_WIDTH - bracketOffset, CANVAS_HEIGHT - bracketOffset - bracketLen);
  ctx.stroke();

  // --------------------------------------------------------------------------
  // 3. SUBTLE WATERMARK BACKGROUND (Award Crest)
  // --------------------------------------------------------------------------
  const centerX = CANVAS_WIDTH / 2;
  const centerY = CANVAS_HEIGHT / 2;

  ctx.save();
  ctx.translate(centerX, centerY - 20);
  ctx.fillStyle = 'rgba(15, 23, 42, 0.03)';
  ctx.strokeStyle = 'rgba(15, 23, 42, 0.03)';
  ctx.lineWidth = 14;

  // Watermark trophy/award medal
  ctx.beginPath();
  ctx.arc(0, -60, 240, 0, Math.PI * 2);
  ctx.stroke();

  // Star in watermark
  ctx.font = '900 180px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('★', 0, -60);
  ctx.restore();

  // --------------------------------------------------------------------------
  // 4. TOP HEADER: CM GRADIENT ICON + CODEMENTOR ACADEMY
  // --------------------------------------------------------------------------
  const brandText = 'CODEMENTOR ACADEMY';
  ctx.font = '900 38px "Inter", "Segoe UI", sans-serif';
  const brandWidth = ctx.measureText(brandText).width;
  const iconSize = 64;
  const headerGap = 18;
  const totalHeaderWidth = iconSize + headerGap + brandWidth;
  const headerStartX = (CANVAS_WIDTH - totalHeaderWidth) / 2;
  const headerY = 175;

  // Vibrant Gradient CM Emblem (Indigo -> Purple)
  const iconX = headerStartX;
  const iconY = headerY - iconSize / 2;
  const iconGrad = ctx.createLinearGradient(iconX, iconY, iconX + iconSize, iconY + iconSize);
  iconGrad.addColorStop(0, '#4F46E5'); // Indigo-600
  iconGrad.addColorStop(1, '#9333EA'); // Purple-600

  ctx.fillStyle = iconGrad;
  ctx.beginPath();
  ctx.roundRect(iconX, iconY, iconSize, iconSize, 18);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 28px "Inter", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CM', iconX + iconSize / 2, iconY + iconSize / 2);

  // Brand Name
  ctx.textAlign = 'left';
  ctx.fillStyle = '#1E1B4B';
  ctx.font = '900 38px "Inter", "Segoe UI", sans-serif';
  ctx.letterSpacing = '2px';
  ctx.fillText(brandText, iconX + iconSize + headerGap, headerY);
  ctx.letterSpacing = '0px';

  // Subtitle: Certificate of Specialization & Mastery
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#8B7355';
  ctx.font = '800 24px "Inter", "Segoe UI", sans-serif';
  ctx.letterSpacing = '6px';
  ctx.fillText('CERTIFICATE OF SPECIALIZATION & MASTERY', centerX, 255);
  ctx.letterSpacing = '0px';

  // --------------------------------------------------------------------------
  // 5. BODY: THIS IS TO OFFICIALLY CERTIFY THAT
  // --------------------------------------------------------------------------
  ctx.fillStyle = '#64748B';
  ctx.font = 'italic 400 32px "Playfair Display", Georgia, serif';
  ctx.fillText('This is to officially certify that', centerX, 355);

  // --------------------------------------------------------------------------
  // 6. RECIPIENT FULL NAME (Grand Serif)
  // --------------------------------------------------------------------------
  ctx.fillStyle = '#1E1B4B';
  ctx.font = 'bold 82px "Playfair Display", Georgia, "Times New Roman", serif';
  ctx.fillText(studentName, centerX, 475);

  // Subtle decorative underline beneath name
  const nameWidth = Math.min(ctx.measureText(studentName).width + 60, 900);
  ctx.strokeStyle = 'rgba(139, 115, 85, 0.35)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(centerX - nameWidth / 2, 505);
  ctx.lineTo(centerX + nameWidth / 2, 505);
  ctx.stroke();

  // --------------------------------------------------------------------------
  // 7. STATEMENT OF ACHIEVEMENT
  // --------------------------------------------------------------------------
  ctx.fillStyle = '#475569';
  ctx.font = 'normal 26px "Inter", "Segoe UI", sans-serif';
  ctx.fillText(
    'has successfully achieved 100% curriculum completion and satisfied all comprehensive',
    centerX,
    590
  );
  ctx.fillText('rigorous programming evaluations in the track:', centerX, 635);

  // --------------------------------------------------------------------------
  // 8. COURSE TITLE CAPSULE PILL
  // --------------------------------------------------------------------------
  const badgeY = 740;
  ctx.font = '800 38px "Inter", "Segoe UI", sans-serif';
  const trackTextWidth = ctx.measureText(courseTitle).width;
  const badgeWidth = Math.max(trackTextWidth + 110, 600);
  const badgeHeight = 90;

  // Background: #EEF2FF (indigo-50/80)
  ctx.fillStyle = 'rgba(238, 242, 255, 0.9)';
  ctx.beginPath();
  ctx.roundRect(centerX - badgeWidth / 2, badgeY - badgeHeight / 2, badgeWidth, badgeHeight, 45);
  ctx.fill();

  // Border: #C7D2FE (indigo-200)
  ctx.strokeStyle = 'rgba(199, 210, 254, 0.9)';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Text
  ctx.fillStyle = '#312E81'; // Rich Indigo-900
  ctx.textBaseline = 'middle';
  ctx.fillText(courseTitle, centerX, badgeY);

  // --------------------------------------------------------------------------
  // 9. FOOTER SECTION: DATE, GOLD VERIFIED SEAL, SIGNATURE & VERIFY LINK
  // --------------------------------------------------------------------------
  const footerDividerY = 1080;
  ctx.strokeStyle = 'rgba(139, 115, 85, 0.25)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(120, footerDividerY);
  ctx.lineTo(CANVAS_WIDTH - 120, footerDividerY);
  ctx.stroke();

  ctx.textBaseline = 'alphabetic';

  // --- Left Column: Issued On, Date, Boxed ID ---
  const leftX = 140;
  ctx.textAlign = 'left';

  ctx.fillStyle = '#94A3B8';
  ctx.font = '600 17px "Inter", sans-serif';
  ctx.letterSpacing = '1.5px';
  ctx.fillText('ISSUED ON', leftX, 1135);
  ctx.letterSpacing = '0px';

  ctx.fillStyle = '#1E293B';
  ctx.font = 'bold 28px "Inter", sans-serif';
  ctx.fillText(issuedDate, leftX, 1180);

  // Boxed Credential ID
  const idText = `ID: ${certId}`;
  ctx.font = 'bold 19px "Courier New", monospace';
  const idBoxWidth = ctx.measureText(idText).width + 30;
  const idBoxHeight = 48;
  const idBoxY = 1215;

  ctx.fillStyle = '#EEF2FF';
  ctx.beginPath();
  ctx.roundRect(leftX, idBoxY, idBoxWidth, idBoxHeight, 8);
  ctx.fill();

  ctx.strokeStyle = '#C7D2FE';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = '#4338CA';
  ctx.textBaseline = 'middle';
  ctx.fillText(idText, leftX + 15, idBoxY + idBoxHeight / 2);
  ctx.textBaseline = 'alphabetic';

  // --- Center Column: Official Gold Verified Seal ---
  const sealCenterX = centerX;
  const sealCenterY = 1210;
  const sealRadius = 78;

  ctx.save();
  ctx.translate(sealCenterX, sealCenterY);

  // Outer gold ring gradient
  const outerGrad = ctx.createLinearGradient(-sealRadius, -sealRadius, sealRadius, sealRadius);
  outerGrad.addColorStop(0, '#997A15');
  outerGrad.addColorStop(0.5, '#E5C158');
  outerGrad.addColorStop(1, '#997A15');

  ctx.fillStyle = outerGrad;
  ctx.beginPath();
  ctx.arc(0, 0, sealRadius, 0, Math.PI * 2);
  ctx.fill();

  // Inner gold body
  const innerRadius = sealRadius - 7;
  const innerGrad = ctx.createLinearGradient(0, -innerRadius, 0, innerRadius);
  innerGrad.addColorStop(0, '#F7E7A6');
  innerGrad.addColorStop(1, '#D4AF37');

  ctx.fillStyle = innerGrad;
  ctx.beginPath();
  ctx.arc(0, 0, innerRadius, 0, Math.PI * 2);
  ctx.fill();

  // Dashed border inside seal
  ctx.strokeStyle = '#5C4808';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.arc(0, 0, innerRadius - 4, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Shield Icon inside seal
  ctx.strokeStyle = '#4A3805';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(0, -32);
  ctx.lineTo(16, -22);
  ctx.lineTo(16, -4);
  ctx.quadraticCurveTo(16, 16, 0, 24);
  ctx.quadraticCurveTo(-16, 16, -16, -4);
  ctx.lineTo(-16, -22);
  ctx.closePath();
  ctx.stroke();

  // Checkmark inside shield
  ctx.beginPath();
  ctx.moveTo(-7, -2);
  ctx.lineTo(-2, 4);
  ctx.lineTo(8, -8);
  ctx.stroke();

  // VERIFIED text
  ctx.textAlign = 'center';
  ctx.fillStyle = '#4A3805';
  ctx.font = '900 15px "Inter", sans-serif';
  ctx.letterSpacing = '1.5px';
  ctx.fillText('VERIFIED', 0, 42);
  ctx.letterSpacing = '0px';

  // CodeMentor text
  ctx.font = 'bold 13px "Inter", sans-serif';
  ctx.fillText('CodeMentor', 0, 58);

  ctx.restore();

  // --- Right Column: Academic Board of Directors, Authority & Verification Link ---
  const rightX = CANVAS_WIDTH - 140;
  ctx.textAlign = 'right';

  ctx.fillStyle = '#312E81';
  ctx.font = 'italic bold 32px "Playfair Display", Georgia, serif';
  ctx.fillText('Academic Board of Directors', rightX, 1140);

  // Signature underline
  const sigWidth = ctx.measureText('Academic Board of Directors').width;
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(rightX - sigWidth, 1152);
  ctx.lineTo(rightX, 1152);
  ctx.stroke();

  ctx.fillStyle = '#64748B';
  ctx.font = '500 19px "Inter", sans-serif';
  ctx.fillText('Autonomous Verification Authority', rightX, 1185);

  // Verification URL line
  ctx.font = '500 16px "Courier New", monospace';
  ctx.fillStyle = '#94A3B8';
  ctx.fillText(`Verify: ${verifyUrl}`, rightX, 1225);

  return canvas;
}

/**
 * Builds a 100% compliant, standard PDF 1.4 document containing EXACTLY ONE landscape page
 * (1024 x 724 pt, 1.414:1) with ZERO blank space at the top and bottom of the certificate.
 */
export async function generateCertificatePdfBlob(certificate) {
  const canvas = await renderCertificateToCanvas(certificate);

  // Convert canvas to high-quality JPEG binary
  const dataUrl = canvas.toDataURL('image/jpeg', 0.96);
  const base64Data = dataUrl.split(',')[1];
  const binaryStr = atob(base64Data);
  const jpegBytes = new Uint8Array(binaryStr.length);
  for (let i = 0; i < binaryStr.length; i++) {
    jpegBytes[i] = binaryStr.charCodeAt(i);
  }

  const jpegLen = jpegBytes.length;

  // Build standard PDF 1.4 binary structure
  const chunks = [];
  const enc = new TextEncoder();

  chunks.push(enc.encode('%PDF-1.4\n'));

  // Object 1: Catalog
  const obj1Offset = getChunksLength(chunks);
  chunks.push(enc.encode('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n'));

  // Object 2: Pages Collection (strictly 1 page)
  const obj2Offset = getChunksLength(chunks);
  chunks.push(enc.encode('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n'));

  // Object 3: The Single Page (1024 x 724 pt = matches canvas 2048 x 1448 exactly)
  const obj3Offset = getChunksLength(chunks);
  chunks.push(enc.encode(
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PDF_WIDTH} ${PDF_HEIGHT}] /Resources << /XObject << /Im1 4 0 R >> /ProcSet [/PDF /ImageC] >> /Contents 5 0 R >>\nendobj\n`
  ));

  // Object 4: Image XObject
  const obj4Offset = getChunksLength(chunks);
  chunks.push(enc.encode(
    `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${CANVAS_WIDTH} /Height ${CANVAS_HEIGHT} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegLen} >>\nstream\n`
  ));
  chunks.push(jpegBytes);
  chunks.push(enc.encode('\nendstream\nendobj\n'));

  // Object 5: Page Content stream (maps image to fill 100% of the 1024x724 pt page with ZERO margins)
  const streamContent = `q\n${PDF_WIDTH} 0 0 ${PDF_HEIGHT} 0 0 cm\n/Im1 Do\nQ\n`;
  const obj5Offset = getChunksLength(chunks);
  chunks.push(enc.encode(`5 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}endstream\nendobj\n`));

  // Xref table
  const xrefOffset = getChunksLength(chunks);
  let xref = `xref\n0 6\n0000000000 65535 f \n`;
  xref += `${String(obj1Offset).padStart(10, '0')} 00000 n \n`;
  xref += `${String(obj2Offset).padStart(10, '0')} 00000 n \n`;
  xref += `${String(obj3Offset).padStart(10, '0')} 00000 n \n`;
  xref += `${String(obj4Offset).padStart(10, '0')} 00000 n \n`;
  xref += `${String(obj5Offset).padStart(10, '0')} 00000 n \n`;
  chunks.push(enc.encode(xref));

  // Trailer
  chunks.push(enc.encode(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`));

  return new Blob(chunks, { type: 'application/pdf' });
}

function getChunksLength(chunks) {
  let len = 0;
  for (let c of chunks) len += c.length;
  return len;
}

/**
 * Trigger immediate download of the single-page PDF certificate with 0 margins.
 */
export async function downloadCertificatePdf(certificate) {
  const blob = await generateCertificatePdfBlob(certificate);
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const safeName = (certificate?.student_name || 'Student').replace(/[^a-zA-Z0-9]/g, '_');
  const safeCourse = (certificate?.course_id || 'course').toLowerCase();

  link.href = url;
  link.download = `CodeMentor_Certificate_${safeCourse}_${safeName}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

/**
 * High-resolution PNG image download.
 */
export async function downloadCertificatePng(certificate) {
  const canvas = await renderCertificateToCanvas(certificate);
  const url = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  const safeName = (certificate?.student_name || 'Student').replace(/[^a-zA-Z0-9]/g, '_');
  const safeCourse = (certificate?.course_id || 'course').toLowerCase();

  link.href = url;
  link.download = `CodeMentor_Certificate_${safeCourse}_${safeName}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Isolated iframe printing guaranteeing exactly ONE page and 0 margins at top/bottom.
 */
export async function printCertificate(certificate) {
  const canvas = await renderCertificateToCanvas(certificate);
  const dataUrl = canvas.toDataURL('image/png');

  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.left = '-9999px';
  iframe.style.top = '-9999px';
  iframe.style.width = '0px';
  iframe.style.height = '0px';
  iframe.style.border = 'none';

  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document || iframe.contentDocument;
  if (!doc) {
    window.print();
    return;
  }

  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>CodeMentor Certificate - ${certificate?.student_name || 'Official Credential'}</title>
        <style>
          @page {
            size: ${PDF_WIDTH}px ${PDF_HEIGHT}px landscape;
            margin: 0;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: ${PDF_WIDTH}px !important;
            height: ${PDF_HEIGHT}px !important;
            background: #FCFAF6 !important;
            overflow: hidden !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: fill;
          }
        </style>
      </head>
      <body>
        <img src="${dataUrl}" alt="CodeMentor Certificate" />
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.focus();
              window.print();
              setTimeout(function() {
                window.parent.document.body.removeChild(window.frameElement);
              }, 1000);
            }, 300);
          };
        </script>
      </body>
    </html>
  `);
  doc.close();
}

/**
 * Structure-Aware Semantic Chunking Service
 * -----------------------------------------
 * Breaks technical documentation into cohesive semantic chunks without breaking
 * code blocks, markdown headings, algorithm complexities, or function definitions.
 *
 * Parameters:
 * - Target chunk size: ~500 - 800 tokens (~2000 - 3200 characters)
 * - Overlap: ~75 - 100 tokens (~300 - 400 characters)
 * - Preserves code fences (``` ... ```)
 * - Preserves heading hierarchies (#, ##, ###)
 */

export function chunkDocument({
  documentId,
  title,
  content,
  category = 'CS_KNOWLEDGE',
  topic = '',
  subtopic = '',
  language = '',
  sourceType = 'INTERNAL_CURRICULUM',
  sourceName = 'CodeMentor',
  sourceUrl = '',
  targetChunkChars = 2400, // ~600 tokens
  overlapChars = 350       // ~90 tokens
}) {
  if (!content || typeof content !== 'string' || !content.trim()) {
    return [];
  }

  const normalizedContent = content.replace(/\r\n/g, '\n');
  const sections = splitByStructuralBoundaries(normalizedContent);

  const rawChunks = [];
  let currentChunk = '';
  let currentTokens = 0;

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];

    // If section alone is huge (e.g. giant code snippet), split by line boundaries
    if (section.length > targetChunkChars) {
      if (currentChunk.trim()) {
        rawChunks.push(currentChunk.trim());
        currentChunk = '';
      }
      const lineChunks = splitLargeSection(section, targetChunkChars, overlapChars);
      rawChunks.push(...lineChunks);
      continue;
    }

    if ((currentChunk.length + section.length) > targetChunkChars && currentChunk.length >= (targetChunkChars * 0.6)) {
      rawChunks.push(currentChunk.trim());
      // Create overlap from the end of the previous chunk
      const overlap = getTailOverlap(currentChunk, overlapChars);
      currentChunk = overlap + '\n\n' + section;
    } else {
      currentChunk = currentChunk ? `${currentChunk}\n\n${section}` : section;
    }
  }

  if (currentChunk.trim()) {
    rawChunks.push(currentChunk.trim());
  }

  // Deduplicate and filter out trivial chunks
  const validChunks = rawChunks.filter(c => c.length >= 60);

  // Build structured metadata for each chunk
  return validChunks.map((chunkText, index) => {
    // Extract heading if chunk starts with one
    const headingMatch = chunkText.match(/^(?:#+\s*|\*\*)([^\n\*]+)/);
    const chunkSubtopic = headingMatch ? headingMatch[1].trim() : (subtopic || topic || title);

    return {
      documentId,
      title: `${title} (Part ${index + 1})`,
      content: chunkText,
      category,
      topic: topic || title,
      subtopic: chunkSubtopic,
      language: language ? String(language).toLowerCase() : null,
      sourceType,
      sourceName,
      sourceUrl: sourceUrl || null,
      chunkIndex: index,
      metadata: {
        totalChunks: validChunks.length,
        charCount: chunkText.length,
        hasCode: chunkText.includes('```') || chunkText.includes('    '),
        updatedAt: new Date().toISOString()
      }
    };
  });
}

/**
 * Split text by major Markdown and logical boundaries (headings, code blocks, double newlines)
 */
function splitByStructuralBoundaries(text) {
  const blocks = [];
  const lines = text.split('\n');

  let currentBlock = [];
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track code block fences
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      currentBlock.push(line);
      if (!inCodeBlock) {
        // Closed a code block, keep it together
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
      continue;
    }

    if (inCodeBlock) {
      currentBlock.push(line);
      continue;
    }

    // Markdown heading breaks (e.g. ##, ###)
    if (/^#{1,4}\s+/.test(line)) {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
      currentBlock.push(line);
      continue;
    }

    // Paragraph breaks
    if (line.trim() === '' && currentBlock.length >= 6) {
      blocks.push(currentBlock.join('\n'));
      currentBlock = [];
      continue;
    }

    currentBlock.push(line);
  }

  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join('\n'));
  }

  return blocks.filter(b => b.trim().length > 0);
}

/**
 * Split an oversized section while preserving line breaks
 */
function splitLargeSection(section, targetSize, overlap) {
  const lines = section.split('\n');
  const chunks = [];
  let cur = '';

  for (const line of lines) {
    if ((cur.length + line.length) > targetSize && cur.length >= (targetSize * 0.5)) {
      chunks.push(cur.trim());
      const tail = cur.slice(-overlap);
      cur = tail + '\n' + line;
    } else {
      cur = cur ? `${cur}\n${line}` : line;
    }
  }

  if (cur.trim()) chunks.push(cur.trim());
  return chunks;
}

/**
 * Get trailing characters up to a clean boundary
 */
function getTailOverlap(text, overlapSize) {
  if (text.length <= overlapSize) return text;
  const tail = text.slice(-overlapSize);
  const firstSpace = tail.indexOf(' ');
  return firstSpace > 0 ? tail.slice(firstSpace + 1) : tail;
}


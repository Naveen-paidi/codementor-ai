/**
 * Document Ingestion & Curriculum Synchronization Pipeline
 * ---------------------------------------------------------
 * Manages knowledge ingestion for:
 * Collection A: CodeMentor Internal Curriculum (Python, Java, JS, C, C++, DSA, Platform Docs)
 * Collection B: External Curated Computer Science Documentation (DSA, OOP, OS, Networks, DBMS, System Design, Web)
 *
 * Features:
 * - SHA-256 hash deduplication to eliminate redundant embedding calls
 * - Semantic chunking with code block protection
 * - Batched embedding generation
 * - Dual persistence (Supabase pgvector + local knowledge store)
 */

import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { courses } from '../../curriculum/index.js';
import { chunkDocument } from './chunkingService.js';
import { getBatchEmbeddings } from './embeddingService.js';
import { vectorStore } from './vectorStore.js';
import { CURATED_CS_DOCUMENTS } from './data/curatedCsDocs.js';
import { PLATFORM_DOCUMENTS } from './data/platformDocs.js';

function computeHash(content) {
  return crypto.createHash('sha256').update(content || '').digest('hex');
}

export class DocumentIngestionService {
  /**
   * Ingest an arbitrary text or structured document into the knowledge base
   */
  static async ingestDocument({
    id = null,
    title,
    content,
    category = 'CS_KNOWLEDGE',
    topic = '',
    subtopic = '',
    language = null,
    sourceType = 'DOCUMENTATION',
    sourceName = 'CodeMentor',
    sourceUrl = null,
    version = '1.0',
    metadata = {}
  }) {
    const docId = id || uuidv4();
    const contentHash = computeHash(content);

    // Check if identical document is already indexed
    const existing = vectorStore.documents.get(docId);
    if (existing && existing.contentHash === contentHash && existing.chunkCount > 0) {
      return {
        documentId: docId,
        status: 'skipped',
        reason: 'Content unchanged (matching SHA-256 hash)',
        chunksCount: existing.chunkCount
      };
    }

    // 1. Chunk document semantically
    const rawChunks = chunkDocument({
      documentId: docId,
      title,
      content,
      category,
      topic,
      subtopic,
      language,
      sourceType,
      sourceName,
      sourceUrl
    });

    if (rawChunks.length === 0) {
      return { documentId: docId, status: 'empty', chunksCount: 0 };
    }

    // 2. Generate embeddings in batches
    const chunkTexts = rawChunks.map(c => `${c.title}\n${c.content}`);
    const embeddings = await getBatchEmbeddings(chunkTexts);

    // 3. Assemble chunk records with UUIDs
    const chunkRecords = rawChunks.map((chunk, idx) => ({
      id: uuidv4(),
      documentId: docId,
      title: chunk.title,
      content: chunk.content,
      embedding: embeddings[idx],
      category: chunk.category,
      topic: chunk.topic,
      subtopic: chunk.subtopic,
      language: chunk.language,
      sourceType: chunk.sourceType,
      sourceName: chunk.sourceName,
      sourceUrl: chunk.sourceUrl,
      chunkIndex: idx,
      metadata: chunk.metadata
    }));

    // 4. Save to vector store
    const docRecord = {
      id: docId,
      title,
      sourceType,
      sourceName,
      sourceUrl,
      category,
      topic,
      language,
      version,
      contentHash,
      metadata
    };

    await vectorStore.saveDocumentAndChunks(docRecord, chunkRecords);

    return {
      documentId: docId,
      status: 'ingested',
      chunksCount: chunkRecords.length
    };
  }

  /**
   * Synchronize all canonical CodeMentor courses & curricula into the knowledge base
   */
  static async syncCurriculum() {
    console.log('[Ingestion] Synchronizing CodeMentor course curricula...');
    let totalDocs = 0;
    let totalChunks = 0;

    for (const [langKey, course] of Object.entries(courses)) {
      const docId = `codementor-curriculum-${langKey}`;
      let fullContent = `# ${course.title} Curriculum\n\n${course.description}\n\n`;

      for (const level of course.levels || []) {
        fullContent += `## Level: ${level.title} (${level.difficulty})\n${level.description || ''}\n\n`;

        for (const module of level.modules || []) {
          fullContent += `### Module: ${module.title}\n${module.description || ''}\n\n`;

          for (const topic of module.topics || []) {
            fullContent += `#### Topic: ${topic.title}\n${topic.summary || ''}\n`;
            if (topic.codingProblem) {
              fullContent += `Problem Practice: ${topic.codingProblem.title}\n${topic.codingProblem.problem_statement || ''}\n`;
            }
            fullContent += '\n';
          }
        }
      }

      const res = await this.ingestDocument({
        id: docId,
        title: `CodeMentor ${course.title} Comprehensive Curriculum`,
        content: fullContent,
        category: 'PLATFORM_INFORMATION',
        topic: course.title,
        subtopic: 'Curriculum & Modules',
        language: langKey,
        sourceType: 'INTERNAL_CURRICULUM',
        sourceName: 'CodeMentor Learning Platform',
        sourceUrl: `/courses/${langKey}`,
        version: '1.0'
      });

      totalDocs++;
      totalChunks += res.chunksCount || 0;
    }

    return { totalCoursesSynced: totalDocs, totalChunks };
  }

  /**
   * Ingest CodeMentor platform documentation and FAQs
   */
  static async syncPlatformDocs() {
    console.log('[Ingestion] Ingesting CodeMentor platform guides...');
    let count = 0;
    for (const doc of PLATFORM_DOCUMENTS) {
      await this.ingestDocument(doc);
      count++;
    }
    return { count };
  }

  /**
   * Ingest curated external CS knowledge collection
   */
  static async syncCuratedCSKnowledge() {
    console.log('[Ingestion] Ingesting trusted Computer Science knowledge base...');
    let count = 0;
    for (const doc of CURATED_CS_DOCUMENTS) {
      await this.ingestDocument(doc);
      count++;
    }
    return { count };
  }

  /**
   * Master initialization: Ingests all collections on startup if store is empty
   */
  static async initializeKnowledgeBase(forceReindex = false) {
    const existingCount = vectorStore.getAllDocuments().length;
    if (existingCount > 0 && !forceReindex) {
      console.log(`[Ingestion] Knowledge base already initialized (${existingCount} documents, ${vectorStore.getAllChunks().length} chunks).`);
      return { status: 'already_initialized', documentCount: existingCount };
    }

    console.log('[Ingestion] Initializing CodeMentor Hybrid RAG Knowledge Base...');
    const t0 = Date.now();

    await this.syncPlatformDocs();
    await this.syncCurriculum();
    await this.syncCuratedCSKnowledge();

    const elapsed = Date.now() - t0;
    console.log(`[Ingestion] Knowledge Base initialized successfully in ${elapsed} ms. Total documents: ${vectorStore.getAllDocuments().length}, chunks: ${vectorStore.getAllChunks().length}`);

    return {
      status: 'completed',
      durationMs: elapsed,
      totalDocuments: vectorStore.getAllDocuments().length,
      totalChunks: vectorStore.getAllChunks().length
    };
  }
}


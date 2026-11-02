-- ============================================================================
-- Migration 004: CodeMentor Hybrid RAG + pgvector Knowledge Base
-- Provides storage for chunked document knowledge, 1536-dim vector embeddings,
-- PostgreSQL full-text search, and hybrid similarity matching functions.
-- ============================================================================

-- 1. Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Knowledge Documents Table (Parent documents / collections)
CREATE TABLE IF NOT EXISTS public.knowledge_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    source_type VARCHAR(50) NOT NULL DEFAULT 'INTERNAL_CURRICULUM', -- 'INTERNAL_CURRICULUM', 'OFFICIAL_DOCUMENTATION', 'TEXTBOOK_REFERENCE', 'SYSTEM_SPEC'
    source_name VARCHAR(150) NOT NULL,
    source_url TEXT,
    category VARCHAR(60) NOT NULL DEFAULT 'CS_KNOWLEDGE', -- 'CS_KNOWLEDGE', 'PROGRAMMING', 'PLATFORM_INFORMATION', 'INTERVIEW_PREP'
    topic VARCHAR(100),
    language VARCHAR(30),
    status VARCHAR(30) NOT NULL DEFAULT 'active', -- 'active', 'archived', 'processing', 'error'
    version VARCHAR(20) NOT NULL DEFAULT '1.0',
    content_hash VARCHAR(64),
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_kdocs_category ON public.knowledge_documents(category);
CREATE INDEX IF NOT EXISTS idx_kdocs_language ON public.knowledge_documents(language);
CREATE INDEX IF NOT EXISTS idx_kdocs_status ON public.knowledge_documents(status);
CREATE INDEX IF NOT EXISTS idx_kdocs_hash ON public.knowledge_documents(content_hash);

-- 3. Knowledge Chunks Table (Semantic structure-aware chunked text + embeddings)
CREATE TABLE IF NOT EXISTS public.knowledge_chunks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID NOT NULL REFERENCES public.knowledge_documents(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    embedding vector(1536), -- text-embedding-3-small (1536 dim)
    category VARCHAR(60) NOT NULL DEFAULT 'CS_KNOWLEDGE',
    topic VARCHAR(100),
    subtopic VARCHAR(100),
    language VARCHAR(30),
    source_type VARCHAR(50) NOT NULL DEFAULT 'INTERNAL_CURRICULUM',
    source_name VARCHAR(150) NOT NULL,
    source_url TEXT,
    chunk_index INT NOT NULL DEFAULT 0,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for Knowledge Chunks
CREATE INDEX IF NOT EXISTS idx_kchunks_doc_id ON public.knowledge_chunks(document_id);
CREATE INDEX IF NOT EXISTS idx_kchunks_category ON public.knowledge_chunks(category);
CREATE INDEX IF NOT EXISTS idx_kchunks_topic ON public.knowledge_chunks(topic);
CREATE INDEX IF NOT EXISTS idx_kchunks_language ON public.knowledge_chunks(language);

-- PostgreSQL Full-Text Search GIN Index
CREATE INDEX IF NOT EXISTS idx_kchunks_fts 
ON public.knowledge_chunks 
USING gin(to_tsvector('english', title || ' ' || content));

-- Vector Cosine Similarity Index (IVFFLAT)
CREATE INDEX IF NOT EXISTS idx_kchunks_vector_cosine 
ON public.knowledge_chunks 
USING ivfflat (embedding vector_cosine_ops) 
WITH (lists = 100);

-- 4. Ingestion Jobs Table (Tracks ingestion runs and status)
CREATE TABLE IF NOT EXISTS public.ingestion_jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id UUID REFERENCES public.knowledge_documents(id) ON DELETE SET NULL,
    job_type VARCHAR(50) NOT NULL DEFAULT 'INGEST', -- 'INGEST', 'REINDEX', 'SYNC_CURRICULUM'
    status VARCHAR(30) NOT NULL DEFAULT 'queued', -- 'queued', 'processing', 'completed', 'failed'
    processed_chunks INT DEFAULT 0,
    total_chunks INT DEFAULT 0,
    error_message TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_ingest_status ON public.ingestion_jobs(status);
CREATE INDEX IF NOT EXISTS idx_ingest_created_at ON public.ingestion_jobs(created_at DESC);

-- 5. Retrieval Logs Table (Optional telemetry for latency and precision evaluation)
CREATE TABLE IF NOT EXISTS public.retrieval_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    query_text TEXT NOT NULL,
    query_category VARCHAR(60),
    retrieved_chunk_ids UUID[],
    vector_score_avg FLOAT,
    keyword_score_avg FLOAT,
    retrieval_latency_ms INT,
    generation_latency_ms INT,
    total_latency_ms INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_retrieval_logs_created ON public.retrieval_logs(created_at DESC);

-- 6. Hybrid Search Function (Vector Similarity + Full-Text Keyword Match)
CREATE OR REPLACE FUNCTION match_knowledge_chunks (
    query_embedding vector(1536),
    query_text text,
    match_threshold float DEFAULT 0.35,
    match_count int DEFAULT 8,
    filter_category varchar(60) DEFAULT NULL,
    filter_language varchar(30) DEFAULT NULL,
    filter_topic varchar(100) DEFAULT NULL
)
RETURNS TABLE (
    id uuid,
    document_id uuid,
    title varchar(255),
    content text,
    category varchar(60),
    topic varchar(100),
    subtopic varchar(100),
    language varchar(30),
    source_name varchar(150),
    source_url text,
    source_type varchar(50),
    chunk_index int,
    similarity float,
    keyword_rank float
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        kc.id,
        kc.document_id,
        kc.title,
        kc.content,
        kc.category,
        kc.topic,
        kc.subtopic,
        kc.language,
        kc.source_name,
        kc.source_url,
        kc.source_type,
        kc.chunk_index,
        (1 - (kc.embedding <=> query_embedding))::float AS similarity,
        ts_rank_cd(to_tsvector('english', kc.title || ' ' || kc.content), websearch_to_tsquery('english', query_text))::float AS keyword_rank
    FROM public.knowledge_chunks kc
    WHERE (filter_category IS NULL OR kc.category = filter_category)
      AND (filter_language IS NULL OR kc.language = filter_language)
      AND (filter_topic IS NULL OR kc.topic ILIKE '%' || filter_topic || '%')
      AND (
          (1 - (kc.embedding <=> query_embedding)) > match_threshold
          OR
          to_tsvector('english', kc.title || ' ' || kc.content) @@ websearch_to_tsquery('english', query_text)
      )
    ORDER BY (
        (1 - (kc.embedding <=> query_embedding)) * 0.70 + 
        COALESCE(ts_rank_cd(to_tsvector('english', kc.title || ' ' || kc.content), websearch_to_tsquery('english', query_text)), 0) * 0.30
    ) DESC
    LIMIT match_count;
END;
$$;


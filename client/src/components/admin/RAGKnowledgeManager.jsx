import React, { useState, useEffect } from 'react';
import {
  Database,
  RefreshCw,
  Plus,
  Trash2,
  FileText,
  Layers,
  Search,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  X
} from 'lucide-react';
import Button from '../ui/Button.jsx';
import api from '../../services/api.js';

export const RAGKnowledgeManager = () => {
  const [documents, setDocuments] = useState([]);
  const [chunkCount, setChunkCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [languageFilter, setLanguageFilter] = useState('ALL');

  // Modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDoc, setNewDoc] = useState({
    title: '',
    content: '',
    category: 'CS_KNOWLEDGE',
    language: '',
    sourceName: '',
    sourceUrl: ''
  });

  const loadDocuments = async () => {
    setLoading(true);
    try {
      const res = await api.getRagDocuments();
      if (res.success) {
        setDocuments(res.documents || []);
        setChunkCount(res.chunkCount || 0);
      }
    } catch (err) {
      console.error('Error loading RAG documents:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const handleSyncCurriculum = async () => {
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.syncCurriculumRag();
      if (res.success) {
        setNotification({
          type: 'success',
          message: `Curriculum synchronized successfully! ${res.syncedCoursesCount} tracks and ${res.totalChunksCount} topic chunks indexed.`
        });
        loadDocuments();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to sync curriculum.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleReindex = async () => {
    if (!confirm('Reindexing all documents will re-compute embeddings for all chunks. Continue?')) return;
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.reindexRag();
      if (res.success) {
        setNotification({ type: 'success', message: `Knowledge base reindexed (${res.totalChunks} chunks processed).` });
        loadDocuments();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to reindex.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (docId) => {
    if (!confirm('Are you sure you want to delete this document and all its indexed chunks?')) return;
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.deleteRagDocument(docId);
      if (res.success) {
        setNotification({ type: 'success', message: 'Document and semantic chunks deleted.' });
        loadDocuments();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to delete.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!newDoc.title || !newDoc.content) return;
    setActionLoading(true);
    setNotification(null);
    try {
      const res = await api.ingestRagDocument(newDoc);
      if (res.success) {
        setNotification({
          type: 'success',
          message: `Document "${newDoc.title}" ingested successfully (${res.chunksCount} chunks generated).`
        });
        setShowAddModal(false);
        setNewDoc({ title: '', content: '', category: 'CS_KNOWLEDGE', language: '', sourceName: '', sourceUrl: '' });
        loadDocuments();
      } else {
        setNotification({ type: 'error', message: res.error || 'Failed to ingest document.' });
      }
    } catch (err) {
      setNotification({ type: 'error', message: err.message });
    } finally {
      setActionLoading(false);
    }
  };

  // Filtered documents list
  const filteredDocs = documents.filter((doc) => {
    if (categoryFilter !== 'ALL' && doc.category !== categoryFilter) return false;
    if (languageFilter !== 'ALL') {
      const docLang = (doc.language || '').toLowerCase();
      if (docLang !== languageFilter.toLowerCase()) return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = (doc.title || '').toLowerCase().includes(q);
      const matchSource = (doc.sourceName || '').toLowerCase().includes(q);
      const matchTopic = (doc.topic || '').toLowerCase().includes(q);
      if (!matchTitle && !matchSource && !matchTopic) return false;
    }
    return true;
  });

  return (
    <div className="bg-white dark:bg-[#0E1433] rounded-3xl border border-[#E5E1F0] dark:border-white/10 p-6 space-y-6 shadow-xs select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-[#171725] dark:text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            RAG Knowledge Base & pgvector Store
          </h2>
          <p className="text-xs text-[#64748B] dark:text-slate-400">
            Manage curated Computer Science references, internal course curricula, and hybrid search vector chunks.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Button
            size="sm"
            variant="outline"
            onClick={handleSyncCurriculum}
            disabled={actionLoading}
            isLoading={actionLoading}
            className="text-xs font-bold"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1" /> Sync Curriculum
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleReindex}
            disabled={actionLoading}
            className="text-xs font-bold"
          >
            <Layers className="w-3.5 h-3.5 mr-1" /> Reindex All
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={() => setShowAddModal(true)}
            className="text-xs font-bold"
          >
            <Plus className="w-3.5 h-3.5 mr-1" /> Add Document
          </Button>
        </div>
      </div>

      {notification && (
        <div
          className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-medium ${
            notification.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
              : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300'
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === 'success' ? (
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-500" />
            )}
            <span>{notification.message}</span>
          </div>
          <button onClick={() => setNotification(null)} className="font-bold hover:underline cursor-pointer">
            Dismiss
          </button>
        </div>
      )}

      {/* Diagnostics / Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 space-y-1">
          <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Indexed Documents</div>
          <div className="text-2xl font-black text-[#171725] dark:text-white">{documents.length}</div>
          <div className="text-[10px] text-indigo-600 dark:text-cyan-400 font-medium">Internal & External CS</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 space-y-1">
          <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Semantic Chunks</div>
          <div className="text-2xl font-black text-[#171725] dark:text-white">{chunkCount}</div>
          <div className="text-[10px] text-indigo-600 dark:text-cyan-400 font-medium">~600 Tokens (Code preserved)</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 space-y-1">
          <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Embedding Model</div>
          <div className="text-xs font-bold text-[#171725] dark:text-white truncate">text-embedding-3-small</div>
          <div className="text-[10px] text-indigo-600 dark:text-cyan-400 font-medium">1536 Vector Dimensions</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 space-y-1">
          <div className="text-[10px] text-[#64748B] dark:text-slate-400 font-bold uppercase">Search Pipeline</div>
          <div className="text-xs font-bold text-[#171725] dark:text-white">Hybrid RRF (k=60)</div>
          <div className="text-[10px] text-indigo-600 dark:text-cyan-400 font-medium">Vector + Full-Text Search</div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B] dark:text-slate-400" />
          <input
            type="text"
            placeholder="Search documents by title, topic, or source..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white placeholder-[#64748B] dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
          >
            <option value="ALL">All Categories</option>
            <option value="CS_KNOWLEDGE">Computer Science</option>
            <option value="PROGRAMMING">Programming</option>
            <option value="PLATFORM_INFORMATION">Platform Docs</option>
            <option value="CAREER_GUIDANCE">Career Guidance</option>
          </select>

          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#171725] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
          >
            <option value="ALL">All Languages</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
          </select>
        </div>
      </div>

      {/* Documents Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#F7F5FC] dark:bg-[#10152E] border-y border-[#E5E1F0] dark:border-white/10 text-[#64748B] dark:text-slate-400 font-semibold uppercase text-[10px]">
            <tr>
              <th className="py-3 px-4">Document Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Language</th>
              <th className="py-3 px-4">Source</th>
              <th className="py-3 px-4 text-center">Chunks</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E1F0] dark:divide-white/10">
            {loading ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-[#64748B] dark:text-slate-400">
                  Loading knowledge base records...
                </td>
              </tr>
            ) : filteredDocs.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-[#64748B] dark:text-slate-400">
                  No matching knowledge documents found.
                </td>
              </tr>
            ) : (
              filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-[#F7F5FC]/80 dark:hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-semibold text-[#172B3A] dark:text-white">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0" />
                      <div>
                        <div>{doc.title}</div>
                        {doc.sourceUrl && (
                          <a
                            href={doc.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] text-indigo-600 dark:text-cyan-400 hover:underline flex items-center gap-1 mt-0.5"
                          >
                            <span>{doc.sourceUrl}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-purple-50 dark:bg-cyan-950/40 text-indigo-700 dark:text-cyan-300 border border-purple-200 dark:border-cyan-500/30 uppercase">
                      {doc.category || 'CS_KNOWLEDGE'}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono uppercase text-[#64748B] dark:text-slate-400">
                    {doc.language || 'Any'}
                  </td>
                  <td className="py-3 px-4 text-[#64748B] dark:text-slate-400 text-[11px]">
                    {doc.sourceName || 'CodeMentor'}
                  </td>
                  <td className="py-3 px-4 text-center font-bold text-[#172B3A] dark:text-white">
                    {doc.chunkCount || 1}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleDelete(doc.id)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-lg transition-colors cursor-pointer"
                      title="Delete document and chunks"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Document Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
          <form
            onSubmit={handleAddSubmit}
            className="bg-white dark:bg-[#0E1433] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#E5E1F0] dark:border-white/10 space-y-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#172B3A] dark:text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                Add Knowledge Document
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="w-7 h-7 rounded-full bg-[#F7F5FC] dark:bg-[#10152E] flex items-center justify-center text-[#172B3A] dark:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Document Title *</label>
              <input
                type="text"
                required
                placeholder="e.g., PostgreSQL Query Execution & Indexing"
                value={newDoc.title}
                onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#172B3A] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Category</label>
                <select
                  value={newDoc.category}
                  onChange={(e) => setNewDoc({ ...newDoc, category: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#172B3A] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                >
                  <option value="CS_KNOWLEDGE">Computer Science</option>
                  <option value="PROGRAMMING">Programming</option>
                  <option value="PLATFORM_INFORMATION">Platform Information</option>
                  <option value="CAREER_GUIDANCE">Career Guidance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Language (optional)</label>
                <input
                  type="text"
                  placeholder="e.g., java, python, sql"
                  value={newDoc.language}
                  onChange={(e) => setNewDoc({ ...newDoc, language: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#172B3A] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Source Name</label>
                <input
                  type="text"
                  placeholder="e.g., Official PostgreSQL Docs"
                  value={newDoc.sourceName}
                  onChange={(e) => setNewDoc({ ...newDoc, sourceName: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#172B3A] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">Source URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={newDoc.sourceUrl}
                  onChange={(e) => setNewDoc({ ...newDoc, sourceUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#172B3A] dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#172B3A] dark:text-slate-200 mb-1">
                Document Content (Markdown / Code / Text) *
              </label>
              <textarea
                required
                rows={8}
                placeholder="Paste technical explanations, code examples, API references, or curriculum specifications..."
                value={newDoc.content}
                onChange={(e) => setNewDoc({ ...newDoc, content: e.target.value })}
                className="w-full px-3 py-2 bg-[#F7F5FC] dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 rounded-xl text-xs text-[#172B3A] dark:text-white font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:focus:ring-cyan-400"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setShowAddModal(false)}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" size="sm" isLoading={actionLoading} className="font-bold">
                Ingest & Chunk
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RAGKnowledgeManager;

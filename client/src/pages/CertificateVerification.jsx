import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import api from '../services/api.js';
import {
  ShieldCheck,
  ShieldAlert,
  Search,
  Award,
  CheckCircle2,
  Calendar,
  User,
  BookOpen,
  ArrowLeft,
  ExternalLink,
  Eye
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import CertificateViewer from '../components/certificates/CertificateViewer.jsx';

export default function CertificateVerification() {
  const { certificateId } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const [searchId, setSearchId] = useState(certificateId || '');
  const [loading, setLoading] = useState(false);
  const [verifiedCert, setVerifiedCert] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const performVerification = async (idToVerify) => {
    if (!idToVerify || !idToVerify.trim()) return;
    setLoading(true);
    setErrorMsg(null);
    setVerifiedCert(null);

    try {
      const res = await api.verifyCertificate(idToVerify.trim());
      if (res.success && res.verified) {
        setVerifiedCert(res.certificate);
      } else {
        setErrorMsg(res.error || 'Certificate not found in official registry.');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Error communicating with credential registry.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (certificateId) {
      setSearchId(certificateId);
      performVerification(certificateId);
    }
  }, [certificateId]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchId.trim()) return;
    navigate(`/verify-certificate/${searchId.trim()}`);
    performVerification(searchId.trim());
  };

  return (
    <div className="min-h-screen bg-[#F7F5FC] dark:bg-[#070B20] text-[#171725] dark:text-slate-100 flex flex-col justify-between select-none">
      {/* Top Navbar */}
      <header className="border-b border-[#E5E1F0] dark:border-white/10 bg-white/80 dark:bg-[#0E1433]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md">
              CM
            </span>
            <span className="font-extrabold text-lg tracking-tight">CodeMentor</span>
          </Link>

          <Link
            to="/student/certificates"
            className="text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
          >
            Student Portal <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl w-full mx-auto px-4 py-12 space-y-8 flex-1">
        {/* Hero Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-cyan-500/10 border border-indigo-200 dark:border-cyan-500/20 text-indigo-700 dark:text-cyan-300 text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
            <span>Autonomous Credential Registry</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Verify CodeMentor Certificate
          </h1>

          <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Verify the authenticity and completion standards of specialization credentials issued by CodeMentor Academy.
          </p>
        </div>

        {/* Verification Search Form */}
        <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto">
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-white dark:bg-[#10152E] border border-[#E5E1F0] dark:border-white/10 shadow-lg focus-within:ring-2 focus-within:ring-indigo-500 dark:focus-within:ring-cyan-400">
            <Search className="w-5 h-5 text-[#64748B] dark:text-slate-400 ml-2 shrink-0" />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Certificate ID (e.g. CM-CERT-PYTHON-A8B9C0)..."
              className="w-full px-2 py-1.5 bg-transparent text-sm font-mono text-[#171725] dark:text-white placeholder-[#64748B] dark:placeholder-slate-500 focus:outline-none"
            />
            <Button
              type="submit"
              size="sm"
              variant="primary"
              isLoading={loading}
              className="shrink-0 font-bold px-4"
            >
              Verify
            </Button>
          </div>
        </form>

        {/* Verification Result Card */}
        {verifiedCert ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#10152E] border border-emerald-300/80 dark:border-emerald-500/40 shadow-xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
            {/* Status Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E1F0] dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Official Verification Result
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#171725] dark:text-white">
                    Valid & Authentic Credential
                  </h2>
                </div>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowModal(true)}
                leftIcon={<Eye className="w-4 h-4" />}
                className="font-bold text-xs shrink-0"
              >
                Inspect Certificate
              </Button>
            </div>

            {/* Credential Data Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#F7F5FC] dark:bg-[#070B20] border border-[#E5E1F0] dark:border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[#64748B] dark:text-slate-400">
                  <User className="w-3.5 h-3.5" />
                  <span className="font-semibold uppercase tracking-wider text-[10px]">Recipient</span>
                </div>
                <div className="text-sm font-bold text-[#171725] dark:text-white">
                  {verifiedCert.student_name}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F5FC] dark:bg-[#070B20] border border-[#E5E1F0] dark:border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[#64748B] dark:text-slate-400">
                  <Award className="w-3.5 h-3.5" />
                  <span className="font-semibold uppercase tracking-wider text-[10px]">Course Track</span>
                </div>
                <div className="text-sm font-bold text-indigo-700 dark:text-cyan-300">
                  {verifiedCert.course_title}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F5FC] dark:bg-[#070B20] border border-[#E5E1F0] dark:border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[#64748B] dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-semibold uppercase tracking-wider text-[10px]">Date Issued</span>
                </div>
                <div className="text-sm font-bold text-[#171725] dark:text-white">
                  {new Date(verifiedCert.issued_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F5FC] dark:bg-[#070B20] border border-[#E5E1F0] dark:border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[#64748B] dark:text-slate-400">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="font-semibold uppercase tracking-wider text-[10px]">Credential Registry ID</span>
                </div>
                <div className="text-sm font-mono font-bold text-[#171725] dark:text-white select-all">
                  {verifiedCert.id}
                </div>
              </div>
            </div>

            {/* Verification Footer Notes */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-300 space-y-1 leading-relaxed">
              <div className="font-bold">Credential Verification Integrity</div>
              <p className="text-[11px] opacity-90">
                This credential was authenticated directly against the immutable CodeMentor database. The recipient has fulfilled 100% of the structured topics, conceptual assessments, and coding evaluations.
              </p>
            </div>
          </div>
        ) : errorMsg ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#10152E] border border-rose-300/80 dark:border-rose-500/40 shadow-xl space-y-4 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-500/40 flex items-center justify-center text-rose-600 dark:text-rose-400 mx-auto">
              <ShieldAlert className="w-7 h-7" />
            </div>

            <h2 className="text-xl font-bold text-rose-700 dark:text-rose-400">
              Credential Could Not Be Verified
            </h2>

            <p className="text-xs text-[#64748B] dark:text-slate-400 max-w-md mx-auto">
              {errorMsg}
            </p>

            <div className="text-[11px] text-[#64748B] dark:text-slate-500">
              Please double check the Certificate ID or contact the credential holder for a valid link.
            </div>
          </div>
        ) : null}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E5E1F0] dark:border-white/10 py-6 text-center text-xs text-[#64748B] dark:text-slate-500">
        © {new Date().getFullYear()} CodeMentor Academy. All official credentials protected by cryptographically verifiable identifiers.
      </footer>

      {/* Modal Preview */}
      {showModal && verifiedCert && (
        <CertificateViewer
          certificate={verifiedCert}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}


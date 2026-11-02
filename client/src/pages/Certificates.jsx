import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import api from '../services/api.js';
import {
  Award,
  CheckCircle2,
  Lock,
  ExternalLink,
  Download,
  Eye,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import CertificateViewer from '../components/certificates/CertificateViewer.jsx';

export default function Certificates() {
  const { user } = useAuth();
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [claimingCourse, setClaimingCourse] = useState(null);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const loadCertificates = async () => {
    setLoading(true);
    try {
      const res = await api.getMyCertificates();
      if (res.success) {
        setTracks(res.tracks || []);
      }
    } catch (err) {
      console.error('Error loading certificates:', err);
      setErrorMsg('Failed to fetch certificate status. Please verify server connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCertificates();
  }, []);

  const handleClaim = async (courseId) => {
    setClaimingCourse(courseId);
    setErrorMsg(null);
    setSuccessMsg(null);
    try {
      const res = await api.claimCertificate(courseId);
      if (res.success) {
        setSuccessMsg(`Congratulations! Your ${res.certificate.course_title} certificate has been issued!`);
        setActiveCertificate(res.certificate);
        loadCertificates();
      } else {
        setErrorMsg(res.error || 'Failed to claim certificate.');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Error claiming certificate.');
    } finally {
      setClaimingCourse(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16 select-none">
      {/* Header Banner */}
      <div
        className={`p-8 sm:p-10 rounded-3xl transition-all duration-300 relative overflow-hidden shadow-xl ${
          isDark
            ? 'bg-gradient-to-r from-[#030617] via-[#070B20] to-[#10152E] border border-cyan-500/30 text-white shadow-[0_0_35px_rgba(6,182,212,0.2)]'
            : 'bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 border border-indigo-400/30 text-white shadow-xl'
        }`}
      >
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold shadow-xs">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Verified Credentials</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            Specialization Certificates
          </h1>
          <p className="text-xs sm:text-sm text-purple-100 dark:text-cyan-100/80 leading-relaxed">
            Earn cryptographically verifiable credentials upon achieving 100% curriculum completion in each learning track. Each certificate includes an authentic registry verification ID and printable high-resolution export.
          </p>
        </div>
      </div>

      {/* Notifications */}
      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>{successMsg}</span>
          </div>
          <button onClick={() => setSuccessMsg(null)} className="font-bold underline cursor-pointer">
            Dismiss
          </button>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 text-rose-800 dark:text-rose-300 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-500" />
            <span>{errorMsg}</span>
          </div>
          <button onClick={() => setErrorMsg(null)} className="font-bold underline cursor-pointer">
            Dismiss
          </button>
        </div>
      )}

      {/* Track Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => {
          const isEligible = track.isEligible;
          const isClaimed = track.isClaimed;
          const cert = track.certificate;

          return (
            <div
              key={track.courseId}
              className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between border shadow-sm ${
                isClaimed
                  ? isDark
                    ? 'bg-[#10152E] border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                    : 'bg-gradient-to-b from-emerald-50/60 to-white border-emerald-200 shadow-md'
                  : isDark
                  ? 'bg-[#0E1433] border-white/10 hover:border-white/20'
                  : 'bg-white border-[#E5E1F0] hover:border-indigo-200 hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg shadow-inner ${
                      isClaimed
                        ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30'
                        : isEligible
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10'
                    }`}
                  >
                    <Award className="w-6 h-6" />
                  </div>

                  {isClaimed ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40 shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                      Issued
                    </span>
                  ) : isEligible ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40 animate-pulse">
                      <Sparkles className="w-3.5 h-3.5" />
                      Eligible to Claim
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                      <Lock className="w-3.5 h-3.5" />
                      {track.progressPercentage}%
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Requirements: Complete all {track.totalTopics} curriculum modules & challenges.
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-medium text-slate-600 dark:text-slate-300">
                    <span>Curriculum Progress</span>
                    <span className="font-bold">
                      {track.completedTopics} / {track.totalTopics} ({track.progressPercentage}%)
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 rounded-full ${
                        track.progressPercentage >= 100
                          ? 'bg-emerald-500'
                          : track.progressPercentage >= 50
                          ? 'bg-indigo-600 dark:bg-cyan-400'
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${Math.min(100, track.progressPercentage)}%` }}
                    />
                  </div>
                </div>

                {/* Credential ID tag if claimed */}
                {isClaimed && cert && (
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 space-y-1">
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      Credential ID
                    </div>
                    <div className="text-xs font-mono font-bold text-indigo-700 dark:text-cyan-300 select-all">
                      {cert.id}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
                {isClaimed && cert ? (
                  <div className="flex items-center gap-2 w-full">
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setActiveCertificate(cert)}
                      className="w-full text-xs font-bold"
                      leftIcon={<Eye className="w-3.5 h-3.5" />}
                    >
                      View & Print
                    </Button>
                    <button
                      onClick={() => navigate(`/verify-certificate/${cert.id}`)}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                      title="Public Verification"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                ) : isEligible ? (
                  <Button
                    size="sm"
                    variant="primary"
                    isLoading={claimingCourse === track.courseId}
                    onClick={() => handleClaim(track.courseId)}
                    className="w-full text-xs font-bold shadow-md bg-emerald-600 hover:bg-emerald-700"
                    leftIcon={<Award className="w-4 h-4" />}
                  >
                    Claim Certificate
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      navigate(
                        track.courseId === 'dsa'
                          ? '/student/dsa'
                          : `/student/curriculum/${track.courseId}`
                      )
                    }
                    className="w-full text-xs font-semibold"
                    leftIcon={<BookOpen className="w-3.5 h-3.5" />}
                  >
                    Continue Track
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Certificate Modal Viewer */}
      {activeCertificate && (
        <CertificateViewer
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      )}
    </div>
  );
}


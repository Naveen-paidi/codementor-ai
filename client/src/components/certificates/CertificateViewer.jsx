import React, { useRef, useState } from 'react';
import { Award, Download, Printer, X, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import Button from '../ui/Button.jsx';
import {
  downloadCertificatePdf,
  downloadCertificatePng,
  printCertificate
} from '../../utils/certificatePdfGenerator.js';

export default function CertificateViewer({ certificate, onClose }) {
  const [downloading, setDownloading] = useState(false);
  const certRef = useRef(null);

  if (!certificate) return null;

  const studentName = certificate.student_name || certificate.studentName || 'CodeMentor Scholar';
  const courseTitle = certificate.course_title || certificate.courseTitle || 'JavaScript Programming Specialist';
  const certId = certificate.id || 'CM-CERT-JAVASCRIPT-FUJEJ5';
  const formattedDate = new Date(certificate.issued_at || Date.now()).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const origin = (typeof window !== 'undefined' && window.location?.origin) || 'https://codementor.academy';
  const verifyUrl = `${origin}/verify-certificate/${certId}`;

  const handleDownloadPdf = async () => {
    try {
      setDownloading(true);
      await downloadCertificatePdf(certificate);
    } catch (err) {
      console.error('Failed to download certificate PDF:', err);
      alert('Error generating PDF certificate: ' + err.message);
    } finally {
      setDownloading(false);
    }
  };

  const handleDownloadPng = async () => {
    try {
      await downloadCertificatePng(certificate);
    } catch (err) {
      console.error('Failed to download certificate PNG:', err);
    }
  };

  const handlePrint = async () => {
    try {
      await printCertificate(certificate);
    } catch (err) {
      console.error('Failed to print certificate:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-auto space-y-4">
        {/* Modal Toolbar (hidden when printing) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-[#10152E] px-5 py-3 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg print:hidden">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
            <div>
              <span className="text-sm font-bold text-slate-800 dark:text-white block leading-tight">
                Official Credential Preview
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Single-Page A4 Landscape • Zero Margin
              </span>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <Button
              size="sm"
              variant="primary"
              onClick={handleDownloadPdf}
              isLoading={downloading}
              leftIcon={<Download className="w-4 h-4" />}
              className="text-xs font-bold bg-[#1E1B4B] hover:bg-[#2e2a72] text-white shadow-sm"
            >
              Download PDF (Single Page)
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={handleDownloadPng}
              leftIcon={<ImageIcon className="w-4 h-4" />}
              className="text-xs font-bold"
            >
              High-Res PNG
            </Button>

            <Button
              size="sm"
              variant="outline"
              onClick={handlePrint}
              leftIcon={<Printer className="w-4 h-4" />}
              className="text-xs font-bold"
            >
              Print / Save as PDF
            </Button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-700 dark:text-white transition-colors cursor-pointer ml-1"
              title="Close Preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Certificate Canvas (A4 Landscape 1.414:1 aspect ratio) */}
        <div
          ref={certRef}
          id="certificate-print-area"
          className="relative aspect-[1.414/1] w-full rounded-2xl bg-[#FCFAF6] text-[#1E1B4B] p-6 sm:p-10 border-8 border-double border-[#8B7355]/40 shadow-2xl flex flex-col justify-between overflow-hidden select-none"
        >
          {/* Subtle Watermark Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <Award className="w-[500px] h-[500px] text-slate-900" />
          </div>

          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#8B7355]" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#8B7355]" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#8B7355]" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#8B7355]" />

          {/* Header */}
          <div className="text-center space-y-1 relative z-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                CM
              </span>
              <span className="text-lg font-black tracking-wider text-[#1E1B4B] uppercase">
                CodeMentor Academy
              </span>
            </div>
            <p className="text-[11px] sm:text-xs tracking-[0.25em] text-[#8B7355] font-bold uppercase">
              Certificate of Specialization & Mastery
            </p>
          </div>

          {/* Main Body */}
          <div className="text-center space-y-4 my-auto relative z-10 px-4">
            <p className="text-xs sm:text-sm text-slate-500 font-serif italic">
              This is to officially certify that
            </p>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black text-[#1E1B4B] tracking-tight decoration-[#8B7355]/30">
              {studentName}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              has successfully achieved 100% curriculum completion and satisfied all comprehensive
              rigorous programming evaluations in the track:
            </p>

            <div className="inline-block py-2 px-6 rounded-full bg-indigo-50/80 border border-indigo-200/80 text-indigo-900 font-extrabold text-sm sm:text-lg shadow-xs">
              {courseTitle}
            </div>
          </div>

          {/* Footer: Date, Official Seal, Signatures & Verification */}
          <div className="relative z-10 pt-4 border-t border-[#8B7355]/20 flex items-end justify-between text-left">
            {/* Left: Issue Date & Credential ID */}
            <div className="space-y-1 text-xs">
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                Issued On
              </div>
              <div className="font-bold text-slate-800">{formattedDate}</div>
              <div className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 inline-block">
                ID: {certId}
              </div>
            </div>

            {/* Center: Official Gold Seal */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#997A15] via-[#E5C158] to-[#997A15] p-1 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-dashed border-[#5C4808] flex flex-col items-center justify-center text-center p-1 bg-gradient-to-b from-[#F7E7A6] to-[#D4AF37] text-[#4A3805]">
                  <ShieldCheck className="w-5 h-5 text-[#4A3805]" />
                  <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider mt-0.5">
                    VERIFIED
                  </span>
                  <span className="text-[6px] font-bold">CodeMentor</span>
                </div>
              </div>
            </div>

            {/* Right: Signature & Verification Link */}
            <div className="text-right space-y-1">
              <div className="font-serif italic font-bold text-base text-indigo-900 border-b border-slate-300 pb-0.5 inline-block">
                Academic Board of Directors
              </div>
              <div className="text-[10px] text-slate-500 font-medium">
                Autonomous Verification Authority
              </div>
              <div className="text-[9px] text-slate-400 font-mono">
                Verify: {verifyUrl}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

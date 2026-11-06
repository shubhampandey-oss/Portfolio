import React, { useState } from 'react';
import { Download, ExternalLink, FileText, AlertCircle } from 'lucide-react';

export interface ResumeSectionProps {
  pdfUrl?: string;
  className?: string;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  pdfUrl = './Shubham_Pandey_Resume.pdf',
  className = ''
}) => {
  const [fileError, setFileError] = useState(false);

  const handleLinkClick = async () => {
    try {
      const res = await fetch(pdfUrl, { method: 'HEAD' });
      if (!res.ok && res.status === 404) {
        setFileError(true);
      }
    } catch {
      // Allow default behavior if network check fails
    }
  };

  return (
    <section 
      id="resume" 
      className={`w-full py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24 ${className}`}
    >
      {/* Dark Glassmorphic Container */}
      <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 md:p-10 pb-12 md:pb-12 shadow-2xl relative overflow-hidden pointer-events-auto">
        {/* Subtle Ambient Glows */}
        <div className="absolute -top-24 -right-12 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-12 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Compact Recruiter-Friendly Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
          {/* Header Info */}
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 font-sans uppercase">
              SHUBHAM PANDEY — RESUME
            </h3>
            <p className="text-slate-400 text-sm md:text-base mt-2 leading-relaxed">
              Review comprehensive credentials covering Full-Stack Development, Deep Learning models, LLM routing pipelines, and academic milestones.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-400">
                PDF DOCUMENT
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-400">
                BATCH OF 2027
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-800 text-slate-400">
                UPDATED 2026
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            {/* Primary "VIEW MY RESUME ↗" button (opens in new tab) */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider"
              title="View Shubham Pandey Resume in a new browser tab"
            >
              <span>VIEW MY RESUME ↗</span>
            </a>

            {/* Separate "DOWNLOAD RESUME 📥" button */}
            <a
              href={pdfUrl}
              download="Shubham_Pandey_Resume.pdf"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-slate-950/80 border border-slate-700/70 hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider"
              title="Download Shubham Pandey Resume PDF"
            >
              <span>DOWNLOAD RESUME 📥</span>
            </a>
          </div>
        </div>

        {/* Missing PDF Fallback Notice */}
        {fileError && (
          <div className="mt-5 p-3.5 rounded-lg bg-red-950/40 border border-red-800/60 text-red-300 text-xs font-mono flex items-center gap-2.5 relative z-10">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>
              Resume document is temporarily unavailable. Please reach out to{' '}
              <a href="mailto:shubham2292pandey@gmail.com" className="underline text-red-200 hover:text-white">
                shubham2292pandey@gmail.com
              </a>{' '}
              for an immediate copy.
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;

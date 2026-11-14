import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ShieldCheck, CheckCircle2, ArrowUpRight, ExternalLink } from "lucide-react";
import { JOURNAL_ENTRIES } from "../data/portfolioData";

interface AllCredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AllCredentialsModal: React.FC<AllCredentialsModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/45 dark:bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-modal bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 sm:px-8 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/85 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#275CA6] dark:text-[#60A5FA] uppercase tracking-wider font-medium">
                  Professional Credentials
                </span>
                <span className="text-xs text-[hsl(var(--muted))]">· 4 Verified Accreditations</span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close credentials view"
                className="w-9 h-9 rounded-full bg-[hsl(var(--stroke))]/50 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto overscroll-contain p-6 sm:p-8 md:p-10 space-y-8">
              {/* Title Section */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-[hsl(var(--text))] tracking-tight">
                  All Credentials & Certifications
                </h2>
                <p className="text-sm sm:text-base text-[hsl(var(--muted))] mt-2 max-w-2xl">
                  Accredited qualifications held by Bishoy Meshreqy from Eduneers, Schneider Electric, EduVate, and HA Consulting Group, with direct Google Drive verification links.
                </p>
              </div>

              {/* Grid of all 4 credentials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {JOURNAL_ENTRIES.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 rounded-2xl bg-[hsl(var(--bg))]/70 hover:bg-white dark:hover:bg-[#1a2233] border border-[hsl(var(--stroke))] flex flex-col justify-between hover:border-[#275CA6]/40 dark:hover:border-[#60A5FA]/40 hover:shadow-md transition-all group"
                  >
                    <div>
                      {/* Top tag & badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono text-[#275CA6] dark:text-[#60A5FA] uppercase tracking-wider font-medium">
                          {cert.issuer} · {cert.date}
                        </span>
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/70">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{cert.badge || "Verified"}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-medium text-[hsl(var(--text))] group-hover:text-[#275CA6] dark:group-hover:text-[#60A5FA] transition-colors mb-2">
                        {cert.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-[hsl(var(--muted))] leading-relaxed mb-4">
                        {cert.excerpt}
                      </p>

                      {/* Competencies */}
                      <div className="space-y-1.5 mb-5 text-xs text-[hsl(var(--text))]/80 pl-2 border-l border-[hsl(var(--stroke))]">
                        {cert.content.map((point, i) => (
                          <p key={i} className="line-clamp-2">
                            • {point}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Bottom row: Drive Certificate Link */}
                    <div className="pt-4 border-t border-[hsl(var(--stroke))] flex items-center justify-between text-xs font-mono text-[hsl(var(--muted))]">
                      <span>Google Drive Certificate</span>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#275CA6] dark:text-[#60A5FA] hover:underline font-medium"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer actions */}
              <div className="pt-6 border-t border-[hsl(var(--stroke))] flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="https://www.linkedin.com/in/bishoy-meshreqy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 inline-flex shadow-sm"
                >
                  <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--surface))] text-xs sm:text-sm text-[hsl(var(--text))] font-medium">
                    <span>Verify Credentials on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#275CA6] dark:text-[#60A5FA]" />
                  </span>
                </a>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

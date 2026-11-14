import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Copy, Check, Briefcase, GraduationCap, Award, Code2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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

  const copyResumeSummary = () => {
    const text = `Bishoy Meshreqy — Electrical Technical Office & BIM Engineer
BishoyMagdy.30@hotmail.com
Electrical Technical Office & BIM Engineer with hands-on experience across commercial, residential, educational, hospitality, and institutional projects in Egypt and Saudi Arabia. Skilled in electrical design, shop drawings, and BIM coordination using AutoCAD, Revit, and Navisworks, with a strong focus on delivering precise, code-compliant documentation.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/45 dark:bg-black/75 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-modal bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/85 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#275CA6] dark:text-[#60A5FA] uppercase tracking-wider font-medium">
                  Curriculum Vitae
                </span>
                <span className="text-xs text-[hsl(var(--muted))]">· 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyResumeSummary}
                  className="px-3 py-1.5 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] hover:border-[#275CA6]/40 text-xs text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close resume"
                  className="w-8 h-8 rounded-full bg-[hsl(var(--stroke))]/50 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable CV body */}
            <div className="overflow-y-auto overscroll-contain p-6 sm:p-10 space-y-10">
              {/* Profile Bio */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-display italic text-[hsl(var(--text))] tracking-tight">
                  Bishoy Meshreqy
                </h2>
                <p className="text-sm sm:text-base text-[#275CA6] dark:text-[#60A5FA] font-mono mt-1 font-medium">
                  Electrical Design · Technical Office · BIM Engineer
                </p>
                <p className="mt-4 text-xs sm:text-sm text-[hsl(var(--muted))] leading-relaxed max-w-xl">
                  Electrical Technical Office & BIM Engineer with hands-on experience across commercial, residential, educational, hospitality, and institutional projects in Egypt and Saudi Arabia. Skilled in electrical design, shop drawings, and BIM coordination using AutoCAD, Revit, and Navisworks, with a strong focus on delivering precise, code-compliant documentation.
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#275CA6] dark:text-[#60A5FA] border-b border-[hsl(var(--stroke))] pb-2 font-medium">
                  <Briefcase className="w-4 h-4" />
                  <span>Selected Experience</span>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h4 className="text-base font-medium text-[hsl(var(--text))]">
                        Electrical Technical Office Engineer
                      </h4>
                      <p className="text-xs text-[hsl(var(--muted))]">
                        Arabian Construction House · Riyadh
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[hsl(var(--muted))] sm:text-right">
                      Sep,2025 — Present
                    </span>
                  </div>
                  <p className="text-xs text-[hsl(var(--muted))] leading-relaxed pl-3 border-l border-[hsl(var(--stroke))]">
                    Designed and prepared electrical shop drawings & as-built drawings and coordinated with the site and MEP teams.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-3">
                    <div>
                      <h4 className="text-base font-medium text-[hsl(var(--text))]">
                        Electrical Design Engineer
                      </h4>
                      <p className="text-xs text-[hsl(var(--muted))]">
                        Evolution for Engineering Consultancy · Cairo
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[hsl(var(--muted))] sm:text-right">
                      Jan,2025 — Sep,2025
                    </span>
                  </div>
                  <p className="text-xs text-[hsl(var(--muted))] leading-relaxed pl-3 border-l border-[hsl(var(--stroke))]">
                    Prepared electrical design drawings and coordinated with MEP teams.
                  </p>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#275CA6] dark:text-[#60A5FA] border-b border-[hsl(var(--stroke))] pb-2 font-medium">
                  <Code2 className="w-4 h-4" />
                  <span>Technical Software Programs</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[hsl(var(--bg))] border border-[hsl(var(--stroke))]">
                    <span className="font-semibold text-[hsl(var(--text))] block mb-2 font-mono uppercase text-[10px]">
                      BIM & Coordination Tools
                    </span>
                    <p className="text-[hsl(var(--muted))] leading-relaxed">
                      Revit & Navisworks & AutoCAD.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[hsl(var(--bg))] border border-[hsl(var(--stroke))]">
                    <span className="font-semibold text-[hsl(var(--text))] block mb-2 font-mono uppercase text-[10px]">
                      Electrical Design & Analysis
                    </span>
                    <p className="text-[hsl(var(--muted))] leading-relaxed">
                      DIALux Evo & ETAP & Ecodial & E-Design.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Courses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#275CA6] dark:text-[#60A5FA] mb-3 font-medium">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education</span>
                  </div>
                  <h5 className="text-sm font-medium text-[hsl(var(--text))]">
                    B.S. in Electrical Power & Machines
                  </h5>
                  <p className="text-xs text-[hsl(var(--muted))] mt-1">
                    El-Shorouk Academy, Cairo
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#275CA6] dark:text-[#60A5FA] mb-3 font-medium">
                    <Award className="w-4 h-4" />
                    <span>Courses</span>
                  </div>
                  <ul className="text-xs text-[hsl(var(--muted))] space-y-1">
                    <li>· Eduneers, BIM Diploma - Revit Track - Top 10    (2025)</li>
                    <li>· Schneider, KNX Building Automation System       (2023)</li>
                    <li>· EduVate, Professional Program - Excellent Grade (2022)</li>
                    <li>· HA Consulting Group, Automation Diploma         (2021)</li>
                  </ul>
                </div>
              </div>

              {/* Download CTA */}
              <div className="pt-6 border-t border-[hsl(var(--stroke))] flex items-center justify-between">
                <a
                  href="mailto:BishoyMagdy.30@hotmail.com?subject=Resume%20Inquiry"
                  className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 inline-flex shadow-sm"
                >
                  <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--surface))] text-xs sm:text-sm text-[hsl(var(--text))] font-medium">
                    <Download className="w-3.5 h-3.5 text-[#275CA6] dark:text-[#60A5FA]" />
                    <span>Request Full PDF Dossier</span>
                  </span>
                </a>

                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

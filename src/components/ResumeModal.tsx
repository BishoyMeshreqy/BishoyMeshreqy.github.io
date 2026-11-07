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
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/60 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#89AACC] uppercase tracking-wider">
                  Curriculum Vitae
                </span>
                <span className="text-xs text-[hsl(var(--muted))]">· 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyResumeSummary}
                  className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs text-[hsl(var(--muted))] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
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
                  className="w-8 h-8 rounded-full bg-[hsl(var(--stroke))]/40 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable CV body */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
              {/* Profile Bio */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-display italic text-white tracking-tight">
                  Bishoy Meshreqy
                </h2>
                <p className="text-sm sm:text-base text-[#89AACC] font-mono mt-1">
                  Electrical Design · Technical Office · BIM Engineer
                </p>
                <p className="mt-4 text-xs sm:text-sm text-[hsl(var(--muted))] leading-relaxed max-w-xl">
                  Electrical Technical Office & BIM Engineer with hands-on experience across commercial, residential, educational, hospitality, and institutional projects in Egypt and Saudi Arabia. Skilled in electrical design, shop drawings, and BIM coordination using AutoCAD, Revit, and Navisworks, with a strong focus on delivering precise, code-compliant documentation.
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89AACC] border-b border-[hsl(var(--stroke))] pb-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Selected Experience</span>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h4 className="text-base font-medium text-white">
                        Principal Design Engineer & Director
                      </h4>
                      <p className="text-xs text-[hsl(var(--muted))]">
                        Apex Spatial Labs · Chicago
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[hsl(var(--muted))] sm:text-right">
                      2022 — Present
                    </span>
                  </div>
                  <p className="text-xs text-[hsl(var(--muted))] leading-relaxed pl-3 border-l border-[hsl(var(--stroke))]">
                    Directing architecture and real-time graphics for spatial telepresence tools and automotive cockpits.
                    Supervising a team of 14 hybrid designer-engineers.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-3">
                    <div>
                      <h4 className="text-base font-medium text-white">
                        Lead Creative Technologist
                      </h4>
                      <p className="text-xs text-[hsl(var(--muted))]">
                        Kinetic Systems · New York & Remote
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[hsl(var(--muted))] sm:text-right">
                      2018 — 2022
                    </span>
                  </div>
                  <p className="text-xs text-[hsl(var(--muted))] leading-relaxed pl-3 border-l border-[hsl(var(--stroke))]">
                    Architected low-latency WebGL telemetry platforms and algorithmic kinetic typography engines.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-3">
                    <div>
                      <h4 className="text-base font-medium text-white">
                        Senior Interactive Developer
                      </h4>
                      <p className="text-xs text-[hsl(var(--muted))]">
                        Studio Mono · San Francisco
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[hsl(var(--muted))] sm:text-right">
                      2013 — 2018
                    </span>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89AACC] border-b border-[hsl(var(--stroke))] pb-2">
                  <Code2 className="w-4 h-4" />
                  <span>Technical & Creative Stack</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-[hsl(var(--bg))]/50 border border-[hsl(var(--stroke))]">
                    <span className="font-semibold text-white block mb-2 font-mono uppercase text-[10px]">
                      Frontend & 3D
                    </span>
                    <p className="text-[hsl(var(--muted))] leading-relaxed">
                      React 19, TypeScript, WebGL, Three.js, GSAP, Framer Motion, Tailwind CSS, HLS Streaming, Canvas API.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[hsl(var(--bg))]/50 border border-[hsl(var(--stroke))]">
                    <span className="font-semibold text-white block mb-2 font-mono uppercase text-[10px]">
                      Design & Architecture
                    </span>
                    <p className="text-[hsl(var(--muted))] leading-relaxed">
                      Creative Direction, Design Systems, Typography, Motion Choreography, Sound Synthesis, Performance Profiling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Honors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89AACC] mb-3">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education</span>
                  </div>
                  <h5 className="text-sm font-medium text-white">
                    B.S. in Computer Science & Visual Studies
                  </h5>
                  <p className="text-xs text-[hsl(var(--muted))] mt-1">
                    Northwestern University, Magna Cum Laude
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#89AACC] mb-3">
                    <Award className="w-4 h-4" />
                    <span>Honors</span>
                  </div>
                  <ul className="text-xs text-[hsl(var(--muted))] space-y-1">
                    <li>· Awwwards Site of the Year Nominee (2025)</li>
                    <li>· TDC Typography Certificate of Excellence</li>
                    <li>· 6× FWA of the Day & Developer Awards</li>
                  </ul>
                </div>
              </div>

              {/* Download CTA */}
              <div className="pt-6 border-t border-[hsl(var(--stroke))] flex items-center justify-between">
                <a
                  href="mailto:BishoyMagdy.30@hotmail.com?subject=Resume%20Inquiry"
                  className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 inline-flex"
                >
                  <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--bg))] text-xs sm:text-sm text-white font-medium">
                    <Download className="w-3.5 h-3.5" />
                    <span>Request Full PDF Dossier</span>
                  </span>
                </a>

                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs text-[hsl(var(--muted))] hover:text-white"
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

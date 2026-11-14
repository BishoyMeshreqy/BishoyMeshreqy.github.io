import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Calendar, User, Tag, Sparkles } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
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
            className="relative w-full max-w-4xl max-h-modal bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Top Bar with Title & Close button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/85 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#275CA6] dark:text-[#60A5FA] uppercase tracking-wider font-medium">
                  {project.category}
                </span>
                <span className="text-xs text-[hsl(var(--muted))]">·</span>
                <span className="text-xs text-[hsl(var(--muted))]">{project.location}</span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-[hsl(var(--stroke))]/50 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto overscroll-contain p-6 sm:p-8 md:p-10 space-y-8">
              {/* Image Preview with subtle vignette */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100 dark:bg-slate-900 border border-[hsl(var(--stroke))]">
                <img
                  src={project.image}
                  alt={project.alt || project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-[hsl(var(--text))] tracking-tight mb-2">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-[hsl(var(--muted))] font-light">
                  {project.subtitle}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[hsl(var(--bg))] border border-[hsl(var(--stroke))] text-xs">
                <div>
                  <span className="text-[hsl(var(--muted))] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    Location
                  </span>
                  <span className="text-[hsl(var(--text))] font-medium">{project.location}</span>
                </div>
                <div>
                  <span className="text-[hsl(var(--muted))] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    Role
                  </span>
                  <span className="text-[hsl(var(--text))] font-medium">{project.role}</span>
                </div>
                <div>
                  <span className="text-[hsl(var(--muted))] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    Scope
                  </span>
                  <span className="text-[hsl(var(--text))] font-medium">{project.scopeOverlay}</span>
                </div>
                <div>
                  <span className="text-[hsl(var(--muted))] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    Deliverable
                  </span>
                  <span className="text-[#275CA6] dark:text-[#60A5FA] font-medium">{project.metrics || "BIM & Shop Drawings"}</span>
                </div>
              </div>

              {/* Deep Dive Text */}
              <div className="space-y-4 text-sm sm:text-base text-[hsl(var(--text))]/90 leading-relaxed">
                <p className="font-normal text-base sm:text-lg text-[hsl(var(--text))]">
                  {project.description}
                </p>
                <p className="text-[hsl(var(--muted))] leading-relaxed">
                  {project.detailedText}
                </p>
              </div>

              {/* Tech Stack list */}
              <div>
                <span className="text-xs font-mono uppercase text-[hsl(var(--muted))] tracking-widest block mb-3">
                  Technologies & Disciplines
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[hsl(var(--bg))] border border-[hsl(var(--stroke))] text-xs font-mono text-[hsl(var(--text))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[hsl(var(--stroke))] flex items-center justify-between">
                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 inline-flex shadow-sm"
                >
                  <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--surface))] text-xs sm:text-sm text-[hsl(var(--text))] font-medium">
                    <span>Visit Live Experience</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#275CA6] dark:text-[#60A5FA]" />
                  </span>
                </a>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-xs text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-colors cursor-pointer"
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

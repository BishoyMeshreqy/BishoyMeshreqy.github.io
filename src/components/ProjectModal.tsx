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
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Top Bar with Title & Close button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/50 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#89AACC] uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-xs text-[hsl(var(--muted))]">·</span>
                <span className="text-xs text-[hsl(var(--muted))]">{project.year}</span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full bg-[hsl(var(--stroke))]/40 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8">
              {/* Image Preview with Halftone & Badges */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-black/40 border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-white tracking-tight mb-2">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-[hsl(var(--muted))] font-light">
                  {project.subtitle}
                </p>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[hsl(var(--bg))]/60 border border-[hsl(var(--stroke))] text-xs">
                <div>
                  <span className="text-[hsl(var(--muted))] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    Client
                  </span>
                  <span className="text-white font-medium">{project.client}</span>
                </div>
                <div>
                  <span className="text-[hsl(var(--muted))] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    Role
                  </span>
                  <span className="text-white font-medium">{project.role}</span>
                </div>
                <div>
                  <span className="text-[hsl(var(--muted))] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    Year
                  </span>
                  <span className="text-white font-medium">{project.year}</span>
                </div>
                <div>
                  <span className="text-[hsl(var(--muted))] block mb-1 font-mono uppercase tracking-wider text-[10px]">
                    Impact
                  </span>
                  <span className="text-[#89AACC] font-medium">{project.metrics || "Design System"}</span>
                </div>
              </div>

              {/* Deep Dive Text */}
              <div className="space-y-4 text-sm sm:text-base text-[hsl(var(--text))]/90 leading-relaxed">
                <p className="font-light text-base sm:text-lg text-white">
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
                  className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 inline-flex"
                >
                  <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--bg))] text-xs sm:text-sm text-white font-medium">
                    <span>Visit Live Experience</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-transparent hover:bg-white/5 text-xs text-[hsl(var(--muted))] hover:text-white transition-colors"
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

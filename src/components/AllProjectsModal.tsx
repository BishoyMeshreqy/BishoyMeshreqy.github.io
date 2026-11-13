import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Project, PROJECTS } from "../data/portfolioData";

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const AllProjectsModal: React.FC<AllProjectsModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
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

  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const CATEGORIES = [
    "All",
    "Institutional",
    "Hospitality",
    "Residential",
    "Educational",
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

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
            className="absolute inset-0 bg-slate-900/45 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 sm:px-8 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/85 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#275CA6] uppercase tracking-wider font-medium">
                  Project Portfolio
                </span>
                <span className="text-xs text-[hsl(var(--muted))]">
                  · {filteredProjects.length} of {PROJECTS.length} Projects
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close projects view"
                className="w-9 h-9 rounded-full bg-[hsl(var(--stroke))]/50 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8">
              {/* Title Section */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-[hsl(var(--text))] tracking-tight">
                  All Projects & Engineering Works
                </h2>
                <p className="text-sm sm:text-base text-[hsl(var(--muted))] mt-2 max-w-2xl">
                  Institutional, hospitality, residential & educational projects across Egypt and Saudi Arabia.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-[hsl(var(--text))] text-white font-semibold shadow-sm"
                          : "bg-[hsl(var(--bg))] text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] border border-[hsl(var(--stroke))]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of all projects in one view */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(proj);
                    }}
                    className="p-5 sm:p-6 rounded-2xl bg-[hsl(var(--bg))]/70 hover:bg-white border border-[hsl(var(--stroke))] hover:border-[#275CA6]/40 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 mb-4 border border-[hsl(var(--stroke))]">
                        <img
                          src={proj.image}
                          alt={proj.alt || proj.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-sky-200 uppercase">
                          {proj.category}
                        </div>
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white">
                          {proj.location}
                        </div>
                      </div>

                      {/* Title & Scope */}
                      <div className="mb-2">
                        <h3 className="text-xl font-medium text-[hsl(var(--text))] group-hover:text-[#275CA6] transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-[hsl(var(--muted))] mt-0.5">
                          {proj.location} · {proj.scopeOverlay}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[hsl(var(--muted))] leading-relaxed line-clamp-3 mb-4">
                        {proj.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] text-[10px] font-mono text-[hsl(var(--text))]/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-3 border-t border-[hsl(var(--stroke))] flex items-center justify-between text-xs">
                      <span className="text-[#275CA6] font-mono text-[11px] font-medium">
                        {proj.metrics || "Engineering Excellence"}
                      </span>
                      <span className="text-[hsl(var(--text))] group-hover:text-[#275CA6] group-hover:translate-x-1 transition-all inline-flex items-center gap-1 font-medium">
                        <span>View Details</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-[hsl(var(--stroke))] flex items-center justify-between">
                <span className="text-xs text-[hsl(var(--muted))] font-mono">
                  Bishoy Meshreqy · Electrical Technical Office & BIM Engineer
                </span>
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

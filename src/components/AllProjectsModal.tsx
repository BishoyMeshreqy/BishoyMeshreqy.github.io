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
    "BIM Coordination",
    "Substations & Power",
    "Healthcare & Critical",
    "Low Current & Infrastructure",
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "BIM Coordination") return p.category.includes("BIM");
    if (selectedCategory === "Substations & Power")
      return (
        p.category.includes("Substation") ||
        p.category.includes("Power") ||
        p.category.includes("Industrial") ||
        p.category.includes("Mission Critical")
      );
    if (selectedCategory === "Healthcare & Critical")
      return p.category.includes("Healthcare") || p.category.includes("Critical");
    if (selectedCategory === "Low Current & Infrastructure")
      return (
        p.category.includes("Infrastructure") ||
        p.category.includes("Low Current") ||
        p.category.includes("Earthing") ||
        p.category.includes("Lighting")
      );
    return true;
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
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
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
            <div className="flex items-center justify-between px-6 py-4 sm:px-8 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/70 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#89AACC] uppercase tracking-wider">
                  Project Portfolio
                </span>
                <span className="text-xs text-[hsl(var(--muted))]">
                  · {filteredProjects.length} of {PROJECTS.length} Projects
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close projects view"
                className="w-9 h-9 rounded-full bg-[hsl(var(--stroke))]/40 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8">
              {/* Title Section */}
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-white tracking-tight">
                  All Projects & Engineering Works
                </h2>
                <p className="text-sm sm:text-base text-[hsl(var(--muted))] mt-2 max-w-2xl">
                  Comprehensive archive of engineering projects, electrical shop drawing sets, BIM coordination models, and technical documentation.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                        selectedCategory === cat
                          ? "bg-white text-black font-semibold shadow-md"
                          : "bg-[hsl(var(--bg))]/70 text-[hsl(var(--muted))] hover:text-white border border-[hsl(var(--stroke))]"
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
                    className="p-5 sm:p-6 rounded-2xl bg-[hsl(var(--bg))]/60 border border-[hsl(var(--stroke))] hover:border-white/20 transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black/40 mb-4 border border-white/5">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[hsl(var(--bg))]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#89AACC] uppercase">
                          {proj.category}
                        </div>
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[hsl(var(--bg))]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                          {proj.year}
                        </div>
                      </div>

                      {/* Title & Client */}
                      <div className="mb-2">
                        <h3 className="text-xl font-medium text-white group-hover:text-[#89AACC] transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-[hsl(var(--muted))] mt-0.5">
                          {proj.client} · {proj.role}
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
                    <div className="pt-3 border-t border-[hsl(var(--stroke))]/60 flex items-center justify-between text-xs">
                      <span className="text-[#89AACC] font-mono text-[11px]">
                        {proj.metrics || "Engineering Excellence"}
                      </span>
                      <span className="text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium">
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
                  className="px-5 py-2.5 text-xs text-[hsl(var(--muted))] hover:text-white transition-colors cursor-pointer"
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

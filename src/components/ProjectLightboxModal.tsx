import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { PROJECTS, ProjectItem } from "../data/portfolioData";

interface ProjectLightboxModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      const idx = PROJECTS.findIndex((p) => p.id === project.id);
      if (e.key === "ArrowRight" && idx !== -1) {
        onSelectProject(PROJECTS[(idx + 1) % PROJECTS.length]);
      }
      if (e.key === "ArrowLeft" && idx !== -1) {
        onSelectProject(PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose, onSelectProject]);

  if (!project) return null;

  const currentIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectProject(PROJECTS[(currentIdx - 1 + PROJECTS.length) % PROJECTS.length]);
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectProject(PROJECTS[(currentIdx + 1) % PROJECTS.length]);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[250] bg-[#0F172A]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0]"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-[#0F172A]/75 text-white hover:bg-[#1B4FD8] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative bg-[#0F172A] aspect-[16/10] w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3.5 left-3.5 text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/95 text-[#1B4FD8] shadow">
              {project.category}
            </span>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0F172A]/65 text-white hover:bg-[#1B4FD8] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0F172A]/65 text-white hover:bg-[#1B4FD8] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-[12px] font-semibold text-[#1B4FD8]">
                {project.scopeOverlay}
              </span>
              <span className="text-[12px] font-medium text-[#64748B] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#1B4FD8]" />
                {project.location}
              </span>
            </div>
            <h3 className="font-display text-[19px] sm:text-[21px] font-bold text-[#1A1F2E] mb-2">
              {project.title}
            </h3>
            <p className="text-[13.5px] text-[#64748B] leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

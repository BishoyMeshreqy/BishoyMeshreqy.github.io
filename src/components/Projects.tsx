import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ZoomIn } from "lucide-react";
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  ProjectCategory,
  ProjectItem,
} from "../data/portfolioData";

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 scroll-mt-20"
    >
      <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-[0.1em] mb-5 flex items-center gap-2.5">
        <span>Featured Projects</span>
        <span className="flex-1 h-px bg-[#334155]/70" />
      </div>

      <h2 className="font-display text-[22px] font-bold text-white mb-1.5 tracking-[-0.3px]">
        Selected engineering &amp; BIM work
      </h2>
      <p className="text-[13px] text-[#94A3B8] mb-6">
        Institutional, hospitality, residential &amp; educational projects across Egypt and Saudi Arabia
      </p>

      {/* Category Filter Buttons */}
      <div className="flex flex-nowrap sm:flex-wrap gap-2 mb-6 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
        {PROJECT_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 text-[12px] font-semibold px-4 py-2 rounded-lg border cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-[#1B4FD8] border-[#1B4FD8] text-white shadow-[0_4px_14px_rgba(27,79,216,0.35)]"
                  : "bg-white/[0.06] border-white/15 text-[#CBD5E1] hover:border-[#1B4FD8] hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {filteredProjects.map((project) => {
          const isFeaturedSpan = Boolean(project.featured && activeCategory === "All Projects");
          return (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              className={`group relative bg-white border border-[#E2E8F0] rounded-[14px] overflow-hidden shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.35)] cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#1B4FD8] ${
                isFeaturedSpan ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative bg-[#0F172A] overflow-hidden ${
                  isFeaturedSpan ? "h-[190px] md:h-[260px]" : "h-[190px]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                />

                <span className="absolute top-2.5 left-2.5 text-[10.5px] font-bold px-2.5 py-1 rounded-md bg-white/95 text-[#1B4FD8] tracking-[0.02em] shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                  {project.category}
                </span>

                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/0 via-[#0F172A]/20 to-[#0F172A]/80 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                  <span className="text-white text-[12px] font-semibold flex items-center gap-1.5 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="w-4 h-4" />
                    {project.scopeOverlay}
                  </span>
                </div>
              </div>

              <div className="px-[1.15rem] pt-[1.1rem] pb-[1.2rem]">
                <h3 className="text-[15px] font-bold text-[#1A1F2E] tracking-[-0.2px] mb-0.5 leading-snug">
                  {project.title}
                </h3>

                <div className="text-[12px] font-medium text-[#64748B] flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#1B4FD8] shrink-0" />
                  <span>{project.location}</span>
                </div>

                {project.featured && (
                  <p className="text-[12px] text-[#64748B] leading-[1.6] mt-2">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

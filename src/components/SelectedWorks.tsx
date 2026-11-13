import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { Project, PROJECTS } from "../data/portfolioData";

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
  onOpenAllProjects?: () => void;
}

export const SelectedWorks: React.FC<SelectedWorksProps> = ({
  onSelectProject,
  onOpenAllProjects,
}) => {
  const handleViewAll = () => {
    if (onOpenAllProjects) {
      onOpenAllProjects();
    } else {
      const el = document.getElementById("projects-grid");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="works" className="bg-[hsl(var(--bg))] py-16 md:py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[hsl(var(--stroke))]" />
              <span className="text-xs text-[hsl(var(--muted))] uppercase tracking-[0.3em] font-medium">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-[hsl(var(--text))] tracking-tight">
              Featured{" "}
              <span className="font-display italic font-normal">projects</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-[hsl(var(--muted))] max-w-lg">
              Institutional, hospitality, residential &amp; educational projects across Egypt and Saudi Arabia.
            </p>
          </div>

          {/* "View all work" button */}
          <div className="flex self-start md:self-auto">
            <button
              onClick={handleViewAll}
              className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 cursor-pointer shadow-sm"
            >
              <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(var(--surface))] text-xs sm:text-sm text-[hsl(var(--text))] font-medium border border-[hsl(var(--stroke))] group-hover:border-transparent transition-colors">
                <span>View all projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-[hsl(var(--muted))] group-hover:text-[hsl(var(--text))] group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Bento Grid: 7/5, 6/6, 4/4/4 */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => onSelectProject(project)}
              className={`${project.colSpan} group relative rounded-3xl overflow-hidden bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer min-h-[340px] md:min-h-[420px] flex flex-col justify-end`}
            >
              {/* Card Image */}
              <img
                src={project.image}
                alt={project.alt || project.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Measured dark scrim at bottom so card photography titles remain high-contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />

              {/* Card static footer info */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-xs text-slate-200 mb-1 font-mono uppercase tracking-wider">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-white">
                  {project.title}
                </h3>
              </div>

              {/* Hover Overlay: bright frosted architectural glass */}
              <div className="absolute inset-0 bg-[hsl(var(--surface))]/92 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8 z-20 text-center">
                <div className="relative p-[1.5px] rounded-full mb-4 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <span className="absolute -inset-[1px] rounded-full accent-gradient animate-gradient-shift" />
                  <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] text-xs md:text-sm text-[hsl(var(--text))] font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#275CA6]" />
                    <span>
                      View —{" "}
                      <span className="font-display italic font-normal text-[#275CA6]">
                        {project.title}
                      </span>
                    </span>
                  </span>
                </div>

                <p className="text-xs md:text-sm text-[hsl(var(--muted))] max-w-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags without pill badges (clean unboxed text) */}
                <div className="mt-4 flex flex-wrap justify-center items-center gap-2 text-[11px] text-[hsl(var(--muted))] font-mono">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={tag}>
                      {i > 0 && <span className="mr-2 text-slate-300">/</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

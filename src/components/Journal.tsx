import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { JournalEntry, JOURNAL_ENTRIES } from "../data/portfolioData";

interface JournalProps {
  onSelectArticle: (article: JournalEntry) => void;
  onOpenAll?: () => void;
}

export const Journal: React.FC<JournalProps> = ({
  onSelectArticle,
  onOpenAll,
}) => {
  const handleViewAll = () => {
    if (onOpenAll) {
      onOpenAll();
    } else {
      const el = document.getElementById("credentials-list");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="certifications" className="bg-[hsl(var(--bg))] py-16 md:py-24 relative">
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
                CERTIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-[hsl(var(--text))] tracking-tight">
              Professional{" "}
              <span className="font-display italic font-normal">credentials</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-[hsl(var(--muted))] max-w-lg">
              Accredited certifications in electrical systems design, Revit BIM coordination, AutoCAD, and code compliance.
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="self-start md:self-auto relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(var(--surface))] text-xs sm:text-sm text-[hsl(var(--text))] font-medium border border-white/10 group-hover:border-transparent transition-colors">
              <span>View credentials</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[hsl(var(--muted))] group-hover:text-[hsl(var(--text))] transition-transform duration-200" />
            </span>
          </button>
        </motion.div>

        {/* 4 Credentials displayed as horizontal pills */}
        <div id="credentials-list" className="flex flex-col gap-4">
          {JOURNAL_ENTRIES.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() => onSelectArticle(entry)}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:px-6 sm:py-4 bg-[hsl(var(--surface))]/30 hover:bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-[32px] sm:rounded-full transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                {/* Thumbnail Image */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-white/10 bg-[hsl(var(--surface))]">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title & Category */}
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-[hsl(var(--text))] group-hover:text-white transition-colors truncate">
                    {entry.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted))] mt-0.5">
                    <span className="font-mono text-[11px] text-[hsl(var(--muted))]">
                      {entry.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Read time, Date & Arrow */}
              <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pl-16 sm:pl-0">
                <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted))] font-mono">
                  <span>{entry.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{entry.date}</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-[hsl(var(--stroke))]/40 flex items-center justify-center text-[hsl(var(--muted))] group-hover:text-white group-hover:bg-[#4E85BF] transition-all duration-200 shrink-0">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
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
              Accredited certifications in Revit BIM, KNX building automation, electrical power engineering, and industrial automation.
            </p>
          </div>

          <button
            onClick={handleViewAll}
            className="self-start md:self-auto relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 cursor-pointer shadow-sm"
          >
            <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[hsl(var(--surface))] text-xs sm:text-sm text-[hsl(var(--text))] font-medium border border-[hsl(var(--stroke))] group-hover:border-transparent transition-colors">
              <span>View credentials</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[hsl(var(--muted))] group-hover:text-[hsl(var(--text))] transition-transform duration-200" />
            </span>
          </button>
        </motion.div>

        {/* 4 Certifications displayed as horizontal rows with direct Google Drive links */}
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
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:px-6 sm:py-4 bg-[hsl(var(--surface))] hover:bg-white dark:hover:bg-[#1a2233] border border-[hsl(var(--stroke))] hover:border-slate-300 dark:hover:border-slate-600 shadow-xs hover:shadow-md rounded-[32px] sm:rounded-full transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />

                {/* Title, Badge & Issuer */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-[hsl(var(--text))] group-hover:text-[#275CA6] dark:group-hover:text-[#60A5FA] transition-colors truncate">
                      {entry.title}
                    </h3>
                    {entry.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70 shrink-0">
                        {entry.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted))] mt-0.5">
                    <span className="font-mono text-[11px] text-[hsl(var(--muted))]">
                      {entry.issuer}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[11px] text-[hsl(var(--muted))]">
                      {entry.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Google Drive Link */}
              <div className="flex items-center justify-end gap-3 shrink-0 pl-8 sm:pl-0">
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[hsl(var(--bg))] hover:bg-[#275CA6] dark:hover:bg-[#3B82F6] border border-[hsl(var(--stroke))] hover:border-[#275CA6] dark:hover:border-[#3B82F6] text-xs font-medium text-[#275CA6] dark:text-[#60A5FA] hover:text-white transition-all duration-200 shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

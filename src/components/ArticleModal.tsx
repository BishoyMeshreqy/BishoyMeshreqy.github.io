import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ExternalLink } from "lucide-react";
import { JournalEntry } from "../data/portfolioData";

interface ArticleModalProps {
  article: JournalEntry | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (article) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/45 backdrop-blur-md"
          />

          <motion.article
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/85 backdrop-blur-md sticky top-0 z-20">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-xs font-medium text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Certifications</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close article"
                className="w-8 h-8 rounded-full bg-[hsl(var(--stroke))]/50 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Reading body */}
            <div className="overflow-y-auto p-6 sm:p-10 md:p-12 space-y-8">
              {/* Issuer, Date, Badge */}
              <div className="flex items-center gap-3 text-xs text-[hsl(var(--muted))] font-mono">
                <span className="text-[#275CA6] uppercase font-medium">{article.issuer}</span>
                <span>·</span>
                <span>{article.date}</span>
                {article.badge && (
                  <>
                    <span>·</span>
                    <span className="text-emerald-700 font-semibold">{article.badge}</span>
                  </>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-[hsl(var(--text))] leading-tight">
                {article.title}
              </h1>

              {/* Excerpt Lead */}
              <p className="text-base sm:text-lg text-[hsl(var(--text))]/90 font-light italic bg-[hsl(var(--bg))] border border-[hsl(var(--stroke))] rounded-2xl p-5 leading-relaxed">
                "{article.excerpt}"
              </p>

              {/* Paragraphs */}
              <div className="space-y-6 text-sm sm:text-base text-[hsl(var(--text))]/85 leading-relaxed font-normal">
                {article.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Footer with Google Drive certificate link */}
              <div className="pt-8 border-t border-[hsl(var(--stroke))] flex flex-wrap items-center justify-between gap-4 text-xs text-[hsl(var(--muted))]">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 inline-flex shadow-sm"
                >
                  <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--surface))] text-xs sm:text-sm text-[hsl(var(--text))] font-medium">
                    <span>View Certificate on Google Drive</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#275CA6]" />
                  </span>
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-full border border-[hsl(var(--stroke))] hover:border-[#275CA6] text-[hsl(var(--text))] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
};

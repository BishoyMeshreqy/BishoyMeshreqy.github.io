import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, ArrowLeft } from "lucide-react";
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
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.article
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/60 backdrop-blur-md sticky top-0 z-20">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-xs font-medium text-[hsl(var(--muted))] hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Certifications</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close article"
                className="w-8 h-8 rounded-full bg-[hsl(var(--stroke))]/40 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Reading body */}
            <div className="overflow-y-auto p-6 sm:p-10 md:p-12 space-y-8">
              {/* Category, Date, Read Time */}
              <div className="flex items-center gap-3 text-xs text-[hsl(var(--muted))] font-mono">
                <span className="text-[#89AACC] uppercase">{article.category}</span>
                <span>·</span>
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-white leading-tight">
                {article.title}
              </h1>

              {/* Excerpt Lead */}
              <p className="text-base sm:text-lg text-white/90 font-light italic border-l-2 border-[#4E85BF] pl-4 py-1 leading-relaxed">
                "{article.excerpt}"
              </p>

              {/* Cover image banner */}
              <div className="rounded-2xl overflow-hidden aspect-[16/8] bg-black/40 border border-white/10">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Paragraphs */}
              <div className="space-y-6 text-sm sm:text-base text-[hsl(var(--text))]/85 leading-relaxed font-light">
                {article.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Author signature footer */}
              <div className="pt-8 border-t border-[hsl(var(--stroke))] flex items-center justify-between text-xs text-[hsl(var(--muted))]">
                <div>
                  <span className="font-display italic text-base text-white block">Bishoy Meshreqy</span>
                  <span>Electrical Design · Technical Office · BIM Engineer</span>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-full border border-white/10 hover:border-white/20 text-white transition-colors"
                >
                  Done Reading
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
};

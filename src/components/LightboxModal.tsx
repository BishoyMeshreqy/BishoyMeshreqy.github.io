import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ExternalLink } from "lucide-react";
import { ExplorationItem } from "../data/portfolioData";

interface LightboxModalProps {
  item: ExplorationItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-4xl w-full flex flex-col items-center"
          >
            {/* Top controls */}
            <div className="w-full flex items-center justify-between pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#89AACC]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--muted))]">
                  {item.category} · {item.year}
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close lightbox"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res Image Container */}
            <div className="w-full max-h-[75vh] rounded-3xl overflow-hidden border border-white/15 bg-black/50 shadow-2xl flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Title & Caption */}
            <div className="w-full mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-display italic text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[hsl(var(--muted))]">
                  {item.caption}
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/bishoy-meshreqy"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto flex items-center gap-1.5 text-xs text-[#89AACC] hover:text-white transition-colors"
              >
                <span>View on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

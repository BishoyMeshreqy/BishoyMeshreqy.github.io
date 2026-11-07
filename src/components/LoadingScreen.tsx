import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const ROTATING_WORDS = ["Design", "Create", "Inspire"];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);

  // Cycle rotating words every 900ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 900);
    return () => clearInterval(wordInterval);
  }, []);

  // requestAnimationFrame counter from 000 -> 100 over 2700ms
  useEffect(() => {
    const duration = 2700; // 2700ms
    let startTime: number | null = null;
    let animationFrameId: number;
    let completedTimer: ReturnType<typeof setTimeout> | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing curve
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(100);
        // 400ms delay after count reaches 100 then call onComplete
        completedTimer = setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (completedTimer) clearTimeout(completedTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[9999] bg-[hsl(var(--bg))] flex flex-col justify-between p-8 md:p-14 select-none pointer-events-auto"
    >
      {/* Top Bar: Portfolio label */}
      <div className="flex justify-between items-start">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-xs text-[hsl(var(--muted))] uppercase tracking-[0.3em] font-medium"
        >
          Portfolio
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-xs text-[hsl(var(--muted))] font-mono"
        >
          2026 EDITION
        </motion.span>
      </div>

      {/* Center: Rotating Words */}
      <div className="flex items-center justify-center my-auto">
        <div className="h-24 md:h-32 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={wordIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[hsl(var(--text))]/80 text-center tracking-wide"
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Row: Counter & Progress Bar */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <div className="text-xs text-[hsl(var(--muted))] tracking-widest font-mono uppercase">
            Loading System
          </div>
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-[hsl(var(--text))] tabular-nums leading-none">
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[3px] bg-[hsl(var(--stroke))]/50 rounded-full overflow-hidden">
          <div
            className="h-full accent-gradient rounded-full transition-transform duration-75 ease-linear origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

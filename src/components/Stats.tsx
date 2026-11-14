import React from "react";
import { motion } from "framer-motion";
import { STATS } from "../data/portfolioData";

export const Stats: React.FC = () => {
  return (
    <section className="bg-[hsl(var(--surface))] py-20 md:py-28 border-y border-[hsl(var(--stroke))] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial from-[#275CA6]/[0.04] dark:from-[#3B82F6]/[0.09] to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col items-start md:border-l md:first:border-none md:border-[hsl(var(--stroke))] md:pl-8 lg:pl-10 group"
            >
              {/* Stat number with tabular nums */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-display italic text-[hsl(var(--text))] tracking-tight mb-3 tabular-nums group-hover:text-[#275CA6] dark:group-hover:text-[#60A5FA] transition-colors">
                {stat.number}
              </div>

              {/* Label */}
              <h3 className="text-base md:text-lg font-medium text-[hsl(var(--text))] tracking-wide mb-2">
                {stat.label}
              </h3>

              {/* Detail description */}
              <p className="text-xs sm:text-sm text-[hsl(var(--muted))] leading-relaxed max-w-xs">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

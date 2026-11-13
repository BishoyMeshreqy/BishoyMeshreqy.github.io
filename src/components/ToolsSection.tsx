import React from "react";
import { motion } from "framer-motion";
import { TOOL_GROUPS } from "../data/portfolioData";

export const ToolsSection: React.FC = () => {
  return (
    <motion.section
      id="tools"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 scroll-mt-20"
    >
      <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-[0.1em] mb-5 flex items-center gap-2.5">
        <span>Tools &amp; Software</span>
        <span className="flex-1 h-px bg-[#334155]/70" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {TOOL_GROUPS.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.5,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white border border-[#E2E8F0] rounded-[10px] p-[1.1rem] transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,23,42,0.12)]"
          >
            <h4 className="text-[12px] font-semibold text-[#1B4FD8] uppercase tracking-[0.06em] mb-2.5">
              {group.category}
            </h4>

            <div className="space-y-2">
              {group.items.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <span className="text-[13px] font-semibold text-[#1A1F2E]">
                    {item.name}
                  </span>
                  <span className="text-[12px] text-[#64748B] leading-snug">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

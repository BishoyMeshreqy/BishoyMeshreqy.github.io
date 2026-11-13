import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../data/portfolioData";

export const Certifications: React.FC = () => {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 scroll-mt-20"
    >
      <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-[0.1em] mb-5 flex items-center gap-2.5">
        <span>Certifications</span>
        <span className="flex-1 h-px bg-[#334155]/70" />
      </div>

      <div className="flex flex-col gap-2.5">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white border border-[#E2E8F0] rounded-[10px] px-4 py-3.5 flex items-center gap-3.5 transition-all duration-200 hover:translate-x-1 hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)] hover:border-[#DDEAFF]"
          >
            <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />

            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-semibold text-[#1A1F2E] flex flex-wrap items-center gap-2">
                <span>{cert.title}</span>
                {cert.badge && (
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#ECFDF5] text-[#059669]">
                    {cert.badge}
                  </span>
                )}
              </div>
              <div className="text-[12px] text-[#64748B] mt-0.5">
                {cert.issuer} &nbsp;·&nbsp; {cert.date}
              </div>
            </div>

            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-[13px] font-medium text-[#1B4FD8] no-underline inline-flex items-center gap-1 shrink-0 py-1.5 px-1 transition-all duration-200 hover:gap-1.5 hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View</span>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

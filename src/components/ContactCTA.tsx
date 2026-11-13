import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export const ContactCTA: React.FC = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mt-12 relative cta-gradient-surface rounded-[16px] px-5 py-8 sm:px-8 sm:py-11 text-center text-white overflow-hidden scroll-mt-20"
    >
      <div className="cta-dot-pattern absolute inset-0 opacity-50 pointer-events-none" />

      <div className="relative z-[1]">
        <h2 className="font-display text-[23px] font-bold mb-2">
          Let&apos;s work together
        </h2>
        <p className="text-[14px] text-white/85 mb-6 max-w-lg mx-auto">
          Available for freelance electrical design and shop drawing and BIM modeling projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 bg-white text-[#1B4FD8] text-[14px] font-semibold px-[22px] py-2.5 rounded-[10px] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
          >
            <Mail className="w-4 h-4" />
            <span>Send an email</span>
          </a>

          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent text-white text-[14px] font-medium px-[22px] py-2.5 rounded-[10px] border-[1.5px] border-white/50 no-underline transition-all duration-200 hover:border-white hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-5 pt-4 border-t border-white/25">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-1.5 text-[13px] text-white/90 hover:text-white no-underline py-1 transition-all duration-150 hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>{PROFILE.email}</span>
          </a>

          <a
            href={`tel:${PROFILE.phone}`}
            className="inline-flex items-center gap-1.5 text-[13px] text-white/90 hover:text-white no-underline py-1 transition-all duration-150 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            <span>{PROFILE.phone}</span>
          </a>

          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] text-white/90 hover:text-white no-underline py-1 transition-all duration-150 hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4" />
            <span>{PROFILE.linkedinDisplay}</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

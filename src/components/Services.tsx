import React from "react";
import { motion } from "framer-motion";
import { Building2, Calculator, Compass, Sun } from "lucide-react";
import { SERVICES, ServiceItem } from "../data/portfolioData";

const renderServiceIcon = (icon: ServiceItem["icon"]) => {
  switch (icon) {
    case "design":
      return <Compass className="w-5 h-5" />;
    case "bim":
      return <Building2 className="w-5 h-5" />;
    case "lighting":
      return <Sun className="w-5 h-5" />;
    case "calculations":
      return <Calculator className="w-5 h-5" />;
  }
};

export const Services: React.FC = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 scroll-mt-20"
    >
      <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-[0.1em] mb-5 flex items-center gap-2.5">
        <span>Services</span>
        <span className="flex-1 h-px bg-[#334155]/70" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.55,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative bg-white border border-[#E2E8F0] rounded-[10px] p-5 overflow-hidden transition-all duration-250 hover:border-[#1B4FD8] hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(27,79,216,0.18)]"
          >
            {/* Top blue hover bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1B4FD8] to-[#4F7FFF] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

            <div className="w-10 h-10 rounded-lg bg-[#EEF3FD] text-[#1B4FD8] flex items-center justify-center mb-3.5 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-[#1B4FD8] group-hover:text-white">
              {renderServiceIcon(service.icon)}
            </div>

            <h3 className="text-[14px] font-semibold text-[#1A1F2E] mb-1.5">
              {service.title}
            </h3>

            <p className="text-[12px] text-[#64748B] leading-[1.6]">
              {service.description}
            </p>

            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {service.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#0F172A] border border-[#E2E8F0] text-[#CBD5E1] transition-colors duration-200 group-hover:border-[#DDEAFF] group-hover:text-[#1B4FD8] group-hover:bg-[#EEF3FD]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

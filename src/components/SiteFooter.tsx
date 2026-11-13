import React from "react";
import { PROFILE } from "../data/portfolioData";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white mt-16 px-8 py-6 text-center text-[12px] text-[#64748B]">
      {PROFILE.copyright}
    </footer>
  );
};

import React, { useState, useEffect } from "react";
import { PROFILE } from "../data/portfolioData";

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenContact,
  activeSection = "home",
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [currentActive, setCurrentActive] = useState(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);

      const workEl = document.getElementById("works");
      const certificationsEl = document.getElementById("certifications");
      const softwareEl = document.getElementById("software-programs");
      const contactEl = document.getElementById("contact");

      if (contactEl && scrollY >= contactEl.offsetTop - 350) {
        setCurrentActive("contact");
      } else if (softwareEl && scrollY >= softwareEl.offsetTop - 300) {
        setCurrentActive("software-programs");
      } else if (certificationsEl && scrollY >= certificationsEl.offsetTop - 300) {
        setCurrentActive("certifications");
      } else if (workEl && scrollY >= workEl.offsetTop - 200) {
        setCurrentActive("work");
      } else {
        setCurrentActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentActive("home");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setCurrentActive(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto inline-flex items-center max-w-full overflow-x-auto sm:overflow-visible rounded-full backdrop-blur-md border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))]/90 p-1.5 shadow-sm transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-slate-900/10 border-slate-300/80" : ""
        }`}
      >
        {/* 1. Logo: 9x9 circle with accent gradient border */}
        <button
          onClick={() => scrollTo("home")}
          aria-label="Home"
          className="group relative w-9 h-9 rounded-full flex items-center justify-center p-[1.5px] transition-transform duration-300 hover:scale-110 shrink-0 cursor-pointer"
        >
          {/* Accent gradient ring that reverses direction on hover */}
          <span className="absolute inset-0 rounded-full accent-gradient group-hover:accent-gradient-rev transition-all duration-300" />
          <span className="relative w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
            <img
              src={PROFILE.logoSrc}
              alt="Bishoy Meshreqy BM Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover scale-105"
            />
          </span>
        </button>

        {/* 2. Nav links with dividers after every part */}
        <div className="flex items-center gap-0.5 sm:gap-1 ml-1 sm:ml-1.5">
          <button
            onClick={() => scrollTo("home")}
            className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer ${
              currentActive === "home"
                ? "text-[hsl(var(--text))] bg-[hsl(var(--stroke))]/50"
                : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40"
            }`}
          >
            Home
          </button>

          <div className="w-px h-5 bg-[hsl(var(--stroke))] mx-0.5 hidden sm:block shrink-0" />

          <button
            onClick={() => scrollTo("works")}
            className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer ${
              currentActive === "works" || currentActive === "work"
                ? "text-[hsl(var(--text))] bg-[hsl(var(--stroke))]/50"
                : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40"
            }`}
          >
            Work
          </button>

          <div className="w-px h-5 bg-[hsl(var(--stroke))] mx-0.5 hidden sm:block shrink-0" />

          <button
            onClick={() => scrollTo("certifications")}
            className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer ${
              currentActive === "certifications"
                ? "text-[hsl(var(--text))] bg-[hsl(var(--stroke))]/50"
                : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40"
            }`}
          >
            Certifications
          </button>

          <div className="w-px h-5 bg-[hsl(var(--stroke))] mx-0.5 hidden sm:block shrink-0" />

          <button
            onClick={() => scrollTo("software-programs")}
            className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer ${
              currentActive === "software-programs"
                ? "text-[hsl(var(--text))] bg-[hsl(var(--stroke))]/50"
                : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40"
            }`}
          >
            Software Programs
          </button>

          <div className="w-px h-5 bg-[hsl(var(--stroke))] mx-0.5 hidden sm:block shrink-0" />

          <button
            onClick={onOpenResume}
            className="text-xs sm:text-sm rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40 cursor-pointer"
          >
            Resume
          </button>
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-[hsl(var(--stroke))] mx-1 hidden sm:block shrink-0" />

        {/* 5. "Contact" tab */}
        <button
          onClick={() => scrollTo("contact")}
          className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-3.5 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap shrink-0 cursor-pointer ${
            currentActive === "contact"
              ? "text-[hsl(var(--text))] bg-[hsl(var(--stroke))]/50"
              : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40"
          }`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

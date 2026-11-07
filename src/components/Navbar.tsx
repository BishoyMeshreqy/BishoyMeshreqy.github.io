import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

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
      setScrolled(window.scrollY > 100);

      const workEl = document.getElementById("works");
      const certificationsEl = document.getElementById("certifications");
      const explorationsEl = document.getElementById("explorations");
      const contactEl = document.getElementById("contact");
      const scrollY = window.scrollY;

      if (contactEl && scrollY >= contactEl.offsetTop - 350) {
        setCurrentActive("contact");
      } else if (explorationsEl && scrollY >= explorationsEl.offsetTop - 300) {
        setCurrentActive("work");
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
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-[hsl(var(--surface))]/90 p-1.5 transition-all duration-300 ${
          scrolled ? "shadow-md shadow-black/30 border-white/15" : ""
        }`}
      >
        {/* 1. Logo: 9x9 circle with accent gradient border */}
        <button
          onClick={() => scrollTo("home")}
          aria-label="Home"
          className="group relative w-9 h-9 rounded-full flex items-center justify-center p-[1.5px] transition-transform duration-300 hover:scale-110 shrink-0"
        >
          {/* Accent gradient ring that reverses direction on hover */}
          <span className="absolute inset-0 rounded-full accent-gradient group-hover:accent-gradient-rev transition-all duration-300" />
          <span className="relative w-full h-full rounded-full bg-[hsl(var(--bg))] flex items-center justify-center font-display italic text-[13px] text-[hsl(var(--text))] font-semibold">
            BM
          </span>
        </button>

        {/* 2. Divider */}
        <div className="w-px h-5 bg-[hsl(var(--stroke))] mx-1.5 hidden sm:block shrink-0" />

        {/* 3. Nav links: ["Home", "Work", "Certifications", "Resume"] */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          <button
            onClick={() => scrollTo("home")}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap ${
              currentActive === "home"
                ? "text-[hsl(var(--text))] bg-[hsl(var(--stroke))]/50"
                : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40"
            }`}
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("works")}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap ${
              currentActive === "works" || currentActive === "work"
                ? "text-[hsl(var(--text))] bg-[hsl(var(--stroke))]/50"
                : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40"
            }`}
          >
            Work
          </button>

          <button
            onClick={() => scrollTo("certifications")}
            className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap ${
              currentActive === "certifications"
                ? "text-[hsl(var(--text))] bg-[hsl(var(--stroke))]/50"
                : "text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40"
            }`}
          >
            Certifications
          </button>

          <button
            onClick={onOpenResume}
            className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 font-medium whitespace-nowrap text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] hover:bg-[hsl(var(--stroke))]/40"
          >
            Resume
          </button>
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-[hsl(var(--stroke))] mx-1.5 hidden sm:block shrink-0" />

        {/* 5. "Contact" button */}
        <button
          onClick={() => scrollTo("contact")}
          className="relative group text-xs sm:text-sm rounded-full p-[2px] transition-transform duration-300 hover:scale-105 shrink-0 cursor-pointer"
        >
          {/* Accent gradient border revealed on hover */}
          <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[hsl(var(--surface))] backdrop-blur-md text-[hsl(var(--text))] font-medium">
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[hsl(var(--muted))] group-hover:text-[hsl(var(--text))] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </span>
        </button>
      </nav>
    </header>
  );
};

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ExplorationItem, EXPLORATIONS } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

interface ExplorationsProps {
  onOpenLightbox: (item: ExplorationItem) => void;
}

export const Explorations: React.FC<ExplorationsProps> = ({
  onOpenLightbox,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!sectionRef.current || !centerRef.current) return;

      // Layer 1: Pinned Center
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: centerRef.current,
        pinSpacing: false,
      });

      // Layer 2: Parallax Columns
      if (col1Ref.current) {
        gsap.to(col1Ref.current, {
          y: -220,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (col2Ref.current) {
        gsap.to(col2Ref.current, {
          y: 180,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    });

    return () => mm.revert();
  }, []);

  const col1Items = EXPLORATIONS.slice(0, 3);
  const col2Items = EXPLORATIONS.slice(3, 6);

  return (
    <section
      id="software-programs"
      ref={sectionRef}
      className="relative min-h-fit md:min-h-[300vh] bg-[hsl(var(--bg))] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/10 dark:bg-[#3B82F6]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Layer 1: Stacked header on mobile, Pinned Center on desktop (z-10) */}
      <div
        ref={centerRef}
        className="w-full py-16 md:py-0 md:h-viewport flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none"
      >
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 pointer-events-auto">
            <span className="w-6 h-px bg-[hsl(var(--stroke))]" />
            <span className="text-xs text-[hsl(var(--muted))] uppercase tracking-[0.3em] font-medium">
              SOFTWARE PROGRAMS
            </span>
            <span className="w-6 h-px bg-[hsl(var(--stroke))]" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[hsl(var(--text))] tracking-tight mb-4">
            Engineering{" "}
            <span className="font-display italic font-normal text-[#275CA6] dark:text-[#60A5FA]">
              toolkit
            </span>
          </h2>

          <p className="text-sm md:text-base text-[hsl(var(--muted))] max-w-md mb-8 leading-relaxed">
            Revit, Navisworks, AutoCAD, ETAP, Ecodial, E-Design, DIALux Evo, and Power BI workflows.
          </p>

          {/* LinkedIn button with interactive pointer events */}
          <div className="pointer-events-auto">
            <a
              href="https://www.linkedin.com/in/bishoy-meshreqy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--surface))] text-xs sm:text-sm text-[hsl(var(--text))] font-medium border border-[hsl(var(--stroke))] transition-transform duration-300 hover:scale-105 shadow-md"
            >
              <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 text-[hsl(var(--text))]">
                <Sparkles className="w-3.5 h-3.5 text-[#275CA6] dark:text-[#60A5FA]" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[hsl(var(--muted))] group-hover:text-[#275CA6] dark:group-hover:text-[#60A5FA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Layer 2: Responsive grid on mobile, Parallax Columns overlay on desktop (z-20) */}
      <div className="relative md:absolute md:inset-0 z-20 pointer-events-none pt-2 pb-16 md:pt-32 md:pb-48">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 h-full">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-40 h-full">
            {/* Column 1 (Left) */}
            <div
              ref={col1Ref}
              className="flex flex-col gap-5 sm:gap-10 md:gap-48 items-center md:items-start md:pt-12"
            >
              {col1Items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item)}
                  className={`pointer-events-auto group w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] shadow-xl cursor-pointer relative transition-all duration-500 hover:scale-105 hover:border-[#275CA6]/50 dark:hover:border-[#60A5FA]/50 md:${item.rotation}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 flex flex-col justify-end">
                    <span className="text-[9px] sm:text-[10px] text-sky-300 font-mono uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-xs sm:text-base font-medium text-white group-hover:text-sky-200 transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 (Right) */}
            <div
              ref={col2Ref}
              className="flex flex-col gap-5 sm:gap-10 md:gap-48 items-center md:items-end pt-6 sm:pt-12 md:pt-48"
            >
              {col2Items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item)}
                  className={`pointer-events-auto group w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] shadow-xl cursor-pointer relative transition-all duration-500 hover:scale-105 hover:border-[#275CA6]/50 dark:hover:border-[#60A5FA]/50 md:${item.rotation}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 flex flex-col justify-end">
                    <span className="text-[9px] sm:text-[10px] text-sky-300 font-mono uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-xs sm:text-base font-medium text-white group-hover:text-sky-200 transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

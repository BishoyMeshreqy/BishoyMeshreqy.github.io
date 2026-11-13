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
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const col1Items = EXPLORATIONS.slice(0, 3);
  const col2Items = EXPLORATIONS.slice(3, 6);

  return (
    <section
      id="software-programs"
      ref={sectionRef}
      className="relative min-h-[300vh] bg-[hsl(var(--bg))] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Layer 1: Pinned Center (z-10) */}
      <div
        ref={centerRef}
        className="h-screen w-full flex flex-col items-center justify-center text-center px-6 z-10 pointer-events-none"
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
            <span className="font-display italic font-normal text-[#275CA6]">
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
                <Sparkles className="w-3.5 h-3.5 text-[#275CA6]" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[hsl(var(--muted))] group-hover:text-[#275CA6] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Layer 2: Parallax Columns (z-20, absolute overlay that scrolls) */}
      <div className="absolute inset-0 z-20 pointer-events-none pt-32 pb-48">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full">
          <div className="grid grid-cols-2 gap-8 md:gap-40 h-full">
            {/* Column 1 (Left) */}
            <div
              ref={col1Ref}
              className="flex flex-col gap-24 md:gap-48 items-start pt-12"
            >
              {col1Items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item)}
                  className={`pointer-events-auto group w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] shadow-xl cursor-pointer relative transition-all duration-500 hover:scale-105 hover:border-[#275CA6]/50 ${item.rotation}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end">
                    <span className="text-[10px] text-sky-300 font-mono uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-sky-200 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 (Right) */}
            <div
              ref={col2Ref}
              className="flex flex-col gap-24 md:gap-48 items-end pt-48"
            >
              {col2Items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(item)}
                  className={`pointer-events-auto group w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] shadow-xl cursor-pointer relative transition-all duration-500 hover:scale-105 hover:border-[#275CA6]/50 ${item.rotation}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex flex-col justify-end">
                    <span className="text-[10px] text-sky-300 font-mono uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-medium text-white group-hover:text-sky-200 transition-colors">
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

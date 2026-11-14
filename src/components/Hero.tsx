import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";

interface HeroProps {
  isLoading: boolean;
  onOpenContact: () => void;
  onScrollToWorks: () => void;
}

const ROLES = ["Design", "Technical Office", "BIM"];

export const Hero: React.FC<HeroProps> = ({
  isLoading,
  onOpenContact,
  onScrollToWorks,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle role every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // HLS Video Setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSource =
      "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        autoStartLoad: true,
      });
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Autoplay policy fallback
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSource;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // GSAP Entrance
  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );

      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
        },
        0.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[hsl(var(--bg))] px-6 pt-24 pb-16"
    >
      {/* Background HLS Video transformed into luminous light atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-20 invert brightness-110 contrast-90"
        />
        {/* Soft luminous daylight veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA]/80 via-[#F5F7FA]/60 to-[#F5F7FA]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[120px]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[hsl(var(--bg))] to-transparent" />
      </div>

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto my-auto">
        {/* Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-[hsl(var(--text))] mb-6 select-none">
          Bishoy Meshreqy
        </h1>

        {/* Role line */}
        <p className="blur-in text-lg md:text-2xl text-[hsl(var(--text))]/90 font-light mb-6 tracking-wide">
          Electrical{" "}
          <span
            key={roleIndex}
            className="font-display italic text-[#275CA6] text-2xl md:text-3xl animate-role-fade-in inline-block font-normal underline decoration-[hsl(var(--stroke))] underline-offset-8"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          Engineer
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-[hsl(var(--muted))] max-w-md mb-12 leading-relaxed">
          Electrical shop drawings, Revit MEP models, and BIM coordination for commercial, hospitality, residntial, and institutional projects across Egypt and Saudi Arabia.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          {/* "See Works": Solid button */}
          <button
            onClick={onScrollToWorks}
            className="relative group rounded-full p-[2px] transition-transform duration-300 hover:scale-105 cursor-pointer shadow-sm"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative block rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300 bg-[hsl(var(--text))] text-[hsl(var(--surface))] group-hover:bg-[hsl(var(--surface))] group-hover:text-[hsl(var(--text))]">
              See Works
            </span>
          </button>

          {/* "Reach out...": Outlined button */}
          <button
            onClick={scrollToContact}
            className="relative group rounded-full p-[2px] transition-transform duration-300 hover:scale-105 cursor-pointer shadow-sm"
          >
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative block rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 bg-[hsl(var(--surface))] text-[hsl(var(--text))] border border-[hsl(var(--stroke))] group-hover:border-transparent">
              Reach out...
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 mt-auto pt-8 flex flex-col items-center gap-3">
        <span className="text-[10px] md:text-xs text-[hsl(var(--muted))] uppercase tracking-[0.2em] font-mono">
          SCROLL
        </span>
        <div className="w-px h-10 bg-[hsl(var(--stroke))] relative overflow-hidden">
          <div className="w-full h-4 accent-gradient absolute top-0 left-0 animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

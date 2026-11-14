import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight, Check, Copy, Linkedin, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/bishoy-meshreqy" },
];

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Background Video (flipped vertically with heavier bg-black/60 overlay)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSource =
      "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, autoStartLoad: true });
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
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

  // GSAP Marquee: "BUILDING THE FUTURE • " repeated 10x, xPercent: -50, duration 40, ease "none", repeat -1
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("BishoyMagdy.30@hotmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const marqueeText = "BUILDING THE FUTURE • ".repeat(10);

  return (
    <footer
      id="contact"
      className="relative bg-[hsl(var(--bg))] pt-16 md:pt-24 pb-[max(2rem,env(safe-area-inset-bottom))] md:pb-[max(3rem,env(safe-area-inset-bottom))] overflow-hidden border-t border-[hsl(var(--stroke))]"
    >
      {/* Background Video: luminous light wash / deep obsidian wash in dark mode */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-15 invert brightness-110 dark:invert-0 dark:opacity-25 dark:brightness-90 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA]/90 via-[#EDF2F7]/85 to-[#E6ECF5]/95 dark:from-[#0b101b]/90 dark:via-[#0e1525]/88 dark:to-[#070b13]/95 backdrop-blur-[2px] transition-colors duration-300" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-16 md:gap-24">
        {/* GSAP Marquee Ribbon */}
        <div className="w-full overflow-hidden border-y border-[hsl(var(--stroke))] py-4 select-none">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-[hsl(var(--muted))]"
          >
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>

        {/* Big CTA Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto py-6">
          <span className="text-xs text-[#275CA6] dark:text-[#60A5FA] uppercase tracking-[0.3em] font-medium mb-6">
            Get in touch
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[hsl(var(--text))] leading-tight mb-8">
            Let's Build the future together
          </h2>

          <p className="text-sm md:text-base text-[hsl(var(--muted))] max-w-lg mb-10 leading-relaxed">
            Available for projects: electrical design & shop-drawings, Revit MEP modeling, BIM coordination, and as-built drawings. Send me your scope and I’ll reply within 24 hours.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Email CTA Button with gradient hover border ring */}
            <a
              href="mailto:BishoyMagdy.30@hotmail.com"
              className="relative group rounded-full p-[2px] transition-transform duration-300 hover:scale-105 inline-flex max-w-full shadow-md"
            >
              <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[hsl(var(--surface))] text-xs sm:text-base text-[hsl(var(--text))] font-medium max-w-full">
                <Mail className="w-4 h-4 text-[#275CA6] dark:text-[#60A5FA] shrink-0" />
                <span className="truncate">BishoyMagdy.30@hotmail.com</span>
                <ArrowUpRight className="w-4 h-4 text-[hsl(var(--muted))] group-hover:text-[#275CA6] dark:group-hover:text-[#60A5FA] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </span>
            </a>

            {/* Quick copy email button */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-5 py-4 rounded-full bg-[hsl(var(--surface))] hover:bg-white dark:hover:bg-[#1a2233] border border-[hsl(var(--stroke))] text-xs sm:text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--text))] transition-all duration-200 cursor-pointer shadow-xs"
              title="Copy Email"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            {/* Open message modal */}
            <button
              onClick={onOpenContact}
              className="px-6 py-4 rounded-full bg-[hsl(var(--surface))]/70 hover:bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] text-xs sm:text-sm text-[hsl(var(--text))] transition-colors shadow-xs cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Footer Bar: Contact info, Location, Status, and Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-10 border-t border-[hsl(var(--stroke))] text-xs text-[hsl(var(--muted))]">
          {/* Contact Details & Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#275CA6] dark:hover:text-[#60A5FA] transition-colors tracking-wide font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#275CA6] dark:text-[#60A5FA]" />
                <span>{link.name}</span>
              </a>
            ))}

            <span className="hidden sm:inline text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>

            {/* Phone */}
            <a
              href="tel:+201212299454"
              className="flex items-center gap-1.5 hover:text-[#275CA6] dark:hover:text-[#60A5FA] transition-colors font-mono tracking-tight"
            >
              <Phone className="w-3.5 h-3.5 text-[#275CA6] dark:text-[#60A5FA]" />
              <span>+201212299454</span>
            </a>

            <span className="hidden sm:inline text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>

            {/* WhatsApp */}
            <a
              href="https://wa.me/201212299454"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#275CA6] dark:hover:text-[#60A5FA] transition-colors tracking-wide font-medium"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-[#275CA6] dark:text-[#60A5FA]"
                aria-hidden="true"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <span className="hidden sm:inline text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-[hsl(var(--text))]/85">
              <MapPin className="w-3.5 h-3.5 text-[#275CA6] dark:text-[#60A5FA]" />
              <span>Cairo, Egypt</span>
            </div>
          </div>

          {/* Right side: Status + Copyright */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-5 sm:gap-6">
            {/* Status */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600 dark:bg-emerald-400" />
              </span>
              <span className="text-[hsl(var(--text))] font-medium">
                Available for projects
              </span>
            </div>

            <span className="hidden sm:inline text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>

            {/* Copyright */}
            <div className="font-mono text-[11px] text-[hsl(var(--muted))]">
              © 2026 Bishoy Meshreqy. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Mail, ArrowUpRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROJECT_TYPES = [
  "Interactive Web Experience",
  "Design Engineering / 3D",
  "Brand Identity & System",
  "Advisory / Consultation",
];

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);
    // Simulate instant secure submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        onClose();
      }, 2500);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[hsl(var(--surface))] border border-[hsl(var(--stroke))] rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/60 backdrop-blur-md">
              <span className="text-xs font-mono text-[#89AACC] uppercase tracking-wider">
                Initiate Conversation
              </span>
              <button
                onClick={onClose}
                aria-label="Close contact modal"
                className="w-8 h-8 rounded-full bg-[hsl(var(--stroke))]/40 hover:bg-[hsl(var(--stroke))] flex items-center justify-center text-[hsl(var(--muted))] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body Form */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-display italic text-white mb-2">
                    Message Dispatched
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted))] max-w-xs">
                    Thank you, {name}. Bishoy will review your brief and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display italic text-white">
                      Say hello
                    </h3>
                    <p className="text-xs sm:text-sm text-[hsl(var(--muted))] mt-1">
                      Have an ambitious project in mind or want to talk collaboration?
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[hsl(var(--muted))] tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[hsl(var(--bg))] border border-[hsl(var(--stroke))] text-white placeholder-[hsl(var(--muted))]/50 text-sm focus:outline-none focus:border-[#4E85BF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[hsl(var(--muted))] tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="s.connor@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[hsl(var(--bg))] border border-[hsl(var(--stroke))] text-white placeholder-[hsl(var(--muted))]/50 text-sm focus:outline-none focus:border-[#4E85BF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[hsl(var(--muted))] tracking-wider mb-1.5">
                      Project Nature
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[hsl(var(--bg))] border border-[hsl(var(--stroke))] text-white text-sm focus:outline-none focus:border-[#4E85BF] transition-colors"
                    >
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-[hsl(var(--surface))]">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[hsl(var(--muted))] tracking-wider mb-1.5">
                      Project Vision & Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief overview of timeline, scope, and objectives..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[hsl(var(--bg))] border border-[hsl(var(--stroke))] text-white placeholder-[hsl(var(--muted))]/50 text-sm focus:outline-none focus:border-[#4E85BF] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href="mailto:BishoyMagdy.30@hotmail.com"
                      className="text-xs text-[hsl(var(--muted))] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>BishoyMagdy.30@hotmail.com</span>
                    </a>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105 inline-flex"
                    >
                      <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
                      <span className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-[hsl(var(--bg))] text-xs sm:text-sm text-white font-medium">
                        <span>{isSubmitting ? "Transmitting..." : "Send Brief"}</span>
                        <Send className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

"use client";

import React, { useState } from "react";
import { Mail, Phone, Copy, Check, FileText, ArrowUp, Terminal, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { PORTFOLIO_DATA } from "@/data/content";
import { PlaceholderChip } from "./PlaceholderChip";

export const ContactFooter: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="pt-16 pb-12 relative overflow-hidden bg-slate-50/50 dark:bg-[#070a0f]">
      {/* Subtle top border */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
            // 09. CONTACT & FOOTER
          </span>
          <span className="h-px w-8 bg-emerald-500/30" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          {PORTFOLIO_DATA.contact.subHeading}
        </h2>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
          {PORTFOLIO_DATA.contact.invitation}
        </p>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {/* Email Card */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                Email
              </span>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.contact.email, "email")}
                className="text-[11px] font-mono text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <span className="text-emerald-500 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy
                  </span>
                )}
              </button>
            </div>
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 truncate"
            >
              {PORTFOLIO_DATA.contact.email}
            </a>
          </div>

          {/* Phone Card */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                Phone / Mobile
              </span>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.contact.phone, "phone")}
                className="text-[11px] font-mono text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <span className="text-emerald-500 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy
                  </span>
                )}
              </button>
            </div>
            <a
              href={`tel:${PORTFOLIO_DATA.contact.phone}`}
              className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              {PORTFOLIO_DATA.contact.displayPhone}
            </a>
          </div>

          {/* GitHub Profile Card */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-xs flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-emerald-500" />
                GitHub
              </span>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                Active Code
              </span>
            </div>
            <a
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center justify-between"
            >
              <span>github.com/AashishStark</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* LinkedIn Placeholder Notice Row */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 mb-10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <LinkedinIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-xs font-semibold text-slate-900 dark:text-white mr-2">
                LinkedIn Profile
              </span>
              <span className="text-xs text-slate-700 dark:text-slate-300 font-mono">
                {PORTFOLIO_DATA.contact.linkedinPlaceholder}
              </span>
            </div>
          </div>
          <PlaceholderChip label="TODO: Add LinkedIn URL" />
        </div>

        {/* Resume Download Action Banner */}
        <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                Aashish S A Resume (PDF)
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300">
                Drop your updated &apos;Aashish S A Resume.pdf&apos; in <code className="text-slate-700 dark:text-slate-300">/public</code> to refresh this link at any time.
              </div>
            </div>
          </div>

          <a
            href={PORTFOLIO_DATA.hero.resumeFilePath}
            download="Aashish S A Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-medium shrink-0 transition-colors shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.hero.name}.</span>
            <span>•</span>
            <span>&quot;{PORTFOLIO_DATA.meta.theme}&quot;</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-700 dark:text-slate-300">
              Content configured in <code className="text-slate-700 dark:text-slate-300">src/data/content.ts</code>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              title="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useState } from "react";
import { ArrowDown, FileText, ArrowUpRight, Cpu, Layers, Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { PORTFOLIO_DATA } from "@/data/content";

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60"
    >
      {/* Background Engineering Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none opacity-40 dark:opacity-25" />

      {/* Subtle Glow Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Terminal / Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs font-mono text-xs text-slate-700 dark:text-slate-300 mb-8 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">//</span>
          <span>{PORTFOLIO_DATA.hero.role}</span>
        </div>

        {/* Main Name & Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          {PORTFOLIO_DATA.hero.name}
        </h1>

        <p className="text-xl sm:text-2xl font-mono text-emerald-700 dark:text-emerald-300 font-medium mb-6">
          {PORTFOLIO_DATA.hero.tagline}
        </p>

        {/* Positioning Paragraph */}
        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed mb-6">
          {PORTFOLIO_DATA.hero.positioningParagraph}
        </p>

        {/* Identity & Theme Badge */}
        <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/40 max-w-2xl mb-8 flex items-start gap-3">
          <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
              Core Theme:{" "}
            </span>
            <span className="italic text-emerald-700 dark:text-emerald-300">
              &quot;{PORTFOLIO_DATA.meta.theme}&quot;
            </span>{" "}
            — connecting distributed systems reliability to machine learning mechanics.
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {/* Projects Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-sm font-semibold shadow-sm hover:shadow transition-all group"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Resume Download Button */}
          <a
            href={PORTFOLIO_DATA.hero.resumeFilePath}
            download="Aashish S A Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm font-medium transition-all shadow-xs"
            title="Download PDF Resume"
          >
            <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Resume</span>
          </a>

          {/* LinkedIn Profile Button */}
          <a
            href={PORTFOLIO_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm font-medium transition-all shadow-xs"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-500" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* GitHub Profile Button */}
          <a
            href={PORTFOLIO_DATA.hero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm font-medium transition-all shadow-xs"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {/* Quick Email Copy */}
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-transparent hover:border-slate-300 dark:hover:border-slate-800 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 font-mono text-xs transition-colors"
            title="Copy email to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied email!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.contact.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Telemetry & Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
          {PORTFOLIO_DATA.hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40"
            >
              <div className="font-mono text-xs text-slate-700 dark:text-slate-300 mb-1">
                {stat.label}
              </div>
              <div className="font-mono text-base font-bold text-slate-900 dark:text-slate-100">
                {stat.value}
              </div>
              <div className="text-[11px] text-slate-700 dark:text-slate-300 truncate">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

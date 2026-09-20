"use client";

import React, { useState } from "react";
import { ArrowDown, FileText, ArrowUpRight, Cpu, Layers, Check, Copy } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Section Index Marker */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
            // 01. HERO
          </span>
          <span className="h-px w-8 bg-emerald-500/30" />
          <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
            {PORTFOLIO_DATA.hero.credibilityBreakdown}
          </span>
        </div>

        {/* Identity & Status Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span>{PORTFOLIO_DATA.hero.role}</span>
        </div>

        {/* Main Name & Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          {PORTFOLIO_DATA.hero.name}
          <span className="text-emerald-500">.</span>
        </h1>

        <p className="text-lg sm:text-xl font-medium font-mono text-slate-700 dark:text-slate-300 mb-6">
          {PORTFOLIO_DATA.hero.tagline}
        </p>

        {/* Positioning Paragraph */}
        <div className="relative pl-4 border-l-2 border-emerald-500/60 dark:border-emerald-500/50 mb-8 max-w-3xl">
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {PORTFOLIO_DATA.hero.positioningParagraph}
          </p>
        </div>

        {/* Core Theme Identity Banner */}
        <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 text-xs font-mono mb-8 max-w-2xl text-slate-700 dark:text-slate-300">
          <div className="p-1 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
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
            <span>Download Resume</span>
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

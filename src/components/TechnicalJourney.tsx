"use client";

import React from "react";
import { GitCommit, Milestone, ArrowRight, CheckCircle2, ChevronRight, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/content";

export const TechnicalJourney: React.FC = () => {
  const { stages, leadNote, subHeading } = PORTFOLIO_DATA.journey;

  return (
    <section
      id="journey"
      className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
            // 05. TECHNICAL JOURNEY
          </span>
          <span className="h-px w-8 bg-emerald-500/30" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          {PORTFOLIO_DATA.journey.sectionHeading}
        </h2>

        <p className="text-xs sm:text-sm font-mono text-emerald-700 dark:text-emerald-300 mb-3">
          {subHeading}
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl mb-10">
          {leadNote}
        </p>

        {/* Milestone Path Progression */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-indigo-500 before:to-sky-500">
          {stages.map((stage, idx) => (
            <div key={stage.stage} className="relative group">
              {/* Timeline Pin */}
              <div className="absolute -left-6 sm:-left-8 top-1.5 w-5 h-5 rounded-full border-2 border-emerald-500 bg-white dark:bg-[#0b0f17] flex items-center justify-center font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xs">
                {stage.stage}
              </div>

              {/* Milestone Card */}
              <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Stage {stage.stage}
                  </span>
                  {stage.timeframe && (
                    <span className="font-mono text-xs text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80">
                      {stage.timeframe}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {stage.title}
                </h3>

                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {stage.description}
                </p>

                {/* Skills Learned / Used */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {stage.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-xs font-mono border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Theme Connection Box */}
                <div className="p-3 rounded-lg border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/40 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">↳ Understanding How It Works:</span>
                  <span className="italic text-slate-700 dark:text-slate-300">
                    &quot;{stage.themeConnection}&quot;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

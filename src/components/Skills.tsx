"use client";

import React from "react";
import { Server, Brain, ShieldCheck, Sparkles, Code2, Network, Terminal, Database, Container } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/content";

export const Skills: React.FC = () => {
  const { currentlyWorkingWith, exploring, explanationNote } = PORTFOLIO_DATA.skills;

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
            // 02. SKILLS & STACK
          </span>
          <span className="h-px w-8 bg-emerald-500/30" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          Technical Capabilities & Exploration
        </h2>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl mb-4">
          Structured into two visually intentional tiers: verified enterprise production systems, and hands-on self-study into foundational machine learning and applied GenAI.
        </p>

        {/* Recruiter Honesty Callout Box */}
        <div className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 mb-10 flex items-start gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-900 dark:text-slate-100">Engineering Transparency: </span>
            {explanationNote}
          </div>
        </div>

        {/* Two Visual Tiers */}
        <div className="space-y-8">
          {/* TIER 1: Currently Working With */}
          <div className="rounded-xl border-2 border-emerald-500/30 bg-white/70 dark:bg-slate-900/70 p-5 sm:p-6 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500/15 border-b border-l border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-mono text-[11px] font-semibold rounded-bl-lg">
              {currentlyWorkingWith.badge}
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {currentlyWorkingWith.title}
                  <span className="inline-block px-2 py-0.5 text-[10px] font-mono bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded">
                    ~3 Years Production
                  </span>
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {currentlyWorkingWith.description}
                </p>
              </div>
            </div>

            {/* Categorized Skills Pills */}
            <div className="mt-6 space-y-4">
              {currentlyWorkingWith.categories.map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span className="text-emerald-500">›</span> {cat.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 2: Learning / Building Toward (AI-ML) */}
          <div className="rounded-xl border-2 border-indigo-500/30 bg-white/70 dark:bg-slate-900/70 p-5 sm:p-6 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-500/15 border-b border-l border-indigo-500/30 text-indigo-700 dark:text-indigo-300 font-mono text-[11px] font-semibold rounded-bl-lg">
              {exploring.badge}
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  {exploring.title}
                  <span className="inline-block px-2 py-0.5 text-[10px] font-mono bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded">
                    Active Self-Study & Building
                  </span>
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  {exploring.description}
                </p>
              </div>
            </div>

            {/* Categorized Skills Pills */}
            <div className="mt-6 space-y-4">
              {exploring.categories.map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span className="text-indigo-500">›</span> {cat.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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

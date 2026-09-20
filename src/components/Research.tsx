"use client";

import React from "react";
import { BookMarked, ExternalLink, Sparkles, CheckCircle, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/content";
import { PlaceholderChip } from "./PlaceholderChip";

export const Research: React.FC = () => {
  const { papers, intro, subHeading, sectionHeading } = PORTFOLIO_DATA.research;

  return (
    <section
      id="research"
      className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
            // 07. RESEARCH PAPERS
          </span>
          <span className="h-px w-8 bg-emerald-500/30" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          {sectionHeading}
        </h2>

        <p className="text-xs sm:text-sm font-mono text-emerald-700 dark:text-emerald-300 mb-3">
          {subHeading}
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl mb-8">
          {intro}
        </p>

        {/* Papers Structured Cards / Table */}
        <div className="space-y-4">
          {papers.map((paper, idx) => (
            <div
              key={paper.id}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-xs"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    [Paper 0{idx + 1}]
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {paper.title}
                  </h3>
                </div>

                {/* Link or Placeholder Chip */}
                {paper.isPlaceholder ? (
                  <PlaceholderChip label="TODO: Citation / DOI Link" />
                ) : (
                  paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <span>{paper.linkText || "View Repository"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )
                )}
              </div>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {paper.topics.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* What I Learned */}
              <div className="p-3 rounded-lg border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="font-mono font-semibold text-slate-900 dark:text-slate-100 block mb-1">
                  ↳ What I learned & Architectural takeaway:
                </span>
                <p className="leading-relaxed">{paper.whatILearned}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

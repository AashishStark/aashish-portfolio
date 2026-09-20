"use client";

import React from "react";
import { Terminal, Calendar, ExternalLink, BookOpen, Sparkles, FolderGit2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/content";

export const AiLab: React.FC = () => {
  const { entries, datasetCallout, leadNote, subHeading } = PORTFOLIO_DATA.aiLab;

  return (
    <section
      id="ai-lab"
      className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
            // 04. AI LAB & DEVLOG
          </span>
          <span className="h-px w-8 bg-emerald-500/30" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          {PORTFOLIO_DATA.aiLab.sectionHeading}
        </h2>

        <p className="text-xs sm:text-sm font-mono text-emerald-700 dark:text-emerald-300 mb-3">
          {subHeading}
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl mb-8">
          {leadNote}
        </p>

        {/* Handwritten Dataset Callout Card */}
        <div className="mb-10 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 mt-0.5">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                Primary Test Corpora
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                {datasetCallout.title}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 max-w-xl">
                {datasetCallout.description}
              </p>
            </div>
          </div>

          <a
            href={datasetCallout.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-medium shrink-0 transition-colors"
          >
            <span>View Notes Dataset</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Devlog Entries Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
          {entries.map((entry) => (
            <article key={entry.id} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-white dark:bg-[#0b0f17] flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* Devlog Entry Card */}
              <div className="p-4 sm:p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/50 hover:border-emerald-500/40 transition-colors">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{entry.date}</span>
                    <span>•</span>
                    <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                      {entry.topic}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {entry.badge}
                  </span>
                </div>

                {/* Entry Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {entry.title}
                </h3>

                {/* Summary */}
                <div className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100/60 dark:bg-slate-800/40 p-2 rounded mb-3 border-l-2 border-emerald-500">
                  {entry.summary}
                </div>

                {/* Body Content */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {entry.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { GraduationCap, Briefcase, Award, CheckCircle2, ShieldAlert } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/content";

export const About: React.FC = () => {
  const { leadParagraph, transitionParagraph, angleParagraph, education, work } = PORTFOLIO_DATA.about;

  return (
    <section
      id="about"
      className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
            // 06. ABOUT & BACKGROUND
          </span>
          <span className="h-px w-8 bg-emerald-500/30" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          The Engineering Rationale
        </h2>

        {/* Story Paragraphs */}
        <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mb-10">
          <p>{leadParagraph}</p>
          <p>{transitionParagraph}</p>
          
          {/* Key Value Proposition Callout */}
          <div className="p-4 rounded-xl border-l-4 border-emerald-500 bg-emerald-500/5 dark:bg-emerald-950/20 text-slate-900 dark:text-slate-100 font-medium">
            <p className="text-base sm:text-lg leading-relaxed">{angleParagraph}</p>
          </div>
        </div>

        {/* Career & Education Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Professional Experience Card */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {work.company}
                </h3>
                <div className="text-xs font-mono text-slate-700 dark:text-slate-300">
                  {work.role} · {work.tenure}
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-mono">
              <div>
                <span className="text-slate-700 dark:text-slate-300">Stack: </span>
                <span className="text-slate-900 dark:text-slate-100">
                  {work.coreStack.join(", ")}
                </span>
              </div>
              <div>
                <span className="text-slate-700 dark:text-slate-300">Integrations: </span>
                <span className="text-slate-900 dark:text-slate-100">
                  {work.integrations.join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {education.college}
                </h3>
                <div className="text-xs font-mono text-slate-700 dark:text-slate-300">
                  {education.degree} ({education.duration})
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
              <div className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-700 dark:text-slate-300">CGPA: </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{education.cgpa}</span> / 10.0
              </div>
              <span className="text-slate-700 dark:text-slate-300">Information Technology Major</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

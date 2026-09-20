"use client";

import React from "react";
import { BookOpen, Compass, Wrench, Sparkles, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/content";

export const BeyondCode: React.FC = () => {
  const { items, intro, subHeading, sectionHeading } = PORTFOLIO_DATA.beyondCode;

  const renderIcon = (name: string) => {
    switch (name) {
      case "book":
        return <BookOpen className="w-5 h-5 text-amber-500" />;
      case "motorcycle":
        return <Wrench className="w-5 h-5 text-emerald-500" />;
      case "compass":
        return <Compass className="w-5 h-5 text-sky-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section
      id="beyond-code"
      className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
            // 08. BEYOND CODE
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

        {/* 3 Physical & Intellectual Curiosity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    {renderIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-700 dark:text-slate-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Items Pill Tags */}
                {item.items && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.items.map((it) => (
                      <span
                        key={it}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {item.content}
                </p>
              </div>

              {/* Theme Framing: How does X connect to "Understanding how things work"? */}
              <div className="p-3 rounded-lg border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-950/40 text-[11px] font-mono text-slate-700 dark:text-slate-300">
                <span className="text-emerald-700 dark:text-emerald-300 font-semibold block mb-0.5">
                  ↳ The &quot;How Things Work&quot; Thread:
                </span>
                <span className="leading-snug">{item.themeFraming}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

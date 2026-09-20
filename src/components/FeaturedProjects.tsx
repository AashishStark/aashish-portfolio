"use client";

import React, { useState } from "react";
import { ExternalLink, ArrowRight, Layers, Cpu, Server, Terminal, Sparkles, Binary } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/content";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { PlaceholderChip } from "./PlaceholderChip";

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getStatusBadge = (status: ProjectItem["status"]) => {
    switch (status) {
      case "Live":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            In Progress
          </span>
        );
      case "Planned":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Planned
          </span>
        );
    }
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider">
            // 03. FEATURED PROJECTS
          </span>
          <span className="h-px w-8 bg-emerald-500/30" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Systems & Applied AI Implementations
        </h2>

        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl mb-8">
          Ranked by AI-forward direction — from grounded multi-stage RAG pipelines and custom PyTorch neural components to distributed enterprise backends.
        </p>

        {/* Project Cards Grid */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl border transition-all duration-200 p-5 sm:p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xs ${
                project.status === "Live"
                  ? "border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 shadow-xs"
                  : project.status === "In Progress"
                  ? "border-slate-200 dark:border-slate-800 hover:border-amber-500/50"
                  : "border-dashed border-slate-300 dark:border-slate-800/80 hover:border-sky-500/50 opacity-90"
              }`}
            >
              {/* Card Top Row */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                      title="Open Live Deployment"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {project.colabUrl && (
                    <a
                      href={project.colabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 transition-colors"
                      title="Open Notebook in Google Colab"
                    >
                      <span>Colab</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tagline / One-liner */}
              <p className="text-xs sm:text-sm font-mono text-emerald-700 dark:text-emerald-300 mb-3">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Pipeline Flowchart preview for RAG Project */}
              {project.id === "rag-document-intelligence" && (
                <div className="mb-4 p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60">
                  <div className="text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Binary className="w-3.5 h-3.5 text-emerald-500" />
                    Pipeline Architecture (No generic &quot;Chat with PDF&quot;)
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                    <div className="p-2 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <span className="text-emerald-500 block font-bold">01. INGESTION</span>
                      <span className="text-slate-700 dark:text-slate-300">Images → Gemini OCR</span>
                    </div>
                    <div className="p-2 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <span className="text-emerald-500 block font-bold">02. CHUNKING</span>
                      <span className="text-slate-700 dark:text-slate-300">300-500w (50w overlap)</span>
                    </div>
                    <div className="p-2 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <span className="text-emerald-500 block font-bold">03. VECTOR DB</span>
                      <span className="text-slate-700 dark:text-slate-300">all-MiniLM + Chroma</span>
                    </div>
                    <div className="p-2 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <span className="text-emerald-500 block font-bold">04. SERVING</span>
                      <span className="text-slate-700 dark:text-slate-300">FastAPI on Railway</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Placeholder warning if project is planned */}
              {project.isPlaceholder && project.placeholderLabel && (
                <div className="mb-4">
                  <PlaceholderChip label={project.placeholderLabel} />
                </div>
              )}

              {/* Bottom Row: Tags & Read More */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-700 dark:text-slate-300">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group"
                >
                  <span>Read Architecture Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ArrowRight, CheckCircle2, FileCode, Layers, Server } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { ProjectItem } from "@/data/content";
import { PlaceholderChip } from "./PlaceholderChip";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getStatusBadge = (status: ProjectItem["status"]) => {
    switch (status) {
      case "Live":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Deployment
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Active Development
          </span>
        );
      case "Planned":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Planned Roadmap
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#0e131d] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-slate-700 dark:text-slate-300">
                // SYSTEM ARCHITECTURE & DEEP DIVE
              </span>
              {getStatusBadge(project.status)}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono mt-1">
              {project.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Overview */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="text-emerald-500">›</span> System Overview
            </h4>
            <p className="text-slate-700 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Why It Works - Core Architectural Rationale */}
          <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20">
            <h4 className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Why the Architecture & Chunking / Retrieval Works
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.whyItWorks}
            </p>
          </div>

          {/* Dynamic Architecture Visuals based on project type */}
          {project.architectureDetails?.type === "pipeline" && project.architectureDetails.steps && (
            <div>
              <h4 className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <span className="text-emerald-500">›</span> End-to-End Pipeline Flow
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.architectureDetails.steps.map((step) => (
                  <div
                    key={step.step}
                    className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-start gap-3"
                  >
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      [{step.step}]
                    </span>
                    <div>
                      <div className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                        {step.title}
                      </div>
                      <div className="text-[11px] text-slate-700 dark:text-slate-300 mt-0.5">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tree Structure (CivSaash or Notion) */}
          {project.architectureDetails?.treeStructure && (
            <div>
              <h4 className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="text-emerald-500">›</span> Module Architecture & File Tree
              </h4>
              <pre className="p-3.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto leading-tight">
                <code>{project.architectureDetails.treeStructure}</code>
              </pre>
            </div>
          )}

          {/* Highlights */}
          {project.architectureDetails?.highlights && (
            <div>
              <h4 className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span className="text-emerald-500">›</span> Technical Implementation Highlights
              </h4>
              <ul className="space-y-1.5">
                {project.architectureDetails.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="text-emerald-500 font-mono">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Placeholder indicator if planned */}
          {project.isPlaceholder && project.placeholderLabel && (
            <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/10 flex items-center justify-between gap-3">
              <div className="text-xs font-mono text-amber-700 dark:text-amber-300">
                {project.placeholderNotes}
              </div>
              <PlaceholderChip label={project.placeholderLabel} />
            </div>
          )}

          {/* Tech Tags */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-xs font-mono border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-mono text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-semibold transition-colors"
              >
                <span>Live Service / Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.colabUrl && (
              <a
                href={project.colabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-mono text-xs font-medium transition-colors"
              >
                <span>Open in Google Colab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-300 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

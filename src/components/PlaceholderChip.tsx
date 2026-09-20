"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

interface PlaceholderChipProps {
  label: string;
  className?: string;
  compact?: boolean;
}

export const PlaceholderChip: React.FC<PlaceholderChipProps> = ({
  label,
  className = "",
  compact = false,
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-xs font-medium px-2 py-0.5 rounded border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300 transition-colors ${className}`}
      title="Placeholder item to update in src/data/content.ts"
    >
      <AlertCircle className="w-3 h-3 text-amber-500 shrink-0" />
      <span>{label}</span>
    </span>
  );
};

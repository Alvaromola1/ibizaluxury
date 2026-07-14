"use client";

import { type ReactNode } from "react";

/** Lightweight wrapper — content stays visible even without JS. */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

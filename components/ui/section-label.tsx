import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <div className={cn("mb-8 flex items-center gap-4 w-full", className)} {...props}>
      <span className="h-px flex-1 bg-[var(--color-border)]" />
      <span className="small-caps text-[var(--color-accent)]">
        {children}
      </span>
      <span className="h-px flex-1 bg-[var(--color-border)]" />
    </div>
  );
}

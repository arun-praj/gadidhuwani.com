import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "featured";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "default",
  hoverEffect = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border-[var(--color-border)] border-[1px] bg-[var(--color-card)] p-8 md:p-10 transition-all duration-200 ease-out flex flex-col relative",
        variant === "default" && "shadow-[var(--shadow-sm)]",
        variant === "elevated" && "shadow-[var(--shadow-md)]",
        variant === "featured" && "bg-[var(--color-accent-muted)] border-t-[2px] border-t-[var(--color-accent)] shadow-[var(--shadow-md)]",
        hoverEffect && "hover:shadow-[var(--shadow-md)] hover:border-[var(--color-border-hover)] hover:bg-[rgba(245,243,240,0.3)]",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("heading-card", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-body text-[var(--color-muted-foreground)] flex-1", className)} {...props} />;
}

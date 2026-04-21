import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 safe-tap shrink-0 px-6",
          
          variant === "primary" && 
            "bg-[var(--color-accent)] text-[var(--color-accent-foreground)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-accent-secondary)] hover:shadow-[var(--shadow-accent)] hover:-translate-y-0.5 active:translate-y-0",
          
          variant === "secondary" && 
            "bg-transparent border border-[var(--color-foreground)] text-[var(--color-foreground)] hover:bg-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
          
          variant === "ghost" && 
            "bg-transparent text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:underline decoration-[var(--color-accent)] underline-offset-4",

          variant === "whatsapp" &&
            "bg-[#25D366] text-white shadow-[var(--shadow-sm)] hover:bg-[#20BE5C] hover:-translate-y-0.5 active:translate-y-0 border-none",
            
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

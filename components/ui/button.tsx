import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "accent" | "cyan" | "fuchsia";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] cursor-pointer select-none",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm":
              variant === "default",
            "border border-white/15 dark:border-white/10 bg-surface/50 backdrop-blur-md hover:bg-white/10 hover:border-white/25 text-foreground":
              variant === "outline",
            "hover:bg-white/10 hover:text-foreground text-foreground/80":
              variant === "ghost",
            "bg-studio-lime text-black font-bold shadow-[0_0_25px_rgba(204,255,0,0.35)] hover:shadow-[0_0_35px_rgba(204,255,0,0.55)] hover:bg-studio-lime/90":
              variant === "accent",
            "bg-studio-cyan text-black font-bold shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:shadow-[0_0_35px_rgba(0,240,255,0.55)] hover:bg-studio-cyan/90":
              variant === "cyan",
            "bg-studio-fuchsia text-white font-bold shadow-[0_0_25px_rgba(255,0,127,0.35)] hover:shadow-[0_0_35px_rgba(255,0,127,0.55)] hover:bg-studio-fuchsia/90":
              variant === "fuchsia",
            "h-10 px-6 py-2 min-h-[44px]": size === "default",
            "h-8 px-4 text-xs min-h-[36px]": size === "sm",
            "h-12 px-8 text-base min-h-[48px]": size === "lg",
            "h-10 w-10 p-0 min-h-[44px] min-w-[44px]": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

"use client"

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function Button({
  variant = "primary",
  children,
  className,
  asChild,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-teal to-[#06AED9] text-white hover:scale-[1.03] hover:shadow-2xl hover:shadow-teal/40 focus:ring-teal button-primary font-bold transition-all duration-300 ease-out relative overflow-hidden group",
    secondary:
      "bg-gradient-to-r from-royal-blue to-[#1E3A6F] text-white hover:scale-[1.03] hover:shadow-2xl hover:shadow-royal-blue/40 focus:ring-royal-blue shadow-lg border-2 border-royal-blue/20 backdrop-blur-sm font-bold transition-all duration-300 ease-out relative overflow-hidden group",
    outline:
      "bg-white/98 backdrop-blur-sm border-2 border-teal/60 text-charcoal hover:bg-gradient-to-r hover:from-teal hover:to-[#06AED9] hover:text-white hover:scale-[1.03] hover:shadow-2xl hover:shadow-teal/30 hover:border-teal focus:ring-teal button-outline font-bold transition-all duration-300 ease-out relative overflow-hidden group",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (asChild && children && typeof children === "object" && "props" in children) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <button className={classes} {...props}>
      {/* Premium shimmer effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <span className="relative z-10 inline-flex items-center justify-center">{children}</span>
    </button>
  );
}


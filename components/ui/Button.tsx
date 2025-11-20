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
      "bg-teal text-white hover:scale-[1.01] hover:shadow-lg focus:ring-teal button-primary font-bold transition-all duration-500 ease-out",
    secondary:
      "bg-royal-blue text-white hover:scale-[1.01] hover:shadow-lg focus:ring-royal-blue shadow-lg border-2 border-royal-blue/20 backdrop-blur-sm font-bold transition-all duration-500 ease-out",
    outline:
      "bg-white/95 backdrop-blur-sm border-2 border-teal text-charcoal hover:bg-teal hover:text-white hover:scale-[1.01] focus:ring-teal hover:border-teal button-outline font-bold transition-all duration-500 ease-out",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (asChild && children && typeof children === "object" && "props" in children) {
    return <div className={classes}>{children}</div>;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}


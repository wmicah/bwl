"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface LogoProps {
  variant?: "white-teal" | "white-royal-blue" | "white-only" | "default";
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export function Logo({
  variant = "default",
  className,
  width = 200,
  height = 60,
  showText = false,
}: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // Map variants to logo files
  // Based on available logos:
  // - white-teal: White and teal version
  // - white-royal-blue: White and royal blue version  
  // - white-only: Full white monochromatic version
  const logoSrcMap: Record<string, string> = {
    "white-teal": "/images/5.png", // White and teal
    "white-royal-blue": "/images/6.png", // White and royal blue
    "white-only": "/images/7.png", // Full white
    default: "/images/6.png", // Default to white and royal blue
  };

  const logoSrc = logoSrcMap[variant] || logoSrcMap.default;

  const logoAlt = "Blue Wave Laundry Logo";

  // Fallback component if image fails to load
  const FallbackLogo = () => {
    const isDarkVariant = variant === "white-only";
    return (
      <div
        className={cn(
          "flex items-center space-x-2",
          isDarkVariant && "text-white"
        )}
      >
        <div
          className={cn(
            "h-10 w-10 rounded-lg flex items-center justify-center bg-teal"
          )}
        >
          <span className="font-heading font-bold text-lg text-white">
            BW
          </span>
        </div>
        <span
          className={cn(
            "font-heading font-bold text-xl",
            isDarkVariant ? "text-white" : "text-royal-blue"
          )}
        >
          Blue Wave Laundry
        </span>
      </div>
    );
  };

  if (imageError) {
    return (
      <Link href="/" className={cn("flex items-center", className)}>
        <FallbackLogo />
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={width}
        height={height}
        className="h-full w-auto object-contain"
        priority
        onError={() => setImageError(true)}
      />
      {showText && (
        <span
          className={cn(
            "ml-2 font-heading font-bold text-xl",
            variant === "white-only" ? "text-white" : "text-royal-blue"
          )}
        >
          Blue Wave Laundry
        </span>
      )}
    </Link>
  );
}


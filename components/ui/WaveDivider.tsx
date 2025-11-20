import { cn } from "@/lib/utils";

interface WaveDividerProps {
  variant?: "top" | "bottom";
  className?: string;
  fillColor?: string;
}

export function WaveDivider({
  variant = "bottom",
  className,
  fillColor = "white",
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        "w-full h-20 md:h-24 overflow-hidden relative",
        variant === "top" && "rotate-180",
        className
      )}
    >
      <svg
        className="w-full h-full wave-animated"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`waveGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fillColor} stopOpacity="1" />
            <stop offset="50%" stopColor={fillColor} stopOpacity="0.95" />
            <stop offset="100%" stopColor={fillColor} stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* Duplicated wave pattern for seamless loop */}
        <g className="wave-path" style={{ animationDuration: "60s" }}>
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill={`url(#waveGrad-${variant})`}
          />
          <path
            d="M1200,60 Q1500,20 1800,60 T2400,60 L2400,120 L1200,120 Z"
            fill={`url(#waveGrad-${variant})`}
          />
        </g>
        <g className="wave-path" style={{ animationDuration: "70s", animationDelay: "5s" }}>
          <path
            d="M0,70 Q300,30 600,70 T1200,70 L1200,120 L0,120 Z"
            fill={fillColor}
            opacity="0.4"
          />
          <path
            d="M1200,70 Q1500,30 1800,70 T2400,70 L2400,120 L1200,120 Z"
            fill={fillColor}
            opacity="0.4"
          />
        </g>
        <g className="wave-path" style={{ animationDuration: "80s", animationDelay: "3s" }}>
          <path
            d="M0,65 Q300,25 600,65 T1200,65 L1200,120 L0,120 Z"
            fill={fillColor}
            opacity="0.2"
          />
          <path
            d="M1200,65 Q1500,25 1800,65 T2400,65 L2400,120 L1200,120 Z"
            fill={fillColor}
            opacity="0.2"
          />
        </g>
      </svg>
    </div>
  );
}


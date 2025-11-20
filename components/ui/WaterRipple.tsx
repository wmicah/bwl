"use client";

interface WaterRippleProps {
  className?: string;
}

export function WaterRipple({ className }: WaterRippleProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-teal/20 animate-ripple"
            style={{
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}


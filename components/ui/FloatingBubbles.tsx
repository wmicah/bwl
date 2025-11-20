"use client";

export function FloatingBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-teal/10 animate-float blur-sm"
          style={{
            left: `${10 + i * 12}%`,
            bottom: `${-5 + (i % 3) * 8}%`,
            width: `${15 + (i % 4) * 8}px`,
            height: `${15 + (i % 4) * 8}px`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${12 + (i % 3) * 3}s`,
          }}
        />
      ))}
      {[...Array(4)].map((_, i) => (
        <div
          key={`large-${i}`}
          className="absolute rounded-full bg-teal/5 animate-float blur-md"
          style={{
            left: `${20 + i * 25}%`,
            bottom: `${10 + i * 10}%`,
            width: `${40 + i * 15}px`,
            height: `${40 + i * 15}px`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${18 + i * 3}s`,
          }}
        />
      ))}
    </div>
  );
}


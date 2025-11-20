import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-8 md:py-12 px-4 md:px-6 lg:px-8",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}


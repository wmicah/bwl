import {
  WashingMachine,
  Shield,
  CreditCard,
  Wifi,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const amenities = [
  {
    title: "High-Capacity Speed Queen Machines",
    description: "Brand new Quantum Touch equipment",
    icon: WashingMachine,
  },
  {
    title: "Ozone Sanitizing Wash",
    description: "Cleaner, fresher results every time",
    icon: Shield,
  },
  {
    title: "Contactless Payment & Loyalty Card",
    description: "No quarters needed, reloadable cards",
    icon: CreditCard,
  },
  {
    title: "Free WiFi",
    description: "6am–10pm, always available",
    icon: Wifi,
  },
];

export function AmenityStrip() {
  return (
    <section className="relative -mt-16 md:-mt-24 mb-12 md:mb-20 z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            // Vary animation directions for visual interest
            const directions: Array<"up" | "down" | "left" | "right" | "scale" | "fade"> = ["up", "down", "left", "right"];
            const direction = directions[index % directions.length];
            return (
              <ScrollReveal
                key={index}
                direction={direction}
                delay={index * 120}
                distance={index % 2 === 0 ? 70 : 50}
              >
                <div
                  className={cn(
                    "bg-cloud-white rounded-card p-5 md:p-6 shadow-card card-flow border border-white/50 water-droplet",
                    index === 0 && "lg:ml-0",
                    index === amenities.length - 1 && "lg:mr-0"
                  )}
                >
                <div className="flex flex-col space-y-3">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center icon-pulse">
                      <Icon className="h-6 w-6 text-teal" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-base md:text-lg text-charcoal mb-2">
                      {amenity.title}
                    </h3>
                    <p className="text-slate-gray text-sm leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import { SectionContainer } from "@/components/ui/SectionContainer";
import { AMENITIES } from "@/lib/constants";
import {
  WashingMachine,
  Shield,
  CreditCard,
  Wifi,
  Clock,
  Globe,
} from "lucide-react";

const iconMap = {
  "washing-machine": WashingMachine,
  shield: Shield,
  "credit-card": CreditCard,
  wifi: Wifi,
  clock: Clock,
  globe: Globe,
};

export function Amenities() {
  return (
    <SectionContainer className="bg-cloud-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AMENITIES.map((amenity, index) => {
          const Icon = iconMap[amenity.icon as keyof typeof iconMap];
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                    {Icon && (
                      <Icon className="h-6 w-6 text-teal" aria-hidden="true" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-slate-gray text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}


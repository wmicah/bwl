import { SectionContainer } from "@/components/ui/SectionContainer";
import { MACHINE_FEATURES } from "@/lib/constants";
import { WashingMachine, Zap, RefreshCw, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [WashingMachine, Zap, RefreshCw, CreditCard, CreditCard];

export function MachinesServices() {
  return (
    <SectionContainer id="services" className="bg-soft-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
        <div>
          <h2 className="font-heading text-h2 text-royal-blue mb-4 text-left">
            Machines & Services
          </h2>
          <p className="text-lg text-slate-gray leading-relaxed">
            State-of-the-art equipment designed for efficiency and superior
            cleaning results. Our brand new Speed Queen Quantum Touch machines
            deliver the best laundry experience in the state.
          </p>
        </div>
        <div className="lg:pt-8">
          <div className="bg-cloud-white rounded-card p-6 shadow-soft border border-white/50">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-xl bg-sky-tint flex items-center justify-center flex-shrink-0">
                <WashingMachine className="h-8 w-8 text-teal" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading font-semibold text-charcoal text-lg">
                  Brand New Equipment
                </p>
                <p className="text-slate-gray text-sm">
                  Every machine is brand new and professionally maintained
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MACHINE_FEATURES.map((feature, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={index}
              className={cn(
                "bg-cloud-white rounded-card p-6 shadow-soft card-flow water-droplet",
                feature.highlight && "ring-2 ring-teal ring-offset-4"
              )}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {feature.highlight && (
                <div className="mb-4">
                  <span className="inline-block bg-gold-accent text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                    Largest in the State
                  </span>
                </div>
              )}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center icon-pulse">
                    <Icon className="h-6 w-6 text-teal" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-gray text-sm leading-relaxed">
                    {feature.description}
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


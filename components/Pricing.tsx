import { SectionContainer } from "@/components/ui/SectionContainer";
import { DollarSign } from "lucide-react";

export function Pricing() {
  // TODO: Replace with actual pricing data
  const pricingTiers = [
    {
      name: "Small Load",
      capacity: "Up to 20 lbs",
      price: "TBD",
    },
    {
      name: "Medium Load",
      capacity: "Up to 40 lbs",
      price: "TBD",
    },
    {
      name: "Large Load",
      capacity: "Up to 60 lbs",
      price: "TBD",
    },
    {
      name: "Extra Large",
      capacity: "Up to 100 lbs",
      price: "TBD",
      highlight: true,
    },
  ];

  return (
    <SectionContainer id="pricing" className="bg-cloud-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-teal" aria-hidden="true" />
            </div>
            <h2 className="font-heading text-h2 text-royal-blue">
              Pricing
            </h2>
          </div>
          <p className="text-lg text-slate-gray leading-relaxed">
            Competitive pricing for all load sizes. Contact us for current rates.
            All machines accept contactless payment and loyalty cards.
          </p>
        </div>
        <div className="lg:pt-8">
          <div className="bg-white rounded-card p-6 shadow-soft border border-cloud-white">
            <p className="text-sm text-slate-gray mb-2">Payment Options</p>
            <p className="font-heading font-semibold text-charcoal">
              Contactless Payment & Loyalty Cards
            </p>
            <p className="text-sm text-slate-gray mt-2">
              No quarters needed. Reloadable cards available.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`bg-white rounded-card p-6 shadow-soft card-flow water-droplet ${
              tier.highlight ? "ring-2 ring-teal ring-offset-4" : ""
            }`}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {tier.highlight && (
              <div className="mb-4">
                <span className="inline-block bg-gold-accent text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                  Largest Capacity
                </span>
              </div>
            )}
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
              {tier.name}
            </h3>
            <p className="text-slate-gray text-sm mb-4">{tier.capacity}</p>
            <div className="text-2xl font-bold text-royal-blue">{tier.price}</div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-slate-gray text-sm">
          All machines accept contactless payment and loyalty cards. No quarters
          needed.
        </p>
      </div>
    </SectionContainer>
  );
}


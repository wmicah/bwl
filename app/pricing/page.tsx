import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { DollarSign, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function PricingPage() {
  const washPricing = [
    {
      name: "Small Load",
      capacity: "Up to 20 lbs",
      price: "TBD",
      description: "Perfect for small loads and delicates",
    },
    {
      name: "Medium Load",
      capacity: "Up to 40 lbs",
      price: "TBD",
      description: "Ideal for regular household laundry",
    },
    {
      name: "Large Load",
      capacity: "Up to 60 lbs",
      price: "TBD",
      description: "Great for families and larger items",
    },
    {
      name: "Extra Large",
      capacity: "Up to 100 lbs",
      price: "TBD",
      highlight: true,
      description: "Largest capacity in the state",
    },
  ];

  const dryPricing = [
    {
      name: "Standard Dry",
      time: "30-45 minutes",
      price: "TBD",
      description: "Standard drying cycle",
    },
    {
      name: "Extended Dry",
      time: "60+ minutes",
      price: "TBD",
      description: "For heavy items or extra drying",
    },
  ];

  const faqs = [
    {
      question: "Do you accept credit cards?",
      answer:
        "Yes! We accept all major credit and debit cards through our contactless payment system. No quarters needed.",
    },
    {
      question: "Do you have attendants?",
      answer:
        "Our facility is self-service, but we're always available to help if you have questions. Contact us via email or phone.",
    },
    {
      question: "How long does a wash take?",
      answer:
        "Most wash cycles take 25-35 minutes. Combined with drying time, you can expect to be in and out in about 45 minutes total.",
    },
    {
      question: "Do you offer loyalty card discounts?",
      answer:
        "Yes! Our reloadable loyalty cards offer convenience and may include special promotions. Ask about current discounts when you visit.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept contactless credit/debit cards, mobile payments, and reloadable loyalty cards. Loyalty cards can be loaded with cash, credit, or EBT.",
    },
    {
      question: "Are there special rates for bulk or commercial laundry?",
      answer:
        "Contact us for information about bulk pricing and commercial laundry services. We offer competitive rates for larger volumes.",
    },
  ];

  return (
    <main className="min-h-screen bg-soft-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-sky-tint to-soft-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-teal" aria-hidden="true" />
              </div>
              <h1 className="font-heading text-h1 text-royal-blue">
                Pricing
              </h1>
            </div>
            <p className="text-lg md:text-xl text-slate-gray leading-relaxed mb-8">
              Transparent, competitive pricing for all load sizes. Contact us
              for current rates and special promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button variant="primary">Contact for Rates</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">View Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="bottom" fillColor="#FAFAFA" />

      {/* Wash Pricing */}
      <SectionContainer className="bg-soft-white">
        <div className="mb-12">
          <h2 className="font-heading text-h2 text-royal-blue mb-4">
            Wash Pricing
          </h2>
          <p className="text-lg text-slate-gray max-w-2xl mb-8">
            Choose the right machine size for your load. All machines include
            ozone sanitizing technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {washPricing.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 ease-out ${
                tier.highlight
                  ? "bg-gradient-to-br from-teal/10 to-royal-blue/10 border-2 border-teal/40 shadow-md"
                  : "bg-white border-[#E4ECF0]"
              }`}
            >
              {tier.highlight && (
                <div className="mb-4">
                  <span className="inline-block bg-teal text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Largest Capacity
                  </span>
                </div>
              )}
              <h3 className={`font-heading font-semibold text-lg mb-2 ${
                tier.highlight ? "text-[#050DD7]" : "text-charcoal"
              }`}>
                {tier.name}
              </h3>
              <p className="text-slate-gray text-sm mb-2">{tier.capacity}</p>
              <p className={`text-2xl font-bold mb-3 ${
                tier.highlight ? "text-[#050DD7]" : "text-royal-blue"
              }`}>
                {tier.price}
              </p>
              <p className="text-slate-gray text-xs leading-relaxed">{tier.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Dry Pricing */}
      <SectionContainer className="bg-cloud-white">
        <div className="mb-12">
          <h2 className="font-heading text-h2 text-royal-blue mb-4">
            Dry Pricing
          </h2>
          <p className="text-lg text-slate-gray max-w-2xl mb-8">
            Our reversing dryers ensure even drying in less time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {dryPricing.map((tier, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 ease-out"
            >
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                {tier.name}
              </h3>
              <p className="text-slate-gray text-sm mb-2">{tier.time}</p>
              <p className="text-2xl font-bold text-royal-blue mb-3">
                {tier.price}
              </p>
              <p className="text-slate-gray text-xs">{tier.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Special Cycles */}
      <SectionContainer className="bg-soft-white">
        <div className="mb-12">
          <h2 className="font-heading text-h2 text-royal-blue mb-4">
            Special Cycles
          </h2>
          <p className="text-lg text-slate-gray max-w-2xl mb-8">
            All wash cycles include ozone sanitizing technology at no extra
            cost. This advanced cleaning system is included with every wash.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
            <h3 className="font-heading font-semibold text-lg text-[#050DD7] mb-2">
              Ozone Sanitizing
            </h3>
            <p className="text-slate-gray text-sm mb-3 leading-relaxed">
              Included with every wash cycle
            </p>
            <p className="text-teal font-semibold">No Extra Charge</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
            <h3 className="font-heading font-semibold text-lg text-[#050DD7] mb-2">
              Sanitizing Cycles
            </h3>
            <p className="text-slate-gray text-sm mb-3 leading-relaxed">
              Self-cleaning detergent dispensers
            </p>
            <p className="text-teal font-semibold">Included</p>
          </div>
        </div>
      </SectionContainer>

      {/* Payment Info */}
      <SectionContainer className="bg-cloud-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-h2 text-royal-blue mb-6 text-center">
            Payment Options
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-[#E4ECF0] shadow-md">
            <div className="space-y-4">
              <div>
                <h3 className="font-heading font-semibold text-charcoal mb-2">
                  Contactless Payment
                </h3>
                <p className="text-slate-gray text-sm">
                  Credit cards, debit cards, and mobile payments accepted
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-charcoal mb-2">
                  Loyalty Cards
                </h3>
                <p className="text-slate-gray text-sm">
                  Reloadable cards available. Load with cash, credit, or EBT.
                  Ask about current loyalty card discounts.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-charcoal mb-2">
                  No Quarters Needed
                </h3>
                <p className="text-slate-gray text-sm">
                  All machines accept modern payment methods. 30+ languages
                  supported on payment kiosks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="bg-soft-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <HelpCircle className="h-8 w-8 text-teal" aria-hidden="true" />
            <h2 className="font-heading text-h2 text-royal-blue">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out"
              >
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-slate-gray mb-4">
              Have more questions? We&apos;re here to help.
            </p>
            <Link href="/contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </main>
  );
}

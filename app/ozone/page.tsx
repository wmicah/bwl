import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { Shield, CheckCircle2, Users, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function OzonePage() {
  const benefits = [
    "Softer, brighter linens",
    "Longer linen life",
    "Better smelling results",
    "Faster dry times",
    "Consistent sanitation every wash",
    "Kills mold, mildew, bacteria",
  ];

  const whoBenefits = [
    {
      group: "Families",
      description:
        "Especially important for households with children, babies, or elderly family members who need extra protection from germs and allergens.",
    },
    {
      group: "Athletes",
      description:
        "Perfect for removing odors from workout clothes, sports equipment, and gear that traditional washing can't fully clean.",
    },
    {
      group: "People with Sensitive Skin",
      description:
        "Ozone sanitizing removes allergens and irritants without harsh chemicals, making it ideal for those with skin sensitivities.",
    },
    {
      group: "Healthcare Workers",
      description:
        "Essential for those who need to ensure their clothing is thoroughly sanitized after exposure to various environments.",
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
              <div className="h-12 w-12 rounded-xl bg-teal flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h1 className="font-heading text-h1 text-royal-blue">
                Ozone Sanitation
              </h1>
            </div>
            <p className="text-lg md:text-xl text-slate-gray leading-relaxed mb-8">
              Advanced ozone sanitizing technology that goes beyond traditional
              cleaning. Every wash at Blue Wave Laundry includes ozone
              sanitation—included at no extra cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/">
                <Button variant="primary">Get Directions</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">View All Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="bottom" fillColor="#E6F9FF" />

      {/* What is Ozone Laundry */}
      <SectionContainer className="bg-sky-tint">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-h2 text-royal-blue mb-6">
              What is Ozone Laundry?
            </h2>
            <p className="text-lg text-slate-gray leading-relaxed mb-6">
              Ozone (O₃) is a powerful, natural sanitizing agent that&apos;s more
              effective than chlorine bleach at killing bacteria, viruses, mold,
              and mildew. Unlike traditional detergents, ozone works at lower
              temperatures and breaks down into harmless oxygen after use.
            </p>
            <p className="text-slate-gray leading-relaxed mb-6">
              At Blue Wave Laundry, every wash cycle includes ozone sanitizing
              technology. This means your clothes aren&apos;t just clean—they&apos;re
              thoroughly sanitized, naturally.
            </p>
            <div className="bg-white rounded-card p-6 shadow-soft">
              <p className="text-sm text-slate-gray">
                <strong className="text-charcoal">Included with every wash:</strong>{" "}
                Ozone sanitizing technology at no extra charge
              </p>
            </div>
          </div>
          <div className="bg-cloud-white rounded-card p-8 shadow-card">
            <div className="text-center">
              <FlaskConical className="h-16 w-16 text-teal mx-auto mb-4" />
              <p className="font-heading font-semibold text-charcoal text-lg mb-2">
                Natural Sanitization
              </p>
              <p className="text-slate-gray text-sm">
                Ozone is a natural, powerful sanitizer that breaks down into
                harmless oxygen
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      <WaveDivider variant="bottom" fillColor="#FAFAFA" />

      {/* Benefits */}
      <SectionContainer className="bg-soft-white">
        <div className="mb-12">
          <h2 className="font-heading text-h2 text-royal-blue mb-4">
            Benefits of Ozone Laundry
          </h2>
          <p className="text-lg text-slate-gray max-w-2xl">
            Experience the difference that ozone sanitizing makes in your
            laundry results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out"
            >
              <div className="flex items-start space-x-3">
                <CheckCircle2
                  className="h-6 w-6 text-teal flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-slate-gray font-medium">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Detailed Benefits */}
      <SectionContainer className="bg-cloud-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
              Softer, Brighter Linens
            </h3>
            <p className="text-slate-gray text-sm leading-relaxed">
              Ozone naturally brightens whites and colors without harsh
              chemicals. Your linens come out softer and more vibrant.
            </p>
          </div>
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
              Longer Linen Life
            </h3>
            <p className="text-slate-gray text-sm leading-relaxed">
              Because ozone works at lower temperatures and is gentler than
              bleach, your fabrics last longer and maintain their quality.
            </p>
          </div>
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
              Better Smelling Results
            </h3>
            <p className="text-slate-gray text-sm leading-relaxed">
              Ozone eliminates odors at the molecular level, leaving your
              clothes with a fresh, clean smell—not a perfumed mask.
            </p>
          </div>
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
              Faster Dry Times
            </h3>
            <p className="text-slate-gray text-sm leading-relaxed">
              Ozone-treated fabrics dry faster because the sanitizing process
              helps remove moisture more efficiently.
            </p>
          </div>
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
              Consistent Sanitation
            </h3>
            <p className="text-slate-gray text-sm leading-relaxed">
              Every wash cycle delivers the same high level of sanitization,
              ensuring consistent results every time.
            </p>
          </div>
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
              Kills Mold, Mildew, Bacteria
            </h3>
            <p className="text-slate-gray text-sm leading-relaxed">
              Ozone is highly effective at eliminating harmful microorganisms,
              including mold, mildew, and bacteria that can cause odors and
              health issues.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Science Behind Ozone */}
      <SectionContainer className="bg-soft-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <FlaskConical className="h-8 w-8 text-teal" aria-hidden="true" />
            <h2 className="font-heading text-h2 text-royal-blue">
              The Science Behind Ozone
            </h2>
          </div>
          <div className="bg-cloud-white rounded-card p-8 shadow-card">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
                  How Ozone Works
                </h3>
                <p className="text-slate-gray leading-relaxed mb-4">
                  Ozone (O₃) is a naturally occurring molecule made of three
                  oxygen atoms. It&apos;s one of the most powerful oxidizing agents
                  available, making it highly effective at breaking down
                  organic matter, eliminating odors, and destroying
                  microorganisms.
                </p>
                <p className="text-slate-gray leading-relaxed">
                  When ozone comes into contact with bacteria, viruses, mold, or
                  mildew, it oxidizes their cell walls, effectively destroying
                  them. After the sanitizing process, ozone naturally breaks
                  down into harmless oxygen (O₂), leaving no chemical residues.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
                  Why Ozone is Superior
                </h3>
                <ul className="space-y-2 text-slate-gray">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal mt-1">•</span>
                    <span>
                      <strong>More effective:</strong> Ozone is 3,000 times
                      faster at killing bacteria than chlorine
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal mt-1">•</span>
                    <span>
                      <strong>Works at lower temperatures:</strong> Effective
                      even in cold water, saving energy
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal mt-1">•</span>
                    <span>
                      <strong>No chemical residues:</strong> Breaks down into
                      harmless oxygen after use
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal mt-1">•</span>
                    <span>
                      <strong>Eliminates odors:</strong> Destroys odor-causing
                      molecules at the source
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Comparison */}
      <SectionContainer className="bg-cloud-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-h2 text-royal-blue mb-8 text-center">
            Ozone vs. Traditional Washing
          </h2>
          <div className="bg-white rounded-card p-8 shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-cloud-white">
                    <th className="text-left py-3 px-4 font-heading font-semibold text-charcoal">
                      Feature
                    </th>
                    <th className="text-center py-3 px-4 font-heading font-semibold text-teal">
                      Ozone Laundry
                    </th>
                    <th className="text-center py-3 px-4 font-heading font-semibold text-slate-gray">
                      Traditional Washing
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-cloud-white">
                    <td className="py-3 px-4 text-slate-gray">Sanitization</td>
                    <td className="py-3 px-4 text-center text-teal font-medium">
                      ✓ Kills 99.9% of bacteria
                    </td>
                    <td className="py-3 px-4 text-center text-slate-gray">
                      Limited
                    </td>
                  </tr>
                  <tr className="border-b border-cloud-white">
                    <td className="py-3 px-4 text-slate-gray">Odor Removal</td>
                    <td className="py-3 px-4 text-center text-teal font-medium">
                      ✓ Eliminates at source
                    </td>
                    <td className="py-3 px-4 text-center text-slate-gray">
                      Masks with perfumes
                    </td>
                  </tr>
                  <tr className="border-b border-cloud-white">
                    <td className="py-3 px-4 text-slate-gray">Fabric Care</td>
                    <td className="py-3 px-4 text-center text-teal font-medium">
                      ✓ Gentler, longer-lasting
                    </td>
                    <td className="py-3 px-4 text-center text-slate-gray">
                      Can fade/weaken
                    </td>
                  </tr>
                  <tr className="border-b border-cloud-white">
                    <td className="py-3 px-4 text-slate-gray">Temperature</td>
                    <td className="py-3 px-4 text-center text-teal font-medium">
                      ✓ Works in cold water
                    </td>
                    <td className="py-3 px-4 text-center text-slate-gray">
                      Often needs hot water
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-gray">Residues</td>
                    <td className="py-3 px-4 text-center text-teal font-medium">
                      ✓ None (breaks down to oxygen)
                    </td>
                    <td className="py-3 px-4 text-center text-slate-gray">
                      Chemical residues
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Who Benefits */}
      <SectionContainer className="bg-soft-white">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-teal" aria-hidden="true" />
            <h2 className="font-heading text-h2 text-royal-blue">
              Who Benefits from Ozone Laundry?
            </h2>
          </div>
          <p className="text-lg text-slate-gray max-w-2xl">
            Ozone sanitizing is especially valuable for certain groups, though
            everyone benefits from cleaner, fresher laundry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whoBenefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out"
            >
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
                {item.group}
              </h3>
              <p className="text-slate-gray text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-sky-tint">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-h2 text-royal-blue mb-4">
            Experience Ozone Sanitation
          </h2>
          <p className="text-lg text-slate-gray mb-8">
            Every wash at Blue Wave Laundry includes ozone sanitizing
            technology—at no extra cost. Visit us today and feel the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary">Get Directions</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Search, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import Link from "next/link";

export default function LostFoundPage() {
  return (
    <main className="min-h-screen bg-soft-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 bg-gradient-to-b from-white to-[#EAF7FB] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "25s", animationDelay: "5s" }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="down" delay={0} distance={50}>
            <div className="max-w-3xl">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-royal-blue via-teal to-royal-blue bg-clip-text text-transparent mb-4 md:mb-6">
                Lost and Found
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={150} distance={20}>
            <div className="max-w-3xl">
              <p className="text-base md:text-lg lg:text-xl text-slate-gray leading-relaxed mb-3 md:mb-4">
                We understand how frustrating it can be to misplace something. At Blue Wave Laundry, we&apos;re here to help you recover your lost items.
              </p>
              <p className="text-base text-slate-gray">
                Our team carefully collects and stores all found items, and we&apos;ll do our best to reunite you with your belongings.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveDivider variant="bottom" fillColor="#FAFAFA" />

      {/* How We Help */}
      <SectionContainer className="bg-soft-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal direction="down" delay={0} distance={50}>
            <h2 className="font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6 text-center">
              How We Can Help
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={150} distance={20}>
            <p className="text-lg text-slate-gray leading-relaxed mb-8 text-center max-w-2xl mx-auto">
              Our team regularly collects items left behind and stores them safely. We&apos;re committed to helping you recover your belongings.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ScrollReveal direction="left" delay={200} distance={80}>
              <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-royal-blue mb-2">
                      Regular Collection
                    </h3>
                    <p className="text-slate-gray">
                      Our staff regularly checks for and collects items left behind throughout the facility.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={300} distance={80}>
              <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-royal-blue mb-2">
                      Safe Storage
                    </h3>
                    <p className="text-slate-gray">
                      All found items are safely stored and organized for easy retrieval.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionContainer>

      {/* Report Lost Item */}
      <SectionContainer className="bg-cloud-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "25s", animationDelay: "3s" }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal direction="down" delay={0} distance={50}>
            <h2 className="font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6">
              Report a Lost Item
            </h2>
          </ScrollReveal>
          
          <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm mb-8">
            <ScrollReveal direction="fade" delay={150} distance={20}>
              <p className="text-lg text-slate-gray leading-relaxed mb-6">
                If you&apos;ve lost something at our facility, please contact us as soon as possible. The more details you can provide, the better we can help locate your item.
              </p>
              
              <div className="bg-teal/5 rounded-lg p-6 border-l-4 border-teal mb-6">
                <h3 className="font-heading font-semibold text-xl text-royal-blue mb-4">
                  Please Include in Your Message:
                </h3>
                <ul className="space-y-3 text-slate-gray">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 mr-3 flex-shrink-0" />
                    <span>A detailed description of the item (color, size, brand, distinguishing features)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 mr-3 flex-shrink-0" />
                    <span>The approximate date and time you visited</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 mr-3 flex-shrink-0" />
                    <span>The area where you think you may have left it (washing area, drying area, seating area, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 mr-3 flex-shrink-0" />
                    <span>Your contact information (name, phone number, email)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-teal/5 to-royal-blue/5 rounded-lg p-6 border-2 border-teal/20">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-teal to-[#06AED9] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-xl text-royal-blue mb-2">
                      Contact Us
                    </h3>
              <p className="text-slate-gray mb-4">
                    Send us an email with the details above, and we&apos;ll get back to you as soon as possible.
                  </p>
                    <a
                      href={`mailto:${BRAND.email}?subject=Lost Item Inquiry`}
                      className="inline-flex items-center text-teal hover:text-royal-blue transition-colors text-lg font-medium"
                    >
                      {BRAND.email}
                      <Mail className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionContainer>

      {/* Important Information */}
      <SectionContainer className="bg-soft-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal direction="down" delay={0} distance={50}>
            <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm">
              <p className="text-sm text-slate-gray leading-relaxed">
                <strong className="text-royal-blue">Please note:</strong> Blue Wave Laundry is not responsible for items lost or left behind. We make every effort to collect and store found items, but we cannot guarantee recovery of lost belongings.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-cloud-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "25s", animationDelay: "3s" }}
          />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal direction="fade" delay={0} distance={20}>
            <p className="text-lg text-slate-gray mb-6">
              Need to contact us about something else?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faq">
                <Button variant="primary">View FAQ</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      <Footer />
    </main>
  );
}


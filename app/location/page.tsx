import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BRAND, HOURS } from "@/lib/constants";
import { MapPin, Clock } from "lucide-react";
export default function LocationPage() {


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
                Location & Directions
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={150} distance={20}>
            <div className="max-w-3xl">
              <p className="text-base md:text-lg lg:text-xl text-slate-gray leading-relaxed mb-3 md:mb-4">
                Visit us at our convenient Hillsboro location. We&apos;re open <strong className="text-royal-blue">7 days a week, 6am–10pm</strong>, with easy parking and front door access.
              </p>
              <p className="text-base text-slate-gray">
                <strong className="text-teal">Find us on Google!</strong> Search for &quot;Blue Wave Laundry&quot; on Google Maps or Google Search—we&apos;re listed on Google Business and easy to find.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveDivider variant="bottom" fillColor="#FAFAFA" />

      {/* Address & Hours */}
      <SectionContainer className="bg-soft-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
          <ScrollReveal direction="left" delay={0} distance={80}>
            <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-teal to-[#06AED9] rounded-lg flex items-center justify-center shadow-md">
                    <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-royal-blue mb-3">
                    Address
                  </h3>
                  <address className="text-slate-gray not-italic leading-relaxed">
                    {BRAND.address.street}
                    <br />
                    {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
                  </address>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200} distance={80}>
            <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-gradient-to-br from-teal to-[#06AED9] rounded-lg flex items-center justify-center shadow-md">
                    <Clock className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-royal-blue mb-3">
                    Hours
                  </h3>
                  <p className="text-lg text-slate-gray leading-relaxed mb-2 font-medium">
                    {HOURS.full}
                  </p>
                  <p className="text-sm text-slate-gray">
                    Open <strong className="text-royal-blue">365 days a year</strong>, including holidays
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Map */}
      <SectionContainer className="bg-cloud-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "25s", animationDelay: "3s" }}
          />
        </div>
        <div className="mb-6 relative z-10">
          <ScrollReveal direction="down" delay={0} distance={50}>
            <h2 className="font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-4">
              Find Us on the Map
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={150} distance={20}>
            <p className="text-lg text-slate-gray mb-2">
              Use the map below to get turn-by-turn directions.
            </p>
            <p className="text-base text-slate-gray">
              You can also find us by searching <strong className="text-royal-blue">&quot;Blue Wave Laundry&quot;</strong> on Google Maps or Google Search—we&apos;re <strong className="text-teal">listed on Google Business</strong> and easy to locate.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal direction="fade" delay={200} distance={20}>
          <div className="bg-white rounded-lg overflow-hidden border border-slate-200 shadow-sm relative z-10">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039861.7136954453!2d-124.46762282494693!3d45.081988792317944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54951b98fd1ed5f5%3A0x18b321593c0436d3!2sBlue%20Wave%20Laundry!5e0!3m2!1sen!2sus!4v1765310654200!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Blue Wave Laundry Location"
              />
            </div>
          </div>
        </ScrollReveal>
      </SectionContainer>




      <Footer />
    </main>
  );
}

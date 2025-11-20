import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ContactForm } from "@/components/ContactForm";
import { BRAND, HOURS } from "@/lib/constants";
import { Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const fullAddress = `${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.state} ${BRAND.address.zip}`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;

  return (
    <main className="min-h-screen bg-soft-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-sky-tint to-soft-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-h1 text-royal-blue mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-slate-gray leading-relaxed mb-8">
              Get in touch with Blue Wave Laundry. We&apos;re here to help with all
              your laundry needs, answer questions, or just say hello.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider variant="bottom" fillColor="#FAFAFA" />

      {/* Contact Info Cards */}
      <SectionContainer className="bg-soft-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-cloud-white rounded-card p-6 shadow-soft">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  Address
                </h3>
                <address className="text-slate-gray not-italic leading-relaxed text-sm">
                  {BRAND.address.street}
                  <br />
                  {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
                </address>
                <Link
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-royal-blue transition-colors text-sm mt-2 inline-block"
                >
                  Get directions →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-cloud-white rounded-card p-6 shadow-soft">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                  <Clock className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  Hours
                </h3>
                <p className="text-slate-gray leading-relaxed text-sm">
                  {HOURS.full}
                </p>
                <p className="text-slate-gray text-xs mt-1">
                  Open 365 days a year
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cloud-white rounded-card p-6 shadow-soft">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                  <Mail className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-teal hover:text-royal-blue transition-colors text-sm block"
                >
                  {BRAND.email}
                </a>
                <p className="text-slate-gray text-xs mt-1">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Contact Form */}
      <SectionContainer className="bg-cloud-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h2 className="font-heading text-h2 text-royal-blue mb-4">
              Send Us a Message
            </h2>
            <p className="text-slate-gray">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible. For immediate assistance, visit us during business hours.
            </p>
          </div>
          <div className="bg-white rounded-card p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </SectionContainer>

      {/* Map */}
      <SectionContainer className="bg-soft-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-h2 text-royal-blue mb-6 text-center">
            Visit Us
          </h2>
          <div className="bg-cloud-white rounded-card overflow-hidden shadow-card">
            <div className="aspect-video bg-gradient-to-br from-sky-tint to-mint-glow flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-teal mx-auto mb-4 opacity-50" />
                <p className="text-slate-gray text-sm mb-2">Map View</p>
                <p className="text-slate-gray text-xs mb-4">{fullAddress}</p>
                <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <button className="bg-teal text-white px-6 py-3 rounded-xl font-medium hover:bg-teal/90 transition-colors">
                    Open in Google Maps
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </main>
  );
}

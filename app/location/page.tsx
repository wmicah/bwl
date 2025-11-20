import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { BRAND, HOURS } from "@/lib/constants";
import { MapPin, Clock, Car, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function LocationPage() {
  const fullAddress = `${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.state} ${BRAND.address.zip}`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;

  const faqs = [
    {
      question: "Do you have parking?",
      answer:
        "Yes! We have ample parking available with front door pull-up access. Parking is free and convenient.",
    },
    {
      question: "Are you open holidays?",
      answer:
        "Yes, we're open 365 days a year, including holidays. Our hours are 6am–10pm, 7 days a week.",
    },
    {
      question: "Is the facility wheelchair accessible?",
      answer:
        "Yes, our facility is fully wheelchair accessible with easy loading and unloading areas.",
    },
    {
      question: "What's the best way to get here?",
      answer:
        "We're located on SE Baseline St in Hillsboro with easy access from major roads. Use the map above for turn-by-turn directions.",
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
                <MapPin className="h-6 w-6 text-teal" aria-hidden="true" />
              </div>
              <h1 className="font-heading text-h1 text-royal-blue">
                Location & Directions
              </h1>
            </div>
            <p className="text-lg md:text-xl text-slate-gray leading-relaxed mb-8">
              Visit us at our convenient Hillsboro location. We&apos;re open 7 days a
              week, 6am–10pm, with easy parking and front door access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Open in Google Maps</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="bottom" fillColor="#FAFAFA" />

      {/* Address & Hours */}
      <SectionContainer className="bg-soft-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
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
                <address className="text-slate-gray not-italic leading-relaxed">
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
          <div className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
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
                <p className="text-slate-gray leading-relaxed mb-2">
                  {HOURS.full}
                </p>
                <p className="text-slate-gray text-sm">
                  Open 365 days a year, including holidays
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Map */}
      <SectionContainer className="bg-cloud-white">
        <div className="mb-6">
          <h2 className="font-heading text-h2 text-royal-blue mb-4">
            Find Us on the Map
          </h2>
          <p className="text-slate-gray">
            Use the map below to get turn-by-turn directions to our location.
          </p>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden border border-[#E4ECF0] shadow-md">
          {/* TODO: Replace with actual Google Maps embed */}
          <div className="aspect-video bg-gradient-to-br from-sky-tint to-mint-glow flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 text-teal mx-auto mb-4 opacity-50" />
              <p className="text-slate-gray text-sm mb-2">Google Maps</p>
              <p className="text-slate-gray text-xs mb-4">{fullAddress}</p>
              <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="text-sm">
                  Open in Google Maps
                </Button>
              </Link>
              <p className="text-slate-gray text-xs mt-4">
                To embed: Add your Google Maps API key and update the embed URL
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Parking Info */}
      <SectionContainer className="bg-soft-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                <Car className="h-6 w-6 text-teal" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-h2 text-royal-blue">
                Parking & Access
              </h2>
            </div>
            <p className="text-lg text-slate-gray leading-relaxed mb-6">
              We&apos;ve made it easy to get to Blue Wave Laundry with convenient
              parking and easy access.
            </p>
            <ul className="space-y-3 text-slate-gray mb-6">
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Ample free parking available</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Front door pull-up access</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Easy loading and unloading</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Wheelchair accessible</span>
              </li>
            </ul>
          </div>
          <div className="bg-cloud-white rounded-card p-8 shadow-card">
            <div className="text-center">
              <Car className="h-16 w-16 text-teal mx-auto mb-4" />
              <p className="font-heading font-semibold text-charcoal text-lg mb-2">
                Convenient Parking
              </p>
              <p className="text-slate-gray text-sm">
                Free parking right at the front door for easy access
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Nearby Attractions */}
      <SectionContainer className="bg-cloud-white">
        <div className="mb-8">
          <h2 className="font-heading text-h2 text-royal-blue mb-4">
            While You&apos;re Here
          </h2>
          <p className="text-slate-gray max-w-2xl">
            Our Hillsboro location is conveniently situated near shopping,
            dining, and other services. Make the most of your visit.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-charcoal mb-2">
              Shopping & Dining
            </h3>
            <p className="text-slate-gray text-sm">
              Multiple shopping centers and restaurants within walking distance
            </p>
          </div>
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-charcoal mb-2">
              Public Transit
            </h3>
            <p className="text-slate-gray text-sm">
              Easy access via public transportation routes
            </p>
          </div>
          <div className="bg-white rounded-card p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-charcoal mb-2">
              Free WiFi
            </h3>
            <p className="text-slate-gray text-sm">
              Stay connected while you wait with our free high-speed WiFi
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ */}
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
                className="bg-cloud-white rounded-card p-6 shadow-soft"
              >
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </main>
  );
}

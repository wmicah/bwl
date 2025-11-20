import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export function LocationContact() {
  const fullAddress = `${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.state} ${BRAND.address.zip}`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;

  return (
    <SectionContainer className="bg-soft-white relative">
      <div className="text-center mb-12">
        <h2 className="font-heading text-h2 text-royal-blue mb-4">
          Location & Contact
        </h2>
        <p className="text-lg text-slate-gray max-w-2xl mx-auto">
          Visit us at our convenient Hillsboro location
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="bg-cloud-white rounded-card p-8 shadow-card">
          <h3 className="font-heading text-h3 text-royal-blue mb-6">
            Get in Touch
          </h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-1">Address</h4>
                <address className="text-slate-gray not-italic leading-relaxed">
                  {BRAND.address.street}
                  <br />
                  {BRAND.address.city}, {BRAND.address.state} {BRAND.address.zip}
                </address>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                  <Mail className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-teal hover:text-royal-blue transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                  <Phone className="h-6 w-6 text-teal" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-charcoal mb-1">Phone</h4>
                <p className="text-slate-gray">{BRAND.phone}</p>
              </div>
            </div>

            <div className="pt-4">
              <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="w-full sm:w-auto">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Open in Maps
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-cloud-white rounded-card overflow-hidden shadow-card">
          {/* TODO: Replace with actual embedded map */}
          <div className="aspect-square bg-gradient-to-br from-sky-tint to-mint-glow flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-16 w-16 text-teal mx-auto mb-4 opacity-50" />
              <p className="text-slate-gray text-sm mb-2">Map View</p>
              <p className="text-slate-gray text-xs">{fullAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}


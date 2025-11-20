import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { Gallery } from "@/components/Gallery";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function PhotosPage() {
  return (
    <main className="min-h-screen bg-soft-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-sky-tint to-soft-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-h1 text-royal-blue mb-6">
              Photo Gallery
            </h1>
            <p className="text-lg md:text-xl text-slate-gray leading-relaxed mb-8">
              Take a look at our modern, clean, and well-maintained laundromat
              facility. See why Blue Wave Laundry is the best choice for your
              laundry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/location">
                <Button variant="primary">Visit Us</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">View Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="bottom" fillColor="#FAFAFA" />

      {/* Gallery */}
      <Gallery />

      {/* What You'll See */}
      <SectionContainer className="bg-cloud-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-h2 text-royal-blue mb-8 text-center">
            What You&apos;ll See at Blue Wave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-card p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Clean Interior
              </h3>
              <p className="text-slate-gray text-sm">
                Our facility is meticulously maintained with bright, well-lit
                spaces that create a comfortable environment.
              </p>
            </div>
            <div className="bg-white rounded-card p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Modern Machines
              </h3>
              <p className="text-slate-gray text-sm">
                Brand new Speed Queen Quantum Touch equipment in perfect working
                condition.
              </p>
            </div>
            <div className="bg-white rounded-card p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Payment System
              </h3>
              <p className="text-slate-gray text-sm">
                Easy-to-use contactless payment kiosks supporting 30+ languages.
              </p>
            </div>
            <div className="bg-white rounded-card p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Waiting Area
              </h3>
              <p className="text-slate-gray text-sm">
                Comfortable seating with free WiFi while you wait for your
                laundry.
              </p>
            </div>
            <div className="bg-white rounded-card p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Parking Access
              </h3>
              <p className="text-slate-gray text-sm">
                Front door pull-up access with ample parking for easy loading and
                unloading.
              </p>
            </div>
            <div className="bg-white rounded-card p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Bright & Spacious
              </h3>
              <p className="text-slate-gray text-sm">
                Wide shots show our spacious, well-organized facility designed
                for your comfort.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-soft-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-h2 text-royal-blue mb-4">
            See It For Yourself
          </h2>
          <p className="text-lg text-slate-gray mb-8">
            Pictures can only show so much. Visit Blue Wave Laundry and
            experience the difference firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/location">
              <Button variant="primary">Get Directions</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </main>
  );
}


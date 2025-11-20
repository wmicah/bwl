import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import {
  WashingMachine,
  Zap,
  RefreshCw,
  CreditCard,
  Wifi,
  Car,
  Clock,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-soft-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-sky-tint to-soft-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-h1 text-royal-blue mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-slate-gray leading-relaxed mb-8">
              Everything you need for a superior laundry experience. From
              state-of-the-art Speed Queen machines to ozone sanitation, we&apos;ve
              built Blue Wave Laundry to be the best laundromat in Oregon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/">
                <Button variant="primary">View Pricing</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">Get Directions</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider variant="bottom" fillColor="#FAFAFA" />

      {/* Self-Service Laundry */}
      <SectionContainer className="bg-soft-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                <WashingMachine className="h-6 w-6 text-teal" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-h2 text-royal-blue">
                Self-Service Laundry
              </h2>
            </div>
            <p className="text-lg text-slate-gray leading-relaxed mb-6">
              Our facility is open 365 days a year, 6am–10pm, giving you complete
              flexibility. No appointments needed—just walk in and get your
              laundry done in about 45 minutes.
            </p>
            <ul className="space-y-3 text-slate-gray">
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Average visit time: ~45 minutes</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Perfect for families, contractors, and bulk laundry</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>No quarters needed—contactless payment available</span>
              </li>
            </ul>
          </div>
          <div className="bg-cloud-white rounded-2xl p-8 border border-[#E4ECF0] shadow-md">
            <div className="text-center">
              <Clock className="h-16 w-16 text-teal mx-auto mb-4" />
              <p className="font-heading font-semibold text-[#050DD7] text-lg mb-2">
                Quick & Efficient
              </p>
              <p className="text-slate-gray">
                In and out in about 45 minutes with our high-speed machines
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Speed Queen Quantum Touch */}
      <SectionContainer className="bg-cloud-white">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-teal flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="font-heading text-h2 text-royal-blue">
              Speed Queen Quantum Touch System
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl">
            <p className="text-lg text-slate-gray leading-relaxed">
              Every machine in our facility is brand new Speed Queen Quantum Touch
              equipment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/50 rounded-xl p-4 border border-[#E4ECF0]">
                <h3 className="font-heading font-semibold text-charcoal mb-2 text-sm">
                  Superior Cleaning Power
                </h3>
                <p className="text-slate-gray text-sm">
                  Advanced technology delivers exceptional results
                </p>
              </div>
              <div className="bg-white/50 rounded-xl p-4 border border-[#E4ECF0]">
                <h3 className="font-heading font-semibold text-charcoal mb-2 text-sm">
                  Energy Efficient
                </h3>
                <p className="text-slate-gray text-sm">
                  Uses less water and energy while maintaining performance
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
              <h3 className="font-heading font-semibold text-lg text-[#050DD7] mb-3">
              Advanced Cleaning Technology
            </h3>
            <p className="text-slate-gray text-sm leading-relaxed">
              Quantum Touch technology uses precise water levels and wash motions
              to deliver exceptional cleaning results while using less water and
              energy.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
              <h3 className="font-heading font-semibold text-lg text-[#050DD7] mb-3">
              Professional-Grade Performance
            </h3>
            <p className="text-slate-gray text-sm leading-relaxed">
              The same equipment trusted by commercial laundry facilities, now
              available for your personal use.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Large Capacity Machines */}
      <SectionContainer className="bg-soft-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-teal/10 to-royal-blue/10 rounded-2xl p-8 border-2 border-teal/30 shadow-lg hover:shadow-xl transition-all">
              <div className="text-center">
                <div className="h-20 w-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <WashingMachine className="h-10 w-10 text-white" />
                </div>
                <p className="text-5xl font-bold text-[#050DD7] mb-2">100 lb</p>
                <p className="text-lg font-semibold text-charcoal mb-2">
                  Largest Capacity in the State
                </p>
                <p className="text-sm text-slate-gray">
                  No other laundromat in Oregon offers this capacity
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-h2 text-royal-blue mb-6">
              Large-Capacity Machines
            </h2>
            <p className="text-lg text-slate-gray leading-relaxed mb-6">
              Our washers can handle up to 100 pounds—the largest capacity
              available in Oregon. Perfect for:
            </p>
            <ul className="space-y-3 text-slate-gray mb-6">
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Family-sized loads</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Comforters, blankets, and large bedding</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Contractor work clothes and gear</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Bulk laundry for businesses</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Drying Technology */}
      <SectionContainer className="bg-cloud-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-teal" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-h2 text-royal-blue">
                Reversing Dryers
              </h2>
            </div>
            <p className="text-lg text-slate-gray leading-relaxed mb-6">
              Our dryers feature reversing technology that tumbles clothes in
              both directions, ensuring even drying and preventing tangling.
              Combined with 200 Gs of spin from our washers, your clothes dry
              faster and more efficiently.
            </p>
            <div className="bg-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
              <h3 className="font-heading font-semibold text-charcoal mb-2">
                Faster Dry Times
              </h3>
              <p className="text-slate-gray text-sm">
                The combination of high-speed spin (200 Gs) and reversing dryers
                means your laundry is ready in less time.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#E4ECF0] shadow-md">
            <div className="text-center">
              <RefreshCw className="h-16 w-16 text-teal mx-auto mb-4" />
              <p className="font-heading font-semibold text-[#050DD7] text-lg mb-2">
                Even Drying
              </p>
              <p className="text-slate-gray text-sm">
                Reversing technology prevents tangling and ensures every item
                dries evenly
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Sanitizing Cycles */}
      <SectionContainer className="bg-soft-white">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-teal flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="font-heading text-h2 text-royal-blue">
              Sanitizing Cycles
            </h2>
          </div>
          <p className="text-lg text-slate-gray leading-relaxed max-w-3xl mb-8">
            Every wash cycle includes sanitizing technology that cleans not just
            your clothes, but also the detergent dispensers. This ensures a
            consistently clean environment for every customer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-cloud-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
              <h3 className="font-heading font-semibold text-charcoal mb-2">
                Ozone Sanitation
              </h3>
              <p className="text-slate-gray text-sm">
                Advanced ozone technology kills mold, mildew, and bacteria
              </p>
            </div>
            <div className="bg-cloud-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
              <h3 className="font-heading font-semibold text-charcoal mb-2">
                Self-Cleaning Dispensers
              </h3>
              <p className="text-slate-gray text-sm">
                Detergent dispensers are automatically cleaned with each cycle
              </p>
            </div>
            <div className="bg-cloud-white rounded-2xl p-6 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out">
              <h3 className="font-heading font-semibold text-charcoal mb-2">
                Consistent Quality
              </h3>
              <p className="text-slate-gray text-sm">
                Every wash delivers the same high-quality, sanitized results
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/ozone">
            <Button variant="outline">Learn More About Ozone</Button>
          </Link>
        </div>
      </SectionContainer>

      {/* Payment & Loyalty */}
      <SectionContainer className="bg-cloud-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-teal" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-h2 text-royal-blue">
                Payment Options & Loyalty Cards
              </h2>
            </div>
            <p className="text-lg text-slate-gray leading-relaxed mb-6">
              No quarters needed. We offer multiple convenient payment options
              and a reloadable loyalty card system.
            </p>
            <ul className="space-y-3 text-slate-gray mb-6">
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Contactless credit and debit cards</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Reloadable loyalty cards (cash, credit, or EBT)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Mobile payment options</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>30+ languages supported on payment kiosks</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#E4ECF0] shadow-md">
            <div className="text-center">
              <CreditCard className="h-16 w-16 text-teal mx-auto mb-4" />
              <p className="font-heading font-semibold text-[#050DD7] text-lg mb-2">
                No Quarters Needed
              </p>
              <p className="text-slate-gray text-sm">
                Modern payment systems for your convenience
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Free WiFi */}
      <SectionContainer className="bg-soft-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-cloud-white rounded-2xl p-8 border border-[#E4ECF0] shadow-md">
            <div className="text-center">
              <Wifi className="h-16 w-16 text-teal mx-auto mb-4" />
              <p className="font-heading font-semibold text-[#050DD7] text-lg mb-2">
                Free WiFi
              </p>
              <p className="text-slate-gray">
                Stay connected while you wait. Work, browse, or stream during
                your visit.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-h2 text-royal-blue mb-6">
              Free WiFi & Comfortable Waiting Area
            </h2>
            <p className="text-lg text-slate-gray leading-relaxed mb-6">
              Make the most of your time with free high-speed WiFi and a clean,
              comfortable waiting area. Perfect for catching up on work, reading,
              or just relaxing.
            </p>
            <ul className="space-y-3 text-slate-gray">
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>High-speed internet connection</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Clean, well-lit seating area</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Charging stations available</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Parking & Accessibility */}
      <SectionContainer className="bg-cloud-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-sky-tint flex items-center justify-center">
                <Car className="h-6 w-6 text-teal" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-h2 text-royal-blue">
                Parking & Accessibility
              </h2>
            </div>
            <p className="text-lg text-slate-gray leading-relaxed mb-6">
              We&apos;ve made it easy to get to Blue Wave Laundry with convenient
              parking and full accessibility.
            </p>
            <ul className="space-y-3 text-slate-gray">
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Front door pull-up access</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Ample parking available</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Wheelchair accessible</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal mt-1">•</span>
                <span>Easy loading and unloading</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#E4ECF0] shadow-md">
            <div className="text-center">
              <Car className="h-16 w-16 text-teal mx-auto mb-4" />
              <p className="font-heading font-semibold text-[#050DD7] text-lg mb-2">
                Easy Access
              </p>
              <p className="text-slate-gray text-sm">
                Convenient parking right at the front door
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer className="bg-soft-white">
        <div className="text-center mb-12">
          <h2 className="font-heading text-h2 text-royal-blue mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-gray max-w-2xl mx-auto">
            Getting your laundry done at Blue Wave is simple and fast
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-sky-tint flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal">1</span>
            </div>
              <h3 className="font-heading font-semibold text-lg text-[#050DD7] mb-2">
              Load Your Clothes
            </h3>
            <p className="text-slate-gray text-sm">
              Choose the right size machine for your load and add your clothes
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-sky-tint flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal">2</span>
            </div>
              <h3 className="font-heading font-semibold text-lg text-[#050DD7] mb-2">
              Pay & Start
            </h3>
            <p className="text-slate-gray text-sm">
              Use contactless payment or your loyalty card to start the cycle
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-sky-tint flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal">3</span>
            </div>
              <h3 className="font-heading font-semibold text-lg text-[#050DD7] mb-2">
              Dry & Go
            </h3>
            <p className="text-slate-gray text-sm">
              Transfer to a reversing dryer and you&apos;re done in about 45 minutes
            </p>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </main>
  );
}

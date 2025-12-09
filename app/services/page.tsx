import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { WaveDivider } from "@/components/ui/WaveDivider"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className='min-h-screen bg-soft-white'>
      <Navbar />

      {/* Hero Section */}
      <section className='relative pt-16 md:pt-20 pb-12 md:pb-16 bg-gradient-to-b from-white to-[#EAF7FB] overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div
            className='absolute top-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "20s" }}
          />
          <div
            className='absolute bottom-0 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "25s", animationDelay: "5s" }}
          />
        </div>
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10'>
          <ScrollReveal
            direction='down'
            delay={0}
            distance={50}
          >
            <div className='max-w-3xl'>
              <h1 className='font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-royal-blue via-teal to-royal-blue bg-clip-text text-transparent mb-4 md:mb-6'>
                Our Services
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='fade'
            delay={150}
            distance={20}
          >
            <div className='max-w-3xl'>
              <p className='text-base md:text-lg lg:text-xl text-slate-gray leading-relaxed mb-6 md:mb-8'>
                Everything you need for a superior laundry experience. From
                state-of-the-art Speed Queen machines to ozone sanitation,
                we&apos;ve built Blue Wave Laundry to be the best laundromat in
                Oregon.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link href='/location'>
                  <Button variant='primary'>Get Directions</Button>
                </Link>
                <Link href='/faq'>
                  <Button variant='outline'>View FAQ</Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveDivider
        variant='bottom'
        fillColor='#FAFAFA'
      />

      {/* Self-Service Laundry */}
      <SectionContainer className='bg-soft-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div
            className='absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 relative z-10'>
          <ScrollReveal
            direction='left'
            delay={0}
            distance={80}
          >
            <div>
              <h2 className='font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6'>
                Self-Service Laundry
              </h2>
              <p className='text-lg text-slate-gray leading-relaxed mb-4'>
                Our facility is open{" "}
                <strong className='text-royal-blue'>
                  365 days a year, 6am–10pm
                </strong>
                , giving you complete flexibility. No appointments needed—just
                walk in and get your laundry done.
              </p>
              <p className='text-base text-slate-gray mb-6'>
                Average visit time:{" "}
                <strong className='text-teal'>~45 minutes</strong>
              </p>
              <ul className='space-y-3 text-slate-gray'>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>
                    Perfect for families, contractors, and bulk laundry
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Kiosk payment with credit or debit card</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='right'
            delay={200}
            distance={80}
          >
            <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
              <h3 className='font-heading font-semibold text-xl text-royal-blue mb-3'>
                Quick & Efficient
              </h3>
              <p className='text-slate-gray leading-relaxed'>
                In and out in about 45 minutes with our high-speed machines. No
                waiting, no delays—just fast, reliable service.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Speed Queen Quantum Touch */}
      <SectionContainer className='bg-cloud-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div
            className='absolute bottom-0 left-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "25s", animationDelay: "3s" }}
          />
        </div>
        <div className='mb-12 relative z-10'>
          <ScrollReveal
            direction='down'
            delay={0}
            distance={50}
          >
            <h2 className='font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6'>
              Speed Queen Quantum Touch System
            </h2>
          </ScrollReveal>
          <ScrollReveal
            direction='fade'
            delay={150}
            distance={20}
          >
            <div className='space-y-6 max-w-3xl'>
              <p className='text-lg text-slate-gray leading-relaxed'>
                Every machine in our facility is{" "}
                <strong className='text-royal-blue'>
                  brand new Speed Queen Quantum Touch
                </strong>{" "}
                equipment—the industry standard for reliability and performance.
              </p>
              <div className='bg-white rounded-lg p-5 border border-slate-200'>
                <h3 className='font-heading font-semibold text-charcoal mb-2'>
                  Superior Cleaning Power
                </h3>
                <p className='text-slate-gray text-sm'>
                  Advanced technology delivers exceptional results
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10'>
          <ScrollReveal
            direction='left'
            delay={200}
            distance={80}
          >
            <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
              <h3 className='font-heading font-semibold text-xl text-royal-blue mb-3'>
                Advanced Cleaning Technology
              </h3>
              <p className='text-slate-gray leading-relaxed'>
                Quantum Touch technology uses precise water levels and wash
                motions to deliver exceptional cleaning results.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='right'
            delay={300}
            distance={80}
          >
            <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
              <h3 className='font-heading font-semibold text-xl text-royal-blue mb-3'>
                Professional-Grade Performance
              </h3>
              <p className='text-slate-gray leading-relaxed'>
                The same equipment trusted by commercial laundry facilities, now
                available for your personal use.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Large Capacity Machines */}
      <SectionContainer className='bg-soft-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div
            className='absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
          <ScrollReveal
            direction='left'
            delay={0}
            distance={80}
            className='order-2 lg:order-1'
          >
            <div className='bg-white rounded-lg p-8 border border-slate-200 shadow-sm'>
              <div className='text-center'>
                <p className='text-5xl font-bold text-royal-blue mb-3'>
                  100 lb
                </p>
                <p className='text-xl font-semibold text-charcoal mb-3'>
                  Largest Capacity in the State
                </p>
                <p className='text-base text-slate-gray'>
                  No other laundromat in Oregon offers this capacity
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='right'
            delay={200}
            distance={80}
            className='order-1 lg:order-2'
          >
            <div>
              <h2 className='font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6'>
                Large-Capacity Machines
              </h2>
              <p className='text-lg text-slate-gray leading-relaxed mb-4'>
                Our washers can handle up to{" "}
                <strong className='text-royal-blue'>100 pounds</strong>—the
                largest capacity available in Oregon.
              </p>
              <div className='bg-teal/10 rounded-lg p-4 mb-6 border-l-4 border-teal'>
                <p className='text-lg text-royal-blue font-semibold'>
                  Up to 100 lb washers = 10 standard loads per machine
                </p>
              </div>
              <p className='text-base text-slate-gray mb-4 font-medium'>
                Perfect for:
              </p>
              <ul className='space-y-3 text-slate-gray mb-6'>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Family-sized loads</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Comforters, blankets, and large bedding</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Contractor work clothes and gear</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Bulk laundry for businesses</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Drying Technology */}
      <SectionContainer className='bg-cloud-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div
            className='absolute bottom-0 left-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "25s", animationDelay: "3s" }}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
          <ScrollReveal
            direction='left'
            delay={0}
            distance={80}
          >
            <div>
              <h2 className='font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6'>
                Reversing Dryers
              </h2>
              <p className='text-lg text-slate-gray leading-relaxed mb-4'>
                Our dryers feature{" "}
                <strong className='text-royal-blue'>
                  reversing technology
                </strong>{" "}
                that tumbles clothes in both directions, ensuring even drying
                and preventing tangling.
              </p>
              <p className='text-base text-slate-gray mb-6'>
                Combined with{" "}
                <strong className='text-teal'>200 Gs of spin</strong> from our
                washers, your clothes dry faster and more efficiently.
              </p>
              <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                <h3 className='font-heading font-semibold text-xl text-royal-blue mb-2'>
                  Faster Dry Times
                </h3>
                <p className='text-slate-gray'>
                  The combination of high-speed spin (200 Gs) and reversing
                  dryers means your laundry is ready in less time.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='right'
            delay={200}
            distance={80}
          >
            <div className='bg-white rounded-lg p-6 border-l-4 border-teal'>
              <h3 className='font-heading font-semibold text-xl text-royal-blue mb-3'>
                Even Drying Technology
              </h3>
              <p className='text-slate-gray leading-relaxed'>
                Reversing technology prevents tangling and ensures every item
                dries evenly. Your clothes come out perfectly dried, every time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Sanitizing Cycles */}
      <SectionContainer className='bg-soft-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div
            className='absolute top-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className='mb-12 relative z-10'>
          <ScrollReveal
            direction='down'
            delay={0}
            distance={50}
          >
            <h2 className='font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6'>
              Sanitizing Cycles
            </h2>
          </ScrollReveal>
          <ScrollReveal
            direction='fade'
            delay={150}
            distance={20}
          >
            <p className='text-lg text-slate-gray leading-relaxed max-w-3xl mb-8'>
              Every wash cycle includes{" "}
              <strong className='text-royal-blue'>sanitizing technology</strong>{" "}
              that cleans not just your clothes, but also the detergent
              dispensers. This ensures a consistently clean environment for
              every customer.
            </p>
          </ScrollReveal>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <ScrollReveal
              direction='up'
              delay={200}
              distance={60}
            >
              <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                <h3 className='font-heading font-semibold text-xl text-royal-blue mb-2'>
                  Ozone Sanitation
                </h3>
                <p className='text-slate-gray'>
                  Advanced ozone technology kills mold, mildew, and bacteria
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal
              direction='up'
              delay={300}
              distance={60}
            >
              <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                <h3 className='font-heading font-semibold text-xl text-royal-blue mb-2'>
                  Self-Cleaning Dispensers
                </h3>
                <p className='text-slate-gray'>
                  Detergent dispensers are automatically cleaned with each cycle
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal
              direction='up'
              delay={400}
              distance={60}
            >
              <div className='bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
                <h3 className='font-heading font-semibold text-xl text-royal-blue mb-2'>
                  Consistent Quality
                </h3>
                <p className='text-slate-gray'>
                  Every wash delivers the same high-quality, sanitized results
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionContainer>

      {/* Payment */}
      <SectionContainer className='bg-cloud-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div
            className='absolute bottom-0 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "25s", animationDelay: "3s" }}
          />
        </div>
        <div className='max-w-4xl mx-auto relative z-10'>
          <ScrollReveal
            direction='down'
            delay={0}
            distance={50}
          >
            <div className='text-center mb-8'>
              <h2 className='font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6'>
                Payment Options
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='fade'
            delay={150}
            distance={20}
          >
            <div className='bg-white rounded-lg p-8 border-l-4 border-teal shadow-sm'>
              <p className='text-lg text-slate-gray leading-relaxed mb-4'>
                All payments are processed through our convenient kiosk system.
              </p>
              <p className='text-base text-slate-gray font-medium'>
                Simply use your{" "}
                <strong className='text-royal-blue'>
                  credit or debit card
                </strong>{" "}
                at the kiosk to pay for your wash and dry cycles.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Free WiFi */}
      <SectionContainer className='bg-soft-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div
            className='absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
          <ScrollReveal
            direction='left'
            delay={0}
            distance={80}
          >
            <div className='bg-white rounded-lg p-6 border-l-4 border-teal'>
              <h3 className='font-heading font-semibold text-xl text-royal-blue mb-3'>
                Free High-Speed WiFi
              </h3>
              <p className='text-slate-gray leading-relaxed'>
                Stay connected while you wait. Work, browse, or stream during
                your visit. Our WiFi is fast, free, and always available.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='right'
            delay={200}
            distance={80}
          >
            <div>
              <h2 className='font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6'>
                Free WiFi & Comfortable Waiting Area
              </h2>
              <p className='text-lg text-slate-gray leading-relaxed mb-4'>
                Make the most of your time with{" "}
                <strong className='text-royal-blue'>
                  free high-speed WiFi
                </strong>{" "}
                and a clean, comfortable waiting area.
              </p>
              <p className='text-base text-slate-gray mb-6'>
                Perfect for catching up on work, reading, or just relaxing.
              </p>
              <p className='text-base text-slate-gray mb-6 font-medium'>
                Amenities include:
              </p>
              <ul className='space-y-3 text-slate-gray'>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>High-speed internet connection</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Clean, well-lit seating area</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Charging stations available</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* Parking & Accessibility */}
      <SectionContainer className='bg-cloud-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div
            className='absolute bottom-0 left-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "25s", animationDelay: "3s" }}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10'>
          <ScrollReveal
            direction='left'
            delay={0}
            distance={80}
          >
            <div>
              <h2 className='font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-6'>
                Parking & Accessibility
              </h2>
              <p className='text-lg text-slate-gray leading-relaxed mb-4'>
                We&apos;ve made it easy to get to Blue Wave Laundry with{" "}
                <strong className='text-royal-blue'>convenient parking</strong>{" "}
                and{" "}
                <strong className='text-royal-blue'>full accessibility</strong>.
              </p>
              <p className='text-base text-slate-gray mb-6 font-medium'>
                Features:
              </p>
              <ul className='space-y-3 text-slate-gray'>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Front door pull-up access</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Ample parking available</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Wheelchair accessible</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-teal mr-3'>•</span>
                  <span>Easy loading and unloading</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='right'
            delay={200}
            distance={80}
          >
            <div className='bg-white rounded-lg p-6 border-l-4 border-teal'>
              <h3 className='font-heading font-semibold text-xl text-royal-blue mb-3'>
                Easy Access & Parking
              </h3>
              <p className='text-slate-gray leading-relaxed'>
                Convenient parking right at the front door. Wheelchair
                accessible with easy loading and unloading for everyone.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer className='bg-soft-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-30'>
          <div
            className='absolute top-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "20s" }}
          />
          <div
            className='absolute bottom-0 right-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float'
            style={{ animationDuration: "25s", animationDelay: "5s" }}
          />
        </div>
        <div className='text-center mb-12 relative z-10'>
          <ScrollReveal
            direction='down'
            delay={0}
            distance={50}
          >
            <h2 className='font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue via-teal to-royal-blue bg-clip-text text-transparent mb-4'>
              How It Works
            </h2>
          </ScrollReveal>
          <ScrollReveal
            direction='fade'
            delay={150}
            distance={20}
          >
            <p className='text-lg text-slate-gray max-w-2xl mx-auto'>
              Getting your laundry done at Blue Wave is{" "}
              <strong className='text-royal-blue'>simple and fast</strong>
            </p>
          </ScrollReveal>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10'>
          <ScrollReveal
            direction='up'
            delay={200}
            distance={60}
          >
            <div className='text-center bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
              <div className='h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-teal'>1</span>
              </div>
              <h3 className='font-heading font-semibold text-xl text-royal-blue mb-2'>
                Load Your Clothes
              </h3>
              <p className='text-slate-gray'>
                Choose the right size machine for your load and add your clothes
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='up'
            delay={300}
            distance={60}
          >
            <div className='text-center bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
              <div className='h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-teal'>2</span>
              </div>
              <h3 className='font-heading font-semibold text-xl text-royal-blue mb-2'>
                Pay & Start
              </h3>
              <p className='text-slate-gray'>
                Use the kiosk with your credit or debit card to start the cycle
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal
            direction='up'
            delay={400}
            distance={60}
          >
            <div className='text-center bg-white rounded-lg p-6 border border-slate-200 shadow-sm'>
              <div className='h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-teal'>3</span>
              </div>
              <h3 className='font-heading font-semibold text-xl text-royal-blue mb-2'>
                Dry & Go
              </h3>
              <p className='text-slate-gray'>
                Transfer to a reversing dryer and you&apos;re done in about 45
                minutes
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      <Footer />
    </main>
  )
}

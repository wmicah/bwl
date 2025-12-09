import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "WHAT IS OZONE SANITATION",
      answer:
        "Ozone is injected into cold wash and rinse cycles. Ozone provides a cleaner, softer, and sanitized laundry with less energy, and better results. Ozone is used by many industries to sanitize and clean. It has been shown to kill mold and mildew, bacteria, reduce odors, reduce detergent usage. Faster drying times. Linens come out with less retained moisture, which means quicker drying.",
    },
    {
      question: "HOW LONG DOES IT TAKE TO WASH AND DRY CLOTHES",
      answer:
        "The average wash time is 23-24 minutes and the average drying time is 30 minutes. Our largest washing machines will accommodate up to 100 lbs (10 loads) of laundry per load. You can be in and out in less than an hour.",
    },
    {
      question: "WHAT PRODUCTS CAN I USE IN THE WASHING MACHINES?",
      answer:
        "You can use all of the same laundry products that you use at home. Our high-efficiency machines will allow you to use less product/cleaning agents and still get the best clean possible.",
    },
    {
      question: "WHAT PRODUCTS CAN I USE IN THE DRYERS?",
      answer: "You can use the same products at home.",
    },
    {
      question: "WHAT ITEMS SHOULD NEVER BE PUT IN A WASHING MACHINE?",
      answer:
        "Please do not wash horse blankets in our machines as they cause damage.\n\nPlease do not wash rags-towels with heavy grease or solvents",
    },
    {
      question: "HOW OFTEN ARE WASHERS AND DRYERS CLEANED",
      answer:
        "You can sanitize each washer before every cycle you use. Washers and Dryers are cleaned daily.",
    },
    {
      question: "DO YOUR MACHINES ACCEPT COINS?",
      answer:
        "Our machines do not accept coins, as we offer a completely coinless experience. Onsite, we accept cash at the kiosk or electronic payment options available. Machines can be started at the machine with your credit or debit card also.",
    },
    {
      question: "DO YOU HAVE SPECIALS?",
      answer:
        "YES! From time to time we offer wash card specials at the Kiosk.",
    },
    {
      question: "HOW HOT ARE YOUR DRYERS?",
      answer:
        "Our dryers allow you to select from three temperature options:\n\nLow: 140 degrees F\n\nMedium: 160 degrees F\n\nHigh: 180 degrees F",
    },
    {
      question: "WHY DOES THE DRYER STOP AND THEN REVERSE?",
      answer:
        "Our modern speed queen dryers have reversing technology. This process will dry the clothes faster with less wear and tear.",
    },
  ];

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
                Frequently Asked Questions
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="fade" delay={150} distance={20}>
            <div className="max-w-3xl">
              <p className="text-base md:text-lg lg:text-xl text-slate-gray leading-relaxed mb-3 md:mb-4">
                We&apos;re here to help! Find answers to the most common questions about Blue Wave Laundry, our services, and how to make the most of your visit.
              </p>
              <p className="text-base text-slate-gray">
                Can&apos;t find what you&apos;re looking for? We&apos;re always happy to help in person or answer any questions you might have.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveDivider variant="bottom" fillColor="#FAFAFA" />

      {/* FAQ Section */}
      <SectionContainer className="bg-soft-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float"
            style={{ animationDuration: "25s", animationDelay: "5s" }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal direction="down" delay={0} distance={50}>
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-slate-gray">
                Everything you need to know about our services and facilities
              </p>
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal
                key={index}
                direction="fade"
                delay={index * 100}
                distance={30}
              >
                <div className="bg-white rounded-lg p-5 md:p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out touch-manipulation">
                  <h3 className="font-heading font-semibold text-lg md:text-xl text-royal-blue mb-4">
                    {faq.question}
                  </h3>
                  <div className="text-slate-gray leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="fade" delay={1000} distance={30}>
            <div className="mt-12 text-center">
              <div className="bg-white rounded-lg p-8 border-l-4 border-teal shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-teal" aria-hidden="true" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-royal-blue mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-slate-gray mb-6 leading-relaxed">
                  We&apos;re here to help! Visit us in person or explore our services to learn more about what Blue Wave Laundry has to offer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/services">
                    <Button variant="primary">View Services</Button>
                  </Link>
                  <Link href="/location">
                    <Button variant="outline">Get Directions</Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>

      <Footer />
    </main>
  );
}


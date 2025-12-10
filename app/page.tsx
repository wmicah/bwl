import { Navbar } from "@/components/Navbar"
import { SpecialsBanner } from "@/components/SpecialsBanner"
import { Hero } from "@/components/Hero"
import { Hours } from "@/components/Hours"
import { OzoneSection } from "@/components/OzoneSection"
import { Footer } from "@/components/Footer"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
	return (
		<main className="min-h-screen bg-soft-white">
			<Navbar />
			<SpecialsBanner />
			<Hero />

			{/* Ozone Sanitation Section */}
			<OzoneSection />

			{/* Hours Section */}
			<Hours />

			{/* Quick Links Section */}
			<section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
				<div
					className="absolute inset-0 bg-[#F5F8FA]"
					style={{ marginTop: "2rem" }}
				/>
				{/* Background flow effect */}
				<div className="absolute inset-0 opacity-30">
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
						<div className="text-center mb-6">
							<h2 className="font-heading text-2xl md:text-3xl bg-gradient-to-r from-royal-blue via-teal to-royal-blue bg-clip-text text-transparent mb-2">
								Explore Our Services
							</h2>
						</div>
					</ScrollReveal>
					<ScrollReveal direction="fade" delay={150} distance={20}>
						<div className="text-center mb-8 -mt-4">
							<p className="text-base text-slate-gray max-w-2xl mx-auto">
								Discover everything Blue Wave Laundry has to offer
							</p>
						</div>
					</ScrollReveal>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
						<ScrollReveal direction="left" delay={50} distance={80}>
							<Link href="/services">
								<div className="bg-white rounded-2xl p-4 md:p-5 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out h-full">
									<h3 className="font-heading font-semibold text-base text-[#050DD7] mb-1.5">
										Our Services
									</h3>
									<p className="text-slate-gray text-xs mb-3 leading-relaxed">
										Brand new Speed Queen machines and state-of-the-art
										equipment
									</p>
									<div className="flex items-center text-teal font-medium text-xs">
										Learn more <ArrowRight className="ml-2 h-3 w-3" />
									</div>
								</div>
							</Link>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={100} distance={60}>
							<Link href="/lost-found">
								<div className="bg-white rounded-2xl p-4 md:p-5 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out h-full">
									<h3 className="font-heading font-semibold text-base text-[#050DD7] mb-1.5">
										Lost & Found
									</h3>
									<p className="text-slate-gray text-xs mb-3 leading-relaxed">
										Missing an item? Contact us to retrieve it
									</p>
									<div className="flex items-center text-teal font-medium text-xs">
										Learn more <ArrowRight className="ml-2 h-3 w-3" />
									</div>
								</div>
							</Link>
						</ScrollReveal>
						<ScrollReveal direction="right" delay={150} distance={80}>
							<Link href="/location">
								<div className="bg-white rounded-2xl p-4 md:p-5 border-2 border-teal/30 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 ease-out h-full relative">
									<h3 className="font-heading font-semibold text-base text-[#050DD7] mb-1.5">
										Location
									</h3>
									<p className="text-slate-gray text-xs mb-3 leading-relaxed">
										Find us in Hillsboro, Oregon
									</p>
									<div className="flex items-center text-teal font-medium text-xs">
										Get directions <ArrowRight className="ml-2 h-3 w-3" />
									</div>
								</div>
							</Link>
						</ScrollReveal>
						<ScrollReveal direction="fade" delay={200} distance={40}>
							<Link href="/faq">
								<div className="bg-white rounded-2xl p-4 md:p-5 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out h-full">
									<h3 className="font-heading font-semibold text-base text-[#050DD7] mb-1.5">
										FAQ
									</h3>
									<p className="text-slate-gray text-xs mb-3 leading-relaxed">
										Find answers to common questions
									</p>
									<div className="flex items-center text-teal font-medium text-xs">
										View FAQ <ArrowRight className="ml-2 h-3 w-3" />
									</div>
								</div>
							</Link>
						</ScrollReveal>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<SectionContainer className="bg-cloud-white relative overflow-hidden">
				<div className="absolute inset-0 opacity-30">
					<div
						className="absolute bottom-0 left-1/4 w-96 h-96 bg-royal-blue/10 rounded-full blur-3xl animate-float"
						style={{ animationDuration: "25s", animationDelay: "3s" }}
					/>
				</div>
				<div className="mb-6 relative z-10">
					<ScrollReveal direction="down" delay={0} distance={50}>
						<div className="text-center mb-4">
							<h2 className="font-heading text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent mb-2">
								Find Us
							</h2>
						</div>
					</ScrollReveal>
					<ScrollReveal direction="fade" delay={150} distance={20}>
						<p className="text-base md:text-lg text-slate-gray text-center max-w-2xl mx-auto mb-6">
							Visit us at our convenient Hillsboro location. Use the map below
							to get directions.
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
	)
}

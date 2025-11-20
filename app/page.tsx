import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Hours } from "@/components/Hours"
import { OzoneSection } from "@/components/OzoneSection"
import { Footer } from "@/components/Footer"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import Link from "next/link"
import { ArrowRight, Wrench, DollarSign, MapPin, Mail } from "lucide-react"

export default function Home() {
	return (
		<main className="min-h-screen bg-soft-white">
			<Navbar />
			<Hero />

			{/* Ozone Sanitation Section */}
			<OzoneSection />

			{/* Hours Section */}
			<Hours />

			{/* Quick Links Section */}
			<section className="py-16 md:py-20 bg-white relative overflow-hidden">
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
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
						<ScrollReveal direction="left" delay={50} distance={80}>
							<Link href="/">
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
							<Link href="/">
								<div className="bg-white rounded-2xl p-4 md:p-5 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out h-full">
									<h3 className="font-heading font-semibold text-base text-[#050DD7] mb-1.5">
										Pricing
									</h3>
									<p className="text-slate-gray text-xs mb-3 leading-relaxed">
										Competitive rates for all load sizes
									</p>
									<div className="flex items-center text-teal font-medium text-xs">
										View pricing <ArrowRight className="ml-2 h-3 w-3" />
									</div>
								</div>
							</Link>
						</ScrollReveal>
						<ScrollReveal direction="right" delay={150} distance={80}>
							<Link href="/">
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
							<Link href="/">
								<div className="bg-white rounded-2xl p-4 md:p-5 border border-[#E4ECF0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-500 ease-out h-full">
									<h3 className="font-heading font-semibold text-base text-[#050DD7] mb-1.5">
										Contact Us
									</h3>
									<p className="text-slate-gray text-xs mb-3 leading-relaxed">
										Get in touch with any questions
									</p>
									<div className="flex items-center text-teal font-medium text-xs">
										Contact us <ArrowRight className="ml-2 h-3 w-3" />
									</div>
								</div>
							</Link>
						</ScrollReveal>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	)
}

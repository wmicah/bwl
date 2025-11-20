import { Button } from "@/components/ui/Button"
import { MapPin, DollarSign } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedWave } from "@/components/ui/AnimatedWave"
import { FloatingBubbles } from "@/components/ui/FloatingBubbles"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function Hero() {
	return (
		<section className="relative w-full min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-sky-tint via-soft-white to-mint-glow flow-wave" style={{ overflowX: "hidden", overflowY: "visible" }}>
      {/* Animated floating bubbles */}
      <FloatingBubbles />
      
      {/* Background wave pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
						<linearGradient id="heroWaveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor="#09C4F2" stopOpacity="0.4" />
							<stop offset="100%" stopColor="#2E4A9E" stopOpacity="0.2" />
						</linearGradient>
          </defs>
          <path
            d="M0,400 Q200,300 400,400 T800,400 T1200,400 L1200,800 L0,800 Z"
            fill="url(#heroWaveGradient)"
          />
        </svg>
      </div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Left: Text Content */}
					<div className="space-y-4 md:space-y-5">
						<ScrollReveal direction="right" delay={0} distance={100}>
							<h1 className="font-heading text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-royal-blue via-teal to-royal-blue bg-clip-text text-transparent text-left leading-tight">
								Brand New Speed Queen Laundromat.
							</h1>
						</ScrollReveal>
						<ScrollReveal direction="fade" delay={200} distance={30}>
							<p className="text-base md:text-lg text-charcoal leading-relaxed max-w-xl">
								Huge high-capacity machines, ozone sanitation, and laundry done in
								about 45 minutes.
							</p>
						</ScrollReveal>
						<ScrollReveal direction="up" delay={400} distance={50}>
							<div className="flex flex-col sm:flex-row items-start gap-3">
								<Link href="/location">
									<Button variant="primary" className="text-sm px-6 py-3">
										<MapPin className="mr-2 h-4 w-4" />
										Get Directions
									</Button>
								</Link>
								<Link href="/pricing">
									<Button variant="outline" className="text-sm px-6 py-3">
										<DollarSign className="mr-2 h-4 w-4" />
										View Pricing
									</Button>
								</Link>
							</div>
						</ScrollReveal>
					</div>

					{/* Right: Visual Stack */}
					<ScrollReveal direction="left" delay={300} distance={120}>
						<div className="relative">
							{/* Main Image Card */}
							<div className="relative rounded-card overflow-hidden shadow-card-hover water-droplet card-flow">
								<div className="aspect-[4/3] relative image-blend-overlay">
									<Image
										src="/images/speedqueenstock.png"
										alt="Brand new Speed Queen laundromat interior with modern machines"
										fill
										className="object-cover will-change-transform"
										priority
										quality={95}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										style={{
											filter: "brightness(1.05) contrast(1.05) saturate(0.95)",
											imageRendering: "crisp-edges",
										}}
									/>
									{/* Subtle gradient overlay to blend with design system */}
									<div className="absolute inset-0 bg-gradient-to-br from-sky-tint/25 via-transparent to-mint-glow/25 pointer-events-none" />

									{/* Water ripple effect overlay */}
									<div className="absolute inset-0 opacity-12 pointer-events-none">
										<div
											className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal/20 rounded-full blur-2xl animate-float"
											style={{ animationDuration: "15s" }}
										/>
										<div
											className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-royal-blue/20 rounded-full blur-3xl animate-float"
											style={{ animationDuration: "18s", animationDelay: "3s" }}
										/>
									</div>

									{/* Subtle border glow effect */}
									<div className="absolute inset-0 ring-1 ring-teal/15 pointer-events-none rounded-card" />
								</div>
							</div>

							{/* Overlapping Stat Card */}
							<div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-card p-3 md:p-4 shadow-card-hover border border-cloud-white max-w-[240px] card-flow animate-fade-in-up">
								<div className="space-y-2">
									<div className="flex items-start space-x-2">
										<div className="flex-shrink-0">
											<div className="h-8 w-8 rounded-lg bg-sky-tint flex items-center justify-center">
												<svg
													className="h-4 w-4 text-teal"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M13 10V3L4 14h7v7l9-11h-7z"
													/>
												</svg>
											</div>
										</div>
										<div>
											<p className="font-heading font-semibold text-charcoal text-xs md:text-sm">
												Up to 100 lb washers
											</p>
											<p className="text-xs text-slate-gray">Largest in the state</p>
										</div>
									</div>
									<div className="border-t border-cloud-white pt-2">
										<div className="flex items-center space-x-2">
											<svg
												className="h-3 w-3 text-teal"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
											<p className="text-xs text-slate-gray font-medium">
												In and out in ~45 minutes
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</ScrollReveal>
				</div>
			</div>

			{/* Animated wave at bottom */}
			<div className="absolute bottom-0 left-0 right-0" style={{ overflow: "visible" }}>
				<AnimatedWave />
				<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-soft-white to-transparent z-10" />
			</div>
		</section>
	)
}

"use client"

import { SectionContainer } from "@/components/ui/SectionContainer"
import { WaveDivider } from "@/components/ui/WaveDivider"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { WashingMachine, Shield, CreditCard, Wifi, Clock } from "lucide-react"
import { HOURS } from "@/lib/constants"
import { useEffect, useRef, useState, ReactNode } from "react"

// Component for hours card that starts centered and flows left on scroll
function HoursCardFlow({
	children,
	onAnimationStart,
}: {
	children: ReactNode
	onAnimationStart?: () => void
}) {
	const [hasAnimated, setHasAnimated] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const currentRef = containerRef.current
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					// Start animation immediately when in view
					setHasAnimated(true)
					onAnimationStart?.()
				}
			},
			{ threshold: 0.1, rootMargin: "0px 0px -200px 0px" }
		)

		if (currentRef) {
			observer.observe(currentRef)
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef)
			}
		}
	}, [hasAnimated, onAnimationStart])

	return (
		<div
			ref={containerRef}
			className="relative w-full transition-all duration-1000 ease-out z-10"
			style={{
				transform: hasAnimated
					? "translateX(0)"
					: "translateX(calc(50vw - 50%))",
				opacity: hasAnimated ? 1 : 0,
			}}
		>
			{children}
		</div>
	)
}

const amenities = [
	{
		title: "High-Capacity Speed Queen Machines",
		description: "Brand new Quantum Touch equipment",
		icon: WashingMachine,
	},
	{
		title: "Ozone Sanitizing Wash",
		description: "Cleaner, fresher results every time",
		icon: Shield,
	},
	{
		title: "Contactless Payment & Loyalty Card",
		description: "No quarters needed, reloadable cards",
		icon: CreditCard,
	},
	{
		title: "Free WiFi",
		description: "Stay connected while you wait",
		icon: Wifi,
	},
]

export function Hours() {
	const [hoursCardStarted, setHoursCardStarted] = useState(false)

	return (
		<section
			className="relative bg-gradient-to-b from-white via-[#F5F8FA] to-white overflow-hidden"
			id="hours"
		>
			<WaveDivider variant="top" fillColor="#F5F8FA" />
			<SectionContainer className="bg-transparent py-12 md:py-16">
				<div className="max-w-7xl mx-auto relative">
					{/* Layout: Large card on left, 2x2 grid on right (desktop) | Stacked (mobile) */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 relative">
						{/* Hours Card - Large square/vertical card on left, starts centered then flows left */}
						<HoursCardFlow onAnimationStart={() => setHoursCardStarted(true)}>
							<div
								className="bg-white rounded-card p-5 md:p-6 text-center water-droplet card-flow flex flex-col justify-center min-h-[300px] md:min-h-[400px] relative z-20"
								style={{
									boxShadow:
										"0 10px 20px -5px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.03)",
									border: "1px solid rgba(228, 236, 240, 0.5)",
								}}
							>
								<div className="flex justify-center mb-5">
									<div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-sky-tint flex items-center justify-center icon-pulse">
										<Clock
											className="h-7 w-7 md:h-8 md:w-8 text-royal-blue"
											aria-hidden="true"
											style={{ opacity: 0.9 }}
										/>
									</div>
								</div>
								<h2
									className="font-heading text-xl md:text-2xl lg:text-3xl text-royal-blue mb-3"
									style={{ color: "#1E3A5F" }}
								>
									Open 365 Days a Year
								</h2>
								<p
									className="text-lg md:text-xl lg:text-2xl font-semibold text-charcoal mb-2"
									style={{ color: "#2B2F33" }}
								>
									7 Days a Week
								</p>
								<p
									className="text-xl md:text-2xl lg:text-3xl font-bold mb-2"
									style={{ color: "#09C4F2" }}
								>
									{HOURS.open} – {HOURS.close}
								</p>
								<p
									className="text-slate-gray text-base md:text-lg"
									style={{ color: "#4A5568" }}
								>
									Always available when you need us
								</p>
							</div>
						</HoursCardFlow>

						{/* Right column: Nested 2x2 grid for 4 amenity cards - appears after hours card moves */}
						<div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
							{amenities.map((amenity, index) => {
								const Icon = amenity.icon
								const directions: Array<
									"up" | "down" | "left" | "right" | "scale" | "fade"
								> = ["right", "right", "right", "right"]
								const direction = directions[index]

								// Ensure correct grid positioning:
								// Top row: High-Capacity (0), Ozone (1)
								// Bottom row: Contactless (2), WiFi (3)
								const gridRow = index < 2 ? 1 : 2
								const gridCol = index % 2 === 0 ? 1 : 2

								return (
									<ScrollReveal
										key={index}
										direction={direction}
										delay={hoursCardStarted ? 200 + index * 50 : 2000}
										distance={60}
									>
										<div
											className="bg-white rounded-card p-4 md:p-5 card-flow water-droplet h-full"
											style={{
												backgroundColor: "rgba(255, 255, 255, 0.98)",
												boxShadow:
													"0 4px 12px -2px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
												border: "1px solid rgba(228, 236, 240, 0.4)",
												gridRow: gridRow,
												gridColumn: gridCol,
											}}
										>
											<div className="flex flex-col space-y-2 text-center">
												<div className="flex justify-center">
													<div className="h-10 w-10 rounded-xl bg-sky-tint flex items-center justify-center icon-pulse">
														<Icon
															className="h-5 w-5"
															aria-hidden="true"
															style={{ color: "#2E4A9E", opacity: 0.9 }}
														/>
													</div>
												</div>
												<div className="flex-1">
													<h3
														className="font-heading font-semibold text-sm md:text-base mb-1"
														style={{ color: "#1E3A5F" }}
													>
														{amenity.title}
													</h3>
													<p
														className="text-xs leading-relaxed"
														style={{ color: "#4A5568" }}
													>
														{amenity.description}
													</p>
												</div>
											</div>
										</div>
									</ScrollReveal>
								)
							})}
						</div>
					</div>
				</div>
			</SectionContainer>
			<WaveDivider variant="bottom" fillColor="#F5F8FA" />
		</section>
	)
}

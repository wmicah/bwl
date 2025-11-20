import { SectionContainer } from "@/components/ui/SectionContainer"
import { WaveDivider } from "@/components/ui/WaveDivider"
import { OZONE_BENEFITS, GALLERY_IMAGES } from "@/lib/constants"
import { CheckCircle2 } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import Image from "next/image"

export function OzoneSection() {
	return (
		<section className="relative bg-sky-tint" id="ozone">
			<WaveDivider variant="top" fillColor="#E6F9FF" />
			<SectionContainer className="bg-sky-tint">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Image */}
					<ScrollReveal direction="right" delay={300} distance={100}>
						<div className="relative">
							<div className="relative rounded-card overflow-hidden shadow-card-hover water-droplet card-flow">
								<div className="aspect-square relative image-blend-overlay">
									<Image
										src="/images/ozonestock.jpeg"
										alt="Ozone sanitizing equipment at Blue Wave Laundry"
										fill
										className="object-cover will-change-transform"
										sizes="(max-width: 768px) 100vw, 50vw"
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
						</div>
					</ScrollReveal>

					{/* Text Content */}
					<div>
						<ScrollReveal direction="left" delay={0} distance={80}>
							<div className="flex items-center space-x-3 mb-6">
								<h2 className="font-heading text-h2 text-royal-blue">
									Ozone Sanitation
								</h2>
							</div>
						</ScrollReveal>
						<ScrollReveal direction="fade" delay={150} distance={30}>
							<p className="text-lg text-slate-gray mb-8 leading-relaxed">
								Our advanced ozone sanitizing system ensures every wash is not
								just clean, but thoroughly sanitized. Experience the difference
								with technology that goes beyond traditional cleaning.
							</p>
						</ScrollReveal>
						<ul className="space-y-4">
							{OZONE_BENEFITS.map((benefit, index) => (
								<ScrollReveal
									key={index}
									direction="right"
									delay={200 + index * 100}
									distance={50}
								>
									<li className="flex items-start space-x-3">
										<CheckCircle2
											className="h-6 w-6 text-teal flex-shrink-0 mt-0.5"
											aria-hidden="true"
										/>
										<span className="text-slate-gray text-base">{benefit}</span>
									</li>
								</ScrollReveal>
							))}
						</ul>
					</div>
				</div>
			</SectionContainer>

			{/* Integrated Photo Gallery */}
			<SectionContainer className="bg-cloud-white">
				<ScrollReveal direction="down" delay={0} distance={50}>
					<div className="mb-8">
						<h2 className="font-heading text-h2 text-royal-blue mb-4 text-left">
							Our Facility
						</h2>
					</div>
				</ScrollReveal>
				<ScrollReveal direction="fade" delay={150} distance={30}>
					<div className="mb-8 -mt-4">
						<p className="text-lg text-slate-gray leading-relaxed max-w-2xl">
							Take a look at our modern, clean, and well-maintained laundromat.
							Every detail is designed for your comfort and convenience.
						</p>
					</div>
				</ScrollReveal>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{GALLERY_IMAGES.map((image, index) => (
						<ScrollReveal
							key={image.id}
							direction={
								index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"
							}
							delay={index * 100}
							distance={60}
						>
							<div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-soft card-flow water-droplet group">
								{/* TODO: Replace with actual images */}
								<div className="absolute inset-0 bg-gradient-to-br from-sky-tint to-mint-glow flex items-center justify-center">
									<div className="text-center p-8">
										<div className="h-16 w-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
											<span className="text-teal text-2xl font-bold">
												{image.id}
											</span>
										</div>
										<p className="text-slate-gray text-sm">{image.alt}</p>
									</div>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>
			</SectionContainer>

			<WaveDivider variant="bottom" fillColor="#F5F8FA" />
		</section>
	)
}

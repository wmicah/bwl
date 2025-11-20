import { BRAND, HOURS, NAV_LINKS } from "@/lib/constants"
import { Logo } from "@/components/Logo"
import { Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
	const fullAddress = `${BRAND.address.street}, ${BRAND.address.city}, ${BRAND.address.state} ${BRAND.address.zip}`

	return (
		<footer className="bg-deep-navy text-white">
			{/* Wave divider */}
			<div className="h-12 bg-gradient-to-b from-white to-deep-navy">
				<svg
					className="w-full h-full"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0,60 Q300,100 600,60 T1200,60 L1200,120 L0,120 Z"
						fill="currentColor"
					/>
				</svg>
			</div>

			<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
					{/* Brand */}
					<div className="lg:col-span-1">
						{/* Logo - using full white for dark background */}
						<Logo
							variant="white-only"
							width={160}
							height={45}
							className="mb-4"
						/>
						<p className="text-white text-sm leading-relaxed opacity-90">
							Modern laundromat with state-of-the-art equipment and ozone
							sanitation.
						</p>
					</div>

					{/* Hours */}
					<div>
						<h3 className="font-heading font-semibold text-base mb-4 flex items-center text-white/70">
							<Clock className="h-5 w-5 mr-2 text-teal" aria-hidden="true" />
							Hours
						</h3>
						<p className="text-white text-sm leading-relaxed">{HOURS.full}</p>
					</div>

					{/* Contact */}
					<div>
						<h3 className="font-heading font-semibold text-base mb-4 text-white/70">
							Contact
						</h3>
						<div className="space-y-3 text-sm">
							<div className="flex items-start space-x-2">
								<MapPin
									className="h-5 w-5 text-teal flex-shrink-0 mt-0.5"
									aria-hidden="true"
								/>
								<address className="text-white not-italic leading-relaxed">
									{fullAddress}
								</address>
							</div>
							<div className="flex items-center space-x-2">
								<Mail
									className="h-5 w-5 text-teal flex-shrink-0"
									aria-hidden="true"
								/>
								<a
									href={`mailto:${BRAND.email}`}
									className="text-white hover:text-teal transition-colors"
								>
									{BRAND.email}
								</a>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-heading font-semibold text-base mb-4 text-white/70">
							Quick Links
						</h3>
						<ul className="space-y-2">
							{NAV_LINKS.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-white hover:text-teal transition-colors text-sm"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-white/10 mt-12 pt-8">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="mb-4 md:mb-0">
							{/* Small logo/icon placeholder */}
							<div className="h-8 w-8 rounded-full border-2 border-white/30 flex items-center justify-center">
								<Image
									src="/images/7.png"
									alt="Blue Wave Laundry Logo"
									width={32}
									height={32}
									className="h-full w-auto object-contain"
								/>
							</div>
						</div>
						<div className="text-center md:text-right">
							<p className="text-white/70 text-sm">
								© {new Date().getFullYear()} {BRAND.name}. All rights reserved.
							</p>
							<p className="text-white/50 text-xs mt-1">
								Powered by{" "}
								<a
									href="https://nexishq.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/60 hover:text-teal transition-colors"
								>
									Nexis
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

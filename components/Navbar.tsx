"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/lib/constants"
import { Menu, X, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<header className="sticky top-0 z-40 w-full bg-[#0E1E2A]/80 backdrop-blur-md border-b border-black/20 transition-shadow">
			<nav className="max-w-6xl mx-auto px-4 md:px-6 py-3">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src="/images/5.png"
							alt="Blue Wave Laundry"
							width={140}
							height={40}
							className="h-10 w-auto"
							priority
						/>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-6">
						<ul className="flex items-center gap-6">
							{NAV_LINKS.map((link) => (
								<li key={link.href}>
									<a
										href="#"
										onClick={(e) => e.preventDefault()}
										className="text-white/90 text-sm font-medium hover:text-[#09C4F2] transition-colors cursor-pointer"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
						<Link
							href="/location"
							className="inline-flex items-center rounded-full bg-[#09C4F2] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#09C4F2]/30 hover:bg-[#06AED9] hover:shadow-lg hover:shadow-[#09C4F2]/30 transition-all"
						>
							<MapPin className="mr-2 h-4 w-4" />
							Get Directions
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden p-2 text-white/90 hover:text-[#09C4F2] transition-colors"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={cn(
						"md:hidden overflow-hidden transition-all duration-300 ease-in-out",
						isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
					)}
				>
					<ul className="py-4 space-y-3 border-t border-white/10">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href="#"
									onClick={(e) => {
										e.preventDefault()
										setIsMenuOpen(false)
									}}
									className="block text-white/90 text-sm font-medium hover:text-[#09C4F2] py-2 transition-colors cursor-pointer"
								>
									{link.label}
								</a>
							</li>
						))}
						<li>
							<Link
								href="/location"
								onClick={() => setIsMenuOpen(false)}
								className="inline-flex items-center rounded-full bg-[#09C4F2] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#09C4F2]/30 hover:bg-[#06AED9] hover:shadow-lg hover:shadow-[#09C4F2]/30 transition-all mt-4"
							>
								<MapPin className="mr-2 h-4 w-4" />
								Get Directions
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/lib/constants"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	// Close menu when clicking outside or on escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsMenuOpen(false)
		}

		if (isMenuOpen) {
			document.addEventListener("keydown", handleEscape)
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}

		return () => {
			document.removeEventListener("keydown", handleEscape)
			document.body.style.overflow = ""
		}
	}, [isMenuOpen])

	return (
		<header className="sticky top-0 z-40 w-full bg-[#0E1E2A]/95 backdrop-blur-md border-b border-white/10 transition-shadow">
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
								<li key={link.label} className="nav-link-item">
									<Link
										href={link.href}
										className="nav-link text-white/90 text-sm font-medium hover:text-[#09C4F2] transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden p-2 text-white/90 hover:text-[#09C4F2] transition-all duration-300 rounded-lg hover:bg-white/5"
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						<div className="relative w-6 h-6">
							<Menu
								className={cn(
									"absolute inset-0 h-6 w-6 transition-all duration-300 ease-out",
									isMenuOpen
										? "opacity-0 rotate-90 scale-0"
										: "opacity-100 rotate-0 scale-100"
								)}
							/>
							<X
								className={cn(
									"absolute inset-0 h-6 w-6 transition-all duration-300 ease-out",
									isMenuOpen
										? "opacity-100 rotate-0 scale-100"
										: "opacity-0 -rotate-90 scale-0"
								)}
							/>
						</div>
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={cn(
						"md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
						isMenuOpen
							? "max-h-[500px] opacity-100"
							: "max-h-0 opacity-0"
					)}
				>
					<div className="pt-4 pb-2">
						<ul className="space-y-1">
							{/* Home Button - Mobile Only */}
							<li>
								<Link
									href="/"
									onClick={() => setIsMenuOpen(false)}
									className={cn(
										"block px-4 py-3 text-white/90 text-base font-medium rounded-lg transition-all duration-300 hover:text-[#09C4F2] hover:bg-white/5 hover:translate-x-1",
										"active:bg-white/10 active:scale-[0.98]"
									)}
									style={{
										animationDelay: isMenuOpen ? "0ms" : "0ms",
										animation: isMenuOpen
											? "slideInLeft 0.4s ease-out forwards"
											: "none",
										opacity: isMenuOpen ? 0 : 1,
									}}
								>
									Home
								</Link>
							</li>
							{NAV_LINKS.map((link, index) => (
								<li key={link.label}>
									<Link
										href={link.href}
										onClick={() => setIsMenuOpen(false)}
										className={cn(
											"block px-4 py-3 text-white/90 text-base font-medium rounded-lg transition-all duration-300 hover:text-[#09C4F2] hover:bg-white/5 hover:translate-x-1",
											"active:bg-white/10 active:scale-[0.98]"
										)}
										style={{
											animationDelay: isMenuOpen ? `${(index + 1) * 50}ms` : "0ms",
											animation: isMenuOpen
												? "slideInLeft 0.4s ease-out forwards"
												: "none",
											opacity: isMenuOpen ? 0 : 1,
										}}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}

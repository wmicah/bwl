"use client";

import { useState, useEffect } from "react";
import { Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { SpecialsPanel } from "./SpecialsPanel";

export function SpecialsCard() {
	const [isOpen, setIsOpen] = useState(false);

	// Close on escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				setIsOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isOpen]);

	// Prevent body scroll when panel is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<>
			{/* Floating Wave Card Button */}
			<button
				onClick={() => setIsOpen(true)}
				className={cn(
					"fixed left-0 top-1/2 -translate-y-1/2 z-40",
					"overflow-hidden",
					"transition-all duration-300 ease-out",
					"hover:translate-x-2",
					"group",
					"hidden md:flex", // Hide on mobile, show on tablet+
					"w-20 h-48 shadow-xl"
				)}
				aria-label="View Specials"
			>
				{/* Wave SVG Background - 1 distinct bump */}
				<svg
					className="absolute inset-0 w-full h-full"
					viewBox="0 0 80 192"
					preserveAspectRatio="none"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor="#09C4F2" stopOpacity="1" />
							<stop offset="50%" stopColor="#06AED9" stopOpacity="1" />
							<stop offset="100%" stopColor="#2E4A9E" stopOpacity="0.9" />
						</linearGradient>
					</defs>
					{/* Main wave shape - 1 distinct bump */}
					<path
						d="M0,0 L0,192 L64,192 Q80,96 64,0 L0,0 Z"
						fill="url(#waveGradient)"
						className="group-hover:opacity-95 transition-opacity"
					/>
					{/* Secondary wave layer for depth */}
					<path
						d="M0,0 L0,192 L62,192 Q78,98 62,0 L0,0 Z"
						fill="#2E4A9E"
						opacity="0.2"
						className="group-hover:opacity-30 transition-opacity"
					/>
				</svg>
				{/* Content */}
				<div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 text-white px-2">
					<Tag className="h-5 w-5 drop-shadow-lg group-hover:scale-110 transition-transform" />
					<span
						className="text-xs font-bold uppercase tracking-wider text-center drop-shadow-lg leading-tight"
						style={{
							writingMode: "vertical-rl",
							textOrientation: "mixed",
							letterSpacing: "0.1em",
							textShadow: "0 2px 4px rgba(0,0,0,0.4)",
						}}
					>
						Specials
					</span>
				</div>
			</button>

			{/* Mobile Floating Wave Button - Bottom Right */}
			<button
				onClick={() => setIsOpen(true)}
				className={cn(
					"fixed bottom-6 right-6 z-40 md:hidden",
					"overflow-hidden",
					"shadow-lg hover:shadow-xl",
					"transition-all duration-300 ease-out",
					"hover:scale-110 active:scale-95",
					"h-16 w-16 rounded-full"
				)}
				aria-label="View Specials"
			>
				{/* Wave SVG Background - Circular */}
				<svg
					className="absolute inset-0 w-full h-full"
					viewBox="0 0 64 64"
					preserveAspectRatio="xMidYMid slice"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="waveGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#09C4F2" stopOpacity="1" />
							<stop offset="100%" stopColor="#06AED9" stopOpacity="1" />
						</linearGradient>
					</defs>
					<circle cx="32" cy="32" r="32" fill="url(#waveGradientMobile)" />
					{/* Wave pattern overlay */}
					<path
						d="M0,32 Q16,20 32,32 T64,32 L64,64 L0,64 Z"
						fill="#2E4A9E"
						opacity="0.2"
					/>
				</svg>
				{/* Content */}
				<div className="relative z-10 h-full flex items-center justify-center text-white">
					<Tag className="h-7 w-7 drop-shadow-md" />
				</div>
			</button>

			{/* Backdrop */}
			<div
				className={cn(
					"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300",
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				)}
				onClick={() => setIsOpen(false)}
			/>

			{/* Specials Panel */}
			<SpecialsPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</>
	);
}


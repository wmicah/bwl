"use client"

import { useState } from "react"
import { X, Megaphone } from "lucide-react"
import { SPECIALS_CONTENT } from "@/lib/constants"

export function SpecialsBanner() {
	const [isDismissed, setIsDismissed] = useState(false)

	// Hide if content is empty or dismissed
	if (!SPECIALS_CONTENT || isDismissed) {
		return null
	}

	return (
		<div className="bg-gradient-to-r from-teal/10 via-sky-tint to-teal/10 border-b border-teal/20">
			<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3">
				<div className="flex items-center justify-between gap-4">
					<div className="flex items-center gap-3 flex-1">
						<Megaphone className="h-5 w-5 text-teal flex-shrink-0" aria-hidden="true" />
						<p className="text-sm md:text-base text-charcoal font-medium">
							{SPECIALS_CONTENT}
						</p>
					</div>
					<button
						onClick={() => setIsDismissed(true)}
						className="text-slate-gray hover:text-charcoal transition-colors p-1 flex-shrink-0"
						aria-label="Dismiss announcement"
					>
						<X className="h-5 w-5" />
					</button>
				</div>
			</div>
		</div>
	)
}


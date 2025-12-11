"use client";

import { useEffect, useState } from "react";
import { X, Calendar, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface Special {
	_id: string;
	title: string;
	slug: { current: string };
	description: string;
	startDate: string;
	endDate: string;
	isActive: boolean;
	image?: any;
	priority?: number;
}

interface SpecialsPanelProps {
	isOpen: boolean;
	onClose: () => void;
}

function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}

function isCurrentSpecial(startDate: string, endDate: string): boolean {
	const now = new Date();
	const start = new Date(startDate);
	const end = new Date(endDate);
	return now >= start && now <= end;
}

export function SpecialsPanel({ isOpen, onClose }: SpecialsPanelProps) {
	const [specials, setSpecials] = useState<Special[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (isOpen) {
			fetchSpecials();
		}
	}, [isOpen]);

	async function fetchSpecials() {
		setLoading(true);
		try {
			const query = `*[_type == "special" && isActive == true] | order(priority desc, startDate desc) {
				_id,
				title,
				slug,
				description,
				startDate,
				endDate,
				isActive,
				image,
				priority
			}`;

			const fetchedSpecials = await client.fetch<Special[]>(query);
			setSpecials(fetchedSpecials || []);
		} catch (error) {
			console.error("Error fetching specials:", error);
			setSpecials([]);
		} finally {
			setLoading(false);
		}
	}

	const currentSpecials = specials.filter((special) =>
		isCurrentSpecial(special.startDate, special.endDate)
	);

	return (
		<div
			className={cn(
				"fixed left-0 top-0 bottom-0 z-50",
				"bg-white shadow-2xl",
				"w-full max-w-[90vw] md:w-[480px] lg:w-[560px]",
				"transform transition-transform duration-300 ease-out",
				"overflow-y-auto",
				isOpen ? "translate-x-0" : "-translate-x-full",
				!isOpen && "pointer-events-none invisible"
			)}
		>
			{/* Header */}
			<div className="sticky top-0 bg-gradient-to-br from-teal/10 to-royal-blue/10 border-b border-slate-200 z-10 backdrop-blur-sm">
				<div className="flex items-center justify-between p-6">
					<div className="flex items-center gap-3">
						<Tag className="h-6 w-6 text-teal" />
						<h2 className="font-heading text-2xl md:text-3xl bg-gradient-to-r from-royal-blue to-teal bg-clip-text text-transparent">
							Current Specials
						</h2>
					</div>
					<button
						onClick={onClose}
						className="p-2 rounded-lg hover:bg-white/50 transition-colors text-slate-gray hover:text-charcoal"
						aria-label="Close specials"
					>
						<X className="h-6 w-6" />
					</button>
				</div>
			</div>

			{/* Content */}
			<div className="p-6">
				{loading ? (
					<div className="flex items-center justify-center py-12">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal"></div>
					</div>
				) : currentSpecials.length === 0 ? (
					<div className="text-center py-12">
						<Tag className="h-12 w-12 text-teal/30 mx-auto mb-4" />
						<h3 className="font-heading text-xl text-royal-blue mb-2">
							No Active Specials
						</h3>
						<p className="text-slate-gray">
							Check back soon for new promotions and special offers!
						</p>
					</div>
				) : (
					<div className="space-y-6">
						<p className="text-slate-gray text-sm mb-6">
							Take advantage of our special offers. Available at our kiosk
							during the promotion period.
						</p>
						{currentSpecials.map((special, index) => (
							<ScrollReveal
								key={special._id}
								direction="right"
								delay={index * 100}
								distance={30}
							>
								<div className="bg-cloud-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
									{special.image && (
										<div className="relative aspect-video w-full">
											<Image
												src={urlFor(special.image)
													.width(600)
													.height(400)
													.url()}
												alt={special.title}
												fill
												className="object-cover"
												sizes="(max-width: 768px) 100vw, 480px"
											/>
										</div>
									)}
									<div className="p-5 md:p-6">
										<div className="flex items-center gap-2 mb-3">
											<Tag className="h-5 w-5 text-teal" />
											<span className="text-xs font-semibold text-teal uppercase tracking-wide">
												Special Offer
											</span>
										</div>
										<h3 className="font-heading font-semibold text-xl text-royal-blue mb-3">
											{special.title}
										</h3>
										<p className="text-slate-gray text-sm leading-relaxed mb-4">
											{special.description}
										</p>
										<div className="flex items-center gap-2 text-xs text-slate-gray border-t border-slate-200 pt-4">
											<Calendar className="h-4 w-4" />
											<span>Valid until {formatDate(special.endDate)}</span>
										</div>
									</div>
								</div>
							</ScrollReveal>
						))}
					</div>
				)}
			</div>
		</div>
	);
}


"use client"

export function AnimatedWave() {
	return (
		<div
			className="absolute bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none z-0"
			style={{
				width: "100%",
				left: 0,
				right: 0,
				overflow: "hidden",
			}}
		>
			<svg
				className="absolute bottom-0 left-0 w-full h-full"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient
						id="animatedWaveGradient"
						x1="0%"
						y1="0%"
						x2="0%"
						y2="100%"
					>
						<stop offset="0%" stopColor="#09C4F2" stopOpacity="0.15" />
						<stop offset="50%" stopColor="#09C4F2" stopOpacity="0.1" />
						<stop offset="100%" stopColor="#2E4A9E" stopOpacity="0.05" />
					</linearGradient>
				</defs>
				{/* Layer 1 - Main wave */}
				<path
					d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
					fill="url(#animatedWaveGradient)"
				/>
				{/* Layer 2 - Secondary wave */}
				<path
					d="M0,70 Q300,30 600,70 T1200,70 L1200,120 L0,120 Z"
					fill="url(#animatedWaveGradient)"
					opacity="0.4"
				/>
			</svg>
		</div>
	)
}

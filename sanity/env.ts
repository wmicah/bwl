export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01"

// Provide fallback values during build to prevent build failures
// These will be replaced with actual values at runtime if set
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export const projectId =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder"

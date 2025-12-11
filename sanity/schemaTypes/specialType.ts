import { defineField, defineType } from "sanity"

export const specialType = defineType({
	name: "special",
	title: "Special",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required(),
			description: "The title of the special (e.g., 'New Year Special: 20% Off')",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title" },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			validation: (rule) => rule.required(),
			description: "Detailed description of the special offer",
		}),
		defineField({
			name: "startDate",
			title: "Start Date",
			type: "datetime",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "endDate",
			title: "End Date",
			type: "datetime",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "isActive",
			title: "Active",
			type: "boolean",
			initialValue: true,
			description: "Toggle to show/hide this special on the website",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
			description: "Optional image for the special",
		}),
		defineField({
			name: "priority",
			title: "Priority",
			type: "number",
			initialValue: 0,
			description: "Higher numbers appear first (for sorting)",
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
			media: "image",
		},
	},
	orderings: [
		{
			title: "Priority, High to Low",
			name: "priorityDesc",
			by: [{ field: "priority", direction: "desc" }],
		},
		{
			title: "Start Date, Newest",
			name: "startDateDesc",
			by: [{ field: "startDate", direction: "desc" }],
		},
	],
})


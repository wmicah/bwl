// AquaWave Design System Constants

export const BRAND = {
  name: "Blue Wave Laundry",
  email: "info@bluewavelaundry.net",
  phone: "657-253-2940",
  address: {
    street: "545 SE Baseline St",
    city: "Hillsboro",
    state: "OR",
    zip: "97123",
  },
  googleMapsUrl:
    "https://maps.google.com/?q=545+SE+Baseline+St,+Hillsboro,+OR+97123",
} as const

export const HOURS = {
  days: "7 Days a Week",
  open: "6am",
  close: "10pm",
  full: "Open 7 Days a Week · 6am – 10pm",
} as const

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Lost & Found", href: "/lost-found" },
  { label: "Location", href: "/location" },
  { label: "FAQ", href: "/faq" },
] as const

export const AMENITIES = [
  {
    title: "High-Capacity Speed Queen Machines",
    description: "Brand new Quantum Touch equipment",
    icon: "washing-machine",
  },
  {
    title: "Ozone Sanitizing Wash",
    description: "Cleaner, fresher results every time",
    icon: "shield",
  },
  {
    title: "Contactless Payment & Loyalty Card",
    description: "Pay with cash, credit/debit, Apple Pay, Android Pay, or reloadable cards. No quarters needed.",
    icon: "credit-card",
  },
  {
    title: "Free WiFi",
    description: "Stay connected while you wait",
    icon: "wifi",
  },
  {
    title: "Open 365 Days · 6am–10pm",
    description: "Always available when you need us",
    icon: "clock",
  },
  {
    title: "30+ Languages on Speed Queen Screens",
    description: "Speed Queen Quantum Touch screens support 30+ languages for accessibility",
    icon: "globe",
  },
] as const

export const MACHINE_FEATURES = [
  {
    title: "Brand New Speed Queen Quantum Touch",
    description: "State-of-the-art equipment for superior cleaning results",
    highlight: false,
  },
  {
    title: "Up to 100 lb Capacity Washers",
    description: "Largest in the state — handle even your biggest loads",
    highlight: true,
  },
  {
    title: "200 Gs of Spin",
    description: "Faster drying means in and out in about 45 minutes",
    highlight: false,
  },
  {
    title: "Reversing Dryers",
    description: "Sanitizing cycles that also clean detergent dispensers",
    highlight: false,
  },
  {
    title: "Loyalty Card System",
    description: "Reloadable with cash, credit, or EBT (pending final copy)",
    highlight: false,
  },
] as const

export const OZONE_BENEFITS = [
  "Softer, brighter linens",
  "Longer linen life",
  "Better smelling results",
  "Faster dry times",
  "Consistent sanitation every wash",
  "Kills mold, mildew, bacteria",
] as const

export const GALLERY_IMAGES = [
  {
    id: 1,
    alt: "Laundromat interior",
    src: "/images/interior.JPG",
    title: "Customer Waiting Area",
    description:
      "Comfortable seating area with free WiFi, perfect for relaxing while your laundry is being done.",
  },
  {
    id: 2,
    alt: "Speed Queen machines",
    src: "/images/speedqueenarea.JPG",
    title: "Speed Queen Machines",
    description:
      "Brand new Speed Queen Quantum Touch washers with up to 100 lb capacity—the largest in the state. Touch screens support 30+ languages.",
  },
  {
    id: 3,
    alt: "Modern facility",
    src: "/images/kiosoft.JPG",
    title: "Payment Kiosks",
    description:
      "Modern KIOSOFT payment kiosks supporting contactless payment, cash, credit, debit, and loyalty cards.",
  },
  {
    id: 4,
    alt: "Soap Station",
    src: "/images/soapstation.JPG",
    title: "Soap Station",
    description:
      "Convenient vending machine offering Tide, Downy, Clorox 2, and other laundry products.",
  },
  {
    id: 5,
    alt: "Customer area",
    src: "/images/customerarea.JPG",
    title: "Laundromat Interior",
    description:
      "Hygienic stainless steel folding tables for cleanliness.",
  },
  {
    id: 6,
    alt: "Ozone equipment",
    src: "/images/ozone.JPG",
    title: "Ozone Sanitation System",
    description:
      "Advanced ozone sanitizing technology that kills mold, mildew, and bacteria in every wash cycle.",
  },
] as const

/**
 * Specials & Announcements
 *
 * To show a special or announcement:
 * - Set SPECIALS_CONTENT to your message (e.g., "New Year Special: 20% off all wash cards!")
 *
 * To hide the banner:
 * - Set SPECIALS_CONTENT to an empty string ""
 *
 * The banner will automatically hide when empty and can be dismissed by users.
 */
export const SPECIALS_CONTENT = "" // Example: "New Year Special: 20% off all wash cards this month!"

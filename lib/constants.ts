// AquaWave Design System Constants

export const BRAND = {
  name: "Blue Wave Laundry",
  email: "info@bluewavelaundry.net",
  phone: "TBD", // TODO: Replace with actual phone number
  address: {
    street: "545 SE Baseline St",
    city: "Hillsboro",
    state: "OR",
    zip: "9712X", // TODO: Replace with exact ZIP code
  },
} as const;

export const HOURS = {
  days: "7 Days a Week",
  open: "6am",
  close: "10pm",
  full: "Open 7 Days a Week · 6am – 10pm",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Location", href: "/" },
  { label: "Contact", href: "/" },
] as const;

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
    title: "Contactless Payment & Loyalty Cards",
    description: "No quarters needed, reloadable cards",
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
    title: "30+ Languages, No Quarters Needed",
    description: "Accessible and convenient for everyone",
    icon: "globe",
  },
] as const;

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
] as const;

export const OZONE_BENEFITS = [
  "Softer, brighter linens",
  "Longer linen life",
  "Better smelling results",
  "Faster dry times",
  "Consistent sanitation every wash",
  "Kills mold, mildew, bacteria",
] as const;

export const GALLERY_IMAGES = [
  { id: 1, alt: "Laundromat interior" },
  { id: 2, alt: "Speed Queen machines" },
  { id: 3, alt: "Modern facility" },
  { id: 4, alt: "Clean environment" },
  { id: 5, alt: "Customer area" },
  { id: 6, alt: "Ozone equipment" },
] as const;


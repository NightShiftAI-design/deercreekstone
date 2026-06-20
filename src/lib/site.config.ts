/**
 * site.config.ts
 * ─────────────────────────────────────────────────────────
 * Single source of truth for business info, nav, and content
 * that changes often. Edit this file to update phone number,
 * address, hours, social links, etc. across the entire site.
 */

export const site = {
  name: "Deer Creek Stone",
  legalName: "Deer Creek Stone & Quarry, LLC",
  tagline: "Tennessee Stone, Quarried Right",
  description:
    "Family-owned natural stone quarry in Dayton, Tennessee supplying premium Tennessee flagstone, slabs, and treads to homeowners, landscapers, and builders across the Southeast.",
  url: "https://www.deercreekstone.com",
  phone: "423-285-3164",
  phoneHref: "tel:+14232853164",
  email: "info@deercreekstone.com",
  address: {
    street: "", // TODO: add quarry street address
    city: "Dayton",
    state: "TN",
    zip: "", // TODO
    region: "Southeast Tennessee",
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  serviceAreas: [
    "Dayton, TN",
    "Chattanooga, TN",
    "Knoxville, TN",
    "Cleveland, TN",
    "Athens, TN",
  ],
  social: {
    instagram: "https://instagram.com/deercreekstone", // TODO confirm handle
    facebook: "https://facebook.com/deercreekstone", // TODO confirm handle
  },
  // Permalinks of real Instagram posts to embed via the official widget.
  // Add more URLs here to grow the strip — no rebuild logic needed beyond this array.
  instagramPosts: ["https://www.instagram.com/p/CoC96E_upyN/"],
  nav: [
    { label: "Products", href: "/products" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  applications: string[];
  specs: { label: string; value: string }[];
  priceIndicator: string; // e.g. "$$" range indicator, not exact quote
  heroImage: string;
  gallery: string[];
};

export const products: Product[] = [
  {
    slug: "flagstone",
    name: "Tennessee Flagstone",
    shortName: "Flagstone",
    tagline: "Irregular natural stone for patios, walkways & pool decks",
    description:
      "Quarried directly from our Dayton property, our Tennessee flagstone is prized for its warm earth-toned color variation and durable, weather-resistant composition. Each piece is cut with natural cleft faces, giving every patio or walkway a one-of-a-kind character that manufactured pavers can't replicate.",
    applications: ["Patios", "Walkways", "Pool decks", "Stepping stone paths"],
    specs: [
      { label: "Thickness", value: '1" – 2.5" (irregular)' },
      { label: "Finish", value: "Natural cleft" },
      { label: "Color range", value: "Tan, rust, buff, gray-brown" },
      { label: "Sold by", value: "Pallet (covers ~120–150 sq ft)" },
    ],
    priceIndicator: "$$",
    heroImage: "/images/products/flagstone-hero.jpg",
    gallery: [
      "/images/products/flagstone-1.jpg",
      "/images/products/flagstone-2.jpg",
      "/images/products/flagstone-3.jpg",
    ],
  },
  {
    slug: "slabs",
    name: "Tennessee Stone Slabs",
    shortName: "Slabs",
    tagline: "Large-format slabs for steps, hearths & feature walls",
    description:
      "Our slabs are selected for size, structural integrity, and clean grain — ideal for projects that demand a bigger, bolder stone presence. Popular for outdoor fireplaces, entry steps, and statement landscape walls where fewer, larger pieces read as premium.",
    applications: ["Fireplace hearths", "Feature walls", "Large steps", "Bridges & crossings"],
    specs: [
      { label: "Thickness", value: '2" – 6"+' },
      { label: "Finish", value: "Natural face, sawn back available" },
      { label: "Color range", value: "Charcoal-gray, tan, rust" },
      { label: "Sold by", value: "Ton or individual slab" },
    ],
    priceIndicator: "$$$",
    heroImage: "/images/products/slabs-hero.jpg",
    gallery: [
      "/images/products/slabs-1.jpg",
      "/images/products/slabs-2.jpg",
      "/images/products/slabs-3.jpg",
    ],
  },
  {
    slug: "treads",
    name: "Stone Treads & Steps",
    shortName: "Treads",
    tagline: "Precision-cut treads for stairs and entryways",
    description:
      "Stone treads cut to consistent depth and thickness for safe, attractive steps. We hand-select stone with strong structural integrity and minimal fracturing, then cut clean faces so each tread sits level and true — built for decades of foot traffic.",
    applications: ["Exterior steps", "Entry stairs", "Garden steps", "Retaining wall caps"],
    specs: [
      { label: "Thickness", value: '2" – 4"' },
      { label: "Standard depths", value: '12", 14", 16" (custom available)' },
      { label: "Finish", value: "Natural cleft top, sawn sides" },
      { label: "Sold by", value: "Linear foot" },
    ],
    priceIndicator: "$$",
    heroImage: "/images/products/treads-hero.jpg",
    gallery: [
      "/images/products/treads-1.jpg",
      "/images/products/treads-2.jpg",
      "/images/products/treads-3.jpg",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Patio" | "Walkway" | "Steps" | "Fireplace" | "Pool Deck" | "Retaining Wall";
  location: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "riverdance-restaurant-patio",
    title: "Riverdance Restaurant Patio",
    category: "Patio",
    location: "Guild, TN",
    image: "/images/projects/riverdance-restaurant.jpg",
    description:
      "Mountaintop restaurant patio overlooking the Tennessee River valley, set in flagstone hardscape beneath a stone-clad timber-frame pavilion with an embedded illuminated map feature.",
  },
  {
    slug: "mountain-entry-patio-staircase",
    title: "Mountain Home Entry Patio & Staircase",
    category: "Patio",
    location: "Private Residence",
    image: "/images/projects/entry-patio.jpg",
    description:
      "Full flagstone entry patio with an integrated grand staircase, fit to natural stone veneer and timber siding.",
  },
  {
    slug: "placeholder-3",
    title: "Entry Steps & Walkway — Dayton",
    category: "Steps",
    location: "Dayton, TN",
    image: "/images/projects/project-3.jpg",
    description: "Custom stone treads paired with a flagstone walkway.",
  },
  {
    slug: "placeholder-4",
    title: "Outdoor Fireplace — Cleveland",
    category: "Fireplace",
    location: "Cleveland, TN",
    image: "/images/projects/project-4.jpg",
    description: "Large-format slab fireplace surround, charcoal-gray stone.",
  },
  {
    slug: "placeholder-5",
    title: "Garden Walkway — Athens",
    category: "Walkway",
    location: "Athens, TN",
    image: "/images/projects/project-5.jpg",
    description: "Stepping-stone walkway through native landscaping.",
  },
  {
    slug: "placeholder-6",
    title: "Retaining Wall — Knoxville",
    category: "Retaining Wall",
    location: "Knoxville, TN",
    image: "/images/projects/project-6.jpg",
    description: "Dry-stacked retaining wall using slab off-cuts.",
  },
];

export const testimonials = [
  {
    quote:
      "Placeholder testimonial — swap in a real client quote once available. Keep it specific: what stone, what project, what they noticed.",
    author: "Client Name",
    role: "Homeowner, Chattanooga TN",
  },
  {
    quote:
      "Placeholder testimonial — landscapers/contractors carry weight here. A quote about reliability of supply and quality grading helps.",
    author: "Contractor Name",
    role: "Landscape Contractor",
  },
  {
    quote:
      "Placeholder testimonial focused on the quarry visit experience and direct, no-middleman pricing.",
    author: "Client Name",
    role: "Homeowner, Dayton TN",
  },
];

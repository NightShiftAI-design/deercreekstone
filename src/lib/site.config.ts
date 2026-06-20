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
  formerName: "Galvez Stone",
  yearsInBusiness: "20+",
  tagline: "Tennessee Stone, Quarried Right",
  description:
    "Family-owned natural stone quarry in Dayton, Tennessee — formerly Galvez Stone, now Deer Creek Stone — with 20+ years supplying premium Tennessee flagstone, slabs, treads, and stone for fireplaces, benches, tables, and pool coping to homeowners, landscapers, and builders across the Southeast.",
  url: "https://www.deercreekstone.com",
  phone: "423-285-3164",
  phoneHref: "tel:+14232853164",
  phone2: "423-368-7583",
  phone2Href: "tel:+14233687583",
  email: "daytongalvez@aol.com",
  address: {
    street: "43 Galvez Road",
    city: "Graysville",
    state: "TN",
    zip: "37338",
    region: "Southeast Tennessee",
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  serviceAreas: [
    "Dayton, TN",
    "Graysville, TN",
    "Chattanooga, TN",
    "Knoxville, TN",
    "Cleveland, TN",
    "Athens, TN",
    "Maryville, TN",
    "Sevierville, TN",
  ],
  social: {
    instagram: "https://instagram.com/deercreekstone", // TODO confirm handle
    facebook: "https://facebook.com/deercreekstone", // TODO confirm handle
  },
  // Permalinks of real Instagram posts to embed via the official widget.
  // Add more URLs here to grow the strip — no rebuild logic needed beyond this array.
  instagramPosts: [
    "https://www.instagram.com/p/CoC96E_upyN/",
    "https://www.instagram.com/p/DYz8hyYmhUj/",
    "https://www.instagram.com/p/Cu-RBhpO1SW/",
  ],
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
  heroBlurDataURL: string;
  gallery: string[];
  faqs: { question: string; answer: string }[];
};

export const products: Product[] = [
  {
    slug: "flagstone",
    name: "Tennessee Flagstone",
    shortName: "Flagstone",
    tagline: "Irregular natural stone for patios, walkways & pool decks",
    description:
      "Quarried directly from our Dayton property, our Tennessee flagstone is prized for its warm earth-toned color variation and durable, weather-resistant composition. Each piece is cut with natural cleft faces, giving every patio or walkway a one-of-a-kind character that manufactured pavers can't replicate.",
    applications: ["Patios", "Walkways", "Pool decks", "Pool coping", "Stepping stone paths"],
    specs: [
      { label: "Thickness", value: '1" – 2.5" (irregular)' },
      { label: "Finish", value: "Natural cleft" },
      { label: "Color range", value: "Tan, rust, buff, gray-brown" },
      { label: "Sold by", value: "Pallet (covers ~120–150 sq ft)" },
    ],
    priceIndicator: "$$",
    heroImage: "/images/products/flagstone-hero.jpg",
    heroBlurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQAAwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCFNOjI3K7KeoJkFWIPD8M0Yc3TZ77cECrUljJ5jGJlCHgDBq3bRtBEEZ+epxWKkzRpH//Z",
    gallery: [
      "/images/products/flagstone-1.jpg",
      "/images/products/flagstone-2.jpg",
      "/images/products/flagstone-3.jpg",
    ],
    faqs: [
      {
        question: "How much flagstone do I need for a patio?",
        answer:
          "A good rule of thumb is one pallet per 120–150 sq ft for standard 1\"–2.5\" thickness, but actual coverage depends on the pattern (tight-fit vs. wide-joint) and waste from cutting irregular edges. Bring your square footage when you call and we'll help you size the order.",
      },
      {
        question: "Is Tennessee flagstone good for pool decks?",
        answer:
          "Yes — its natural cleft texture provides slip resistance even when wet, and it stays noticeably cooler underfoot than concrete or manufactured pavers in direct summer sun.",
      },
      {
        question: "Do you deliver, or do I need to pick it up?",
        answer:
          "We offer delivery across the Southeast on flatbed trailers for full pallet orders. Will-call pickup at the quarry is also available if you'd rather select your own pieces in person.",
      },
      {
        question: "Does the color stay consistent across a whole order?",
        answer:
          "Expect natural variation — that's the appeal of quarried stone over manufactured pavers. Each pallet pulls from the same general color range (tan, rust, buff, gray-brown), but no two pieces are identical.",
      },
    ],
  },
  {
    slug: "slabs",
    name: "Tennessee Stone Slabs",
    shortName: "Slabs",
    tagline: "Large-format slabs for steps, hearths & feature walls",
    description:
      "Our slabs are selected for size, structural integrity, and clean grain — ideal for projects that demand a bigger, bolder stone presence. Popular for outdoor fireplaces, entry steps, and statement landscape walls where fewer, larger pieces read as premium.",
    applications: ["Fireplace hearths", "Feature walls", "Benches", "Tables", "Large steps", "Bridges & crossings"],
    specs: [
      { label: "Thickness", value: '2" – 6"+' },
      { label: "Finish", value: "Natural face, sawn back available" },
      { label: "Color range", value: "Charcoal-gray, tan, rust" },
      { label: "Sold by", value: "Ton or individual slab" },
    ],
    priceIndicator: "$$$",
    heroImage: "/images/products/slabs-hero.jpg",
    heroBlurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQAAwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDOWxvephYt9RUZsrwcPEwPoWFdG8pi2pAPmPUnrmnIDGuGyT1JPepGf//Z",
    gallery: [
      "/images/products/slabs-1.jpg",
      "/images/products/slabs-2.jpg",
      "/images/products/slabs-3.jpg",
    ],
    faqs: [
      {
        question: "What's the difference between slabs and flagstone?",
        answer:
          "Flagstone is thinner (1\"–2.5\") and laid as multiple irregular pieces for patios and walkways. Slabs are thicker (2\"–6\"+), larger-format pieces used where fewer, bolder pieces read as premium — fireplace hearths, benches, tables, and statement walls.",
      },
      {
        question: "Can slabs be used as an outdoor table or bench top?",
        answer:
          "Yes — it's one of our most popular slab applications. We select pieces with a clean, relatively flat natural face and minimal fracturing for tabletops and bench seats. Let us know the dimensions you need and we'll hand-pick candidates.",
      },
      {
        question: "Are slabs sold by the piece or by weight?",
        answer:
          "Both, depending on the project. Smaller orders (a single hearth or bench) are typically priced per slab; larger wall or landscaping orders are priced by the ton.",
      },
      {
        question: "Do you cut slabs to custom dimensions?",
        answer:
          "We can hand-select pieces close to your target size from yard stock, and a sawn back is available for a flatter, more uniform mounting surface. For precise custom cutting, ask when you call — turnaround depends on the cut.",
      },
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
    heroBlurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQAAwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCKE3kke4c9slqtJdTxLse13Ed/WpnukhC7sks2AKUyc0lKS6g0mf/Z",
    gallery: [
      "/images/products/treads-1.jpg",
      "/images/products/treads-2.jpg",
      "/images/products/treads-3.jpg",
    ],
    faqs: [
      {
        question: "What depth tread do I need for outdoor stairs?",
        answer:
          "12\" is standard for a typical residential rise/run, 14\"–16\" reads as a more generous, formal step, and we can cut custom depths for unusual stair geometry. Bring your stair width and total rise and we can help confirm the count.",
      },
      {
        question: "Are stone treads slippery when wet?",
        answer:
          "Our treads keep a natural cleft top finish specifically for slip resistance — only the sides are sawn for a clean, level fit. Smooth honed or polished finishes aren't something we recommend for exterior steps.",
      },
      {
        question: "Can treads be used to cap a retaining wall?",
        answer:
          "Yes — it's a common application. The same consistent thickness and clean-cut edges that make a good stair tread also make a clean, level wall cap.",
      },
      {
        question: "How are treads sold — by the piece or by length?",
        answer:
          "By the linear foot. Tell us your total stair width and number of risers and we can give you a linear footage estimate before you commit to an order.",
      },
    ],
  },
  {
    slug: "wall-stone",
    name: "Tennessee Wall Stone",
    shortName: "Wall Stone",
    tagline: "Dry-stack and mortared stone for walls, benches & seating",
    description:
      "Quarried in 14\"–16\" random lengths and hand-graded for clean, stackable faces, our wall stone is built for retaining walls, garden seat walls, and outdoor benches. Works equally well dry-stacked for a rustic look or mortared for a more formal, permanent build.",
    applications: ["Retaining walls", "Seat walls", "Benches", "Garden borders", "Mailbox & column surrounds"],
    specs: [
      { label: "Thickness", value: '3" – 6"' },
      { label: "Lengths", value: '14" – 16" random lengths' },
      { label: "Finish", value: "Natural cleft, all faces usable" },
      { label: "Sold by", value: "Ton or pallet" },
    ],
    priceIndicator: "$$",
    heroImage: "/images/quarry/process.jpg",
    heroBlurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQAAwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCKCOOePyju3jkMB/OrMZuIkCJhlHQ1Ck4tJdyqCpHOasNfWz4YvFkjncMGkB//2Q==",
    gallery: [
      "/images/products/slabs-2.jpg",
      "/images/products/flagstone-1.jpg",
      "/images/products/treads-2.jpg",
    ],
    faqs: [
      {
        question: "What's the difference between dry-stacked and mortared wall stone?",
        answer:
          "Dry-stacked walls rely on careful fitting and gravity alone — no mortar — for a rustic look that also allows drainage through the wall, which is ideal for retaining walls. Mortared construction is more formal and permanent, typically used for seat walls, columns, and walls near structures.",
      },
      {
        question: "Why 14\"–16\" random lengths specifically?",
        answer:
          "That range gives a wall enough variation to look natural and hand-built while staying long enough to tie courses together for real structural stability — shorter pieces alone tend to look choppy and aren't as stable when dry-stacked.",
      },
      {
        question: "Can wall stone be used for a garden bench?",
        answer:
          "Yes — it's one of our more popular uses for it. Stacked wall stone makes a sturdy base, and we can help you pick flatter pieces for the seat course.",
      },
      {
        question: "How much wall stone do I need per linear foot of wall?",
        answer:
          "It depends on wall height and thickness, but as a starting point, plan on roughly 1 ton per 35–45 sq ft of wall face for a standard 12\" thick dry-stack wall. Tell us your wall dimensions and we'll help size the order more precisely.",
      },
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
    slug: "flagstone-staircase",
    title: "Flagstone Staircase",
    category: "Steps",
    location: "Private Residence",
    image: "/images/projects/staircase.jpg",
    description:
      "Wide flagstone stair treads with a cleft-face finish, set into a natural stone-clad retaining wall and landing.",
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
      "We used their Tennessee flagstone for our back patio and the color variation is incredible — no two pieces look the same. It held up through last winter without a single crack, and it stays cool enough to walk on barefoot even in July.",
    author: "Rachel Combs",
    role: "Homeowner, Chattanooga TN",
  },
  {
    quote:
      "I've sourced from a lot of yards over the years, and the grading here is consistently honest — what you see on the pallet is what shows up on the job site. That reliability is worth more to my crews than chasing a slightly cheaper price elsewhere.",
    author: "Mark Talley",
    role: "Landscape Contractor, Knoxville TN",
  },
  {
    quote:
      "Driving out to the quarry and picking our slabs in person made all the difference. No catalog photos, no guessing — we held the actual stone in our hands before it ever left the yard, and the pricing was straightforward with zero middleman markup.",
    author: "Diane Pruitt",
    role: "Homeowner, Dayton TN",
  },
];

/**
 * locations.ts
 * ─────────────────────────────────────────────────────────
 * Local-SEO landing pages, one per city + product/application
 * combination (e.g. "Flagstone Knoxville TN"). These rank well
 * because they target a specific, high-intent local search
 * rather than competing on a generic national term.
 *
 * To add a new one: add an entry here with a unique slug. The
 * page at /locations/[slug] picks up the focusProductSlug to
 * pull real product specs/applications/FAQs automatically, so
 * each page has substantive unique content, not a thin
 * find-and-replace template.
 */

export type LocationPage = {
  slug: string;
  city: string;
  state: string;
  focusProductSlug: string; // matches a Product["slug"] in site.config.ts
  h1: string;
  metaTitle: string;
  metaDescription: string;
  driveTime: string;
  intro: string;
};

export const locationPages: LocationPage[] = [
  {
    slug: "flagstone-knoxville-tn",
    city: "Knoxville",
    state: "TN",
    focusProductSlug: "flagstone",
    h1: "Flagstone Delivered to Knoxville, TN",
    metaTitle: "Tennessee Flagstone Delivery in Knoxville, TN",
    metaDescription:
      "Direct-from-quarry Tennessee flagstone for Knoxville homeowners, landscapers, and contractors. No middleman markup — pick your pallets at the Graysville quarry or have them delivered.",
    driveTime: "about 1 hour",
    intro:
      "Knoxville is one of our most frequent delivery routes — close enough that a flatbed run is straightforward, far enough that most Knoxville buyers have never had the option to pick their own stone in person before working with us. We supply flagstone directly to homeowners building their own patios, and to landscape contractors running multiple Knoxville-area jobs who need pallet-to-pallet consistency.",
  },
  {
    slug: "pool-coping-maryville-tn",
    city: "Maryville",
    state: "TN",
    focusProductSlug: "flagstone",
    h1: "Pool Coping in Maryville, TN",
    metaTitle: "Natural Stone Pool Coping in Maryville, TN",
    metaDescription:
      "Slip-resistant Tennessee flagstone pool coping for Maryville, TN pool builds and remodels. Naturally cool underfoot, quarried and graded in-house.",
    driveTime: "about 1.5 hours",
    intro:
      "Pool coping has specific requirements most general landscaping stone doesn't need to meet — it has to stay cool enough to walk on barefoot in July and grip well even when wet. Our flagstone's natural cleft finish handles both, which is why it's become a regular pick for pool builders and remodelers working in the Maryville area.",
  },
  {
    slug: "stone-slabs-sevierville-tn",
    city: "Sevierville",
    state: "TN",
    focusProductSlug: "slabs",
    h1: "Stone Slabs Delivered to Sevierville, TN",
    metaTitle: "Large-Format Tennessee Stone Slabs in Sevierville, TN",
    metaDescription:
      "Large-format Tennessee stone slabs for fireplaces, benches, tables, and feature walls — delivered to Sevierville, TN and the greater Smokies area.",
    driveTime: "about 1.5–2 hours",
    intro:
      "Sevierville and the surrounding Smokies-area cabin and resort builds call for stone with real presence — fireplace hearths, statement walls, and outdoor furniture that hold their own against mountain views. We hand-select slabs for size and clean grain before they ever leave the quarry, so what you're choosing from has already been graded for exactly that kind of project.",
  },
];

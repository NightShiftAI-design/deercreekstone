import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/lib/site.config";
import { locationPages } from "@/lib/locations";
import { Reveal } from "@/components/site/reveal";
import { StrataDivider } from "@/components/site/strata-divider";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description: `Tennessee flagstone, slabs, treads, and wall stone delivered across the Southeast from our quarry in ${site.address.city}, TN.`,
  alternates: { canonical: `${site.url}/locations` },
};

export default function LocationsIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${site.url}/locations`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="bg-charcoal pb-16 pt-36 text-cream md:pt-44">
        <div className="container-quarry max-w-3xl">
          <p className="eyebrow text-terracotta">Areas We Serve</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">
            Tennessee stone, delivered across the Southeast.
          </h1>
          <p className="mt-5 max-w-xl text-cream/70">
            Quarried in {site.address.city}, TN. Pick up in person or have a
            full order delivered to your job site.
          </p>
        </div>
      </section>
      <StrataDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-quarry">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locationPages.map((location, i) => (
              <Reveal key={location.slug} delay={i * 0.05}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="group flex h-full flex-col justify-between border border-ink/10 bg-white/40 p-7 transition-colors hover:border-terracotta"
                >
                  <div>
                    <p className="eyebrow flex items-center gap-2 text-ink-soft">
                      <MapPin className="size-3.5 text-terracotta" />
                      {location.city}, {location.state}
                    </p>
                    <h2 className="mt-3 font-display text-xl font-medium text-charcoal">
                      {location.h1}
                    </h2>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-terracotta">
                    View details
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-sm text-ink-soft">
            Don't see your area listed?{" "}
            <Link
              href="/contact"
              className="font-semibold text-terracotta hover:underline"
            >
              Reach out
            </Link>{" "}
            — we deliver well beyond this list across the Southeast.
          </p>
        </div>
      </section>
    </>
  );
}

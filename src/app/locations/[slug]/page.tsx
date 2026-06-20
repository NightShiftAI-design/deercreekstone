import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { site, products } from "@/lib/site.config";
import { locationPages } from "@/lib/locations";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { StrataDivider } from "@/components/site/strata-divider";
import { FaqAccordion } from "@/components/site/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";

export function generateStaticParams() {
  return locationPages.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locationPages.find((l) => l.slug === slug);
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `${site.url}/locations/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locationPages.find((l) => l.slug === slug);
  if (!location) notFound();

  const product = products.find((p) => p.slug === location.focusProductSlug);
  if (!product) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${product.name} delivery`,
    provider: { "@type": "LocalBusiness", name: site.legalName, telephone: site.phone, url: site.url },
    areaServed: { "@type": "City", name: `${location.city}, ${location.state}` },
    description: location.metaDescription,
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: location.h1,
        item: `${site.url}/locations/${location.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src={product.heroImage}
            alt={`${product.name} — serving ${location.city}, ${location.state}`}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={product.heroBlurDataURL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </div>
        <div className="container-quarry relative z-10 pb-16 pt-40">
          <p className="eyebrow flex items-center gap-2 text-terracotta [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]">
            <MapPin className="size-3.5" />
            Serving {location.city}, {location.state}
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-cream [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] md:text-5xl">
            {location.h1}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-cream/80">
            Quarried in {site.address.city}, TN — {location.driveTime} from{" "}
            {location.city}.
          </p>
        </div>
      </section>
      <StrataDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-quarry grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-charcoal">
                {product.name} for {location.city}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {location.intro}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-12 font-display text-2xl font-medium text-charcoal">
                Best for
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="flex items-center gap-3 border border-ink/10 px-4 py-3 text-sm font-medium text-ink"
                  >
                    <Check className="size-4 shrink-0 text-olive" />
                    {app}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="mt-12 font-display text-2xl font-medium text-charcoal">
                Why {location.city} chooses Deer Creek Stone
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
                <li>
                  • {site.yearsInBusiness} years quarrying Tennessee stone —
                  formerly {site.formerName}, now {site.name}.
                </li>
                <li>
                  • Direct quarry pricing, no middleman markup — what you'd
                  pay at a landscape supply yard is typically a marked-up
                  resale of the same material.
                </li>
                <li>
                  • Pick your own pallets in person at the Graysville quarry,
                  or have a full order delivered to {location.city}.
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="mt-12 font-display text-2xl font-medium text-charcoal">
                Frequently asked questions
              </h2>
              <div className="mt-5">
                <FaqAccordion items={product.faqs} />
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-10 text-sm text-ink-soft">
                Looking for a different stone?{" "}
                <Link
                  href="/products"
                  className="font-semibold text-terracotta hover:underline"
                >
                  See all products
                </Link>{" "}
                or browse{" "}
                <Link
                  href="/locations"
                  className="font-semibold text-terracotta hover:underline"
                >
                  other areas we serve
                </Link>
                .
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="sticky top-28 border border-ink/10 bg-cream-warm p-7">
                <h3 className="eyebrow text-ink-soft">
                  Get {product.shortName} in {location.city}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Call, text, or request a quote and tell us what you're
                  building — we'll help you size the order.
                </p>
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <div className="mt-4 space-y-1 text-center text-xs text-ink-soft">
                  <p>
                    <a
                      href={site.phoneHref}
                      className="inline-flex items-center gap-1 font-semibold text-terracotta"
                    >
                      <Phone className="size-3" />
                      {site.phone}
                    </a>
                  </p>
                  <p>
                    <a href={site.phone2Href} className="text-ink-soft hover:text-terracotta">
                      {site.phone2}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

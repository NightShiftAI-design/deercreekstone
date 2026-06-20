import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { products, site } from "@/lib/site.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { StrataDivider } from "@/components/site/strata-divider";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Tennessee Natural Stone`,
    description: product.description,
    alternates: { canonical: `${site.url}/products/${product.slug}` },
    openGraph: {
      title: `${product.name} — ${site.name}`,
      description: product.description,
      images: [{ url: product.heroImage }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${site.url}${product.heroImage}`,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: { "@type": "LocalBusiness", name: site.legalName },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image
            src={product.heroImage}
            alt={`${product.name} hero — Deer Creek Stone`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/10" />
        </div>
        <div className="container-quarry relative z-10 pb-16 pt-40">
          <Link
            href="/products"
            className="eyebrow text-cream/60 hover:text-terracotta"
          >
            ← All Products
          </Link>
          <p className="eyebrow mt-6 text-terracotta">
            {product.priceIndicator} &middot; Quarried in Dayton, TN
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-cream/80">
            {product.tagline}
          </p>
        </div>
      </section>
      <StrataDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-quarry grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-charcoal">
                Overview
              </h2>
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
                Gallery
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {product.gallery.map((img, i) => (
                  <div key={img} className="aspect-square overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.shortName} — detail ${i + 1}`}
                      width={600}
                      height={600}
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="sticky top-28 border border-ink/10 bg-cream-warm p-7">
                <h3 className="eyebrow text-ink-soft">Specifications</h3>
                <dl className="mt-5 space-y-4">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="border-b border-ink/10 pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="eyebrow text-[10px] text-ink-soft">
                        {spec.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-base text-ink">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Button asChild className="mt-7 w-full">
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <p className="mt-4 text-center text-xs text-ink-soft">
                  Or call{" "}
                  <a href={site.phoneHref} className="font-semibold text-terracotta">
                    {site.phone}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

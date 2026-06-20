import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products, site } from "@/lib/site.config";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { StrataDivider } from "@/components/site/strata-divider";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Tennessee Flagstone, Slabs, Treads & Wall Stone",
  description: `Browse Deer Creek Stone's four core products: Tennessee flagstone, large-format slabs, precision-cut treads, and wall stone — all quarried in ${site.address.city}, TN and shipped nationwide.`,
  alternates: { canonical: `${site.url}/products` },
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal pb-20 pt-36 text-cream md:pb-28 md:pt-44">
        <div className="absolute inset-0">
          <Image
            src="/images/quarry/delivery-truck-2.jpg"
            alt="A flatbed truck loaded with Deer Creek Stone pallets at the quarry"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85" />
        </div>
        <div className="container-quarry relative z-10">
          <p className="eyebrow mb-5 text-terracotta">Our Stone</p>
          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Four forms.
            <br />
            <span className="italic">One Tennessee quarry.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            Every product below is cut from stone we quarry ourselves in{" "}
            {site.address.city}, TN, then ship nationwide. Pricing indicators
            give a relative sense of investment — request a quote for exact,
            project-specific pricing.
          </p>
        </div>
      </section>
      <StrataDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-quarry space-y-24">
          {products.map((product, i) => (
            <Reveal key={product.slug}>
              <div
                className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.heroImage}
                    alt={`${product.name} — Deer Creek Stone`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="eyebrow text-terracotta">
                    {product.priceIndicator} &middot; {product.shortName}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    {product.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink-soft"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6">
                    {product.specs.map((spec) => (
                      <div key={spec.label}>
                        <dt className="eyebrow text-[10px] text-ink-soft">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-ink">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Button asChild className="mt-8" variant="dark">
                    <Link href={`/products/${product.slug}`}>
                      Full Details &amp; Gallery
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-warm py-20">
        <div className="container-quarry text-center">
          <SectionHeading
            align="center"
            eyebrow="Not sure which stone fits?"
            title="Tell us about your project."
            description="Share your project details and we'll recommend the right stone, thickness, and quantity — plus a quote."
          />
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

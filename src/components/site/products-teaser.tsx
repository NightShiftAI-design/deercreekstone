import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site.config";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

export function ProductsTeaser() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-quarry">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we quarry"
              title="Three forms, one Tennessee stone."
              description="Every piece starts at our Dayton quarry and is cut to order — flagstone for organic, irregular coverage; slabs for bold statement pieces; treads for precision steps."
            />
            <Link
              href="/products"
              className="eyebrow hidden shrink-0 items-center gap-2 text-terracotta hover:text-terracotta-deep md:flex"
            >
              View all products
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.1}>
              <Link
                href={`/products/${product.slug}`}
                className="group block h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                    <Image
                      src={product.heroImage}
                      alt={`${product.name} — Deer Creek Stone`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="eyebrow text-sandstone">
                      {product.priceIndicator}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-medium text-cream">
                      {product.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {product.tagline}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link
          href="/products"
          className="eyebrow mt-10 flex items-center gap-2 text-terracotta md:hidden"
        >
          View all products
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

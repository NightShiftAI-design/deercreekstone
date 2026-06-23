import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site.config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { StrataDivider } from "@/components/site/strata-divider";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Our Story",
  description: `Deer Creek Stone is a family-owned natural stone quarry in ${site.address.city}, Tennessee — formerly Galvez Stone, with 20+ years of quarrying experience, shipping nationwide.`,
  alternates: { canonical: `${site.url}/about` },
};

const process = [
  {
    title: "Quarried",
    body: `Stone is identified and extracted from our ${site.address.city} property using methods that preserve the natural cleft and grain of each layer.`,
    image: "/images/quarry/extraction-1.jpg",
    alt: "Excavators extracting Tennessee sandstone at the Deer Creek Stone quarry",
  },
  {
    title: "Sorted & Graded",
    body: "Every piece is hand-graded for thickness, color, and structural integrity before it's set aside for flagstone, slab, tread, or wall stone use.",
    image: "/images/hero/quarry-yard.jpg",
    alt: "Graded stone pallets organized by type in the Deer Creek Stone yard",
  },
  {
    title: "Cut to Order",
    body: "Slabs and treads are cut to the dimensions your project calls for — no waiting on a distributor's pre-cut inventory.",
    image: "/images/quarry/cutting-process.jpg",
    alt: "Workers cutting stone to order at the Deer Creek Stone facility",
  },
  {
    title: "Delivered",
    body: "Pallets and slabs are loaded and shipped nationwide by flatbed freight, or picked up directly at the quarry.",
    image: "/images/quarry/delivery-truck.jpg",
    alt: "Flatbed truck loaded with Deer Creek Stone pallets for delivery",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal pb-20 pt-36 text-cream md:pb-28 md:pt-44">
              {/* Watermark logo — absolutely positioned in right half, desktop only */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-end justify-center pb-0 lg:flex" style={{paddingBottom: "0", paddingTop: "25%"}}>
          <Image
            src="/images/brand/logo-white.png"
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            className="size-72 opacity-10 xl:size-80"
          />
        </div>
        <div className="container-quarry relative z-10">
          <p className="eyebrow mb-5 text-terracotta">Our Story</p>
          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            {site.yearsInBusiness} years
            <br />
            <span className="italic">of Tennessee stone.</span>
          </h1>
        </div>
      </section>
      <StrataDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-quarry grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/team/facility.jpg"
                alt={`The Deer Creek Stone facility and yard in ${site.address.city}, Tennessee`}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-terracotta">
              Family-owned for {site.yearsInBusiness} years
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
              It started with one hillside in Graysville.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                For {site.yearsInBusiness} years, this quarry operated as{" "}
                {site.formerName}. In 2026 we rebranded to {site.name} — new
                name, new logo, same Graysville property, same family, same
                stone.{" "}
                <Link
                  href="/blog/formerly-galvez-stone"
                  className="font-semibold text-terracotta hover:underline"
                >
                  Read more about the change
                </Link>
                .
              </p>
              <p>
                What's grown over two decades is reach and range — what
                started as flagstone and treads now includes large-format
                slabs, wall stone, and material cut for fireplaces, benches,
                tables, and pool coping, shipped nationwide by flatbed
                freight in addition to local pickup and delivery across
                Southeast Tennessee.
              </p>
              <p>
                Today, we still walk the quarry by hand to grade stone before
                it ever reaches a job site — because the only way to
                guarantee quality is to control every step from the ground
                up.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <StrataDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-quarry grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow text-terracotta">The family behind it</p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-charcoal md:text-4xl">
              Still a family business, still on-site.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              The same family that's run this quarry for {site.yearsInBusiness}{" "}
              years is still out here day to day — grading stone, loading
              trucks, and showing the next generation the ropes.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/team/owners-family.jpg"
                alt={`The family behind Deer Creek Stone, formerly ${site.formerName}, at the ${site.address.city} quarry yard`}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-warm py-20 md:py-28">
        <div className="container-quarry">
          <Reveal>
            <SectionHeading
              eyebrow="From the ground up"
              title="How the stone gets to you."
              description="Four steps, all of them handled in-house — which is exactly why we can guarantee quality a distributor can't."
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="h-full bg-cream-warm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-7">
                    <span className="eyebrow text-terracotta">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-medium text-charcoal">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal py-20 text-cream md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/quarry/extraction-3.jpg"
            alt="The Deer Creek Stone quarry wall"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="container-quarry relative z-10 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-medium md:text-4xl">
              Come see the quarry for yourself.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-cream/70">
              Walk-throughs are welcome by appointment — see the stone before
              it's cut.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">
                Schedule a Visit
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

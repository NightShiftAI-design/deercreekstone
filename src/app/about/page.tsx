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
  description:
    "Deer Creek Stone is a family-owned natural stone quarry in Dayton, Tennessee — formerly Galvez Stone, with 20+ years of quarrying experience.",
  alternates: { canonical: `${site.url}/about` },
};

const process = [
  {
    title: "Quarried",
    body: "Stone is identified and extracted from our Dayton property using methods that preserve the natural cleft and grain of each layer.",
  },
  {
    title: "Sorted & Graded",
    body: "Every piece is hand-graded for thickness, color, and structural integrity before it's set aside for flagstone, slab, or tread use.",
  },
  {
    title: "Cut to Order",
    body: "Slabs and treads are cut to the dimensions your project calls for — no waiting on a distributor's pre-cut inventory.",
  },
  {
    title: "Delivered",
    body: "Pallets and slabs are loaded and delivered across Southeast Tennessee, or picked up directly at the quarry.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal pb-20 pt-36 text-cream md:pb-28 md:pt-44">
        <div className="container-quarry">
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
                alt="The Deer Creek Stone facility and yard in Dayton, Tennessee"
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
                tables, and pool coping, delivered well beyond Dayton into
                Chattanooga, Knoxville, and the greater Smokies area.
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
                <div className="h-full bg-cream-warm p-7">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-cream md:py-24">
        <div className="container-quarry text-center">
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

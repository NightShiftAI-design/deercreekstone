import Link from "next/link";
import { ArrowRight, Truck, Users, Gem } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

const points = [
  {
    icon: Gem,
    title: "Direct from our quarry",
    body: "No brokers, no distributors. Stone moves straight from our Dayton property to your job site.",
  },
  {
    icon: Users,
    title: "Family-owned, three generations",
    body: "We've worked this stone for decades and know every seam of our quarry by hand.",
  },
  {
    icon: Truck,
    title: "Serving the Southeast",
    body: "Dayton, Chattanooga, Knoxville, Cleveland, and Athens — with delivery available.",
  },
];

export function QuarryAdvantage() {
  return (
    <section className="bg-charcoal py-24 text-cream md:py-32">
      <div className="container-quarry grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
            <PlaceholderImage
              label="Quarry process — cutting or stacking stone, working hands"
              variant="warm"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-5 text-terracotta">The quarry advantage</p>
          <h2 className="font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
            We don&apos;t resell stone.
            <br />
            <span className="italic">We quarry it.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75 md:text-lg">
            Most suppliers buy from a distributor who bought from a quarry.
            We are the quarry — which means tighter quality control, better
            pricing, and the ability to cut custom orders most yards can&apos;t
            touch.
          </p>

          <div className="mt-10 space-y-7">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center border border-cream/15 text-terracotta">
                  <point.icon className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-cream">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-cream/65">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button asChild variant="outline" size="lg" className="mt-10">
            <Link href="/about">
              Our Story
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

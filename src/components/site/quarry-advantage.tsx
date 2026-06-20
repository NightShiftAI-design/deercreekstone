import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Users, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/site.config";

const points = [
  {
    icon: Gem,
    title: "Direct from our quarry",
    body: "No brokers, no distributors. Stone moves straight from our Graysville property to your job site.",
  },
  {
    icon: Users,
    title: `${site.yearsInBusiness} years quarrying Tennessee stone`,
    body: "We've worked this stone for decades and know every seam of our quarry by hand.",
  },
  {
    icon: Truck,
    title: "Delivered nationwide",
    body: "Local pickup and delivery across Southeast Tennessee, plus flatbed freight shipping anywhere in the continental US.",
  },
];

export function QuarryAdvantage() {
  return (
    <section className="bg-charcoal py-24 text-cream md:py-32">
      <div className="container-quarry grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
            <Image
              src="/images/quarry/extraction-2.jpg"
              alt="Excavator working an exposed Tennessee sandstone ledge at the Deer Creek Stone quarry"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
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

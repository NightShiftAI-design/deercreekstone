import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/brand-icons";
import { Button } from "@/components/ui/button";
import { InstagramEmbed } from "@/components/site/instagram-embed";
import { site } from "@/lib/site.config";
import { Reveal } from "@/components/site/reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-charcoal-deep py-24 text-cream md:py-28">
      <div className="container-quarry relative z-10 text-center">
        <Reveal>
          <p className="eyebrow mb-5 text-terracotta">Ready when you are</p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl">
            Visit the quarry, or request samples to your door.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
            See the stone before it's cut. We welcome walk-throughs by
            appointment, or we'll send material samples so you can hold the
            color and texture in your hand.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.phoneHref}>Call {site.phone}</a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-cream/50">
            Or reach our alternate line:{" "}
            <a href={site.phone2Href} className="hover:text-terracotta">
              {site.phone2}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function InstagramStrip() {
  return (
    <section className="bg-cream py-20">
      <div className="container-quarry">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <InstagramIcon className="size-5 text-terracotta" />
            <h2 className="font-display text-2xl font-medium text-charcoal">
              From the quarry floor
            </h2>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-terracotta hover:text-terracotta-deep"
          >
            Follow @deercreekstone
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.instagramPosts.map((permalink) => (
            <InstagramEmbed key={permalink} permalink={permalink} />
          ))}
        </div>
      </div>
    </section>
  );
}

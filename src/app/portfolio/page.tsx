import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site.config";
import { PortfolioGrid } from "@/components/site/portfolio-grid";
import { StrataDivider } from "@/components/site/strata-divider";

export const metadata: Metadata = {
  title: "Project Portfolio",
  description:
    "Browse completed patios, walkways, steps, fireplaces, pool decks, and stone veneer walls built with Deer Creek Stone Tennessee flagstone, slabs, and wall stone.",
  alternates: { canonical: `${site.url}/portfolio` },
};

export default function PortfolioPage() {
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
          <p className="eyebrow mb-5 text-terracotta">Portfolio</p>
          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Built with
            <br />
            <span className="italic">Deer Creek Stone.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            Filter by project type to see how our flagstone, slabs, treads,
            and wall stone come together on real job sites.
          </p>
        </div>
      </section>
      <StrataDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-quarry">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}

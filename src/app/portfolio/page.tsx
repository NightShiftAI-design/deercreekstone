import type { Metadata } from "next";
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
      <section className="bg-charcoal pb-20 pt-36 text-cream md:pb-28 md:pt-44">
        <div className="container-quarry">
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

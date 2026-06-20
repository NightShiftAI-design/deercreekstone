import { Hero } from "@/components/site/hero";
import { ProductsTeaser } from "@/components/site/products-teaser";
import { QuarryAdvantage } from "@/components/site/quarry-advantage";
import { ProjectsTeaser } from "@/components/site/projects-teaser";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBand, InstagramStrip } from "@/components/site/cta-band";
import { StrataDivider } from "@/components/site/strata-divider";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsTeaser />
      <StrataDivider />
      <QuarryAdvantage />
      <ProjectsTeaser />
      <Testimonials />
      <CtaBand />
      <InstagramStrip />
    </>
  );
}

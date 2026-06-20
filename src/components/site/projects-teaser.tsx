import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site.config";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

// Remaining generic /images/projects/project-N.jpg paths are still
// unfilled placeholders — fall back to PlaceholderImage for those
// until real completed-install photos are provided.
const isUnfilledPlaceholder = (path: string) =>
  /\/images\/projects\/project-\d\.jpg$/.test(path);

export function ProjectsTeaser() {
  const featured = projects.slice(0, 4);

  return (
    <section className="bg-cream-warm py-24 md:py-32">
      <div className="container-quarry">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Real projects, real stone"
              title="Built with Deer Creek Stone."
              description="A look at how homeowners and contractors across the Southeast are putting our flagstone, slabs, and treads to work."
            />
            <Link
              href="/portfolio"
              className="eyebrow hidden shrink-0 items-center gap-2 text-terracotta hover:text-terracotta-deep md:flex"
            >
              View full portfolio
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <div className="group relative aspect-[4/3] overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                  {isUnfilledPlaceholder(project.image) ? (
                    <PlaceholderImage label={project.title} />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="eyebrow text-sandstone">{project.category}</p>
                  <h3 className="mt-2 font-display text-xl font-medium text-cream">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="eyebrow mt-10 flex items-center gap-2 text-terracotta md:hidden"
        >
          View full portfolio
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

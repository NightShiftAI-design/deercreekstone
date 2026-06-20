"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/site.config";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/utils";

const categories: Array<Project["category"] | "All"> = [
  "All",
  "Patio",
  "Walkway",
  "Steps",
  "Fireplace",
  "Pool Deck",
  "Retaining Wall",
  "Wall Veneer",
];

// Remaining generic /images/projects/project-N.jpg paths are still
// unfilled placeholders — fall back to PlaceholderImage for those
// until real completed-install photos are provided.
const isUnfilledPlaceholder = (path: string) =>
  /\/images\/projects\/project-\d\.jpg$/.test(path);

export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={cn(
              "eyebrow border px-4 py-2.5 transition-colors",
              active === cat
                ? "border-terracotta bg-terracotta text-cream"
                : "border-ink/15 text-ink-soft hover:border-ink/40"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                {isUnfilledPlaceholder(project.image) ? (
                  <PlaceholderImage label={project.title} />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="eyebrow text-sandstone">{project.category}</p>
                <h3 className="mt-2 font-display text-xl font-medium text-cream">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-cream/65">
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-ink-soft">
          No projects in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}

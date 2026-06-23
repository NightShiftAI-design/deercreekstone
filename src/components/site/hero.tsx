"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/quarry-yard.jpg"
          alt="Stacked Tennessee stone pallets at the Deer Creek Stone quarry yard in Graysville, TN"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCykWqKmFvkT3EYrNk0e68xj9uJLHJODya22prdaz5my+VH/9k="
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
      </div>

      <div className="container-quarry relative z-10 pb-16 pt-28 md:pb-24 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/blog/formerly-galvez-stone"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-charcoal/40 px-4 py-1.5 backdrop-blur-sm transition-colors hover:border-terracotta/60"
          >
            <span className="text-xs font-semibold tracking-wide text-cream">
              Formerly Galvez Stone
            </span>
            <span className="text-xs text-cream/60">— same quarry, new name</span>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-6 flex items-center gap-2 text-cream [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]"
        >
          <MapPin className="size-3.5" />
          Quarried in Graysville, Tennessee
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-[2.75rem] font-medium leading-[1.04] tracking-tight text-cream [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] sm:text-6xl md:text-7xl"
        >
          Tennessee stone,
          <br />
          <span className="italic text-terracotta [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">quarried right.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg"
        >
          Family-owned and quarry-direct. We cut and supply premium Tennessee
          flagstone, slabs, and treads to homeowners, landscapers, and
          builders nationwide — no middleman, no markup.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/products">Explore Our Stone</Link>
          </Button>
        </motion.div>
      </div>

      {/* Signature strata bands along the hero's base */}
      <div className="absolute bottom-0 left-0 z-10 flex h-2 w-full" aria-hidden="true">
        <span className="flex-[3] bg-terracotta" />
        <span className="flex-[1] bg-sandstone-deep" />
        <span className="flex-[5] bg-olive" />
        <span className="flex-[2] bg-charcoal-deep" />
      </div>
    </section>
  );
}

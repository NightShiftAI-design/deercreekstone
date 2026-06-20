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
          alt="Stacked Tennessee flagstone and equipment at the Deer Creek Stone quarry yard in Dayton, TN"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/10" />
      </div>

      <div className="container-quarry relative z-10 pb-16 pt-40 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-6 flex items-center gap-2 text-sandstone"
        >
          <MapPin className="size-3.5" />
          Quarried in Dayton, Tennessee
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl font-display text-[2.75rem] font-medium leading-[1.04] tracking-tight text-cream sm:text-6xl md:text-7xl"
        >
          Tennessee stone,
          <br />
          <span className="italic text-terracotta">quarried right.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg"
        >
          Family-owned and quarry-direct. We cut and supply premium Tennessee
          flagstone, slabs, and treads to homeowners, landscapers, and
          builders across the Southeast — no middleman, no markup.
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

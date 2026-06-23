"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 w-full bg-charcoal"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* Announcement bar — only on homepage */}
      {pathname === "/" && (
        <div className="w-full bg-charcoal border-b border-cream/10">
          <div className="container-quarry flex items-center justify-center py-2">
            <Link
              href="/blog/formerly-galvez-stone"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-charcoal/60 px-4 py-1 transition-colors hover:border-terracotta/60"
            >
              <span className="text-xs font-semibold tracking-wide text-cream">
                Formerly Galvez Stone
              </span>
              <span className="text-xs text-cream/60">— same quarry, new name</span>
            </Link>
          </div>
        </div>
      )}

      {/* Main nav row */}
      <div className="container-quarry flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/brand/logo-white.png"
            alt="Deer Creek Stone"
            width={48}
            height={48}
            priority
            className="size-11 shrink-0 md:size-12"
          />
          <span className="hidden font-display text-lg font-semibold tracking-tight text-cream sm:inline">
            Deer Creek <span className="text-terracotta">Stone</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "eyebrow text-cream/80 transition-colors hover:text-terracotta",
                pathname === item.href && "text-terracotta"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex flex-col items-end leading-tight">
            <a
              href={site.phoneHref}
              className="text-sm font-semibold text-cream hover:text-terracotta transition-colors"
            >
              <Phone className="mr-1.5 inline size-3.5" strokeWidth={2} />
              {site.phone}
            </a>
            <a
              href={site.phone2Href}
              className="text-xs text-cream/65 hover:text-terracotta transition-colors"
            >
              {site.phone2}
            </a>
          </div>
          <Button asChild variant="primary" size="sm">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center justify-center text-cream lg:hidden"
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-cream/10 bg-charcoal lg:hidden"
          >
            <nav className="container-quarry flex flex-col gap-1 py-6">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-lg font-display text-cream border-b border-cream/10 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 pt-4 text-cream font-semibold"
              >
                <Phone className="size-4" />
                {site.phone}
              </a>
              <a
                href={site.phone2Href}
                className="flex items-center gap-2 pb-2 pl-6 text-sm text-cream/65"
              >
                {site.phone2}
              </a>
              <Button asChild variant="primary" className="mt-2 w-full">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/lib/site.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
        scrolled || open
          ? "bg-charcoal/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(245,240,230,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="container-quarry flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-cream"
        >
          Deer Creek <span className="text-terracotta">Stone</span>
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
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-cream hover:text-terracotta transition-colors"
          >
            <Phone className="size-4" strokeWidth={2} />
            {site.phone}
          </a>
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
                className="flex items-center gap-2 py-4 text-cream font-semibold"
              >
                <Phone className="size-4" />
                {site.phone}
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

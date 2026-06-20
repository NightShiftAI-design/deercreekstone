import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/brand-icons";
import { site } from "@/lib/site.config";
import { StrataDivider } from "@/components/site/strata-divider";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream">
      <StrataDivider />
      <div className="container-quarry py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight"
            >
              Deer Creek <span className="text-terracotta">Stone</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
              Family-owned natural stone quarry in Dayton, Tennessee. Direct
              quarry access to premium Tennessee flagstone, slabs, and treads
              — no middleman markup.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deer Creek Stone on Instagram"
                className="flex size-10 items-center justify-center border border-cream/20 text-cream/80 transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deer Creek Stone on Facebook"
                className="flex size-10 items-center justify-center border border-cream/20 text-cream/80 transition-colors hover:border-terracotta hover:text-terracotta"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-sandstone mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/70 transition-colors hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-sandstone mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-terracotta" />
                <a href={site.phoneHref} className="hover:text-terracotta">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-terracotta" />
                <a href={`mailto:${site.email}`} className="hover:text-terracotta">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-terracotta" />
                <span>
                  {site.address.city}, {site.address.state}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights
            reserved.
          </p>
          <p>Quarried &amp; built in Dayton, Tennessee.</p>
        </div>
      </div>
    </footer>
  );
}

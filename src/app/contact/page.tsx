import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site.config";
import { ContactForm } from "@/components/site/contact-form";
import { StrataDivider } from "@/components/site/strata-divider";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: `Request a quote, schedule a quarry visit, or order material samples from Deer Creek Stone in ${site.address.city}, Tennessee. We ship nationwide. Call ${site.phone}.`,
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal pb-20 pt-36 text-cream md:pb-28 md:pt-44">
        {/* Watermark logo — absolutely positioned in right half, desktop only */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center lg:flex">
          <Image
            src="/images/brand/logo-white.png"
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            className="h-[55%] w-auto opacity-10 max-h-72"
          />
        </div>
        <div className="container-quarry relative z-10">
          <p className="eyebrow mb-5 text-terracotta">Get in Touch</p>
          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Let's talk
            <br />
            <span className="italic">about your project.</span>
          </h1>
        </div>
      </section>
      <StrataDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-quarry grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="border border-ink/10 bg-cream-warm p-8 md:p-10">
                <h2 className="font-display text-2xl font-medium text-charcoal">
                  Request a Quote
                </h2>
                <p className="mt-2 text-sm text-ink-soft">
                  Tell us about your project and we'll follow up with
                  pricing and availability.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="eyebrow text-ink-soft">Direct Contact</h3>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 size-5 shrink-0 text-terracotta" />
                      <div>
                        <a
                          href={site.phoneHref}
                          className="font-display text-lg text-ink hover:text-terracotta"
                        >
                          {site.phone}
                        </a>
                        <p className="text-xs text-ink-soft">
                          Fastest way to reach us
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 size-5 shrink-0 text-terracotta" />
                      <div>
                        <a
                          href={site.phone2Href}
                          className="font-display text-lg text-ink hover:text-terracotta"
                        >
                          {site.phone2}
                        </a>
                        <p className="text-xs text-ink-soft">
                          Alternate line
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 size-5 shrink-0 text-terracotta" />
                      <a
                        href={`mailto:${site.email}`}
                        className="text-ink hover:text-terracotta"
                      >
                        {site.email}
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-5 shrink-0 text-terracotta" />
                      <span className="text-ink">
                        {site.address.street}
                        <br />
                        {site.address.city}, {site.address.state}{" "}
                        {site.address.zip}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="eyebrow flex items-center gap-2 text-ink-soft">
                    <Clock className="size-4" />
                    Hours
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {site.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex justify-between border-b border-ink/10 pb-2 text-sm"
                      >
                        <span className="text-ink-soft">{h.days}</span>
                        <span className="font-medium text-ink">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="eyebrow text-ink-soft">Service Areas</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {site.serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink-soft"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="aspect-[4/3] w-full border border-ink/10 bg-cream-warm">
                  <iframe
                    title="Deer Creek Stone location"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`
                    )}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

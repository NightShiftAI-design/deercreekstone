import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site.config";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";

export function Testimonials() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-quarry">
        <Reveal>
          <SectionHeading
            eyebrow="What clients say"
            title="Trusted by homeowners and builders alike."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <div className="flex h-full flex-col border border-ink/10 bg-white/40 p-8">
                <Quote className="size-7 text-terracotta" strokeWidth={1.5} />
                <p className="mt-5 flex-1 text-base leading-relaxed text-ink-soft italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-display text-base font-medium text-ink">
                    {t.author}
                  </p>
                  <p className="eyebrow mt-1 text-[10px] text-ink-soft">
                    {t.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

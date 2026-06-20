import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site.config";
import { getAllPostsMeta } from "@/lib/blog";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/site/reveal";
import { StrataDivider } from "@/components/site/strata-divider";

export const metadata: Metadata = {
  title: "Stone Guides & Project Inspiration",
  description:
    "Buying guides, project inspiration, and tips for working with Tennessee flagstone, slabs, and treads from Deer Creek Stone.",
  alternates: { canonical: `${site.url}/blog` },
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <section className="bg-charcoal pb-20 pt-36 text-cream md:pb-28 md:pt-44">
        <div className="container-quarry">
          <p className="eyebrow mb-5 text-terracotta">From the Quarry</p>
          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Guides &amp; project
            <br />
            <span className="italic">inspiration.</span>
          </h1>
        </div>
      </section>
      <StrataDivider />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-quarry">
          {posts.length === 0 ? (
            <p className="text-ink-soft">
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.07}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
                        <PlaceholderImage label={post.title} />
                      </div>
                    </div>
                    <p className="eyebrow mt-5 text-terracotta">
                      {post.category}
                    </p>
                    <h2 className="mt-2 font-display text-xl font-medium leading-snug text-charcoal group-hover:text-terracotta">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-ink-soft">
                      {formatDate(post.date)}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

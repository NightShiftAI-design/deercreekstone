import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/lib/site.config";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { StrataDivider } from "@/components/site/strata-divider";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
    image: `${site.url}${post.image}`,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="bg-charcoal pb-16 pt-36 text-cream md:pt-44">
        <div className="container-quarry max-w-3xl">
          <Link
            href="/blog"
            className="eyebrow text-cream/60 hover:text-terracotta"
          >
            ← All Guides
          </Link>
          <p className="eyebrow mt-6 text-terracotta">{post.category}</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-cream/60">
            {formatDate(post.date)} · {post.author}
          </p>
        </div>
      </section>
      <StrataDivider />

      <article className="bg-cream py-16 md:py-24">
        <div className="container-quarry max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.image}
              alt={`${post.title} — featured image`}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <div
            className="prose prose-lg mt-12 max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:text-charcoal prose-p:text-ink-soft prose-p:leading-relaxed prose-a:text-terracotta prose-a:no-underline hover:prose-a:underline prose-strong:text-ink"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>
    </>
  );
}

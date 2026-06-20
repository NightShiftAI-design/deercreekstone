import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/**
 * Blog content layer
 * ─────────────────────────────────────────────────────────
 * Posts live as markdown files in /content/blog/*.md with
 * frontmatter (title, excerpt, date, author, category, image).
 *
 * This is intentionally simple (filesystem + gray-matter) so
 * a non-technical editor can add a new post by dropping a
 * markdown file into /content/blog. To upgrade to a full CMS
 * later (Sanity, Contentful, etc.), replace the functions in
 * this file only — no page components need to change since
 * they all consume getAllPosts() / getPostBySlug().
 */

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
};

export type Post = PostMeta & { contentHtml: string };

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      author: data.author ?? "Deer Creek Stone",
      category: data.category ?? "General",
      image: data.image ?? "/images/blog/default.jpg",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    author: data.author ?? "Deer Creek Stone",
    category: data.category ?? "General",
    image: data.image ?? "/images/blog/default.jpg",
    contentHtml,
  };
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

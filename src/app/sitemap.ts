import type { MetadataRoute } from "next";
import { site, products, projects } from "@/lib/site.config";
import { getAllPostSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/portfolio",
    "/about",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes = products.map((p) => ({
    url: `${site.url}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getAllPostSlugs().map((slug) => ({
    url: `${site.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  void projects; // project detail routes can be added here if/when built out

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}

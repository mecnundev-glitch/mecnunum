import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { SERVICES_DATA } from "@/lib/services-data";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static routes
  const mainRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/work`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/process`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.95,
    },
  ];

  // Service landing pages
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(SERVICES_DATA).map(
    (slug) => ({
      url: `${siteConfig.url}/services/${slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // Case study detail pages
  const projectRoutes: MetadataRoute.Sitemap = Object.keys(CASE_STUDIES).map(
    (slug) => ({
      url: `${siteConfig.url}/work/${slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  // Blog article pages
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...mainRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}

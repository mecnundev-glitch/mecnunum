import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { SERVICES_LIST, SAMPLE_PROJECTS, SAMPLE_BLOG_POSTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Core static routes
  const mainRoutes = ["", "/work", "/services", "/about", "/process", "/contact", "/blog"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Service sub-routes
  const serviceRoutes = SERVICES_LIST.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Project dynamic routes
  const projectRoutes = SAMPLE_PROJECTS.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog dynamic routes
  const blogRoutes = SAMPLE_BLOG_POSTS.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...mainRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}

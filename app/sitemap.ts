import type { MetadataRoute } from "next";

const BASE = "https://www.phr-ny.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/",                        priority: 1.0,  changeFrequency: "weekly"  },
    { url: "/services-page",           priority: 0.9,  changeFrequency: "monthly" },
    { url: "/kitchen-remodeling",      priority: 0.9,  changeFrequency: "monthly" },
    { url: "/bathroom-remodeling",     priority: 0.9,  changeFrequency: "monthly" },
    { url: "/roofing",                 priority: 0.9,  changeFrequency: "monthly" },
    { url: "/siding-windows",          priority: 0.9,  changeFrequency: "monthly" },
    { url: "/masonry-concrete",        priority: 0.9,  changeFrequency: "monthly" },
    { url: "/basement-waterproofing",  priority: 0.9,  changeFrequency: "monthly" },
    { url: "/about-us",                priority: 0.7,  changeFrequency: "monthly" },
    { url: "/gallery",                 priority: 0.7,  changeFrequency: "monthly" },
    { url: "/faq",                     priority: 0.6,  changeFrequency: "monthly" },
    { url: "/blog",                    priority: 0.6,  changeFrequency: "weekly"  },
    { url: "/service-areas",           priority: 0.6,  changeFrequency: "monthly" },
    { url: "/contact-us",              priority: 0.8,  changeFrequency: "monthly" },
    { url: "/privacy-policy",          priority: 0.3,  changeFrequency: "yearly"  },
  ] as const;

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

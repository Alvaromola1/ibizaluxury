import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ibizaluxurydreams.com";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/gracias`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}

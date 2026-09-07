import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sanchez.ph";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://resume.sanchez.ph",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://solutions.sanchez.ph",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://blog.sanchez.ph",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://dpa-mastery.sanchez.ph",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ccard.sanchez.ph",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

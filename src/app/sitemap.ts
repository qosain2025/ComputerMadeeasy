import { MetadataRoute } from 'next';
import { allLessons } from '../data/lessons';
import { SITE_URL } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/glossary`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // 11 Topic Lessons
  const lessonPages: MetadataRoute.Sitemap = allLessons.map((lesson) => ({
    url: `${SITE_URL}/${lesson.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticPages, ...lessonPages];
}

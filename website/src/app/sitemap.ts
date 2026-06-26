import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://peakmotionsocks.com';
  const lastModified = new Date();

  const blogPosts = [
    'best-materials-for-sports-socks',
    'custom-sports-socks-manufacturer-guide',
    'cycling-socks-vs-running-socks',
    'football-socks-vs-grip-socks',
    'how-sports-socks-are-manufactured',
    'how-to-choose-running-socks',
    'how-to-start-a-custom-socks-brand',
    'what-are-grip-socks',
  ];

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified,
    priority: 0.64,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sports-socks`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      priority: 0.8,
    },
    ...blogUrls,
  ];
}

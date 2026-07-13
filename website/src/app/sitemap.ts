import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://peakmotionsocks.com';

  const blogPosts = [
    'best-materials-for-sports-socks',
    'custom-sports-socks-manufacturer-guide',
    'cycling-socks-vs-running-socks',
    'football-socks-vs-grip-socks',
    'how-sports-socks-are-manufactured',
    'how-to-choose-running-socks',
    'how-to-start-a-custom-socks-brand',
    'what-are-grip-socks',
    'private-label-socks-guide',
    'sports-socks-moq-guide',
  ];

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    priority: 0.64,
  }));

  const productPages = [
    'crew-soccer-grip',
    'mid-calf-football-grip',
    'professional-running-athletic-socks',
    'custom-logo-embroidery-socks',
    'low-cut-yoga-pilates-grip-socks',
    'performance-basketball-socks',
    'open-top-pilates-studio-socks',
    'luxury-combed-cotton-casual-socks',
    'soccer-sports-socks',
    'jacquard-custom-socks',
  ];

  const productUrls = productPages.map((product) => ({
    url: `${baseUrl}/products/${product}`,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sports-socks`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.8,
    },
    ...productUrls,
    ...blogUrls,
  ];
}

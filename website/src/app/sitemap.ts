import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://peakmotionsocks.com';
  const publishedAt = new Date('2026-07-17T00:00:00.000Z');
  const blogIndexUpdatedAt = new Date('2026-07-29T00:00:00.000Z');
  const productStructuredDataUpdatedAt = new Date('2026-07-24T00:00:00.000Z');
  const jacquardPageUpdatedAt = new Date('2026-07-24T00:00:00.000Z');
  const relatedArticleUpdatedAt = new Date('2026-07-21T00:00:00.000Z');
  const seoConsolidationUpdatedAt = new Date('2026-07-24T00:00:00.000Z');
  const moqGuideUpdatedAt = new Date('2026-07-27T00:00:00.000Z');
  const customSocksMoqArticleUpdatedAt = new Date('2026-07-29T00:00:00.000Z');
  const ukFootballCaseStudyUpdatedAt = new Date('2026-08-04T00:00:00.000Z');

  const blogPosts = [
    'best-materials-for-sports-socks',
    'custom-sports-socks-manufacturer-guide',
    'custom-socks-moq-explained',
    'custom-running-socks-oem-guide',
    'cycling-socks-vs-running-socks',
    'football-socks-vs-grip-socks',
    'how-sports-socks-are-manufactured',
    'how-to-choose-running-socks',
    'how-to-start-a-custom-socks-brand',
    'how-much-do-custom-grip-socks-cost',
    'what-are-grip-socks',
    'private-label-socks-guide',
    'private-label-running-socks-brand-guide',
    'sports-socks-moq-guide',
  ];

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: post === 'custom-socks-moq-explained'
      ? customSocksMoqArticleUpdatedAt
      : ['custom-running-socks-oem-guide', 'private-label-running-socks-brand-guide', 'how-much-do-custom-grip-socks-cost'].includes(post)
      ? relatedArticleUpdatedAt
      : publishedAt,
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
    lastModified: product === 'jacquard-custom-socks' ? jacquardPageUpdatedAt : productStructuredDataUpdatedAt,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: seoConsolidationUpdatedAt,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: seoConsolidationUpdatedAt,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sports-socks-moq-guide`,
      lastModified: moqGuideUpdatedAt,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/custom-grip-socks`,
      lastModified: publishedAt,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/football-socks-manufacturer`,
      lastModified: publishedAt,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/private-label-sports-socks`,
      lastModified: relatedArticleUpdatedAt,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies/uk-football-brand-growth`,
      lastModified: ukFootballCaseStudyUpdatedAt,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/yoga-pilates-grip-socks-supplier`,
      lastModified: seoConsolidationUpdatedAt,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/custom-basketball-training-socks`,
      lastModified: relatedArticleUpdatedAt,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/custom-running-socks-manufacturer`,
      lastModified: publishedAt,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogIndexUpdatedAt,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: publishedAt,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: publishedAt,
      priority: 0.3,
    },
    ...productUrls,
    ...blogUrls,
  ];
}


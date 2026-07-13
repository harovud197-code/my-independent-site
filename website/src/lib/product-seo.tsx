import type { Metadata } from 'next';

const siteUrl = 'https://peakmotionsocks.com';

export type ProductSeoConfig = {
  slug: string;
  name: string;
  description: string;
  image: string;
  category: string;
  moq: string;
};

export const productSeo: Record<string, ProductSeoConfig> = {
  'crew-soccer-grip': {
    slug: 'crew-soccer-grip',
    name: 'Crew Soccer Grip Sports Socks',
    description: 'Custom crew soccer grip socks with silicone anti-slip soles, breathable construction and OEM branding for teams and sports brands.',
    image: '/assets/images/training/hero.png',
    category: 'Grip Socks',
    moq: '50 pairs',
  },
  'mid-calf-football-grip': {
    slug: 'mid-calf-football-grip',
    name: 'Professional Color Soccer Grip Sports Socks',
    description: 'Professional soccer grip socks with silicone anti-slip technology, breathable construction and custom OEM solutions.',
    image: '/assets/products/mid-calf-football-grip/hero.png',
    category: 'Football Grip Socks',
    moq: '50 pairs',
  },
  'professional-running-athletic-socks': {
    slug: 'professional-running-athletic-socks',
    name: 'Professional Running Athletic Socks',
    description: 'Breathable performance running socks with support zones, durable construction and OEM private label customization.',
    image: '/assets/products/professional-running-athletic-socks/hero.png',
    category: 'Running Socks',
    moq: '50 pairs',
  },
  'custom-logo-embroidery-socks': {
    slug: 'custom-logo-embroidery-socks',
    name: 'Custom Logo Embroidery Socks',
    description: 'Custom logo embroidery socks with private label colors, sizing and retail packaging for growing brands.',
    image: '/assets/products/custom-logo-embroidery-socks/hero.png',
    category: 'Private Label Socks',
    moq: '50 pairs',
  },
  'low-cut-yoga-pilates-grip-socks': {
    slug: 'low-cut-yoga-pilates-grip-socks',
    name: 'Low Cut Yoga Pilates Grip Socks',
    description: 'Low cut Pilates and yoga grip socks with full-bottom silicone traction and flexible OEM customization.',
    image: '/assets/products/low-cut-yoga-pilates-grip-socks/hero.png',
    category: 'Pilates Grip Socks',
    moq: '50 pairs',
  },
  'performance-basketball-socks': {
    slug: 'performance-basketball-socks',
    name: 'Performance Basketball Socks',
    description: 'Performance basketball socks with secure ankle support, cushioning and custom OEM branding for teams and sports labels.',
    image: '/assets/products/performance-basketball-socks-web/hero.jpg',
    category: 'Basketball Socks',
    moq: '50 pairs per design and color',
  },
  'open-top-pilates-studio-socks': {
    slug: 'open-top-pilates-studio-socks',
    name: 'Open Top Pilates Studio Socks',
    description: 'Breathable open-top Pilates socks with non-toxic silicone grips and OEM customization for studio and wellness brands.',
    image: '/assets/products/open-top-pilates-studio-socks-web/hero.jpg',
    category: 'Pilates Studio Socks',
    moq: '50 pairs',
  },
  'luxury-combed-cotton-casual-socks': {
    slug: 'luxury-combed-cotton-casual-socks',
    name: 'Luxury Combed Cotton Casual Socks',
    description: 'Premium combed cotton casual socks with reinforced heel and toe, soft handfeel and private label customization.',
    image: '/assets/products/luxury-combed-cotton-casual-socks/hero.jpg',
    category: 'Casual Crew Socks',
    moq: '100 pairs',
  },
  'soccer-sports-socks': {
    slug: 'soccer-sports-socks',
    name: 'Soccer Sports Socks',
    description: 'Professional soccer socks with zoned cushioning, dynamic arch support and custom team or private label options.',
    image: '/assets/products/soccer-sports-socks/hero.jpg',
    category: 'Soccer Socks',
    moq: '50 pairs',
  },
  'jacquard-custom-socks': {
    slug: 'jacquard-custom-socks',
    name: 'Jacquard Custom Socks',
    description: 'Custom jacquard crew socks with detailed knitted artwork, flexible colors and OEM support for private label collections.',
    image: '/assets/products/jacquard-custom-socks/hero.jpg',
    category: 'Jacquard Socks',
    moq: '50 pairs',
  },
};

export function createProductMetadata(product: ProductSeoConfig): Metadata {
  const url = `${siteUrl}/products/${product.slug}`;
  return {
    title: `${product.name} | Custom OEM Manufacturer`,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${product.name} | PeakMotion Socks`,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | PeakMotion Socks`,
      description: product.description,
      images: [product.image],
    },
  };
}

export function ProductStructuredData({ product }: { product: ProductSeoConfig }) {
  const url = `${siteUrl}/products/${product.slug}`;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${url}#product`,
        name: product.name,
        url,
        image: `${siteUrl}${product.image}`,
        description: product.description,
        category: product.category,
        sku: product.slug,
        brand: { '@type': 'Brand', name: 'PeakMotion Socks' },
        manufacturer: { '@id': `${siteUrl}/#organization` },
        audience: { '@type': 'BusinessAudience', audienceType: 'Sports brands, teams, retailers and distributors' },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'Minimum order quantity', value: product.moq },
          { '@type': 'PropertyValue', name: 'Customization', value: 'OEM and private label available' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteUrl}/products` },
          { '@type': 'ListItem', position: 3, name: product.name, item: url },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

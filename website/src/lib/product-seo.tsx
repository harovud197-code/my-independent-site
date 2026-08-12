import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';

export type ProductSeoConfig = {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  image: string;
  category: string;
  specification: string;
  material: string;
  moq: string;
  sampleTime: string;
  leadTime: string;
  sizeRange: string;
};

export const productSeo: Record<string, ProductSeoConfig> = {
  'crew-soccer-grip': {
    slug: 'crew-soccer-grip',
    name: 'Crew Soccer Grip Sports Socks',
    seoTitle: 'Crew Soccer Grip Socks Manufacturer | PeakMotion',
    description: 'Custom crew soccer grip socks with silicone anti-slip soles, breathable construction and OEM branding for teams and sports brands.',
    image: '/assets/images/training/hero.png',
    category: 'Grip Socks',
    specification: 'Crew grip sock with silicone sole',
    material: 'Cotton / nylon / spandex blend',
    moq: 'Typically from 100 pairs',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
  'mid-calf-football-grip': {
    slug: 'mid-calf-football-grip',
    name: 'Professional Color Soccer Grip Sports Socks',
    seoTitle: 'Soccer Grip Socks Manufacturer | PeakMotion',
    description: 'Professional soccer grip socks with silicone anti-slip technology, breathable construction and custom OEM solutions.',
    image: '/assets/products/mid-calf-football-grip/hero.png',
    category: 'Football Grip Socks',
    specification: 'Mid-calf football grip sock',
    material: '80% cotton / 15% nylon / 5% spandex',
    moq: 'Typically from 100 pairs',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
  'professional-running-athletic-socks': {
    slug: 'professional-running-athletic-socks',
    name: 'Professional Running Athletic Socks',
    seoTitle: 'Custom Running Athletic Socks Manufacturer | PeakMotion',
    description: 'Breathable performance running socks with support zones, durable construction and OEM private label customization.',
    image: '/assets/products/professional-running-athletic-socks/hero.png',
    category: 'Running Socks',
    specification: 'Knee-high compression running sock',
    material: 'Polyester / nylon / spandex blend',
    moq: 'Typically from 100 pairs',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
  'custom-logo-embroidery-socks': {
    slug: 'custom-logo-embroidery-socks',
    name: 'Custom Logo Embroidery Socks',
    seoTitle: 'Custom Logo Embroidery Socks Manufacturer | PeakMotion',
    description: 'Custom logo embroidery socks with private label colors, sizing and retail packaging for growing brands.',
    image: '/assets/products/custom-logo-embroidery-socks/hero.png',
    category: 'Private Label Socks',
    specification: 'Custom logo crew sock',
    material: 'Cotton / polyester / nylon / spandex',
    moq: 'Typically from 100 pairs',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
  'low-cut-yoga-pilates-grip-socks': {
    slug: 'low-cut-yoga-pilates-grip-socks',
    name: 'Low Cut Yoga Pilates Grip Socks',
    seoTitle: 'Low Cut Yoga Pilates Grip Socks OEM | PeakMotion',
    description: 'Low cut Pilates and yoga grip socks with full-bottom silicone traction and flexible OEM customization.',
    image: '/assets/products/low-cut-yoga-pilates-grip-socks/hero.png',
    category: 'Pilates Grip Socks',
    specification: 'Low-cut studio grip sock',
    material: 'Cotton / polyester / nylon / spandex',
    moq: 'Typically from 100 pairs',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
  'performance-basketball-socks': {
    slug: 'performance-basketball-socks',
    name: 'Performance Basketball Socks',
    seoTitle: 'Custom Basketball Socks Manufacturer | PeakMotion',
    description: 'Performance basketball socks with secure ankle support, cushioning and custom OEM branding for teams and sports labels.',
    image: '/assets/products/performance-basketball-socks-web/hero.jpg',
    category: 'Basketball Socks',
    specification: 'Crew basketball grip sock',
    material: 'Polyester / cotton / spandex blend',
    moq: 'Typically from 100 pairs per design and color',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
  'open-top-pilates-studio-socks': {
    slug: 'open-top-pilates-studio-socks',
    name: 'Open Top Pilates Studio Socks',
    seoTitle: 'Open Top Pilates Socks Manufacturer | PeakMotion',
    description: 'Breathable open-top Pilates socks with non-toxic silicone grips and OEM customization for studio and wellness brands.',
    image: '/assets/products/open-top-pilates-studio-socks-web/hero.jpg',
    category: 'Pilates Studio Socks',
    specification: 'Open-top studio grip sock',
    material: 'Cotton / polyester / nylon / spandex',
    moq: 'Typically from 100 pairs',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
  'luxury-combed-cotton-casual-socks': {
    slug: 'luxury-combed-cotton-casual-socks',
    name: 'Luxury Combed Cotton Casual Socks',
    seoTitle: 'Luxury Combed Cotton Socks Manufacturer | PeakMotion',
    description: 'Premium combed cotton casual socks with reinforced heel and toe, soft handfeel and private label customization.',
    image: '/assets/products/luxury-combed-cotton-casual-socks/hero.jpg',
    category: 'Casual Crew Socks',
    specification: 'Classic casual crew sock',
    material: 'Combed cotton / polyester / spandex',
    moq: 'Typically from 100 pairs',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
  'soccer-sports-socks': {
    slug: 'soccer-sports-socks',
    name: 'Soccer Sports Socks',
    seoTitle: 'Custom Soccer Socks Manufacturer | PeakMotion',
    description: 'Professional soccer socks with zoned cushioning, dynamic arch support and custom team or private label options.',
    image: '/assets/products/soccer-sports-socks/hero.jpg',
    category: 'Soccer Socks',
    specification: 'Performance soccer crew sock',
    material: 'Cotton / polyester / nylon / spandex',
    moq: 'Typically from 100 pairs',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
  'jacquard-custom-socks': {
    slug: 'jacquard-custom-socks',
    name: 'Jacquard Custom Socks',
    seoTitle: 'Custom Jacquard Socks Manufacturer | PeakMotion',
    description: 'Custom jacquard crew socks with detailed knitted artwork, flexible colors and OEM support for private label collections.',
    image: '/assets/products/jacquard-custom-socks/hero.jpg',
    category: 'Jacquard Socks',
    specification: 'Jacquard casual crew sock',
    material: 'Combed cotton / polyester / spandex',
    moq: 'Typically from 100 pairs',
    sampleTime: 'About 7 days',
    leadTime: '25-30 days after approval',
    sizeRange: 'Kids to XL',
  },
};

export function createProductMetadata(product: ProductSeoConfig): Metadata {
  const url = `${siteUrl}/products/${product.slug}`;
  return {
    title: product.seoTitle,
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

export function ProductBreadcrumbStructuredData({ product }: { product: ProductSeoConfig }) {
  const url = `${siteUrl}/products/${product.slug}`;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteUrl}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: url },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function ProductQuickFacts({ product }: { product: ProductSeoConfig }) {
  const facts = [
    ['Specification', product.specification],
    ['MOQ', product.moq],
    ['Sample', product.sampleTime],
    ['Lead Time', product.leadTime],
    ['Size', product.sizeRange],
    ['Material', product.material],
  ] as const;

  return (
    <dl
      aria-label={`${product.name} ordering specifications`}
      className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-3"
    >
      {facts.map(([label, value]) => (
        <div key={label} className="border-b border-r border-slate-200 p-4 last:border-b-0 sm:[&:nth-last-child(-n+3)]:border-b-0">
          <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</dt>
          <dd className="mt-1 text-sm font-black leading-snug text-[#0c1713]">{value}</dd>
        </div>
      ))}
      <div className="col-span-2 border-r border-slate-200 bg-[#f4fbe8] p-4 sm:col-span-3">
        <dt className="text-xs font-bold uppercase tracking-wider text-[#4d7e1e]">Ordering help</dt>
        <dd className="mt-1 text-sm font-black leading-snug text-[#0c1713]">
          <Link href="/sports-socks-moq-guide" className="underline decoration-[#87a829] decoration-2 underline-offset-4 transition-colors hover:text-[#4d7e1e]">
            Read the Sports Socks MOQ Guide
          </Link>
        </dd>
      </div>
    </dl>
  );
}

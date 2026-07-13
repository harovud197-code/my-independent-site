import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Sports Socks Products | OEM & Private Label',
  description: 'Explore custom grip socks, football socks, running socks, Pilates socks and private label collections with flexible MOQ and factory-direct OEM support.',
  alternates: { canonical: 'https://peakmotionsocks.com/products' },
  openGraph: {
    type: 'website',
    url: 'https://peakmotionsocks.com/products',
    title: 'Custom Sports Socks Products | PeakMotion Socks',
    description: 'Custom sports socks for brands, teams, retailers and distributors with OEM and private label support.',
    images: [{ url: '/assets/images/hero-showcase-green.png', alt: 'PeakMotion custom sports socks collection' }],
  },
};

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

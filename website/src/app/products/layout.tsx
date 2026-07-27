import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Sports Socks Product Catalog | OEM Styles | PeakMotion',
  description:
    'Browse PeakMotion custom sports sock products, including grip, football, running, Pilates, basketball and private-label styles with OEM customization options.',
  alternates: {
    canonical: 'https://peakmotionsocks.com/products',
  },
  openGraph: {
    title: 'Custom Sports Socks Product Catalog | PeakMotion',
    description:
      'Browse custom grip, football, running, Pilates, basketball and private-label sock styles for brands, clubs, studios and retailers.',
    url: 'https://peakmotionsocks.com/products',
    siteName: 'PeakMotion Socks',
    type: 'website',
  },
};

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}

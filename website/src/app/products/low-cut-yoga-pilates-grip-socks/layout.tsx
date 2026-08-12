import { createProductMetadata, productSeo, ProductBreadcrumbStructuredData } from '@/lib/product-seo';

const product = productSeo['low-cut-yoga-pilates-grip-socks'];
export const metadata = createProductMetadata(product);

export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><ProductBreadcrumbStructuredData product={product} />{children}</>;
}

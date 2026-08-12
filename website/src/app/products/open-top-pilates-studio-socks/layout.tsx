import { createProductMetadata, productSeo, ProductBreadcrumbStructuredData } from '@/lib/product-seo';

const product = productSeo['open-top-pilates-studio-socks'];
export const metadata = createProductMetadata(product);

export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><ProductBreadcrumbStructuredData product={product} />{children}</>;
}

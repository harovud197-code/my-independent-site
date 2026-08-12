import { createProductMetadata, productSeo, ProductBreadcrumbStructuredData } from '@/lib/product-seo';

const product = productSeo['jacquard-custom-socks'];
export const metadata = createProductMetadata(product);

export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><ProductBreadcrumbStructuredData product={product} />{children}</>;
}

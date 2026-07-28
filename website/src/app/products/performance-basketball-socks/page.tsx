import { ProductQuickFacts, productSeo } from '@/lib/product-seo';
import ProductPageEnhancements from '@/components/ProductPageEnhancements';
import ProductQuoteForm from '@/components/ProductQuoteForm';
import Image from 'next/image';

const assetPath = '/assets/products/performance-basketball-socks-web';
const message = encodeURIComponent('Hello PeakMotion Socks, I am interested in your Performance Basketball Socks.');
const product = productSeo['performance-basketball-socks'];

export default function PerformanceBasketballSocksPage() {
  const specifications = [
    ['Material', 'Polyester / Cotton / Spandex Blend'],
    ['Length', 'Crew'],
    ['Application', 'Basketball / Training / Sports'],
    ['Grip', 'Silicone Anti-Slip Dots'],
    ['Logo', 'Knitted / Jacquard / Custom'],
    ['Colors', 'Custom Colors Available'],
    ['MOQ', '50 Pairs / Design / Color'],
    ['Packing', 'Custom Packaging'],
  ];
  const useCases = [
    ['Basketball teams and clubs', 'Develop coordinated crew socks with support, cushioning and consistent colors for team kits and training.'],
    ['Academies and tournaments', 'Plan practical sizing and packing for youth programs, events and multi-team issue requirements.'],
    ['Training and sports brands', 'Build a branded performance range for court training, gym programs and sports retail collections.'],
  ] as Array<[string, string]>;
  const faqs = [
    ['What is the MOQ for custom basketball socks?', 'Selected standard styles can start from 50 pairs per design and color. Final MOQ depends on logo artwork, yarn, size range, grip option and packaging.'],
    ['Can we add grip dots to basketball socks?', 'Yes. Silicone grip dots can be planned for selected training and court-use requirements. Tell us how the sock will be used so we can recommend the right coverage.'],
    ['Can you produce club colors and knitted logos?', 'Yes. Share Pantone references or artwork and we can review the practical jacquard layout, color count and placement before sampling.'],
    ['What information helps you quote accurately?', 'Please send the product style, logo, colors, size range, estimated quantity, packaging and target delivery. We will then recommend the right production route.'],
  ] as Array<[string, string]>;

  return (
    <main className="bg-white text-[#0c1713]">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="rounded-[28px] bg-[#f7f8f6] p-5 md:p-10"><Image src={`${assetPath}/hero.jpg`} alt="Professional basketball grip sports socks" width={1448} height={1086} priority sizes="(max-width: 1024px) 100vw, 52vw" className="h-auto w-full object-contain" /></div>
        <div className="max-w-xl space-y-6">
          <span className="inline-flex rounded-full bg-[#e9f8d2] px-4 py-2 text-xs font-black tracking-[0.16em] text-[#387116]">BEST SELLER</span>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">Performance Basketball Socks</h1>
          <p className="text-lg leading-relaxed text-slate-600">High-performance basketball grip socks with breathable knit construction, anti-slip grip dots, cushioned support and complete OEM customization for your brand.</p>
          <ProductQuickFacts product={product} />
          <a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#39a91f] px-7 py-4 font-black uppercase tracking-wide !text-white transition-all hover:-translate-y-0.5 hover:bg-[#2f8b19] hover:shadow-lg">Chat on WhatsApp</a>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#fbfcfa] py-12"><div className="mx-auto max-w-[1200px] space-y-8 px-5 md:px-8"><Image src={`${assetPath}/features.jpg`} alt="Basketball grip sock features" width={1672} height={941} sizes="(max-width: 1200px) 100vw, 1200px" className="h-auto w-full" /><Image src={`${assetPath}/product-features.jpg`} alt="Basketball sock structure and features" width={1448} height={1086} sizes="(max-width: 1200px) 100vw, 1200px" className="h-auto w-full" /></div></section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-20 md:px-8 lg:grid-cols-2"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Product Details</p><h2 className="text-3xl font-black md:text-4xl">Specifications</h2><dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200">{specifications.map(([label, value]) => <div key={label} className="grid grid-cols-[110px_1fr] gap-4 border-b border-slate-200 px-5 py-4 last:border-b-0"><dt className="font-bold">{label}</dt><dd className="text-slate-600">{value}</dd></div>)}</dl></div><div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">OEM Service</p><h2 className="text-3xl font-black md:text-4xl">Built for your team or brand</h2><Image src={`${assetPath}/oem.jpg`} alt="OEM basketball sock customization" width={1672} height={941} sizes="(max-width: 1024px) 100vw, 50vw" className="mt-8 h-auto w-full rounded-2xl" /></div></section>

      <section className="bg-[#f7f8f6] py-20"><div className="mx-auto max-w-[1200px] space-y-14 px-5 md:px-8"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Custom Options</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Colors, applications and factory support</h2></div>{['colors.jpg', 'applications.jpg', 'factory.jpg', 'certifications.jpg'].map((image) => <Image key={image} src={`${assetPath}/${image}`} alt="Basketball sock product information" width={1672} height={941} sizes="(max-width: 1200px) 100vw, 1200px" className="h-auto w-full rounded-2xl bg-white" />)}</div></section>

      <ProductPageEnhancements useCases={useCases} faqs={faqs} relatedLinks={[
        ['/custom-basketball-training-socks', 'Custom basketball training socks', 'Explore basketball and training-sock manufacturing support.'],
        ['/products/soccer-sports-socks', 'Soccer sports socks', 'Compare another team-performance sock construction.'],
        ['/sports-socks-moq-guide', 'Sports socks MOQ guide', 'Understand why design, colors and packing affect the starting quantity.'],
      ]} />

      <section className="relative overflow-hidden bg-[#07120c] px-5 py-20 md:px-8 md:py-28"><div className="absolute inset-0"><Image src={`${assetPath}/cta.jpg`} alt="Custom basketball socks" fill sizes="100vw" className="object-cover opacity-35" /><div className="absolute inset-0 bg-[#07120c]/85" /></div><div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div className="max-w-2xl space-y-7 text-white"><p className="text-sm font-black uppercase tracking-[0.15em] text-[#b4ff2b]">Start your order</p><h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">Build a court-ready sock range</h2><p className="text-xl font-medium leading-relaxed text-gray-200">Share your logo, colorway, support needs and quantity. We will recommend a practical custom route.</p><a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 font-black uppercase tracking-wide !text-white transition-colors hover:bg-white hover:!text-[#0c1713]">Chat on WhatsApp</a></div><ProductQuoteForm productName="Performance Basketball Socks" productSlug="performance_basketball_socks" productOptions={['Crew basketball team socks', 'Basketball grip training socks', 'Youth academy size program', 'Private-label basketball collection']} /></div></section>
    </main>
  );
}


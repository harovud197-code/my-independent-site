import { ProductShipmentSection } from '@/components/FactoryShipmentGallery';
import Link from 'next/link';
import { ProductQuickFacts, productSeo } from '@/lib/product-seo';
import ProductPageEnhancements from '@/components/ProductPageEnhancements';
import ProductQuoteForm from '@/components/ProductQuoteForm';
import Image from 'next/image';

const assetPath = '/assets/products/low-cut-yoga-pilates-grip-socks';
const message = encodeURIComponent('Hello PeakMotion Socks, I am interested in your Low Cut Yoga Pilates Grip Socks.');
const product = productSeo['low-cut-yoga-pilates-grip-socks'];

export default function LowCutYogaPilatesGripSocksPage() {
  const specifications = [
    ['Material', 'Cotton / Polyester / Nylon / Spandex'],
    ['Type', 'Pilates Grip Socks'],
    ['Grip', 'Silicone Non-slip Dots'],
    ['Logo', 'Print / Jacquard / Embroidery'],
    ['MOQ', 'Typically From 100 Pairs'],
    ['Packing', 'Custom Packaging'],
  ];
  const useCases = [
    ['Pilates and reformer studios', 'Provide hygienic, secure traction for controlled movement on reformers and studio floors.'],
    ['Yoga and wellness brands', 'Create a branded studio essential with color-led collections, grip layouts and retail-ready packaging.'],
    ['Barre and fitness concepts', 'Build a low-cut performance accessory for barre, dance fitness and wellness programs.'],
  ] as Array<[string, string]>;
  const faqs = [
    ['What is the MOQ for low-cut Pilates grip socks?', 'Custom logo and studio grip programs typically start from 100 pairs. Selected standard styles can start from 50 pairs; bespoke specifications require a higher MOQ.'],
    ['Can I customize the silicone grip pattern?', 'Yes. We can discuss full-sole, heel-and-toe or logo-led grip coverage based on the intended studio activity and your branding needs.'],
    ['Are these socks suitable for studio retail?', 'Yes. We can plan sizes, colorways, hangtags, labels and packaging for studio merchandise, retail buyers or distributor programs.'],
    ['What should I prepare for a sample?', 'Share a logo file, preferred colors, size range, grip concept, packaging requirements and estimated quantity. We will recommend the most practical sample route.'],
  ] as Array<[string, string]>;

  return (
    <main className="bg-white text-[#0c1713]">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="rounded-[28px] bg-[#f7f8f6] p-5 md:p-10"><Image src={`${assetPath}/hero.png`} alt="Low cut yoga Pilates grip socks" width={1448} height={1086} priority sizes="(max-width: 1024px) 100vw, 52vw" className="h-auto w-full object-contain" /></div>
        <div className="max-w-xl space-y-6">
          <span className="inline-flex rounded-full bg-[#e9f8d2] px-4 py-2 text-xs font-black tracking-[0.16em] text-[#387116]">BEST SELLER</span>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">Low Cut Yoga Pilates Grip Socks</h1>
          <p className="text-lg leading-relaxed text-slate-600">Soft terry fabric Pilates socks with silicone grip dots, breathable knit and full OEM customization for studios, wellness brands and retailers.</p>
          <p className="text-sm leading-relaxed text-slate-600">
            Developing a complete studio collection? Review our{' '}
            <Link href="/yoga-pilates-grip-socks-supplier" className="font-bold text-[#387116] underline underline-offset-4">
              Yoga &amp; Pilates grip socks supplier
            </Link>{' '}
            capabilities, customization options and production process.
          </p>
          <ProductQuickFacts product={product} />
          <a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#39a91f] px-7 py-4 font-black uppercase tracking-wide !text-white transition-all hover:-translate-y-0.5 hover:bg-[#2f8b19] hover:shadow-lg">Chat on WhatsApp</a>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#fbfcfa] py-12"><div className="mx-auto max-w-[1200px] space-y-8 px-5 md:px-8"><Image src={`${assetPath}/features-top.png`} alt="Pilates grip sock features" width={2508} height={627} sizes="(max-width: 1200px) 100vw, 1200px" className="h-auto w-full" /><Image src={`${assetPath}/product-features.png`} alt="Low cut Pilates sock product features" width={1448} height={1086} sizes="(max-width: 1200px) 100vw, 1200px" className="h-auto w-full" /></div></section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-20 md:px-8 lg:grid-cols-2"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Product Details</p><h2 className="text-3xl font-black md:text-4xl">Specifications</h2><dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200">{specifications.map(([label, value]) => <div key={label} className="grid grid-cols-[110px_1fr] gap-4 border-b border-slate-200 px-5 py-4 last:border-b-0"><dt className="font-bold">{label}</dt><dd className="text-slate-600">{value}</dd></div>)}</dl></div><div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">OEM Service</p><h2 className="text-3xl font-black md:text-4xl">Built for your studio or brand</h2><Image src={`${assetPath}/oem.png`} alt="OEM Pilates sock customization" width={2048} height={768} sizes="(max-width: 1024px) 100vw, 50vw" className="mt-8 h-auto w-full rounded-2xl" /></div></section>

      <section className="bg-[#f7f8f6] py-20"><div className="mx-auto max-w-[1200px] space-y-14 px-5 md:px-8"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Custom Options</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Colors, applications and factory support</h2></div>{([{ image: 'colors.png', width: 2244, height: 701 }, { image: 'applications.png', width: 2048, height: 768 }, { image: 'factory.png', width: 2048, height: 768 }, { image: 'certifications.png', width: 2244, height: 701 }]).map(({ image, width, height }) => <Image key={image} src={`${assetPath}/${image}`} alt="Pilates grip sock product information" width={width} height={height} sizes="(max-width: 1200px) 100vw, 1200px" className="h-auto w-full rounded-2xl bg-white" />)}</div></section>
      <ProductShipmentSection />

      <ProductPageEnhancements useCases={useCases} faqs={faqs} relatedLinks={[
        ['/yoga-pilates-grip-socks-supplier', 'Yoga & Pilates grip socks supplier', 'See studio applications, OEM support and broader customization capabilities.'],
        ['/products/open-top-pilates-studio-socks', 'Open-top Pilates studio socks', 'Compare an alternative construction for studio and wellness collections.'],
        ['/sports-socks-moq-guide', 'Sports socks MOQ guide', 'See the order factors that affect the right starting quantity.'],
      ]} />

      <section className="relative overflow-hidden bg-[#07120c] px-5 py-20 md:px-8 md:py-28"><div className="absolute inset-0"><Image src={`${assetPath}/cta.png`} alt="Custom Pilates grip socks" fill sizes="100vw" className="object-cover opacity-35" /><div className="absolute inset-0 bg-[#07120c]/85" /></div><div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div className="max-w-2xl space-y-7 text-white"><p className="text-sm font-black uppercase tracking-[0.15em] text-[#b4ff2b]">Start your studio project</p><h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">Plan your grip sock collection</h2><p className="text-xl font-medium leading-relaxed text-gray-200">Share your studio use, grip concept, colors and quantity. We will recommend a practical sampling and production route.</p><a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 font-black uppercase tracking-wide !text-white transition-colors hover:bg-white hover:!text-[#0c1713]">Chat on WhatsApp</a></div><ProductQuoteForm productName="Low Cut Yoga Pilates Grip Socks" productSlug="low_cut_yoga_pilates_grip_socks" productOptions={['Low-cut Pilates grip socks', 'Yoga studio grip socks', 'Barre or fitness grip socks', 'Private-label studio collection']} /></div></section>
    </main>
  );
}

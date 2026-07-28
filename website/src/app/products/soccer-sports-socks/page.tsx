import { ProductQuickFacts, productSeo } from '@/lib/product-seo';
import ProductPageEnhancements from '@/components/ProductPageEnhancements';
import ProductQuoteForm from '@/components/ProductQuoteForm';

const assetPath = '/assets/products/soccer-sports-socks';
const message = encodeURIComponent('Hello PeakMotion Socks, I am interested in your Soccer Sports Socks.');
const product = productSeo['soccer-sports-socks'];

export default function SoccerSportsSocksPage() {
  const specifications = [
    ['Material', 'Cotton / Polyester / Nylon / Spandex'],
    ['Type', 'Performance Sports Crew Socks'],
    ['Cushioning', 'Zoned Impact Protection'],
    ['Support', 'Dynamic Arch Support'],
    ['Logo', 'Jacquard / Embroidery / Print'],
    ['MOQ', '50 Pairs'],
    ['Packing', 'Custom Packaging'],
  ];
  const useCases = [
    ['Club match kits', 'Coordinate socks with team colors, jacquard crests and match-ready cushioning for adult or youth squads.'],
    ['Academies and schools', 'Plan age-group sizing and clear size packaging so coaches can issue consistent kit to every player.'],
    ['Football brands and retailers', 'Develop a repeatable performance-sock line with branded labels, packaging and seasonal colorways.'],
  ] as Array<[string, string]>;
  const faqs = [
    ['What is the MOQ for custom soccer sports socks?', 'Selected standard styles can start from 50 pairs. Final MOQ depends on logo method, colors, size range, yarn selection and packaging.'],
    ['Can you make youth and adult sizes in one project?', 'Yes. Share the size breakdown before sampling. We can plan a size run and size-specific packing for club, academy or retail orders.'],
    ['Which logo methods work on soccer socks?', 'Jacquard knitting is the most durable option for stripes, names and simple crests. Embroidery and print may suit selected placements or packaging requirements.'],
    ['How long do samples and bulk production take?', 'Samples typically take about 7 days after artwork approval. Bulk production is commonly 25鈥?0 days after the final sample and order details are approved.'],
  ] as Array<[string, string]>;

  return (
    <main className="bg-white text-[#0c1713]">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="rounded-[28px] bg-[#f7f8f6] p-5 md:p-10"><img src={`${assetPath}/hero.jpg`} alt="Soccer sports socks" className="h-auto w-full object-contain" /></div>
        <div className="max-w-xl space-y-6"><span className="inline-flex rounded-full bg-[#e9f8d2] px-4 py-2 text-xs font-black tracking-[0.16em] text-[#387116]">TEAM PERFORMANCE</span><h1 className="text-4xl font-black leading-tight md:text-6xl">Soccer Sports Socks</h1><p className="text-lg leading-relaxed text-slate-600">Professional football socks with zoned cushioning, dynamic arch support and moisture-wicking construction for training, match days and active teamwear collections.</p><ProductQuickFacts product={product} /><a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#39a91f] px-7 py-4 font-black uppercase tracking-wide !text-white transition-all hover:-translate-y-0.5 hover:bg-[#2f8b19] hover:shadow-lg">Chat on WhatsApp</a></div>
      </section>

      <section className="border-y border-slate-100 bg-[#fbfcfa] py-12"><div className="mx-auto max-w-[1200px] space-y-8 px-5 md:px-8"><img src={`${assetPath}/features.jpg`} alt="Soccer sock core features" className="h-auto w-full" /><img src={`${assetPath}/product-features.jpg`} alt="Soccer sock product features" className="h-auto w-full" /></div></section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-20 md:px-8 lg:grid-cols-2"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Product Details</p><h2 className="text-3xl font-black md:text-4xl">Specifications</h2><dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200">{specifications.map(([label, value]) => <div key={label} className="grid grid-cols-[110px_1fr] gap-4 border-b border-slate-200 px-5 py-4 last:border-b-0"><dt className="font-bold">{label}</dt><dd className="text-slate-600">{value}</dd></div>)}</dl></div><div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">OEM Service</p><h2 className="text-3xl font-black md:text-4xl">Built for your team or brand</h2><img src={`${assetPath}/oem.jpg`} alt="OEM soccer sock customization" className="mt-8 h-auto w-full rounded-2xl" /></div></section>

      <section className="bg-[#f7f8f6] py-20"><div className="mx-auto max-w-[1200px] space-y-14 px-5 md:px-8"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Custom Options</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Colors, applications and factory support</h2></div>{['colors.jpg', 'applications.jpg', 'factory.jpg', 'certifications.jpg'].map((image) => <img key={image} src={`${assetPath}/${image}`} alt="Soccer sock product information" className="h-auto w-full rounded-2xl bg-white" />)}</div></section>

      <ProductPageEnhancements useCases={useCases} faqs={faqs} relatedLinks={[
        ['/football-socks-manufacturer', 'Football socks manufacturer', 'Explore team-sock customization, constructions and sourcing support.'],
        ['/products/crew-soccer-grip', 'Crew soccer grip socks', 'Compare a grip-focused option for training and match-day stability.'],
        ['/sports-socks-moq-guide', 'Sports socks MOQ guide', 'Understand how style, color and packaging affect the starting quantity.'],
      ]} />

      <section className="relative overflow-hidden bg-[#07120c] px-5 py-20 md:px-8 md:py-28"><div className="absolute inset-0"><img src={`${assetPath}/cta.jpg`} alt="Custom soccer sports socks" className="h-full w-full object-cover opacity-35" /><div className="absolute inset-0 bg-[#07120c]/85" /></div><div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div className="max-w-2xl space-y-7 text-white"><p className="text-sm font-black uppercase tracking-[0.15em] text-[#b4ff2b]">Start your order</p><h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">Build a consistent team sock program</h2><p className="text-xl font-medium leading-relaxed text-gray-200">Send your crest, colorway, size range and quantity. We will recommend the practical production route.</p><a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white px-6 py-3 font-black uppercase tracking-wide !text-white transition-colors hover:bg-white hover:!text-[#0c1713]">Chat on WhatsApp</a></div><ProductQuoteForm productName="Soccer Sports Socks" productSlug="soccer_sports_socks" productOptions={['Knee-high team soccer socks', 'Crew soccer training socks', 'Youth academy size program', 'Private-label football collection']} /></div></section>
    </main>
  );
}


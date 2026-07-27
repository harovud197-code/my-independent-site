import Link from 'next/link';
import { ProductQuickFacts, productSeo } from '@/lib/product-seo';

const assetPath = '/assets/products/professional-running-athletic-socks';
const message = encodeURIComponent('Hello PeakMotion Socks, I am interested in your Professional Running Athletic Socks.');
const product = productSeo['professional-running-athletic-socks'];

export default function ProfessionalRunningAthleticSocksPage() {
  return (
    <main className="bg-white text-[#0c1713]">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="rounded-[28px] bg-[#f7f8f6] p-5 md:p-10">
          <img src={`${assetPath}/hero.png`} alt="Professional compression running socks" className="h-auto w-full object-contain" />
        </div>
        <div className="max-w-xl space-y-6">
          <span className="inline-flex rounded-full bg-[#e9f8d2] px-4 py-2 text-xs font-black tracking-[0.16em] text-[#387116]">BEST SELLER</span>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">Professional Running Athletic Socks</h1>
          <p className="text-lg leading-relaxed text-slate-600">High-performance compression socks designed for running and training with breathable zones, durable construction and custom OEM branding.</p>
          <ProductQuickFacts product={product} />
          <a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#39a91f] px-7 py-4 font-black uppercase tracking-wide !text-white transition-all hover:-translate-y-0.5 hover:bg-[#2f8b19] hover:shadow-lg">Chat on WhatsApp</a>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#fbfcfa] py-12"><div className="mx-auto max-w-[1200px] px-5 md:px-8"><img src={`${assetPath}/features.png`} alt="Running sock performance features" className="h-auto w-full" /></div></section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-20 md:px-8 lg:grid-cols-2">
        <div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Product Details</p><h2 className="text-3xl font-black md:text-4xl">Specifications</h2><dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          {[['Material', 'Polyester / Nylon / Spandex Blend'], ['Length', 'Knee High Compression'], ['Support', 'Graduated Compression'], ['Logo', 'Jacquard / Print / Embroidery'], ['MOQ', '50 Pairs'], ['Packing', 'Custom Packaging']].map(([term, detail]) => <div key={term} className="grid grid-cols-[110px_1fr] gap-4 border-b border-slate-200 px-5 py-4 last:border-b-0"><dt className="font-bold">{term}</dt><dd className="text-slate-600">{detail}</dd></div>)}
        </dl></div>
        <div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">For Your Brand</p><h2 className="text-3xl font-black md:text-4xl">OEM &amp; Customization</h2><img src={`${assetPath}/oem.png`} alt="OEM customization options" className="mt-8 h-auto w-full rounded-2xl" /><Link href="/custom-running-socks-manufacturer" className="mt-6 inline-flex font-black text-[#387116] underline underline-offset-4">Need an OEM or private-label running sock collection? Explore our custom running socks manufacturer service &rarr;</Link></div>
      </section>

      <section className="border-y border-slate-100 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Built for Running Programs</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Performance details for training and endurance collections</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">This style is designed for running brands, race merchandise, fitness retailers and sports teams that need breathable support with a polished custom look. Choose the blend, cushioning level, compression feel and size range around your target use.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ['Moisture management', 'Select breathable mesh placements and yarn blends for daily training or distance running.'],
                ['Cushioning zones', 'Specify heel, toe and arch cushioning based on the desired ride and price point.'],
                ['Brand identity', 'Use knitted logos, color blocking, stripe layouts or artwork-led jacquard details.'],
                ['Size planning', 'Build youth or adult size sets for retail, events, clubs and e-commerce orders.'],
              ].map(([title, text]) => <div key={title} className="rounded-xl border border-slate-200 bg-[#f7f8f6] p-5"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></div>)}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-[#f7f8f6] p-7 md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Packing & Delivery</p>
            <h2 className="mt-3 text-3xl font-black">Finish the product for its sales channel</h2>
            <div className="mt-7 space-y-4">
              {[
                ['E-commerce ready', 'Add a paper band, barcode sticker or compact mailer-friendly presentation.'],
                ['Retail collection', 'Use a header card, backer card or branded box for shelf-ready display.'],
                ['Event or team order', 'Pack by size, color and destination to simplify distribution.'],
                ['Sampling timeline', 'Artwork confirmation is followed by a sample stage of about 7 days before bulk approval.'],
              ].map(([title, text]) => <div key={title} className="rounded-xl bg-white p-5"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f6] py-20"><div className="mx-auto max-w-[1200px] space-y-14 px-5 md:px-8"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Custom Options</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Colors, applications and factory support</h2></div>
        {['colors.png', 'applications.png', 'factory.png', 'certifications.png'].map((image) => <img key={image} src={`${assetPath}/${image}`} alt={`Professional running socks ${image.replace('.png', '')}`} className="h-auto w-full rounded-2xl bg-white" />)}
      </div></section>

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <p className="text-center text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">FAQ</p>
        <h2 className="mt-3 text-center text-3xl font-black md:text-4xl">Questions before you order running socks</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {[
            ['Can I choose the compression and cushioning level?', 'Yes. Tell us the target use, wearer profile and price point so we can recommend a practical construction.'],
            ['What is the MOQ for custom running socks?', 'Selected designs can start from 50 pairs. The final MOQ depends on yarn, colors, size range and packaging.'],
            ['Can the socks include our logo and color system?', 'Yes. Knitted logo, color blocking, stripe layouts, jacquard details and retail labels can be customized.'],
            ['How is the order packed?', 'We can pack by size and color for teams, or add retail-ready header cards, barcode labels, paper bands or custom boxes.'],
          ].map(([question, answer]) => <details key={question} className="group px-6 py-5"><summary className="cursor-pointer list-none font-bold marker:content-none">{question}</summary><p className="mt-3 leading-relaxed text-slate-600">{answer}</p></details>)}
        </div>
      </section>

      <section id="quote" className="relative overflow-hidden bg-[#07120c] px-5 py-20 md:px-8 md:py-28"><div className="absolute inset-0"><img src={`${assetPath}/cta.png`} alt="Custom running socks" className="h-full w-full object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-[#07120c] via-[#07120c]/90 to-[#07120c]/45" /></div><div className="relative mx-auto max-w-7xl"><div className="max-w-2xl space-y-7 text-left text-white"><h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">Ready to Build <br />Your Sock Brand?</h2><p className="text-xl font-medium text-gray-200 md:text-2xl">Contact us today and get a free quote within 24 hours.</p><div className="flex flex-col gap-5 pt-3 sm:flex-row"><a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-[#b4ff2b] px-10 py-5 text-lg font-black uppercase text-black shadow-2xl transition-transform hover:scale-105">Get Quote Now</a><a href="https://wa.me/8617357769219" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-white/10 px-10 py-5 text-lg font-black uppercase !text-white backdrop-blur-md transition-all hover:bg-white hover:!text-black">Chat on WhatsApp</a></div></div></div></section>
    </main>
  );
}

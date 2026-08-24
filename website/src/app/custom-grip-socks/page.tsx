import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CustomGripQuoteForm from '@/components/CustomGripQuoteForm';
import MoqFramework from '@/components/MoqFramework';
import { MOQ_COPY } from '@/lib/moq-framework';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/custom-grip-socks`;
const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20a%20quote%20for%20custom%20grip%20socks.';
const assetPath = '/assets/custom-grip-socks';

export const metadata: Metadata = {
  title: 'Custom Grip Socks Manufacturer | Private Label & Wholesale | PeakMotion',
  description: 'Custom grip socks manufacturer for brands, studios, retailers and distributors. Source private label and wholesale grip socks with custom logos, silicone patterns and retail packaging.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Custom Grip Socks Manufacturer | Private Label & Wholesale | PeakMotion',
    description: 'Source custom, private label and wholesale grip socks with flexible quantities, sampling, retail packaging and factory-direct production support.',
    images: [{ url: `${assetPath}/videos/custom-grip-socks-production-poster.jpg`, alt: 'PeakMotion custom grip socks factory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Grip Socks Manufacturer | Private Label & Wholesale | PeakMotion',
    description: 'Custom logo, private label and wholesale grip socks for brands, studios, retailers and distributors.',
    images: [`${assetPath}/videos/custom-grip-socks-production-poster.jpg`],
  },
};

const solutions = [
  ['Football Grip Socks', 'Silicone traction, compression zones and reinforced construction for teams and sports brands.', '/products/crew-soccer-grip'],
  ['Pilates Grip Socks', 'Studio-ready socks with custom silicone soles, arch support and premium brand finishing.', '/products/low-cut-yoga-pilates-grip-socks'],
  ['Yoga and Barre Socks', 'Flexible anti-slip styles for yoga brands, studios and wellness retailers.', '/products/open-top-pilates-studio-socks'],
  ['Performance Sports Socks', 'Custom construction for running, basketball, training and complete collections.', '/products'],
] as const;

const customization = [
  ['Product Construction', 'Sock height, cushioning, arch support, compression, grip coverage and size range.'],
  ['Yarn and Materials', 'Combed cotton, recycled polyester, nylon, spandex, performance yarn and non-toxic silicone.'],
  ['Logo and Branding', 'Jacquard, embroidery, silicone grip logo, heat transfer, woven labels and packaging artwork.'],
  ['Retail Packaging', 'Belly bands, hang tags, header cards, printed boxes, barcode labels and FBA-ready packs.'],
] as const;

const process = [
  ['01', 'Project Brief', 'Confirm product type, target market, quantity, logo, material and packaging needs.'],
  ['02', 'Design and Quote', 'Review artwork, recommend production options and confirm a practical quotation direction.'],
  ['03', 'Custom Sample', 'Develop a sample for fit, color, logo placement and grip-pattern approval.'],
  ['04', 'Production and QC', 'Control knitting, silicone application, pairing, packaging and final inspection before shipment.'],
] as const;

const wholesaleTiers = [
  {
    quantity: '100 pairs',
    title: 'Start Your Custom Program',
    description: 'A practical starting point for studios, emerging brands and buyers testing a new grip sock design.',
    features: ['Custom logo and brand colors', 'Custom silicone grip patterns', 'Selected materials and constructions', 'Branded packaging options', 'Sample development before bulk production'],
  },
  {
    quantity: '500 pairs',
    title: 'Scale Your Wholesale Order',
    description: 'For established studios, retailers and growing brands that need stronger unit economics and more packaging flexibility.',
    features: ['Volume-based pricing', 'Multiple colors or size planning', 'Private label options', 'Retail packaging and barcode support', 'Consistent specifications for reorders'],
  },
  {
    quantity: '1,000+ pairs',
    title: 'Bulk & Repeat Production',
    description: 'Built for distributors, multi-location studios and retail programs requiring reliable ongoing supply.',
    features: ['Factory-direct bulk pricing', 'Repeat-order production planning', 'Consistent material, color and grip specifications', 'Wholesale or retail packaging', 'Seasonal and recurring production support'],
  },
] as const;

const faqs = [
  ['What is the MOQ for custom grip socks?', MOQ_COPY.yogaCurrent],
  ['Can you make custom silicone grip patterns?', 'Yes. We can develop silicone coverage, dot layouts and logo-based grip patterns to suit football, Pilates, yoga, barre and training applications.'],
  ['How long does custom grip sock sampling take?', 'A typical custom sample takes around 7 to 10 business days after artwork and specifications are confirmed.'],
  ['Can you provide private label packaging?', 'Yes. We support retail-ready packaging including belly bands, hang tags, header cards, printed boxes, barcode labels and FBA-related labeling.'],
  ['Do you support wholesale and repeat bulk grip sock orders?', 'Yes. We support first custom programs, larger wholesale orders and repeat bulk production. Pricing and production planning are confirmed from quantity, construction, materials, grip complexity, color and size breakdown, branding and packaging specifications.'],
] as const;

export default function CustomGripSocksPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Custom Grip Socks Manufacturer | Private Label & Wholesale | PeakMotion',
        description: metadata.description,
        about: ['Custom grip socks', 'Grip socks manufacturer', 'Private label grip socks', 'Wholesale grip socks', 'Bulk grip socks'],
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]" data-content-version="2026-08-24-custom-grip-socks-wholesale-v2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="overflow-hidden bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Custom, Private Label & Wholesale</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] md:text-6xl">Custom Grip Socks Manufacturer for Brands & Wholesale Buyers</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">Source custom grip socks directly from an experienced manufacturer for studio, retail, team and distribution programs. We support custom logos, silicone grip patterns, private label packaging, flexible order planning and repeat bulk production.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-[#0c1713] px-7 py-4 font-black uppercase tracking-wide !text-white transition-colors hover:bg-[#163020]">Request a Custom Quote</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] bg-white px-7 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#e9f8d2]">Chat on WhatsApp</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-sm font-bold text-slate-700">
              <span><strong className="block text-lg text-[#0c1713]">100 pairs*</strong>Typical MOQ</span>
              <span><strong className="block text-lg text-[#0c1713]">7-10 days</strong>sample lead time</span>
              <span><strong className="block text-lg text-[#0c1713]">Factory direct</strong>OEM support</span>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-lg bg-[#0c1713] p-7 shadow-[0_28px_65px_rgba(12,23,19,0.22)] md:min-h-[520px] md:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#b4ff2b]/20 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between">
              <span className="w-fit rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Grip Sock Customization</span>
              <Image src="/assets/images/training/hero.png" alt="Custom grip socks in multiple colors" width={700} height={560} priority unoptimized className="mx-auto h-[270px] w-full object-contain md:h-[360px]" />
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-200"><span className="rounded-lg border border-white/10 bg-white/5 p-4">Custom silicone grip layout</span><span className="rounded-lg border border-white/10 bg-white/5 p-4">Logo, color and packaging options</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-7 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 text-center sm:grid-cols-4">
          {[['20+ Years', 'manufacturing experience'], ['2,000 sqm', 'factory area'], ['200', 'skilled workers'], ['Worldwide', 'shipping support']].map(([value, label]) => <div key={value} className="border-slate-200 px-4 sm:border-r last:border-0"><strong className="block text-2xl font-black">{value}</strong><span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Product Solutions</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Grip socks for sports, studio and wellness brands</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Build one focused product or a complete private-label grip sock collection for your target market.</p></div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(([title, text, href]) => <Link key={title} href={href} className="group rounded-lg border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#b4ff2b] hover:shadow-lg"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Custom solution</p><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p><span className="mt-7 inline-flex text-sm font-black uppercase tracking-wide">Explore product <span className="ml-2 text-[#679a20]">-&gt;</span></span></Link>)}
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Full Customization</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Everything needed for a brand-ready product</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Choose construction, materials, visual identity and packaging details that match your market and target price.</p></div><div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">{customization.map(([title, text], index) => <article key={title} className="rounded-lg border border-slate-200 bg-white p-7"><span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#e9f8d2] text-sm font-black text-[#387116]">0{index + 1}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p></article>)}</div></div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Manufacturing Process</p><h2 className="mt-3 text-3xl font-black md:text-5xl">From your idea to finished grip socks</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">A clear development workflow keeps specifications, samples and production under control.</p></div><div className="mt-10 grid grid-cols-1 gap-px bg-white/15 md:grid-cols-4">{process.map(([number, title, text]) => <article key={number} className="bg-[#0c1713] p-7"><span className="text-sm font-black tracking-[0.16em] text-[#b4ff2b]">STEP {number}</span><h3 className="mt-8 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p></article>)}</div></div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100"><Image src={`${assetPath}/factory/sock-knitting-workshop-card.jpg`} alt="Computerized sock knitting machines in the PeakMotion factory" fill priority unoptimized sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /></div>
        <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Factory and Quality Control</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Production support buyers can see</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">From yarn preparation and computerized knitting to boarding, finishing and packing, the key production stages are handled by an experienced factory team in Haiyan, Zhejiang.</p><div className="mt-7 grid grid-cols-2 gap-3 text-sm font-bold text-slate-700">{['Yarn inspection', 'Knitting checks', 'Silicone grip inspection', 'Size measurement', 'Logo inspection', 'Packaging verification'].map(item => <span key={item} className="rounded-lg border border-slate-200 bg-[#f7f8f6] p-4">{item}</span>)}</div><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-xl bg-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide !text-white transition-colors hover:bg-[#163020] hover:!text-white">Discuss Your Specification</a></div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Product and Factory Video</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Watch our factory and production capability</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Take a quick look inside our factory, then send your design requirements for a practical product recommendation and quotation direction.</p><div className="mt-7 space-y-3 text-sm font-bold text-slate-700"><p className="rounded-lg border border-slate-200 bg-white p-4">Computerized sock knitting and production-floor workflow</p><p className="rounded-lg border border-slate-200 bg-white p-4">In-process checks for construction, silicone grip and finishing</p><p className="rounded-lg border border-slate-200 bg-white p-4">OEM support from product sampling through packing and shipment</p></div></div><div className="overflow-hidden rounded-lg bg-[#0c1713] shadow-[0_24px_55px_rgba(12,23,19,0.2)]"><video controls playsInline preload="metadata" poster={`${assetPath}/videos/custom-grip-socks-production-poster-card.jpg`} className="aspect-video w-full bg-black object-cover"><source src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/videos/factory-tour-2026-07-29.mp4" type="video/mp4" />Your browser does not support HTML video.</video><div className="border-t border-white/10 px-6 py-5 text-sm font-bold text-white">PeakMotion factory tour - press play to watch the production facility.</div></div></div>
      </section>

      <section id="wholesale-grip-socks" className="bg-[#eef6e6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Wholesale & Bulk Programs</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Wholesale & Bulk Grip Socks for Brands and Distributors</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Source wholesale grip socks directly from an experienced manufacturer for retail, studio, team and distribution programs. We support flexible order quantities, custom branding, retail-ready packaging and repeat production for buyers scaling from a first order to ongoing bulk supply.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {wholesaleTiers.map((tier, index) => (
              <article key={tier.quantity} className="flex h-full flex-col rounded-xl border border-[#cfe2bd] bg-white p-7 shadow-[0_18px_45px_rgba(12,23,19,0.06)]">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#0c1713] px-4 py-2 text-sm font-black text-white">{tier.quantity}</span>
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Route 0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black">{tier.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{tier.description}</p>
                <ul className="mt-6 space-y-3 text-sm font-bold text-slate-700">
                  {tier.features.map(feature => <li key={feature} className="flex gap-3"><span aria-hidden="true" className="text-[#679a20]">✓</span><span>{feature}</span></li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <article className="rounded-xl bg-[#0c1713] p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Specification-Based Quote</p>
              <h3 className="mt-4 text-2xl font-black">Volume Pricing Built Around Your Specification</h3>
              <p className="mt-4 leading-relaxed text-slate-300">Wholesale grip sock pricing depends on order volume, sock construction, yarn and materials, logo method, silicone grip complexity, size and color breakdown, and packaging requirements.</p>
              <p className="mt-4 leading-relaxed text-slate-300">Higher-volume and repeat orders can be planned around more efficient production runs, helping wholesale buyers build a more predictable landed-cost structure.</p>
            </article>
            <article className="rounded-xl border border-[#cfe2bd] bg-white p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#679a20]">Market-Ready Product</p>
              <h3 className="mt-4 text-2xl font-black">Custom Logo, Private Label & Wholesale Packaging</h3>
              <p className="mt-4 leading-relaxed text-slate-600">Build a product that is ready for your market with custom logo grip socks, silicone grip artwork, Pantone color matching, woven or printed branding, hang tags, belly bands, retail boxes and barcode labels.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-black">
                <Link href="/private-label-sports-socks" className="rounded-full bg-[#e9f8d2] px-4 py-2 text-[#387116]">Private label solutions</Link>
                <Link href="/blog/private-label-socks-packaging-guide" className="rounded-full bg-[#f3f5f3] px-4 py-2 text-[#0c1713]">Packaging guide</Link>
                <Link href="/socks-manufacturing" className="rounded-full bg-[#f3f5f3] px-4 py-2 text-[#0c1713]">Manufacturing process</Link>
              </div>
            </article>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-xl border border-[#cfe2bd] bg-white p-7 md:flex-row md:items-center">
            <div><h3 className="text-2xl font-black">Need wholesale or bulk grip socks?</h3><p className="mt-2 max-w-3xl leading-relaxed text-slate-600">Send us your target quantity, design, logo and packaging requirements for a factory-direct quotation.</p></div>
            <a href="#quote" className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#9fe81b]">Request a Wholesale Quote</a>
          </div>
        </div>
      </section>

      <MoqFramework />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Buyer Feedback</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Proof from international custom-sock buyers</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Selected marketplace feedback from completed orders. Screenshots are shown to keep the original buyer evidence visible.</p></div>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">{[
          ['United States buyer', 'Second order from this company and we are very pleased. The socks were produced quickly with clear communication and attention to detail.', 'review-united-states-may-2026-card.jpg'],
          ['United Kingdom buyer', 'The products arrived as described and on schedule. Communication was great from start to finish.', 'review-united-kingdom-may-2026-card.jpg'],
          ['Czech Republic buyer', 'The socks, print and packaging turned out exactly as expected. Detailed photos and videos before shipping built confidence.', 'review-czech-republic-jul-2026-card.jpg'],
        ].map(([buyer, quote, image]) => <article key={buyer} className="overflow-hidden rounded-lg border border-slate-200 bg-white"><div className="p-7"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">5-star buyer feedback</p><h3 className="mt-4 text-lg font-black">{buyer}</h3><p className="mt-4 leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</p></div><div className="border-t border-slate-100 bg-[#f7f8f6] p-4"><Image src={`${assetPath}/reviews/${image}`} alt={`Marketplace review from a ${buyer}`} width={900} height={520} unoptimized className="h-auto w-full rounded border border-slate-200" /></div></article>)}</div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-4xl"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Questions about custom grip socks</h2></div><div className="mt-10 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-lg border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{answer}</p></details>)}</div></div></section>

      <section id="quote" className="scroll-mt-24 bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Start Your Project</p><h2 className="mt-3 text-4xl font-black md:text-6xl">Ready to build your grip sock collection?</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Tell us your product type, estimated quantity, logo, material, grip pattern and packaging needs. You can start a WhatsApp conversation or open a pre-filled email inquiry.</p></div><CustomGripQuoteForm /></div></section>
    </main>
  );
}

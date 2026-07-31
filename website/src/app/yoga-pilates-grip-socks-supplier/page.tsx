import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FactoryEvidencePanel from '@/components/FactoryEvidencePanel';
import YogaPilatesQuoteForm from '@/components/YogaPilatesQuoteForm';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/yoga-pilates-grip-socks-supplier`;
const assetBase = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/yoga-pilates-grip-socks-v2';
const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20to%20develop%20custom%20yoga%20or%20Pilates%20grip%20socks.';

export const metadata: Metadata = {
  title: 'Custom Grip Socks Manufacturer | Pilates & Yoga Socks Supplier',
  description: 'Custom yoga and Pilates grip socks for studios, wellness brands and retailers. Private label support with grip design, logo, sampling, packaging and flexible MOQ routes.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Custom Grip Socks for Pilates Studios & Yoga Brands | PeakMotion',
    description: 'Build studio-ready private label grip socks with custom colors, silicone grips, packaging and practical order options.',
    images: [{ url: `${assetBase}/hero-custom-grip-socks.png`, alt: 'Custom grip socks for Pilates studios and yoga brands' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Grip Socks for Pilates Studios & Yoga Brands',
    description: 'Private label studio grip socks with custom branding, packaging and flexible production support.',
    images: [`${assetBase}/hero-custom-grip-socks.png`],
  },
};

const buyerBenefits = [
  ['Front-desk retail', 'Create an easy-to-understand studio product for class essentials, add-on sales and branded merchandise.'],
  ['Welcome packs', 'Add coordinated grip socks to new-member kits, workshops, retreats and instructor gifts.'],
  ['Reorder potential', 'Plan core colors and standard styles that can support simpler replenishment as demand develops.'],
  ['Brand visibility', 'Carry the studio identity through colors, knit details, sole grip, labels and retail packaging.'],
] as const;

const customizationOptions = [
  ['Sock silhouette', 'Choose low-cut, cross-strap, open-top or other studio-ready constructions for your customer profile.'],
  ['Grip coverage', 'Plan silicone triangles, dots, lines or logo-led patterns around traction and visual identity.'],
  ['Logo and colors', 'Coordinate knitted details, grip print, yarn colors and cuff treatments with your brand system.'],
  ['Comfort details', 'Review yarn blend, breathable zones, arch support and fit for Pilates, yoga, barre or wellness use.'],
  ['Sizes and assortments', 'Plan the size range and color breakdown around the intended studio or retail audience.'],
  ['Labels and packaging', 'Discuss belly bands, pouches, hang tags, boxes, barcode labels and ecommerce-ready packing.'],
] as const;

const buyerScenarios = [
  ['Boutique Pilates studio', 'A focused studio collection for classes, member packs and front-desk retail.'],
  ['Yoga or wellness brand', 'A private label accessory designed to complement an existing apparel or movement range.'],
  ['Retailer or distributor', 'A coordinated product and packaging route for ecommerce, boutiques or regional supply.'],
] as const;

const faqs = [
  ['What are custom yoga and Pilates grip socks?', 'They are non-slip studio socks developed around your preferred construction, colors, logo, silicone grip direction, size range and packaging.'],
  ['Can I add my studio logo?', 'Yes. Depending on the sock design, branding may be applied through knitted details, silicone grip artwork, labels, hang tags or packaging.'],
  ['What is the MOQ for custom grip socks?', 'Selected standard styles can start from 50 pairs. Logo-led standard programs are often 100 to 300 pairs, while bespoke construction, multiple sizes or custom packaging can require a higher quantity.'],
  ['Can I review a sample before production?', 'Yes. Sampling is used to review fit, color, grip coverage, branding and construction before bulk production is confirmed.'],
  ['Can you provide retail packaging?', 'Yes. Available directions include simple studio packs, belly bands, hang tags, boxes, retail hanging packs and barcode-ready labels.'],
  ['What information should I send for a quote?', 'Share your business type, country or target market, preferred sock style, logo or color direction, quantity and packaging needs.'],
] as const;

function Visual({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(12,23,19,0.09)]">
      <Image src={`${assetBase}/${src}`} alt={alt} width={1600} height={900} priority={priority} className="h-auto w-full" sizes="(max-width: 1280px) 100vw, 1200px" />
    </figure>
  );
}

export default function YogaPilatesGripSocksSupplierPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Custom Grip Socks Manufacturer for Pilates and Yoga Brands',
        description: metadata.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Yoga & Pilates Grip Socks Supplier', item: pageUrl },
        ],
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
    <main className="bg-white text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="overflow-hidden bg-[#fbfaf7] px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <div className="max-w-xl">
            <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-500"><Link href="/" className="transition-colors hover:text-[#679a20]">Home</Link><span aria-hidden="true" className="mx-2">/</span><span>Yoga & Pilates Grip Socks</span></nav>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Custom grip socks for studio brands</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.04] md:text-6xl">Custom grip socks for Pilates studios and yoga brands.</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">Create non-slip studio socks for classes, member packs and retail. We help buyers plan the sock style, grip pattern, logo, colors, sample and packaging around a practical order route.</p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-black text-slate-700 sm:grid-cols-4">
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-3">From 50 pairs*</span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-3">Custom grip</span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-3">Private label</span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-3">Retail packaging</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Create your studio socks</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-placement="yoga_pilates_hero" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide transition-colors hover:bg-[#0c1713] hover:text-white">Chat on WhatsApp</a>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">*Selected standard style. Final MOQ depends on construction, colors, sizes, logo method and packaging.</p>
          </div>
          <Visual src="hero-custom-grip-socks.png" alt="Pastel custom grip socks and retail packaging for Pilates studios and yoga brands" priority />
        </div>
      </section>

      <section aria-label="Customer types" className="border-y border-white/10 bg-[#0c1713] px-5 py-6 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Built for</p>{['Pilates studios', 'Yoga studios', 'Boutique fitness', 'Wellness brands', 'Retailers'].map((item) => <span key={item} className="text-sm font-bold text-slate-300">{item}</span>)}</div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">A product that supports the studio experience</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Why grip socks work for movement businesses.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Grip socks can serve both a practical class need and a visible brand touchpoint. Plan a focused first product, then use real customer demand to guide reorders.</p></div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{buyerBenefits.map(([title, text], index) => <article key={title} className="rounded-xl border border-slate-200 bg-[#fbfaf7] p-7"><span className="text-sm font-black text-[#679a20]">0{index + 1}</span><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="studios" className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <Visual src="studio-growth-model.png" alt="Four-step studio grip sock model from branded product development to customer purchase and replenishment" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">From studio identity to a sellable product</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Turn a class essential into a branded studio product.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Define the customer, choose a grip-sock format, align the colors and packaging, then test the product through your real studio or retail channel.</p>
            <ul className="mt-6 space-y-3 leading-relaxed text-slate-700">
              <li className="flex gap-3"><span className="font-black text-[#679a20]">01</span> Match the sock style to Pilates, yoga, barre or wellness use.</li>
              <li className="flex gap-3"><span className="font-black text-[#679a20]">02</span> Build a consistent logo, color and packaging direction.</li>
              <li className="flex gap-3"><span className="font-black text-[#679a20]">03</span> Start with an appropriate order route and scale from demand.</li>
            </ul>
            <a href="#quote" className="mt-8 inline-flex rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Plan my studio sock project</a>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Performance details customers can feel</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Build around traction, comfort and fit.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">A strong studio product goes beyond adding a logo. Grip coverage, breathable knit, arch support and a secure silhouette all need to work together for the intended activity.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[#f7f8f6] p-5"><h3 className="font-black">Silicone grip</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">Plan full-sole or targeted coverage and a practical pattern.</p></div>
              <div className="rounded-xl bg-[#f7f8f6] p-5"><h3 className="font-black">Breathable construction</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">Balance hand feel, stretch and moisture comfort.</p></div>
              <div className="rounded-xl bg-[#f7f8f6] p-5"><h3 className="font-black">Arch support</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">Review compression and fit around studio movement.</p></div>
              <div className="rounded-xl bg-[#f7f8f6] p-5"><h3 className="font-black">Brand details</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">Coordinate knit, sole and packaging branding.</p></div>
            </div>
          </div>
          <Visual src="performance-features.png" alt="Silicone grip, breathable fabric, arch support and branding features for custom studio socks" />
        </div>
      </section>

      <section id="customization" className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Private label options</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Make every product detail support your brand.</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">Start with your target customer and intended sales channel, then define the construction, branding and presentation before sampling.</p></div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">{customizationOptions.map(([title, text], index) => <article key={title} className="bg-[#0c1713] p-7"><span className="text-sm font-black tracking-[0.16em] text-[#b4ff2b]">0{index + 1}</span><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Visual src="retail-ready-packaging.png" alt="Gift pack, box and retail packaging options for private label Pilates and yoga grip socks" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Retail-ready packaging</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Present grip socks as a complete branded product.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Packaging can be planned around the stage of your project, from a simple studio pack to a box or hanging retail format for boutiques and ecommerce.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="rounded-xl bg-[#f7f8f6] p-4"><h3 className="font-black">Studio pack</h3><p className="mt-2 text-sm text-slate-600">For welcome kits and studio merchandise.</p></div>
              <div className="rounded-xl bg-[#f7f8f6] p-4"><h3 className="font-black">Brand box</h3><p className="mt-2 text-sm text-slate-600">For premium presentation and gifting.</p></div>
              <div className="rounded-xl bg-[#f7f8f6] p-4"><h3 className="font-black">Retail pack</h3><p className="mt-2 text-sm text-slate-600">For counters, shelves and ecommerce.</p></div>
            </div>
            <a href="#quote" className="mt-8 inline-flex rounded-xl border border-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide transition-colors hover:bg-[#0c1713] hover:text-white">Discuss packaging options</a>
          </div>
        </div>
      </section>

      <section id="orders" className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Flexible order options</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Choose the route that fits your launch stage.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Use samples to review the product, a selected standard style to test the market, or a larger program when you need more sizes, colors or packaging options.</p></div>
          <Visual src="flexible-order-options.png" alt="Sample, small studio, growing studio and retail-scale order options for custom grip socks" />
          <div className="mt-6 rounded-xl border border-[#b9d895] bg-[#f4fbe8] p-5 text-sm leading-relaxed text-slate-700"><strong className="text-[#234812]">MOQ note:</strong> From 50 pairs applies to selected standard styles. Logo-led standard programs are often 100 to 300 pairs; custom construction, size assortments or packaging may require a higher quantity.</div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Common buyer scenarios</p><h2 className="mt-3 text-3xl font-black md:text-5xl">A route for studios, brands and retail buyers.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The right project begins with the intended customer and sales channel, not a generic one-size-fits-all sock.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{buyerScenarios.map(([title, text], index) => <article key={title} className="rounded-2xl border border-slate-200 bg-[#fbfaf7] p-7"><span className="text-sm font-black text-[#679a20]">0{index + 1}</span><h3 className="mt-6 text-2xl font-black">{title}</h3><p className="mt-4 leading-relaxed text-slate-600">{text}</p></article>)}</div>
          <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-black"><Link href="/products/low-cut-yoga-pilates-grip-socks" className="text-[#387116] underline decoration-[#b4ff2b] decoration-2 underline-offset-4">View low-cut grip socks</Link><Link href="/products/open-top-pilates-studio-socks" className="text-[#387116] underline decoration-[#b4ff2b] decoration-2 underline-offset-4">View open-top studio socks</Link><Link href="/custom-grip-socks" className="text-[#387116] underline decoration-[#b4ff2b] decoration-2 underline-offset-4">Explore all custom grip socks</Link></div>
        </div>
      </section>

      <FactoryEvidencePanel product="yoga and Pilates grip socks" moq="From 50 pairs*" sampleLeadTime="Confirmed after review" bulkLeadTime="After sample approval" />

      <section id="faq" className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Buyer FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Questions about custom studio grip socks.</h2><p className="mt-5 leading-relaxed text-slate-600">Review the practical details buyers usually confirm before starting a private label project.</p></div>
          <div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{answer}</p></details>)}</div>
        </div>
      </section>

      <section id="quote" className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Start your project</p><h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">Build a grip sock line for your studio or wellness brand.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Tell us your business type, target market, quantity, preferred sock style, logo and packaging needs. We will recommend a practical MOQ and sampling route.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/private-label-sports-socks" className="font-black text-[#b4ff2b] underline underline-offset-4">Review private-label support</Link><Link href="/sports-socks-moq-guide" className="font-black text-[#b4ff2b] underline underline-offset-4">Read the MOQ guide</Link></div></div>
          <YogaPilatesQuoteForm id="quote-form" />
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FactoryEvidencePanel from '@/components/FactoryEvidencePanel';
import YogaPilatesQuoteForm from '@/components/YogaPilatesQuoteForm';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/yoga-pilates-grip-socks-supplier`;
const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20to%20develop%20custom%20yoga%20or%20Pilates%20grip%20socks.';

const benefits = [
  ['Non-slip silicone grip', 'Choose grip coverage, pattern and placement for yoga, Pilates reformer, barre and studio training.'],
  ['Custom logo and design', 'Apply your identity through knit logos, grip-print details, colors, cuff design, labels and packaging.'],
  ['Comfort-led materials', 'Review cotton, bamboo, nylon, polyester and blended yarn options around the intended hand feel and performance.'],
  ['Flexible production start', 'Selected projects can begin from 100 pairs, subject to construction, colors, sizing and packaging requirements.'],
] as const;

const customizationOptions = [
  ['Jacquard or knitted logo', 'Add a practical logo treatment that works with the chosen sock construction.'],
  ['Custom colors and patterns', 'Coordinate yarn colors, color blocking and visual details around your brand system.'],
  ['Silicone grip pattern', 'Develop dot, line, icon or logo-based grip coverage for the intended studio activity.'],
  ['Sizes and sock length', 'Plan size sets and silhouettes for your customer profile and retail collection.'],
  ['Labels and packaging', 'Discuss belly bands, hang tags, header cards, bags and retail-ready boxes.'],
  ['Barcode support', 'Coordinate barcode placement and packaging details for retail or distribution projects.'],
] as const;

const processSteps = [
  ['Share your brief', 'Send your logo, product references, target market, quantity and delivery needs.'],
  ['Review materials', 'Confirm the silhouette, yarn blend, construction, grip direction and packaging options.'],
  ['Approve a sample', 'Review fit, color, comfort, grip coverage and branding before bulk production.'],
  ['Production and QC', 'Complete knitting, silicone application, inspection, pairing and packing to the approved specification.'],
  ['Arrange delivery', 'Coordinate shipment by express, air, sea or your appointed freight forwarder.'],
] as const;

const applications = [
  ['Yoga studios', 'Create a branded studio essential with comfortable materials, reliable grip and retail-ready presentation.', '/assets/products/low-cut-yoga-pilates-grip-socks/applications/yoga-studio.jpg', 'Yoga studio grip socks on a Pilates reformer'],
  ['Pilates and reformer brands', 'Develop grip coverage and constructions suited to controlled movement on equipment and studio floors.', '/assets/products/low-cut-yoga-pilates-grip-socks/applications/pilates-reformer.jpg', 'Pilates grip socks on a reformer'],
  ['Barre and fitness concepts', 'Build a performance accessory for barre, dance fitness, training and wellness collections.', '/assets/products/low-cut-yoga-pilates-grip-socks/applications/barre-fitness.jpg', 'Black grip socks for barre and fitness'],
  ['Retail and distribution', 'Plan private-label studio socks with coordinated colors, sizing, packaging and barcode requirements.', '/assets/products/low-cut-yoga-pilates-grip-socks/applications/retail-distribution.jpg', 'Studio grip socks for retail and distribution'],
] as const;

const faqs = [
  ['What are yoga grip socks used for?', 'Yoga grip socks create a non-slip layer between the foot and the floor or equipment to support stable movement during yoga, Pilates, barre and studio training.'],
  ['Can I customize Pilates grip socks with my own logo?', 'Yes. PeakMotion supports custom knitted logos, silicone logo details, colors, grip patterns, labels and retail-ready packaging.'],
  ['What is the MOQ for custom yoga grip socks?', 'Selected custom projects can start from 100 pairs. Final MOQ depends on construction, yarn, logo method, color count, size range and packaging.'],
  ['How long does custom sock sampling take?', 'Sample timing depends on artwork and construction complexity. A practical sampling schedule is confirmed after the product specifications are reviewed.'],
  ['Do you ship private label grip socks worldwide?', 'Yes. Orders can be arranged by express, air freight, sea freight or an appointed forwarder.'],
] as const;

export const metadata: Metadata = {
  title: 'Yoga & Pilates Grip Socks Supplier | Custom OEM Manufacturer',
  description: 'Custom yoga and Pilates grip socks for studios, wellness brands and retailers. OEM and private label support with custom logos, silicone grips, packaging and flexible MOQ.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Yoga & Pilates Grip Socks Supplier | PeakMotion Socks',
    description: 'Custom non-slip grip socks for yoga brands, Pilates studios and retailers with OEM, private label and flexible production support.',
    images: [{
      url: '/assets/products/low-cut-yoga-pilates-grip-socks/hero.png',
      alt: 'Custom yoga and Pilates grip socks in pastel colors',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga & Pilates Grip Socks Supplier | PeakMotion Socks',
    description: 'Custom OEM and private label studio grip socks for brands, studios and retailers.',
    images: ['/assets/products/low-cut-yoga-pilates-grip-socks/hero.png'],
  },
};

export default function YogaPilatesGripSocksSupplierPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Yoga & Pilates Grip Socks Supplier',
        description: metadata.description,
        isPartOf: { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'PeakMotion Socks', url: siteUrl },
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
        '@type': 'Product',
        '@id': `${pageUrl}#product`,
        name: 'Custom Yoga & Pilates Grip Socks',
        image: `${siteUrl}/assets/products/low-cut-yoga-pilates-grip-socks/hero.png`,
        description: 'Custom OEM and private label non-slip grip socks for yoga, Pilates, barre and studio fitness brands.',
        category: 'Yoga and Pilates Grip Socks',
        brand: { '@type': 'Brand', name: 'PeakMotion Socks' },
        manufacturer: { '@type': 'Organization', name: 'Haiyan Huaerte Knitting Co., Ltd.', url: siteUrl },
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

      <section className="overflow-hidden bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-500"><Link href="/" className="transition-colors hover:text-[#679a20]">Home</Link><span aria-hidden="true" className="mx-2">/</span><span>Yoga & Pilates Grip Socks</span></nav>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">OEM & Private Label Grip Socks</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.04] md:text-6xl">Yoga & Pilates Grip Socks Supplier for Custom Brands</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">Develop premium non-slip grip socks for yoga studios, Pilates brands, fitness companies and retailers—with flexible custom options, selected low-MOQ programs and practical sampling support.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Get Your Custom Quote</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-placement="yoga_pilates_hero" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-7 py-4 font-black uppercase tracking-wide transition-colors hover:bg-[#0c1713] hover:text-white">Chat on WhatsApp</a>
            </div>
            <div className="mt-9 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200">
              {[['MOQ from', '100 pairs*'], ['Factory since', '2005'], ['Support', 'OEM & private label']].map(([label, value]) => <div key={label} className="bg-white px-3 py-4"><span className="block text-[10px] font-black uppercase tracking-[0.13em] text-slate-500">{label}</span><strong className="mt-2 block text-sm leading-snug">{value}</strong></div>)}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">*Selected projects; final MOQ depends on construction, colors, sizes, logo method and packaging.</p>
          </div>
          <YogaPilatesQuoteForm id="hero-quote" />
        </div>
      </section>

      <section aria-label="Customer types" className="border-y border-white/10 bg-[#0c1713] px-5 py-6 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Built for</p>{['Yoga studios', 'Pilates brands', 'Fitness companies', 'Retailers', 'Distributors'].map((item) => <span key={item} className="text-sm font-bold text-slate-300">{item}</span>)}</div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
        <div className="w-full max-w-[420px]">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6]"><Image src="/assets/products/low-cut-yoga-pilates-grip-socks/yoga-pilates-model-yellow.jpg" alt="Model wearing black non-slip yoga and Pilates grip socks" fill sizes="(max-width: 1024px) 50vw, 24vw" className="object-cover" /></figure>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Your Product, Your Brand</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Custom yoga and Pilates grip socks for professional brands</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">PeakMotion Socks supports custom studio grip socks for global brands, studio groups and retail buyers. We combine comfortable sock construction with purpose-planned silicone grip patterns for yoga, Pilates, barre and wellness applications.</p>
          <p className="mt-4 leading-relaxed text-slate-600">Whether you are launching a first private-label collection or expanding an established product line, our team can review yarn selection, knit structure, logo placement, colors, sizing, grips and packaging before sampling.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products/low-cut-yoga-pilates-grip-socks" className="font-black text-[#387116] underline decoration-[#b4ff2b] decoration-2 underline-offset-4">View low-cut grip socks</Link>
            <Link href="/products/open-top-pilates-studio-socks" className="font-black text-[#387116] underline decoration-[#b4ff2b] decoration-2 underline-offset-4">View open-top studio socks</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Built for the Studio Floor</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Why buyers choose custom yoga and Pilates grip socks</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Build around the comfort, traction, branding and retail needs of a modern movement business.</p></div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([title, text], index) => <article key={title} className="rounded-xl border border-slate-200 bg-white p-7"><span className="text-sm font-black text-[#679a20]">0{index + 1}</span><h3 className="mt-7 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="customization" className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
        <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Private Label Options</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Make every detail unmistakably yours</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Turn a logo, reference image or product brief into a reviewable specification for your target customer, retail position and price point.</p><a href="#quote" className="mt-8 inline-flex rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Discuss Your Project</a></div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{customizationOptions.map(([title, text]) => <article key={title} className="rounded-xl border border-slate-200 p-6"><div className="flex items-start justify-between gap-4"><h3 className="text-lg font-black">{title}</h3><span className="rounded-full bg-[#f4fbe8] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#387116]">Available</span></div><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">From Idea to Delivery</p><h2 className="mt-3 text-3xl font-black md:text-5xl">OEM yoga grip socks manufacturing process</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">A clear development path from the first brief through approved production and shipment.</p></div><ol className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-5">{processSteps.map(([title, text], index) => <li key={title} className="bg-[#0c1713] p-6"><span className="text-sm font-black tracking-[0.16em] text-[#b4ff2b]">STEP 0{index + 1}</span><h3 className="mt-8 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p></li>)}</ol></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">One Product, Many Applications</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Grip socks for the places your customers move</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Define the intended activity and sales channel before sampling so construction, grip coverage and presentation support the final use.</p></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{applications.map(([title, text, image, alt]) => <article key={title} className="overflow-hidden rounded-xl bg-[#f7f8f6]"><div className="relative aspect-square"><Image src={image} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw" className="object-cover" /></div><div className="p-6"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p></div></article>)}</div></div>
      </section>

      <FactoryEvidencePanel product="yoga and Pilates grip socks" moq="From 100 pairs*" sampleLeadTime="Confirmed after review" bulkLeadTime="After sample approval" />

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <article className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid gap-8 bg-[#0c1713] p-8 text-white md:p-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Studio Collection Case Study</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Supporting a Pilates brand with a focused first collection</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">A growing studio brand wanted anti-slip socks with a premium visual direction while limiting inventory risk during market testing.</p></div>
              <dl className="grid gap-px overflow-hidden rounded-xl bg-white/15"><div className="bg-[#0c1713] p-5"><dt className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Challenge</dt><dd className="mt-2 font-bold">Smaller first order with a polished studio look</dd></div><div className="bg-[#0c1713] p-5"><dt className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Development</dt><dd className="mt-2 font-bold">Custom grip direction, logo placement and coordinated packaging</dd></div><div className="bg-[#0c1713] p-5"><dt className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Goal</dt><dd className="mt-2 font-bold">A brand-ready collection for controlled market testing</dd></div></dl>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Buyer FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Questions about custom studio grip socks</h2><p className="mt-5 leading-relaxed text-slate-600">Review the practical details buyers usually confirm before starting an OEM or private-label project.</p></div><div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{answer}</p></details>)}</div></div>
      </section>

      <section id="quote" className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Start Your Project</p><h2 className="mt-3 text-4xl font-black md:text-6xl">Start your custom yoga grip socks project</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Send your product idea, quantity, target market and packaging needs. Our team will reply with practical suggestions and a quotation direction.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/custom-grip-socks" className="font-black text-[#b4ff2b] underline underline-offset-4">Explore all custom grip socks</Link><Link href="/private-label-sports-socks" className="font-black text-[#b4ff2b] underline underline-offset-4">Review private-label support</Link></div></div>
          <YogaPilatesQuoteForm id="quote-form" />
        </div>
      </section>
    </main>
  );
}

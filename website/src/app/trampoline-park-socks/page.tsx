import FactoryShipmentGallery from '@/components/FactoryShipmentGallery';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MoqFramework from '@/components/MoqFramework';
import TrampolineQuoteForm from '@/components/TrampolineQuoteForm';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/trampoline-park-socks`;
const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20a%20quote%20for%20custom%20trampoline%20park%20grip%20socks.';

export const metadata: Metadata = {
  title: 'Trampoline Grip Socks Manufacturer | Wholesale & Custom | PeakMotion',
  description: 'PeakMotion is a trampoline grip socks manufacturer for trampoline parks, indoor playgrounds and FECs. Custom logos, grip patterns, kids-to-adult sizes, wholesale orders and repeat supply.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Trampoline Grip Socks Manufacturer | Wholesale & Custom | PeakMotion',
    description: 'Custom trampoline park socks with logo, size-coded colors, silicone grip, wholesale production and repeat-order support.',
    images: [{ url: '/assets/trampoline-park-socks/trampoline-grip-socks-manufacturer.jpg', alt: 'Custom trampoline park grip socks in multiple colors and grip patterns' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trampoline Grip Socks Manufacturer | PeakMotion',
    description: 'Custom trampoline park grip socks for parks, indoor playgrounds, FECs and distributors.',
    images: ['/assets/trampoline-park-socks/trampoline-grip-socks-manufacturer.jpg'],
  },
};

const buyerTypes = [
  ['Trampoline Parks', 'Branded grip socks for daily visitor use with custom park logos, visible colors and multiple size options.'],
  ['Indoor Playgrounds', 'Kids-to-adult programs for indoor play centers, soft-play venues and family activity centers.'],
  ['Adventure & Activity Centers', 'Custom grip socks for ninja gyms, climbing concepts and mixed-activity entertainment venues.'],
  ['Multi-Location Operators', 'Consistent specifications, color standards, size planning and repeat-order support across locations.'],
  ['Distributors & FEC Suppliers', 'Wholesale trampoline socks for businesses supplying multiple parks and entertainment centers.'],
] as const;

const productOptions = [
  {
    title: 'Classic Trampoline Grip Socks',
    description: 'A practical construction for high-volume park programs and everyday visitor use.',
    features: ['Ankle or quarter length', 'Custom park colors', 'Full or targeted sole grip', 'Kids and adult sizes', 'Bulk packing'],
  },
  {
    title: 'Custom Logo Park Socks',
    description: 'Turn a required venue product into a visible part of your park brand.',
    features: ['Park name or logo', 'Brand colors', 'Custom sole artwork', 'Size identification', 'Packaging design'],
  },
  {
    title: 'Size-Coded Trampoline Socks',
    description: 'Help staff identify and sort visitor sizes more efficiently during busy operating hours.',
    features: ['Different body or cuff colors', 'Knit-in size markings', 'Packaging labels', 'Size-sorted packing'],
  },
  {
    title: 'Premium Branded Park Socks',
    description: 'For operators who want socks to feel more like branded merchandise.',
    features: ['Upgraded yarn options', 'Complex patterns', 'Enhanced branding', 'Retail-ready packaging'],
  },
  {
    title: 'Wholesale Socks for Distributors',
    description: 'Scalable planning for suppliers serving multiple parks or entertainment venues.',
    features: ['Volume production', 'Multi-size programs', 'Custom or neutral branding', 'Repeat-order support'],
  },
] as const;

const customization = [
  ['Custom Sock Colors', 'Match the body, cuff, heel and toe to your venue identity. Pantone references can be reviewed during development.'],
  ['Custom Logo', 'Use jacquard, knit-in branding, silicone grip artwork, printing or branded packaging according to the design.'],
  ['Custom Grip Pattern', 'Develop dots, geometric layouts, text, icons, park names or a logo-based sole pattern.'],
  ['Custom Size Identification', 'Separate sizes with body colors, cuff colors, visible markings, packaging labels or sorted cartons.'],
  ['Custom Packaging', 'Choose operational bulk packing, individual bags, header cards, belly bands, barcode labels or retail-ready packs.'],
] as const;

const qualityChecks = [
  ['Yarn & Material Check', 'Confirm the selected material and production specification.'],
  ['Knitting Inspection', 'Review construction, dimensions, appearance and knitting quality.'],
  ['Logo Inspection', 'Check logo placement, proportion and visual consistency.'],
  ['Grip Inspection', 'Review grip position, pattern appearance and application consistency.'],
  ['Size Measurement', 'Confirm production against the approved size specification.'],
  ['Pairing & Packing', 'Check pairs, quantities, size sorting and packaging before shipment.'],
] as const;

const orderProcess = [
  ['01', 'Send Your Requirements', 'Share your park, quantity, sizes, logo, colors, target market and packaging needs.'],
  ['02', 'Review Specification & Quote', 'We recommend a suitable construction, customization method, MOQ and quotation direction.'],
  ['03', 'Create Artwork & Sample', 'Confirm the design direction and develop a physical sample for evaluation.'],
  ['04', 'Approve the Sample', 'Review fit, size, colors, logo, grip layout and packaging before production.'],
  ['05', 'Bulk Production & QC', 'The approved specification guides knitting, grip application, branding, finishing and packing.'],
  ['06', 'Packing & Shipping', 'Plan packing and international logistics around volume, destination and delivery requirements.'],
  ['07', 'Repeat Order', 'Use the approved specification as a reference when inventory needs replenishment.'],
] as const;

const venueImages = [
  {
    src: '/assets/trampoline-park-socks/indoor-playground-grip-socks.jpg',
    alt: 'Adult and child wearing branded grip socks in an indoor activity center',
    caption: 'Indoor playground and family entertainment programs',
  },
  {
    src: '/assets/trampoline-park-socks/trampoline-park-grip-socks-in-use.jpg',
    alt: 'Child wearing bright green trampoline park grip socks while jumping',
    caption: 'Trampoline parks serving children, youth and families',
  },
] as const;

const orderEvidenceImages = [
  {
    src: '/assets/trampoline-park-socks/custom-trampoline-socks-digital-mockup.png',
    alt: 'Digital mockup for custom branded trampoline socks',
    caption: 'Artwork & digital mockup',
  },
  {
    src: '/assets/trampoline-park-socks/custom-trampoline-socks-sample.png',
    alt: 'Physical custom trampoline sock sample with logo',
    caption: 'Physical sample review',
  },
  {
    src: '/assets/trampoline-park-socks/trampoline-socks-wholesale-bulk-order.jpg',
    alt: 'Wholesale trampoline socks individually packed for a bulk order',
    caption: 'Bulk packing & shipment preparation',
  },
] as const;

const faqs = [
  ['Are you a trampoline grip socks manufacturer?', 'Yes. PeakMotion manufactures custom trampoline park grip socks and supports OEM, wholesale and bulk programs for parks, indoor playgrounds, FEC operators and distributors.'],
  ['Can you manufacture custom trampoline park socks with our logo?', 'Yes. Your logo can be incorporated into the sock body, silicone grip artwork or packaging depending on the design and production method.'],
  ['What is the MOQ for custom trampoline socks?', 'Selected standard styles can start from 50 pairs. Custom logo trampoline grip programs typically start from 100 pairs, while fully bespoke multi-size construction or packaging requires a higher MOQ based on the specification.'],
  ['Do you offer trampoline socks wholesale?', 'Yes. We support wholesale and bulk trampoline grip sock orders. Volume pricing is quoted according to the approved construction, sizes, colors, grip design, packaging and total quantity.'],
  ["Can you make both kids' and adult trampoline socks?", 'Yes. We can develop multiple sizes covering children, youth and adults, with size-coded colors, visible markings and size-sorted packing.'],
  ['Can the grip pattern include our park logo?', 'Yes, depending on the artwork. Logo-based silicone grip patterns, text, icons, dots and geometric patterns can be developed during the artwork and sampling stage.'],
  ['How long does trampoline sock sampling take?', 'A typical custom grip sock sample takes around 7 to 10 business days after artwork and product specifications are confirmed. Complex construction or packaging may require more time.'],
  ['Can we order different colors for different sizes?', 'Yes. Color coding is a practical way to distinguish kids, youth and adult sizes. The final color and quantity breakdown is confirmed before quotation.'],
  ['Can you support repeat orders and multi-location park programs?', 'Yes. Approved specifications can guide repeat production, while centralized quantity and size planning can support multiple locations.'],
  ['Can you ship trampoline socks internationally?', 'Yes. Logistics can be planned according to destination, quantity, carton volume and delivery requirements.'],
] as const;

export default function TrampolineParkSocksPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Trampoline Grip Socks Manufacturer | Wholesale & Custom | PeakMotion',
        description: metadata.description,
        about: ['Trampoline grip socks', 'Trampoline park socks wholesale', 'Custom trampoline socks', 'Trampoline park socks supplier'],
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
    <main className="bg-white text-[#0c1713]" data-content-version="2026-08-28-trampoline-images-v1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="overflow-hidden bg-[#f4f8ed] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Factory-Direct Trampoline Park Socks</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.04] md:text-6xl">Custom Trampoline Grip Socks Manufacturer</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">Custom grip socks for trampoline parks, indoor playgrounds, adventure centers and family entertainment venues.</p>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-600">Build your park sock program with custom logos, brand colors, grip patterns, kids-to-adult sizes and reliable bulk production direct from an experienced factory team.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-[#0c1713] px-7 py-4 font-black uppercase tracking-wide !text-white transition-colors hover:bg-[#163020]">Get Wholesale Pricing</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] bg-white px-7 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#e9f8d2]">Request Custom Samples</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-bold text-slate-700 sm:grid-cols-4">
              {['20+ years experience', 'Factory-direct OEM', '7-10 day typical sample*', 'Custom grip & branding'].map(item => <span key={item} className="rounded-lg border border-[#cfe2bd] bg-white p-3">{item}</span>)}
            </div>
            <p className="mt-3 text-xs text-slate-500">*Sample timing depends on confirmed artwork and specifications.</p>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-[32px] bg-white shadow-[0_28px_70px_rgba(12,23,19,0.14)]">
            <Image src="/assets/trampoline-park-socks/trampoline-grip-socks-manufacturer.jpg" alt="Custom trampoline park grip socks in multiple colors and grip patterns" fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-contain p-4" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Who We Serve</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Trampoline Socks Built for Park Operators & Commercial Buyers</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Whether you operate one venue or manage supply for multiple locations, we can plan the product around your branding, visitor sizes, order volume and replenishment needs.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {venueImages.map(image => <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6]"><div className="relative aspect-[16/10]"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><figcaption className="px-5 py-4 text-sm font-bold text-slate-700">{image.caption}</figcaption></figure>)}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{buyerTypes.map(([title, text], index) => <article key={title} className="rounded-xl border border-slate-200 bg-[#f7f8f6] p-6"><span className="text-xs font-black text-[#679a20]">0{index + 1}</span><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Product Options</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Trampoline Socks Wholesale Options for Different Park Programs</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">Choose the construction around your visitor profile, target cost, branding requirements and order volume.</p></div>
          <figure className="mt-10 overflow-hidden rounded-2xl border border-white/15 bg-white"><div className="relative aspect-[16/8]"><Image src="/assets/trampoline-park-socks/custom-logo-grip-trampoline-socks.jpg" alt="Custom logo trampoline grip socks shown from the top and sole" fill sizes="(max-width: 1280px) 100vw, 80vw" className="object-contain p-3" /></div><figcaption className="border-t border-white/10 bg-white/5 px-5 py-4 text-sm font-bold text-slate-200">Custom colors, visible park branding and sole grip artwork can be coordinated in one product program.</figcaption></figure>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">{productOptions.map(option => <article key={option.title} className="rounded-xl border border-white/15 bg-white/5 p-6"><h3 className="text-xl font-black">{option.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{option.description}</p><ul className="mt-5 space-y-2 text-sm font-bold text-slate-200">{option.features.map(feature => <li key={feature} className="flex gap-2"><span className="text-[#b4ff2b]">✓</span><span>{feature}</span></li>)}</ul></article>)}</div>
          <a href="#quote" className="mt-9 inline-flex rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide !text-[#0c1713]">Request Product Options & Pricing</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Customization</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Custom Trampoline Socks Made for Your Park Brand</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Your logo, colors, grip pattern and size system can become one consistent park product instead of generic factory stock.</p><div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl border border-slate-200 bg-white"><Image src="/assets/trampoline-park-socks/custom-color-trampoline-park-socks.jpg" alt="Pink custom trampoline park sock showing the branded upper and full sole grip" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-contain p-3" /></div><div className="mt-4 grid grid-cols-2 gap-4"><div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-slate-200 bg-white"><Image src="/assets/trampoline-park-socks/custom-logo-trampoline-socks.jpg" alt="Custom logo trampoline socks in coordinated park colors" fill sizes="(max-width: 640px) 50vw, 22vw" className="object-contain p-2" /></div><div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-slate-200 bg-white"><Image src="/assets/trampoline-park-socks/custom-trampoline-socks-packaging.jpg" alt="Custom trampoline socks with branded retail packaging" fill sizes="(max-width: 640px) 50vw, 22vw" className="object-contain p-2" /></div></div></div>
          <div className="grid gap-5 sm:grid-cols-2">{customization.map(([title, text], index) => <article key={title} className={`rounded-xl border border-slate-200 p-7 ${index === 4 ? 'sm:col-span-2 bg-[#f4f8ed]' : 'bg-white'}`}><span className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Option 0{index + 1}</span><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#f4f8ed] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white"><Image src="/assets/trampoline-park-socks/trampoline-grip-socks-silicone-closeup.jpg" alt="Close-up of silicone grip coverage on custom trampoline park socks" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-4" /></div>
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Grip & Controlled Traction</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Grip Designed for Controlled Traction & Regular Park Use</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The sole layout is developed around practical traction, coverage, sock construction and intended venue use.</p><div className="mt-7 grid gap-4 sm:grid-cols-2">{[['Grip Coverage', 'Cover the key contact areas of the sole instead of treating grip as decoration.'], ['Silicone Options', 'Use dots, geometric layouts, text or logo-based artwork.'], ['Placement Control', 'Review position, coverage, logo clarity, consistency and finish during sampling.'], ['Construction for Active Use', 'Select yarn, elasticity, fit and reinforcement around use, durability and target cost.']].map(([title, text]) => <article key={title} className="rounded-lg border border-[#cfe2bd] bg-white p-5"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div><p className="mt-7 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900"><strong>Venue specification note:</strong> Final product specifications should be selected according to the operating requirements, footwear policy and applicable standards of your venue and market.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Kids & Adult Sizes</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Trampoline Grip Socks for Kids, Youth & Adults</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Build a practical size range for your target visitors, then make sizes easy for staff to identify and replenish.</p><div className="relative mt-7 aspect-[6/5] overflow-hidden rounded-2xl border border-slate-200 bg-white"><Image src="/assets/trampoline-park-socks/trampoline-park-socks-size-range.jpg" alt="Trampoline park grip socks arranged in kids, youth and adult sizes" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-3" /></div><div className="mt-7 grid grid-cols-2 gap-3 text-center text-sm font-black sm:grid-cols-4">{['Kids', 'Youth', 'Adult', 'Large Adult'].map(size => <span key={size} className="rounded-xl bg-[#0c1713] px-4 py-4 text-white">{size}</span>)}</div><ul className="mt-7 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-2">{['Color-coded cuffs', 'Different body colors', 'Visible size markings', 'Individual size labels', 'Size-sorted cartons', 'Quantity planning by size'].map(item => <li key={item} className="rounded-lg border border-slate-200 p-4">✓ {item}</li>)}</ul></div>
          <div className="rounded-2xl bg-[#0c1713] p-8 text-white md:p-10"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Bulk & Repeat Supply</p><h2 className="mt-3 text-3xl font-black">A Trampoline Park Socks Supplier Built for Repeat Orders</h2><p className="mt-5 leading-relaxed text-slate-300">The first order matters, but an operating park also needs a clear replenishment route. Approved specifications help keep future yarn, dimensions, colors, logo placement, grip artwork, size range and packaging consistent.</p><div className="relative mt-7 aspect-[6/5] overflow-hidden rounded-xl bg-white"><Image src="/assets/trampoline-park-socks/trampoline-socks-repeat-supply.jpg" alt="Stacks of color-coded trampoline grip socks prepared for repeat supply" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" /></div><div className="mt-7 grid gap-3 sm:grid-cols-2">{['Volume-based pricing', 'Multi-size production', 'Bulk or custom packing', 'Repeat-order scheduling', 'Multi-location planning', 'Worldwide shipping support'].map(item => <span key={item} className="rounded-lg border border-white/15 bg-white/5 p-4 text-sm font-bold">{item}</span>)}</div><a href="#quote" className="mt-8 inline-flex rounded-xl bg-[#b4ff2b] px-6 py-4 font-black uppercase tracking-wide !text-[#0c1713]">Get Bulk Pricing</a></div>
        </div>
      </section>

      <MoqFramework eyebrow="Trampoline Socks MOQ" title="Choose the Right MOQ Route for Your Park Sock Program" description="Selected standard styles can start from 50 pairs. Custom logo trampoline grip programs typically start from 100 pairs, while fully bespoke multi-size construction or packaging requires a higher MOQ based on the confirmed specification." />

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Manufacturing & QC</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Factory-Direct Trampoline Grip Socks Manufacturing</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The production workflow covers knitting, branding, grip application, finishing, inspection and packing from approved sample through bulk supply.</p><Link href="/socks-manufacturing" className="mt-7 inline-flex font-black text-[#387116] underline underline-offset-4">See our manufacturing process →</Link></div><div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100"><Image src="/assets/custom-grip-socks/factory/sock-knitting-workshop-card.jpg" alt="PeakMotion sock manufacturing workshop" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{qualityChecks.map(([title, text], index) => <article key={title} className="rounded-xl border border-slate-200 bg-white p-6"><span className="text-xs font-black text-[#679a20]">QC 0{index + 1}</span><h3 className="mt-3 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Order Process</p><h2 className="mt-3 text-3xl font-black md:text-5xl">How to Order Custom Trampoline Park Socks</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Move from project brief to repeat supply with one approved production reference.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {orderEvidenceImages.map(image => <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6]"><div className="relative aspect-[4/3]"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-3" /></div><figcaption className="border-t border-slate-200 px-5 py-4 text-sm font-bold text-slate-700">{image.caption}</figcaption></figure>)}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{orderProcess.map(([number, title, text], index) => <article key={number} className={`rounded-xl border p-6 ${index === 6 ? 'border-[#b4ff2b] bg-[#0c1713] text-white lg:col-span-2' : 'border-slate-200 bg-white'}`}><span className={`text-sm font-black ${index === 6 ? 'text-[#b4ff2b]' : 'text-[#679a20]'}`}>STEP {number}</span><h3 className="mt-4 text-xl font-black">{title}</h3><p className={`mt-3 text-sm leading-relaxed ${index === 6 ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p></article>)}</div>
      <div className="mx-auto max-w-7xl"><FactoryShipmentGallery photos={['warehouse', 'loading']} title="Bulk-order dispatch and repeat supply" /></div>
      </section>

      <section className="bg-[#f4f8ed] px-5 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-4xl"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Trampoline Grip Socks Manufacturer FAQ</h2></div><div className="mt-10 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-[#cfe2bd] bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-[#e0ead7] px-6 py-5 leading-relaxed text-slate-600">{answer}</p></details>)}</div></div></section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Request a Quote</p><h2 className="mt-3 text-4xl font-black md:text-6xl">Request a Custom Trampoline Socks Wholesale Quote</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Send your logo, estimated quantity, size range, target market and preferred specification. Our team will turn the information into a practical production recommendation.</p><div className="mt-8 flex flex-wrap gap-3 text-sm font-black"><Link href="/custom-grip-socks" className="rounded-full border border-white/20 px-4 py-2 !text-white">Custom Grip Socks</Link><Link href="/yoga-pilates-grip-socks-supplier" className="rounded-full border border-white/20 px-4 py-2 !text-white">Pilates & Yoga Grip Socks</Link><Link href="/sports-socks-moq-guide" className="rounded-full border border-white/20 px-4 py-2 !text-white">MOQ Guide</Link><Link href="/contact" className="rounded-full border border-white/20 px-4 py-2 !text-white">Contact PeakMotion</Link></div></div><TrampolineQuoteForm /></div>
      </section>
    </main>
  );
}

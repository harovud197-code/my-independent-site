import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ManufacturingRelatedLinks from '@/components/ManufacturingRelatedLinks';
import MoqFramework from '@/components/MoqFramework';
import { MOQ_COPY } from '@/lib/moq-framework';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/socks-manufacturing`;
const assetBase = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/socks-manufacturing';

export const metadata: Metadata = {
  title: 'OEM Socks Manufacturer | Production & Quality Control | PeakMotion',
  description: 'See how an OEM socks manufacturer develops products from material selection and sampling to computerized knitting, quality control, packaging and shipment.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'OEM Socks Manufacturer | From Concept To Production | PeakMotion',
    description: 'A buyer-focused view of custom sock development, sampling, production, quality control and private label packaging.',
    images: [{
      url: `${assetBase}/computerized-sock-production-floor.jpg`,
      width: 1271,
      height: 715,
      alt: 'Computerized custom sock production floor at PeakMotion',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OEM Socks Manufacturer | Production Process',
    description: 'From product brief and sample development to production, inspection and retail-ready packing.',
    images: [`${assetBase}/computerized-sock-production-floor.jpg`],
  },
};

const faqs = [
  ['What is your MOQ for custom socks?', MOQ_COPY.frameworkSummary],
  ['How long does custom sock production take?', 'Sampling normally takes about 7 to 15 days. Bulk production timing is confirmed after the sample and final specification are approved, because quantity and construction affect the schedule.'],
  ['Can you make private label socks?', 'Yes. PeakMotion supports custom logos, knit colors, labels, hang tags, poly bags, boxes and other retail-ready presentation for private label sock programs.'],
  ['Do you manufacture sports socks?', 'Yes. Our product routes include football socks, running and training socks, yoga and Pilates grip socks, plus other custom performance sock styles.'],
] as const;

const overviewItems = [
  ['01', 'Product Development', 'Translate a market idea into a clear sock specification.'],
  ['02', 'Custom Manufacturing', 'Build the approved construction on computerized sock machines.'],
  ['03', 'Private Label Support', 'Coordinate logos, labels and retail presentation.'],
  ['04', 'Quality Control', 'Check materials, in-process details and finished orders.'],
  ['05', 'Packaging Solutions', 'Prepare products for retail, cartons and shipment.'],
] as const;

const developmentSteps = [
  ['01', 'Design Consultation', 'Share your target user, market, reference product, logo and quantity.'],
  ['02', 'Sock Structure Development', 'Confirm height, yarn, cushioning, grip, compression and logo route.'],
  ['03', 'Sampling', 'Create a physical sample or prototype for practical review.'],
  ['04', 'Testing & Approval', 'Review fit, colors, logo placement, grip and construction details.'],
  ['05', 'Mass Production', 'Lock the approved specification before the bulk order begins.'],
] as const;

const productionSteps = [
  ['01', 'Knitting', 'Computerized knitting turns the approved program into the sock body.'],
  ['02', 'Linking', 'Toe and construction details are finished for comfort and consistency.'],
  ['03', 'Washing & Shaping', 'Socks are finished and shaped to the approved size requirements.'],
  ['04', 'Logo & Grip', 'Printing, silicone grip or other approved applications are completed.'],
  ['05', 'Quality Inspection', 'Size, workmanship, colors, logos and packing details are checked.'],
  ['06', 'Packing', 'Pairs are labeled, packed and prepared for export cartons.'],
] as const;

function FactoryImage({ src, alt, width, height, caption, priority = false, crop = false }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  crop?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_48px_rgba(12,23,19,0.09)]">
      <Image
        src={`${assetBase}/${src}`}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={crop ? 'aspect-video w-full object-cover object-center' : 'h-auto w-full'}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
      />
      {caption ? <figcaption className="border-t border-slate-100 px-5 py-4 text-sm font-bold text-slate-700">{caption}</figcaption> : null}
    </figure>
  );
}

function SectionHeading({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-black uppercase tracking-[0.18em] ${light ? 'text-[#b4ff2b]' : 'text-[#679a20]'}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black leading-tight md:text-5xl ${light ? 'text-white' : 'text-[#0c1713]'}`}>{title}</h2>
      <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>{body}</p>
    </div>
  );
}

export default function SocksManufacturingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'OEM Socks Manufacturer | Production Process',
        description: metadata.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: ['OEM socks manufacturer', 'Sock production process', 'Sock quality control', 'Sock packaging'],
        primaryImageOfPage: { '@id': `${pageUrl}#primaryimage` },
      },
      {
        '@type': 'ImageObject',
        '@id': `${pageUrl}#primaryimage`,
        url: `${assetBase}/computerized-sock-production-floor.jpg`,
        width: 1271,
        height: 715,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Socks Manufacturing', item: pageUrl },
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

      <section className="overflow-hidden bg-[#f7f8f6] px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <div className="max-w-xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Production process and quality control</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.04] md:text-6xl">OEM Socks Manufacturer From Concept to Production</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">Develop a market-ready sock program with one manufacturing partner for product planning, sampling, production, quality control and retail packaging.</p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-black text-slate-700">
              <span className="rounded-xl border border-slate-200 bg-white px-4 py-3">Private label production</span>
              <span className="rounded-xl border border-slate-200 bg-white px-4 py-3">50 pairs — selected standard styles</span>
              <span className="rounded-xl border border-slate-200 bg-white px-4 py-3">7-15 day sampling</span>
              <span className="rounded-xl border border-slate-200 bg-white px-4 py-3">Retail packaging</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Discuss your sock project</Link>
              <a href="#process" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide transition-colors hover:bg-[#0c1713] hover:text-white">See the process</a>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">Custom logo and studio grip programs typically start from 100 pairs. Fully bespoke specifications require a higher MOQ.</p>
          </div>
          <FactoryImage src="computerized-sock-production-floor.jpg" alt="Computerized sock knitting machines across the PeakMotion production floor" width={1271} height={715} priority caption="Computerized sock production floor in Haiyan, Zhejiang" />
        </div>
      </section>

      <MoqFramework />

      <ManufacturingRelatedLinks currentPath="/socks-manufacturing" />

      <section className="border-y border-slate-200 bg-white px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Manufacturing overview" title="One connected route from buyer brief to packed order." body="PeakMotion coordinates the technical and commercial details that sit between a product idea and a repeatable production specification." />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {overviewItems.map(([number, title, body]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-[#f7f8f6] p-5">
                <span className="text-xs font-black text-[#679a20]">{number}</span>
                <h3 className="mt-6 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="materials" className="scroll-mt-24 bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionHeading eyebrow="Material selection" title="Start with the yarn, feel and performance target." body="Cotton, Coolmax, nylon, spandex and bamboo-fiber routes are discussed against the intended use, fit, durability, budget and market positioning." />
            <div className="grid grid-cols-2 gap-4">
              <FactoryImage src="custom-yarn-color-card.jpg" alt="Yarn color card used to discuss custom sock color options" width={1820} height={1024} caption="Color direction" />
              <FactoryImage src="yarn-storage-racks.jpg" alt="Organized yarn storage racks for custom sock production" width={1820} height={1024} caption="Prepared yarn inventory" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {['Cotton', 'Coolmax', 'Nylon / Spandex', 'Bamboo Fiber'].map((material) => <div key={material} className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-center font-black">{material}</div>)}
          </div>
          <div className="mt-6">
            <FactoryImage src="yarn-and-material-warehouse.jpg" alt="Yarn and material warehouse supporting custom socks manufacturing" width={1820} height={1024} caption="Material storage and preparation before production" />
          </div>
        </div>
      </section>

      <section id="custom-development" className="scroll-mt-24 bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Product development" title="Turn references into an approved production specification." body="The development stage reduces ambiguity before bulk production. Sampling usually takes 7-15 days, depending on design complexity and the required construction." />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-5">
            {developmentSteps.map(([number, title, body]) => (
              <article key={title} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_34px_rgba(12,23,19,0.06)]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#b4ff2b] text-xs font-black">{number}</span>
                <h3 className="mt-5 font-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <FactoryImage src="custom-sock-design-consultation.jpg" alt="Custom sock product design reviewed on screen before sampling" width={1820} height={1024} caption="Design consultation and color planning" />
            <FactoryImage src="jacquard-logo-programming.jpg" alt="Jacquard sock logo programming for sample development" width={1820} height={1024} caption="Knitting program and logo development" />
          </div>
        </div>
      </section>

      <section id="production-process" className="scroll-mt-24 bg-[#0c1713] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading light eyebrow="Production process" title="A visible production route buyers can understand." body="Each approved sock moves through controlled stages from knitting and finishing to inspection and packing." />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productionSteps.map(([number, title, body]) => (
              <article key={title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6">
                <span className="text-xs font-black text-[#b4ff2b]">{number}</span>
                <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <FactoryImage src="computerized-sock-knitting-machines.jpg" alt="Computerized sock knitting machines used for custom production" width={1820} height={1024} caption="Computerized knitting" />
            <FactoryImage src="socks-on-boarding-forms.jpg" alt="Socks placed on forms during finishing and shaping" width={1820} height={1024} caption="Shaping and finishing" />
            <FactoryImage src="sock-knitting-machine-row.jpg" alt="Row of sock knitting machines on the production floor" width={1820} height={1024} caption="Scalable production capacity" />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <FactoryImage src="production-line-knitting-machines.jpg" alt="Production line of computerized machines for custom socks" width={1412} height={795} caption="In-process production control" />
            <FactoryImage src="yarn-preparation-line.jpg" alt="Yarn preparation equipment supporting sock manufacturing" width={1619} height={911} caption="Yarn preparation before knitting" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Product capability" title="Manufacturing routes for sports, grip and private label socks." body="Choose the category closest to your market. Each route connects to a focused buyer page with product, MOQ and customization guidance." />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <Link href="/private-label-sports-socks" className="group overflow-hidden rounded-2xl border-2 border-[#9acb52] bg-[#f4fbe8] shadow-[0_18px_50px_rgba(66,111,30,0.16)] lg:col-span-3 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <Image src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/private-label-sports-socks/hero-private-label-socks-v2.png" alt="Private label socks with custom branding and retail packaging" width={1600} height={900} className="h-auto w-full" />
              <div className="p-7 lg:p-10"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#56851c]">Priority route · Private label socks</p><h3 className="mt-3 text-3xl font-black md:text-4xl">Turn manufacturing capability into a retail-ready sock brand</h3><p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">Connect product development, logo application, sampling, production and packaging with our highest-value <span className="font-bold text-[#315d18]">private label socks manufacturer</span> route.</p><span className="mt-6 inline-flex font-black text-[#315d18] underline decoration-[#9acb52] decoration-2 underline-offset-4">Explore private label production →</span></div>
            </Link>
            <Link href="/football-socks-manufacturer" className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6] shadow-[0_16px_42px_rgba(12,23,19,0.08)]">
              <Image src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/football-socks-landing/football-hero-balanced.png" alt="Custom football and sports socks manufacturing" width={1448} height={1086} className="h-auto w-full" />
              <div className="p-6"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Sports socks</p><h3 className="mt-2 text-2xl font-black">Football, running &amp; training socks</h3><p className="mt-3 text-slate-600">Explore our <span className="font-bold text-[#315d18]">custom football socks manufacturer</span> route.</p></div>
            </Link>
            <Link href="/yoga-pilates-grip-socks-supplier" className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6] shadow-[0_16px_42px_rgba(12,23,19,0.08)]">
              <Image src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/yoga-pilates-grip-socks-v2/hero-custom-grip-socks-v2.png" alt="Custom yoga Pilates and barre grip socks manufacturing" width={1600} height={900} className="h-auto w-full" />
              <div className="p-6"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Grip socks</p><h3 className="mt-2 text-2xl font-black">Yoga, Pilates &amp; barre socks</h3><p className="mt-3 text-slate-600">Review our <span className="font-bold text-[#315d18]">custom grip socks manufacturer</span> options.</p></div>
            </Link>
            <Link href="/products/soccer-sports-socks" className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6] shadow-[0_16px_42px_rgba(12,23,19,0.08)]">
              <Image src="/assets/products/soccer-sports-socks/hero.jpg" alt="Custom soccer sports socks product specification" width={1536} height={1024} className="aspect-video w-full object-cover" />
              <div className="p-6"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Product specification</p><h3 className="mt-2 text-2xl font-black">Soccer sports socks</h3><p className="mt-3 text-slate-600">Review construction, customization and ordering details before sending a manufacturing brief.</p><span className="mt-5 inline-flex font-black text-[#315d18] underline decoration-[#b4ff2b] decoration-2 underline-offset-4">View product details →</span></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Manufacturing in real projects" title="See how capability becomes a buyer outcome." body="These case studies connect product development, sampling, quality control and packaging to real launch and growth scenarios." />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ['UK Football Brand Growth', 'From test orders to a repeat-ready football sock program.', '/case-studies/uk-football-brand-growth'],
              ['Yoga & Pilates Sock Development', 'From product idea to a market-ready studio sock collection.', '/case-studies/yoga-pilates-socks-development'],
              ['Private Label Socks Brand Launch', 'From brand brief to retail-ready socks and packaging.', '/case-studies/private-label-socks-brand-launch'],
            ].map(([title, text, href], index) => (
              <Link key={href} href={href} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_14px_36px_rgba(12,23,19,0.06)] transition-transform hover:-translate-y-1">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Case study 0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                <span className="mt-6 inline-flex font-black text-[#315d18] underline decoration-[#b4ff2b] decoration-2 underline-offset-4">Read the case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="quality-control" className="scroll-mt-24 bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Quality control" title="Three checkpoints before an order leaves the factory." body="Quality control follows the approved product specification, with evidence at material, production and finished-order stages." />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="flex h-full flex-col"><FactoryImage src="yarn-and-material-warehouse.jpg" alt="Materials prepared for inspection before sock production" width={1820} height={1024} crop /><div className="flex-1 px-1 pt-5"><span className="text-xs font-black text-[#679a20]">01</span><h3 className="mt-2 text-xl font-black">Material Inspection</h3><p className="mt-2 text-slate-600">Check the selected yarn route and order preparation against the specification.</p></div></article>
            <article className="flex h-full flex-col"><FactoryImage src="production-line-knitting-machines.jpg" alt="Computerized sock production line used for in-process quality checks" width={1412} height={795} crop /><div className="flex-1 px-1 pt-5"><span className="text-xs font-black text-[#679a20]">02</span><h3 className="mt-2 text-xl font-black">Production Inspection</h3><p className="mt-2 text-slate-600">Review workmanship, size, color, logos and finishing during the order.</p></div></article>
            <article className="flex h-full flex-col"><FactoryImage src="socks-on-boarding-forms.jpg" alt="Finished socks on boarding forms for shape and size inspection" width={1820} height={1024} crop /><div className="flex-1 px-1 pt-5"><span className="text-xs font-black text-[#679a20]">03</span><h3 className="mt-2 text-xl font-black">Final Inspection</h3><p className="mt-2 text-slate-600">Verify finished pairs, labeling, packing quantities and carton preparation.</p></div></article>
          </div>
        </div>
      </section>

      <section id="packaging" className="scroll-mt-24 bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Packaging & shipping" title="Prepare the collection for retail and delivery." body="Packaging is discussed early enough to coordinate product dimensions, branding, labeling and export-carton requirements." />
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-black text-slate-700">
              {['Hang Tags', 'Retail Boxes', 'Poly Bags', 'Barcode Labels'].map((item) => <span key={item} className="rounded-xl border border-slate-200 bg-[#f7f8f6] px-4 py-4">{item}</span>)}
            </div>
          </div>
          <div className="space-y-5">
            <FactoryImage src="private-label-packing-line.png" alt="Private label socks being paired and packed" width={1672} height={941} caption="Pairing, labeling and retail packing" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <FactoryImage src="final-packing-inspection.png" alt="Finished sock order checked before carton packing" width={1448} height={1086} caption="Final packing check" crop />
              <FactoryImage src="export-carton-packing.jpg" alt="Export carton sealed for custom sock shipment" width={1820} height={1024} caption="Export carton preparation" crop />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading light eyebrow="Why brands choose PeakMotion" title="A practical manufacturing partner for launch and scale." body="The goal is not only to make socks. It is to help a buyer make clear product decisions, approve the right sample and move into repeatable production." />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {['Flexible MOQ', 'Fast Sampling', 'Custom Development', 'Private Label Support', 'Reliable Production'].map((item) => <div key={item} className="rounded-xl border border-white/15 bg-white/[0.06] px-4 py-5 text-center font-black text-white">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeading eyebrow="FAQ" title="Questions buyers ask before development starts." body="Send your product type, target market, quantity and design direction for a project-specific recommendation." />
          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-[#f7f8f6] p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8cf] px-5 py-16 text-center md:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#56851c]">Start with a clear manufacturing brief</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Ready to develop your custom socks?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">Tell us your sock category, country or target market, expected quantity, logo direction and packaging needs. We will recommend a practical development route.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#0c1713] px-8 py-4 text-sm font-black uppercase tracking-wide !text-white transition-colors hover:bg-[#1b3529] hover:!text-white">Request a manufacturing plan</Link>
            <Link href="/#factory" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-white">About our factory process</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

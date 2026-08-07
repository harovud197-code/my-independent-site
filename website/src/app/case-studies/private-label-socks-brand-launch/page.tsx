import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/case-studies/private-label-socks-brand-launch`;
const assetBase = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/private-label-socks-brand-launch';

export const metadata: Metadata = {
  title: 'Private Label Socks Brand Launch Case Study | PeakMotion',
  description: 'See how PeakMotion supported an emerging brand with custom sock design, sampling, private label packaging, flexible production and retail-ready delivery.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    url: pageUrl,
    title: 'How We Helped A New Brand Launch A Private Label Socks Collection',
    description: 'A documented journey from brand concept and custom sampling to private label packaging, production and shipment.',
    images: [{ url: `${assetBase}/custom-sock-render.png`, alt: 'Private label custom socks developed for an emerging brand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Label Socks Brand Launch Case Study | PeakMotion',
    description: 'From product idea to a retail-ready custom socks collection.',
    images: [`${assetBase}/custom-sock-render.png`],
  },
};

const challengeCards = [
  ['01', 'Finding A Flexible Manufacturer', 'The brand needed a partner able to support a small MOQ, practical product testing and a route that could scale after market validation.'],
  ['02', 'Developing A Distinct Product', 'Sock structure, color, logo placement, yarn choices and functional details all had to work together as one sellable product.'],
  ['03', 'Creating A Complete Brand Experience', 'The project extended beyond the socks to custom labels, retail presentation, packing and a consistent customer-facing identity.'],
] as const;

const solutionCards = [
  ['Product Design', 'Select the sock style, develop the structure, choose materials and translate brand artwork into knit-ready details.'],
  ['Sampling & Testing', 'Move from prototype and sample review through practical modifications before the final approval.'],
  ['Branding Support', 'Coordinate logo placement with jacquard, printing, embroidery or custom-label options.'],
  ['Packaging Development', 'Prepare paper bands, poly bags, hang tags or retail packaging around the approved product.'],
] as const;

const processSteps = [
  ['01', 'Brand Concept', 'Clarify the target buyer, market position and intended use.'],
  ['02', 'Design Development', 'Turn the logo and visual direction into a manufacturable sock design.'],
  ['03', 'Sample Production', 'Create a physical sample for fit, logo and construction review.'],
  ['04', 'Product Testing', 'Confirm the product details and make practical adjustments.'],
  ['05', 'Mass Production', 'Move the approved specification into controlled production.'],
  ['06', 'Brand Launch', 'Pack and deliver a retail-ready private label collection.'],
] as const;

const manufacturingDetails = [
  ['Product', 'Custom Socks Collection'],
  ['MOQ', 'From 50 pairs — selected standard style'],
  ['Sampling', '7–15 days'],
  ['Production', '20–30 days'],
  ['Logo', 'Jacquard / Print / Embroidery'],
  ['Material', 'Cotton / Coolmax / Nylon / Bamboo'],
  ['Packaging', 'Custom retail packaging'],
] as const;

const faqItems = [
  {
    question: 'What are private label socks?',
    answer: 'Private label socks are custom-developed products sold under your own brand name, with coordinated product design, logo application and packaging.',
  },
  {
    question: 'What is the MOQ for private label socks?',
    answer: 'Selected standard styles can start from 50 pairs. Final MOQ depends on the sock construction, yarn, color count, logo method, sizes and packaging.',
  },
  {
    question: 'Can you help design custom socks?',
    answer: 'Yes. PeakMotion supports product development from the initial brief and artwork through sampling, revision, production and retail packaging.',
  },
] as const;

function EvidenceImage({
  src,
  alt,
  ratio = 'landscape',
  fit = 'cover',
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: 'square' | 'portrait' | 'landscape' | 'wide';
  fit?: 'cover' | 'contain';
  priority?: boolean;
}) {
  const ratioClass = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
  }[ratio];

  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(12,23,19,0.08)]">
      <div className={`relative ${ratioClass} overflow-hidden bg-[#f4f5f2]`}>
        <Image
          src={`${assetBase}/${src}`}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          className={fit === 'contain' ? 'object-contain p-3' : 'object-cover'}
        />
      </div>
    </figure>
  );
}

export default function PrivateLabelSocksBrandLaunchCaseStudyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: 'How We Helped A New Brand Launch A Private Label Socks Collection',
        description: metadata.description,
        mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
        image: [
          `${assetBase}/custom-sock-render.png`,
          `${assetBase}/physical-sample.png`,
          `${assetBase}/retail-packaging.png`,
          `${assetBase}/shipping-cartons.jpg`,
        ],
        author: { '@id': `${siteUrl}/#organization` },
        publisher: { '@id': `${siteUrl}/#organization` },
        datePublished: '2026-08-07',
        dateModified: '2026-08-07',
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Private Label Socks Brand Launch Case Study',
        isPartOf: { '@id': `${siteUrl}/#website` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${siteUrl}/case-studies` },
          { '@type': 'ListItem', position: 3, name: 'Private Label Socks Brand Launch', item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="bg-[#f7f8f6] px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-500">
            <Link href="/" className="hover:text-[#679a20]">Home</Link><span aria-hidden="true" className="mx-2">/</span><span>Private Label Socks Brand Launch</span>
          </nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Customer Success | Emerging Lifestyle Brand</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.03] md:text-6xl">Launch your own socks brand with a flexible manufacturing partner.</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">From product concept to retail-ready socks, PeakMotion helps emerging brands create custom socks with low MOQ, private labeling and full production support.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#development" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] hover:bg-[#a3e627]">See the development journey</a>
                <Link href="/private-label-sports-socks#quote" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide hover:bg-[#0c1713] hover:text-white">Start your brand project</Link>
              </div>
            </div>
            <EvidenceImage src="custom-sock-render.png" alt="Rendered private label logo socks developed from the customer brand artwork" ratio="landscape" fit="contain" priority />
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Private Label Production', 'From 50 Pairs*', 'Custom Design Support', 'Retail Packaging Solutions'].map((item) => (
              <p key={item} className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-black">{item}</p>
            ))}
          </div>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">*Selected standard styles. Final MOQ depends on construction, yarn, colors, logo method, sizes and packaging.</p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Customer Background</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">A new brand needed more than a sock supplier.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">The customer was an emerging lifestyle brand preparing to launch its own socks collection without an established supply chain or internal product-development team.</p>
            <ul className="mt-6 grid gap-3 text-sm font-bold text-slate-700 sm:grid-cols-2">
              {['No existing sock supply chain', 'Needed product development support', 'Wanted a small-batch market test', 'Required branded retail packaging'].map((item) => <li key={item} className="rounded-xl bg-[#f4fbe8] p-4"><span className="mr-2 text-[#679a20]">✓</span>{item}</li>)}
            </ul>
          </div>
          <EvidenceImage src="brand-logo-options.png" alt="Customer brand logo options supplied for private label sock development" ratio="square" fit="contain" />
        </div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">The Challenge</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Building a socks brand from scratch.</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">The product, supply route and customer-facing presentation all had to be developed together.</p></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {challengeCards.map(([number, title, description]) => (
              <article key={number} className="rounded-2xl border border-white/15 bg-white/[0.05] p-7"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Challenge {number}</p><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-4 leading-relaxed text-slate-300">{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="development" className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Our Solution</p><h2 className="mt-3 text-3xl font-black md:text-5xl">A connected private label development route.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">PeakMotion coordinated the product decisions, physical sampling, branding and packaging so the customer could move from an idea to a market-ready collection.</p></div>
            <EvidenceImage src="knit-design-development.jpg" alt="Custom sock knit design being developed on production software" ratio="wide" fit="cover" />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map(([title, description]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p></article>)}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <EvidenceImage src="physical-sample.png" alt="Physical private label sock sample used for fit and logo review" ratio="portrait" fit="contain" />
            <EvidenceImage src="finished-logo-socks.png" alt="Finished white private label socks showing the customer logo" ratio="portrait" fit="contain" />
            <EvidenceImage src="finished-logo-socks-detail.png" alt="Detailed finished sock view showing the approved logo and construction" ratio="portrait" fit="contain" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Product Development Process</p><h2 className="mt-3 text-3xl font-black md:text-5xl">From idea to finished product.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Each decision was reviewed in sequence before the project moved into production.</p></div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map(([step, title, description]) => <li key={step} className="rounded-2xl border border-slate-200 bg-[#fbfcfa] p-6"><span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#b4ff2b] text-xs font-black">{step}</span><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Private Label Manufacturing Details</p><h2 className="mt-3 text-3xl font-black md:text-5xl">A practical framework for testing and scaling.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The production route can be adjusted around the product, brand stage and intended sales channel.</p><Link href="/private-label-sports-socks" className="mt-7 inline-flex text-sm font-black text-[#467410] underline decoration-[#b4ff2b] decoration-2 underline-offset-4">Explore private label sports socks manufacturing →</Link></div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(12,23,19,0.06)]">
            <table className="w-full text-left text-sm"><thead className="bg-[#0c1713] text-white"><tr><th className="px-5 py-4 font-black">Item</th><th className="px-5 py-4 font-black">Details</th></tr></thead><tbody>{manufacturingDetails.map(([item, details]) => <tr key={item} className="border-t border-slate-200 first:border-0"><th scope="row" className="px-5 py-4 font-black">{item}</th><td className="px-5 py-4 text-slate-600">{details}</td></tr>)}</tbody></table>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Branding & Packaging</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Building more than socks.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The retail presentation connected the sock, logo and customer-facing packaging into one consistent private label product.</p><ul className="mt-6 space-y-3 text-sm font-bold text-slate-700">{['Logo socks', 'Custom sock card', 'Clear retail bag', 'Pack-ready presentation'].map((item) => <li key={item}><span className="mr-2 text-[#679a20]">✓</span>{item}</li>)}</ul></div>
            <div className="grid items-start gap-5 sm:grid-cols-[0.78fr_1.22fr]">
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f6f7f4] shadow-[0_20px_55px_rgba(12,23,19,0.08)]">
                <div className="p-4 sm:p-5">
                  <Image src={`${assetBase}/sock-card-artwork.jpg`} alt="Private label sock card artwork with composition and retail information" width={920} height={1708} sizes="(max-width: 640px) 100vw, 260px" className="h-auto w-full rounded-xl" />
                </div>
                <figcaption className="border-t border-slate-200 bg-white px-5 py-4"><span className="block text-xs font-black uppercase tracking-[0.14em] text-[#679a20]">Packaging Artwork</span><span className="mt-1 block text-sm font-bold text-slate-700">Custom sock card prepared around the customer brand.</span></figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f6f7f4] shadow-[0_20px_55px_rgba(12,23,19,0.08)]">
                <div className="p-4 sm:p-5">
                  <Image src={`${assetBase}/finished-logo-socks-detail.png`} alt="Finished private label socks packed in a clear retail bag with the customer sock card" width={1127} height={1396} sizes="(max-width: 640px) 100vw, 420px" className="h-auto w-full rounded-xl" />
                </div>
                <figcaption className="border-t border-slate-200 bg-white px-5 py-4"><span className="block text-xs font-black uppercase tracking-[0.14em] text-[#679a20]">Retail-Ready Product</span><span className="mt-1 block text-sm font-bold text-slate-700">Approved socks, clear retail bag and branded presentation.</span></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Manufacturing & Quality Control</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Production evidence behind the finished collection.</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">Material preparation, knitting, finishing, packing and final order checks were coordinated against the approved product specification.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2"><EvidenceImage src="knitting-line.png" alt="Sock knitting production line used for custom private label orders" ratio="wide" fit="cover" /><EvidenceImage src="finishing-line.png" alt="Factory finishing line supporting custom sock production" ratio="wide" fit="cover" /><EvidenceImage src="retail-packaging.png" alt="Factory team packing and inspecting finished sock orders" ratio="wide" fit="cover" /><EvidenceImage src="final-packing-check.png" alt="Final private label sock packing check before carton sealing" ratio="wide" fit="cover" /></div>
          <ol className="mt-8 grid gap-4 md:grid-cols-3"><li className="rounded-xl border border-white/15 p-5"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">01</span><h3 className="mt-2 font-black">Material inspection</h3></li><li className="rounded-xl border border-white/15 p-5"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">02</span><h3 className="mt-2 font-black">Production inspection</h3></li><li className="rounded-xl border border-white/15 p-5"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">03</span><h3 className="mt-2 font-black">Final packing inspection</h3></li></ol>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Project Results</p><h2 className="mt-3 text-3xl font-black md:text-5xl">A retail-ready private label collection prepared for launch.</h2><ul className="mt-7 space-y-4 text-lg font-bold text-slate-700">{['Complete private label collection developed', 'Retail-ready packaging completed', 'Flexible MOQ supported market testing', 'Production route prepared for future scaling'].map((item) => <li key={item} className="flex gap-3"><span className="text-[#679a20]">✓</span><span>{item}</span></li>)}</ul><blockquote className="mt-8 rounded-2xl border-l-4 border-[#679a20] bg-white p-6 text-xl font-bold italic shadow-sm">&ldquo;PeakMotion helped us turn our idea into a professional sock collection.&rdquo;<footer className="mt-3 text-sm not-italic text-slate-500">Founder / Brand Owner</footer></blockquote></div>
            <div className="grid gap-5 sm:grid-cols-2"><EvidenceImage src="packed-order.png" alt="Completed private label socks packed with branded retail cards" ratio="portrait" fit="cover" /><EvidenceImage src="shipping-cartons.jpg" alt="Finished private label socks packed into shipping cartons for dispatch" ratio="portrait" fit="cover" /></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Frequently asked questions.</h2></div><div className="mt-10 space-y-4">{faqItems.map((item) => <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><span>{item.question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{item.answer}</p></details>)}</div></div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Start Your Own Socks Brand</p><h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">Ready to turn your idea into a retail-ready sock collection?</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Share your target market, sock style, logo, expected quantity and packaging needs. We will recommend a practical sampling and production route.</p></div><Link href="/private-label-sports-socks#quote" className="inline-flex w-full shrink-0 justify-center rounded-xl bg-[#b4ff2b] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] hover:bg-[#a3e627] sm:w-auto">Start your private label project</Link></div>
      </section>
    </main>
  );
}


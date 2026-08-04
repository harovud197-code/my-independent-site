import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/case-studies/uk-football-brand-growth`;
const assetBase = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/uk-football-brand-growth';

export const metadata: Metadata = {
  title: 'UK Football Brand Case Study | Custom Sock Production | PeakMotion',
  description: 'See how a UK football lifestyle brand progressed from case-specific 25-50 pair trial orders through seven sample rounds to repeat production and 100,000+ pairs per year.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    url: pageUrl,
    title: 'UK Football Brand Growth Case Study | PeakMotion',
    description: 'Seven sample rounds, three-stage quality control and a flexible supply program supporting long-term repeat production.',
    images: [{ url: `${assetBase}/case-snapshot.png`, alt: 'UK football brand custom socks case study snapshot' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Football Brand Growth Case Study | PeakMotion',
    description: 'From small trial orders to stable repeat production and 100,000+ pairs per year.',
    images: [`${assetBase}/case-snapshot.png`],
  },
};

const facts = [
  ['Initial test', '25-50 pairs', 'A historical, case-specific trial quantity used during early product validation.'],
  ['Development', '7 sample rounds', 'Construction, yarn, compression, sock height and performance details were refined before approval.'],
  ['Partnership', '4 years', 'The relationship progressed from early testing to an established repeat-production program.'],
  ['Repeat cycle', 'Every 2 months', 'Production planning moved into a regular reorder rhythm as the brand grew.'],
  ['Current scale', '100,000+ pairs / year', 'The supply program expanded to support the brand at a materially larger annual volume.'],
  ['Quality record', 'Zero complaints', 'The supplied case records no complaints across the four-year partnership.'],
] as const;

function CaseVisual({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(12,23,19,0.09)]">
      <Image src={`${assetBase}/${src}`} alt={alt} width={1600} height={1200} priority={priority} className="h-auto w-full" sizes="(max-width: 1280px) 100vw, 1200px" />
    </figure>
  );
}

export default function UKFootballBrandCaseStudyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: 'From Small Trial Orders to Long-Term UK Football Brand Growth',
        description: metadata.description,
        mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
        image: [`${assetBase}/case-snapshot.png`, `${assetBase}/sampling-development.png`, `${assetBase}/quality-control.png`],
        author: { '@id': `${siteUrl}/#organization` },
        publisher: { '@id': `${siteUrl}/#organization` },
        datePublished: '2026-08-04',
        dateModified: '2026-08-04',
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'UK Football Brand Case Study',
        isPartOf: { '@id': `${siteUrl}/#website` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${siteUrl}/case-studies` },
          { '@type': 'ListItem', position: 3, name: 'UK Football Brand Growth', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="bg-[#f7f8f6] px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-500"><Link href="/" className="hover:text-[#679a20]">Home</Link><span aria-hidden="true" className="mx-2">/</span><span>UK Football Brand Case Study</span></nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Customer Success | UK Football Lifestyle Brand</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.04] md:text-6xl">From small trial orders to long-term repeat production.</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">A four-year partnership built through flexible early-stage testing, seven sample rounds, technical product refinement, three-stage quality control and reliable repeat supply.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#journey" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] hover:bg-[#a3e627]">Explore the development journey</a><a href="#start-project" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide hover:bg-[#0c1713] hover:text-white">Start a similar project</a></div>
            </div>
            <CaseVisual src="case-snapshot.png" alt="UK football brand case snapshot with trial, partnership, reorder and annual volume details" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-10 md:px-8">
        <dl className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">{facts.map(([label, value, detail]) => <div key={label} className="rounded-xl border border-slate-200 bg-[#fbfcfa] p-6"><dt className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">{label}</dt><dd className="mt-2 text-2xl font-black">{value}</dd><p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p></div>)}</dl>
        <p className="mx-auto mt-5 max-w-7xl text-xs leading-relaxed text-slate-500">The 25-50 pair quantity is historical and specific to this customer development case. It does not replace PeakMotion's current MOQ policy for new projects.</p>
      </section>

      <section id="journey" className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Sampling and development</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Seven sample rounds to get the product right.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The team worked through benchmark analysis, material testing, compression adjustments and sock-height refinement before the final sample was approved.</p></div><CaseVisual src="sampling-development.png" alt="Seven-round custom football sock sampling and development journey" /></div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Quality control</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Three checks supporting consistent repeat orders.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Compression and cushioning were checked during knitting; toe smoothness and sock height were reviewed after linking; grip adhesion, jacquard integrity and packaging were checked before packing.</p><blockquote className="mt-7 rounded-xl border-l-4 border-[#679a20] bg-[#f4fbe8] p-6 text-lg font-bold italic text-[#234812]">&ldquo;You are our hero. Your socks sell very well. You are a very good supplier. We need to place more orders.&rdquo;<footer className="mt-3 text-sm not-italic text-slate-600">UK football brand</footer></blockquote></div><CaseVisual src="quality-control.png" alt="Three-stage quality control for the UK football sock production program" /></div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Flexible supply chain</p><h2 className="mt-3 text-3xl font-black md:text-5xl">A production route that grew with the brand.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Small-batch agility supported early testing, while responsive sampling, technical expertise, packaging and delivery coordination supported the transition into stable repeat production.</p></div><CaseVisual src="supply-chain-growth.png" alt="UK football brand growth journey from small trial orders to repeat production" /></div>
      </section>

      <section id="start-project" className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Build your own repeat-ready program</p><h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">Start with the right product brief, then scale from approved demand.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Share your sock type, logo, target market, quantity and packaging needs. We will recommend a practical sampling and production route.</p></div><div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto"><Link href="/football-socks-manufacturer#quote" className="inline-flex justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] hover:bg-[#a3e627]">Start a football sock project</Link><Link href="/private-label-sports-socks#quote" className="inline-flex justify-center rounded-xl border border-white/40 px-6 py-4 text-sm font-black uppercase tracking-wide text-white hover:bg-white hover:text-[#0c1713]">Discuss private label production</Link></div></div>
      </section>
    </main>
  );
}


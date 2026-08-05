import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/case-studies/yoga-pilates-socks-development`;
const assetBase = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/yoga-pilates-socks-development';

export const metadata: Metadata = {
  title: 'Yoga & Pilates Socks Development Case Study | PeakMotion',
  description: 'Explore a yoga and Pilates sock development journey covering five-toe and open-toe styles, secure straps, anti-slip grip, sample testing and packaging direction.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    url: pageUrl,
    title: 'Yoga & Pilates Socks Development Case Study | PeakMotion',
    description: 'From brand idea and design concept to grip testing, packaging direction and a market-ready wellness sock collection.',
    images: [{ url: `${assetBase}/hero-v2.png`, alt: 'Yoga and Pilates grip sock collection development case study' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga & Pilates Socks Development Case Study | PeakMotion',
    description: 'A six-stage product development journey for a wellness-focused studio sock collection.',
    images: [`${assetBase}/hero-v2.png`],
  },
};

function CaseImage({ src, alt, priority = false, className = '' }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-[#eaded8] bg-white shadow-[0_20px_55px_rgba(64,35,39,0.08)] ${className}`}>
      <Image src={`${assetBase}/${src}`} alt={alt} width={1450} height={1080} priority={priority} sizes="(max-width: 1280px) 100vw, 1200px" className="h-auto w-full" />
    </figure>
  );
}

const developmentSteps = [
  ['01', 'Brand idea', 'Define the target studio customer, wellness position and product opportunity.'],
  ['02', 'Design concept', 'Explore colors, materials, straps, trims and silhouettes for the intended collection.'],
  ['03', 'Sock structure', 'Coordinate five-toe mobility, arch support, grip placement and secure fit details.'],
  ['04', 'Sample testing', 'Review comfort, flexibility, durability and grip performance in studio movement.'],
  ['05', 'Packaging design', 'Build a presentation direction that matches the brand and retail channel.'],
  ['06', 'Market-ready range', 'Bring the approved product and presentation decisions into one focused collection.'],
] as const;

const challengeCards = [
  {
    number: 'Challenge 01',
    title: 'Creating A Unique Product Identity',
    intro: 'The market was filled with similar yoga socks.',
    lead: 'The brand needed unique product designs including:',
    items: ['Five toe yoga socks', 'Half toe grip socks', 'Ballet-inspired styles'],
  },
  {
    number: 'Challenge 02',
    title: 'Developing A Complete Brand Collection',
    intro: 'The project required more than socks.',
    lead: 'It included:',
    items: ['Product design', 'Color selection', 'Logo customization', 'Packaging development'],
  },
  {
    number: 'Challenge 03',
    title: 'Testing The Market Before Scaling',
    intro: 'As a growing wellness brand, the customer needed a flexible manufacturing partner who could support small batch testing before larger production.',
    lead: '',
    items: [],
  },
] as const;

const solutionCards = [
  {
    title: 'Custom Product Development',
    lead: 'We helped optimize:',
    items: ['Sock structure', 'Toe construction', 'Grip pattern', 'Comfort performance'],
  },
  {
    title: 'Flexible Manufacturing',
    lead: 'Supporting emerging brands with:',
    items: ['Low MOQ production', 'Small batch testing', 'Scalable future orders'],
  },
  {
    title: 'Complete Brand Support',
    lead: 'From socks to packaging:',
    items: ['Custom colors', 'Logo applications', 'Retail-ready presentation'],
  },
] as const;

const manufacturingDetails = [
  ['Product Type', 'Custom Yoga Pilates Grip Socks'],
  ['Styles', 'Five Toe Socks / Half Toe Socks'],
  ['MOQ', 'Starting from 50 pairs'],
  ['Sampling Time', '7-15 Days'],
  ['Production Time', '20-30 Days'],
  ['Logo Options', 'Jacquard / Printing / Custom Label'],
  ['Packaging', 'Custom Retail Packaging'],
] as const;

export default function YogaPilatesSocksDevelopmentCaseStudyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: 'Custom Yoga and Pilates Socks Development',
        description: metadata.description,
        mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
        image: [`${assetBase}/hero-v2.png`, `${assetBase}/collection-v2.png`, `${assetBase}/development.png`],
        author: { '@id': `${siteUrl}/#organization` },
        publisher: { '@id': `${siteUrl}/#organization` },
        datePublished: '2026-08-04',
        dateModified: '2026-08-05',
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Yoga and Pilates Socks Development Case Study',
        isPartOf: { '@id': `${siteUrl}/#website` },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Yoga & Pilates Socks Development', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="bg-[#fbf7f4] px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-500"><Link href="/" className="hover:text-[#a16470]">Home</Link><span aria-hidden="true" className="mx-2">/</span><span>Yoga &amp; Pilates Socks Development</span></nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a16470]">Product Development Case | Studio &amp; Wellness Socks</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.04] md:text-6xl">Custom Yoga &amp; Pilates Socks Development</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">A product development journey combining elegant studio styling, functional grip, secure fit details and a cohesive wellness collection direction.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#journey" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] hover:bg-[#a3e627]">View the development journey</a><Link href="/yoga-pilates-grip-socks-supplier#quote" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide hover:bg-[#0c1713] hover:text-white">Start a studio sock project</Link></div>
            </div>
            <CaseImage src="hero-v2.png" alt="Yoga and Pilates grip sock collection displayed in a studio setting" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-[#eaded8] bg-white px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a16470]">Customer Background</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">A wellness brand building a differentiated studio sock collection.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">The customer wanted to move beyond generic studio socks and create a coordinated yoga and Pilates collection with a clear product identity, functional grip and private label presentation.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[['Premium quality', 'Comfort-led materials and durable construction.'], ['Functional design', 'Grip, support, flexibility and secure fit.'], ['Wellness direction', 'Soft colors and studio-focused styling.'], ['Brand-ready path', 'Product, sampling and packaging decisions aligned.']].map(([title, text]) => <article key={title} className="rounded-xl bg-[#fbf7f4] p-6"><h3 className="text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7f4] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a16470]">Project Challenge</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">The Challenge: Building A Unique Yoga Sock Brand</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">The customer wanted to create a differentiated yoga and Pilates sock collection instead of selling generic studio socks.</p>
            </div>
            <div className="rounded-2xl border border-[#eaded8] bg-white p-6 md:p-8">
              <p className="font-black text-[#0c1713]">The goal was to develop products that combined:</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {['Unique design identity', 'Comfortable fit', 'Anti-slip performance', 'Private label branding', 'Flexible production support'].map((item) => <li key={item} className="flex items-start gap-3 text-sm font-bold text-slate-700"><span aria-hidden="true" className="mt-0.5 text-[#a16470]">&#10003;</span><span>{item}</span></li>)}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {challengeCards.map((card) => (
              <article key={card.number} className="flex h-full flex-col rounded-2xl border border-[#eaded8] bg-white p-7 shadow-[0_18px_45px_rgba(64,35,39,0.06)]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a16470]">{card.number}</p>
                <h3 className="mt-4 text-2xl font-black leading-tight">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{card.intro}</p>
                {card.lead && <p className="mt-4 font-bold text-slate-700">{card.lead}</p>}
                {card.items.length > 0 && <ul className="mt-3 space-y-2">{card.items.map((item) => <li key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-600"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a16470]" /><span>{item}</span></li>)}</ul>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Project Solution</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Our Solution: From Product Idea To Market-Ready Collection</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">PeakMotion supported the entire development process from initial concept to production.</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
              <p className="font-black text-white">Our team provided:</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {['Custom sock development', 'Technical recommendations', 'Sampling adjustments', 'Private label support', 'Production management'].map((item) => <li key={item} className="flex items-start gap-3 text-sm font-bold text-slate-200"><span aria-hidden="true" className="mt-0.5 text-[#b4ff2b]">&#10003;</span><span>{item}</span></li>)}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {solutionCards.map((card, index) => (
              <article key={card.title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#b4ff2b] text-sm font-black text-[#0c1713]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 text-2xl font-black leading-tight">{card.title}</h3>
                <p className="mt-4 font-bold text-slate-200">{card.lead}</p>
                <ul className="mt-3 space-y-2">{card.items.map((item) => <li key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-300"><span aria-hidden="true" className="mt-0.5 text-[#b4ff2b]">&#10003;</span><span>{item}</span></li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a16470]">MOQ / Sampling / Production</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Manufacturing Details</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">A practical production framework for developing and testing a custom yoga or Pilates grip sock collection.</p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-[#eaded8] shadow-[0_18px_45px_rgba(64,35,39,0.06)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left">
                <thead className="bg-[#0c1713] text-white">
                  <tr>
                    <th scope="col" className="w-[34%] px-6 py-4 text-sm font-black uppercase tracking-[0.12em]">Item</th>
                    <th scope="col" className="px-6 py-4 text-sm font-black uppercase tracking-[0.12em]">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {manufacturingDetails.map(([item, details], index) => (
                    <tr key={item} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fbf7f4]'}>
                      <th scope="row" className="border-t border-[#eaded8] px-6 py-4 font-black text-[#0c1713]">{item}</th>
                      <td className="border-t border-[#eaded8] px-6 py-4 font-semibold text-slate-600">{details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 rounded-2xl bg-[#fbf7f4] p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-2xl font-black md:text-3xl">Start With A Small Batch Test</h3>
              <p className="mt-4 leading-relaxed text-slate-600">Not every brand needs thousands of pairs at the beginning.</p>
              <p className="mt-2 leading-relaxed text-slate-600">PeakMotion helps emerging wellness brands validate products with flexible MOQ before scaling production.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-center text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Request Custom Yoga Socks Quote</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7f4] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#a16470]">Collection direction</p><h2 className="mt-3 text-3xl font-black md:text-5xl">One wellness range, multiple studio-ready silhouettes.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The visual direction includes five-toe ballet styles, cross-strap designs, open-toe options and neutral-to-pastel colorways that can support studios, wellness brands and retail collections.</p></div><CaseImage src="collection-v2.png" alt="Yoga and Pilates sock collection in five-toe, cross-strap and grip styles" /></div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <CaseImage src="detail.png" alt="Close-up of pink five-toe Pilates socks with secure straps and sole grips" />
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#a16470]">Design details</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Style details planned around studio movement.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Soft knit texture, elastic straps, decorative trims and an anti-slip sole direction work together to create a recognizable product while supporting fit and traction.</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{['Five-toe mobility', 'Secure elastic straps', 'Soft knit hand feel', 'Targeted anti-slip grip'].map((item) => <li key={item} className="rounded-xl bg-[#fbf7f4] p-4 font-black text-slate-700">{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="bg-[#fbf7f4] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#a16470]">Use scenario</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Designed around Pilates, yoga and wellness movement.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The product direction is suitable for reformer Pilates, studio yoga, barre-inspired movement, member packs and wellness retail—subject to final specification and sample approval.</p><div className="mt-7 flex flex-wrap gap-3 text-sm font-black"><Link href="/products/low-cut-yoga-pilates-grip-socks" className="rounded-full border border-[#d9c8c1] bg-white px-4 py-2 hover:border-[#a16470]">Low-cut grip socks</Link><Link href="/products/open-top-pilates-studio-socks" className="rounded-full border border-[#d9c8c1] bg-white px-4 py-2 hover:border-[#a16470]">Open-top studio socks</Link></div></div>
          <CaseImage src="lifestyle.png" alt="Pilates studio use scenario for custom grip socks" />
        </div>
      </section>

      <section id="journey" className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#a16470]">Six-stage development journey</p><h2 className="mt-3 text-3xl font-black md:text-5xl">From concept to a market-ready collection direction.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Each stage narrows the decisions required before production: target customer, product concept, construction, sample review, packaging and launch preparation.</p></div><CaseImage src="development.png" alt="Six-stage yoga sock development journey from brand idea to market-ready collection" /><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{developmentSteps.map(([number, title, text]) => <article key={number} className="rounded-xl border border-[#eaded8] bg-[#fbf7f4] p-6"><span className="text-sm font-black tracking-[0.16em] text-[#a16470]">{number}</span><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div></div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Plan your own collection</p><h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">Turn your studio sock idea into a clear product brief.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Share your intended customer, style, colors, grip direction, quantity and packaging needs. We will recommend a practical route for specification review and sampling.</p></div><div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto"><Link href="/yoga-pilates-grip-socks-supplier#quote" className="inline-flex justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] hover:bg-[#a3e627]">Start a Yoga or Pilates project</Link><Link href="/private-label-sports-socks#quote" className="inline-flex justify-center rounded-xl border border-white/40 px-6 py-4 text-sm font-black uppercase tracking-wide text-white hover:bg-white hover:text-[#0c1713]">Discuss private label support</Link></div></div>
      </section>
    </main>
  );
}


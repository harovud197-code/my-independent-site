import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/blog/how-much-do-custom-grip-socks-cost`;
const assetPath = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog/custom-grip-socks-cost';

const priceRanges = [
  ['50–100 pairs', '$5–$8 / pair', 'Small launch or selected standard-style trial'],
  ['100–500 pairs', '$3.5–$6 / pair', 'Focused logo, grip and packaging program'],
  ['500–1,000 pairs', '$2.5–$4 / pair', 'Established private-label or club order'],
  ['1,000+ pairs', '$2–$3.5 / pair', 'Higher-volume production planning'],
] as const;

const faqs = [
  ['How much do custom grip socks cost?', 'For planning purposes, custom grip sock projects can range from about $2 to $8 per pair. The final quotation depends on quantity, construction, materials, silicone grip layout, logo method, colorways, packaging and the approved specification.'],
  ['What is the MOQ for custom grip socks?', 'Selected standard styles can start from 50 pairs. A bespoke construction, multiple colorways, specialist yarns, complex silicone patterns or retail packaging can require a different MOQ, which is confirmed after reviewing the brief.'],
  ['Can I customize silicone grip patterns?', 'Yes. Silicone dots, stripes, logo grips, coverage areas and selected colors can be reviewed against the intended activity, material and artwork.'],
  ['Can you provide OEM samples?', 'Yes. We can review artwork and product requirements, then confirm the suitable sampling route before bulk production approval.'],
] as const;

const processSteps = [
  ['Yarn selection', 'Choose yarns around the intended hand feel, durability, stretch and performance needs.', 'yarn-workshop.jpg'],
  ['Knitting production', 'Build the sock construction, sizing, cushioning and support zones around the approved specification.', 'knitting-workshop.jpg'],
  ['Sewing and finishing', 'Complete the sock and prepare the surface for the next finishing steps.', 'sewing.jpg'],
  ['Washing and drying', 'Finish the product according to the selected material and process requirements.', 'washing.jpg'],
  ['Boarding and shape setting', 'Set the presentation and check the finished profile before final inspection.', 'boarding.jpg'],
  ['Quality inspection', 'Review key details such as dimensions, appearance, pairing and grip placement before packing.', 'quality-control.jpg'],
] as const;

export const metadata: Metadata = {
  title: 'How Much Do Custom Grip Socks Cost? Pricing Guide | PeakMotion',
  description: 'Learn what affects custom grip sock pricing, including quantity, materials, silicone grip design, branding, packaging and OEM production requirements.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'article',
    url: pageUrl,
    title: 'How Much Do Custom Grip Socks Cost? A Complete Pricing Guide',
    description: 'A practical guide to the factors that affect custom grip sock cost, MOQ and OEM project planning.',
    images: [{ url: `${assetPath}/grip-display.jpg`, alt: 'Custom grip socks with silicone anti-slip sole' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Do Custom Grip Socks Cost? | PeakMotion',
    description: 'A practical pricing guide for custom grip sock projects.',
    images: [`${assetPath}/grip-display.jpg`],
  },
};

export default function CustomGripSocksCostPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: 'How Much Do Custom Grip Socks Cost? A Complete Pricing Guide',
        description: metadata.description,
        mainEntityOfPage: pageUrl,
        datePublished: '2026-07-28',
        dateModified: '2026-07-28',
        author: { '@type': 'Organization', name: 'PeakMotion Socks' },
        publisher: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
        image: `${assetPath}/grip-display.jpg`,
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

      <article>
        <header className="border-b border-slate-200 bg-[#f7f8f6] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-500"><Link href="/blog" className="hover:text-[#387116]">Blog</Link><span className="mx-2">/</span><span>Grip Socks Pricing</span></nav>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">OEM Buying Guide</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] md:text-6xl">How Much Do Custom Grip Socks Cost?</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">A practical pricing guide for sports brands, football clubs, Pilates studios and retailers planning a custom grip sock project.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold text-slate-700"><span className="rounded-full bg-white px-4 py-2 shadow-sm">Updated July 2026</span><span className="rounded-full bg-white px-4 py-2 shadow-sm">Pricing planning guide</span><span className="rounded-full bg-white px-4 py-2 shadow-sm">OEM &amp; private label</span></div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f8f6]"><Image src={`${assetPath}/grip-display.jpg`} alt="Custom grip socks with silicone anti-slip sole" width={1200} height={800} priority className="h-auto w-full object-contain" /><figcaption className="px-5 py-4 text-sm font-medium text-slate-600">Silicone coverage, logo detail and construction are among the choices that affect a custom grip sock quotation.</figcaption></figure>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-slate-700">
            <p>Custom grip socks are used by football clubs, fitness brands, Pilates studios, yoga businesses and retailers. The final cost is shaped by the quantity, yarn selection, silicone grip design, branding method and packaging plan.</p>
            <p>This guide gives a useful starting point for project planning. It is not a fixed price list: the final price and MOQ are confirmed after the product specification, artwork and quantity by design are reviewed.</p>
          </div>

          <section className="mt-14 scroll-mt-24" id="pricing">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Cost planning</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Typical custom grip sock price ranges</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Indicative product-price planning ranges in USD per pair. They help compare project directions; a formal quote is based on your approved requirements.</p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[620px] text-left"><thead className="bg-[#e8f5d0] text-sm uppercase tracking-wide text-[#355b12]"><tr><th className="px-6 py-5 font-black">Order quantity</th><th className="px-6 py-5 font-black">Planning range</th><th className="px-6 py-5 font-black">Typical route</th></tr></thead><tbody className="divide-y divide-slate-200 text-slate-700">{priceRanges.map(([quantity, price, route]) => <tr key={quantity}><td className="px-6 py-5 font-black text-[#0c1713]">{quantity}</td><td className="px-6 py-5 font-bold">{price}</td><td className="px-6 py-5">{route}</td></tr>)}</tbody></table>
            </div>
          </section>

          <section className="mt-16 scroll-mt-24" id="cost-factors">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Pricing factors</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">What affects custom grip sock cost?</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[['Order quantity and MOQ', 'Larger quantities can reduce unit cost because production setup and material preparation are shared across more pairs. Selected standard styles can start from 50 pairs; more complex specifications may need a different MOQ.'], ['Materials and construction', 'Cotton blends can suit comfort-led programs, while nylon, polyester and performance blends can be selected around durability, stretch and moisture management.'], ['Silicone grip design', 'Basic dots, targeted strips, custom logo grips and fuller sole coverage each involve different materials, artwork and application requirements.'], ['Branding and packaging', 'Jacquard details, labels, colorways, individual bags, header cards and retail packaging can add production steps and affect the final quote.']].map(([title, text]) => <article key={title} className="rounded-2xl border border-slate-200 bg-[#f7f8f6] p-7"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p></article>)}
            </div>
            <div className="mt-8 rounded-2xl border border-[#dbe9bf] bg-[#f4fbe8] p-7"><h3 className="text-xl font-black">Need a clear MOQ route?</h3><p className="mt-3 leading-relaxed text-slate-700">Review what changes the minimum order before choosing materials, grip coverage and packaging.</p><Link href="/sports-socks-moq-guide" className="mt-5 inline-flex font-black text-[#234812] underline underline-offset-4">Read the Sports Socks MOQ Guide</Link></div>
          </section>

          <section className="mt-16 scroll-mt-24" id="production">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Factory process</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">How custom grip socks are made</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">The production route helps explain why a clear brief matters before a quotation and sample plan are confirmed.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">{processSteps.map(([title, text, image]) => <figure key={title} className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6]"><Image src={`${assetPath}/${image}`} alt={`${title} for custom grip sock production`} width={900} height={600} className="h-auto w-full object-contain" /><figcaption className="bg-white p-6"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p></figcaption></figure>)}</div>
          </section>

          <section className="mt-16 scroll-mt-24" id="examples">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Project examples</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">How project scope can affect price planning</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2"><article className="rounded-2xl border border-slate-200 bg-[#f7f8f6] p-7"><h3 className="text-xl font-black">Pilates studio private-label socks</h3><p className="mt-3 leading-relaxed text-slate-600">A 500-pair program with a custom logo, silicone grip and basic packaging can fall within the mid-volume planning range, subject to materials and artwork.</p><Link href="/yoga-pilates-grip-socks-supplier" className="mt-5 inline-flex font-black text-[#234812] underline underline-offset-4">Explore studio grip socks</Link></article><article className="rounded-2xl border border-slate-200 bg-[#f7f8f6] p-7"><h3 className="text-xl font-black">Football club grip socks</h3><p className="mt-3 leading-relaxed text-slate-600">A 1,000-pair project with team colors and a custom grip pattern is planned differently from a smaller launch, particularly when size splits and packaging are added.</p><Link href="/football-socks-manufacturer" className="mt-5 inline-flex font-black text-[#234812] underline underline-offset-4">Explore football sock options</Link></article></div>
          </section>

          <section className="mt-16 rounded-3xl bg-[#0c1713] p-8 text-white md:p-12"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Lower-cost planning</p><h2 className="mt-3 text-3xl font-black md:text-4xl">How to keep a first grip sock order practical</h2><ul className="mt-6 space-y-3 text-slate-300"><li>Start with one focused base style and a clear use case.</li><li>Prioritize the logo, color, grip coverage or packaging details that matter most.</li><li>Share quantity by design and colorway so the production route can be evaluated accurately.</li><li>Review the sample plan and final quotation before bulk approval.</li></ul></section>

          <section className="mt-16 scroll-mt-24" id="faq"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Questions about custom grip sock pricing</h2><div className="mt-8 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{answer}</p></details>)}</div></section>

          <section className="mt-16 rounded-3xl bg-[#e8f5d0] p-8 text-center md:p-12"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Get a project-specific answer</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Tell us your grip sock idea and target quantity</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">Share the intended use, logo, colors, quantity, grip design and packaging needs. We will recommend a practical MOQ and quotation direction for your project.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Link href="/#inquiry" className="inline-flex items-center justify-center rounded-xl bg-[#39a91f] px-7 py-4 font-black text-white transition-colors hover:bg-[#2f8b19]">Request Pricing Advice</Link><Link href="/custom-grip-socks" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-7 py-4 font-black text-[#0c1713] transition-colors hover:bg-white">Explore Custom Grip Socks</Link></div></section>
        </div>
      </article>
    </main>
  );
}

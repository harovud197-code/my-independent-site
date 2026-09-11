import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';
const pagePath = '/blog/50-vs-100-vs-500-custom-socks-moq';
const pageUrl = `${siteUrl}${pagePath}`;
const imageBase = '/assets/blog/50-vs-100-vs-500-custom-socks-moq';

const faqs = [
  ['What is the minimum order quantity for custom socks?', 'There is no universal custom socks MOQ. It depends on the manufacturer, sock construction, design, color count, sizes, materials, grip requirements and packaging. Confirm whether the stated MOQ applies per design, per color or to the total order.'],
  ['Can I order only 50 pairs of custom socks?', 'Some suppliers support very small production runs, while others do not. Fifty pairs is generally more suitable for testing, small teams, events or early product validation. Complex custom products may require higher quantities.'],
  ['Is 100 pairs enough to start a sock brand?', 'For a focused first launch, 100 pairs can be practical when you limit designs, colors and sizes. It gives you enough stock to collect real sales data without committing to excessive inventory.'],
  ['Is 500 pairs cheaper per pair than 100 pairs?', 'In many manufacturing situations, larger quantities improve production efficiency because setup and other fixed costs are distributed across more units. Actual pricing still depends on the product specification, materials, packaging and supplier.'],
  ['Does custom packaging have a separate MOQ?', 'It can. Printed cards, boxes, labels and other packaging components may have their own supplier minimums, so packaging should be discussed at the quotation stage.'],
];

const decisionRows = [
  ['Inventory risk', 'Lowest', 'Low–moderate', 'Higher'],
  ['Upfront investment', 'Lowest', 'Moderate', 'Higher'],
  ['Cost per pair', 'Usually highest', 'Better', 'Usually more efficient'],
  ['SKU flexibility', 'Limited', 'Moderate', 'Better'],
  ['Best for market testing', 'Excellent', 'Excellent', 'Less suitable'],
  ['Best for commercial launch', 'Limited', 'Strong', 'Strong'],
  ['Best for established demand', 'Weak', 'Moderate', 'Strong'],
  ['Best for scaling', 'Weak', 'Moderate', 'Strong'],
];

export const metadata: Metadata = {
  title: '50 vs 100 vs 500 Pairs Custom Socks MOQ | PeakMotion',
  description: 'Should your sock brand order 50, 100 or 500 pairs? Compare custom socks MOQ, unit cost, inventory risk, SKU planning and margins before placing your order.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '50 vs 100 vs 500 Pairs MOQ: Which Order Size Is Right for Your Sock Brand?',
    description: 'Compare custom socks MOQ, unit cost, inventory risk and SKU planning before placing your first or next order.',
    url: pageUrl,
    siteName: 'PeakMotion Socks',
    type: 'article',
    images: [{ url: `${siteUrl}${imageBase}/50-100-500-pairs-custom-socks-moq.png`, width: 1672, height: 941, alt: '50, 100 and 500 pairs custom socks MOQ comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '50 vs 100 vs 500 Pairs Custom Socks MOQ | PeakMotion',
    description: 'Compare custom socks MOQ, inventory risk and unit economics before placing your order.',
    images: [`${siteUrl}${imageBase}/50-100-500-pairs-custom-socks-moq.png`],
  },
};

function ArticleImage({ src, alt, caption, priority = false }: { src: string; alt: string; caption: string; priority?: boolean }) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6] shadow-[0_10px_30px_rgba(12,23,19,0.06)]">
      <Image src={`${imageBase}/${src}`} alt={alt} width={1672} height={1200} priority={priority} sizes="(max-width: 1024px) 100vw, 900px" className="h-auto w-full object-contain" />
      <figcaption className="border-t border-slate-200 bg-white px-5 py-4 text-sm font-semibold leading-relaxed text-slate-600">{caption}</figcaption>
    </figure>
  );
}

function BulletList({ items }: { items: string[] }) {
  return <ul className="mt-5 list-disc space-y-2 pl-6 leading-relaxed text-slate-600 marker:text-[#679a20]">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function CustomSocksMoqOrderSizePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#article`,
        headline: '50 vs 100 vs 500 Pairs MOQ: Which Order Size Is Right for Your Sock Brand?',
        description: metadata.description,
        image: `${siteUrl}${imageBase}/50-100-500-pairs-custom-socks-moq.png`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
        author: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
        datePublished: '2026-09-10',
        dateModified: '2026-09-10',
        keywords: ['custom socks MOQ', 'custom sock minimum order', 'low MOQ custom socks', 'private label socks MOQ'],
      },
      { '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]" data-content-version="2026-09-10-50-100-500-custom-socks-moq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <article>
        <header className="bg-[#07120c] px-5 py-16 text-white md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-300"><Link href="/" className="hover:text-[#b4ff2b]">Home</Link><span className="mx-2">/</span><Link href="/blog" className="hover:text-[#b4ff2b]">Blog</Link><span className="mx-2">/</span><span>MOQ Planning</span></nav>
            <p className="mt-10 text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">MOQ &amp; Pricing</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-6xl">50 vs 100 vs 500 Pairs MOQ: Which Order Size Is Right for Your Sock Brand?</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">Compare custom socks MOQ, unit cost, inventory exposure and SKU planning to choose a production quantity that fits your current demand confidence.</p>
            <p className="mt-8 text-sm font-bold uppercase tracking-wider text-slate-400">PeakMotion Editorial Team · 12 min read</p>
          </div>
        </header>

        <div className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-5xl">
            <ArticleImage src="50-100-500-pairs-custom-socks-moq.png" alt="Comparison of 50, 100 and 500 pair custom sock order quantities" caption="The best custom socks MOQ depends on your stage, product complexity, cash flow and confidence in demand." priority />
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-slate-700">If you are starting a sock brand, one of the first production decisions is not only which manufacturer to choose, but how many pairs to order for the first run. Should you start with 50 pairs to reduce risk, use 100 pairs for a proper launch, or move to 500 pairs for stronger unit economics?</p>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">There is no single custom socks MOQ that suits every project. The right order size depends on your business stage, designs, size range, packaging, sales channel, target retail price and how confident you are that the product will sell.</p>

            <section className="mt-16" aria-labelledby="quick-comparison">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Quick comparison</p>
              <h2 id="quick-comparison" className="mt-3 text-3xl font-black md:text-4xl">50 vs 100 vs 500 pairs at a glance</h2>
              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[660px] border-collapse text-left"><thead className="bg-[#0c1713] text-white"><tr><th className="px-5 py-4 text-sm font-black">Order size</th><th className="px-5 py-4 text-sm font-black">Best for</th><th className="px-5 py-4 text-sm font-black">Main advantage</th><th className="px-5 py-4 text-sm font-black">Main limitation</th></tr></thead><tbody className="text-slate-600"><tr className="border-t border-slate-200"><th className="px-5 py-4 font-black text-[#0c1713]">50 pairs</th><td className="px-5 py-4">Product testing, samples, very small launches</td><td className="px-5 py-4">Lowest inventory risk</td><td className="px-5 py-4">Higher unit cost and fewer customization options</td></tr><tr className="border-t border-slate-200 bg-[#f7f8f6]"><th className="px-5 py-4 font-black text-[#0c1713]">100 pairs</th><td className="px-5 py-4">New brands and first commercial launches</td><td className="px-5 py-4">Balance between risk and customization</td><td className="px-5 py-4">Limited economies of scale</td></tr><tr className="border-t border-slate-200"><th className="px-5 py-4 font-black text-[#0c1713]">500 pairs</th><td className="px-5 py-4">Established products, clubs, studios, retailers and growing brands</td><td className="px-5 py-4">Better unit economics and production efficiency</td><td className="px-5 py-4">Higher upfront investment and inventory risk</td></tr></tbody></table></div>
              <p className="mt-6 leading-relaxed text-slate-600">Treat these quantities as planning examples, not universal factory rules. A manufacturer may calculate MOQ per order, design, color, size, yarn requirement, grip artwork or packaging type. Five hundred total pairs across ten designs is not the same production situation as 500 pairs of one design.</p>
            </section>

            <section className="mt-16" aria-labelledby="moq-applies-to">
              <h2 id="moq-applies-to" className="text-3xl font-black md:text-4xl">What does custom socks MOQ actually apply to?</h2>
              <p className="mt-5 leading-relaxed text-slate-600">When a buyer asks “What is your MOQ?”, the more useful follow-up is: “Is the MOQ per order, per design, per color or per size?” A project with two designs, two colors and three sizes creates many SKU variations, even when the total quantity looks substantial.</p>
              <BulletList items={['Total order quantity', 'Quantity per design, color and size', 'Yarn and knitting setup requirements', 'Grip artwork or silicone application', 'Packaging type and minimums']} />
              <ArticleImage src="custom-socks-moq-size-color-split-1.png" alt="Custom sock sizes and colors divided across multiple SKUs" caption="The same total quantity can produce very different results once it is divided between designs, colors and sizes." />
            </section>

            <section className="mt-16" aria-labelledby="fifty-pairs">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Option 1</p>
              <h2 id="fifty-pairs" className="mt-3 text-3xl font-black md:text-4xl">Is 50 pairs enough for custom socks?</h2>
              <p className="mt-5 leading-relaxed text-slate-600">A 50-pair order keeps the financial commitment low. For startups, creators, small teams or studios, it can be a sensible test quantity. However, it is usually better viewed as validation inventory than an ideal bulk manufacturing quantity.</p>
              <ArticleImage src="50-pair-custom-socks-small-order.png" alt="Small 50 pair custom sock order for product testing" caption="A small run can help validate product appeal before you hold more inventory." />
              <h3 className="mt-9 text-2xl font-black">When 50 pairs can make sense</h3>
              <BulletList items={['Testing a completely new product idea', 'Creating merchandise for a small community or event', 'Launching through pre-orders', 'Making samples for photographers, athletes or influencers', 'Evaluating a supplier before scaling']} />
              <h3 className="mt-9 text-2xl font-black">The limitation of ordering only 50 pairs</h3>
              <p className="mt-4 leading-relaxed text-slate-600">Artwork review, knitting programming, yarn preparation, color setup, sizing, grip artwork, labels, packaging and quality control can require work regardless of quantity. Those fixed activities are spread across fewer pairs, so the cost per pair is often higher. The quantity also fragments quickly: three sizes and two colors leave only around eight pairs per SKU.</p>
            </section>

            <section className="mt-16" aria-labelledby="hundred-pairs">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Option 2</p>
              <h2 id="hundred-pairs" className="mt-3 text-3xl font-black md:text-4xl">Is 100 pairs a good MOQ for a new sock brand?</h2>
              <p className="mt-5 leading-relaxed text-slate-600">For many early-stage brands, 100 pairs is a more practical testing point. It remains a controlled inventory commitment while allowing a commercially realistic launch, especially when you focus on one core design, limited colors and a simple size structure.</p>
              <ArticleImage src="100-pair-custom-socks-brand-order.png" alt="One hundred pair custom sock order prepared for a new brand launch" caption="A focused 100-pair order can give a new brand enough stock to measure commercial performance." />
              <BulletList items={['Launching your first branded sock', 'Testing Shopify or Amazon demand', 'Selling through a fitness studio or small football academy', 'Building a crowdfunding product', 'Moving beyond samples into retail sales']} />
              <p className="mt-6 leading-relaxed text-slate-600">A Pilates studio, for example, could start with one black crew grip sock in S/M and M/L, with 50 pairs of each. The first run can answer real questions about size demand, retail price, sell-through and whether the next order should be 200, 300 or 500 pairs.</p>
            </section>

            <section className="mt-16" aria-labelledby="five-hundred-pairs">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Option 3</p>
              <h2 id="five-hundred-pairs" className="mt-3 text-3xl font-black md:text-4xl">When does a 500-pair MOQ make more sense?</h2>
              <p className="mt-5 leading-relaxed text-slate-600">Once you are confident in the product, 500 pairs can change the economics. Setup, material handling, packaging and quality-control costs are usually spread across more units, which can improve landed cost per pair and make retail margin more attractive.</p>
              <ArticleImage src="500-pair-custom-socks-bulk-order.png" alt="Five hundred pair custom sock bulk order ready for production" caption="A larger run can make sense after demand, product specifications and size splits are proven." />
              <h3 className="mt-9 text-2xl font-black">Who should consider 500 pairs?</h3>
              <BulletList items={['Established sock brands, retailers and distributors', 'Football clubs, sports academies and studio chains', 'Event or corporate merchandise programs', 'Brands with proven pre-orders or repeat sales', 'Products that have already sold successfully']} />
              <p className="mt-6 leading-relaxed text-slate-600">The key word is proven. A 500-pair order is not automatically cheaper overall because total investment is higher. It can be more efficient per unit, but the product still needs to sell.</p>
              <ArticleImage src="custom-socks-bulk-order-ready-to-ship-1.png" alt="Finished custom socks packed for a bulk order shipment" caption="Repeat bulk orders work best when the approved product is supported by real sales data or committed demand." />
            </section>

            <section className="mt-16 rounded-3xl bg-[#f7f8f6] p-7 md:p-10" aria-labelledby="margin-title">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Unit economics</p>
              <h2 id="margin-title" className="mt-3 text-3xl font-black md:text-4xl">Which quantity gives the best profit margin?</h2>
              <p className="mt-5 leading-relaxed text-slate-600">Compare landed cost per pair with expected selling price, not only the total order value.</p>
              <div className="mt-6 rounded-2xl bg-white p-6 font-black text-[#0c1713] shadow-sm"><p>Gross Profit Per Pair = Selling Price − Landed Cost Per Pair</p><p className="mt-3">Gross Margin % = Gross Profit ÷ Selling Price × 100</p></div>
              <p className="mt-6 leading-relaxed text-slate-600">The lowest unit price is not always the best decision. A theoretical 70% gross margin is not attractive if hundreds of pairs sit unsold for two years. Balance unit cost, inventory risk, demand confidence, cash flow and expected sell-through.</p>
            </section>

            <section className="mt-16" aria-labelledby="sku-title">
              <h2 id="sku-title" className="text-3xl font-black md:text-4xl">The hidden problem: too many designs at a low MOQ</h2>
              <p className="mt-5 leading-relaxed text-slate-600">Four colors, three designs and three sizes create 36 SKUs. Divide a total order of 500 pairs by 36 and you have approximately 14 pairs per SKU. Some sizes may sell out immediately while other combinations barely move.</p>
              <ArticleImage src="custom-socks-moq-size-color-split-2.png" alt="SKU planning illustration for custom socks MOQ size and color combinations" caption="Start narrow: one or two designs, one or two core colors and essential sizes give early inventory a clearer job to do." />
              <p className="leading-relaxed text-slate-600">For a new brand, start with one or two designs, one or two core colors and essential sizes. Use real sales data to decide which combinations deserve expansion.</p>
            </section>

            <section className="mt-16" aria-labelledby="quality-title">
              <h2 id="quality-title" className="text-3xl font-black md:text-4xl">Does a higher custom socks MOQ mean better quality?</h2>
              <p className="mt-5 leading-relaxed text-slate-600">Not necessarily. MOQ and quality are different things. A factory may require a quantity because of machine efficiency, yarn sourcing, dyeing requirements, packaging minimums, production scheduling or setup costs. Evaluate a manufacturer using sample quality, yarn selection, fit consistency, logo execution, knitting quality, cushioning, compression, grip performance, inspection and repeat-production consistency.</p>
              <p className="mt-5 leading-relaxed text-slate-600">Also keep sample quantity separate from bulk MOQ. A supplier may make one or several samples for development while requiring a higher quantity for commercial production. The sample lets you review construction, sizing, yarn, color, logo, grip and packaging before the product moves to bulk manufacturing.</p>
            </section>

            <section className="mt-16" aria-labelledby="packaging-title">
              <h2 id="packaging-title" className="text-3xl font-black md:text-4xl">Custom socks MOQ, packaging and shipping</h2>
              <p className="mt-5 leading-relaxed text-slate-600">Packaging can change MOQ economics more than many new brands expect. Printed header cards, paper bands, hang tags, barcode labels, custom poly bags and retail boxes can each have their own production minimums. Discuss packaging before you confirm the final sock quantity.</p>
              <ArticleImage src="custom-socks-private-label-packaging-options-1.png" alt="Private label sock packaging options for different order quantities" caption="A small sock order and a custom packaging order may have different minimum quantities." />
              <p className="leading-relaxed text-slate-600">For a lower-volume launch, standard packaging with a custom sticker, simple paper band or small-batch label may offer more flexibility. Freight is also part of the decision: a very small order can have a surprisingly high shipping cost per pair. Compare total landed cost, including product, sampling, packaging, shipping, duties, taxes and local delivery.</p>
              <ArticleImage src="custom-socks-private-label-packaging-options-2.png" alt="Retail-ready custom sock packaging examples" caption="Start with a practical presentation, then expand packaging customization as order volume grows." />
            </section>

            <section className="mt-16" aria-labelledby="choose-title">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Decision framework</p>
              <h2 id="choose-title" className="mt-3 text-3xl font-black md:text-4xl">How much should your first custom sock order be?</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3"><div className="rounded-2xl border border-slate-200 p-6"><h3 className="text-2xl font-black">Choose around 50 pairs if</h3><BulletList items={['You are validating an idea', 'You have almost no sales history', 'You want minimal inventory exposure', 'Unit cost matters less than risk reduction']} /><p className="mt-6 font-black text-[#387116]">Validation inventory</p></div><div className="rounded-2xl border border-slate-200 p-6"><h3 className="text-2xl font-black">Choose around 100 pairs if</h3><BulletList items={['You are ready for a real first launch', 'You have a small audience, studio, club or community', 'You need limited size options', 'You want a risk–economics balance']} /><p className="mt-6 font-black text-[#387116]">Launch inventory</p></div><div className="rounded-2xl border border-slate-200 p-6"><h3 className="text-2xl font-black">Choose around 500 pairs if</h3><BulletList items={['You have customers or pre-orders', 'Your first order sold successfully', 'You know your best-selling designs', 'You expect repeat sales']} /><p className="mt-6 font-black text-[#387116]">Scaling inventory</p></div></div>
            </section>

            <section className="mt-16" aria-labelledby="final-table-title">
              <h2 id="final-table-title" className="text-3xl font-black md:text-4xl">50 vs 100 vs 500 pairs: final decision table</h2>
              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[620px] border-collapse text-left"><thead className="bg-[#0c1713] text-white"><tr><th className="px-5 py-4 text-sm font-black">Question</th><th className="px-5 py-4 text-sm font-black">50 pairs</th><th className="px-5 py-4 text-sm font-black">100 pairs</th><th className="px-5 py-4 text-sm font-black">500 pairs</th></tr></thead><tbody>{decisionRows.map(([question, fifty, hundred, fiveHundred], index) => <tr key={question} className={`border-t border-slate-200 ${index % 2 ? 'bg-[#f7f8f6]' : 'bg-white'}`}><th scope="row" className="px-5 py-4 font-black text-[#0c1713]">{question}</th><td className="px-5 py-4 text-slate-600">{fifty}</td><td className="px-5 py-4 text-slate-600">{hundred}</td><td className="px-5 py-4 text-slate-600">{fiveHundred}</td></tr>)}</tbody></table></div>
              <p className="mt-6 leading-relaxed text-slate-600">The right quantity is not necessarily the largest quantity you can afford. It is the quantity that matches your current level of demand confidence.</p>
            </section>

            <section className="mt-16" aria-labelledby="quote-title">
              <h2 id="quote-title" className="text-3xl font-black md:text-4xl">Ask for a clearer quote, not only the lowest MOQ</h2>
              <p className="mt-5 leading-relaxed text-slate-600">A better supplier conversation is: “We are launching a custom sports sock brand. Our first order may be between 100 and 500 pairs. Could you quote different quantity levels and explain how the unit cost changes?”</p>
              <BulletList items={['Sock type, logo, artwork and reference images', 'Quantities at 100, 300 and 500 pairs', 'Size range and expected split', 'Material and performance requirements', 'Packaging options and target delivery date']} />
              <ArticleImage src="custom-socks-bulk-order-ready-to-ship-2.png" alt="Custom sock bulk order packed and ready to ship" caption="A complete brief gives the factory a clearer basis for a practical MOQ and quotation." />
            </section>

            <section className="mt-16" aria-labelledby="faq-title">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">FAQ</p>
              <h2 id="faq-title" className="mt-3 text-3xl font-black md:text-4xl">Frequently asked questions about custom socks MOQ</h2>
              <div className="mt-8 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-black"><span>{question}</span><span aria-hidden="true" className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-5 py-4 leading-relaxed text-slate-600">{answer}</p></details>)}</div>
            </section>
          </div>
        </div>

        <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Plan with the right quantity</p><h2 className="mt-3 max-w-4xl text-3xl font-black leading-tight md:text-5xl">Choose a custom socks MOQ that fits your business stage.</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Share your logo or artwork, sock reference, quantity, size range, target market, packaging needs and delivery destination. PeakMotion can help you compare the production route before you commit to an order.</p><div className="mt-9 grid gap-4 sm:grid-cols-3"><Link href="/private-label-sports-socks" className="rounded-xl border border-white/20 bg-white/5 p-5 font-black !text-white transition hover:border-[#b4ff2b] hover:bg-white/10">Explore Private Label Sports Socks</Link><Link href="/blog/custom-socks-lead-time" className="rounded-xl border border-white/20 bg-white/5 p-5 font-black !text-white transition hover:border-[#b4ff2b] hover:bg-white/10">Learn About Sampling &amp; Production</Link><Link href="/contact" className="rounded-xl bg-[#b4ff2b] p-5 font-black !text-[#0c1713] transition hover:bg-[#a3e627]">Request a Custom Sock Quote</Link></div></div>
        </section>
      </article>
    </main>
  );
}

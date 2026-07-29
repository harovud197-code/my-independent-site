import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/blog/custom-socks-moq-explained`;
const imageBase = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog/custom-socks-moq';

const moqRoutes = [
  {
    route: 'Selected standard style',
    quantity: 'From 50 pairs',
    description: 'A practical route when you select an available standard style and keep the brief straightforward.',
  },
  {
    route: 'Logo-led standard program',
    quantity: 'Often 100 to 300 pairs',
    description: 'A useful starting range for a standard construction with a logo, chosen colors or a focused size mix.',
  },
  {
    route: 'Bespoke construction or packaging',
    quantity: 'Typically 500+ pairs',
    description: 'More development, custom yarns, complex knitting or retail packaging usually require a higher quantity.',
  },
] as const;

const faqs = [
  {
    question: 'What is the MOQ for custom socks?',
    answer: 'MOQ depends on the sock construction and how much is being customized. Selected standard styles can start from 50 pairs. A logo-led standard program is often 100 to 300 pairs, while bespoke construction or custom packaging typically starts at 500 pairs or more.',
  },
  {
    question: 'Can I order custom socks in several sizes?',
    answer: 'Yes. Share the target wearer groups and size breakdown early. The workable split depends on the chosen style, total quantity and packaging plan.',
  },
  {
    question: 'Does a custom logo increase the MOQ?',
    answer: 'It can. A logo, color change, custom knit pattern or silicone grip layout may change production setup. We review the artwork and construction together before confirming the practical MOQ.',
  },
  {
    question: 'How can a new brand keep the first order practical?',
    answer: 'Start with one proven style, a focused color range and a clear logo file. This helps control development work, sample decisions and the first production quantity.',
  },
];

export const metadata: Metadata = {
  title: 'Custom Socks MOQ Explained | PeakMotion Socks',
  description: 'Understand what affects custom socks MOQ, compare practical order routes and prepare a clearer production brief for your first sock collection.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Custom Socks MOQ Explained: What Affects Your Minimum Order?',
    description: 'A practical guide to custom sock minimum order quantities, production options and first-order planning.',
    url: pageUrl,
    siteName: 'PeakMotion Socks',
    type: 'article',
    images: [{ url: `${imageBase}/custom-socks-moq-explained.png`, width: 1491, height: 1055, alt: 'Custom socks MOQ planning guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Socks MOQ Explained | PeakMotion Socks',
    description: 'A practical guide to custom sock minimum order quantities and first-order planning.',
    images: [`${imageBase}/custom-socks-moq-explained.png`],
  },
};

export default function CustomSocksMoqExplainedPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#article`,
        headline: 'Custom Socks MOQ Explained: Everything You Need to Know Before Starting Your Own Sock Brand',
        description: metadata.description,
        image: `${imageBase}/custom-socks-moq-explained.png`,
        datePublished: '2026-07-29T00:00:00+08:00',
        dateModified: '2026-07-29T00:00:00+08:00',
        mainEntityOfPage: pageUrl,
        author: { '@type': 'Organization', name: 'PeakMotion Socks' },
        publisher: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="border-b border-slate-200 bg-[#f7f8f6] px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#679a20]">Home</Link><span className="px-2">/</span><Link href="/blog" className="hover:text-[#679a20]">Blog</Link><span className="px-2">/</span><span>Custom Socks MOQ</span>
          </nav>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">MOQ and Production Planning</p>
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Custom Socks MOQ Explained: What to Know Before Your First Order</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">MOQ is not one fixed number. It changes with the style, logo method, colors, materials, size mix and packaging you need. Use this guide to choose a practical route before requesting a quote.</p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500"><span>5 min read</span><span aria-hidden="true">|</span><span>Updated July 29, 2026</span></div>
        </div>
      </section>

      <article className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <Image src={`${imageBase}/custom-socks-moq-explained.png`} alt="Custom socks design, logo, material and size planning overview" width={1491} height={1055} priority className="h-auto w-full rounded-2xl border border-slate-200 bg-[#f7f8f6] object-contain" />

          <div className="mt-10 rounded-2xl border border-slate-200 bg-[#f7f8f6] p-6 md:p-8">
            <p className="font-black uppercase tracking-wide text-[#679a20]">In this guide</p>
            <div className="mt-4 grid gap-3 text-sm font-bold sm:grid-cols-2">
              <a href="#meaning" className="hover:text-[#679a20]">What MOQ means for custom socks</a>
              <a href="#factors" className="hover:text-[#679a20]">What affects your MOQ</a>
              <a href="#types" className="hover:text-[#679a20]">Choosing the right sock route</a>
              <a href="#process" className="hover:text-[#679a20]">How production planning works</a>
            </div>
          </div>

          <section id="meaning" className="mt-14 scroll-mt-24">
            <h2 className="text-3xl font-black md:text-4xl">What does MOQ mean for custom socks?</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">MOQ means minimum order quantity: the smallest production run that is practical for a specific sock brief. It is shaped by machine setup, yarn preparation, knitting, finishing, inspection and packing. The right question is not only &quot;What is your MOQ?&quot; but also &quot;Which production route fits my idea and budget?&quot;</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {moqRoutes.map((item) => (
                <div key={item.route} className="rounded-2xl border border-slate-200 p-6">
                  <p className="text-sm font-black uppercase tracking-wide text-[#679a20]">{item.route}</p>
                  <p className="mt-3 text-2xl font-black">{item.quantity}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">These are planning ranges, not a universal promise. Confirm the final MOQ after the product style, artwork, colors, sizes and packaging are reviewed.</p>
          </section>

          <section id="factors" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-black md:text-4xl">What factors affect custom socks MOQ?</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Every added variable can affect setup time, material planning or packing workflow. A clear brief lets the factory recommend the lowest practical route rather than guessing from a single quantity target.</p>
            <Image src={`${imageBase}/factors-that-affect-custom-socks-moq.png`} alt="Factors that affect a custom socks minimum order quantity" width={1491} height={1055} className="mt-8 h-auto w-full rounded-2xl border border-slate-200 bg-[#f7f8f6] object-contain" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['Sock construction', 'Crew, knee-high, grip, compression or technical sport socks use different knitting and finishing requirements.'],
                ['Colors and artwork', 'More knit colors, all-over patterns and complex logo placement can change the production setup.'],
                ['Materials and performance features', 'Yarn blends, cushioning, mesh zones, arch support and silicone grip all influence the product brief.'],
                ['Sizing and packaging', 'A wider size split, individual bags, labels, barcodes or custom boxes should be planned from the beginning.'],
              ].map(([title, description]) => <div key={title} className="rounded-xl border border-slate-200 p-5"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></div>)}
            </div>
          </section>

          <section id="types" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-black md:text-4xl">Choose the right custom sock route</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">The best route depends on how differentiated your first collection needs to be. Starting with a proven style can help a new brand move faster; a fully bespoke program gives more control when your volume and launch plan are ready.</p>
            <Image src={`${imageBase}/different-types-of-custom-socks.png`} alt="Different custom sock types and customization choices" width={1491} height={1055} className="mt-8 h-auto w-full rounded-2xl border border-slate-200 bg-[#f7f8f6] object-contain" />
            <div className="mt-8 space-y-5">
              <div className="rounded-xl bg-[#f7f8f6] p-6"><h3 className="text-xl font-black">Selected standard style</h3><p className="mt-2 leading-relaxed text-slate-600">Choose an available style, then focus your brief on the color, size breakdown and packaging. This is the clearest route for quantities from 50 pairs.</p></div>
              <div className="rounded-xl bg-[#f7f8f6] p-6"><h3 className="text-xl font-black">Standard construction with your logo</h3><p className="mt-2 leading-relaxed text-slate-600">Use a proven sock construction with a customized knit logo, color story or grip layout. This can suit brands and teams preparing a focused first program.</p></div>
              <div className="rounded-xl bg-[#f7f8f6] p-6"><h3 className="text-xl font-black">Bespoke product development</h3><p className="mt-2 leading-relaxed text-slate-600">Develop a more specific construction, material mix, technical feature or retail pack when the project needs a distinctive product and has the volume to support it.</p></div>
            </div>
          </section>

          <section id="process" className="mt-16 scroll-mt-24">
            <h2 className="text-3xl font-black md:text-4xl">How custom sock production is planned</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">A good order starts with product decisions that can be confirmed before bulk production. Share your use case, preferred sock type, logo, colors, expected size split and packaging needs. The factory can then recommend the production route, sample process and practical MOQ.</p>
            <Image src={`${imageBase}/custom-socks-production-process.png`} alt="Custom socks production process from design brief to bulk shipment" width={1491} height={1055} className="mt-8 h-auto w-full rounded-2xl border border-slate-200 bg-[#f7f8f6] object-contain" />
            <ol className="mt-8 space-y-4 border-l-2 border-[#b4ff2b] pl-6 text-slate-600">
              <li><strong className="text-[#0c1713]">1. Define the product:</strong> Confirm activity, height, construction, materials and performance features.</li>
              <li><strong className="text-[#0c1713]">2. Share design files:</strong> Send your logo, color references and any packaging ideas.</li>
              <li><strong className="text-[#0c1713]">3. Review the route:</strong> Confirm the practical MOQ, sample scope, size split and lead time.</li>
              <li><strong className="text-[#0c1713]">4. Approve before bulk:</strong> Review the sample and final production details before the bulk order begins.</li>
            </ol>
          </section>

          <section className="mt-16 rounded-2xl bg-[#0c1713] p-8 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Plan your first custom sock order</p>
            <h2 className="mt-3 text-3xl font-black">Need help choosing a practical MOQ route?</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">Start with your sock type, logo, colors, expected quantity and packaging needs. We can recommend a suitable route before you commit to a full production brief.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/sports-socks-moq-guide" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 font-black uppercase tracking-wide !text-[#0c1713] hover:bg-[#a3e627]">View MOQ Guide</Link>
              <Link href="/products" className="inline-flex items-center justify-center rounded-xl border border-white/70 px-6 py-4 font-black uppercase tracking-wide !text-white hover:bg-white hover:!text-[#0c1713]">Browse Sock Styles</Link>
            </div>
          </section>

          <section className="mt-16">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">FAQ</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Custom socks MOQ questions</h2>
            <div className="mt-7 space-y-4">
              {faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-slate-200"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-black"><span>{faq.question}</span><span aria-hidden="true" className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-5 py-4 leading-relaxed text-slate-600">{faq.answer}</p></details>)}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

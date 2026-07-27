import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';

const faqs = [
  {
    question: 'What is the minimum order quantity for custom sports socks?',
    answer: 'Selected standard styles can start from 50 pairs. The final MOQ depends on the sock construction, yarn, colorways, logo method, silicone grip layout and packaging required for your project.',
  },
  {
    question: 'Can I add my logo to a low-MOQ sports sock order?',
    answer: 'Yes. Send your logo, preferred sock style and target quantity. We will recommend the most suitable branding method and confirm whether your selected standard style can use the 50-pair starting MOQ.',
  },
  {
    question: 'Why does a fully custom sock usually need a higher MOQ?',
    answer: 'A fully custom project can require dedicated yarn preparation, knitting setup, color management, sampling and packaging work. More customization usually means more setup, so the workable MOQ is confirmed after reviewing the brief.',
  },
  {
    question: 'Can I order samples before bulk production?',
    answer: 'Yes. We can review your artwork and requirements, then confirm the suitable sampling route before bulk production approval.',
  },
];

export const metadata: Metadata = {
  title: 'Sports Socks MOQ Guide | Low MOQ Custom Socks | PeakMotion',
  description: 'Learn how sports socks MOQ works, when selected standard styles can start from 50 pairs, and what affects the minimum order for custom sock projects.',
  alternates: { canonical: `${siteUrl}/sports-socks-moq-guide` },
  openGraph: {
    type: 'website',
    url: `${siteUrl}/sports-socks-moq-guide`,
    title: 'Sports Socks MOQ Guide | PeakMotion Socks',
    description: 'A practical guide to low-MOQ custom sports socks, customization choices and the information needed for an accurate quote.',
  },
};

export default function SportsSocksMoqGuidePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/sports-socks-moq-guide#webpage`,
        url: `${siteUrl}/sports-socks-moq-guide`,
        name: 'Sports Socks MOQ Guide',
        description: 'A practical guide to minimum order quantities for custom sports socks.',
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#fcfdf9] text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="overflow-hidden bg-[#0c1713] px-5 py-20 text-white md:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b4e45d]">PeakMotion Socks Resource</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.04] md:text-6xl">Sports Socks MOQ Guide</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Understand what affects a custom sports sock MOQ, how to start with a smaller order and what to send us for an accurate production recommendation.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/#inquiry" className="inline-flex items-center justify-center rounded-xl bg-[#b4e45d] px-7 py-4 font-black text-[#0c1713] transition-transform hover:-translate-y-0.5">
                Get MOQ Advice for Your Project
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-4 font-black text-white transition-colors hover:border-white hover:bg-white/10">
                Browse Sports Sock Styles
              </Link>
            </div>
          </div>
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b4e45d]">Quick answer</p>
            <p className="mt-4 text-3xl font-black leading-tight md:text-4xl">MOQ from 50 pairs</p>
            <p className="mt-4 leading-relaxed text-slate-300">
              This starting point applies to selected standard styles. Custom yarns, multiple colorways, specialist grip patterns and retail packaging can require a different MOQ.
            </p>
            <Link href="#how-to-start" className="mt-6 inline-flex font-bold text-[#d6f79b] underline decoration-[#b4e45d] underline-offset-4">
              See the low-MOQ route
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">MOQ explained</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">What MOQ means for a custom sock order</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              MOQ means minimum order quantity: the smallest production quantity that can be made efficiently for a particular sock specification. It is not one fixed number for every product. The right MOQ is based on the production work your design needs.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ['Knitting setup', 'Different structures, cuff heights and compression zones can affect machine setup and production planning.'],
              ['Materials & colors', 'Special yarns and a larger color palette may need more preparation and stock management.'],
              ['Branding & packaging', 'Logo methods, silicone grip layouts, labels and retail packaging add separate production steps.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f4fbe8] px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Choose the right route</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Which MOQ route fits your project?</h2>
          <div className="mt-9 overflow-x-auto rounded-2xl border border-[#dbe9bf] bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-[#e8f5d0] text-sm uppercase tracking-wide text-[#355b12]">
                <tr>
                  <th className="px-6 py-5 font-black">Order route</th>
                  <th className="px-6 py-5 font-black">MOQ guidance</th>
                  <th className="px-6 py-5 font-black">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="px-6 py-5 font-black text-[#0c1713]">Selected standard styles</td>
                  <td className="px-6 py-5 font-bold">From 50 pairs</td>
                  <td className="px-6 py-5">Focused changes to an available style and a lean launch plan.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-black text-[#0c1713]">Semi-custom program</td>
                  <td className="px-6 py-5 font-bold">Confirmed after your brief</td>
                  <td className="px-6 py-5">Brand colors, logo application and selected packaging choices.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-black text-[#0c1713]">Fully custom OEM development</td>
                  <td className="px-6 py-5 font-bold">Confirmed per design and colorway</td>
                  <td className="px-6 py-5">New construction, specialist yarns, complex grip areas or retail-ready programs.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600">The guide is for production planning. We confirm the final MOQ only after reviewing your product requirements and artwork.</p>
        </div>
      </section>

      <section id="how-to-start" className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Low-MOQ planning</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Start small without skipping the important decisions</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">A clear, focused first order makes it easier to keep the MOQ practical and move quickly to sampling.</p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {[
              ['01', 'Choose a proven base style', 'Start with a sock profile that matches your sport, such as grip, football, running or studio socks.'],
              ['02', 'Prioritize your must-haves', 'Tell us which details are essential: logo, colors, grip coverage, material feel or packaging.'],
              ['03', 'Share quantity by design and color', 'MOQ is evaluated per production setup, so split quantities help us recommend the correct route.'],
              ['04', 'Review sample and quote details', 'Confirm the artwork, sample plan, MOQ and production schedule before bulk approval.'],
            ].map(([number, title, text]) => (
              <li key={number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-sm font-black tracking-[0.14em] text-[#679a20]">{number}</span>
                <h3 className="mt-3 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4e45d]">Start with your category</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Explore sports sock programs</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ['Custom Grip Socks', 'For football, Pilates, yoga and training programs that need reliable silicone traction.', '/custom-grip-socks'],
              ['Football Socks', 'For teams, academies and performance brands building match and training collections.', '/football-socks-manufacturer'],
              ['Custom Running Socks', 'For running, trail and activewear brands focused on comfort and technical support.', '/custom-running-socks-manufacturer'],
            ].map(([title, text, href]) => (
              <Link key={title} href={href} className="rounded-2xl border border-white/15 bg-white/5 p-7 transition-colors hover:bg-white/10">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{text}</p>
                <span className="mt-6 inline-flex font-bold text-[#d6f79b] underline decoration-[#b4e45d] underline-offset-4">Explore this program</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p>
          <h2 className="mt-3 text-center text-3xl font-black leading-tight md:text-5xl">Questions about sports socks MOQ</h2>
          <div className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group px-6 py-5">
                <summary className="cursor-pointer list-none pr-8 font-black text-[#0c1713]">{question}</summary>
                <p className="mt-3 leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8f5d0] px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Get a clear answer</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Tell us your sock idea and target quantity</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">Share your product type, logo, preferred colors, quantity by design and packaging needs. We will recommend the practical MOQ route for your project.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/#inquiry" className="inline-flex items-center justify-center rounded-xl !bg-[#39a91f] px-7 py-4 font-black !text-white shadow-[0_10px_22px_rgba(57,169,31,0.24)] transition-all hover:-translate-y-0.5 hover:!bg-[#2f8b19]">Request MOQ Advice</Link>
            <a href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20MOQ%20advice%20for%20a%20custom%20sports%20sock%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-7 py-4 font-black text-[#0c1713] transition-colors hover:bg-white">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}

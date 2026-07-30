import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FootballSocksQuoteForm from '@/components/FootballSocksQuoteForm';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/football-socks-manufacturer`;
const imageBase = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/football-socks-landing';
const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20a%20quote%20for%20custom%20football%20socks.';

const faqs = [
  {
    question: 'What is the MOQ for custom football socks?',
    answer: 'Selected standard football sock styles can start from 50 pairs. The practical MOQ depends on the construction, colors, crest method, size split and packaging requirements.',
  },
  {
    question: 'How long does the sample process take?',
    answer: 'A standard custom sample is normally planned in 5 to 7 days after the design details are confirmed. Complex constructions or artwork may require a longer review.',
  },
  {
    question: 'Can you add our club crest, colors and player numbers?',
    answer: 'Yes. We can review knitted crests, stripes, colors, player numbers and the best logo method for your selected football sock construction.',
  },
  {
    question: 'Can orders be sorted by size or team group?',
    answer: 'Yes. We can plan size breakdowns and packing by age group, player number, colorway or squad when those details are provided before production.',
  },
];

export const metadata: Metadata = {
  title: 'Custom Football Socks for Teams, Clubs & Academies | PeakMotion',
  description: 'Launch custom football socks with club logos, team colors, flexible MOQ, fast samples, size sorting and packaging for clubs, academies and football brands.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Custom Football Socks for Teams, Clubs & Academies | PeakMotion',
    description: 'Custom football socks with team colors, club crests, flexible MOQ and practical production support.',
    images: [{ url: `${imageBase}/football-hero.png`, width: 1448, height: 1086, alt: 'Custom football socks for teams, clubs and academies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Football Socks for Teams, Clubs & Academies | PeakMotion',
    description: 'Custom football socks with flexible MOQ, fast samples and club-ready production support.',
    images: [`${imageBase}/football-hero.png`],
  },
};

function Visual({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return <Image src={`${imageBase}/${src}`} alt={alt} width={1448} height={1086} priority={priority} className="h-auto w-full rounded-2xl border border-slate-200 bg-[#f7f8f6] object-contain" />;
}

export default function FootballSocksManufacturerPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Custom Football Socks for Teams, Clubs & Academies | PeakMotion',
        description: metadata.description,
        about: ['Custom football socks', 'Football club socks', 'OEM football sock production'],
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Football Socks', item: pageUrl },
        ],
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

      <section className="bg-[#f7f8f6] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500"><Link href="/" className="hover:text-[#679a20]">Home</Link><span className="px-2">/</span><span>Football Socks</span></nav>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">OEM and Private Label Football Socks</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.04] md:text-6xl">Custom Football Socks for Teams, Clubs &amp; Academies</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">Build a club-ready football sock program with your crest, team colors, size breakdown and packaging plan. We help buyers choose a practical route from sample to bulk delivery.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 font-black uppercase tracking-wide !text-[#0c1713] hover:bg-[#a3e627]">Start Your Custom Order</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-6 py-4 font-black uppercase tracking-wide hover:bg-[#0c1713] hover:text-white">Chat on WhatsApp</a></div>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-sm font-bold text-slate-600"><span><strong className="block text-lg text-[#0c1713]">From 50 pairs</strong>selected standard style</span><span><strong className="block text-lg text-[#0c1713]">5-7 days</strong>sample planning</span><span><strong className="block text-lg text-[#0c1713]">15-25 days</strong>bulk production</span></div>
            </div>
            <Visual src="football-hero-clean.png" alt="Custom football socks in club colors for teams and academies" priority />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-7 md:px-8"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 text-center sm:grid-cols-4">{[['Club identity', 'crest and colors'], ['Team sizing', 'kids to adult'], ['Order planning', 'sample to bulk'], ['Packaging', 'club or retail ready']].map(([value, label]) => <div key={value} className="border-slate-200 px-4 sm:border-r last:border-0"><strong className="block text-xl font-black md:text-2xl">{value}</strong><span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span></div>)}</div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24"><div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Club Logo and Team Identity</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Make every team sock recognizable</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Share your crest, colors, stripe direction and preferred sock height. We will review how to translate them into a practical construction for match socks, training socks or club merchandise.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{['Knitted club crest', 'Team colors and stripes', 'Player number options', 'Kids to adult size ranges'].map((item) => <span key={item} className="rounded-lg border border-slate-200 bg-[#f7f8f6] p-4 font-bold text-slate-700">{item}</span>)}</div></div><Visual src="football-club-identity.png" alt="Custom football socks with club logos and team color options" /></div></section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Flexible MOQ for Football Clubs</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Choose the order route that fits your club</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">The quantity should match the product route. Start from 50 pairs on selected standard styles, then scale with your colorways, crest method, size split and packaging needs.</p></div><div className="mt-10"><Visual src="football-moq-options.png" alt="Flexible football sock MOQ routes for samples, clubs, academies and leagues" /></div><div className="mt-8 rounded-2xl border border-[#dce8c2] bg-[#f4fbe8] p-6 text-slate-700"><strong className="text-[#234812]">Need an MOQ recommendation?</strong> Review the order quantity against the final construction before sampling. <Link href="/sports-socks-moq-guide" className="font-black text-[#234812] underline underline-offset-4">Read the MOQ Guide</Link></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Fast Production Timeline</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Keep the team order moving from brief to shipment</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">A clear design brief, approved logo files and accurate size requirements help the sample and bulk production process stay on track.</p></div><div className="mt-10"><Visual src="football-production-timeline.png" alt="Football sock production timeline from design confirmation to shipping" /></div></section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Team Order Examples</p><h2 className="mt-3 text-3xl font-black md:text-5xl">A production route for clubs, academies and repeat programs</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Whether you are planning a youth academy order, a club retail pack or a regular league supply, we can review your crest, size breakdown and delivery direction before the sample stage.</p></div><div className="mt-10"><Visual src="football-team-cases.png" alt="Football sock team order examples for academies, clubs and league teams" /></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24"><div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]"><Visual src="football-packaging-options.png" alt="Professional packaging options for custom football socks" /><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Professional Packaging Options</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Pack for clubs, teams or retail resale</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Choose simple size-labelled bags, a club gift package or barcode-ready retail packaging. We can also sort a team order by age group, size, colorway or player number.</p><div className="mt-7 space-y-3">{['Basic: practical bags with size labels', 'Club package: branded box and hang tag', 'Retail package: barcode-ready presentation'].map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-[#f7f8f6] p-4 font-bold text-slate-700">{item}</div>)}</div></div></div></section>

      <section id="quote" className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Start Your Project</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Tell us about your next football sock order</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">Send your club logo, color references, sock type, expected quantity, size breakdown and packaging needs. We will recommend a practical sample and production route.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/products/mid-calf-football-grip" className="inline-flex justify-center rounded-xl border border-white/60 px-6 py-4 font-black uppercase tracking-wide !text-white hover:bg-white hover:!text-[#0c1713]">View Football Grip Socks</Link><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 font-black uppercase tracking-wide !text-[#0c1713] hover:bg-[#a3e627]">Chat on WhatsApp</a></div></div><FootballSocksQuoteForm /></div></section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 lg:py-24"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Questions about custom football socks</h2></div><div className="mt-10 space-y-4">{faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{faq.question}</span><span aria-hidden="true" className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{faq.answer}</p></details>)}</div></section>
    </main>
  );
}

import FactoryShipmentGallery from '@/components/FactoryShipmentGallery';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MoqFramework from '@/components/MoqFramework';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/industries`;

const images = {
  football: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/football-socks-landing/football-hero-balanced.png',
  yoga: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/yoga-pilates-grip-socks-v2/hero-custom-grip-socks-v2.png',
  privateLabel: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/private-label-sports-socks/hero-private-label-socks-v2.png',
  running: '/assets/products/professional-running-athletic-socks/hero-landing-light.webp',
  footballCase: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/uk-football-brand-growth/case-snapshot.png',
  yogaCase: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/yoga-pilates-socks-development/hero-v2.png',
  privateLabelCase: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/private-label-socks-brand-launch/custom-sock-render.png',
} as const;

export const metadata: Metadata = {
  title: 'Custom Socks Solutions for Brands, Teams & Studios | PeakMotion',
  description: 'Custom socks manufacturing solutions for sports teams, yoga and Pilates studios, fitness companies and private label brands. Flexible MOQ, OEM support, sampling and retail packaging.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Custom Socks Solutions for Brands, Teams & Wellness Businesses',
    description: 'Explore custom sports socks, grip socks and private label sock manufacturing solutions for your market.',
    images: [{ url: images.privateLabel, width: 1600, height: 900, alt: 'Custom socks solutions for brands, teams and wellness businesses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Socks Solutions for Brands, Teams & Wellness Businesses',
    description: 'Custom socks manufacturing for sports teams, studios and private label brands.',
    images: [images.privateLabel],
  },
};

const industries = [
  {
    number: '01',
    title: 'Sports Teams & Clubs',
    image: images.football,
    alt: 'Custom football team socks for clubs, academies and sports organizations',
    who: ['Football clubs', 'Sports organizations', 'Team suppliers', 'Training academies'],
    needs: ['Custom team socks', 'Club logo customization', 'Player & training socks', 'Bulk production'],
    solution: 'We help sports organizations develop professional team socks with custom designs, colors and branding.',
    productHref: '/football-socks-manufacturer',
    productLabel: 'Explore Football Socks Solution',
    caseTitle: 'Football Brand Growth',
    caseText: 'See how we helped a football brand develop custom socks and scale repeat production.',
    caseHref: '/case-studies/uk-football-brand-growth',
  },
  {
    number: '02',
    title: 'Yoga & Pilates Studios',
    image: images.yoga,
    alt: 'Custom yoga and Pilates grip socks for studios and wellness brands',
    who: ['Yoga studios', 'Pilates studios', 'Wellness brands', 'Fitness instructors'],
    needs: ['Anti-slip grip socks', 'Five toe socks', 'Half toe socks', 'Studio branded products'],
    solution: 'We create comfortable and functional grip socks designed for yoga, Pilates and studio fitness markets.',
    productHref: '/yoga-pilates-grip-socks-supplier',
    productLabel: 'Explore Yoga Socks Solution',
    caseTitle: 'Yoga Pilates Socks Development',
    caseText: 'Custom product development for a growing wellness brand.',
    caseHref: '/case-studies/yoga-pilates-socks-development',
  },
  {
    number: '03',
    title: 'Private Label Brands',
    image: images.privateLabel,
    alt: 'Private label socks with custom branding and retail packaging',
    who: ['Startup brands', 'Amazon sellers', 'Shopify brands', 'Retail companies'],
    needs: ['Custom sock designs', 'Brand logo', 'Packaging solutions', 'Small batch testing'],
    solution: 'From concept to market launch, we help brands build their own sock collections.',
    productHref: '/private-label-sports-socks',
    productLabel: 'Explore Private Label Solution',
    caseTitle: 'Private Label Socks Launch',
    caseText: 'A documented route from brand idea to retail-ready sock collection.',
    caseHref: '/case-studies/private-label-socks-brand-launch',
  },
] as const;

const advantages = [
  ['Flexible MOQ', 'Start from 50 pairs for market testing on selected standard styles.'],
  ['Custom Development', 'Move from an initial product idea to an approved, finished product.'],
  ['Multiple Sock Technologies', 'Develop grip socks, sports socks and lifestyle sock collections.'],
  ['Private Label Support', 'Coordinate logo application, packaging and brand presentation.'],
  ['Global Production Support', 'Plan reliable manufacturing, quality control and shipping.'],
] as const;

const processSteps = ['Brand Idea', 'Design Development', 'Sample Creation', 'Production', 'Quality Inspection', 'Shipment'] as const;

const caseStudies = [
  { title: 'Football Brand Growth', industry: 'Sports Teams', image: images.footballCase, href: '/case-studies/uk-football-brand-growth', alt: 'Football brand custom socks growth case study' },
  { title: 'Yoga Pilates Socks Development', industry: 'Yoga & Wellness', image: images.yogaCase, href: '/case-studies/yoga-pilates-socks-development', alt: 'Yoga and Pilates grip socks development case study' },
  { title: 'Private Label Socks Launch', industry: 'Brand Development', image: images.privateLabelCase, href: '/case-studies/private-label-socks-brand-launch', alt: 'Private label socks brand launch case study' },
] as const;

const faqs = [
  ['What industries does PeakMotion manufacture socks for?', 'PeakMotion works with sports teams, yoga studios, fitness companies and private label brands worldwide.'],
  ['Can small brands start with low MOQ?', 'Yes. We support small batch testing with flexible MOQ options depending on product requirements.'],
  ['Can you develop custom socks from an idea?', 'Yes. Our team supports design, sampling, production and packaging development.'],
  ['Do you provide private label packaging?', 'Yes. We provide custom labels, packaging and retail-ready solutions.'],
] as const;

function Scene({ src, alt, label, priority = false }: { src: string; alt: string; label: string; priority?: boolean }) {
  return (
    <figure className="group relative min-h-44 overflow-hidden rounded-2xl bg-slate-100 md:min-h-52">
      <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07120c]/90 via-[#07120c]/55 to-transparent px-5 pb-4 pt-12">
        <figcaption className="text-sm font-black uppercase tracking-wide text-white">{label}</figcaption>
      </div>
    </figure>
  );
}

export default function IndustriesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Custom Socks Solutions For Brands, Teams & Wellness Businesses',
        description: metadata.description,
        about: ['Custom sock solutions', 'Sports team socks', 'Yoga grip socks', 'Private label sock programs'],
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      {
        '@type': 'ItemList',
        name: 'Industries PeakMotion Supports',
        itemListElement: industries.map((industry, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: industry.title,
          url: `${siteUrl}${industry.productHref}`,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Industries', item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="overflow-hidden bg-[#f7f8f6] px-5 py-12 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-500"><Link href="/" className="hover:text-[#679a20]">Home</Link><span className="mx-2">/</span><span>Industries</span></nav>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Industries We Serve</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.03] md:text-6xl">Custom Socks Solutions For Brands, Teams &amp; Wellness Businesses</h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">PeakMotion helps businesses create custom socks with flexible MOQ, private label support and complete product development services — from first idea to finished product.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] hover:bg-[#a3e627]">Start Your Custom Socks Project</Link>
                <a href="#industries" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-7 py-4 text-sm font-black uppercase tracking-wide hover:bg-[#0c1713] hover:text-white">Explore Our Solutions</a>
              </div>
              <div className="mt-7 flex flex-wrap gap-2 text-xs font-black uppercase tracking-wide text-slate-600">
                {['Sports team solutions', 'Wellness sock programs', 'Private label collections', 'Global production support'].map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2">{item}</span>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Scene src={images.football} alt="Football team socks for clubs and sports organizations" label="Football Team Socks" priority />
              <Scene src={images.yoga} alt="Yoga grip socks for studios and wellness businesses" label="Yoga Grip Socks" priority />
              <Scene src={images.privateLabel} alt="Private label sock collection with branded packaging" label="Private Label Packaging" />
              <Scene src={images.running} alt="Performance running socks for sports brands and events" label="Performance Socks" />
            </div>
          </div>
        </div>
      </section>

      <MoqFramework />

      <section id="industries" className="px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Industries We Support</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Custom manufacturing built around your market.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Whether you are a sports team, wellness business or growing brand, PeakMotion provides custom socks manufacturing solutions tailored to your market.</p></div>
          <div className="mt-12 space-y-8">
            {industries.map((industry, index) => (
              <article key={industry.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-[#fbfcfa] shadow-[0_20px_55px_rgba(12,23,19,0.08)]">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative min-h-72 lg:min-h-full"><Image src={industry.image} alt={industry.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
                  <div className="p-7 md:p-10 lg:p-12">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Industry {industry.number}</p>
                    <h3 className="mt-3 text-3xl font-black md:text-4xl">{industry.title}</h3>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div><h4 className="text-sm font-black uppercase tracking-wide">Who We Serve</h4><ul className="mt-3 space-y-2 text-slate-600">{industry.who.map((item) => <li key={item}>{item}</li>)}</ul></div>
                      <div><h4 className="text-sm font-black uppercase tracking-wide">Common Needs</h4><ul className="mt-3 space-y-2 text-slate-600">{industry.needs.map((item) => <li key={item} className="flex gap-2"><span className="font-black text-[#679a20]">✓</span><span>{item}</span></li>)}</ul></div>
                    </div>
                    <div className="mt-8 rounded-2xl bg-white p-6"><h4 className="font-black">PeakMotion Solution</h4><p className="mt-3 leading-relaxed text-slate-600">{industry.solution}</p></div>
                    <Link href={industry.productHref} className="mt-7 inline-flex rounded-xl bg-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide !text-white hover:bg-[#1b3529]">{industry.productLabel}</Link>
                    <Link href={industry.caseHref} className="mt-6 block rounded-2xl border border-[#cde4a9] bg-[#f4fbe8] p-5 transition-colors hover:bg-[#eaf8cf]"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Related Case Study</span><strong className="mt-2 block text-lg">{industry.caseTitle}</strong><span className="mt-2 block text-sm leading-relaxed text-slate-600">{industry.caseText}</span><span className="mt-3 block text-sm font-black text-[#315d18]">Read Case Study →</span></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Why Different Industries Choose PeakMotion</p><h2 className="mt-3 text-3xl font-black md:text-5xl">One Manufacturing Partner For Different Market Needs</h2></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{advantages.map(([title, text], index) => <article key={title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-6"><span className="text-sm font-black text-[#b4ff2b]">0{index + 1}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Manufacturing Capability</p><h2 className="mt-3 text-3xl font-black md:text-5xl">From Product Idea To Production</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">A connected development route helps teams, studios and brands move from a commercial idea to a repeatable product specification.</p></div>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">{processSteps.map((step, index) => <li key={step} className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center"><span className="text-sm font-black text-[#679a20]">0{index + 1}</span><strong className="mt-4 block">{step}</strong>{index < processSteps.length - 1 && <span aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#b4ff2b] text-sm font-black lg:flex">→</span>}</li>)}</ol>
          <div className="mt-10 text-center"><Link href="/socks-manufacturing" className="inline-flex rounded-xl bg-[#0c1713] px-7 py-4 text-sm font-black uppercase tracking-wide !text-white hover:bg-[#1b3529]">Explore Manufacturing Process</Link></div>
        </div>
      <div className="mx-auto max-w-7xl"><FactoryShipmentGallery photos={['ready', 'handling']} /></div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Customer Success Stories</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Real Projects From Growing Brands</h2></div>
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">{caseStudies.map((item) => <article key={item.href} className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_42px_rgba(12,23,19,0.07)]"><div className="aspect-video bg-[#f3f5f2] p-3"><div className="relative h-full w-full overflow-hidden rounded-xl bg-white"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain" /></div></div><div className="flex flex-1 flex-col p-7"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">{item.industry}</p><h3 className="mt-3 min-h-14 text-2xl font-black">{item.title}</h3><Link href={item.href} className="mt-auto inline-flex pt-6 font-black text-[#315d18] underline decoration-[#b4ff2b] decoration-2 underline-offset-4">Read Case Study →</Link></div></article>)}</div>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Frequently Asked Questions</h2><p className="mt-5 leading-relaxed text-slate-600">Practical answers for teams, studios and brands planning a custom sock project.</p></div>
          <div className="space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="bg-[#eaf8cf] px-5 py-16 text-center md:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#56851c]">Start Your Project</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Ready To Create Your Custom Socks?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">Tell us your industry and product idea. Our team will help you develop the right sock solution.</p><Link href="/contact" className="mt-8 inline-flex rounded-xl bg-[#0c1713] px-8 py-4 text-sm font-black uppercase tracking-wide !text-white hover:bg-[#1b3529]">Request A Quote</Link></div>
      </section>
    </main>
  );
}

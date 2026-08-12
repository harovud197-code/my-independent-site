import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';

const cases = [
  {
    title: 'UK Football Brand Growth',
    category: 'Sports Teams',
    description: 'A football sock program developed from test quantities into a repeat-ready supply route.',
    href: '/case-studies/uk-football-brand-growth',
    image: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/uk-football-brand-growth/case-snapshot.png',
    alt: 'UK football brand custom socks growth case study',
  },
  {
    title: 'Yoga & Pilates Socks Development',
    category: 'Yoga & Wellness',
    description: 'From product direction and sampling to a market-ready grip sock collection.',
    href: '/case-studies/yoga-pilates-socks-development',
    image: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/yoga-pilates-socks-development/hero-v2.png',
    alt: 'Yoga and Pilates grip socks development case study',
  },
  {
    title: 'Private Label Socks Brand Launch',
    category: 'Brand Development',
    description: 'A private label collection developed from the first brand brief to retail-ready packaging.',
    href: '/case-studies/private-label-socks-brand-launch',
    image: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/private-label-socks-brand-launch/custom-sock-render.png',
    alt: 'Private label socks brand launch case study',
  },
] as const;

export const metadata: Metadata = {
  title: 'Custom Socks Case Studies | PeakMotion Socks',
  description: 'Review football, yoga and private label sock development projects completed for growing brands, teams and wellness businesses.',
  alternates: { canonical: `${siteUrl}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-[#0c1713]">
      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Customer success stories</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">Real custom sock projects from growing brands.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">See how product requirements, sampling, manufacturing and packaging decisions were turned into practical supply programs.</p>
        </div>
      </section>
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <article key={item.href} className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex w-full flex-col">
                <Link href={item.href} className="relative block aspect-[16/10] overflow-hidden bg-[#f7f8f6]">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">{item.category}</p>
                  <h2 className="mt-3 text-2xl font-black leading-tight"><Link href={item.href}>{item.title}</Link></h2>
                  <p className="mt-4 leading-relaxed text-slate-600">{item.description}</p>
                  <Link href={item.href} className="mt-auto pt-7 font-black text-[#315d18]">Read case study →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

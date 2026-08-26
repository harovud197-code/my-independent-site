import Image from 'next/image';
import Link from 'next/link';

const caseStudyUrl = '/case-studies/yoga-pilates-socks-development';
const caseImage = '/assets/case-studies/yoga-pilates-socks-development/barre-studio-card.png';

type YogaPilatesCaseStudyCardProps = {
  placement: string;
};

export default function YogaPilatesCaseStudyCard({ placement }: YogaPilatesCaseStudyCardProps) {
  return (
    <section className="bg-[#fbf7f4] px-5 py-16 text-[#0c1713] md:px-8 lg:py-24">
      <article data-content-version="2026-08-26-yoga-case-card-image-v2" className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-[#eaded8] bg-white shadow-[0_24px_65px_rgba(64,35,39,0.09)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a16470]">Product Development Case | Yoga &amp; Pilates</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">From a brand idea to a market-ready studio sock collection.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">See how the collection direction brought together five-toe mobility, secure straps, soft knit textures, anti-slip grip and a wellness-focused presentation.</p>
          <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
            {['Five-toe silhouettes', 'Open-toe options', 'Grip and fit details', 'Packaging direction'].map((item) => (
              <span key={item} className="rounded-xl bg-[#fbf7f4] p-4 font-black text-slate-700">{item}</span>
            ))}
          </div>
          <Link href={caseStudyUrl} data-analytics-event="case_study_click" data-analytics-placement={placement} className="mt-7 inline-flex w-fit items-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Read the full case study <span aria-hidden="true" className="ml-2">&rarr;</span></Link>
        </div>
        <div className="relative min-h-[340px] bg-[#f8f1ed] lg:min-h-[500px]">
          <Image src={caseImage} alt="Barre studio model wearing cross-strap grip socks" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center" />
        </div>
      </article>
    </section>
  );
}

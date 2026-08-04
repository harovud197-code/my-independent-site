import Image from 'next/image';
import Link from 'next/link';

const caseStudyUrl = '/case-studies/uk-football-brand-growth';
const caseImage = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/uk-football-brand-growth/case-snapshot.png';

type UKFootballCaseStudyCardProps = {
  placement: string;
};

export default function UKFootballCaseStudyCard({ placement }: UKFootballCaseStudyCardProps) {
  return (
    <section className="bg-white px-5 py-16 text-[#0c1713] md:px-8 lg:py-24">
      <article className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f8f6] shadow-[0_24px_65px_rgba(12,23,19,0.09)] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[320px] bg-white lg:min-h-[470px]">
          <Image src={caseImage} alt="UK football brand case study showing trial orders, repeat production and annual supply" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain" />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Customer Success | UK Football Brand</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">From a small trial to long-term repeat production.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">A UK football lifestyle brand used seven sample rounds to refine construction, compression, height and materials before moving into a stable repeat-order program.</p>
          <dl className="mt-7 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl bg-white p-4"><dt className="text-xs font-black uppercase tracking-wide text-slate-500">Trial</dt><dd className="mt-1 font-black">25-50 pairs*</dd></div>
            <div className="rounded-xl bg-white p-4"><dt className="text-xs font-black uppercase tracking-wide text-slate-500">Sampling</dt><dd className="mt-1 font-black">7 rounds</dd></div>
            <div className="rounded-xl bg-white p-4"><dt className="text-xs font-black uppercase tracking-wide text-slate-500">Reorders</dt><dd className="mt-1 font-black">Every 2 months</dd></div>
            <div className="rounded-xl bg-white p-4"><dt className="text-xs font-black uppercase tracking-wide text-slate-500">Current scale</dt><dd className="mt-1 font-black">100,000+ / year</dd></div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">*Historical case-specific trial quantity. Current MOQ depends on the selected product route and specification.</p>
          <Link href={caseStudyUrl} data-analytics-event="case_study_click" data-analytics-placement={placement} className="mt-7 inline-flex w-fit items-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Read the full case study <span aria-hidden="true" className="ml-2">&rarr;</span></Link>
        </div>
      </article>
    </section>
  );
}


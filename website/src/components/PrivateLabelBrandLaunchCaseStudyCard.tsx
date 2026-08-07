import Image from 'next/image';
import Link from 'next/link';

const caseStudyUrl = '/case-studies/private-label-socks-brand-launch';
const caseImage = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/private-label-socks-brand-launch/custom-sock-render.png';

type PrivateLabelBrandLaunchCaseStudyCardProps = {
  placement: string;
};

export default function PrivateLabelBrandLaunchCaseStudyCard({ placement }: PrivateLabelBrandLaunchCaseStudyCardProps) {
  return (
    <section className="bg-[#f7f8f6] px-5 py-16 text-[#0c1713] md:px-8 lg:py-24">
      <article className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_65px_rgba(12,23,19,0.09)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Private Label Brand Launch Case</p>
          <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">From a brand concept to a retail-ready socks collection.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">See how product design, physical sampling, logo development, custom sock cards, packing and production support came together for an emerging lifestyle brand.</p>
          <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
            {['Custom product design', 'Physical sampling', 'Private label packaging', 'Production & delivery'].map((item) => (
              <span key={item} className="rounded-xl bg-[#f4fbe8] p-4 font-black text-slate-700">{item}</span>
            ))}
          </div>
          <Link href={caseStudyUrl} data-analytics-event="case_study_click" data-analytics-placement={placement} className="mt-7 inline-flex w-fit items-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Read the full case study <span aria-hidden="true" className="ml-2">&rarr;</span></Link>
        </div>
        <div className="relative min-h-[340px] bg-[#f4f5f2] lg:min-h-[500px]">
          <Image src={caseImage} alt="Custom private label logo socks developed from brand artwork" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain p-6 lg:p-10" />
        </div>
      </article>
    </section>
  );
}


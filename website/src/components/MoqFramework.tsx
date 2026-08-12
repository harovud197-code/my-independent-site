import Link from 'next/link';
import { MOQ_FRAMEWORK } from '@/lib/moq-framework';

type MoqFrameworkProps = {
  className?: string;
};

export default function MoqFramework({ className = '' }: MoqFrameworkProps) {
  const routes = Object.values(MOQ_FRAMEWORK);

  return (
    <section className={`border-y border-slate-200 bg-[#f7f8f6] px-5 py-14 md:px-8 lg:py-18 ${className}`} aria-labelledby="moq-framework-title">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">PeakMotion MOQ Framework</p>
          <h2 id="moq-framework-title" className="mt-3 text-3xl font-black leading-tight md:text-4xl">Choose the MOQ route that matches the specification.</h2>
          <p className="mt-4 leading-relaxed text-slate-600">MOQ is tied to the production route, not one universal number. We confirm the final quantity after reviewing the style, artwork, sizes and packaging.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {routes.map((route) => (
            <article key={route.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(12,23,19,0.05)]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#679a20]">{route.label}</p>
              <h3 className="mt-3 text-2xl font-black text-[#0c1713]">{route.quantity}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{route.description}</p>
            </article>
          ))}
        </div>
        <Link href="/sports-socks-moq-guide" className="mt-7 inline-flex font-black text-[#315d18] underline decoration-[#9acb52] decoration-2 underline-offset-4">Read the complete MOQ Guide →</Link>
      </div>
    </section>
  );
}

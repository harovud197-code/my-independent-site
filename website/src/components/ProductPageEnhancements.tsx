import Link from 'next/link';

type EnhancementProps = {
  useCases: Array<[string, string]>;
  faqs: Array<[string, string]>;
  relatedLinks: Array<[string, string, string]>;
};

export default function ProductPageEnhancements({ useCases, faqs, relatedLinks }: EnhancementProps) {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([name, text]) => ({
      '@type': 'Question',
      name,
      acceptedAnswer: { '@type': 'Answer', text },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData).replace(/</g, '\\u003c') }} />
      <section className="border-y border-slate-100 bg-[#fbfcfa] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Built for real use</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Where this sock performs</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {useCases.map(([title, description]) => <article key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{description}</p></article>)}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Buyer FAQ</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Questions before ordering</h2><p className="mt-4 leading-relaxed text-slate-600">Confirm the production route early, then share the details for a practical quote.</p></div>
        <div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-5 py-4 leading-relaxed text-slate-600">{answer}</p></details>)}</div>
      </section>
      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-[1200px]"><p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Plan your range</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Related product and sourcing guides</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{relatedLinks.map(([href, title, text]) => <Link key={href} href={href} className="rounded-2xl bg-white p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"><h3 className="text-xl font-black">{title} <span aria-hidden="true">&rarr;</span></h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p></Link>)}</div></div>
      </section>
    </>
  );
}


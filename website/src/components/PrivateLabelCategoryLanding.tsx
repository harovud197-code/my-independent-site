import Image from 'next/image';
import Link from 'next/link';
import PrivateLabelQuoteForm from '@/components/PrivateLabelQuoteForm';

type LandingItem = readonly [title: string, description: string, href: string];
type DetailItem = readonly [title: string, description: string];
type FaqItem = readonly [question: string, answer: string];

type PrivateLabelCategoryLandingProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  productsTitle: string;
  productsIntro: string;
  productItems: readonly LandingItem[];
  customizationTitle: string;
  customizationIntro: string;
  customizationItems: readonly DetailItem[];
  processTitle: string;
  processItems: readonly DetailItem[];
  faqs: readonly FaqItem[];
  whatsappUrl: string;
};

export default function PrivateLabelCategoryLanding({
  eyebrow,
  title,
  description,
  heroImage,
  heroAlt,
  productsTitle,
  productsIntro,
  productItems,
  customizationTitle,
  customizationIntro,
  customizationItems,
  processTitle,
  processItems,
  faqs,
  whatsappUrl,
}: PrivateLabelCategoryLandingProps) {
  return (
    <main className="bg-white text-[#0c1713]">
      <section className="overflow-hidden bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"><div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">{eyebrow}</p><h1 className="mt-5 text-4xl font-black leading-[1.05] md:text-6xl">{title}</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{description}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Request a Custom Quote</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-7 py-4 font-black uppercase tracking-wide transition-colors hover:bg-[#0c1713] hover:text-white">Chat on WhatsApp</a></div></div><PrivateLabelQuoteForm id="hero-quote" /></div></section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6]"><Image src={heroImage} alt={heroAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-contain" /></div><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Private label product range</p><h2 className="mt-3 text-3xl font-black md:text-5xl">{productsTitle}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{productsIntro}</p><a href="#quote" className="mt-8 inline-flex rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Discuss Your Collection</a></div></section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{productItems.map(([itemTitle, itemDescription, href], index) => <Link key={itemTitle} href={href} className="group rounded-xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#b4ff2b] hover:shadow-lg"><span className="text-sm font-black text-[#679a20]">0{index + 1}</span><h3 className="mt-5 text-xl font-black">{itemTitle}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{itemDescription}</p><span className="mt-7 inline-flex text-sm font-black uppercase tracking-wide">View product <span className="ml-2 text-[#679a20]">→</span></span></Link>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24"><div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Full customization</p><h2 className="mt-3 text-3xl font-black md:text-5xl">{customizationTitle}</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">{customizationIntro}</p></div><div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{customizationItems.map(([itemTitle, itemDescription], index) => <article key={itemTitle} className="rounded-xl border border-slate-200 bg-[#f7f8f6] p-6"><span className="text-sm font-black text-[#679a20]">0{index + 1}</span><h3 className="mt-4 text-xl font-black">{itemTitle}</h3><p className="mt-3 leading-relaxed text-slate-600">{itemDescription}</p></article>)}</div></div></section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">A clear development process</p><h2 className="mt-3 text-3xl font-black md:text-5xl">{processTitle}</h2></div><div className="mt-10 grid grid-cols-1 gap-px bg-white/15 md:grid-cols-4">{processItems.map(([itemTitle, itemDescription], index) => <article key={itemTitle} className="bg-[#0c1713] p-7"><span className="text-sm font-black tracking-[0.16em] text-[#b4ff2b]">STEP 0{index + 1}</span><h3 className="mt-8 text-xl font-black">{itemTitle}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{itemDescription}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 lg:py-24"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Questions before you develop your collection</h2></div><div className="mt-10 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{answer}</p></details>)}</div></section>

      <section id="quote" className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Start Your Project</p><h2 className="mt-3 text-4xl font-black md:text-6xl">Ready to build a product your customers remember?</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Send your product type, logo, quantity, colors, materials and packaging needs. We will help you define a practical next step.</p></div><PrivateLabelQuoteForm /></div></section>
    </main>
  );
}

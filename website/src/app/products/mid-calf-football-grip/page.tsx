import type { Metadata } from 'next';

const assetPath = '/assets/products/mid-calf-football-grip';
const whatsappMessage = encodeURIComponent(
  'Hello PeakMotion Socks, I am interested in Professional Color Soccer Grip Sports Socks.'
);

export const metadata: Metadata = {
  title: 'Professional Color Soccer Grip Sports Socks | PeakMotion Socks',
  description:
    'Professional soccer grip socks with silicone anti-slip technology and OEM customization.',
};

export default function MidCalfFootballGripPage() {
  return (
    <main className="bg-white text-[#0c1713]">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-20">
        <div className="rounded-[28px] bg-[#f7f8f6] p-5 md:p-10">
          <img
            src={`${assetPath}/hero.png`}
            alt="Yellow, green and red professional soccer grip socks"
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="max-w-xl space-y-6">
          <span className="inline-flex rounded-full bg-[#e9f8d2] px-4 py-2 text-xs font-black tracking-[0.16em] text-[#387116]">
            BEST SELLER
          </span>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Professional Color Soccer Grip Sports Socks
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            High-performance football grip socks with silicone anti-slip technology, breathable construction and custom OEM solutions.
          </p>
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-4">
            {[
              ['MOQ', '50 Pairs'],
              ['Sample', '7 Days'],
              ['Lead Time', '25-30 Days'],
              ['Size', 'Kids-XL'],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-r border-slate-200 p-4 text-center last:border-r-0 sm:border-b-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span>
                <strong className="mt-1 block text-sm">{value}</strong>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide text-black transition-all hover:-translate-y-0.5 hover:bg-[#a3e627] hover:shadow-lg"
            >
              Get A Quote
            </a>
            <a
              href={`https://wa.me/8617357769219?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#39a91f] px-7 py-4 font-black uppercase tracking-wide !text-white transition-all hover:-translate-y-0.5 hover:bg-[#2f8b19] hover:shadow-lg"
            >
              Chat On WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#fbfcfa] py-12">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <img src={`${assetPath}/feature-icons.png`} alt="Key performance features" className="mx-auto h-auto w-full" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-20 md:px-8 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Product Details</p>
          <h2 className="text-3xl font-black md:text-4xl">Specifications</h2>
          <dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            {[
              ['Material', '80% Cotton, 15% Nylon, 5% Spandex'],
              ['Length', 'Crew'],
              ['Grip', 'Silicone Anti-slip Pattern'],
              ['Logo', 'Jacquard / Embroidery / Print'],
              ['MOQ', '50 Pairs'],
              ['Packing', 'Custom Packaging'],
            ].map(([term, detail]) => (
              <div key={term} className="grid grid-cols-[110px_1fr] gap-4 border-b border-slate-200 px-5 py-4 last:border-b-0">
                <dt className="font-bold">{term}</dt>
                <dd className="text-slate-600">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">For Your Brand</p>
          <h2 className="text-3xl font-black md:text-4xl">OEM &amp; Customization</h2>
          <img src={`${assetPath}/oem.png`} alt="OEM customization options" className="mt-8 h-auto w-full rounded-2xl" />
        </div>
      </section>

      <section className="bg-[#f7f8f6] py-20">
        <div className="mx-auto max-w-[1200px] space-y-14 px-5 md:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Custom Options</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Colors, applications and factory support</h2>
          </div>
          <img src={`${assetPath}/colors.png`} alt="Custom soccer grip sock color options" className="h-auto w-full rounded-2xl bg-white" />
          <img src={`${assetPath}/applications.png`} alt="Soccer grip socks for sports applications" className="h-auto w-full rounded-2xl bg-white" />
          <img src={`${assetPath}/factory.png`} alt="PeakMotion sock factory" className="h-auto w-full rounded-2xl bg-white" />
          <img src={`${assetPath}/certifications.png`} alt="Quality certifications" className="h-auto w-full rounded-2xl bg-white" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <p className="text-center text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">FAQ</p>
        <h2 className="mt-3 text-center text-3xl font-black md:text-4xl">Questions before you order</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {[
            ['Can I customize the socks with my logo?', 'Yes. Custom logo, colors and packaging are supported.'],
            ['What is the MOQ?', 'Production can start from 50 pairs.'],
            ['How long does sample production take?', 'Sample production usually takes about 7 days.'],
          ].map(([question, answer]) => (
            <details key={question} className="group px-6 py-5">
              <summary className="cursor-pointer list-none font-bold marker:content-none">{question}</summary>
              <p className="mt-3 leading-relaxed text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="quote" className="bg-[#0c1713] px-5 py-20 text-center text-white md:px-8">
        <div className="mx-auto max-w-3xl">
          <img src={`${assetPath}/cta.png`} alt="Custom soccer grip socks" className="mb-10 h-auto w-full rounded-2xl" />
          <h2 className="text-3xl font-black md:text-5xl">Request A Custom Quote</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Tell us your target quantity, colors, logo and packaging needs. We will reply with a tailored quote.
          </p>
          <a
            href={`https://wa.me/8617357769219?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-8 py-4 font-black uppercase tracking-wide text-black transition-all hover:-translate-y-0.5 hover:bg-[#a3e627] hover:shadow-lg"
          >
            Get Quote On WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

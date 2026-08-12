import Link from 'next/link';
import { ProductQuickFacts, productSeo } from '@/lib/product-seo';

const assetPath = '/assets/products/mid-calf-football-grip';
const product = productSeo['mid-calf-football-grip'];
const whatsappMessage = encodeURIComponent(
  'Hello PeakMotion Socks, I am interested in Professional Color Soccer Grip Sports Socks.'
);

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
          <ProductQuickFacts product={product} />
          <div>
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

      <section className="border-y border-slate-100 bg-white px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Who It Is For</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">A football sock program for clubs and sports brands</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">This mid-calf grip style suits football teams, academies, retailers and performance brands that need a visible team color story with a secure silicone sole. It can be developed for training, match-day, youth and adult size runs.</p>
            <ul className="mt-7 space-y-3 text-slate-700">
              {['Team colors, contrast cuffs and custom logo placement', 'Crew height and fit options for youth through adult sizing', 'Grip layout designed around quick direction changes and turf use', 'Sample approval before the 25-30 day bulk production window'].map((item) => <li key={item} className="flex gap-3"><span className="font-black text-[#679a20]">✓</span><span>{item}</span></li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-[#f7f8f6] p-7 md:p-9">
            <p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Packaging Choices</p>
            <h2 className="mt-3 text-3xl font-black">Ready for wholesale or retail</h2>
            <div className="mt-7 space-y-4">
              {[
                ['Team bulk packs', 'Sorted by size and color for clubs, academies and distributor orders.'],
                ['Retail presentation', 'Add a paper band, header card, barcode label or custom backer card.'],
                ['Private-label box', 'Use branded boxes for gift sets, premium collections or launch kits.'],
              ].map(([title, text]) => <div key={title} className="rounded-xl bg-white p-5"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></div>)}
            </div>
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
              ['MOQ', 'Typically From 100 Pairs'],
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
            <Link href="/football-socks-manufacturer" className="mt-6 inline-flex font-black text-[#387116] underline underline-offset-4">Need a full football sock collection? Explore our Football Socks Manufacturer service →</Link>
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
            ['What is the MOQ?', 'Custom logo and grip programs typically start from 100 pairs. Selected standard styles can start from 50 pairs; bespoke specifications require a higher MOQ.'],
            ['How long does sample production take?', 'Sample production usually takes about 7 days.'],
            ['Can you match our football team colors?', 'Yes. Share your color reference, logo artwork and preferred sock layout for a practical sampling recommendation.'],
            ['Which packaging is available?', 'Team bulk packs, paper bands, header cards, barcode labels and private-label boxes can be discussed with your quotation.'],
          ].map(([question, answer]) => (
            <details key={question} className="group px-6 py-5">
              <summary className="cursor-pointer list-none font-bold marker:content-none">{question}</summary>
              <p className="mt-3 leading-relaxed text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="quote" className="relative overflow-hidden bg-[#07120c] px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0">
          <img
            src="/assets/images/training/hero.png"
            alt="Soccer grip socks on the field"
            className="h-full w-full object-cover object-center opacity-45 md:object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07120c] via-[#07120c]/90 to-[#07120c]/45" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl space-y-7 text-left text-white">
            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Ready to Build <br />Your Sock Brand?
            </h2>
            <p className="text-xl font-medium text-gray-200 md:text-2xl">
              Contact us today and get a free quote within 24 hours.
            </p>
            <div className="flex flex-col gap-5 pt-3 sm:flex-row">
              <a
                href={`https://wa.me/8617357769219?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#b4ff2b] px-10 py-5 text-lg font-black uppercase text-black shadow-2xl transition-transform hover:scale-105"
              >
                Get Quote Now
              </a>
              <a
                href="https://wa.me/8617357769219"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-white/10 px-10 py-5 text-lg font-black uppercase !text-white backdrop-blur-md transition-all hover:bg-white hover:!text-black"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Sports Socks Manufacturer: Complete OEM Guide (2026) | PeakMotion',
  description: 'Looking for a reliable custom sports socks manufacturer? Learn everything about OEM sports socks, private label socks, customization options, MOQ, pricing, production process, and sourcing tips.',
};

export default function CustomSportsSocksManufacturerGuide() {
  const faqs = [
    {
      question: 'What is the MOQ for custom sports socks?',
      answer: 'Most projects start from 50 pairs depending on design complexity.'
    },
    {
      question: 'Can I use my own logo?',
      answer: 'Yes. We support woven logos, knitted logos, embroidery, and printing.'
    },
    {
      question: 'How long does production take?',
      answer: 'Typically 15�C30 days after sample approval.'
    },
    {
      question: 'Do you provide custom packaging?',
      answer: 'Yes. We offer header cards, belly bands, custom boxes, and retail-ready packaging.'
    },
    {
      question: 'Do you ship worldwide?',
      answer: 'Yes. We export globally.'
    },
    {
      question: 'What is the difference between OEM and private label socks?',
      answer: 'OEM uses your unique design specifications, while private label applies your branding to existing styles.'
    },
    {
      question: 'Can startups order custom sports socks?',
      answer: 'Yes. Low MOQ options are available.'
    },
    {
      question: 'What sports are your socks suitable for?',
      answer: 'Football, running, basketball, cycling, Pilates, gym training, and more.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
      

      <main className="flex-1 bg-white">
        {/* Article Container */}
        <article className="max-w-3xl mx-auto py-12 px-5 text-slate-700 leading-relaxed text-left">
          {/* Breadcrumb & Meta */}
          <div className="mb-6 text-sm text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-2">
            <a href="/blog" className="hover:text-black transition-colors">Blog</a>
            <span>?</span>
            <span className="text-slate-900">OEM Manufacturing</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Custom Sports Socks Manufacturer: Complete OEM Guide
          </h1>

          {/* Author/Date Meta */}
          <div className="flex items-center gap-4 text-slate-500 text-sm mb-8 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs">PM</span>
              <span className="font-bold text-slate-800">PeakMotion Editorial Team</span>
            </div>
            <span>|</span>
            <span>Published June 2026</span>
          </div>

          {/* Introduction */}
          <div className="space-y-6 text-slate-700 text-[17px] leading-relaxed">
            <p>
              If you are looking for a reliable custom sports socks manufacturer, this guide explains everything you need to know about OEM sports socks, private label socks, customization options, production processes, pricing factors, and how to choose the right manufacturing partner.
            </p>
          </div>

          {/* Featured/Introduction Image */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[16/9] bg-slate-50 relative">
            <Image 
              src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/custom-socks-guide-knitting.jpg" 
              alt="Custom Sports Socks Manufacturer" 
              fill
              className="object-cover"
            />
          </div>

          {/* Table of Contents Box */}
          <div className="toc bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-2xl my-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Table of Contents
            </h2>
            <ul className="space-y-2.5">
              <li>
                <a href="#what" className="text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors"></span>
                  What Are Custom Sports Socks?
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors"></span>
                  Benefits of OEM Sports Socks
                </a>
              </li>
              <li>
                <a href="#customization" className="text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors"></span>
                  Customization Options
                </a>
              </li>
              <li>
                <a href="#materials" className="text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors"></span>
                  Best Materials
                </a>
              </li>
              <li>
                <a href="#process" className="text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors"></span>
                  Production Process
                </a>
              </li>
              <li>
                <a href="#manufacturer" className="text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors"></span>
                  Choosing a Manufacturer
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors font-medium flex items-center gap-2 group">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Section: What Are Custom Sports Socks? */}
          <section className="mb-12 scroll-mt-20">
            <h2 id="what" className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              What Are Custom Sports Socks?
            </h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Custom sports socks are athletic socks manufactured according to specific brand requirements. Unlike generic wholesale socks, custom socks can be tailored in design, materials, colors, logo placement, cushioning, compression level, and packaging.
            </p>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-4">
              Popular categories include:
            </p>

            {/* Custom Grid Layout for Category Links */}
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
              {[
                { name: 'Grip Socks', href: '/grip-socks' },
                { name: 'Football Socks', href: '/football-socks' },
                { name: 'Running Socks', href: '/running-socks' },
                { name: 'Basketball Socks', href: '/basketball-socks' },
                { name: 'Cycling Socks', href: '/cycling-socks' },
                { name: 'Pilates Socks', href: '/pilates-socks' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="block p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 hover:border-slate-200 transition-all font-semibold text-slate-800 text-center shadow-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Benefits of OEM Sports Socks */}
          <section className="mb-12 scroll-mt-20">
            <h2 id="benefits" className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Benefits of OEM Sports Socks
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">Build a Unique Brand</h3>
                <p className="text-slate-700 text-[17px] leading-relaxed">
                  OEM sports socks allow brands to create exclusive products rather than competing with identical wholesale products.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">Increase Profit Margins</h3>
                <p className="text-slate-700 text-[17px] leading-relaxed">
                  Direct manufacturing reduces sourcing costs and increases profitability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">Customize Performance Features</h3>
                <p className="text-slate-700 text-[17px] leading-relaxed">
                  Sports socks can include arch support, terry cushioning, breathable mesh zones, moisture-wicking yarns, and anti-slip grip technology.
                </p>
              </div>
            </div>

            {/* Custom Socks Options Image */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[16/9] bg-slate-50 relative">
              <Image 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/custom-socks-guide-grey.jpg" 
                alt="Custom Sports Socks Options" 
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Section: Customization Options */}
          <section className="mb-12 scroll-mt-20">
            <h2 id="customization" className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Customization Options
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {[
                'Custom Logos',
                'Custom Colors',
                'Custom Materials',
                'Custom Packaging',
                'Private Label Branding',
                'Retail Packaging',
                'Compression Support',
                'Grip Technology'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-[#b4ff2b] font-bold text-xs shrink-0">?</span>
                  <span className="font-semibold text-slate-800 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section: Best Materials */}
          <section className="mb-12 scroll-mt-20">
            <h2 id="materials" className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Best Materials for Sports Socks
            </h2>

            {/* Elegant, Modern Flat Table */}
            <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold tracking-wider uppercase">Material</th>
                    <th className="px-6 py-4 text-sm font-semibold tracking-wider uppercase">Advantages</th>
                    <th className="px-6 py-4 text-sm font-semibold tracking-wider uppercase">Best Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="even:bg-slate-50/70 hover:bg-slate-100/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">Combed Cotton</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Comfortable and soft</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">Training Socks</td>
                  </tr>
                  <tr className="even:bg-slate-50/70 hover:bg-slate-100/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">Polyester</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Moisture-wicking</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">Running Socks</td>
                  </tr>
                  <tr className="even:bg-slate-50/70 hover:bg-slate-100/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">Nylon</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Durable and lightweight</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">Cycling Socks</td>
                  </tr>
                  <tr className="even:bg-slate-50/70 hover:bg-slate-100/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">Spandex</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Stretch and support</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">Compression Socks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Production Process */}
          <section className="mb-12 scroll-mt-20">
            <h2 id="process" className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              OEM Sports Socks Production Process
            </h2>

            {/* Yarn Spools Production Process Image */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[16/9] bg-slate-50 relative">
              <Image 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/custom-socks-guide-factory.jpg" 
                alt="Sports Socks Manufacturing Process" 
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-1">Step 1 �C Design Confirmation</h3>
                <p className="text-slate-700 text-[17px] leading-relaxed">Confirm logos, colors, materials, sizing, and packaging requirements.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-1">Step 2 �C Sample Development</h3>
                <p className="text-slate-700 text-[17px] leading-relaxed">Create physical samples for approval.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-1">Step 3 �C Mass Production</h3>
                <p className="text-slate-700 text-[17px] leading-relaxed">Manufacture according to approved specifications.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-1">Step 4 �C Quality Inspection</h3>
                <p className="text-slate-700 text-[17px] leading-relaxed">Inspect workmanship, sizing, logos, and packaging.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-1">Step 5 �C Packaging & Shipping</h3>
                <p className="text-slate-700 text-[17px] leading-relaxed">Prepare retail packaging and arrange shipment.</p>
              </div>
            </div>

            {/* Timeline Table */}
            <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold tracking-wider uppercase">Stage</th>
                    <th className="px-6 py-4 text-sm font-semibold tracking-wider uppercase">Typical Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="even:bg-slate-50/70 hover:bg-slate-100/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">Design Confirmation</td>
                    <td className="px-6 py-4 text-sm text-slate-700 font-semibold text-slate-800">1�C3 Days</td>
                  </tr>
                  <tr className="even:bg-slate-50/70 hover:bg-slate-100/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">Sampling</td>
                    <td className="px-6 py-4 text-sm text-slate-700 font-semibold text-slate-800">5�C10 Days</td>
                  </tr>
                  <tr className="even:bg-slate-50/70 hover:bg-slate-100/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">Production</td>
                    <td className="px-6 py-4 text-sm text-slate-700 font-semibold text-slate-800">15�C30 Days</td>
                  </tr>
                  <tr className="even:bg-slate-50/70 hover:bg-slate-100/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-slate-900 font-bold">Shipping</td>
                    <td className="px-6 py-4 text-sm text-slate-700 font-semibold text-slate-800">5�C20 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Choosing a Manufacturer */}
          <section className="mb-12 scroll-mt-20">
            <h2 id="manufacturer" className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              How to Choose a Reliable Custom Sports Socks Manufacturer
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                'Experience in sports socks manufacturing',
                'OEM and private label capabilities',
                'Low MOQ options',
                'Stable quality control',
                'Fast sampling service',
                'Worldwide shipping support'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-[#b4ff2b] font-bold text-xs shrink-0 mt-0.5">?</span>
                  <span className="font-semibold text-slate-700 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="my-12 border-gray-100" />

          {/* Section: FAQ */}
          <section className="my-12 scroll-mt-20">
            <h2 id="faq" className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-slate-200 rounded-2xl bg-slate-50/50 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-gray-950 select-none">
                    <h3 className="font-extrabold text-lg md:text-xl pr-4 text-gray-900">{faq.question}</h3>
                    <span className="shrink-0 rounded-full bg-white p-2 text-gray-900 border border-gray-100 group-open:rotate-180 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-slate-200/50 text-slate-600 leading-relaxed text-base">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section: Bottom CTA */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center my-16 border border-slate-800 space-y-6 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-white leading-tight">
              Looking for a Reliable Custom Sports Socks Manufacturer?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto leading-relaxed">
              PeakMotion provides OEM and private label sports socks manufacturing services for sports brands, teams, retailers, and distributors worldwide.
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-2xl mx-auto my-6 bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
              <li className="flex items-center gap-2 text-sm text-slate-200">
                <span className="text-[#b4ff2b] font-extrabold">?</span> MOQ From 50 Pairs
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-200">
                <span className="text-[#b4ff2b] font-extrabold">?</span> Custom Logo & Pkg
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-200">
                <span className="text-[#b4ff2b] font-extrabold">?</span> Fast Sampling
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-200">
                <span className="text-[#b4ff2b] font-extrabold">?</span> Worldwide Shipping
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a 
                href="/#contact" 
                className="bg-[#b4ff2b] text-black font-extrabold text-lg uppercase hover:bg-[#a3e627] hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full inline-flex items-center justify-center shadow-[0_10px_25px_rgba(180,255,43,0.25)]"
              >
                Request a Free Quote
              </a>
            </div>
          </section>
        </article>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/8617357769219" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 bg-[#25D366] text-white w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-xl z-[1000] hover:scale-110 transition-transform"
      >
        ??
      </a>

      {/* Footer */}
      <footer className="p-7 bg-[#111] text-[#999] text-center border-t border-[#222]">
        <p className="text-sm">? 2026 PEAKMOTION SOCKS MANUFACTURER</p>
      </footer>
    </div>
  );
}


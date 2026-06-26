import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Label Socks: Everything You Need to Know | Custom Socks Manufacturer | PeakMotion',
  description: 'Learn everything about private label socks, custom socks manufacturer services, OEM socks supplier options, MOQ, pricing, and how to start your own socks brand.',
};

export default function PrivateLabelSocksGuide() {
  const faqs = [
    {
      question: 'What are private label socks?',
      answer: 'Private label socks are pre-designed socks produced by a manufacturer that can be customized with your brand logo, packaging, colors, and labels. This allows startups to enter the market quickly without developing products from scratch.',
    },
    {
      question: 'What is the difference between OEM and private label socks?',
      answer: 'OEM socks are fully customized from scratch (design, material, knitting pattern), while private label socks are based on existing factory designs where you just add your branding.',
    },
    {
      question: 'What is the MOQ for custom socks manufacturer?',
      answer: 'Most manufacturers support 50–200 pairs for private label orders. For full OEM customization, the MOQ is usually higher, ranging from 200 to 1000+ pairs depending on complexity.',
    },
    {
      question: 'Is OEM socks supplier better than wholesale?',
      answer: 'Yes, because OEM/Private Label allows for brand identity, higher profit margins, and product differentiation, whereas wholesale socks are generic and sold by many competitors.',
    }
  ];

  const comparisonTable = [
    { type: 'Private Label Socks', desc: 'Ready-made designs with branding options', best: 'Startups & small brands' },
    { type: 'OEM Socks', desc: 'Fully customized from design to production', best: 'Established brands' },
  ];

  const pricingTable = [
    { type: 'Private Label Socks', moq: '50–200 pairs', notes: 'Low barrier entry' },
    { type: 'OEM Socks', moq: '200–1000+ pairs', notes: 'Full customization' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="bg-black text-white px-5 lg:px-15 py-4.5 flex flex-col md:flex-row justify-between items-center sticky top-0 z-[999] gap-5 md:gap-0">
        <a href="/" className="text-3xl font-bold tracking-wider hover:text-[#b4ff2b] transition-colors">PeakMotion Socks</a>
        <nav className="flex flex-wrap justify-center gap-7">
          <a href="/" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">HOME</a>
          <a href="/sports-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">SPORTS SOCKS</a>
          <a href="/#sports-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">PRODUCTS</a>
          <a href="/#custom-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">CUSTOM SOCKS</a>
          <a href="/#custom-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">OEM</a>
          <a href="/blog" className="text-[#b4ff2b] no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">BLOG</a>
          <a href="/#contact" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">CONTACT</a>
        </nav>
      </header>

      <main className="flex-1 bg-white">
        <article className="max-w-3xl mx-auto py-12 px-5 text-gray-700 leading-relaxed text-left">
          {/* Breadcrumb & Meta */}
          <div className="mb-6 text-sm text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-2">
            <a href="/blog" className="hover:text-black transition-colors">Blog</a>
            <span>•</span>
            <span className="text-slate-900">Business & OEM</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Private Label Socks: Everything You Need to Know
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
              <strong>Private label socks</strong> are one of the fastest ways to launch a sportswear brand without building your own factory. By working with a professional <strong>custom socks manufacturer</strong> or <strong>OEM socks supplier</strong>, you can create branded socks with your logo, packaging, and product identity.
            </p>
          </div>

          {/* Featured Image */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/9] bg-gray-50 relative">
            <Image 
              src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-private-label-socks-hero.jpg?v=1" 
              alt="Private Label Socks: Build Your Brand infographic with custom packaging and premium quality performance socks" 
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Table of Contents Box */}
          <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6 md:p-8 my-8 text-left max-w-xl shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
            <h2 className="text-lg md:text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Table of Contents
            </h2>
            <ul className="space-y-2 text-sm md:text-base font-semibold">
              <li><a href="#what" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">1. What Are Private Label Socks</a></li>
              <li><a href="#comparison" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">2. Private Label vs OEM Socks</a></li>
              <li><a href="#manufacturer" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">3. How Custom Socks Manufacturer Works</a></li>
              <li><a href="#process" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">4. OEM Socks Supplier Process</a></li>
              <li><a href="#moq" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">5. MOQ & Pricing</a></li>
              <li><a href="#start" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">6. How to Start Your Brand</a></li>
              <li><a href="#faq" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">7. FAQ</a></li>
            </ul>
          </div>

          <hr className="my-10 border-gray-100" />

          {/* Section 1 */}
          <section id="what" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">What Are Private Label Socks?</h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Private label socks are pre-designed socks produced by a manufacturer that can be customized with your brand logo, packaging, colors, and labels. This allows startups to enter the market quickly without developing products from scratch.
            </p>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-private-label-vs-oem-infographic.jpg?v=1" 
                alt="OEM Socks vs Private Label Socks comparison infographic" 
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Section 2 */}
          <section id="comparison" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">Private Label vs OEM Socks</h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Choosing between private label and OEM depends on your brand's stage and customization needs.
            </p>
            <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Type</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Description</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 font-semibold text-slate-900">{row.type}</td>
                      <td className="p-4 text-slate-700">{row.desc}</td>
                      <td className="p-4 text-slate-700">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section id="manufacturer" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">How Custom Socks Manufacturer Works</h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              A professional custom socks manufacturer provides end-to-end production including yarn selection, knitting, logo integration, quality control, and packaging.
            </p>
            <ul className="list-none pl-0 space-y-3 my-4">
              {[
                'Material selection (cotton, polyester, nylon, spandex)',
                'Knitting customization',
                'Logo weaving or printing',
                'Packaging design',
                'Quality inspection'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                  <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-private-label-factory-machines.jpg?v=2" 
                alt="custom socks manufacturer knitting factory" 
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Section 4 */}
          <section id="process" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">OEM Socks Supplier Process</h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              OEM socks suppliers follow a structured production process to ensure quality and consistency.
            </p>
            <ol className="list-decimal pl-6 space-y-3 my-4 text-slate-700 text-[17px] leading-relaxed">
              <li>Design confirmation</li>
              <li>Sample production</li>
              <li>Bulk manufacturing</li>
              <li>Quality inspection</li>
              <li>Packaging & shipping</li>
            </ol>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-private-label-process-infographic.jpg?v=2" 
                alt="5-step private label socks production process: Design, Sample, Production, Quality Check, and Packaging" 
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Section 5 */}
          <section id="moq" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">MOQ & Pricing</h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Most OEM socks suppliers offer flexible MOQ options depending on design complexity and customization level.
            </p>
            <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Order Type</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">MOQ</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pricingTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 font-semibold text-slate-900">{row.type}</td>
                      <td className="p-4 text-slate-700">{row.moq}</td>
                      <td className="p-4 text-slate-700">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6 */}
          <section id="start" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">How to Start Your Own Socks Brand</h2>
            <ul className="list-none pl-0 space-y-3 my-4">
              {[
                'Choose your niche (sports, gym, football, running)',
                'Select private label or OEM model',
                'Find a custom socks manufacturer',
                'Design logo and packaging',
                'Start small MOQ test order'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                  <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://images.unsplash.com/photo-1589410185121-6f0f5b9d8a2a?w=1000" 
                alt="start custom socks brand packaging design" 
                fill
                className="object-cover"
              />
            </div>
          </section>

          <hr className="my-12 border-gray-100" />

          {/* FAQ Section with details */}
          <section id="faq" className="my-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-100 rounded-2xl bg-slate-50 shadow-[0_2px_10px_rgba(0,0,0,0.01)] [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-gray-950 select-none">
                    <h3 className="font-extrabold text-lg md:text-xl pr-4 text-gray-900">{faq.question}</h3>
                    <span className="shrink-0 rounded-full bg-white p-2 text-gray-900 border border-gray-100 group-open:rotate-180 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-gray-100 text-gray-600 leading-relaxed text-base">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Bottom CTA Section */}
          <section className="bg-[#b4ff2b] rounded-3xl p-8 md:p-12 text-center my-16 border border-gray-100 space-y-6 shadow-[0_10px_25px_rgba(180,255,43,0.25)]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-wide">
              Ready to Build Your Own Socks Brand?
            </h2>
            <p className="text-black/80 max-w-xl mx-auto leading-relaxed">
              PeakMotion is a professional custom socks manufacturer offering OEM & private label solutions worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a 
                href="/#contact" 
                className="bg-black text-white font-extrabold text-lg uppercase hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full inline-flex items-center justify-center shadow-lg"
              >
                Get Custom Quote
              </a>
            </div>
          </section>
        </article>
      </main>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/8617357769219" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 bg-[#25D366] text-white w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-xl z-[1000] hover:scale-110 transition-transform"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="bg-[#0b0b0b] text-[#aaa] py-16 px-5 lg:px-15 border-t border-[#222]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">Haiyan Huaerte Knitting Co., Ltd.</h3>
            <p className="text-sm leading-relaxed">
              Custom Sports Socks Manufacturer | OEM & Private Label Supplier. Delivering high-performance solutions for global sports brands.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white text-lg font-bold">Contact Details</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#b4ff2b] font-bold shrink-0">Add:</span>
                <span>No. 8, Yucai Village Industrial Park, Tongyuan Town, Haiyan County, Zhejiang Province, China</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b4ff2b] font-bold shrink-0">Tel:</span>
                <span>+86 573 8657 1288</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#b4ff2b] font-bold shrink-0">Mail:</span>
                <a href="mailto:abayacloth@hotmail.com" className="hover:text-white transition-colors">abayacloth@hotmail.com</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white text-lg font-bold">Quick Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              <a href="/" className="hover:text-[#b4ff2b] transition-colors">HOME</a>
              <a href="/sports-socks" className="hover:text-[#b4ff2b] transition-colors">SPORTS SOCKS</a>
              <a href="/blog" className="hover:text-[#b4ff2b] transition-colors">BLOG</a>
              <a href="/#contact" className="hover:text-[#b4ff2b] transition-colors">GET QUOTE</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#222] text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Haiyan Walter Knitting Co., Ltd. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

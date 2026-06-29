import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Socks MOQ Guide for New Brands | Custom Socks Minimum Order | PeakMotion',
  description: 'Learn sports socks MOQ, custom socks minimum order, and how sports socks factory MOQ works. Full guide for new brands working with OEM socks suppliers.',
};

export default function SportsSocksMoqGuide() {
  const comparisonTable = [
    { type: 'Private Label Socks', moq: '50–200 pairs', best: 'Startups & small brands' },
    { type: 'OEM Socks', moq: '200–1000+ pairs', best: 'Established brands' },
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
            Sports Socks MOQ Guide for New Brands
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
              Understanding <strong>socks MOQ</strong> is essential for any brand working with a custom socks manufacturer. This guide explains <strong>custom socks minimum order</strong> rules and how <strong>sports socks factory MOQ</strong> works in real production.
            </p>
          </div>

          {/* Featured Image */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/9] bg-gray-50 relative">
            <Image 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200" 
              alt="sports socks factory MOQ production knitting machine" 
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
              <li><a href="#definition" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">1. What is MOQ in Sports Socks Manufacturing?</a></li>
              <li><a href="#typical" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">2. Typical MOQ for Custom Socks</a></li>
              <li><a href="#comparison" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">3. MOQ Comparison Table</a></li>
              <li><a href="#differs" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">4. Why MOQ Differs Between Factories</a></li>
              <li><a href="#reduce" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">5. How to Reduce Custom Socks Minimum Order</a></li>
              <li><a href="#strategy" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">6. MOQ Strategy for New Brands</a></li>
            </ul>
          </div>

          <hr className="my-10 border-gray-100" />

          {/* Section 1 */}
          <section id="definition" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">1. What is MOQ in Sports Socks Manufacturing?</h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              MOQ means Minimum Order Quantity. It refers to the smallest number of pairs a factory accepts per design. Different factories set different <strong>socks MOQ</strong> based on production cost and efficiency.
            </p>
          </section>

          {/* Section 2 */}
          <section id="typical" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">2. Typical MOQ for Custom Socks</h2>
            <ul className="list-none pl-0 space-y-3 my-4">
              {[
                'Private Label Socks: 50–200 pairs',
                'OEM Socks: 200–1000+ pairs',
                'Custom Packaging Orders: 300+ pairs'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                  <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800" 
                alt="custom socks manufacturer knitting machine sports socks production" 
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Section 3 */}
          <section id="comparison" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">3. MOQ Comparison Table</h2>
            <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Type</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">MOQ</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 font-semibold text-slate-900">{row.type}</td>
                      <td className="p-4 text-slate-700">{row.moq}</td>
                      <td className="p-4 text-slate-700">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section id="differs" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">4. Why MOQ Differs Between Factories</h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              A sports socks factory MOQ depends on machine setup cost, yarn waste, and production efficiency.
            </p>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" 
                alt="sports socks factory quality inspection OEM socks supplier" 
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Section 5 */}
          <section id="reduce" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">5. How to Reduce Custom Socks Minimum Order</h2>
            <ul className="list-none pl-0 space-y-3 my-4">
              {[
                'Use standard yarn colors',
                'Use existing sock base designs',
                'Simplify logo placement'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                  <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://images.unsplash.com/photo-1589410185121-6f0f5b9d8a2a?w=800" 
                alt="custom socks minimum order packaging factory" 
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Section 6 */}
          <section id="strategy" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">6. MOQ Strategy for New Brands</h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Start small. Test 2–3 designs with 50–100 pairs each before scaling production.
            </p>
          </section>

          <hr className="my-12 border-gray-100" />

          {/* Bottom CTA Section */}
          <section className="bg-[#b4ff2b] rounded-3xl p-8 md:p-12 text-center my-16 border border-gray-100 space-y-6 shadow-[0_10px_25px_rgba(180,255,43,0.25)]">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-wide">
              Start Your Custom Socks Project
            </h2>
            <p className="text-black/80 max-w-xl mx-auto leading-relaxed">
              Work directly with a professional sports socks factory. PeakMotion provides OEM & private label solutions with low MOQ.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a 
                href="https://wa.me/8617357769219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white font-extrabold text-lg uppercase hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full inline-flex items-center justify-center shadow-lg"
              >
                WhatsApp Us
              </a>
              <a 
                href="/#contact" 
                className="bg-white text-black font-extrabold text-lg uppercase hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full inline-flex items-center justify-center border border-gray-200"
              >
                Contact Our Team
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

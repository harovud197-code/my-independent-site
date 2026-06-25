import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Choose Running Socks: Best Running Socks Guide for Performance | PeakMotion',
  description: 'Learn how to choose running socks for performance, comfort, and breathability. Discover the best running socks materials, cushioning, and fit for athletes and runners.',
};

export default function HowToChooseRunningSocks() {
  const faqs = [
    {
      question: 'What are the best running socks?',
      answer: 'Breathable synthetic blend socks with moisture-wicking and compression support are the best running socks.',
    },
    {
      question: 'How to choose running socks for beginners?',
      answer: 'Beginners should choose lightweight, breathable socks with good cushioning and arch support.',
    },
    {
      question: 'Are cotton socks good for running?',
      answer: 'No. Cotton retains moisture and increases the risk of blisters.',
    },
    {
      question: 'Why are breathable running socks important?',
      answer: 'They help regulate temperature, reduce sweat buildup, and prevent friction injuries.',
    }
  ];

  const materials = [
    { name: 'Polyester', benefit: 'Moisture-wicking & fast drying' },
    { name: 'Nylon', benefit: 'Durability & structure support' },
    { name: 'Spandex', benefit: 'Elastic fit & compression' },
    { name: 'Merino blend', benefit: 'Natural odor control' },
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
        {/* Article Container */}
        <article className="max-w-3xl mx-auto py-12 px-5 text-gray-700 leading-relaxed text-left">
          {/* Breadcrumb & Meta */}
          <div className="mb-6 text-sm text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-2">
            <a href="/blog" className="hover:text-black transition-colors">Blog</a>
            <span>•</span>
            <span className="text-slate-900">Running Socks</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            How to Choose Running Socks: Best Running Socks Guide for Performance
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

          {/* Featured Image */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/9] bg-gray-50 relative">
            <Image 
              src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-running-socks-track.jpg?v=2" 
              alt="Runner's legs on a red track wearing white shoes and black performance socks" 
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Introduction */}
          <div className="space-y-6 text-slate-700 text-[17px] leading-relaxed">
            <p>
              Choosing the right <strong className="font-semibold text-slate-900">running socks</strong> is essential for preventing blisters, improving comfort, and enhancing running performance. The right pair of socks can significantly improve breathability, cushioning, and stability during long-distance running.
            </p>
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
              <li>
                <a href="#importance" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  1. Why Running Socks Matter
                </a>
              </li>
              <li>
                <a href="#materials" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  2. Best Running Socks Materials
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  3. Breathable Running Socks Features
                </a>
              </li>
              <li>
                <a href="#how-to-choose" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  4. How to Choose Running Socks
                </a>
              </li>
              <li>
                <a href="#mistakes" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  5. Common Mistakes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  6. Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          <hr className="my-10 border-gray-100" />

          {/* Section 1 */}
          <section id="importance" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Why Running Socks Matter
            </h2>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-running-socks-closeup.jpg?v=2" 
                alt="Close-up of an athlete putting on a black PeakMotion performance running sock" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Running socks are designed to reduce friction, manage moisture, and provide support. Unlike regular cotton socks, performance running socks use engineered fibers to enhance breathability and durability.
            </p>
          </section>

          {/* Section 2 */}
          <section id="materials" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Best Running Socks Materials
            </h2>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-running-socks-materials.jpg?v=2" 
                alt="Sports socks material close up texture" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              The <strong className="font-semibold text-slate-900">best running socks</strong> are made from synthetic blends that optimize performance.
            </p>

            <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Material</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {materials.map((m, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 font-semibold text-slate-900">{m.name}</td>
                      <td className="p-4 text-slate-700">{m.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section id="features" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Breathable Running Socks Features
            </h2>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100 relative">
              <Image 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-running-socks-mesh.jpg?v=2" 
                alt="Breathable mesh running socks close up" 
                fill
                className="object-cover"
              />
            </div>
            <ul className="list-none pl-0 space-y-3 my-4">
              {[
                'Mesh ventilation zones',
                'Moisture-wicking fabric',
                'Seamless toe design',
                'Arch compression support',
                'Anti-blister cushioning'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                  <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section id="how-to-choose" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              How to Choose Running Socks
            </h2>
            <div className="my-6 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 relative aspect-[16/10]">
              <Image 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-running-socks-collection.jpg?v=2" 
                alt="A collection of PeakMotion performance sports socks in various colors" 
                fill
                className="object-contain"
              />
            </div>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              When selecting running socks, consider the following factors:
            </p>
            <ul className="list-none pl-0 space-y-3 my-4">
              {[
                'Fit: snug but not tight',
                'Cushioning: light vs thick padding',
                'Breathability: mesh zones preferred',
                'Material: synthetic blends over cotton',
                'Length: ankle vs crew depending on sport'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                  <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section id="mistakes" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Common Mistakes
            </h2>
            <ul className="list-none pl-0 space-y-3 my-4">
              {[
                'Using cotton socks for long-distance running',
                'Wearing oversized socks causing friction',
                'Ignoring moisture control',
                'Choosing style over performance'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                  <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="my-12 border-gray-100" />

          {/* FAQ Section */}
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

          {/* Elegant Bottom CTA Module */}
          <section className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center my-16 border border-gray-100 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">
              Need Custom Running Socks for Your Brand?
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              PeakMotion offers OEM & private label running socks manufacturing for global sports brands. We provide high-performance, breathable running socks with custom materials, cushioning, and branding to meet your specific market needs.
            </p>
            
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-700 max-w-2xl mx-auto py-2">
              <li className="flex items-center gap-1">
                <span className="text-black bg-[#b4ff2b] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">✓</span> Low Minimum Order
              </li>
              <li className="flex items-center gap-1">
                <span className="text-black bg-[#b4ff2b] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">✓</span> Custom Logo & Packaging
              </li>
              <li className="flex items-center gap-1">
                <span className="text-black bg-[#b4ff2b] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">✓</span> Free Sample Service
              </li>
              <li className="flex items-center gap-1">
                <span className="text-black bg-[#b4ff2b] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">✓</span> Worldwide Shipping
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a 
                href="https://wa.me/8617357769219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#b4ff2b] text-black font-extrabold text-lg uppercase hover:bg-[#a3e627] hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full inline-flex items-center justify-center shadow-[0_10px_25px_rgba(180,255,43,0.25)]"
              >
                WhatsApp Us
              </a>
              <a 
                href="/#contact" 
                className="bg-black text-white font-extrabold text-lg uppercase hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 rounded-full inline-flex items-center justify-center"
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
      <footer className="p-7 bg-[#111] text-[#999] text-center border-t border-[#222]">
        <p className="text-sm">© 2026 PEAKMOTION SOCKS MANUFACTURER</p>
      </footer>
    </div>
  );
}

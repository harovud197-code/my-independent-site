import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cycling Socks vs Running Socks: Key Differences & Buying Guide | PeakMotion',
  description: 'Compare cycling socks vs running socks. Learn the benefits of cycling socks, key differences in running socks, material guides, and how to choose the right gear for performance.',
};

export default function CyclingVsRunningSocks() {
  const faqs = [
    {
      question: 'What is the difference between cycling socks and running socks?',
      answer: 'Cycling socks are typically thinner and more aerodynamic for tight cycling shoes, while running socks offer more cushioning for impact protection and blister prevention.',
    },
    {
      question: 'Are cycling socks good for running?',
      answer: 'Not ideal. Cycling socks lack the necessary cushioning for the high-impact nature of running, which could lead to discomfort or blisters over long distances.',
    },
    {
      question: 'What are the benefits of cycling socks?',
      answer: 'They improve airflow, reduce heat buildup in tight shoes, offer compression for circulation, and are lightweight for long rides.',
    },
    {
      question: 'Which socks are better for beginners?',
      answer: 'It depends on the activity. For general fitness, running socks are often more versatile due to their comfort and cushioning.',
    }
  ];

  const comparison = [
    { feature: 'Thickness', cycling: 'Thin & lightweight', running: 'Cushioned & thicker' },
    { feature: 'Purpose', cycling: 'Aerodynamics & breathability', running: 'Impact protection' },
    { feature: 'Ventilation', cycling: 'High airflow design', running: 'Moderate ventilation' },
    { feature: 'Support', cycling: 'Compression focused', running: 'Arch & heel cushioning' },
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
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-slate-500 font-semibold uppercase tracking-wider flex items-center gap-2">
            <a href="/blog" className="hover:text-black transition-colors">Blog</a>
            <span>•</span>
            <span className="text-slate-900">Buying Guides</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Cycling Socks vs Running Socks: Key Differences & Buying Guide
          </h1>

          <div className="flex items-center gap-4 text-slate-500 text-sm mb-8 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs">PM</span>
              <span className="font-bold text-slate-800">PeakMotion Editorial Team</span>
            </div>
            <span>|</span>
            <span>Published June 2026</span>
          </div>

          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/9] bg-gray-50">
            <img 
              src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-cycling-vs-running-comparison.jpg?v=2" 
              alt="Comparison infographic: Cycling Socks vs Running Socks features and performance" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 text-slate-700 text-[17px] leading-relaxed">
            <p>
              Choosing between <strong className="font-semibold text-slate-900">cycling socks vs running socks</strong> depends on your sport mechanics, shoe type, and performance needs. Although they may look similar, their structure and technical benefits are engineered for very different physical movements.
            </p>
          </div>

          {/* TOC Box */}
          <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6 md:p-8 my-8 text-left max-w-xl shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
            <h2 className="text-lg md:text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Table of Contents
            </h2>
            <ul className="space-y-2 text-sm md:text-base font-semibold">
              <li><a href="#overview-cycling" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">1. Overview of Cycling Socks</a></li>
              <li><a href="#overview-running" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">2. Overview of Running Socks</a></li>
              <li><a href="#benefits-cycling" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">3. Cycling Socks Benefits</a></li>
              <li><a href="#differences" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">4. Key Differences Table</a></li>
              <li><a href="#materials" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">5. Material Comparison</a></li>
              <li><a href="#faq" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">6. FAQ</a></li>
            </ul>
          </div>

          <section id="overview-cycling" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">Overview of Cycling Socks</h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Cycling socks are designed for aerodynamic efficiency and moisture control inside tight-fitting cycling shoes. Because cycling is a non-impact sport where the foot remains fixed, the primary goals are minimizing bulk and maximizing breathability.
            </p>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100">
              <img 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-cycling-vs-running-shoes.jpg?v=2" 
                alt="Close-up of a white PeakMotion cycling sock and black cycling shoe on a road bike" 
                className="w-full h-full object-cover" 
              />
            </div>
          </section>

          <section id="benefits-cycling" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">Cycling Socks Benefits</h2>
            <ul className="list-none pl-0 space-y-3 my-4">
              {[
                'Improved airflow in tight shoes',
                'Lightweight structure for long rides',
                'Moisture-wicking performance fibers',
                'Reduced heat buildup through mesh zones',
                'Compression support to aid blood circulation'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                  <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="overview-running" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">Overview of Running Socks</h2>
            <div className="my-6 rounded-xl overflow-hidden aspect-[16/9] bg-gray-50 border border-gray-100">
              <img src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-running-socks-overview.jpg?v=2" alt="Runner's legs and white shoes in motion" className="w-full h-full object-cover" />
            </div>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Running socks focus on impact protection and blister prevention. They typically include strategic cushioning in high-friction areas like the heel and ball of the foot to handle repetitive ground impact.
            </p>
          </section>

          <section id="differences" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">Comparison: Cycling vs Running Socks</h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <img 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-cycling-vs-running-side-by-side.jpg?v=1" 
                alt="Side-by-side comparison: Cycling Socks vs Running Socks" 
                className="w-full h-auto"
              />
            </div>
            <div className="overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Feature</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Cycling Socks</th>
                    <th className="p-4 font-bold uppercase tracking-wider text-sm">Running Socks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-4 font-semibold text-slate-900">{row.feature}</td>
                      <td className="p-4 text-slate-700">{row.cycling}</td>
                      <td className="p-4 text-slate-700">{row.running}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="materials" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">Material Comparison</h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <img 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-cycling-vs-running-materials-texture.jpg?v=1" 
                alt="Close-up of sports socks performance material textures" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">Both types of performance socks avoid 100% cotton to prevent moisture retention and blisters. Common performance materials include:</p>
            <ul className="list-none pl-0 space-y-3 my-4">
              <li className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                <span><strong>Polyester:</strong> For maximum moisture-wicking and fast drying.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                <span><strong>Nylon:</strong> Adds durability and maintains structure over time.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-[17px] leading-relaxed">
                <span className="text-black bg-[#b4ff2b] rounded-full w-5 h-5 flex items-center justify-center text-xs mt-1 shrink-0 font-extrabold">✓</span>
                <span><strong>Spandex:</strong> Provides the necessary stretch and compression fit.</span>
              </li>
            </ul>
          </section>

          <hr className="my-12 border-gray-100" />

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
              Looking for Custom Sports Socks Manufacturing?
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              PeakMotion provides OEM & private label cycling and running socks for global sports brands. We deliver high-performance solutions with custom technical specs to elevate your brand.
            </p>
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

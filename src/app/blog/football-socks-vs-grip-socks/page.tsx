import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Football Socks vs Grip Socks: Key Differences & Buying Guide | PeakMotion',
  description: 'Compare football socks vs grip socks. Learn key differences, benefits, materials, usage scenarios, and which socks are best for performance, training, and matches.',
};

export default function FootballSocksVsGripSocks() {
  const faqs = [
    {
      question: 'Do grip socks improve football performance?',
      answer: 'Yes. Grip socks improve traction inside boots, reducing slippage and enhancing stability and control.',
    },
    {
      question: 'Can I wear grip socks with football socks?',
      answer: 'Yes. Many players wear grip socks as an inner layer under football socks (often by cutting the foot off their team socks) for extra stability.',
    },
    {
      question: 'Which is better for football training?',
      answer: 'Grip socks are better for training due to improved foot stability and reduced internal movement.',
    },
    {
      question: 'Are grip socks allowed in matches?',
      answer: 'Yes, in most leagues they are allowed as long as outer socks meet uniform rules.',
    },
    {
      question: 'Who should use grip socks?',
      answer: 'They are ideal for football players, athletes, and training-focused users.',
    }
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
            <span className="text-slate-900">Football Socks</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Football Socks vs Grip Socks: What’s the Difference?
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
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/9] bg-gray-50">
            <img 
              src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-football-vs-grip-comparison.jpg?v=2" 
              alt="Football Socks vs Grip Socks Comparison" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Introduction */}
          <div className="space-y-6 text-slate-700 text-[17px] leading-relaxed mb-8">
            <p>
              If you play football regularly, you may have noticed two popular sock types on the pitch: traditional football socks and modern soccer grip socks. Although they may look similar at first glance, they serve different purposes and offer different performance benefits.
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
                <a href="#what" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  1. What Are Football Socks?
                </a>
              </li>
              <li>
                <a href="#grip" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  2. What Are Grip Socks?
                </a>
              </li>
              <li>
                <a href="#difference" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  3. Key Differences Between Football Socks and Grip Socks
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  4. Why Players Choose Grip Socks
                </a>
              </li>
              <li>
                <a href="#choose" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  5. Which One Should You Choose?
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
          <section id="what" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              What Are Football Socks?
            </h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Football socks are traditional long-length sports socks designed to be worn over shin guards. Their main purpose is team uniform consistency, basic comfort, and light protection during matches and training sessions.
            </p>
          </section>

          {/* Section 2 */}
          <section id="grip" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              What Are Grip Socks?
            </h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Grip socks are performance socks with silicone or rubber grip patterns on the sole. They are designed to reduce foot slippage inside football boots and improve stability, acceleration, and control.
            </p>
          </section>

          {/* Section 3 */}
          <section id="difference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Key Differences Between Football Socks and Grip Socks
            </h2>
            <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-gray-200 text-[15px] font-bold">
                    <th className="p-4 border-r border-slate-800">Feature</th>
                    <th className="p-4 border-r border-slate-800">Football Socks</th>
                    <th className="p-4">Grip Socks</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 text-[15px] divide-y divide-gray-100">
                  <tr className="even:bg-slate-50/70">
                    <td className="p-4 font-semibold text-slate-900 border-r border-gray-200">Function</td>
                    <td className="p-4 border-r border-gray-200">Team uniform + shin guard coverage</td>
                    <td className="p-4">Performance + anti-slip support</td>
                  </tr>
                  <tr className="even:bg-slate-50/70">
                    <td className="p-4 font-semibold text-slate-900 border-r border-gray-200">Grip Technology</td>
                    <td className="p-4 border-r border-gray-200">No grip</td>
                    <td className="p-4">Silicone anti-slip sole</td>
                  </tr>
                  <tr className="even:bg-slate-50/70">
                    <td className="p-4 font-semibold text-slate-900 border-r border-gray-200">Performance Impact</td>
                    <td className="p-4 border-r border-gray-200">Basic</td>
                    <td className="p-4">High stability & control</td>
                  </tr>
                  <tr className="even:bg-slate-50/70">
                    <td className="p-4 font-semibold text-slate-900 border-r border-gray-200">Usage</td>
                    <td className="p-4 border-r border-gray-200">Match uniform requirement</td>
                    <td className="p-4">Training & performance enhancement</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section id="benefits" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Why Players Choose Grip Socks
            </h2>
            <ul className="list-disc pl-6 space-y-2 my-4 text-slate-700 text-[17px] leading-relaxed">
              <li>Improved foot stability inside boots</li>
              <li>Reduced friction and blister risk</li>
              <li>Better acceleration and agility</li>
              <li>Enhanced ball control and movement precision</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="choose" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Which One Should You Choose?
            </h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              If your goal is team uniform compliance, football socks are necessary. However, if your focus is performance improvement, grip socks offer a clear advantage in stability and control.
            </p>
          </section>

          <hr className="my-12 border-gray-100" />

          {/* Section 6 (FAQ) */}
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
              Looking for Custom Grip Socks?
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              PeakMotion manufactures OEM & private label sports socks for football teams, sports brands, and retailers worldwide.
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

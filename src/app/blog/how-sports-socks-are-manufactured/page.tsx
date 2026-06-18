import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Sports Socks Are Manufactured: Complete Socks Production Process Guide (2026) | PeakMotion',
  description: 'Learn how sports socks are manufactured. Discover the complete socks production process, from yarn selection and knitting to quality control and packaging by a professional custom socks manufacturer.',
};

export default function HowSportsSocksAreManufactured() {
  const faqs = [
    {
      question: 'How long does sports socks manufacturing take?',
      answer: 'Most custom sports socks orders require approximately 20-35 days after sample approval.',
    },
    {
      question: 'What materials are used in sports socks manufacturing?',
      answer: 'Polyester, nylon, spandex and cotton blends are the most common materials used in sports socks production.',
    },
    {
      question: 'Can I customize sports socks with my logo?',
      answer: 'Yes. Most custom socks manufacturers offer woven logos, knitted logos and custom packaging.',
    },
    {
      question: 'What is the MOQ for custom sports socks?',
      answer: 'Many manufacturers support low MOQ orders starting from 50 pairs.',
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
            <span className="text-slate-900">OEM Manufacturing</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            How Sports Socks Are Manufactured: Complete Socks Production Process Guide
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

          {/* Featured Hero Image */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[16/9] bg-gray-50">
            <img 
              src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/manufacturing-hero-runners.jpg?v=2" 
              alt="Close-up of athletic socks on a runner on the track" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-sm text-slate-500 italic mt-2 mb-8 text-center">
            Close-up of athletic socks on a runner on the track
          </p>

          {/* Introduction */}
          <div className="space-y-6 text-slate-700 text-[17px] leading-relaxed">
            <p>
              Sports socks may look simple, but manufacturing high-performance athletic socks involves advanced knitting technology, premium yarn selection, strict quality control, and professional customization processes.
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
                <a href="#why-different" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  Why Sports Socks Manufacturing Is Different
                </a>
              </li>
              <li>
                <a href="#material-selection" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  Step 1: Material Selection
                </a>
              </li>
              <li>
                <a href="#design-development" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  Step 2: Design & Development
                </a>
              </li>
              <li>
                <a href="#knitting" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  Step 3: Computerized Knitting
                </a>
              </li>
              <li>
                <a href="#toe-linking" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  Step 4: Toe Linking
                </a>
              </li>
              <li>
                <a href="#silicone-printing" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  Step 5: Silicone Grip Printing
                </a>
              </li>
              <li>
                <a href="#quality-inspection" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  Step 6: Quality Inspection
                </a>
              </li>
              <li>
                <a href="#packaging" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  Step 7: Packaging
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-black hover:underline transition-colors block py-0.5">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          <hr className="my-10 border-gray-100" />

          {/* Section 1 */}
          <section id="why-different" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Why Sports Socks Manufacturing Is Different
            </h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Unlike regular socks, sports socks are engineered for athletic performance. Manufacturers must balance cushioning, breathability, compression support, moisture management, and durability.
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4 text-slate-700 text-[17px]">
              <li><strong className="font-semibold text-slate-900">Moisture Wicking:</strong> Keeping feet dry during intense activity.</li>
              <li><strong className="font-semibold text-slate-900">Compression Support:</strong> Improving blood flow and reducing muscle fatigue.</li>
              <li><strong className="font-semibold text-slate-900">Arch Stability:</strong> Ensuring the sock stays in place during multi-directional movements.</li>
              <li><strong className="font-semibold text-slate-900">Impact Cushioning:</strong> Reducing shock in high-impact areas like the heel and ball of the foot.</li>
              <li><strong className="font-semibold text-slate-900">Breathable Mesh Zones:</strong> Strategically placed panels to increase airflow.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="material-selection" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Step 1: Material Selection
            </h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <img 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/manufacturing-material-selection.jpg?v=2" 
                alt="High-quality yarn spools for sports socks manufacturing" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              The manufacturing process starts with selecting the right materials. The choice of yarn directly impacts the comfort, durability, and performance of the final product.
            </p>

            <div className="overflow-x-auto my-8 border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
              <table className="w-full border-collapse text-left text-sm md:text-base text-slate-700">
                <thead className="bg-slate-900 text-white text-xs md:text-sm uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6 font-bold">Material</th>
                    <th className="py-4 px-6 font-bold">Main Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="even:bg-slate-50/70 hover:bg-slate-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">Polyester</td>
                    <td className="py-4 px-6">Moisture Wicking</td>
                  </tr>
                  <tr className="even:bg-slate-50/70 hover:bg-slate-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">Nylon</td>
                    <td className="py-4 px-6">Durability</td>
                  </tr>
                  <tr className="even:bg-slate-50/70 hover:bg-slate-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">Spandex</td>
                    <td className="py-4 px-6">Elasticity</td>
                  </tr>
                  <tr className="even:bg-slate-50/70 hover:bg-slate-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">Cotton</td>
                    <td className="py-4 px-6">Soft Comfort</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section id="design-development" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Step 2: Design & Development
            </h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Before production begins, the custom socks manufacturer creates technical specifications including logo placement, sock height, colors, materials, and performance features. This stage ensures that the vision of the brand is perfectly translated into a manufacturable design.
            </p>
            <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <img 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/manufacturing-design-development.jpg?v=1" 
                alt="Design and technical development of custom sports socks" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 italic mb-8 -mt-4 text-center">
              Professional technical specifications and design development process
            </p>
          </section>

          {/* Section 4 */}
          <section id="knitting" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Step 3: Computerized Knitting
            </h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <img 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/manufacturing-knitting-machines.jpg?v=2" 
                alt="Advanced computerized knitting machines for sports socks production" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Modern computerized knitting machines produce precise sports sock structures, including compression zones, mesh ventilation, and terry cushioning. The machines are programmed with specific patterns to ensure consistency across thousands of pairs.
            </p>
          </section>

          {/* Section 5 */}
          <section id="toe-linking" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Step 4: Toe Linking
            </h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <img 
                src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/manufacturing-toe-linking.jpg?v=1" 
                alt="Socks toe linking process" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 italic mb-8 -mt-4 text-center">
              Specialized linking machines ensuring seamless comfort
            </p>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              After knitting, the toe area is closed using specialized linking machines. Seamless linking is a hallmark of high-quality sports socks, as it improves comfort and reduces friction that can cause blisters during athletic activities.
            </p>
          </section>

          {/* Section 6 */}
          <section id="silicone-printing" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Step 5: Silicone Grip Printing
            </h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              For grip socks, anti-slip silicone patterns are applied and heat cured to improve traction inside sports shoes. This process requires precision to ensure the silicone provides maximum grip without peeling off over time.
            </p>
          </section>

          {/* Section 7 */}
          <section id="quality-inspection" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Step 6: Quality Inspection
            </h2>
            <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800" 
                alt="sports socks quality control inspection" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Each production batch undergoes inspection to ensure consistency in size, color, stitching quality, and logo placement. Our dedicated QC team checks every pair to maintain international quality standards.
            </p>
          </section>

          {/* Section 8 */}
          <section id="packaging" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-12 mb-4">
              Step 7: Packaging
            </h2>
            <p className="text-slate-700 text-[17px] leading-relaxed mb-6">
              Sports socks are packed using custom labels, hang tags, retail boxes, or private label packaging according to customer requirements. Professional packaging not only protects the product but also enhances the brand's presentation in the retail market.
            </p>
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

          {/* Elegant Bottom CTA Module */}
          <section className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center my-16 border border-gray-100 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">
              Looking for a Reliable Custom Socks Manufacturer?
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              PeakMotion provides OEM and private label sports socks manufacturing services for sports brands, retailers, clubs, and distributors worldwide.
            </p>
            
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-700 max-w-2xl mx-auto py-2">
              <li className="flex items-center gap-1">
                <span className="text-black bg-[#b4ff2b] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">✓</span> Factory Direct Pricing
              </li>
              <li className="flex items-center gap-1">
                <span className="text-black bg-[#b4ff2b] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">✓</span> Flexible MOQ
              </li>
              <li className="flex items-center gap-1">
                <span className="text-black bg-[#b4ff2b] rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">✓</span> OEM & Private Label Support
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

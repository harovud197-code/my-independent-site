import { Metadata } from 'next';

// Force trigger a new deployment due to Vercel platform transient build error on previous commit
export const metadata: Metadata = {
  title: 'Custom Sports Socks Manufacturer | Grip, Football, Running & More | PeakMotion',
  description: 'Professional custom sports socks manufacturer offering grip socks, football socks, running socks, basketball socks, cycling socks, and Pilates socks. OEM & private label with low MOQ.',
};

export default function SportsSocks() {
  const products = [
    {
      title: 'Grip Socks',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/sports-socks-grip-yellow.jpg',
      desc: 'Non-slip performance socks designed for stability and control during sports and training.',
    },
    {
      title: 'Football Socks',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/sports-socks-football-kicking.jpg',
      desc: 'Durable team socks built for match performance and professional football use.',
    },
    {
      title: 'Running Socks',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/sports-socks-running-runner.jpg',
      desc: 'Lightweight breathable socks designed for long-distance running and endurance.',
    },
    {
      title: 'Basketball Socks',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/sports-socks-basketball.jpg',
      desc: 'High-impact sports socks engineered for court performance and support.',
    },
    {
      title: 'Cycling Socks',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/sports-socks-cycling-orange.jpg',
      desc: 'Lightweight aerodynamic socks designed for cycling performance and ventilation.',
    },
    {
      title: 'Pilates Socks',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/sports-socks-pilates-reformer.jpg',
      desc: 'Non-slip studio socks designed for balance and controlled movement.',
    }
  ];

  const faqs = [
    {
      question: 'What types of sports socks do you manufacture?',
      answer: 'We manufacture a wide range of custom sports socks, including grip socks, football socks, running socks, basketball socks, cycling socks, Pilates socks, and gym training socks. Our products are designed to meet the performance requirements of different sports and training environments.'
    },
    {
      question: 'Do you offer OEM and private label services?',
      answer: 'Yes. We provide complete OEM and private label manufacturing services for sports brands, teams, retailers, and distributors. We can customize logos, colors, materials, packaging, and product specifications according to your requirements.'
    },
    {
      question: 'What is your MOQ for custom sports socks?',
      answer: 'Our MOQ depends on the sock style, materials, and customization requirements. We support flexible low MOQ production for startups and growing brands while maintaining competitive pricing and quality standards.'
    },
    {
      question: 'What materials are commonly used in your sports socks?',
      answer: 'We offer a variety of performance materials including combed cotton, polyester, nylon, elastane, and high-performance blends. Material selection can be fully customized based on the intended sport, comfort requirements, moisture-management needs, and durability expectations.'
    },
    {
      question: 'Can I create my own custom design?',
      answer: 'Yes. You can provide your own artwork, logo, color references, or design concepts. Our professional design team can assist with technical adjustments and create production-ready mockups before starting sample production.'
    },
    {
      question: 'How long does sampling and production take?',
      answer: 'Sample production typically takes 5–10 business days depending on design complexity. Bulk production usually takes 15–30 days after sample approval. Lead times may vary based on order quantity and specific customization requirements.'
    },
    {
      question: 'Do you provide custom packaging solutions?',
      answer: 'Yes. We offer a variety of custom packaging options including header cards, belly bands, paper wraps, hang tags, custom boxes, zip-lock poly bags, and retail-ready packaging solutions to support your brand\'s unique presentation.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes. We work with customers worldwide and provide international shipping solutions (air, sea, express) for brands, teams, distributors, and retailers across North America, Europe, Australia, and other global markets.'
    },
    {
      question: 'Which sports or activities are your socks suitable for?',
      answer: 'Our sports socks are expertly designed for football/soccer, running, basketball, cycling, fitness training, Pilates, yoga, gym workouts, and other athletic activities. Different sock constructions are engineered to match specific performance demands.'
    },
    {
      question: 'Why choose PeakMotion as your sports socks manufacturer?',
      answer: 'PeakMotion combines advanced manufacturing capabilities, flexible customization options, low MOQ support, and strict quality control standards. We help brands develop high-performance sports socks that perfectly balance functionality, comfort, and brand identity.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="bg-black text-white px-5 lg:px-15 py-4.5 flex flex-col md:flex-row justify-between items-center sticky top-0 z-[999] gap-5 md:gap-0">
        <a href="/" className="text-3xl font-bold tracking-wider hover:text-[#b4ff2b] transition-colors">PeakMotion Socks</a>
        <nav className="flex flex-wrap justify-center gap-7">
          <a href="/" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">HOME</a>
          <a href="/sports-socks" className="text-[#b4ff2b] no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">SPORTS SOCKS</a>
          <a href="/#sports-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">PRODUCTS</a>
          <a href="/#custom-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">CUSTOM SOCKS</a>
          <a href="/#custom-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">OEM</a>
          <a href="/blog" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">BLOG</a>
          <a href="/#contact" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">CONTACT</a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="h-[80vh] md:h-[85vh] bg-cover bg-center flex items-center px-5 lg:px-15 text-white relative"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/sports-socks-hero.png')` 
          }}
        >
          <div className="max-w-[800px] space-y-6">
            <h1 className="text-5xl lg:text-[72px] leading-[1.1] font-extrabold uppercase">
              Custom <span className="text-[#b4ff2b]">Sports Socks</span> Manufacturer
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200">
              Premium OEM & Private Label Athletic Socks Solutions for Global Brands
            </p>
            <div className="pt-4">
              <a 
                href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20custom%20sports%20socks.%20Please%20send%20me%20a%20quote." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-10 py-5 rounded-full font-extrabold inline-block text-center bg-[#b4ff2b] text-black hover:bg-[#a3e627] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                GET CUSTOM QUOTE
              </a>
            </div>
          </div>
        </section>

        {/* "What Are Sports Socks?" introductory paragraph Section */}
        <section className="py-20 px-5 lg:px-15 bg-white">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-extrabold text-black uppercase">What Are Sports Socks?</h2>
              <div className="w-20 h-1.5 bg-[#b4ff2b] mx-auto"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Sports socks are specialized athletic socks designed to improve comfort, support, moisture management, and performance during physical activity. Different sports require different sock constructions, including grip technology, cushioning, compression support, breathability, and impact protection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 pt-6">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
                <p className="leading-relaxed">
                  PeakMotion is a professional custom sports socks manufacturer specializing in high-performance socks for sports brands, teams, retailers, and distributors worldwide. We offer a complete range of athletic socks including grip socks, football socks, running socks, basketball socks, cycling socks, Pilates socks, and gym training socks.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 space-y-4">
                <p className="leading-relaxed">
                  With advanced knitting technology, premium materials, and flexible OEM and private label solutions, we help brands create custom sports socks tailored to their market needs. From product development and sampling to bulk production and packaging, our manufacturing services support both emerging brands and established companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-5 lg:px-15 bg-[#fcfcfc]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-extrabold uppercase text-gray-900">OUR PREMIUM SPORTS SOCKS COLLECTION</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Explore our professionally engineered athletic socks designed to meet the rigorous demands of every sport and activity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => {
                const waText = encodeURIComponent(`Hello PeakMotion Socks, I am interested in your custom ${product.title}. Please send me a quote.`);
                const waUrl = `https://wa.me/8617357769219?text=${waText}`;
                return (
                  <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden group hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full">
                    <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </a>
                    </div>
                    <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-gray-900 hover:text-[#b4ff2b] transition-colors">
                          <a href={waUrl} target="_blank" rel="noopener noreferrer">{product.title}</a>
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {product.desc}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-gray-50">
                        <a 
                          href={waUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-extrabold text-black group/link hover:text-[#a3e627] transition-colors"
                        >
                          INQUIRE VIA WHATSAPP
                          <span className="text-[#a3e627] transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us & Custom Options Section */}
        <section className="py-20 px-5 lg:px-15 bg-[#111] text-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Column 1: Why Sports Brands Choose Us */}
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-extrabold uppercase border-b border-gray-800 pb-4">
                Why Sports Brands Choose Us
              </h2>
              <ul className="space-y-6">
                {[
                  'Improve athlete performance and comfort',
                  'Strengthen brand identity through custom designs',
                  'Create professional team uniforms',
                  'Enhance product differentiation in competitive markets',
                  'Increase customer loyalty through premium quality products',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="bg-[#b4ff2b] text-black rounded-full p-1 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-lg text-gray-300 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Custom Manufacturing Options */}
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-extrabold uppercase border-b border-gray-800 pb-4">
                Custom Manufacturing Options
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Custom Logos',
                  'Custom Colors',
                  'Custom Materials',
                  'Custom Packaging',
                  'Private Label Production',
                  'Retail Ready Packaging',
                  'Team & Club Collections',
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 flex items-center gap-4 hover:border-[#3a3a3a] transition-all">
                    <span className="text-[#b4ff2b] bg-white/5 rounded-full p-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-200 font-bold text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Industries Served & Why Work With Us */}
        <section className="py-20 px-5 lg:px-15 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Why Work With PeakMotion */}
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold uppercase text-gray-900 leading-tight">Why Work With PeakMotion?</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                PeakMotion provides OEM and private label sports sock manufacturing solutions for global brands seeking reliable quality, flexible production, and professional customization services. Our expertise covers performance sports socks, team socks, grip socks, studio socks, and branded athletic collections.
              </p>
              <div className="p-8 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm space-y-4">
                <h4 className="font-bold text-xl text-gray-900">100% Quality Assurance</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every single pair of sports socks goes through strict manual quality testing and verification. We utilize state-of-the-art knitting machines and premium combed cotton and sports yarns to guarantee optimal flexibility, longevity, and superior performance.
                </p>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h3 className="text-3xl font-extrabold uppercase mb-8 text-gray-900">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Sports Brands', icon: '👟' },
                  { name: 'Football Clubs', icon: '⚽' },
                  { name: 'Basketball Teams', icon: '🏀' },
                  { name: 'Fitness Brands', icon: '💪' },
                  { name: 'Pilates Studios', icon: '🧘' },
                  { name: 'Cycling Clubs', icon: '🚴' },
                  { name: 'E-commerce Sellers', icon: '🛒' },
                  { name: 'Retail Chains', icon: '🏬' },
                ].map((ind, i) => (
                  <div key={i} className="flex items-center gap-3.5 p-5 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 transition-all hover:shadow-sm">
                    <span className="text-2xl">{ind.icon}</span>
                    <span className="font-extrabold text-gray-800 text-sm">{ind.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-5 lg:px-15 bg-[#fcfcfc] border-t border-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold uppercase text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group border border-gray-100 rounded-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.01)] [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 md:p-8 text-gray-950 select-none">
                    <h3 className="font-extrabold text-lg md:text-xl pr-4 text-gray-900">{faq.question}</h3>
                    <span className="shrink-0 rounded-full bg-gray-50 p-2 text-gray-900 border border-gray-100 group-open:rotate-180 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-gray-50 text-gray-600 leading-relaxed text-base">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-24 px-5 lg:px-15 bg-black text-white text-center" id="contact">
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex justify-center">
              <a 
                href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20custom%20sports%20socks.%20Please%20send%20me%20a%20quote." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#b4ff2b] text-black font-extrabold text-2xl md:text-3xl lg:text-4xl uppercase hover:bg-[#a3e627] hover:scale-105 active:scale-95 transition-all duration-300 px-16 py-6 md:px-24 md:py-8 rounded-full inline-block shadow-[0_10px_30px_rgba(180,255,43,0.15)]"
              >
                CONTACT US
              </a>
            </div>
            <p className="text-gray-400 text-lg mt-5">Professional Sports Socks OEM Manufacturer</p>
          </div>
        </section>
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

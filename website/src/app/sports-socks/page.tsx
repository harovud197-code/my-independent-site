import Image from 'next/image';
import { Metadata } from 'next';

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
        <section className="h-[80vh] md:h-[85vh] flex items-center px-5 lg:px-15 text-white relative overflow-hidden">
          <Image 
            src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/sports-socks-hero.png" 
            alt="Custom Sports Socks Manufacturer" 
            fill 
            priority
            unoptimized={true}
            className="object-cover z-0 brightness-[0.5]" 
          />
          <div className="max-w-[800px] space-y-6 relative z-10">
            <h1 className="text-5xl lg:text-[72px] leading-[1.1] font-extrabold uppercase">
              Custom <span className="text-[#b4ff2b]">Sports Socks</span> Manufacturer
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-[600px]">
              PeakMotion delivers high-performance sports socks with professional OEM & private label services. Elevate your brand with custom designs, premium materials, and flexible production.
            </p>
            <div className="pt-4">
              <a 
                href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20custom%20sports%20socks.%20Please%20send%20me%20a%20quote." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#b4ff2b] text-black font-extrabold text-lg uppercase hover:bg-[#a3e627] hover:scale-105 active:scale-95 transition-all duration-300 px-10 py-5 rounded-full inline-block shadow-[0_10px_30px_rgba(180,255,43,0.3)]"
              >
                Start Your Custom Project
              </a>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-24 px-5 lg:px-15 bg-white max-w-7xl mx-auto" id="products">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-gray-900 leading-tight">
                Our Performance <br />
                <span className="text-[#a3e627]">Socks Categories</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#b4ff2b]"></div>
            </div>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed">
              Explore our wide range of professional sports socks, each engineered for specific athletic demands and high-level performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const waText = encodeURIComponent(`Hello PeakMotion Socks, I am interested in your custom ${product.title}. Please send me a quote.`);
              const waUrl = `https://wa.me/8617357769219?text=${waText}`;
              return (
                <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden group hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full">
                  <div className="relative overflow-hidden aspect-square bg-gray-50">
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                      <Image 
                        src={product.img} 
                        alt={product.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </a>
                  </div>
                  <div className="p-8 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#a3e627] transition-colors">{product.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-gray-50">
                      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-black font-extrabold text-sm uppercase tracking-wider flex items-center gap-2 group/link">
                        Get Pricing <span className="text-[#a3e627] transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Customization Options */}
        <section className="py-24 bg-black text-white relative overflow-hidden" id="custom-socks">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-[#b4ff2b]/20 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-5 lg:px-15 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
                  Full Customization <br />
                  <span className="text-[#b4ff2b]">At Your Fingertips</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#b4ff2b]"></div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                As a specialized socks manufacturer, we provide complete flexibility in design and production. Whether you need specific performance yarns or unique branding, our factory is equipped to bring your vision to life.
              </p>
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

            <div className="bg-[#111] p-10 rounded-3xl border border-[#222] shadow-2xl space-y-8">
              <h3 className="text-3xl font-extrabold uppercase">Ready to elevate your brand?</h3>
              <p className="text-gray-400">Join 200+ global sports brands and teams who trust PeakMotion for their custom sock manufacturing needs.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-[#b4ff2b]/10 flex items-center justify-center text-[#b4ff2b]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Low Minimum Orders</h4>
                    <p className="text-sm text-gray-500">Flexible MOQ for startups and teams.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-[#b4ff2b]/10 flex items-center justify-center text-[#b4ff2b]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Fast Sampling & Prototyping</h4>
                    <p className="text-sm text-gray-500">7-10 day turnaround for custom samples.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <a 
                  href="/#contact" 
                  className="w-full bg-[#b4ff2b] text-black font-extrabold text-center py-5 rounded-2xl block hover:bg-[#a3e627] transition-all text-xl uppercase tracking-wider"
                >
                  Get A Custom Quote
                </a>
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
              <a href="/#inquiry" className="hover:text-[#b4ff2b] transition-colors">GET QUOTE</a>
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

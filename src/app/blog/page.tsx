import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sports Socks Blog | Custom Socks Manufacturing & Industry Insights | PeakMotion',
  description: 'Explore expert guides on sports socks, custom sock manufacturing, OEM production, private label services, materials, design trends, and industry insights for sports brands and retailers.',
};

export default function Blog() {
  const posts = [
    {
      title: 'What Are Grip Socks? Benefits, Uses and Buying Guide',
      href: '/blog/what-are-grip-socks',
      desc: 'Learn how grip socks improve stability, performance, and comfort across multiple sports.',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-what-are-grip-socks-wide.jpg',
      category: 'Grip Socks',
    },
    {
      title: 'Custom Sports Socks Manufacturer: Complete OEM Guide',
      href: '/blog/custom-sports-socks-manufacturer-guide',
      desc: 'Everything brands need to know about OEM and private label sports socks production.',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-oem-guide.jpg',
      category: 'OEM Manufacturing',
    },
    {
      title: 'How to Start a Custom Socks Brand',
      href: '/blog/how-to-start-a-custom-socks-brand',
      desc: 'A practical roadmap for launching your own sports socks business.',
      img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800',
      category: 'Custom Socks',
    },
    {
      title: "Football Socks vs Grip Socks: What's the Difference?",
      href: '#',
      desc: 'Compare football socks and grip socks to choose the right option for your team.',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-football-vs-grip.jpg',
      category: 'Football Socks',
    },
    {
      title: 'Best Materials for Sports Socks',
      href: '#',
      desc: 'Discover the advantages of cotton, polyester, nylon, and performance blends.',
      img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800',
      category: 'Materials',
    },
    {
      title: 'How Sports Socks Are Manufactured',
      href: '#',
      desc: 'Explore the complete production process from knitting to packaging.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      category: 'OEM Manufacturing',
    },
  ];

  const categories = [
    'Grip Socks', 'Football Socks', 'Running Socks', 'Basketball Socks',
    'Cycling Socks', 'Pilates Socks', 'Gym Socks', 'Custom Socks',
    'OEM Manufacturing', 'Private Label', 'Materials', 'Buying Guides'
  ];

  const faqs = [
    {
      question: 'What topics does the PeakMotion blog cover?',
      answer: 'We cover sports socks, OEM manufacturing, private label services, materials, packaging, and industry best practices.'
    },
    {
      question: 'Are these articles useful for sports brands?',
      answer: 'Yes. Our content is created for sports brands, retailers, distributors, and teams seeking high-quality sports socks.'
    },
    {
      question: 'How often is new content published?',
      answer: 'We regularly publish new guides and industry insights to help our customers stay informed.'
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="text-center py-24 bg-slate-50 border-b border-gray-100 px-5">
          <div className="max-w-4xl mx-auto space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] uppercase">
              Sports Socks Blog & <span className="text-black">Manufacturing Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover expert guides, product comparisons, customization tips, and manufacturing knowledge for sports brands, retailers, distributors, and teams worldwide.
            </p>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-20 px-5 lg:px-15 max-w-7xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-900">Featured & Latest Articles</h2>
            <div className="w-20 h-1.5 bg-[#b4ff2b]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden group hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
                  <a href={post.href} className="block w-full h-full">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </a>
                  <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#a3e627] transition-colors leading-snug">
                      <a href={post.href}>{post.title}</a>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-50">
                    <a 
                      href={post.href} 
                      className="inline-flex items-center gap-2 text-sm font-extrabold text-black group/link hover:text-[#a3e627] transition-colors"
                    >
                      READ MORE
                      <span className="text-[#a3e627] transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-[#fcfcfc] px-5 lg:px-15 border-y border-gray-100">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-gray-900">Browse by Category</h2>
              <div className="w-12 h-1 bg-[#b4ff2b]"></div>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="px-5 py-2.5 bg-white hover:bg-[#b4ff2b] hover:text-black hover:border-[#b4ff2b] transition-all rounded-full text-sm font-semibold text-gray-800 border border-gray-200"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-20 px-5 lg:px-15 bg-white max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-900 leading-tight">
                Why Sports Brands Trust PeakMotion Insights
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our blog provides practical information about sports socks design, manufacturing, customization, and market trends.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are launching a new brand, expanding a product line, or sourcing a reliable manufacturer, our resources help you make informed decisions. We synthesize decades of production floor experience to help you bypass common manufacturing pitfalls and establish a robust, high-margin supply chain.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-6">
              {[
                { title: 'Factory-Floor Expertise', desc: 'Direct technical insights from experienced textile engineers and raw-material experts.' },
                { title: 'Global Compliance & Trends', desc: 'Up-to-date analysis of worldwide import regulations, HS classifications, and market demands.' },
                { title: 'DTC and Wholesale Ready', desc: 'Actionable blueprints for e-commerce brands, sports teams, and volume distributors alike.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="bg-[#b4ff2b]/20 text-[#a3e627] rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0 font-bold">
                    {idx + 1}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-gray-900 text-base">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-5 lg:px-15 bg-[#fcfcfc] border-t border-gray-100">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-center text-gray-900">Frequently Asked Questions</h2>
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
                href="/#contact" 
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

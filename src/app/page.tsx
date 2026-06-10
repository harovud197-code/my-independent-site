export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="bg-black text-white px-5 lg:px-15 py-4.5 flex flex-col md:flex-row justify-between items-center sticky top-0 z-[999] gap-5 md:gap-0">
        <div className="text-3xl font-bold tracking-wider">PeakMotion Socks</div>
        <nav className="flex flex-wrap justify-center gap-7">
          <a href="#" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">HOME</a>
          <a href="/sports-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">SPORTS SOCKS</a>
          <a href="#sports-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">PRODUCTS</a>
          <a href="#custom-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">CUSTOM SOCKS</a>
          <a href="#custom-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">OEM</a>
          <a href="#" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">BLOG</a>
          <a href="#contact" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">CONTACT</a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="h-[85vh] md:h-[95vh] bg-cover bg-center flex items-center px-5 lg:px-15 text-white relative"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/hero-poster.png')` 
          }}
        >
          <div className="max-w-[720px]">
            <h1 className="text-5xl lg:text-[78px] leading-[1.05] mb-6 font-extrabold uppercase">
              PROFESSIONAL <span className="text-[#b4ff2b]">SPORTS SOCKS</span> MANUFACTURER
            </h1>
            <p className="text-xl lg:text-[22px] mb-9">
              OEM Grip Socks Football Socks & Private Label Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/8617357769219" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-4 rounded font-bold inline-block text-center bg-[#b4ff2b] text-black hover:bg-[#a3e627] transition-colors"
              >
                GET QUOTE
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-15 px-5 lg:px-15 relative z-10">
          {[
            { label: '15+', sub: 'Years Experience' },
            { label: '200+', sub: 'Advanced Machines' },
            { label: '500+', sub: 'Global Clients' },
            { label: '100%', sub: 'QC Inspection' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-7 shadow-[0_10px_25px_rgba(0,0,0,0.08)] rounded-lg text-center">
              <h3 className="text-4xl font-bold mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.sub}</p>
            </div>
          ))}
        </section>

        {/* Products Section */}
        <section className="py-22 px-5 lg:px-15" id="sports-socks">
          <h2 className="text-4xl lg:text-[48px] mb-5 font-extrabold uppercase">OUR PRODUCT COLLECTION</h2>
          <p className="text-gray-500 mb-12">
            High-performance custom sports socks for every sport and activity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { 
                title: 'Grip socks', 
                tag: '',
                img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/grip-socks.jpg',
                desc: 'Professional custom grip socks manufacturer offering non-slip sports socks for football, soccer, pilates, and gym training. Designed with advanced anti-slip grip technology to enhance stability, performance, and comfort during high-intensity movement. OEM and private label services available with flexible MOQ for global sports brands and teams.'
              },
              { 
                title: 'Football Socks', 
                tag: '',
                img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/football-socks.png',
                desc: 'Custom football socks manufacturer specializing in high-performance soccer socks for teams, clubs, and sports brands. Designed for comfort, durability, and moisture management during intense matches and training sessions. We provide OEM and private label solutions with flexible MOQ, supporting full customization of colors, logos, and packaging.'
              },
              { 
                title: 'Pilates Socks', 
                tag: '',
                img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/pilates-socks.jpg',
                desc: 'Custom Pilates socks manufacturer specializing in non-slip grip socks for Pilates, yoga, and studio training. Designed to improve balance, stability, and safety during low-impact workouts on reformer machines and studio floors. We offer OEM and private label services with flexible MOQ and full customization options for global fitness and wellness brands.'
              },
              { 
                title: 'Custom Socks', 
                tag: '',
                img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/custom-socks.png',
                desc: 'A professional sock manufacturing partner offering end-to-end customization services for global brands. From concept development to bulk production, we support full OEM and private label solutions including design execution, material sourcing, logo application, and packaging customization. Built for startups, DTC brands, and established retailers requiring scalable and flexible manufacturing support.'
              },
              { 
                title: 'Running Socks', 
                tag: '',
                img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/running-socks.jpg',
                desc: 'Performance running socks designed to support athletes through every mile. Featuring lightweight construction, advanced moisture management, strategic cushioning, and ergonomic fit, our running socks help improve comfort and reduce friction during training and competition. Available for OEM and private label programs with custom colors, branding, and packaging solutions.'
              },
              { 
                title: 'Cycling Socks', 
                tag: '',
                img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/cycling-socks.jpg',
                desc: 'Purpose-built cycling socks designed for riders who prioritize speed, efficiency, and all-day comfort. Featuring a lightweight construction and performance-focused fit, our cycling socks help maintain airflow and reduce excess bulk inside cycling shoes. Ideal for road cycling teams, competitive riders, cycling events, and private label collections, with extensive customization options for branding, colors, and packaging.'
              },
              { 
                title: 'Basketball Socks', 
                tag: '',
                img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/basketball-socks.jpg',
                desc: 'Built for the demands of the court, our basketball socks combine targeted cushioning, secure support, and durable construction to help athletes perform with confidence. Designed for quick direction changes, jumps, and high-impact play, they deliver comfort and stability throughout training sessions and competitive games. Ideal for basketball brands, teams, academies, and custom uniform programs.'
              },
              { 
                title: 'Gym Socks', 
                tag: '',
                img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/training-socks.png',
                desc: 'High-performance gym socks designed for strength training, fitness workouts, and cross-training in the gym environment. Built with breathable materials, moisture control, and a supportive fit, they provide lasting comfort and stability during weightlifting, treadmill sessions, and high-intensity workouts. Available for OEM and private label customization with full branding options.'
              },
            ].map((product: any, i) => (
              <div key={i} className="bg-white group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                  <a 
                    href={`https://wa.me/8617357769219?text=${encodeURIComponent(`Hello PeakMotion Socks, I am interested in your ${product.title}. Please send me a quote.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </a>
                  {product.tag && (
                    <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase">
                      {product.tag}
                    </div>
                  )}
                  <button className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-1.5">
                  <h3 className={`text-lg font-bold truncate hover:text-[#b4ff2b] transition-colors ${['Grip socks', 'Football Socks', 'Pilates Socks', 'Custom Socks', 'Running Socks', 'Cycling Socks', 'Basketball Socks', 'Gym Socks'].includes(product.title) ? '' : 'uppercase'}`}>
                    <a 
                      href={`https://wa.me/8617357769219?text=${encodeURIComponent(`Hello PeakMotion Socks, I am interested in your ${product.title}. Please send me a quote.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {product.title}
                    </a>
                  </h3>
                  
                  {product.desc ? (
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed text-left pt-1">
                      {product.desc}
                    </p>
                  ) : (
                    <>
                      <p className="text-gray-500 text-sm font-medium">MOQ: {product.moq}</p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex -space-x-1">
                            {product.colors?.map((color: string, idx: number) => (
                              <span 
                                key={idx} 
                                className="w-3.5 h-3.5 rounded-full border border-white" 
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <span className="text-[12px] font-bold text-gray-400">{product.moreColors}</span>
                        </div>
                        <a 
                          href={`https://wa.me/8617357769219?text=${encodeURIComponent(`Hello PeakMotion Socks, I am interested in your ${product.title}. Please send me a quote.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-gray-900 hover:text-[#b4ff2b] transition-colors uppercase"
                        >
                          Inquire
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-22 px-5 lg:px-15 bg-[#111] text-white">
          <h2 className="text-4xl lg:text-[48px] mb-12 font-extrabold uppercase">WHY CHOOSE PEAKMOTION SOCKS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'OEM / ODM Support', desc: 'Custom logo, material, packaging and color matching available.' },
              { title: 'Fast Sampling', desc: 'Quick sample production with professional design support.' },
              { title: 'Global Shipping', desc: 'Worldwide delivery service for Amazon, wholesale and brands.' },
              { title: 'Factory Direct', desc: 'Competitive factory pricing with stable production capacity.' },
            ].map((feature, i) => (
              <div key={i} className="p-7 border border-[#333] rounded-xl hover:border-[#555] transition-colors">
                <h3 className="text-2xl font-bold mb-3.5">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Customization Section */}
        <section className="py-22 px-5 lg:px-15 bg-[#f7f7f7]" id="custom-socks">
          <h2 className="text-4xl lg:text-[48px] mb-12 font-extrabold uppercase">OEM / ODM CUSTOMIZATION</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Custom Logo', desc: 'Jacquard, embroidery and printing logo options.' },
              { title: 'Custom Material', desc: 'Cotton, nylon, polyester, bamboo and spandex.' },
              { title: 'Custom Packaging', desc: 'Hang tag, zipper bag, gift box and retail packaging.' },
              { title: 'Custom Colors', desc: 'Pantone color matching and full color customization.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-7 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-22 px-5 lg:px-15 bg-black text-white text-center" id="contact">
          <div className="space-y-4">
            <div className="flex justify-center">
              <a 
                href="https://wa.me/8617357769219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#b4ff2b] text-black font-extrabold text-2xl md:text-3xl lg:text-4xl uppercase hover:bg-[#a3e627] hover:scale-105 active:scale-95 transition-all duration-300 px-16 py-6 md:px-24 md:py-8 rounded-full inline-block"
              >
                CONTACT US
              </a>
            </div>
            <p className="text-gray-400 mt-5">Professional Sports Socks OEM Manufacturer</p>
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

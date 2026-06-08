export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="bg-black text-white px-5 lg:px-15 py-4.5 flex flex-col md:flex-row justify-between items-center sticky top-0 z-[999] gap-5 md:gap-0">
        <div className="text-3xl font-bold tracking-wider">ZENSTRIDE</div>
        <nav className="flex flex-wrap justify-center gap-7">
          <a href="#" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">HOME</a>
          <a href="#" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">PRODUCTS</a>
          <a href="#" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">OEM/ODM</a>
          <a href="#" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">ABOUT</a>
          <a href="#" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">CONTACT</a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="h-[85vh] md:h-[95vh] bg-cover bg-center flex items-center px-5 lg:px-15 text-white relative"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://sc02.alicdn.com/kf/A7100e3b2b42840589be5eb5e4d33354ad.png')` 
          }}
        >
          <div className="max-w-[720px]">
            <h1 className="text-5xl lg:text-[78px] leading-[1.05] mb-6 font-extrabold uppercase">
              PROFESSIONAL <span className="text-[#b4ff2b]">SPORTS SOCKS</span> MANUFACTURER
            </h1>
            <p className="text-xl lg:text-[22px] mb-9">
              OEM & ODM Services · Custom Logo · Low MOQ · Fast Global Shipping
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#" className="px-8 py-4 rounded font-bold inline-block text-center bg-[#b4ff2b] text-black hover:bg-[#a3e627] transition-colors">
                VIEW PRODUCTS
              </a>
              <a href="#" className="px-8 py-4 rounded font-bold inline-block text-center border border-white text-white hover:bg-white hover:text-black transition-all">
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
        <section className="py-22 px-5 lg:px-15">
          <h2 className="text-4xl lg:text-[48px] mb-5 font-extrabold uppercase">OUR PRODUCT COLLECTION</h2>
          <p className="text-gray-500 mb-12">
            High-performance custom sports socks for every sport and activity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { 
                title: 'Football Socks', 
                moq: '300 Pairs',
                tag: 'FOOTBALL',
                img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
                colors: ['#000', '#fff', '#ff0000', '#0000ff'],
                moreColors: '+12'
              },
              { 
                title: 'Grip Socks', 
                moq: '500 Pairs',
                tag: 'HOT ITEM',
                img: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop',
                colors: ['#000', '#444', '#888', '#ccc'],
                moreColors: '+8'
              },
              { 
                title: 'Running Socks', 
                moq: '300 Pairs',
                tag: 'CUSTOM LOGO',
                img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
                colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
                moreColors: '+6'
              },
              { 
                title: 'Basketball Socks', 
                moq: '300 Pairs',
                tag: 'NEW ARRIVAL',
                img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop',
                colors: ['#000', '#facc15', '#fff', '#4b5563'],
                moreColors: '+10'
              },
            ].map((product, i) => (
              <div key={i} className="bg-white group">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4">
                  <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase">
                    {product.tag}
                  </div>
                  <button className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-900 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold truncate uppercase">{product.title}</h3>
                  <p className="text-gray-500 text-sm font-medium">MOQ: {product.moq}</p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex -space-x-1">
                      {product.colors.map((color, idx) => (
                        <span 
                          key={idx} 
                          className="w-3.5 h-3.5 rounded-full border border-white" 
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="text-[12px] font-bold text-gray-400">{product.moreColors}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-22 px-5 lg:px-15 bg-[#111] text-white">
          <h2 className="text-4xl lg:text-[48px] mb-12 font-extrabold uppercase">WHY CHOOSE ZENSTRIDE</h2>
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
        <section className="py-22 px-5 lg:px-15 bg-[#f7f7f7]">
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
        <section className="py-22 px-5 lg:px-15 bg-black text-white text-center">
          <h2 className="text-4xl lg:text-[48px] mb-10 font-extrabold uppercase">CONTACT US</h2>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl">Email: sales@zenstride.com</p>
            <p className="text-xl md:text-2xl">WhatsApp: +1 888 888 8888</p>
            <p className="text-gray-400 mt-5">Professional Sports Socks OEM Manufacturer</p>
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <a 
        href="#" 
        className="fixed right-5 bottom-5 bg-[#25D366] text-white w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-xl z-[1000] hover:scale-110 transition-transform"
      >
        💬
      </a>

      {/* Footer */}
      <footer className="p-7 bg-[#111] text-[#999] text-center border-t border-[#222]">
        <p className="text-sm">© 2026 ZENSTRIDE SPORTS SOCKS MANUFACTURER</p>
      </footer>
    </div>
  );
}


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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1800&auto=format&fit=crop')` 
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              { 
                title: 'Football Socks', 
                desc: 'Breathable compression football socks with custom logo support.', 
                badge: 'OEM AVAILABLE',
                img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop'
              },
              { 
                title: 'Grip Socks', 
                desc: 'Anti-slip grip socks for yoga, pilates and football training.', 
                badge: 'HOT PRODUCT',
                img: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop'
              },
              { 
                title: 'Running Socks', 
                desc: 'Moisture-wicking running socks with arch support cushioning.', 
                badge: 'CUSTOM COLORS',
                img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'
              },
            ].map((product, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden transition-transform hover:-translate-y-1.5 shadow-sm hover:shadow-md">
                <img src={product.img} alt={product.title} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[12px] font-semibold mb-3.5 uppercase">
                    {product.badge}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-600">{product.desc}</p>
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


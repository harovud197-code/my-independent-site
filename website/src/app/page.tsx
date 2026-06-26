'use client';

import Image from 'next/image';

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit clicked");
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const name = formData.get('name') || 'Customer';
      const company = formData.get('company') || 'N/A';
      const email = formData.get('email') || 'N/A';
      const whatsapp = formData.get('whatsapp') || 'N/A';
      const productType = formData.get('productType') || 'N/A';
      const quantity = formData.get('quantity') || 'N/A';
      const logoPlacement = formData.get('logoPlacement') || 'N/A';
      const details = formData.get('details') || 'N/A';

      const subject = `New Inquiry from ${name} - PeakMotion Socks`;
      const body = `
New Custom Socks Inquiry:
--------------------------
Name: ${name}
Company: ${company}
Email: ${email}
WhatsApp/Phone: ${whatsapp}
Product Type: ${productType}
Quantity: ${quantity}
Logo Placement: ${logoPlacement}
Project Details: ${details}
      `;

      const mailtoUrl = `mailto:abayacloth@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      alert("Preparing your inquiry... Your email client will now open to send the details to abayacloth@hotmail.com.");
      window.location.href = mailtoUrl;
      
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error preparing the email. Please contact us directly at abayacloth@hotmail.com.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="bg-black text-white px-5 lg:px-15 py-4.5 flex flex-col md:flex-row justify-between items-center sticky top-0 z-[999] gap-5 md:gap-0">
        <a href="/" className="text-3xl font-bold tracking-wider hover:text-[#b4ff2b] transition-colors">PeakMotion Socks</a>
        <nav className="flex flex-wrap justify-center gap-7">
          <a href="/" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">HOME</a>
          <a href="/sports-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">SPORTS SOCKS</a>
          <a href="#sports-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">PRODUCTS</a>
          <a href="#custom-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">CUSTOM SOCKS</a>
          <a href="#custom-socks" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">OEM</a>
          <a href="/blog" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">BLOG</a>
          <a href="#contact" className="text-white no-underline text-sm font-medium hover:text-[#b4ff2b] transition-colors">CONTACT</a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="h-[85vh] md:h-[95vh] flex items-center px-5 lg:px-15 text-white relative overflow-hidden">
          <Image 
            src="https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/hero-poster.png" 
            alt="PeakMotion Sports Socks Hero" 
            fill 
            priority
            unoptimized={true}
            className="object-cover z-0 brightness-[0.45]" 
          />
          <div className="max-w-[720px] relative z-10">
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
              <a 
                href="/sports-socks" 
                className="px-8 py-4 rounded font-bold inline-block text-center border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Sports Socks
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-15 px-5 lg:px-15 relative z-10">
          {[
            { label: '20+', sub: 'Years Experience' },
            { label: '200+', sub: 'Advanced Machines' },
            { label: '5000+', sub: 'Global Clients' },
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
                <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                  <a 
                    href={`https://wa.me/8617357769219?text=${encodeURIComponent(`Hello PeakMotion Socks, I am interested in your ${product.title}. Please send me a quote.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <Image 
                      src={product.img} 
                      alt={product.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
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

          <div className="mt-12 flex justify-center">
            <a 
              href={`https://wa.me/8617357769219?text=${encodeURIComponent('Hello PeakMotion Socks, I am interested in requesting a physical sample. Please let me know the details.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#b4ff2b] text-black font-bold uppercase px-10 py-4 rounded-full text-lg hover:bg-[#a3e627] hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Request a Physical Sample Today →
            </a>
          </div>
        </section>

        {/* Manufacturing Excellence Section */}
        <section className="py-22 px-5 lg:px-15 bg-[#0b0b0b] text-white">
          <div className="max-w-7xl mx-auto space-y-24">
            
            {/* Manufacturing Facility */}
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl lg:text-[48px] font-extrabold uppercase">Our Manufacturing Facility</h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                  We operate advanced knitting machines and quality control systems to ensure every pair of socks meets international standards.
                </p>
              </div>

              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-[#222]">
                <Image 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200"
                  alt="sports socks knitting machine factory"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Knitting Production', desc: 'High-speed computerized knitting machines for precision sock manufacturing.', icon: '🧶' },
                  { title: 'Material Control', desc: 'Carefully selected yarns for durability, breathability, and comfort.', icon: '🧵' },
                  { title: 'Quality Inspection', desc: 'Strict QC system ensures defect-free socks before packaging.', icon: '🧪' },
                ].map((item, i) => (
                  <div key={i} className="bg-[#141414] border border-[#222] p-8 rounded-2xl hover:border-[#b4ff2b]/30 transition-colors group text-left">
                    <span className="text-4xl mb-6 block">{item.icon}</span>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#b4ff2b] transition-colors">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[#222]">
                <Image 
                  src="https://images.unsplash.com/photo-1528476513691-07e6f563d97f?w=1200"
                  alt="custom socks production process factory"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8 text-left">
                <h2 className="text-4xl font-extrabold uppercase">Production Process</h2>
                <div className="space-y-4">
                  {[
                    'Material Selection',
                    'Design & Development',
                    'Computerized Knitting',
                    'Toe Linking',
                    'Silicone Grip Printing',
                    'Quality Inspection',
                    'Packaging & Shipping'
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-5 group">
                      <span className="w-10 h-10 rounded-full border-2 border-[#b4ff2b] text-[#b4ff2b] flex items-center justify-center font-bold shrink-0 group-hover:bg-[#b4ff2b] group-hover:text-black transition-all">
                        {idx + 1}
                      </span>
                      <span className="text-xl font-medium text-gray-300 group-hover:text-white transition-colors">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Manufacturing Capabilities */}
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-4xl lg:text-[48px] font-extrabold uppercase">Our Manufacturing Capabilities</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Low MOQ', desc: 'Start your brand with only 50–100 pairs per design.', icon: '⚡' },
                  { title: 'Full Customization', desc: 'Logo, color, thickness, grip design, packaging.', icon: '🎨' },
                  { title: 'Fast Delivery', desc: 'Sample in 3–5 days, bulk production in 15–25 days.', icon: '🚚' },
                ].map((cap, i) => (
                  <div key={i} className="bg-[#141414] border border-[#222] p-8 rounded-2xl hover:border-[#b4ff2b]/30 transition-colors group text-left">
                    <span className="text-4xl mb-6 block">{cap.icon}</span>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#b4ff2b] transition-colors">{cap.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>

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

          <div className="mt-12 flex justify-center">
            <a 
              href={`https://wa.me/8617357769219?text=${encodeURIComponent("Hello PeakMotion Socks, I am ready to start step 1 of my custom socks project. Please let me know how to proceed.")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#b4ff2b] text-black font-bold uppercase px-10 py-4 rounded-full text-lg hover:bg-[#a3e627] hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Step 1 Now — It's Free →
            </a>
          </div>
        </section>

        {/* Inquiry Form Section */}
        <section className="py-22 px-5 lg:px-15 bg-[#0b0b0b] text-white" id="inquiry">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4 mb-10">
              <h2 className="text-4xl lg:text-[48px] font-extrabold uppercase leading-tight">
                🎁 Free Quote + <span className="text-[#b4ff2b]">Custom Socks Mockup</span> in 24 Hours
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-3xl">
                Custom sports socks manufacturer for OEM & private label brands. Low MOQ, fast response, factory direct pricing.
              </p>
            </div>

            <div className="bg-[#141414] p-6 rounded-2xl border border-gray-800 mb-10 inline-block shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <strong className="text-gray-200 font-bold uppercase tracking-wide text-sm">PeakMotion Socks Factory</strong>
              </div>
              <p className="text-gray-500 text-xs mt-2 font-medium">
                We respond within 2–4 hours on business days
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name *" 
                required 
                className="bg-[#121212] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-[#b4ff2b] transition-all placeholder:text-gray-600" 
              />
              <input 
                type="text" 
                name="company"
                placeholder="Company Name" 
                className="bg-[#121212] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-[#b4ff2b] transition-all placeholder:text-gray-600" 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address *" 
                required 
                className="bg-[#121212] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-[#b4ff2b] transition-all placeholder:text-gray-600" 
              />
              <input 
                type="text" 
                name="whatsapp"
                placeholder="WhatsApp / Phone" 
                className="bg-[#121212] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-[#b4ff2b] transition-all placeholder:text-gray-600" 
              />
              
              <select name="productType" className="bg-[#121212] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-[#b4ff2b] transition-all appearance-none cursor-pointer">
                <option value="" className="bg-[#0b0b0b]">Product Type</option>
                <option value="Grip Socks" className="bg-[#0b0b0b]">Grip Socks</option>
                <option value="Football Socks" className="bg-[#0b0b0b]">Football Socks</option>
                <option value="Running Socks" className="bg-[#0b0b0b]">Running Socks</option>
                <option value="Cycling Socks" className="bg-[#0b0b0b]">Cycling Socks</option>
                <option value="Basketball Socks" className="bg-[#0b0b0b]">Basketball Socks</option>
                <option value="Custom OEM Socks" className="bg-[#0b0b0b]">Custom OEM Socks</option>
              </select>

              <select name="quantity" className="bg-[#121212] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-[#b4ff2b] transition-all appearance-none cursor-pointer">
                <option value="" className="bg-[#0b0b0b]">Estimated Quantity</option>
                <option value="50–100 pairs" className="bg-[#0b0b0b]">50–100 pairs (Sample / Low MOQ)</option>
                <option value="100–300 pairs" className="bg-[#0b0b0b]">100–300 pairs</option>
                <option value="300–1000 pairs" className="bg-[#0b0b0b]">300–1000 pairs</option>
                <option value="1000+ Bulk Order" className="bg-[#0b0b0b]">1000+ Bulk Order</option>
              </select>

              <input 
                type="text" 
                name="logoPlacement"
                placeholder="Logo Placement (Cuff / Sole / Packaging)" 
                className="md:col-span-2 bg-[#121212] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-[#b4ff2b] transition-all placeholder:text-gray-600" 
              />
              
              <textarea 
                name="details"
                placeholder="Tell us your project details (material, color, sport, function...)" 
                className="md:col-span-2 bg-[#121212] border border-gray-800 p-4 rounded-xl text-white outline-none focus:border-[#b4ff2b] transition-all h-32 resize-none placeholder:text-gray-600"
              ></textarea>

              <div className="md:col-span-2">
                <label className="block text-gray-500 text-xs mb-2 px-1">Upload Reference Design / Logo (Optional)</label>
                <input 
                  type="file" 
                  className="w-full bg-[#121212] border border-gray-800 p-3 rounded-xl text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-gray-200 hover:file:bg-gray-700 cursor-pointer" 
                />
              </div>

              <button 
                type="submit" 
                className="md:col-span-2 bg-[#b4ff2b] text-black py-5 rounded-2xl font-black text-xl shadow-[0_0_25px_rgba(180,255,43,0.25)] hover:scale-[1.01] active:scale-95 transition-all uppercase tracking-wider mt-4"
              >
                🚀 SEND REQUEST — GET FREE MOCKUP
              </button>
            </form>

            <div className="flex flex-wrap gap-3 mt-12">
              {[
                '✔ Low MOQ 50 pairs',
                '✔ OEM & Private Label',
                '✔ Factory Direct',
                '✔ Free Design Mockup',
                '✔ Fast Response',
              ].map((tag, idx) => (
                <div key={idx} className="bg-[#111] px-4 py-2 rounded-xl border border-gray-800 text-gray-500 text-xs font-bold uppercase tracking-tight">
                  {tag}
                </div>
              ))}
            </div>
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
              <a href="#inquiry" className="hover:text-[#b4ff2b] transition-colors">GET QUOTE</a>
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

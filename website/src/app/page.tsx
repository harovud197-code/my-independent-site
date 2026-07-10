'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit clicked");
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const name = formData.get('name') || 'Customer';
      const email = formData.get('email') || 'N/A';
      const productType = formData.get('product') || 'N/A';
      const quantity = formData.get('quantity') || 'N/A';
      const details = formData.get('message') || 'N/A';

      const subject = `New Inquiry from ${name} - PeakMotion Socks`;
      const body = `
New Custom Socks Inquiry:
--------------------------
Name: ${name}
Email: ${email}
Product Type: ${productType}
Quantity: ${quantity}
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

  useEffect(() => {
    // Reveal animation logic
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero hero-poster">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Custom Sports Socks Manufacturer</p>
            <h1 className="text-slate-900">Custom Sports Socks <span className="block">Built for Growing Brands</span></h1>
            <p className="hero-lead">From grip socks and football socks to premium running socks, we help sports brands launch high-performance products with low MOQ, fast sampling and factory-direct manufacturing.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20custom%20socks." target="_blank" rel="noopener noreferrer">
                Get Free Quote <em className="not-italic ml-4">→</em>
              </a>
              <Link className="btn btn-secondary" href="/products">Explore Products</Link>
            </div>
            <div className="trust-row" aria-label="Key manufacturing advantages">
              <span><b>MOQ From</b>100 Pairs</span>
              <span><b>7-Day</b>Sample</span>
              <span><b>Factory Since</b>2005</span>
              <span><b>OEM &</b>Private Label</span>
            </div>
          </div>
          <div className="hero-showcase hero-showcase-image reveal" aria-label="Custom sports socks product showcase">
            <Image 
              src="/assets/images/hero-showcase-green.png" 
              alt="PeakMotion custom sports socks product showcase" 
              width={660} 
              height={500} 
              priority
              className="drop-shadow-2xl rounded-[34px]"
            />
          </div>
        </div>
        <div className="container trusted-strip reveal">
          <h2 className="text-2xl font-bold mb-6">Trusted by Growing Sports Brands Worldwide</h2>
          <div className="trusted-types">
            <span>Sports Brands</span>
            <span>Retailers</span>
            <span>Distributors</span>
            <span>Football Clubs</span>
            <span>Pilates Studios</span>
          </div>
          <p className="text-gray-500 mt-4">Serving <b className="text-[#87a829]">40+</b> countries with premium quality and reliable service.</p>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="about" className="metrics py-16">
        <div className="container metrics-grid reveal grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center"><strong>20+</strong><span className="block text-sm text-gray-500 uppercase font-bold">Years Manufacturing</span></div>
          <div className="text-center"><strong>5,000+</strong><span className="block text-sm text-gray-500 uppercase font-bold">Custom Designs</span></div>
          <div className="text-center"><strong>40+</strong><span className="block text-sm text-gray-500 uppercase font-bold">Countries Served</span></div>
          <div className="text-center"><strong>OEM</strong><span className="block text-sm text-gray-500 uppercase font-bold">Brand-Ready Support</span></div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-pad bg-white">
        <div className="container">
          <div className="section-head reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="eyebrow text-[#87a829] font-black tracking-widest">Product Solutions</p>
            <h2 className="text-4xl font-extrabold uppercase">Custom socks for every sports brand category</h2>
            <p className="text-gray-500 text-lg">Build a focused product line with materials, structure, logo, color and packaging matched to your target market.</p>
          </div>
          <div className="cards product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Grip Socks', desc: 'Anti-slip socks for football, pilates, yoga, trampoline parks and performance training.', class: 'grip', img: '/assets/images/grip-socks-product.png', imageScale: 'scale-110' },
              { title: 'Football Socks', desc: 'Team socks, crew socks and match-day designs with compression zones and reinforced structure.', class: 'football-plain', img: 'https://sc04.alicdn.com/kf/Hf9a2b2cfbdc94b0886728ed3c2ae68441.jpg', imageScale: 'scale-105' },
              { title: 'Running Socks', desc: 'Moisture-wicking, breathable running socks for marathon, trail and daily training brands.', class: 'running', img: 'https://sc04.alicdn.com/kf/Hd7505abb99c34e6c9f377397517101abL.jpg', imageScale: 'scale-115' },
              { title: 'Private Label', desc: 'Logo socks, retail packaging, barcode support and launch-ready collections for your brand.', class: 'private', img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/private-label-custom-socks-2026.png', imageScale: 'scale-110' },
            ].map((card, i) => (
              <article key={i} className="product-card reveal p-8 bg-white border border-gray-100 rounded-[26px] shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className={`${card.class === 'football-plain' ? 'bg-white' : `card-image-design ${card.class}`} h-64 md:h-72 rounded-2xl mb-8 relative overflow-hidden`}>
                  <Image 
                    src={card.img} 
                    alt={card.title} 
                    fill 
                    className={`object-contain p-0 relative z-10 ${card.imageScale}`}
                    unoptimized={card.img.startsWith('http')}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-500 mb-6">{card.desc}</p>
                <Link
                  href={card.title === 'Grip Socks' ? '/products/crew-soccer-grip' : card.title === 'Football Socks' ? '/products/mid-calf-football-grip' : card.title === 'Running Socks' ? '/products/professional-running-athletic-socks' : '/products'}
                  className="mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#c5ff3d] px-4 py-3 text-center text-sm font-extrabold uppercase tracking-wider text-black transition-all hover:-translate-y-0.5 hover:bg-[#a8e600] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1713]"
                >
                  Customize {card.title} <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why section-pad bg-[#f7f5ef]">
        <div className="container why-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-head align-left reveal space-y-6">
            <p className="eyebrow text-[#87a829] font-black">Why PeakMotion</p>
            <h2 className="text-4xl font-extrabold uppercase leading-tight text-slate-900">Built for buyers who need reliable production, not just a cheap quote.</h2>
            <p className="text-gray-500 text-lg">We help you reduce sourcing risk with clear communication, flexible custom options and controlled production from sample to shipment.</p>
            <a className="btn btn-primary inline-block" href="https://wa.me/8617357769219" target="_blank" rel="noopener noreferrer">Talk to Factory</a>
          </div>
          <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { id: '01', title: 'Low MOQ', desc: 'Start with small trial orders before scaling to bulk production.' },
              { id: '02', title: 'Fast Sampling', desc: 'Quick mockup and sample development after artwork confirmation.' },
              { id: '03', title: 'Quality Control', desc: 'Material checks, knitting inspection, pairing, packaging and final QC.' },
              { id: '04', title: 'Factory Direct', desc: 'Direct communication with production team for better cost and speed.' },
            ].map((item, idx) => (
              <div key={idx} className="benefit reveal p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <span className="text-[#87a829] font-black text-xl mb-4 block">{item.id}</span>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="factory" className="section-pad bg-white">
        <div className="container">
          <div className="section-head reveal text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-[#87a829] font-black">Manufacturing Process</p>
            <h2 className="text-4xl font-extrabold uppercase">From concept to shipment under one roof</h2>
          </div>
          <div className="process-line reveal flex flex-wrap justify-center gap-4">
            {[
              'Design Brief', 'Yarn Selection', 'Knitting', 'Toe Linking',
              'Boarding', 'Inspection', 'Packaging', 'Shipping'
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 p-6 bg-slate-50 rounded-2xl min-w-[140px]">
                <b className="text-xl text-[#87a829]">0{idx + 1}</b>
                <span className="font-bold text-sm uppercase">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Section */}
      <section id="custom-socks" className="section-pad bg-[#0c1713] text-white">
        <div className="container oem-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-head align-left reveal space-y-6">
            <p className="eyebrow text-[#c5ff3d]">OEM Customization</p>
            <h2 className="text-4xl font-extrabold uppercase">Everything your brand needs to launch a sock collection</h2>
            <p className="text-gray-400 text-lg leading-relaxed">Choose logo method, fabric blend, grip design, needle count, length, compression, label and retail packaging.</p>
          </div>
          <div className="oem-options reveal flex flex-wrap gap-3">
            {['Logo', 'Color', 'Material', 'Grip Pattern', 'Length', 'Compression', 'Needle Count', 'Packaging', 'Barcode', 'Size Set'].map((opt, i) => (
              <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold uppercase hover:bg-[#c5ff3d] hover:text-black transition-all cursor-default">
                {opt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="section-pad bg-white">
        <div className="container case-card reveal bg-[#f7f5ef] p-12 rounded-[42px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="eyebrow text-[#87a829]">Case Study</p>
            <h2 className="text-3xl font-extrabold uppercase">Helping a sports brand test the market with a smaller first order</h2>
            <p className="text-gray-600 leading-relaxed">A growing football brand needed premium grip socks but wanted to avoid high inventory risk. PeakMotion supported custom grip pattern, logo placement, packaging and a trial production plan before scaling repeat orders.</p>
          </div>
          <div className="case-steps space-y-4">
            <div className="p-6 bg-white rounded-2xl border border-gray-100"><b className="block text-[#87a829] uppercase mb-1 text-xs tracking-widest">Challenge</b><span className="font-bold">Small first order + premium look</span></div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100"><b className="block text-[#87a829] uppercase mb-1 text-xs tracking-widest">Solution</b><span className="font-bold">Flexible MOQ + fast sample</span></div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100"><b className="block text-[#87a829] uppercase mb-1 text-xs tracking-widest">Result</b><span className="font-bold">Brand-ready product for launch</span></div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-pad bg-[#f7f5ef]">
        <div className="container">
          <div className="section-head reveal text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="eyebrow text-[#87a829]">Blog & Buying Guides</p>
            <h2 className="text-4xl font-extrabold uppercase">Helpful resources for custom sock sourcing</h2>
            <p className="text-gray-500">Use these guide topics to educate buyers, support SEO content clusters, and lead visitors toward qualified inquiries.</p>
          </div>
          <div className="blog-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="blog-card reveal bg-white p-8 rounded-[26px] shadow-sm hover:shadow-xl transition-all space-y-4 border border-gray-100">
              <span className="text-xs font-black uppercase text-[#87a829] tracking-widest">Guide</span>
              <h3 className="text-xl font-bold">How to Choose the Right Grip Socks Manufacturer</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Explain MOQ, materials, grip patterns, sampling and quality checks for brand buyers.</p>
              <Link href="/blog/custom-sports-socks-manufacturer-guide" className="font-extrabold text-sm uppercase tracking-wider block pt-2 text-black hover:text-[#87a829]">Read Guides →</Link>
            </article>
            <article className="blog-card reveal bg-white p-8 rounded-[26px] shadow-sm hover:shadow-xl transition-all space-y-4 border border-gray-100">
              <span className="text-xs font-black uppercase text-[#87a829] tracking-widest">Materials</span>
              <h3 className="text-xl font-bold">Best Materials for Running and Training Socks</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Compare cotton, nylon, polyester, Coolmax, merino and recycled yarn options.</p>
              <Link href="/blog/best-materials-for-sports-socks" className="font-extrabold text-sm uppercase tracking-wider block pt-2 text-black hover:text-[#87a829]">Explore Materials →</Link>
            </article>
            <article className="blog-card reveal bg-white p-8 rounded-[26px] shadow-sm hover:shadow-xl transition-all space-y-4 border border-gray-100">
              <span className="text-xs font-black uppercase text-[#87a829] tracking-widest">OEM</span>
              <h3 className="text-xl font-bold">Private Label Socks: Packaging, Logo and Launch Checklist</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Show buyers exactly what they need before starting a custom sock project.</p>
              <Link href="/blog/private-label-socks-guide" className="font-extrabold text-sm uppercase tracking-wider block pt-2 text-black hover:text-[#87a829]">View OEM Tips →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-pad bg-white">
        <div className="container">
          <div className="section-head reveal text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-[#87a829]">FAQ</p>
            <h2 className="text-4xl font-extrabold uppercase">Common questions from sports brand buyers</h2>
          </div>
          <div className="faq-list reveal max-w-3xl mx-auto space-y-4">
            {[
              { q: 'What is the MOQ for custom sports socks?', a: 'MOQ depends on sock category, logo method, yarn, size range and packaging. Trial orders can start from low quantities for selected products.' },
              { q: 'Can you make socks with my logo and packaging?', a: 'Yes. We support woven logo, jacquard logo, grip pattern customization, label, header card, box and retail-ready packaging.' },
              { q: 'How long does sampling take?', a: 'After artwork and specifications are confirmed, sample development can usually move quickly. Exact timing depends on complexity.' },
              { q: 'Do you ship worldwide?', a: 'Yes. Orders can be arranged by express, air freight, sea freight or your appointed forwarder.' },
              { q: 'Can you help if I only have an idea?', a: 'Yes. Send your target product, market, reference images, logo and expected quantity. We can help turn it into a production-ready brief.' },
            ].map((item, idx) => (
              <details key={idx} className="group border border-gray-100 rounded-2xl bg-[#f7f5ef] p-2 transition-all">
                <summary className="p-6 cursor-pointer font-extrabold text-lg select-none list-none flex justify-between items-center group-open:text-[#87a829]">
                  {item.q}
                  <span className="text-xl group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="inquiry" className="section-pad final-cta bg-[#c5ff3d] !text-[#0c1713]">
        <div className="container contact-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
          <div className="space-y-6 text-left">
            <p className="eyebrow !text-[#0c1713] opacity-90 font-black uppercase tracking-widest">Start Your Project</p>
            <h2 className="text-4xl font-extrabold uppercase leading-tight !text-[#0c1713]">Ready to build your custom sports socks collection?</h2>
            <p className="!text-[#0c1713] text-lg leading-relaxed font-semibold opacity-90">Send your design idea, quantity, target market and packaging needs. Our team will reply with practical suggestions and a quotation direction.</p>
            <div className="contact-points flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-black/10 rounded-lg text-xs font-bold uppercase tracking-widest border !border-[#0c1713]/20 !text-[#0c1713]">Quote within 24 hours</span>
              <span className="px-4 py-2 bg-black/10 rounded-lg text-xs font-bold uppercase tracking-widest border !border-[#0c1713]/20 !text-[#0c1713]">Sample support</span>
              <span className="px-4 py-2 bg-black/10 rounded-lg text-xs font-bold uppercase tracking-widest border !border-[#0c1713]/20 !text-[#0c1713]">OEM production advice</span>
            </div>
          </div>
          <form className="quote-form bg-white p-10 rounded-[34px] space-y-6 text-black shadow-2xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2 font-bold text-sm uppercase tracking-wide !text-[#0c1713]">Name<input name="name" required className="bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:border-[#c5ff3d] transition-all" /></label>
              <label className="flex flex-col gap-2 font-bold text-sm uppercase tracking-wide !text-[#0c1713]">Email<input type="email" name="email" required className="bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:border-[#c5ff3d] transition-all" /></label>
            </div>
            <label className="flex flex-col gap-2 font-bold text-sm uppercase tracking-wide !text-[#0c1713]">Product Type
              <select name="product" className="bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:border-[#c5ff3d] transition-all cursor-pointer">
                <option>Grip Socks</option>
                <option>Football Socks</option>
                <option>Running Socks</option>
                <option>Private Label Collection</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 font-bold text-sm uppercase tracking-wide !text-[#0c1713]">Expected Quantity<input name="quantity" placeholder="e.g. 500 pairs" className="bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:border-[#c5ff3d] transition-all" /></label>
            <label className="flex flex-col gap-2 font-bold text-sm uppercase tracking-wide !text-[#0c1713]">Project Details<textarea name="message" rows={4} placeholder="Logo, materials, packaging, target delivery date..." className="bg-gray-50 border border-gray-100 p-4 rounded-xl outline-none focus:border-[#c5ff3d] transition-all resize-none"></textarea></label>
            <button className="w-full bg-[#0c1713] text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl" type="submit">Request Free Quote</button>
          </form>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/8617357769219" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 bg-[#25D366] text-white w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-xl z-[1000] hover:scale-110 transition-transform"
      >
        💬
      </a>
    </main>
  );
}

// Deployment: v2026-07-09-final-v2

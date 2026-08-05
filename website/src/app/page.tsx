'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';
import UKFootballCaseStudyCard from '@/components/UKFootballCaseStudyCard';
import YogaPilatesCaseStudyCard from '@/components/YogaPilatesCaseStudyCard';

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
      const companyType = formData.get('companyType') || 'N/A';
      const quantity = formData.get('quantity') || 'N/A';
      const details = formData.get('message') || 'N/A';

      const market = formData.get('market') || 'Not provided';
      const needSample = formData.get('needSample') || 'Not provided';
      const lines = [
        'Hello PeakMotion Socks, I would like practical MOQ and quote advice for a custom sock project.',
        `Name: ${name}`,
        `Business email: ${email}`,
        `Company type: ${companyType}`,
        `Product type: ${productType}`,
        `Estimated quantity: ${quantity}`,
        `Target market: ${market}`,
        `Need sample: ${needSample}`,
        `Project details: ${details}`,
      ];

      trackEvent('quote_submission', { product: String(productType), channel: 'email' });
      trackEvent('generate_lead', { product: String(productType), channel: 'email' });
      
      window.location.href = `mailto:kayzhejiang@gmail.com?subject=${encodeURIComponent(`Custom Sports Socks Inquiry from ${name}`)}&body=${encodeURIComponent(lines.join('\n'))}`;
      
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error preparing your inquiry. Please contact us directly at kayzhejiang@gmail.com.");
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
            <p className="eyebrow">Buyer-focused custom sock solutions</p>
            <h1 className="text-slate-900">Custom Performance Socks <span className="block">for Sports Brands &amp; Retailers</span></h1>
            <p className="hero-lead">Launch your own football, running and grip sock collection with low MOQ, fast sampling and factory-direct production.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20custom%20socks." target="_blank" rel="noopener noreferrer">
                Get Free Quote <em className="not-italic ml-4">&rarr;</em>
              </a>
              <Link className="btn btn-secondary" href="/products">Explore Products</Link>
            </div>
            <div className="buyer-paths" aria-label="Choose your buyer type">
              <p>I am a:</p>
              <div className="buyer-path-grid">
                <Link href="/private-label-sports-socks" className="buyer-path">Sports Brand Owner</Link>
                <Link href="/football-socks-manufacturer" className="buyer-path">Football Club</Link>
                <Link href="/yoga-pilates-grip-socks-supplier" className="buyer-path">Gym / Studio Owner</Link>
                <Link href="/products" className="buyer-path">Sock Distributor</Link>
              </div>
            </div>
            <div className="trust-row" aria-label="Key manufacturing advantages">
              <Link href="/sports-socks-moq-guide" aria-label="Read the Sports Socks MOQ Guide">
                <span><b>MOQ from</b>50 pairs</span>
              </Link>
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
                  href={card.title === 'Grip Socks' ? '/custom-grip-socks' : card.title === 'Football Socks' ? '/products/mid-calf-football-grip' : card.title === 'Running Socks' ? '/products/professional-running-athletic-socks' : card.title === 'Private Label' ? '/products/custom-logo-embroidery-socks' : '/products'}
                  className="mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#c5ff3d] px-4 py-3 text-center text-sm font-extrabold uppercase tracking-wider text-black transition-all hover:-translate-y-0.5 hover:bg-[#a8e600] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1713]"
                >
                  Customize {card.title} <span aria-hidden="true">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center reveal">
            <a
              href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20not%20sure%20which%20sock%20style%20fits%20my%20brand.%20Please%20help%20me%20choose."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#0c1713] px-7 py-4 text-center text-sm font-black uppercase tracking-wide !text-white transition-all hover:-translate-y-0.5 hover:bg-[#163020] hover:shadow-lg"
            >
              Not Sure Which Socks Fit Your Brand? Get a Free Quote
            </a>
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
            <a
              href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20to%20discuss%20a%20custom%20sock%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#c5ff3d] px-7 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-all hover:-translate-y-0.5 hover:bg-[#b4ff2b] hover:shadow-lg"
            >
              Discuss Your Custom Project
            </a>
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
            <p className="eyebrow text-[#87a829]">Client Project</p>
            <h2 className="text-3xl font-extrabold uppercase">A consistent football sock program for a South African youth club</h2>
            <p className="text-gray-600 leading-relaxed">A South African youth football club needed knee-high footbal…8169 tokens truncated…003cinput required type="email" name="email" placeholder="Business email" autoComplete="email" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <select required name="productType" defaultValue="" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30"><option value="" disabled>Select product type</option><option>Football or grip socks</option><option>Running socks</option><option>Fitness, Pilates or yoga socks</option><option>Basketball or training socks</option><option>Other private label sports socks</option></select>
          <select name="brandStage" defaultValue="" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30"><option value="" disabled>Select brand stage</option><option>Launching a new brand</option><option>Existing sports brand</option><option>Club, academy or team</option><option>Retailer or distributor</option></select>
          <input name="quantity" placeholder="Estimated quantity" inputMode="numeric" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <textarea name="requirements" rows={3} placeholder="Logo, colors, materials, packaging, target market and launch date" className="w-full resize-y rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
        </div>
        <button type="submit" className="mt-4 inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-[#b4ff2b] px-5 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4ff2b]">Start My Project</button>
      </div>
    </form>
  );
}

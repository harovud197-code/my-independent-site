'use client';

import Image from 'next/image';
import { ProductQuickFacts, productSeo } from '@/lib/product-seo';

const product = productSeo['crew-soccer-grip'];

export default function CrewSoccerGripPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const subject = `New Inquiry: Crew Soccer Grip Socks - ${data.name}`;
    const body = `
New Inquiry for Crew Soccer Grip Sports Socks:
--------------------------
Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Quantity: ${data.quantity}
Requirements: ${data.message}
    `;

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=kayzhejiang%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const applications = [
    { title: 'Football', icon: 'FB', img: 'app-football.png', text: 'Enhances grip and stability for quick turns, sprints and powerful shots.' },
    { title: 'Training', icon: 'TR', img: 'app-training.png', text: 'Supportive fit reduces fatigue and helps improve overall performance.' },
    { title: 'Futsal', icon: 'FS', img: 'app-futsal.png', text: 'Improves foot-to-shoe connection for better control on indoor courts.' },
    { title: 'Gym', icon: 'GY', img: 'app-gym.png', text: 'Provides comfort and support for all kinds of workouts and lifts.' },
    { title: 'Pilates', icon: 'PL', img: 'app-pilates.png', text: 'Flexible, breathable and smooth fit for maximum comfort and movement.' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      {/* Hero Section */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="reveal relative aspect-[4/3] rounded-[28px] bg-[#f7f8f6] p-5 md:p-10">
          <Image src="/assets/images/training/hero.png" alt="Crew soccer grip socks" fill className="object-contain p-5 md:p-10" priority />
        </div>
        <div className="max-w-xl space-y-6">
          <span className="inline-flex rounded-full bg-[#e9f8d2] px-4 py-2 text-xs font-black tracking-[0.16em] text-[#387116]">
            BEST SELLER
          </span>
          <h1 className="text-4xl font-black leading-tight text-[#0c1713] md:text-6xl">
            Crew Soccer Grip Sports Socks
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            High-performance soccer grip socks with silicone anti-slip sole, breathable mesh and custom branding solutions.
          </p>
          <ProductQuickFacts product={product} />
          <a
            href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20your%20Crew%20Soccer%20Grip%20Socks."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#39a91f] px-7 py-4 font-black uppercase tracking-wide !text-white transition-all hover:-translate-y-0.5 hover:bg-[#2f8b19] hover:shadow-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Feature Banners */}
      <div className="space-y-0">
        <section className="w-full relative aspect-[21/9] md:aspect-[3/1]">
           <Image src="/assets/images/training/features.png" alt="Core features" fill className="object-contain" />
        </section>
        <section className="w-full relative aspect-[21/9] md:aspect-[3/1]">
           <Image src="/assets/images/training/product-features.png" alt="Product features" fill className="object-contain" />
        </section>
        <section className="w-full relative aspect-[21/9] md:aspect-[3/1]">
           <Image src="/assets/images/training/oem.png" alt="OEM customization" fill className="object-contain" />
        </section>
        <section className="w-full relative aspect-[21/9] md:aspect-[3/1]">
           <Image src="/assets/images/training/colors.png" alt="Available colors" fill className="object-contain" />
        </section>
      </div>

      <section className="border-y border-slate-100 bg-white px-5 py-20 lg:px-15">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Product Specification</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Built for a secure foot-to-shoe connection</h2>
            <dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              {[
                ['Base material', 'Cotton, nylon and spandex blend'],
                ['Sock height', 'Crew length, with custom cuff height available'],
                ['Grip area', 'Silicone placement on the sole for controlled traction'],
                ['Branding', 'Jacquard logo, embroidery, print or woven label'],
                ['MOQ', 'From 50 pairs per selected design'],
                ['Sample timing', 'About 7 days after artwork confirmation'],
              ].map(([term, detail]) => <div key={term} className="grid grid-cols-[130px_1fr] gap-4 border-b border-slate-200 px-5 py-4 last:border-b-0"><dt className="font-bold">{term}</dt><dd className="text-slate-600">{detail}</dd></div>)}
            </dl>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Customization & Packaging</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Create a collection that looks like your brand</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">This crew grip style is suited to football clubs, academies, gyms, futsal programs and performance brands that need a secure fit without adding bulk inside the shoe.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                ['Color & logo', 'Match team colors, add a club crest or build a signature grip layout.'],
                ['Fit & construction', 'Specify cuff tension, compression zones, toe closure and size range.'],
                ['Retail packaging', 'Choose polybag, header card, paper band, backer card or custom box.'],
                ['Production support', 'Approve artwork and sample before bulk production and final inspection.'],
              ].map(([title, text]) => <div key={title} className="rounded-xl border border-slate-200 bg-[#f7f8f6] p-5"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 px-5 lg:px-15 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">Applications</h2>
          <p className="text-2xl text-gray-500">Perfect for all kinds of sports and training.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-10 text-left">
            {applications.map((app, idx) => (
              <article key={idx} className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="relative aspect-[273/440]">
                  <Image src={`/assets/images/training/${app.img}`} alt={app.title} fill className="object-cover" />
                </div>
                <div className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full border-2 border-[#85b948] flex items-center justify-center text-4xl text-[#85b948]">
                    {app.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase">{app.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{app.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Factory & Certs Banners */}
      <div className="space-y-0">
        <section className="w-full relative aspect-[21/9] md:aspect-[3/1]">
           <Image src="/assets/images/training/factory.png" alt="Our factory" fill className="object-contain" />
        </section>
        <section className="w-full relative aspect-[21/9] md:aspect-[3/1]">
           <Image src="/assets/images/training/certifications.png" alt="Certifications" fill className="object-contain" />
        </section>
      </div>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-15">
        <p className="text-center text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">FAQ</p>
        <h2 className="mt-3 text-center text-3xl font-black md:text-4xl">Questions before you order crew grip socks</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {[
            ['Can the grip pattern be customized?', 'Yes. We can discuss silicone placement, pattern coverage and color based on your sport and shoe use.'],
            ['What is the minimum order quantity?', 'Selected crew grip designs can start from 50 pairs. Final MOQ depends on yarn, logo method, colors and packaging.'],
            ['Can you make a team or club logo?', 'Yes. Jacquard, embroidery, print and woven-label options are available after artwork review.'],
            ['What packaging can I choose?', 'Options include polybags, paper bands, header cards, backer cards and custom retail boxes.'],
          ].map(([question, answer]) => <details key={question} className="group px-6 py-5"><summary className="cursor-pointer list-none font-bold marker:content-none">{question}</summary><p className="mt-3 leading-relaxed text-slate-600">{answer}</p></details>)}
        </div>
      </section>

      {/* Request Quote Section */}
      <section className="py-24 bg-[#f7fff5] text-center px-5 lg:px-15" id="quote">
        <div className="max-w-4xl mx-auto space-y-12">
           <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">Request A Custom Quote</h2>
           <form className="max-w-2xl mx-auto space-y-4 text-left" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" required placeholder="Name" className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-[#39a91f] transition-all bg-white" />
                <input name="email" required type="email" placeholder="Email" className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-[#39a91f] transition-all bg-white" />
              </div>
              <input name="company" placeholder="Company" className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-[#39a91f] transition-all bg-white" />
              <input name="quantity" placeholder="Quantity (e.g. 500 pairs)" className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-[#39a91f] transition-all bg-white" />
              <textarea name="message" rows={5} placeholder="Your requirements (materials, logo placement, packaging...)" className="w-full p-5 rounded-2xl border border-gray-200 outline-none focus:border-[#39a91f] transition-all bg-white resize-none"></textarea>
              <button type="submit" className="w-full bg-[#39a91f] text-white py-6 rounded-2xl font-black text-xl uppercase shadow-xl hover:scale-[1.01] transition-all">Submit Inquiry</button>
           </form>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="relative overflow-hidden bg-[#07120c] px-5 py-20 md:py-28 lg:px-15">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/training/hero.png"
            alt="Soccer grip socks on field"
            fill
            className="object-cover object-center md:object-right opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07120c] via-[#07120c]/90 to-[#07120c]/45"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl space-y-7 text-left text-white">
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
              Ready to Build <br />Your Sock Brand?
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-200">
              Contact us today and get a free quote within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-3">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-2xl bg-[#b4ff2b] px-10 py-5 text-lg font-black uppercase text-black shadow-2xl transition-transform hover:scale-105"
              >
                Get Quote Now
              </a>
              <a
                href="https://wa.me/8617357769219"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-white/10 px-10 py-5 text-lg font-black uppercase text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


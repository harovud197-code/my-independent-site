'use client';

import Image from 'next/image';
import Link from 'next/link';

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

    window.location.href = `mailto:abayacloth@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const applications = [
    { title: 'Football', icon: '⚽', img: 'app-football.png', text: 'Enhances grip and stability for quick turns, sprints and powerful shots.' },
    { title: 'Training', icon: '🏃', img: 'app-training.png', text: 'Supportive fit reduces fatigue and helps improve overall performance.' },
    { title: 'Futsal', icon: '▦', img: 'app-futsal.png', text: 'Improves foot-to-shoe connection for better control on indoor courts.' },
    { title: 'Gym', icon: '🏋️', img: 'app-gym.png', text: 'Provides comfort and support for all kinds of workouts and lifts.' },
    { title: 'Pilates', icon: '🧘', img: 'app-pilates.png', text: 'Flexible, breathable and smooth fit for maximum comfort and movement.' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-5 lg:px-15 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="reveal order-2 md:order-1 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
          <Image src="/assets/images/training/hero.png" alt="Soccer Grip Socks" fill className="object-cover" priority />
        </div>
        <div className="space-y-8 order-1 md:order-2">
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-gray-900 uppercase">
            Crew Soccer Grip <br />
            <span className="text-[#39a91f]">Sports Socks</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            High-performance soccer grip socks with silicone anti-slip sole, breathable mesh and custom branding solutions.
          </p>
          <div className="flex flex-col gap-4">
             <p className="text-2xl font-black uppercase tracking-widest text-gray-900">MOQ: 50 Pairs</p>
             <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20your%20Crew%20Soccer%20Grip%20Socks." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#39a91f] text-white px-10 py-5 rounded-2xl font-black text-lg uppercase shadow-xl hover:scale-105 transition-transform"
                >
                  Chat on WhatsApp
                </a>
             </div>
          </div>
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

      {/* CTA Footer Banner */}
      <section className="w-full relative aspect-[21/9] md:aspect-[3/1]">
         <Image src="/assets/images/training/cta.png" alt="CTA banner" fill className="object-contain" />
      </section>
    </div>
  );
}

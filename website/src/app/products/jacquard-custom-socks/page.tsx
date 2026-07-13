import type { Metadata } from 'next';

const assetPath = '/assets/products/jacquard-custom-socks';
const message = encodeURIComponent('Hello PeakMotion Socks, I am interested in your Jacquard Custom Socks.');

export const metadata: Metadata = {
  title: 'Jacquard Custom Socks | PeakMotion Socks',
  description: 'Premium jacquard and embroidered crew socks with custom patterns, colors, logos, packaging and private label manufacturing.',
};

export default function JacquardCustomSocksPage() {
  const specifications = [
    ['Material', 'Combed Cotton / Polyester / Spandex'],
    ['Type', 'Jacquard Casual Crew Socks'],
    ['Design', 'Custom Pattern or Embroidery'],
    ['Comfort', 'Breathable Soft Knit'],
    ['Logo', 'Jacquard / Embroidery / Print'],
    ['MOQ', '50 Pairs'],
    ['Packing', 'Custom Packaging'],
  ];

  return (
    <main className="bg-white text-[#0c1713]">
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="rounded-[28px] bg-[#f7f8f6] p-5 md:p-10"><img src={`${assetPath}/hero.jpg`} alt="Jacquard custom crew socks" className="h-auto w-full object-contain" /></div>
        <div className="max-w-xl space-y-6"><span className="inline-flex rounded-full bg-[#e9f8d2] px-4 py-2 text-xs font-black tracking-[0.16em] text-[#387116]">CUSTOM DESIGN</span><h1 className="text-4xl font-black leading-tight md:text-6xl">Jacquard Custom Socks</h1><p className="text-lg leading-relaxed text-slate-600">Soft crew socks with playful jacquard or embroidered details, breathable knit comfort, custom colors and flexible OEM support for private-label collections.</p><div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-4">{[['MOQ', '50 Pairs'], ['Sample', '7 Days'], ['Lead Time', '25-30 Days'], ['Size', 'Kids-XL']].map(([label, value]) => <div key={label} className="border-b border-r border-slate-200 p-4 text-center last:border-r-0 sm:border-b-0"><span className="block text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span><strong className="mt-1 block text-sm">{value}</strong></div>)}</div><a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#39a91f] px-7 py-4 font-black uppercase tracking-wide !text-white transition-all hover:-translate-y-0.5 hover:bg-[#2f8b19] hover:shadow-lg">Chat on WhatsApp</a></div>
      </section>

      <section className="border-y border-slate-100 bg-[#fbfcfa] py-12"><div className="mx-auto max-w-[1200px] space-y-8 px-5 md:px-8"><img src={`${assetPath}/features.jpg`} alt="Jacquard sock core features" className="h-auto w-full" /><img src={`${assetPath}/product-features.jpg`} alt="Jacquard sock product features" className="h-auto w-full" /></div></section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-5 py-20 md:px-8 lg:grid-cols-2"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Product Details</p><h2 className="text-3xl font-black md:text-4xl">Specifications</h2><dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200">{specifications.map(([label, value]) => <div key={label} className="grid grid-cols-[110px_1fr] gap-4 border-b border-slate-200 px-5 py-4 last:border-b-0"><dt className="font-bold">{label}</dt><dd className="text-slate-600">{value}</dd></div>)}</dl></div><div><p className="mb-3 text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">OEM Service</p><h2 className="text-3xl font-black md:text-4xl">Your artwork, made wearable</h2><img src={`${assetPath}/oem.jpg`} alt="OEM jacquard sock customization" className="mt-8 h-auto w-full rounded-2xl" /></div></section>

      <section className="bg-[#f7f8f6] py-20"><div className="mx-auto max-w-[1200px] space-y-14 px-5 md:px-8"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.15em] text-[#679a20]">Custom Options</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Colors, applications and factory support</h2></div>{['colors.jpg', 'applications.jpg', 'factory.jpg', 'certifications.jpg'].map((image) => <img key={image} src={`${assetPath}/${image}`} alt="Jacquard custom sock product information" className="h-auto w-full rounded-2xl bg-white" />)}</div></section>

      <section id="quote" className="relative overflow-hidden bg-[#07120c] px-5 py-20 md:px-8 md:py-28"><div className="absolute inset-0"><img src={`${assetPath}/cta.jpg`} alt="Custom jacquard crew socks" className="h-full w-full object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-[#07120c] via-[#07120c]/90 to-[#07120c]/45" /></div><div className="relative mx-auto max-w-7xl"><div className="max-w-2xl space-y-7 text-left text-white"><h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">Ready to Build <br />Your Sock Brand?</h2><p className="text-xl font-medium text-gray-200 md:text-2xl">Contact us today and get a free quote within 24 hours.</p><div className="flex flex-col gap-5 pt-3 sm:flex-row"><a href={`https://wa.me/8617357769219?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-[#b4ff2b] px-10 py-5 text-lg font-black uppercase text-black shadow-2xl transition-transform hover:scale-105">Get Quote Now</a><a href="https://wa.me/8617357769219" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl border-2 border-white bg-white/10 px-10 py-5 text-lg font-black uppercase !text-white backdrop-blur-md transition-all hover:bg-white hover:!text-black">Chat on WhatsApp</a></div></div></div></section>
    </main>
  );
}
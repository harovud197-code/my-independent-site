import type { Metadata } from 'next';
import Link from 'next/link';
import CustomRunningQuoteForm from '@/components/CustomRunningQuoteForm';
import BuyerConfidencePanel from '@/components/BuyerConfidencePanel';
import FactoryEvidencePanel from '@/components/FactoryEvidencePanel';
import MoqFramework from '@/components/MoqFramework';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/custom-running-socks-manufacturer`;
const assetPath = '/assets/products/professional-running-athletic-socks';
const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20custom%20running%20socks%20for%20my%20brand%20or%20event.';

export const metadata: Metadata = {
  title: 'Custom Running Socks Manufacturer | OEM & Private Label | PeakMotion',
  description: 'Custom running socks manufacturer for brands, teams, events and retailers. Selected standard styles from 50 pairs, with custom logo programs typically from 100 pairs.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Custom Running Socks Manufacturer | PeakMotion',
    description: 'OEM and private-label custom running socks for brands, clubs, events and wholesale buyers.',
    images: [{ url: `${assetPath}/hero.png`, alt: 'Custom running socks for brands and teams' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Running Socks Manufacturer | PeakMotion',
    description: 'Selected standard running sock styles from 50 pairs; custom logo programs typically from 100 pairs.',
    images: [`${assetPath}/hero.png`],
  },
};

const productTypes = [
  ['No-show and ankle', 'Low-profile silhouettes for warm-weather training, road running and race-day use.'],
  ['Quarter-crew and crew', 'More coverage for trail, cooler-weather and club collections.'],
  ['Cushioned running socks', 'Extra heel and forefoot padding for impact management and daily mileage.'],
  ['Compression-style socks', 'Support-focused construction for activity, recovery and endurance use.'],
  ['Marathon and event socks', 'Custom colors, sponsor logos and participant merchandise for races.'],
  ['Private Label Running Socks for Sportswear Brands', 'A coordinated product range with logos, size sets and retail packaging.'],
] as const;

const process = [
  ['Share your requirements', 'Tell us your design, target use, quantity and delivery goals.'],
  ['Review design and specifications', 'We align materials, construction, logo details and packaging.'],
  ['Confirm materials and pricing', 'We confirm the practical specification and quotation direction.'],
  ['Develop and approve samples', 'Review a sample before bulk production begins.'],
  ['Begin bulk production', 'Production starts after sample approval, deposit and material confirmation.'],
  ['Inspect, pack and ship', 'Orders are checked, packed and prepared for your delivery method.'],
] as const;

const faqs = [
  ['What is your MOQ for custom running socks?', 'Selected standard styles can start from 50 pairs. Custom logo programs typically start from 100 pairs, while bespoke construction or packaging requires a higher MOQ.'],
  ['Can you manufacture socks from my own design?', 'Yes. Share your design and specifications, and our team will review feasibility before sampling.'],
  ['Can you match Pantone colors?', 'Color matching can be discussed using your Pantone references, artwork and selected yarn or dyeing method.'],
  ['Do you offer private-label packaging?', 'Yes. Options include paper bands, header cards, barcode labels, backer cards and custom boxes.'],
  ['How long do samples and production take?', 'Sample development usually takes 5-10 business days. Standard bulk production is usually 15-30 days after sample approval; complex orders can take 30-45 days.'],
  ['What file format should I send for a logo?', 'Vector files such as AI or EPS are preferred for logos and artwork. We can advise on the best format for your specific design.'],
  ['How do you handle our artwork and brand information?', 'Design files and branding materials are used only for the purpose of your production order. Specific confidentiality terms can be discussed directly with our team.'],
  ['Do you ship internationally?', 'Yes. We support express, air, sea, rail to selected European destinations, door-to-door service where available and nominated freight forwarders.'],
] as const;

export default function CustomRunningSocksManufacturerPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${pageUrl}#webpage`, url: pageUrl, name: 'Custom Running Socks Manufacturer | PeakMotion', description: metadata.description, about: ['Custom running socks', 'Custom marathon socks', 'Custom running club socks', 'Private label running socks'], isPartOf: { '@id': `${siteUrl}/#website` } },
      { '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };

  return (
    <main data-content-version="2026-08-25-running-marathon-clubs-v1" className="bg-white text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="relative isolate overflow-hidden bg-[#07120c] px-5 py-16 text-white md:px-8 md:py-24">
        <img src={`${assetPath}/cta-landing.webp`} alt="Custom running socks for sportswear brands" fetchPriority="high" decoding="async" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07120c] via-[#07120c]/90 to-[#07120c]/60" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">OEM and Private Label Manufacturer</p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">Custom Running Socks Manufacturer for Brands, Teams and Retailers</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">PeakMotion designs and manufactures custom running socks for sportswear brands, running clubs, marathon organizers, retailers and private-label sellers. From the first sample to bulk shipment, we support a clear, dependable production process.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href="#quote" data-analytics-event="quote_cta_click" data-analytics-placement="running_hero" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Request a Quote</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-placement="running_hero" className="inline-flex items-center justify-center rounded-xl border border-white/70 px-7 py-4 font-black uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#0c1713]">Discuss Your Design on WhatsApp</a></div>
            <div className="mt-9 grid max-w-2xl grid-cols-1 gap-3 text-sm font-bold sm:grid-cols-3"><span className="rounded-lg border border-white/15 bg-black/15 p-4">50 pairs — selected standard styles</span><span className="rounded-lg border border-white/15 bg-black/15 p-4">Samples before bulk production</span><span className="rounded-lg border border-white/15 bg-black/15 p-4">60,000 pairs monthly capacity</span></div>
          </div>
          <CustomRunningQuoteForm />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20"><div className="max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Who We Work With</p><h2 className="mt-3 text-3xl font-black md:text-4xl">From a running idea to a product ready for your market</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">We work with sportswear brands, running clubs, marathon organizers, fitness and outdoor retailers, promotional product companies, distributors, corporate programs, schools and private-label sellers. Whether you need race merchandise or a complete retail range, we can help turn your brief into a practical specification.</p></div><div className="mt-9 flex flex-wrap gap-3">{['Sportswear brands', 'Running clubs', 'Marathon organizers', 'Retailers', 'Distributors', 'Private-label sellers'].map((item) => <span key={item} className="rounded-full border border-slate-200 bg-[#f7f8f6] px-5 py-3 text-sm font-bold">{item}</span>)}</div></section>

      <section className="border-y border-slate-100 bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Customization Options</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Build the construction around the runner and the brand</h2><p className="mt-4 text-lg leading-relaxed text-slate-600">Select the product height, yarn, cushioning, ventilation, support, logo, size range and retail presentation that match your target customer and price point.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{['No-show, ankle, quarter-crew or crew height', 'Yarn selection and moisture-management blends', 'Cushioning, ventilation and arch-support zones', 'Compression feel, seamless toe and reinforced heel', 'Color matching, knitted logos and graphics', 'Custom labels, multipacks and retail packaging'].map((item) => <div key={item} className="rounded-xl border border-slate-200 bg-white p-5 font-bold text-slate-700">{item}</div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-20"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Product Types</p><h2 className="mt-3 text-3xl font-black md:text-4xl">A running sock range for training, events and retail</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Build one focused performance style or a multi-height collection. We can discuss the material and construction combinations that suit your intended climate, activity and customer.</p><img src={`${assetPath}/hero-landing-light.webp`} loading="lazy" decoding="async" alt="Custom running sock color and construction options" className="mt-8 aspect-[3/2] w-full rounded-lg border border-slate-100 bg-[#f7f8f6] object-contain" /></div><div className="grid gap-4 sm:grid-cols-2">{productTypes.map(([title, text]) => <article key={title} className="rounded-xl border border-slate-200 p-6"><h3 className="text-lg font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="border-y border-slate-100 bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Running Communities and Events</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Custom Running Socks for Clubs, Marathons and Race Events</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">Plan the product around who will wear it, how it will be distributed and when it must arrive. Event and club programs can share the same manufacturing foundation while using different branding, packing and reorder routes.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8">
              <h3 className="text-2xl font-black">Custom Marathon Socks for Races and Events</h3>
              <p className="mt-4 leading-relaxed text-slate-600">Marathon organizers, race directors and event agencies can use custom marathon socks as participant merchandise that stays useful after race day. We can translate sponsor logos, event colors and distance marks into a practical knitted design, then plan size assortments for participant packs, expo sales or finisher gifts. Custom running socks for marathons can be packed with a paper band, event card or retail-ready label, depending on the presentation and budget. For bulk production, confirm artwork, quantities, packing method and delivery address early so material booking and sample approval stay aligned with fixed event deadlines. If the race has several distances or sponsor tiers, colorways and packaging can be coordinated as one controlled marathon event socks program rather than separate unconnected products. Selected standard routes may support a lower starting quantity, while bespoke constructions or packaging require a higher MOQ.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8">
              <h3 className="text-2xl font-black">Custom Socks for Running Clubs</h3>
              <p className="mt-4 leading-relaxed text-slate-600">Running clubs can build custom socks for running clubs around their logo, team colors and the way members actually train and race. We can plan no-show, ankle, quarter-crew or crew styles for weekly training, race day kits, membership packs and club merchandise. Custom running club socks may include knitted logos, sponsor branding, size sets and simple packaging for direct distribution, while retail packs can support fundraising or online sales. A selected standard construction can provide a practical small-MOQ test route before the club commits to more colors or a larger repeat order. For established programs, we can keep the approved specification, artwork and packaging direction organized to make repeat orders more consistent. Share the member profile, climate, preferred cushioning, quantity and delivery date so the running club socks program is built around real use rather than a generic promotional product.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white px-5 py-16 md:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Materials and Performance</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Choose the right yarn for the way the sock will be used</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Common options include polyester, nylon, cotton blends, merino wool blends, elastane, moisture-management yarns and recycled yarns where available. The best combination depends on climate, intensity, cushioning requirements, durability, target price and brand positioning.</p><div className="mt-7 flex flex-col gap-4 sm:flex-row"><Link href="/products/professional-running-athletic-socks" className="inline-flex font-black text-[#387116] underline underline-offset-4">View our running athletic sock product details &rarr;</Link><Link href="/blog/how-to-choose-running-socks" className="inline-flex font-black text-[#387116] underline underline-offset-4">Read the running sock buying guide &rarr;</Link></div></div><img src={`${assetPath}/features-landing.webp`} loading="lazy" decoding="async" alt="Running sock material and performance features" className="w-full rounded-lg bg-[#f7f8f6]" /></div></section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Colors and Use Cases</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Make the product recognizably yours</h2><p className="mt-4 text-lg leading-relaxed text-slate-600">Use custom color layouts, logos and packaging to build a coherent race, team or retail collection. Share a reference image or artwork through WhatsApp during the quote discussion.</p></div><div className="mt-9 grid gap-6 lg:grid-cols-2"><img src={`${assetPath}/colors-landing.webp`} loading="lazy" decoding="async" alt="Custom running socks color options" className="w-full rounded-lg bg-white" /><img src={`${assetPath}/applications-landing.webp`} loading="lazy" decoding="async" alt="Custom running socks applications" className="w-full rounded-lg bg-white" /></div></div></section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-20"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Manufacturing Process</p><h2 className="mt-3 text-3xl font-black md:text-4xl">A clear path from design brief to shipment</h2></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{process.map(([title, text], index) => <article key={title} className="rounded-xl border border-slate-200 bg-white p-6"><span className="text-sm font-black text-[#679a20]">0{index + 1}</span><h3 className="mt-3 text-lg font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:py-20"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Quality Control</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Checks designed around your approved specification</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Inspection checkpoints may include yarn confirmation, color and artwork review, size and construction verification, sample approval, in-process checks, visual inspection, packaging verification and pre-shipment inspection.</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{['Yarn and material confirmation', 'Color and artwork review', 'In-process production checks', 'Visual and packaging inspection'].map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-[#f7f8f6] p-4 font-bold text-slate-700">{item}</div>)}</div><img src={`${assetPath}/certifications-landing.webp`} loading="lazy" decoding="async" alt="PeakMotion quality and certification information" className="mt-6 w-full rounded-lg bg-[#f7f8f6]" /></div><img src={`${assetPath}/factory-landing.webp`} loading="lazy" decoding="async" alt="PeakMotion running socks factory and quality control" className="w-full rounded-lg bg-[#f7f8f6]" /></section>

      <section className="border-y border-slate-100 bg-[#07120c] px-5 py-16 text-white md:px-8 lg:py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]"><div><p className="text-sm font-black uppercase tracking-[0.16em] text-[#b4ff2b]">MOQ, Timing and Shipping</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Commercial details before you start</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Selected standard styles can start from 50 pairs. Custom logo running programs typically start from 100 pairs, while bespoke construction or packaging requires a higher MOQ. Sample development is usually 5-10 business days.</p><p className="mt-4 max-w-2xl leading-relaxed text-slate-300">International express, air freight, sea freight, rail to selected European destinations, door-to-door delivery where available and nominated forwarders can be discussed for your shipment. A 50% deposit is generally required before production, with the balance payable before shipment; final terms depend on the project.</p></div><div className="grid gap-4 sm:grid-cols-2">{[['Standard-style MOQ', 'From 50 pairs'], ['Custom-logo MOQ', 'Typically from 100 pairs'], ['Samples', '5-10 business days'], ['Bulk production', '15-30 days'], ['Shipping', 'Express, air, sea or nominated forwarder'], ['Packaging', 'Higher MOQ may apply']].map(([label, value]) => <div key={label} className="rounded-xl border border-white/15 bg-white/5 p-5"><span className="block text-xs font-black uppercase tracking-wide text-[#b4ff2b]">{label}</span><strong className="mt-2 block leading-snug">{value}</strong></div>)}</div></div></section>

      <MoqFramework />

      <FactoryEvidencePanel product="custom running socks" moq="Typically from 100 pairs*" sampleLeadTime="5-10 business days" bulkLeadTime="15-30 business days" />

      <BuyerConfidencePanel product="running socks" />

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 lg:py-20"><p className="text-center text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-center text-3xl font-black md:text-4xl">Questions before you develop custom running socks</h2><div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200">{faqs.map(([question, answer]) => <details key={question} className="group px-6 py-5"><summary className="cursor-pointer list-none font-black marker:content-none">{question}</summary><p className="mt-3 leading-relaxed text-slate-600">{answer}</p></details>)}</div></section>

      <section className="bg-[#f7f8f6] px-5 py-16 text-center md:px-8 lg:py-20"><div className="mx-auto max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Start Your Project</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Ready to develop your custom running socks?</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Share your product style, quantity, sizes, materials, logo, packaging, delivery date and destination country. We will follow up with practical guidance on samples, pricing and timing.</p><div className="mx-auto mt-7 grid max-w-2xl gap-3 text-left sm:grid-cols-2">{['Target customer or use case', 'Quantity and size breakdown', 'Logo or reference artwork', 'Packaging and destination country'].map((item) => <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">{item}</div>)}</div><a href="#quote" className="mt-8 inline-flex rounded-xl bg-[#b4ff2b] px-8 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Request a Quote</a></div></section>

      <a href="#quote" className="fixed bottom-5 right-5 z-50 inline-flex rounded-full bg-[#b4ff2b] px-5 py-3.5 text-sm font-black uppercase tracking-wide text-[#0c1713] shadow-xl transition-transform hover:scale-105 lg:hidden">Request a Quote</a>
    </main>
  );
}

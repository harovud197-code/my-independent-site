import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FootballSocksQuoteForm from '../../components/FootballSocksQuoteForm';
import BuyerConfidencePanel from '@/components/BuyerConfidencePanel';
import FactoryEvidencePanel from '@/components/FactoryEvidencePanel';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/football-socks-manufacturer`;
const heroImage = '/assets/football-socks/Hero组合图.png';
const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20a%20quote%20for%20custom%20football%20socks.';

export const metadata: Metadata = {
  title: 'Custom Football Socks Manufacturer | OEM & Private Label | PeakMotion',
  description: 'Custom football socks manufacturer for clubs, teams and sports brands. OEM and private label knee-high, crew, grip and non-grip football socks from 50 pairs.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Custom Football Socks Manufacturer | PeakMotion',
    description: 'Develop custom football socks with team colors, club crests, player numbers, performance construction and branded packaging.',
    images: [{ url: `${siteUrl}${heroImage}`, alt: 'Custom football sock styles from PeakMotion' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Football Socks Manufacturer | PeakMotion',
    description: 'OEM and private label football socks for clubs, teams and sports brands.',
    images: [`${siteUrl}${heroImage}`],
  },
};

const footballTypes = [
  'Knee-high match socks',
  'Knee-high training socks',
  'Crew football socks',
  'Short grip football socks',
  'Non-grip football socks',
  'Footless football sock sleeves',
  'Kids’ and youth football socks',
  'Adult football socks',
] as const;

const customization = [
  ['Height and Fit', 'Choose no-show, ankle, crew, mid-calf or knee-high construction. Foot length, leg height and cuff elasticity can be adjusted for kids’, youth and adult size ranges.'],
  ['Materials and Knitting', 'Polyester, nylon, combed cotton, spandex and blended yarns are available, including moisture-wicking, mesh, antibacterial, recycled polyester and terry cushioning options.'],
  ['Performance Construction', 'Specify stay-up cuffs, arch support, targeted compression, breathable instep mesh, reinforced heel and toe, flat toe seams, shin-guard compatibility and silicone grip soles.'],
  ['Team Branding', 'Add jacquard knitting, embroidery, heat transfer, silicone printing, club crests, stripes, team names and player numbers based on artwork detail and placement.'],
  ['Color and Size Control', 'We support Pantone color matching for yarns, logos, stripes and silicone grip. Final color and sizing are confirmed against an approved sample, swatch or size chart.'],
  ['Packaging and Sorting', 'Choose bulk packing, OPP bags, header cards, belly bands, hangtags, custom boxes or retail packaging. Team orders can be sorted by size, color, player number or squad.'],
] as const;

const orderDetails = [
  ['Stock styles with custom logo', 'From 100 pairs', 'Keep an existing color, material, construction and sizing, then add an approved logo or packaging detail.'],
  ['Semi-custom football socks', 'From 50 pairs', 'Customize colors, logos, size breakdowns and selected packaging on an established construction.'],
  ['Fully custom football socks', 'From 50 pairs', 'Develop height, material composition, performance construction, colors, logos, sizing and packaging to your specification.'],
] as const;

const complianceDocuments = [
  {
    label: 'OEKO-TEX® STANDARD 100',
    title: 'Textile safety documentation for eligible sock programs',
    details: [
      ['Certificate', 'SH020 253592'],
      ['Certificate holder', 'Haiyan Huaerte Knitting Co., Ltd.'],
      ['Valid through', '15 December 2026'],
    ],
    text: 'The issued certificate covers specified socks, stockings, knee-high socks, footies, legwarmers and tights within its approved material scope. It is issued to Product Class I (baby articles), Annex 6.',
    href: '/assets/football-socks/certifications/oeko-tex-standard-100-sh020-253592.pdf',
    action: 'View certificate',
  },
  {
    label: 'BETTER COTTON CHAIN OF CUSTODY',
    title: 'Chain-of-custody support for eligible orders',
    details: [
      ['Certificate', 'ETK-00070076-BCI CoC-2512'],
      ['License number', '00070076'],
      ['Valid through', '25 December 2028'],
    ],
    text: 'Haiyan Huaerte Knitting Co., Ltd. is certified against the Better Cotton Chain of Custody Standard for the listed site and processes. Eligibility and any order-specific claim are confirmed through the relevant transaction documentation.',
    href: '/assets/football-socks/certifications/better-cotton-coc-00070076.pdf',
    action: 'View certificate',
  },
] as const;

const faqs = [
  ['What football sock styles can you manufacture?', 'We manufacture knee-high match and training socks, crew styles, short grip socks, non-grip socks, footless sock sleeves, and kids’, youth and adult football socks.'],
  ['Can the same design be made with or without silicone grip?', 'Yes. A football sock design can share the same colors, logo and main construction while using either a silicone-grip sole or a non-grip sole for different performance or price tiers.'],
  ['What is the MOQ for custom football socks?', 'Semi-custom and fully custom football sock orders normally start from 50 pairs. Stock styles with custom logo normally start from 100 pairs. Separate minimums may apply per colorway, crest or special yarn.'],
  ['How long do samples and bulk production take?', 'Simple logo samples typically take 5 to 7 days, semi-custom samples 7 to 10 days and fully customized samples 10 to 15 days. Standard bulk orders normally take 20 to 25 business days; complex projects can take 30 to 45 business days after final sample approval and payment confirmation.'],
  ['Can you match our club crest and Pantone colors?', 'Yes. Simple crests can be jacquard knitted, while detailed multicolor crests may need embroidery, heat transfer or printing. Pantone colors are matched through yarns, logos, stripes or silicone grip and confirmed with an approved sample or swatch.'],
  ['Can player numbers and size breakdowns be packed separately?', 'Yes. Player numbers can be knitted, heat transferred or printed. Team orders can be sorted and packed by size, colorway, player number or squad, subject to the project requirements.'],
  ['How do you control football sock quality?', 'QC checks include yarn and color verification, measurements, cuff recovery, left-and-right consistency, logo and stripe placement, reinforcement, toe seams, dye-lot consistency and packing. Grip styles also receive silicone placement, coverage, adhesion and pattern checks.'],
] as const;

export default function FootballSocksManufacturerPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Custom Football Socks Manufacturer | PeakMotion',
        description: metadata.description,
        about: ['Custom football socks', 'OEM football socks', 'Private label football socks'],
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Sports Socks', item: `${siteUrl}/products` },
          { '@type': 'ListItem', position: 3, name: 'Football Socks Manufacturer', item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="overflow-hidden bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">OEM and Private Label Manufacturer</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] md:text-6xl">Custom Football Socks Built for Clubs and Sports Brands</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">Develop match, training, crew, grip and non-grip football socks with your team colors, club crest, player numbers, performance construction and branded packaging.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Request a Custom Quote</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-7 py-4 font-black uppercase tracking-wide transition-colors hover:bg-[#0c1713] hover:text-white">Chat on WhatsApp</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-sm font-bold text-slate-700">
              <span><strong className="block text-lg text-[#0c1713]">50 pairs</strong>MOQ from</span>
              <span><strong className="block text-lg text-[#0c1713]">5-15 days</strong>sample lead time</span>
              <span><strong className="block text-lg text-[#0c1713]">4M pairs</strong>monthly capacity</span>
            </div>
          </div>
          <FootballSocksQuoteForm id="hero-quote" />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-7 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 text-center sm:grid-cols-4">
          {[['Match & training', 'football sock development'], ['Grip & non-grip', 'performance options'], ['Kids to adult', 'size-range support'], ['Worldwide', 'shipping support']].map(([value, label]) => <div key={value} className="border-slate-200 px-4 sm:border-r last:border-0"><strong className="block text-xl font-black md:text-2xl">{value}</strong><span className="mt-1 block text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Football Sock Types</p><h2 className="mt-3 text-3xl font-black md:text-5xl">One manufacturer for your football sock range</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Build a focused match sock or a complete teamwear collection. Height, colors, club crest, player numbers, cushioning, arch support and grip soles are reviewed against your project before quotation.</p></div>
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_0.8fr]"><figure className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6]"><div className="relative min-h-72 flex-1 bg-white"><Image src="/assets/football-socks/Hero组合图.png" alt="Four custom football grip sock colorways" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-contain object-center" /></div><figcaption className="px-6 py-5 font-bold text-slate-700">Colorways and grip options for custom football sock development</figcaption></figure><div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1"><figure className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6]"><Image src="/assets/football-socks/长筒袜正反面.png" alt="Front and sole view of a knee-high football grip sock" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><figcaption className="px-5 py-4 text-sm font-bold text-slate-700">Knee-high front and sole view</figcaption></figure><figure className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8f6]"><Image src="/assets/football-socks/三尺码对比.png" alt="Kids, youth and adult football sock size comparison" width={1448} height={1086} className="aspect-[4/3] w-full object-cover" /><figcaption className="px-5 py-4 text-sm font-bold text-slate-700">Kids, youth and adult size ranges</figcaption></figure></div></div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{footballTypes.map((type) => <article key={type} className="rounded-xl border border-slate-200 bg-[#f7f8f6] p-6"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Custom style</p><h3 className="mt-3 text-lg font-black">{type}</h3></article>)}</div>
        <div className="mt-8 rounded-xl border border-[#dce8c2] bg-[#f4fbe8] p-6 text-slate-700"><strong className="text-[#234812]">Grip and non-grip options:</strong> Build the same team design with a silicone-grip sole or non-grip sole while retaining the team colors, logo and main construction.</div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Full Customization</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Specify the football sock your buyer needs</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Our team confirms construction, artwork, materials and packing before sampling so the final product matches the right performance and price point.</p></div><div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{customization.map(([title, text], index) => <article key={title} className="rounded-xl border border-slate-200 bg-white p-7"><span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#e9f8d2] text-sm font-black text-[#387116]">0{index + 1}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p></article>)}</div></div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Construction Details</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Details worth checking before approval</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Cuff construction, yarn density, reinforcement and grip placement are reviewed against the approved sample and performance requirements.</p></div><div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">{['结构细节1.png', '结构细节2.png', '结构细节3.png', '结构细节4.png'].map((image, index) => <figure key={image} className="overflow-hidden rounded-xl border border-slate-200 bg-[#f7f8f6]"><Image src={`/assets/football-socks/${image}`} alt={`Close-up detail ${index + 1} of custom football sock construction`} width={1254} height={1254} className="aspect-square w-full object-cover" /><figcaption className="px-4 py-3 text-sm font-bold text-slate-700">Construction detail {String(index + 1).padStart(2, '0')}</figcaption></figure>)}</div></div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">MOQ and Lead Time</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Start with the right level of customization</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">Final MOQ depends on logo technique, colorway, crest detail, special yarns and packing. Multiple sizes can normally be combined in a colorway, subject to production requirements.</p></div><div className="mt-10 grid grid-cols-1 gap-px bg-white/15 lg:grid-cols-3">{orderDetails.map(([title, moq, text]) => <article key={title} className="bg-[#0c1713] p-7"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#b4ff2b]">{moq}</p><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 leading-relaxed text-slate-300">{text}</p></article>)}</div><div className="mt-8 grid grid-cols-1 gap-4 text-sm md:grid-cols-2"><p className="rounded-xl border border-white/15 p-5 text-slate-300"><strong className="block text-white">Sample development</strong>Simple logo samples normally take 5-7 days; semi-custom samples 7-10 days; fully customized samples 10-15 days after artwork, colors, measurements and sample payment are confirmed.</p><p className="rounded-xl border border-white/15 p-5 text-slate-300"><strong className="block text-white">Bulk production</strong>Standard orders normally take 20-25 business days. Complex orders with custom dyeing, detailed crests, multiple colorways or packaging can take 30-45 business days after final sample approval and payment confirmation.</p></div></div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-[#f7f8f6] p-3"><Image src="/assets/football-socks/生产QC图1.png" alt="Football sock knitting production line" width={1448} height={1086} className="aspect-[4/3] w-full rounded-xl object-cover" /><Image src="/assets/football-socks/生产QC图.png" alt="Football sock quality inspection and measurement" width={1448} height={1086} className="aspect-[4/3] w-full rounded-xl object-cover" /></div>
        <div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Production and Quality Control</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Quality checks for every football sock order</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Approximate monthly football-sock capacity is 4,000,000 pairs. Actual output is assessed against sock height, gauge, performance construction, crest detail, size breakdown and packing requirements.</p><div className="mt-7 grid grid-cols-2 gap-3 text-sm font-bold text-slate-700">{['Yarn and color verification', 'Foot and leg measurement', 'Cuff recovery checks', 'Logo and stripe placement', 'Reinforcement and toe seams', 'Grip adhesion and coverage', 'Dye-lot consistency', 'Packing verification'].map((item) => <span key={item} className="rounded-lg border border-slate-200 bg-[#f7f8f6] p-4">{item}</span>)}</div><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Discuss Your Specification</a></div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"><div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_20px_50px_rgba(12,23,19,0.08)]"><Image src="/assets/football-socks/球队包装图.png" alt="Football socks sorted in individual team packaging" width={1448} height={1086} className="aspect-[4/3] w-full rounded-xl object-cover" /></div><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Team Packaging</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Packed and sorted for your team&apos;s next step</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Choose individual bags, header cards, hangtags, branded boxes or bulk packing. Team orders can be sorted by age group, size, colorway, player number or squad for easier distribution.</p><div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">{['Individual OPP bags', 'Header cards and hangtags', 'Branded retail packaging', 'Team size and color sorting'].map((item) => <span key={item} className="rounded-lg border border-slate-200 bg-white p-4 font-bold text-slate-700">{item}</span>)}</div></div></div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Who We Serve</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Built for football buyers with different order needs</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Our OEM and private-label support can be adapted to club crests, player numbers, size breakdowns, order volume and branded retail packaging.</p><div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">{['Football clubs', 'Youth academies', 'School teams', 'Amateur and semi-professional teams', 'Teamwear brands', 'Football equipment distributors', 'Sporting goods wholesalers', 'Online football brands', 'Tournament organizers', 'Promotional merchandise companies'].map((item) => <span key={item} className="rounded-lg border border-slate-200 bg-white p-4 font-bold text-slate-700">{item}</span>)}</div></div><div className="rounded-2xl bg-[#0c1713] p-8 text-white md:p-10"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Export Support</p><h2 className="mt-3 text-3xl font-black">Ready for international football-sock projects</h2><p className="mt-5 leading-relaxed text-slate-300">We mainly serve the United Kingdom, Germany, France, the Netherlands, Spain, Italy, the United States, Canada, Australia and New Zealand, as well as other markets in Europe, North America and Oceania.</p><p className="mt-5 leading-relaxed text-slate-300">Sizing systems, packaging labels and product specifications can be adapted to buyer requirements.</p><Link href="/products/mid-calf-football-grip" className="mt-8 inline-flex rounded-xl border border-white/30 px-6 py-4 text-sm font-black uppercase tracking-wide transition-colors hover:bg-white hover:text-[#0c1713]">View a Football Grip Sock Style</Link></div></div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Customer Case Study</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Multi-size football socks for a UK youth academy</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">An academy needed knee-high match and training socks for children, youth and adult teams, with a consistent club identity across every size range.</p></div>
          <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-[#0c1713] p-8 text-white md:p-10"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">UK Youth Academy Project</p><h3 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">A complete club sock range, ready for direct team distribution</h3><div className="mt-7 flex flex-wrap gap-3">{['Knee-high match and training socks', 'Kids, youth and adult sizing', 'Pantone-matched club colors', 'Jacquard crest and custom stripes', 'Sorted by age group and size'].map((item) => <span key={item} className="rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-slate-200">{item}</span>)}</div></div>
            <div className="grid grid-cols-1 gap-px bg-slate-200 md:grid-cols-3"><div className="bg-white p-7"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">The Challenge</p><p className="mt-4 leading-relaxed text-slate-600">Previous supply had inconsistent leg proportions between sizes, overly tight cuffs on some kids&apos; socks and visible color variation between batches. The finished order also needed sorting for the academy&apos;s distribution process.</p></div><div className="bg-[#f4fbe8] p-7"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Our Solution</p><p className="mt-4 leading-relaxed text-slate-700">We adjusted foot length, leg height and cuff elasticity for each age range. Yarn shades, crest placement and proportional consistency were checked during sampling before bulk production.</p></div><div className="bg-white p-7"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">The Result</p><p className="mt-4 leading-relaxed text-slate-600">The order was completed within the agreed production schedule, with a consistent design across sizes and labels for direct distribution. The customer later discussed repeat production and an additional colorway.</p></div></div>
            <div className="flex flex-col items-start justify-between gap-5 bg-[#f7f8f6] p-7 md:flex-row md:items-center"><p className="max-w-3xl font-bold leading-relaxed text-slate-700">For multi-size club orders, we can review size proportions, cuff comfort, crest legibility, color matching and packing logic before sampling.</p><a href="#quote" className="inline-flex shrink-0 rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Discuss Your Team Project</a></div>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">30. Certifications and Test Documentation</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Documentation for responsible football sock sourcing</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">For projects that require compliance documentation, we can review the applicable materials, factory processes and order requirements before sampling and production.</p></div>
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {complianceDocuments.map((document) => <article key={document.label} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(12,23,19,0.06)] md:p-8"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">{document.label}</p><h3 className="mt-4 text-2xl font-black">{document.title}</h3><dl className="mt-7 grid grid-cols-1 gap-4 border-y border-slate-100 py-6 text-sm sm:grid-cols-3">{document.details.map(([term, value]) => <div key={term}><dt className="font-bold text-slate-500">{term}</dt><dd className="mt-1 font-black text-[#0c1713]">{value}</dd></div>)}</dl><p className="mt-6 leading-relaxed text-slate-600">{document.text}</p><a href={document.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-xl bg-[#b4ff2b] px-5 py-3 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">{document.action}</a></article>)}
          </div>
          <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-7 md:flex md:items-center md:justify-between md:gap-8 md:p-8"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Social Compliance Documentation</p><h3 className="mt-3 text-2xl font-black">Audit documentation available for qualified buyer review</h3><p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Current social compliance audit documentation is retained by the factory and can be reviewed with qualified buyers when it is relevant to a sourcing project, subject to confidentiality and the requested due-diligence process.</p></div><a href="#quote" className="mt-6 inline-flex shrink-0 rounded-xl border border-[#0c1713] px-5 py-3 text-sm font-black uppercase tracking-wide transition-colors hover:bg-[#0c1713] hover:text-white md:mt-0">Request documentation</a></article>
        </div>
      </section>

      <FactoryEvidencePanel product="custom football socks" moq="50 pairs" sampleLeadTime="5-15 business days" bulkLeadTime="20-25 business days" />

      <BuyerConfidencePanel product="football socks" />

      <section className="mx-auto max-w-4xl px-5 py-16 md:px-8 lg:py-24"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Questions about custom football socks</h2></div><div className="mt-10 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{answer}</p></details>)}</div></section>

      <section id="quote" className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24"><div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]"><div><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Start Your Project</p><h2 className="mt-3 text-4xl font-black md:text-6xl">Ready to develop your custom football socks?</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Send your sock type, quantity, team or brand artwork, size range and packaging needs. We will review the project and reply with practical production advice.</p></div><FootballSocksQuoteForm /></div></section>
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MoqFramework from '@/components/MoqFramework';

const siteUrl = 'https://peakmotionsocks.com';
const pagePath = '/blog/how-to-choose-pilates-grip-socks-supplier';
const pageUrl = `${siteUrl}${pagePath}`;
const heroImagePath = '/assets/blog/how-to-choose-pilates-grip-socks-supplier/pilates-studio-grip-socks-lifestyle.jpg';
const heroImageUrl = `${siteUrl}${heroImagePath}`;
const qcImage = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/private-label-socks-brand-launch/final-packing-check.png';
const shippingImage = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/case-studies/private-label-socks-brand-launch/shipping-cartons.jpg';
const galleryBase = '/assets/blog/how-to-choose-pilates-grip-socks-supplier/supplier-selection-gallery';

const yarnMaterialImages = [
  {
    src: `${galleryBase}/custom-socks-yarn-material-options-1.jpg`,
    alt: 'Colorful yarn cones used for custom Pilates grip sock material and color development',
    caption: 'Review yarn type, color range and material performance before confirming the studio sock specification.',
  },
  {
    src: `${galleryBase}/custom-socks-yarn-material-options-2.jpg`,
    alt: 'Custom sock yarn material options in multiple colors and cone sizes',
    caption: 'Compare available yarn colors early so sampling and repeat orders follow a consistent approved direction.',
  },
] as const;

const packagingCostImages = [
  {
    src: `${galleryBase}/private-label-socks-packaging-cost-options-1.png`,
    alt: 'Private label sock packaging options including bands, clear bags, black bags and kraft packs',
    caption: 'Mixed retail formats: paper bands, clear bags, branded pouches and kraft packs.',
  },
  {
    src: `${galleryBase}/private-label-socks-packaging-cost-options-2.png`,
    alt: 'Sock packaging comparison with backing cards, polybags, hang tags, pouches and kraft boxes',
    caption: 'Compare structure, display method and branding space for the intended studio sales channel.',
  },
  {
    src: `${galleryBase}/private-label-socks-packaging-cost-options-3.png`,
    alt: 'Studio and private label socks packed in clear retail bags with custom bands and hang cards',
    caption: 'Clear retail bags can keep the product visible while labels communicate size and brand details.',
  },
  {
    src: `${galleryBase}/private-label-socks-packaging-cost-options-4.png`,
    alt: 'Custom sock paper bands, hang cards and folding retail sleeves for private label packaging',
    caption: 'Paper bands, hang cards and folding sleeves offer different cost, information and presentation routes.',
  },
] as const;

export const metadata: Metadata = {
  title: 'How to Choose a Pilates Grip Socks Supplier | Buying Guide for Studios & Brands',
  description: 'Learn how to choose a Pilates grip socks supplier by comparing grip material, coverage, fabric, sock structure, toe design, logo options, MOQ, packaging and repeat order capability.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'How to Choose a Pilates Grip Socks Supplier',
    description: 'A practical buying guide for Pilates studios, wellness brands and private label buyers.',
    url: pageUrl,
    siteName: 'PeakMotion Socks',
    type: 'article',
    publishedTime: '2026-08-17T00:00:00.000Z',
    modifiedTime: '2026-08-18T00:00:00.000Z',
    images: [{ url: heroImageUrl, width: 1200, height: 1200, alt: 'Pilates grip socks worn in a studio setting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Choose a Pilates Grip Socks Supplier',
    description: 'Compare product, branding, MOQ, QC and repeat-order capability before choosing a supplier.',
    images: [heroImageUrl],
  },
};

const faqs = [
  ['What should I look for in a Pilates grip socks supplier?', 'Compare grip material, grip coverage, fabric, construction, toe design, logo capability, MOQ, packaging, quality control and repeat-order capability.'],
  ['What grip material is best for Pilates socks?', 'There is no single best option for every product. The correct material depends on grip performance, flexibility, durability, design and target cost. Ask the supplier what material they use and why.'],
  ['Should Pilates socks have full-sole grip?', 'Not always. Grip should cover the key contact areas while maintaining comfort and flexibility. The best pattern depends on the sock design and intended use.'],
  ['Are five-toe socks better than full-toe Pilates socks?', 'They serve different preferences. Five-toe socks emphasize toe separation, full-toe socks offer a traditional feel, and half-toe socks allow more direct toe contact.'],
  ['Can Pilates studios customize their logo?', 'Yes. Depending on the product structure, branding may be added through jacquard knitting, printing, embroidery, silicone grip design or branded packaging.'],
  ['What is the MOQ for custom Pilates grip socks?', 'Custom logo and studio grip programs typically start from 100 pairs depending on specification. Selected standard styles may start from 50 pairs, while fully bespoke construction or packaging requires a higher MOQ.'],
  ['Can Pilates grip socks be sold as studio merchandise?', 'Yes. Branded grip socks can be used for studio retail, member welcome kits, events, promotional products and online sales.'],
  ['Why are repeat orders important?', 'Grip socks are consumable studio products. Reliable repeat production helps studios maintain consistent sizing, colors, grip layouts and branding as customers repurchase.'],
] as const;

const comparisonRows = ['Grip material', 'Grip coverage', 'Fabric', 'Sock structure', 'Toe design', 'Logo method', 'MOQ', 'Packaging', 'Sampling', 'Repeat-order support'] as const;

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 grid gap-2 text-slate-700 sm:grid-cols-2">
      {items.map((item) => <li key={item} className="flex gap-3"><span className="font-black text-[#679a20]">✓</span><span>{item}</span></li>)}
    </ul>
  );
}

function GuideSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-slate-200 py-12 first:pt-0 last:border-0">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#679a20]">Factor {number}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">{title}</h2>
      <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}

export default function PilatesGripSocksSupplierGuidePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline: 'How to Choose a Pilates Grip Socks Supplier',
        description: metadata.description,
        image: heroImageUrl,
        datePublished: '2026-08-17',
        dateModified: '2026-08-17',
        author: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
        mainEntityOfPage: pageUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: 'How to Choose a Pilates Grip Socks Supplier', item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
      },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="bg-[#fbfaf7] px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-500"><Link href="/">Home</Link><span className="mx-2">/</span><Link href="/blog">Blog</Link><span className="mx-2">/</span><span>Pilates Grip Socks Supplier Guide</span></nav>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Pilates & wellness sourcing guide</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] md:text-6xl">How to Choose a Pilates Grip Socks Supplier</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">Compare grip material, sole coverage, fabric, structure, toe design, branding, MOQ, packaging, quality control and repeat-order capability before choosing a manufacturing partner.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-slate-500"><span>14 min read</span><span aria-hidden="true">•</span><span>Published August 17, 2026</span></div>
          </div>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(12,23,19,0.09)]">
            <Image src={heroImagePath} alt="Pilates studio customer wearing open-top grip socks" fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover object-bottom" />
          </figure>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="min-w-0">
            <div className="rounded-2xl border border-[#c9e4a8] bg-[#f4fbe8] p-7 text-lg leading-relaxed text-slate-700">
              Choosing the right supplier is more important than finding the lowest price. A successful product must combine comfort, secure fit, reliable anti-slip performance, attractive design, consistent sizing and repeatable production—plus practical branding and packaging support.
            </div>

            <GuideSection number="01" title="Start With the Grip Material">
              <p>Grip performance is a defining feature of Pilates socks. Suppliers may use silicone, PVC-based grip, rubber-like compounds or other anti-slip applications, each with a different feel and production route.</p>
              <p className="font-black text-[#0c1713]">Ask what material is used, whether it stays flexible after washing, how firm it feels on studio floors and whether the shape and layout can be customized.</p>
              <p>A capable manufacturer should explain the material and application process—not simply describe the product as “anti-slip.”</p>
            </GuideSection>

            <GuideSection number="02" title="Compare Grip Coverage">
              <p>The pattern should be placed where the foot contacts the floor. Options include forefoot, heel, full-sole, targeted pressure-zone, logo-led and geometric layouts.</p>
              <p>More grip is not automatically better. Coverage also affects flexibility, comfort, appearance, weight and cost. Ask for real sole photos so you can review position, density, heel coverage, forefoot coverage and spacing.</p>
              <figure className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfaf7] shadow-[0_16px_40px_rgba(12,23,19,0.08)]">
                <Image
                  src="/assets/blog/how-to-choose-pilates-grip-socks-supplier/pilates-grip-socks-sole-patterns.png"
                  alt="Pilates grip sock sole pattern and coverage comparison for half-toe, five-toe and full-toe styles"
                  width={1536}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-600">Grip coverage comparison across half-toe, five-toe and full-toe studio sock structures, including forefoot and heel placement.</figcaption>
              </figure>
            </GuideSection>

            <GuideSection number="03" title="Match the Fabric to the Studio Environment">
              <p>Fabric influences breathability, moisture management, softness, elasticity and durability. Cotton-rich blends can give a familiar studio feel, while nylon or polyester-rich performance blends may improve quick drying and durability.</p>
              <CheckList items={['Cuff elasticity and recovery', 'Arch fit and heel hold', 'Toe structure', 'Breathable or mesh zones', 'Durability after repeated use']} />
              <figure className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfaf7] shadow-[0_16px_40px_rgba(12,23,19,0.08)]">
                <Image
                  src="/assets/blog/how-to-choose-pilates-grip-socks-supplier/pilates-grip-socks-fabric-details.png"
                  alt="Close-up Pilates grip sock fabric, toe construction, elastic binding and silicone sole details"
                  width={1776}
                  height={887}
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-600">Close-up comparison of knit texture, five-toe construction, secure elastic binding and silicone grip application.</figcaption>
              </figure>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {yarnMaterialImages.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(12,23,19,0.07)]">
                    <div className="relative aspect-[3/2] bg-[#fbfaf7]">
                      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 360px" className="object-contain" />
                    </div>
                    <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-600">{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </GuideSection>

            <GuideSection number="04" title="Evaluate the Sock Structure">
              <p>Similar yarns and grip materials can feel very different when the structure changes. Review sock height, cuff design, arch support, heel construction, cushioning, mesh zones, toe design and opening shape.</p>
              <CheckList items={['Low-cut grip socks', 'Ankle grip socks', 'Ballet and cross-strap styles', 'Full-toe socks', 'Five-toe socks', 'Half-toe socks']} />
            </GuideSection>

            <GuideSection number="05" title="Compare Five-Toe, Half-Toe and Full-Toe Designs">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ['Five-toe', 'Separates each toe for a barefoot-style feel and strong product differentiation.'],
                  ['Half-toe', 'Leaves toe tips exposed for direct floor contact and a lightweight studio aesthetic.'],
                  ['Full-toe', 'Feels familiar to first-time users and offers more warmth and broad consumer appeal.'],
                ].map(([title, text]) => <div key={title} className="rounded-xl bg-[#f7f8f6] p-5"><h3 className="font-black text-[#0c1713]">{title}</h3><p className="mt-2 text-base">{text}</p></div>)}
              </div>
              <p>The right choice depends on customer preference, studio positioning, climate, target retail price and brand style. Some studios test more than one structure before scaling.</p>
              <figure className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfaf7] shadow-[0_16px_40px_rgba(12,23,19,0.08)]">
                <Image
                  src="/assets/blog/how-to-choose-pilates-grip-socks-supplier/pilates-grip-socks-structure-options.png"
                  alt="Half-toe, five-toe and full-toe Pilates grip sock structure comparison"
                  width={1456}
                  height={1086}
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-600">Visual comparison of half-toe, five-toe and full-toe structures for Pilates and studio grip sock programs.</figcaption>
              </figure>
            </GuideSection>

            <GuideSection number="06" title="Check Studio Logo Customization">
              <p>Branded grip socks can become studio merchandise, member welcome products, class accessories, event products and promotional gifts.</p>
              <CheckList items={['Jacquard knitting', 'Printed branding', 'Embroidery', 'Silicone logo grip', 'Branded labels and packaging']} />
              <p>Logo placement can include the cuff, top of foot, heel, side, sole grip or packaging. The method should support stretch, comfort, grip and fit rather than interfere with them.</p>
            </GuideSection>

            <GuideSection number="07" title="Understand MOQ Before You Order">
              <p>The practical MOQ depends on the sock structure, yarn, colors, logo method, grip design, size range and packaging. Ask for the MOQ of the exact product—not a generic factory minimum.</p>
              <div className="rounded-xl border border-[#b9d895] bg-[#f4fbe8] p-5 text-base"><strong className="text-[#234812]">Current planning framework:</strong> Custom logo and studio grip programs typically start from 100 pairs depending on specification. Selected standard styles may start from 50 pairs. Fully bespoke construction, size assortments or packaging require a higher MOQ.</div>
              <p>A smaller first order can help test customer interest, colors, sizes, retail pricing and feedback before production is increased.</p>
            </GuideSection>

            <GuideSection number="08" title="Plan Packaging for Studio Retail">
              <p>If socks will be sold at reception, online or in a retail area, packaging is part of the product. Options include paper bands, hang tags, branded cards, polybags, custom boxes, barcode labels and size stickers.</p>
              <p>A simple branded band may suit a studio launch, while private label brands may need printed boxes, inserts, barcodes, retail labels and a fuller brand story. Confirm the packaging MOQ separately because it may differ from the sock MOQ.</p>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {packagingCostImages.map((image) => (
                  <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(12,23,19,0.07)]">
                    <div className="relative aspect-[3/2] bg-[#fbfaf7]">
                      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 360px" className="object-contain" />
                    </div>
                    <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-600">{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="rounded-xl border border-[#c9e4a8] bg-[#f4fbe8] p-5 text-base"><strong className="text-[#234812]">Packaging evidence:</strong> compare the format, branding space, size labeling, unit cost and retail channel before approving the final pack.</p>
            </GuideSection>

            <GuideSection number="09" title="Confirm Repeat-Order Capability">
              <p>Grip socks can generate repeat demand as customers replace worn pairs, buy additional colors or choose seasonal designs. Ask whether the supplier can reproduce yarn colors, grip layouts, sizing and packaging—and how long production records are retained.</p>
              <p>A supplier that completes the first order but cannot reproduce it consistently may create problems later.</p>
            </GuideSection>

            <GuideSection number="10" title="Evaluate Sampling Before Bulk Production">
              <p>Use sampling to inspect fit, toe construction, grip placement and adhesion, logo size, colors, elasticity, sock height and packaging.</p>
              <p>Do not approve a sample only because it looks attractive. Test it during Pilates, yoga, barre or studio movement and after repeated washing. Clear feedback should lead to specific, traceable revisions.</p>
            </GuideSection>

            <GuideSection number="11" title="Ask About Quality Control">
              <p>Inspection should cover size, toe structure, stitching, grip placement and completeness, logo position, color consistency, pairing and packaging. Sole inspection is especially important for grip socks.</p>
              <p className="font-black text-[#0c1713]">Ask: “What exactly do you inspect before packing the socks?” A detailed answer is more useful than a general quality claim.</p>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="relative aspect-[4/3] bg-[#f5f4f1]"><Image src={qcImage} alt="Factory worker completing a final packing and quality control check for a sock order" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><figcaption className="p-5"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Final QC & packing</span><p className="mt-2 text-base text-slate-600">Check finished pairs, branding, packaging and carton preparation against the approved specification.</p></figcaption></figure>
                <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="relative aspect-[4/3] bg-[#f5f4f1]"><Image src={shippingImage} alt="Bulk cartons of finished socks prepared for shipment" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div><figcaption className="p-5"><span className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Bulk shipment</span><p className="mt-2 text-base text-slate-600">Repeat production should preserve the approved colors, sizes, grip pattern, packing format and shipment records.</p></figcaption></figure>
              </div>
            </GuideSection>

            <GuideSection number="12" title="Compare Suppliers Using the Same Specification">
              <p>Use one specification when requesting quotations. Otherwise, you may compare a basic sock from one supplier with a more customized product from another.</p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead className="bg-[#0c1713] text-white"><tr><th className="p-4">Factor</th><th className="p-4">Supplier A</th><th className="p-4">Supplier B</th><th className="p-4">Supplier C</th></tr></thead>
                  <tbody>{comparisonRows.map((row) => <tr key={row} className="border-t border-slate-200"><th className="bg-[#f7f8f6] p-4 font-black text-[#0c1713]">{row}</th><td className="p-4">—</td><td className="p-4">—</td><td className="p-4">—</td></tr>)}</tbody>
                </table>
              </div>
            </GuideSection>

            <GuideSection number="13" title="Questions to Ask a Pilates Grip Socks Supplier">
              <CheckList items={['What grip material do you use?', 'Can the grip layout be customized?', 'Can you show real sole photos?', 'Which fabric do you recommend?', 'Can you make five-toe, half-toe and full-toe styles?', 'What logo methods are available?', 'What is the MOQ for this exact design?', 'Can you provide custom packaging?', 'What is the sample lead time?', 'What QC steps are used?', 'Can you reproduce colors and sizing on repeat orders?']} />
            </GuideSection>

            <GuideSection number="14" title="Watch for Supplier Red Flags">
              <CheckList items={['Grip material cannot be explained', 'Real sole photos are unavailable', 'Grip coverage changes between samples', 'Toe openings are inconsistent', 'Fabric composition is unclear', 'MOQ changes without explanation', 'Packaging is discussed only after production', 'Repeat-order consistency cannot be confirmed']} />
              <p>One small issue does not always mean a supplier is unreliable, but repeated inconsistencies during sampling can predict larger problems in bulk production.</p>
            </GuideSection>

            <GuideSection number="15" title="Choose a Partner That Supports the Full Product Cycle">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {['Studio idea', 'Structure selection', 'Grip design', 'Logo development', 'Sampling', 'Wear testing', 'Bulk production', 'Packaging', 'Studio launch', 'Repeat orders'].map((step, index) => <div key={step} className="rounded-xl border border-slate-200 p-4"><span className="text-xs font-black text-[#679a20]">{String(index + 1).padStart(2, '0')}</span><p className="mt-2 font-black text-[#0c1713]">{step}</p></div>)}
              </div>
              <p>For a studio or growing brand, reliable support across the complete cycle is more valuable than the lowest unit price alone.</p>
            </GuideSection>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-[#0c1713] p-7 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Buyer checklist</p>
              <h2 className="mt-3 text-2xl font-black">Prepare a clearer supplier brief.</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">{['Reference images', 'Sock and toe structure', 'Grip pattern', 'Logo file and colors', 'Sizes and quantity', 'Packaging needs', 'Target market', 'Launch date'].map((item) => <li key={item} className="flex gap-2"><span className="text-[#b4ff2b]">✓</span>{item}</li>)}</ul>
              <Link href="/contact" className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#b4ff2b] px-5 py-4 text-sm font-black uppercase tracking-wide !text-[#0c1713]">Request a quote</Link>
            </div>
          </aside>
        </div>
      </section>

      <MoqFramework />

      <section id="faq" className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Frequently Asked Questions</h2></div><div className="mt-10 space-y-4">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{answer}</p></details>)}</div></div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center"><p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Looking for a custom supplier?</p><h2 className="mt-3 text-4xl font-black md:text-6xl">Build a studio grip sock program around your market.</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">PeakMotion supports Pilates studios, wellness brands and private label businesses with grip sock development, sampling, custom branding, packaging and production support.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/contact" className="rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide !text-[#0c1713]">Request a custom grip socks quote</Link><Link href="/yoga-pilates-grip-socks-supplier" className="rounded-xl border border-white px-7 py-4 font-black uppercase tracking-wide !text-white">Explore Pilates grip socks</Link></div><div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-bold text-slate-300"><Link href="/socks-manufacturing" className="underline underline-offset-4">Manufacturing process</Link><Link href="/case-studies/yoga-pilates-socks-development" className="underline underline-offset-4">Yoga & Pilates case study</Link><Link href="/sports-socks-moq-guide" className="underline underline-offset-4">MOQ guide</Link></div></div>
      </section>
    </main>
  );
}

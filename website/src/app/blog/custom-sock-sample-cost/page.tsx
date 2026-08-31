import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/blog/custom-sock-sample-cost`;
const imageBase = '/assets/blog/custom-sock-sample-cost';
const heroImage = `${imageBase}/custom-sock-sample-cost-before-bulk-production.jpg`;

export const metadata: Metadata = {
  title: 'Custom Sock Sample Cost Before Bulk Production | PeakMotion',
  description:
    'How much does a custom sock sample cost? Learn what affects sample fees, revisions, shipping and development costs before placing a bulk sock order.',
  alternates: { canonical: pageUrl },
  keywords: [
    'custom sock sample cost',
    'custom socks sample fee',
    'sock sampling cost',
    'private label sock sample',
    'custom sock development cost',
    'sock sample before bulk production',
  ],
  openGraph: {
    title: 'Custom Sock Sample Cost: What Brands Should Expect Before Bulk Production',
    description:
      'Understand sample fees, revisions, shipping and approval checks before moving a custom sock design into bulk production.',
    url: pageUrl,
    type: 'article',
    publishedTime: '2026-08-31T00:00:00+08:00',
    modifiedTime: '2026-08-31T00:00:00+08:00',
    images: [{ url: `${siteUrl}${heroImage}`, alt: 'Custom sock samples prepared before bulk production' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Sock Sample Cost Before Bulk Production',
    description: 'A practical budgeting and approval guide for brands developing custom socks.',
    images: [`${siteUrl}${heroImage}`],
  },
};

const sampleRanges = [
  ['Existing / reference sample', 'Low cost + shipping', 'Checking general quality and materials'],
  ['Standard custom sock sample', 'Around $50–$150+', 'Logo, colors and standard construction'],
  ['More complex custom development', 'Around $100–$300+', 'Special yarns, cushioning and multiple details'],
  ['Grip, compression or highly technical sample', 'Can be $150–$500+', 'Complex construction and setup'],
];

const faqs = [
  {
    question: 'How much does a custom sock sample cost?',
    answer:
      'Custom sock sample costs vary by manufacturer and specification. For budgeting, a standard custom sock may fall in the tens to low hundreds of US dollars, while complex grip, compression or fully bespoke development can cost more. Always request a project-specific quotation.',
  },
  {
    question: 'Why is a custom sock sample more expensive than the bulk price per pair?',
    answer:
      'A sample requires design review, machine programming, material preparation, knitting, finishing and inspection for only a very small number of pairs. In bulk production, these setup costs can be spread across a much larger quantity.',
  },
  {
    question: 'Is the sock sample fee refundable?',
    answer:
      'It depends on the manufacturer. Some sample fees are non-refundable, while others may be partially or fully credited when a qualifying bulk order is placed. Confirm the policy before paying for sampling.',
  },
  {
    question: 'How long does it take to make a custom sock sample?',
    answer:
      'PeakMotion normally plans approximately 7–15 days for sampling after artwork and key specifications are confirmed. More complex products or special materials may require additional time. International shipping time should also be considered.',
  },
  {
    question: 'Do I need a sample before ordering 100 pairs?',
    answer:
      'For a branded retail product, physical sampling is recommended because it allows you to check fit, materials, colors, logo reproduction and construction before production. The appropriate sampling route depends on the product and customization level.',
  },
  {
    question: 'Can I make several sample revisions?',
    answer:
      'Yes, when required. However, additional revisions may add development time and cost. Providing clear artwork and a detailed product brief before the first sample can reduce unnecessary rounds.',
  },
  {
    question: 'Can one sample be used to approve several sizes?',
    answer:
      'Sometimes. One development size may be sufficient to approve design and construction, but projects with important fit differences may require more than one size. Confirm the sizing plan with the manufacturer before sampling.',
  },
  {
    question: 'What information should I send to get an accurate sample quote?',
    answer:
      'Prepare your sock type, reference images, logo or artwork, preferred colors, target material, sizes, expected bulk quantity, packaging requirements and destination country. A complete brief makes it easier to recommend an accurate sampling route.',
  },
];

const workflow = [
  ['Share your product brief', 'Send the sock type, target customer, reference images, logo, quantity and packaging direction.'],
  ['Confirm the production route', 'Review the practical MOQ, customization options and recommended sample plan.'],
  ['Confirm sample cost', 'Check what is included, freight terms and whether development fees can be credited.'],
  ['Produce the physical sample', 'The factory develops the sock according to the confirmed specification.'],
  ['Review and test', 'Check fit, materials, colors, logo, grip, construction and packaging.'],
  ['Revise if necessary', 'Give specific, measurable feedback so changes can be implemented accurately.'],
  ['Approve the final sample', 'Confirm the production specification and approved reference in writing.'],
  ['Start bulk production', 'Production proceeds with inspection, packaging and shipping controls.'],
];

function ArticleImage({ src, alt, caption, className = '' }: { src: string; alt: string; caption: string; className?: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
      <div className={`relative aspect-[16/10] w-full bg-white ${className}`}>
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-contain" />
      </div>
      <figcaption className="border-t border-slate-100 px-5 py-3 text-sm leading-6 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-5 grid gap-2 pl-0">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[1.02rem] leading-7 text-slate-700">
          <span aria-hidden="true" className="mt-[0.65rem] h-2 w-2 shrink-0 rounded-full bg-[#8cff00]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CustomSockSampleCostPage() {
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Custom Sock Sample Cost: What Brands Should Expect Before Bulk Production',
    description: metadata.description,
    image: `${siteUrl}${heroImage}`,
    datePublished: '2026-08-31T00:00:00+08:00',
    dateModified: '2026-08-31T00:00:00+08:00',
    mainEntityOfPage: pageUrl,
    author: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
  };
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: 'Custom Sock Sample Cost', item: pageUrl },
    ],
  };

  return (
    <main className="bg-[#f8faf7] text-[#07140f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10 lg:py-16">
          <div>
            <nav aria-label="Breadcrumb" className="mb-7 text-sm font-semibold text-slate-500">
              <Link href="/" className="hover:text-[#4f9300]">Home</Link>
              <span className="px-2">/</span>
              <Link href="/blog" className="hover:text-[#4f9300]">Blog</Link>
              <span className="px-2">/</span>
              <span>Sample Cost Guide</span>
            </nav>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#4f9300]">Sampling &amp; Production Planning</p>
            <h1 className="text-4xl font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-[4rem]">
              Custom Sock Sample Cost: What Brands Should Expect Before Bulk Production
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Understand what affects custom sock sample fees, revisions, shipping and development costs—then approve a production-ready sample with fewer surprises.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slate-500">
              <span>20 min read</span><span>Published August 31, 2026</span>
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-[#cbd9c7] bg-[#edf3eb] shadow-[0_30px_85px_rgba(31,61,42,0.18)]">
            <Image src={heroImage} alt="Custom sock samples prepared for review before bulk production" fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="scale-[1.035] object-cover object-center" />
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20 [&_h2]:mt-16 [&_h2]:text-3xl [&_h2]:font-black [&_h2]:tracking-[-0.03em] [&_h3]:mt-10 [&_h3]:text-2xl [&_h3]:font-extrabold [&_p]:mt-5 [&_p]:text-[1.04rem] [&_p]:leading-8 [&_p]:text-slate-700">
        <p>If you are developing socks for a new brand, one of the first questions is: <strong>How much does a custom sock sample cost before a bulk order?</strong></p>
        <p>There is no universal sample price. For planning purposes, brands may see costs from <strong>around $50 to a few hundred dollars per design</strong>, depending on construction, materials, logo method, grip requirements, packaging and revision rounds.</p>
        <div className="my-8 rounded-[1.5rem] border-l-4 border-[#8cff00] bg-white p-6 shadow-sm">
          <p className="!mt-0 font-bold text-[#07140f]">The useful question is not only “How much is the sample?” It is “What is included, and is this sample suitable for approving bulk production?”</p>
        </div>

        <h2>Quick Answer: How Much Does a Custom Sock Sample Cost?</h2>
        <div className="mt-7 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="bg-[#102017] text-white"><tr><th className="p-4">Sample type</th><th className="p-4">Typical cost direction</th><th className="p-4">Best for</th></tr></thead>
            <tbody>{sampleRanges.map((row) => <tr key={row[0]} className="border-t border-slate-100"><td className="p-4 font-bold">{row[0]}</td><td className="p-4">{row[1]}</td><td className="p-4 text-slate-600">{row[2]}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="text-sm font-semibold"><strong>These are budget-planning ranges, not a PeakMotion fixed price list.</strong> A project-specific quote should follow a review of the sock type, artwork, colors, materials, sizes, grip, packaging, destination and expected quantity.</p>
        <p>Brands planning a full collection can also review the <Link href="/private-label-sports-socks" className="font-bold text-[#397500] underline underline-offset-4">PeakMotion private label sports socks program</Link> before preparing the sample brief.</p>

        <h2>Why One Custom Sock Sample Costs More Than One Bulk Pair</h2>
        <p>A sample is not produced with bulk-production efficiency. Before one physical sample is finished, the factory may still need to review artwork, convert the design into a knitting program, select yarn, prepare machine settings, test colors, knit a tiny quantity, add finishing, inspect, pack and ship it.</p>
        <p>During bulk production, those setup costs are spread across hundreds or thousands of pairs. During sampling, they may be spread across only one or several pairs. Comparing a sample fee directly with the bulk price per pair is therefore misleading.</p>
        <ArticleImage src={`${imageBase}/custom-sock-sample-knitting-machine.jpg`} alt="Knitting machine setup for a custom sock sample" caption="Machine programming and setup are development work, even when only a few sample pairs are produced." />

        <h2>What Affects Custom Sock Sample Cost?</h2>
        <h3>1. Sock Construction</h3>
        <p>A basic crew sock is normally easier to sample than a technical performance sock. Terry cushioning, mesh ventilation, arch compression, reinforced heel and toe, left/right designs, double layers, five-toe construction or specialized cuffs can each require more programming and testing.</p>
        <h3>2. Yarn and Material Selection</h3>
        <p>Sampling is more straightforward when the required cotton, nylon, polyester, spandex or performance yarn is already available. Special compositions and dyed brand colors add sourcing time and cost.</p>
        <div className="my-8 grid gap-4 sm:grid-cols-3">
          {[
            ['custom-sock-yarn-color-sample-matching-1.jpg', 'Yarn selection for custom sock sampling'],
            ['custom-sock-yarn-color-sample-matching-detail.png', 'Detailed yarn and color matching reference'],
            ['custom-sock-yarn-color-sample-matching-2.jpg', 'Color matching before sample knitting'],
          ].map(([file, alt]) => <div key={file} className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white"><Image src={`${imageBase}/${file}`} alt={alt} fill sizes="(max-width: 640px) 100vw, 280px" className="object-contain" /></div>)}
        </div>
        <h3>3. Logo and Artwork Complexity</h3>
        <p>A simple knitted logo usually needs less development than detailed all-over artwork. Jacquard, embroidery, printed graphics, silicone grip logos, labels and packaging all have different setup requirements. Fine text and thin lines may need adaptation to the machine needle structure.</p>
        <h3>4. Custom Grip Design</h3>
        <p>Grip socks require decisions about material, coverage, thickness, pattern dimensions, logo position, color, sole layout and size-specific placement. A standard dot pattern is easier than a fully custom sole design.</p>
        <ArticleImage src={`${imageBase}/custom-grip-sock-sample-silicone-pattern.png`} alt="Custom silicone grip sock sample pattern" caption="Grip artwork must be checked for coverage, placement, thickness and production-ready detail." />
        <p>For bulk pricing after sampling, see our guide to <Link href="/blog/how-much-do-custom-grip-socks-cost" className="font-bold text-[#397500] underline underline-offset-4">custom grip sock pricing</Link>.</p>
        <h3>5. Number of Colors and Color Matching</h3>
        <p>Available factory yarn colors usually move faster than an exact branded shade. Provide Pantone references, original artwork and physical references when needed. Yarn, knit density, nearby colors and lighting can all affect how a color appears.</p>
        <h3>6. Number of Sizes</h3>
        <p>One development size can often approve the visual direction, materials and construction, but products with greater fit risk may need additional size confirmation. Agree on the final size breakdown before sampling.</p>
        <h3>7. Packaging Samples</h3>
        <p>Paper bands, header cards, hang tags, bags, barcode labels, printed boxes and gift packaging may be separate development items. Retail-ready collections should confirm how the sock, label, barcode and package work together.</p>
        <div className="my-8 grid gap-4 sm:grid-cols-2">
          {[
            ['private-label-sock-packaging-sample-1.png', 'Private label sock packaging sample option'],
            ['private-label-sock-packaging-sample-2.png', 'Retail-ready custom sock packaging sample'],
          ].map(([file, alt]) => <div key={file} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white"><Image src={`${imageBase}/${file}`} alt={alt} fill sizes="(max-width: 640px) 100vw, 430px" className="object-contain" /></div>)}
        </div>
        <h3>8. International Shipping</h3>
        <p>Express courier charges can be a meaningful part of the landed sampling budget. Before payment, confirm whether the quotation includes production, extra pairs, packaging, freight, duties and revisions.</p>

        <h2>Is the Custom Sock Sample Fee Refundable?</h2>
        <p>There is no universal industry rule. A fee may be non-refundable, credited partly or fully toward a qualifying bulk order, absorbed for a larger confirmed program, or separated from tooling such as grip screens, packaging dies and embroidery digitizing.</p>
        <div className="my-7 rounded-3xl bg-[#102017] p-7 text-white"><p className="!mt-0 !text-white"><strong>Ask in writing:</strong> “If I place the bulk order, which sample or development fees will be credited back?”</p></div>

        <h2>Sample Cost vs Bulk Order Cost</h2>
        <p>For a serious brand, sampling is a product-development and risk-control cost. If a sample program cost $100, its effective development cost would be $1.00 per pair over 100 pairs, $0.20 over 500, $0.10 over 1,000 and $0.02 over 5,000.</p>
        <p>Saving a small amount during development is rarely worthwhile if it increases the risk of the wrong fit, color, logo, sizing, grip, seams or packaging across hundreds of production pairs.</p>

        <h2>How Many Sample Rounds Should a Brand Expect?</h2>
        <p>A proven construction may be approved after the first physical sample. A highly customized product may need revisions to logo position, height, compression, yarn color, cushioning, grip layout, sizing or packaging. Use as few rounds as practical, but as many as required for confident approval.</p>
        <div className="my-8 grid gap-4 sm:grid-cols-2">
          {[
            ['custom-sock-sample-revision-before-after-1.jpg', 'Custom sock sample revision comparison before bulk production'],
            ['custom-sock-sample-revision-before-after-2.jpg', 'Revised custom sock sample after brand feedback'],
          ].map(([file, alt]) => <div key={file} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white"><Image src={`${imageBase}/${file}`} alt={alt} fill sizes="(max-width: 640px) 100vw, 430px" className="object-contain" /></div>)}
        </div>

        <h2>How Long Does Custom Sock Sampling Take?</h2>
        <p>At PeakMotion, sample development is normally planned at around <strong>7–15 days</strong> after important artwork and product specifications are confirmed. Construction complexity, yarn availability, colors, grip, packaging and revision rounds can change the schedule. Shipping time is additional.</p>
        <p>See the broader workflow on our <Link href="/socks-manufacturing" className="font-bold text-[#397500] underline underline-offset-4">OEM socks manufacturing page</Link>.</p>

        <h2>Sample Cost and MOQ Should Be Planned Together</h2>
        <p>The approved sample must represent a product that can be manufactured at the planned order quantity. PeakMotion uses a specification-based MOQ framework:</p>
        <div className="my-7 grid gap-4 md:grid-cols-3">
          {[
            ['Selected standard styles', 'From 50 pairs'],
            ['Custom logo / studio grip programs', 'Typically from 100 pairs'],
            ['Fully bespoke construction / packaging', 'Higher MOQ depending on specification'],
          ].map(([title, detail]) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="!mt-0 !text-lg">{title}</h3><p className="!mt-2 !text-sm font-bold text-[#397500]">{detail}</p></div>)}
        </div>
        <p>Compare routes in the <Link href="/blog/custom-socks-moq-explained" className="font-bold text-[#397500] underline underline-offset-4">custom socks MOQ guide</Link> before finalizing the sample brief.</p>

        <h2>How to Reduce Sample Cost Without Cutting the Wrong Corners</h2>
        <BulletList items={[
          'Start with one core style instead of developing several constructions at once.',
          'Confirm construction and branding in one priority colorway before expanding the palette.',
          'Use a proven base construction when the main advantage is branding, community, grip art or packaging.',
          'Send vector artwork, Pantone references and clear dimensions.',
          'Define the target wearer and intended use so materials and fit can be specified correctly.',
          'Share the realistic expected bulk quantity from the start so the route can scale.',
        ]} />

        <h2>What to Check When the Custom Sock Sample Arrives</h2>
        <p>Do not approve a sample after a quick visual check. Review design, construction, fit, materials, grip and every customer-facing branding element.</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {[
            ['Design', 'Logo shape and position, pattern, color and overall balance'],
            ['Construction', 'Height, cuff, toe seam, heel, cushioning, mesh and compression zones'],
            ['Fit', 'Heel alignment, toe comfort, cuff pressure, stretch, slipping and bunching'],
            ['Materials', 'Hand feel, thickness, stretch recovery and fit with the intended retail price'],
            ['Grip', 'Coverage, placement, adhesion, pattern, comfort and movement performance'],
            ['Branding', 'Knitted or grip logo, label, tag, bag, box, barcode and care information'],
          ].map(([title, detail]) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="!mt-0 !text-xl">{title}</h3><p className="!mt-2 !text-sm">{detail}</p></div>)}
        </div>
        <ArticleImage src={`${imageBase}/custom-sock-sample-measurement-quality-check.png`} alt="Custom sock sample measurement and quality-control check" caption="Record measurements and approval details so the final sample can serve as a reference for bulk quality control." />

        <h2>What to Confirm Before Bulk Approval</h2>
        <BulletList items={['Final construction and material composition', 'Yarn colors and logo method', 'Logo dimensions and sock measurements', 'Size breakdown and grip design', 'Packaging and labeling', 'Bulk quantity and lead time', 'Quality requirements and shipping method']} />
        <p>Do not rely only on messages scattered across several weeks. A clear final specification reduces misunderstandings when the project moves into production.</p>

        <h2>A Practical Sample-to-Bulk Workflow</h2>
        <ol className="mt-8 grid gap-4">
          {workflow.map(([title, detail], index) => (
            <li key={title} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[3rem_1fr]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8cff00] font-black text-[#07140f]">{index + 1}</span>
              <div><h3 className="!mt-0 !text-xl">{title}</h3><p className="!mt-1 !text-sm">{detail}</p></div>
            </li>
          ))}
        </ol>
        <p>For a real development example, see the <Link href="/case-studies/private-label-socks-brand-launch" className="font-bold text-[#397500] underline underline-offset-4">private label sock brand launch case study</Link>.</p>

        <h2>Is Paying for a Custom Sock Sample Worth It?</h2>
        <p>For a branded retail product, usually yes. A digital mockup can show general color and logo direction, but not actual fit, yarn feel, cushioning, stretch, compression, toe comfort, grip performance, finished dimensions or real-world color appearance.</p>
        <p>The purpose is not simply to receive one expensive pair. It is to answer: <strong>“Is this the product I am comfortable producing at scale?”</strong></p>

        <h2>Final Takeaway: Budget for the Sample Before Bulk</h2>
        <p>There is no single sample cost for every project. Compare what each quotation includes, shipping, revision policy, sample lead time, credit terms, final MOQ and expected bulk lead time. The cheapest sample is not automatically the best value; the goal is an accurate, repeatable production reference.</p>

        <section className="my-14 rounded-[2rem] bg-[#102017] p-7 text-white sm:p-10">
          <p className="!mt-0 text-sm font-extrabold uppercase tracking-[0.16em] !text-[#a5ff3f]">Plan your sampling route</p>
          <h2 className="!mt-3 !text-3xl !text-white">Prepare a sample that can scale into bulk production</h2>
          <p className="!text-slate-200">Send PeakMotion your product type, logo, target quantity and packaging requirements. We can recommend a practical sample, MOQ and production route before you commit.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-[#8cff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-[#07140f] hover:bg-[#a5ff3f]">Request a custom sock quote</Link>
            <Link href="/private-label-sports-socks" className="rounded-full border border-white/30 px-6 py-3 text-sm font-black uppercase tracking-wide text-white hover:border-white">Explore private label manufacturing</Link>
          </div>
        </section>

        <h2>FAQ: Custom Sock Sample Cost</h2>
        <div className="mt-7 grid gap-4">
          {faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer list-none pr-8 text-lg font-extrabold">{faq.question}</summary><p className="!mb-0 !text-base">{faq.answer}</p></details>)}
        </div>
      </article>
    </main>
  );
}

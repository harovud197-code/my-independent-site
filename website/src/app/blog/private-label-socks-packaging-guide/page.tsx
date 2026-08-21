import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { ReactNode } from 'react';

const siteUrl = 'https://peakmotionsocks.com';
const pagePath = '/blog/private-label-socks-packaging-guide';
const pageUrl = `${siteUrl}${pagePath}`;
const heroImagePath = '/assets/blog/private-label-manufacturer-guide/packaging-finished-presentation.webp';
const heroImageUrl = `${siteUrl}${heroImagePath}`;
const packagingBase = '/assets/blog/custom-socks-manufacturing-cost';

export const metadata: Metadata = {
  title: 'Private Label Socks Packaging Guide | Boxes, Hang Tags, Bands & Retail Packaging',
  description: 'Learn how to choose private label socks packaging, including paper bands, hang tags, boxes, polybags, labels, barcodes and retail-ready options. Compare cost, MOQ, branding and shipping considerations before production.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Private Label Socks Packaging Guide',
    description: 'Compare paper bands, hang tags, bags, boxes, labels and retail-ready sock packaging before production.',
    url: pageUrl,
    siteName: 'PeakMotion Socks',
    type: 'article',
    publishedTime: '2026-08-21T00:00:00.000Z',
    modifiedTime: '2026-08-21T00:00:00.000Z',
    images: [{ url: heroImageUrl, width: 1920, height: 1152, alt: 'Private label sock packaging preparation with bands, bags and printed cards' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Label Socks Packaging Guide',
    description: 'Choose packaging that fits your brand, sales channel, MOQ, cost and fulfillment requirements.',
    images: [heroImageUrl],
  },
};

const faqs = [
  ['What is the best packaging for private label socks?', 'There is no single best format. Paper bands, hang tags, bags and boxes each serve different needs. The best option depends on your sales channel, budget, MOQ and retail positioning.'],
  ['What is the most affordable custom sock packaging?', 'Simple paper bands, hang tags, stickers or branded bags are often more practical for smaller runs than complex custom boxes.'],
  ['Does custom sock packaging have a separate MOQ?', 'Often, yes. Packaging and socks may come from different production processes, so their minimum quantities can be different.'],
  ['Can I add my logo to sock packaging?', 'Yes. Logo, colors, product information, size and other branding elements can usually be customized depending on the packaging format.'],
  ['Can sock packaging include barcodes?', 'Yes. Barcode labels or printed barcodes can be added when required, but the barcode system should be planned before bulk printing.'],
  ['Should startups use custom boxes?', 'Not always. Startups may benefit from simpler packaging until the product and demand are validated.'],
  ['Does packaging affect freight cost?', 'Yes. Larger or rigid packaging can increase carton volume and shipping cost.'],
  ['Can Pilates studios use branded sock packaging?', 'Yes. Paper bands, hang tags and small retail packaging work particularly well for studio grip socks and member merchandise.'],
  ['Can packaging be changed on repeat orders?', 'Usually yes, but changes to artwork, dimensions or materials may affect cost, MOQ and lead time.'],
] as const;

type PackagingVisual = { src: string; alt: string; caption: string };

const sectionImages: Record<string, PackagingVisual> = {
  '3. Paper Bands: A Practical Option for Startups': {
    src: `${packagingBase}/private-label-socks-packaging-cost-options-4.jpg`,
    alt: 'Private label socks with custom paper bands and printed packaging inserts',
    caption: 'Paper bands and printed inserts provide a practical branded route for startup and repeat orders.',
  },
  '4. Hang Tags: Flexible and Easy to Use': {
    src: `${packagingBase}/private-label-socks-packaging-cost-options-2.jpg`,
    alt: 'Custom socks displayed with hang tags, sleeves and retail packaging',
    caption: 'Hang tags and sleeves can carry size, barcode and brand information without a rigid box.',
  },
  '5. Polybags: Simple and Protective': {
    src: `${packagingBase}/private-label-socks-packaging-cost-options-3.jpg`,
    alt: 'Custom socks packed in clear polybags with branded labels',
    caption: 'Clear bags keep pairs clean and organized while branded labels provide product identification.',
  },
  '6. Custom Boxes: Better for Premium Positioning': {
    src: `${packagingBase}/private-label-socks-packaging-cost-options-1.jpg`,
    alt: 'Private label socks with bags, paper bands and retail box packaging options',
    caption: 'Retail boxes offer a stronger premium presentation but add cost, volume and packaging MOQ considerations.',
  },
};

function renderInline(text: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return tokens.map((token, index) => {
    if (token.startsWith('**') && token.endsWith('**')) return <strong key={`${token}-${index}`} className="font-black text-[#0c1713]">{token.slice(2, -2)}</strong>;
    if (token.startsWith('`') && token.endsWith('`')) return <code key={`${token}-${index}`} className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">{token.slice(1, -1)}</code>;
    return token;
  });
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function PackagingImage({ image }: { image: PackagingVisual }) {
  return (
    <figure className="my-8 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f8f6] shadow-[0_14px_34px_rgba(12,23,19,0.08)]">
      <div className="relative aspect-[4/3]">
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-contain p-3 md:p-5" />
      </div>
      <figcaption className="border-t border-slate-200 bg-white px-6 py-4 text-sm leading-relaxed text-slate-600">{image.caption}</figcaption>
    </figure>
  );
}

function renderArticle(markdown: string) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index += 1; continue; }
    if (line === '---') { nodes.push(<hr key={`hr-${index}`} className="my-12 border-slate-200" />); index += 1; continue; }

    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2];
      const id = slugify(title);
      if (level === 1) {
        nodes.push(<h2 id={id} key={`h2-${index}`} className="scroll-mt-28 pt-4 text-3xl font-black leading-tight text-[#0c1713] md:text-4xl">{renderInline(title)}</h2>);
        if (sectionImages[title]) nodes.push(<PackagingImage key={`image-${title}`} image={sectionImages[title]} />);
      } else if (level === 2) {
        nodes.push(<h3 id={id} key={`h3-${index}`} className="scroll-mt-28 pt-4 text-2xl font-black leading-tight text-[#0c1713]">{renderInline(title)}</h3>);
      } else {
        nodes.push(<h4 key={`h4-${index}`} className="pt-2 text-xl font-black text-[#0c1713]">{renderInline(title)}</h4>);
      }
      index += 1;
      continue;
    }

    if (/^[*-]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[*-]\s+/.test(lines[index].trim())) { items.push(lines[index].trim().replace(/^[*-]\s+/, '')); index += 1; }
      nodes.push(<ul key={`ul-${index}`} className="my-5 grid gap-2 pl-1 text-lg text-slate-600">{items.map((item) => <li key={item} className="flex gap-3"><span className="font-black text-[#679a20]">✓</span><span>{renderInline(item)}</span></li>)}</ul>);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) { items.push(lines[index].trim().replace(/^\d+\.\s+/, '')); index += 1; }
      nodes.push(<ol key={`ol-${index}`} className="my-5 grid list-decimal gap-2 pl-7 text-lg text-slate-600">{items.map((item) => <li key={item}>{renderInline(item)}</li>)}</ol>);
      continue;
    }

    if (line.startsWith('>')) { nodes.push(<blockquote key={`quote-${index}`} className="my-6 border-l-4 border-[#9fe326] bg-[#f4fbe8] px-6 py-5 text-xl font-bold text-[#23382f]">{renderInline(line.replace(/^>\s?/, ''))}</blockquote>); index += 1; continue; }

    if (line.startsWith('|') && index + 1 < lines.length && /^\|?\s*:?-+/.test(lines[index + 1].trim())) {
      const parseRow = (row: string) => row.replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
      const header = parseRow(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith('|')) { rows.push(parseRow(lines[index].trim())); index += 1; }
      nodes.push(<div key={`table-${index}`} className="my-7 overflow-x-auto rounded-2xl border border-slate-200"><table className="w-full min-w-[680px] border-collapse text-left text-sm"><thead className="bg-[#0c1713] text-white"><tr>{header.map((cell) => <th key={cell} className="px-4 py-3 font-black">{cell}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={`row-${rowIndex}`} className="border-t border-slate-200 odd:bg-white even:bg-[#f8f9f7]">{row.map((cell, cellIndex) => <td key={`${cellIndex}-${cell}`} className="px-4 py-3 text-slate-600">{renderInline(cell)}</td>)}</tr>)}</tbody></table></div>);
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (index < lines.length) {
      const next = lines[index].trim();
      if (!next || next === '---' || /^(#{1,3})\s+/.test(next) || /^[*-]\s+/.test(next) || /^\d+\.\s+/.test(next) || next.startsWith('>') || next.startsWith('|')) break;
      paragraphLines.push(next);
      index += 1;
    }
    nodes.push(<p key={`p-${index}`} className="text-lg leading-[1.8] text-slate-600">{renderInline(paragraphLines.join(' '))}</p>);
  }
  return nodes;
}

export default function PrivateLabelSocksPackagingGuidePage() {
  const source = readFileSync(path.join(process.cwd(), 'src/app/blog/private-label-socks-packaging-guide/article.md'), 'utf8');
  const start = source.indexOf('Packaging is not an afterthought');
  const end = source.indexOf('**Explore Private Label Socks Manufacturing');
  const articleBody = source.slice(start, end > start ? end : undefined).trim();
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', '@id': `${pageUrl}#article`, headline: 'Private Label Socks Packaging Guide: How to Choose the Right Packaging for Your Brand', description: metadata.description, image: heroImageUrl, datePublished: '2026-08-21', dateModified: '2026-08-21', author: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl }, publisher: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl }, mainEntityOfPage: pageUrl },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` }, { '@type': 'ListItem', position: 3, name: 'Private Label Socks Packaging Guide', item: pageUrl }] },
      { '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]" data-content-version="2026-08-21-private-label-socks-packaging-guide-v1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <section className="bg-[#fbfaf7] px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-bold text-slate-500"><Link href="/">Home</Link><span className="mx-2">/</span><Link href="/blog">Blog</Link><span className="mx-2">/</span><span>Private Label Socks Packaging Guide</span></nav>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Private label branding & retail guide</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.04] md:text-6xl">Private Label Socks Packaging Guide</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">Choose paper bands, hang tags, polybags, boxes, labels and retail-ready packaging around your brand, sales channel, MOQ, cost and shipping requirements.</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-slate-500"><span>20 min read</span><span aria-hidden="true">•</span><span>Published August 21, 2026</span></div>
          </div>
          <figure className="relative aspect-[5/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(12,23,19,0.09)]">
            <Image src={heroImagePath} alt="Private label sock packaging preparation with bands, bags and printed cards" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center" />
          </figure>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="min-w-0 space-y-6">{renderArticle(articleBody)}</article>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-[#0c1713] p-7 text-white shadow-[0_18px_45px_rgba(12,23,19,0.18)]">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Packaging brief checklist</p>
              <h2 className="mt-4 text-2xl font-black">Prepare packaging before bulk production.</h2>
              <ul className="mt-5 grid gap-3 text-sm text-slate-200">
                {['Sales channel', 'Packaging type and dimensions', 'Logo and brand colors', 'Size, SKU and barcode', 'Packaging MOQ and unit cost', 'Carton and freight impact'].map((item) => <li key={item} className="flex gap-3"><span className="text-[#b4ff2b]">✓</span><span>{item}</span></li>)}
              </ul>
              <Link href="/contact" className="mt-7 inline-flex rounded-xl bg-[#b4ff2b] px-5 py-3 text-sm font-black uppercase tracking-wide text-[#0c1713]">Request a packaging quote</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f4fbe8] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#679a20]">Related planning resources</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-5xl">Connect packaging decisions to product and production planning.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Link href="/private-label-sports-socks" className="rounded-2xl border border-[#c9e4a8] bg-white p-5 font-black transition hover:-translate-y-1">Private Label Socks Manufacturing <span aria-hidden="true">→</span></Link>
            <Link href="/blog/how-to-choose-private-label-socks-manufacturer" className="rounded-2xl border border-[#c9e4a8] bg-white p-5 font-black transition hover:-translate-y-1">Choose a Private Label Manufacturer <span aria-hidden="true">→</span></Link>
            <Link href="/blog/custom-socks-manufacturing-cost" className="rounded-2xl border border-[#c9e4a8] bg-white p-5 font-black transition hover:-translate-y-1">Custom Socks Cost Guide <span aria-hidden="true">→</span></Link>
            <Link href="/socks-manufacturing" className="rounded-2xl border border-[#c9e4a8] bg-white p-5 font-black transition hover:-translate-y-1">Manufacturing Process <span aria-hidden="true">→</span></Link>
            <Link href="/case-studies" className="rounded-2xl border border-[#c9e4a8] bg-white p-5 font-black transition hover:-translate-y-1">Customer Case Studies <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Private label project support</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">Need socks and packaging developed together?</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Send your product idea, sales channel, branding direction and target quantity. We will recommend a practical product and packaging route.</p>
          <Link href="/contact" className="mt-8 rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide text-[#0c1713]">Request a Private Label Socks Quote</Link>
        </div>
      </section>
    </main>
  );
}

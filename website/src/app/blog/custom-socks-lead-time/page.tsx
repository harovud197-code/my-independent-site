import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { ReactNode } from 'react';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/blog/custom-socks-lead-time`;
const imageBase = '/assets/blog/custom-socks-lead-time';
const heroImage = `${imageBase}/custom-socks-sampling-and-bulk-production.webp`;

export const metadata: Metadata = {
  title: 'Custom Socks Lead Time: Sampling to Bulk Production | PeakMotion',
  description:
    'How long do custom socks take to produce? Learn about sampling time, bulk production lead time, revisions, packaging, shipping and how to avoid delays.',
  alternates: { canonical: pageUrl },
  keywords: [
    'custom socks lead time',
    'custom sock production time',
    'custom sock sampling time',
    'bulk sock production time',
    'private label socks lead time',
    'how long does it take to make custom socks',
  ],
  openGraph: {
    title: 'Custom Socks Lead Time: From Sampling to Bulk Production',
    description:
      'Plan design confirmation, sampling, revisions, bulk production, quality control, packaging and shipping for a custom sock order.',
    url: pageUrl,
    type: 'article',
    publishedTime: '2026-09-04T00:00:00+08:00',
    modifiedTime: '2026-09-04T00:00:00+08:00',
    images: [
      {
        url: `${siteUrl}${heroImage}`,
        width: 1800,
        height: 1200,
        alt: 'Custom socks with private label packaging prepared for sample-to-bulk production planning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Socks Lead Time: Sampling to Bulk Production',
    description: 'A practical timeline for custom sock sampling, approval, bulk production, packing and shipping.',
    images: [`${siteUrl}${heroImage}`],
  },
};

type ArticleVisual = {
  src: string;
  alt: string;
  caption: string;
  ratio?: string;
  fit?: 'cover' | 'contain';
};

const sectionVisuals: Record<string, ArticleVisual[]> = {
  '2. Custom Sock Sampling: Usually 7–15 Days': [
    {
      src: `${imageBase}/custom-sock-sample-development-design-checking.webp`,
      alt: 'Custom sock sample compared with digital logo artwork during development',
      caption: 'The physical sample translates artwork, measurements, yarn and construction into a production-ready reference.',
      ratio: 'aspect-[3/2]',
    },
  ],
  '3. Sample Revisions Can Extend the Lead Time': [
    {
      src: `${imageBase}/first-custom-sock-sample.webp`,
      alt: 'First custom sock sample with logo before revisions',
      caption: 'First sample: review proportions, logo placement, sock height and construction.',
      ratio: 'aspect-[4/3]',
      fit: 'contain',
    },
    {
      src: `${imageBase}/revised-custom-sock-sample.webp`,
      alt: 'Revised custom sock sample after brand feedback',
      caption: 'Revised sample: confirm the approved details before bulk production begins.',
      ratio: 'aspect-[4/3]',
      fit: 'contain',
    },
  ],
  Knitting: [
    {
      src: `${imageBase}/custom-socks-bulk-knitting-line.webp`,
      alt: 'Long production line used for bulk custom sock knitting',
      caption: 'Machine allocation and the approved knitting program shape the production schedule.',
      ratio: 'aspect-[16/9]',
    },
    {
      src: `${imageBase}/custom-socks-knitting-machines.webp`,
      alt: 'Custom socks being knitted on computerized machines during bulk production',
      caption: 'Order quantity, construction and the factory schedule determine how much machine time is required.',
      ratio: 'aspect-[16/9]',
    },
  ],
  'Quality Inspection': [
    {
      src: `${imageBase}/custom-socks-quality-inspection.webp`,
      alt: 'Custom sock measured during quality inspection before packing',
      caption: 'Quality inspection checks finished measurements and approved product details before packing.',
      ratio: 'aspect-[3/2]',
      fit: 'contain',
    },
  ],
  Packing: [
    {
      src: `${imageBase}/private-label-socks-retail-packaging.webp`,
      alt: 'Private label custom socks being prepared with retail packaging',
      caption: 'Retail packaging, labels and packing instructions should be approved early enough to stay on schedule.',
      ratio: 'aspect-[4/3]',
    },
  ],
  '7. Does Shipping Count as Production Lead Time?': [
    {
      src: `${imageBase}/bulk-custom-sock-order-shipment.webp`,
      alt: 'Bulk custom sock order packed in cartons and ready for shipment',
      caption: 'Shipping time begins after production, inspection and packing are complete, so plan from the required arrival date.',
      ratio: 'aspect-[4/5]',
    },
  ],
};

const faqs = [
  ['How long does it take to make custom socks?', 'A custom sock project includes design confirmation, sampling, approval, bulk production, inspection, packing and shipping. PeakMotion generally plans 7–15 days for physical sampling and around 20–30 days for many bulk orders after approval.'],
  ['How long does custom sock sampling take?', 'Custom sock sampling normally takes around 7–15 days after artwork and the main specifications are confirmed. Construction, materials, logo, grip design and packaging can change the timeline.'],
  ['When does bulk production start?', 'Bulk production normally starts after the physical sample, colors, sizing, logo, construction, quantity and packaging requirements have been approved.'],
  ['Can custom sock production be rushed?', 'Sometimes the schedule can be optimized, but feasibility depends on the specification, yarn availability, quantity, packaging and current production capacity.'],
  ['What causes custom sock production delays?', 'Common causes include incomplete artwork, material changes, repeated sample revisions, late packaging decisions, unclear size breakdowns, special yarn sourcing and delayed approvals.'],
  ['Are repeat orders faster?', 'Repeat orders can be easier to schedule because the product specification already exists, but timing still depends on materials, quantity, packaging and factory capacity.'],
] as const;

const toc = [
  'Custom Socks Lead Time at a Glance',
  '1. Product Brief and Design Confirmation',
  '2. Custom Sock Sampling: Usually 7–15 Days',
  '3. Sample Revisions Can Extend the Lead Time',
  '4. Final Sample Approval Comes Before Bulk Production',
  '5. Bulk Custom Sock Production: Around 20–30 Days',
  '6. What Affects Custom Socks Lead Time?',
  '7. Does Shipping Count as Production Lead Time?',
  '8. How to Plan a Custom Sock Launch Without Delays',
  '9. How to Shorten Your Custom Socks Lead Time',
  '10. First Orders vs Repeat Orders',
  'Frequently Asked Questions',
] as const;

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return parts.map((part, index) => {
    const strong = /^\*\*(.+)\*\*$/.exec(part);
    if (strong) return <strong key={`${index}-${part}`} className="font-black text-[#07140f]">{strong[1]}</strong>;
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) return <Link key={`${index}-${part}`} href={link[2]} className="font-bold text-[#397500] underline decoration-[#8cff00] decoration-2 underline-offset-4">{link[1]}</Link>;
    return part;
  });
}

function ArticleImages({ images }: { images: ArticleVisual[] }) {
  return (
    <div className={`my-8 grid gap-5 ${images.length > 1 ? 'md:grid-cols-2' : ''}`}>
      {images.map((visual) => (
        <figure key={visual.src} className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_16px_46px_rgba(15,23,42,0.08)]">
          <div className={`relative w-full bg-[#f6f7f4] ${visual.ratio ?? 'aspect-[16/10]'}`}>
            <Image
              src={visual.src}
              alt={visual.alt}
              fill
              sizes={images.length > 1 ? '(max-width: 768px) 100vw, 430px' : '(max-width: 1024px) 100vw, 860px'}
              className={visual.fit === 'contain' ? 'object-contain' : 'object-cover object-center'}
            />
          </div>
          <figcaption className="border-t border-slate-100 px-5 py-3 text-sm leading-6 text-slate-500">{visual.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function renderArticle(markdown: string) {
  const lines = markdown.replace(/\r/g, '').split('\n');
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line || line.startsWith('# ')) { index += 1; continue; }
    if (line === '---') { nodes.push(<hr key={`hr-${index}`} className="my-12 border-slate-200" />); index += 1; continue; }

    const heading = /^(#{2,3})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2];
      const id = slugify(title);
      if (level === 2) {
        nodes.push(<h2 id={id} key={`h2-${index}`} className="scroll-mt-28 pt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-[#07140f] md:text-4xl">{renderInline(title)}</h2>);
      } else {
        nodes.push(<h3 id={id} key={`h3-${index}`} className="scroll-mt-28 pt-3 text-2xl font-black leading-tight text-[#07140f]">{renderInline(title)}</h3>);
      }
      if (sectionVisuals[title]) nodes.push(<ArticleImages key={`visual-${title}`} images={sectionVisuals[title]} />);
      index += 1;
      continue;
    }

    if (/^[*-]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[*-]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[*-]\s+/, ''));
        index += 1;
      }
      nodes.push(<ul key={`ul-${index}`} className="my-6 grid gap-2 pl-1 text-[1.02rem] leading-7 text-slate-700">{items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-[0.65rem] h-2 w-2 shrink-0 rounded-full bg-[#8cff00]" /><span>{renderInline(item)}</span></li>)}</ul>);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ''));
        index += 1;
      }
      nodes.push(<ol key={`ol-${index}`} className="my-6 grid list-decimal gap-2 pl-7 text-[1.02rem] leading-7 text-slate-700">{items.map((item) => <li key={item}>{renderInline(item)}</li>)}</ol>);
      continue;
    }

    if (line.startsWith('|') && index + 1 < lines.length && /^\|?\s*:?-+/.test(lines[index + 1].trim())) {
      const parseRow = (row: string) => row.replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
      const header = parseRow(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        rows.push(parseRow(lines[index].trim()));
        index += 1;
      }
      nodes.push(
        <div key={`table-${index}`} className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-[#102017] text-white"><tr>{header.map((cell) => <th key={cell} className="px-4 py-3 font-black">{cell}</th>)}</tr></thead>
            <tbody>{rows.map((row, rowIndex) => <tr key={`row-${rowIndex}`} className="border-t border-slate-200 odd:bg-white even:bg-[#f7f9f5]">{row.map((cell, cellIndex) => <td key={`${cellIndex}-${cell}`} className="px-4 py-3 text-slate-700">{renderInline(cell)}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (index < lines.length) {
      const next = lines[index].trim();
      if (!next || next === '---' || /^#{2,3}\s+/.test(next) || /^[*-]\s+/.test(next) || /^\d+\.\s+/.test(next) || next.startsWith('|')) break;
      paragraphLines.push(next);
      index += 1;
    }
    const paragraph = paragraphLines.join(' ');
    const isTimeline = paragraph.includes('↓');
    nodes.push(<p key={`p-${index}`} className={isTimeline ? 'my-7 rounded-3xl bg-[#102017] px-6 py-7 text-center text-lg font-bold leading-9 text-white [&_strong]:text-white' : 'text-[1.04rem] leading-8 text-slate-700'}>{renderInline(paragraph)}</p>);
  }
  return nodes;
}

export default function CustomSocksLeadTimePage() {
  const source = readFileSync(path.join(process.cwd(), 'src/app/blog/custom-socks-lead-time/article.md'), 'utf8');
  const bodyStart = source.indexOf('If you are planning');
  const articleBody = source.slice(bodyStart).trim();
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#article`,
        headline: 'Custom Socks Lead Time: From Sampling to Bulk Production',
        description: metadata.description,
        image: `${siteUrl}${heroImage}`,
        datePublished: '2026-09-04',
        dateModified: '2026-09-04',
        mainEntityOfPage: pageUrl,
        author: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
        publisher: { '@type': 'Organization', name: 'PeakMotion Socks', url: siteUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: 'Custom Socks Lead Time', item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
      },
    ],
  };

  return (
    <main className="bg-[#f8faf7] text-[#07140f]" data-content-version="2026-09-04-custom-socks-lead-time-v1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:px-10 lg:py-16">
          <div>
            <nav aria-label="Breadcrumb" className="mb-7 text-sm font-semibold text-slate-500">
              <Link href="/" className="hover:text-[#4f9300]">Home</Link><span className="px-2">/</span><Link href="/blog" className="hover:text-[#4f9300]">Blog</Link><span className="px-2">/</span><span>Lead Time Guide</span>
            </nav>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-[#4f9300]">Sampling &amp; Production Planning</p>
            <h1 className="text-4xl font-black leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-[4rem]">Custom Socks Lead Time: From Sampling to Bulk Production</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Plan artwork approval, 7–15 day sampling, revisions, bulk production, quality control, packaging and shipping around a realistic delivery schedule.</p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-slate-500"><span>17 min read</span><span>Published September 4, 2026</span></div>
          </div>
          <figure className="overflow-hidden rounded-[2rem] border border-[#cbd9c7] bg-white shadow-[0_30px_85px_rgba(31,61,42,0.18)]">
            <div className="relative aspect-[3/2] w-full"><Image src={heroImage} alt="Custom socks with private label packaging prepared for sample-to-bulk production planning" fill priority sizes="(max-width: 1024px) 100vw, 52vw" className="object-contain object-center" /></div>
            <figcaption className="border-t border-slate-100 px-5 py-3 text-sm leading-6 text-slate-500">Product, sample and packaging decisions should be planned before bulk manufacturing.</figcaption>
          </figure>
        </div>
      </header>

      <section className="px-6 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_19rem]">
          <article className="min-w-0 space-y-6">{renderArticle(articleBody)}</article>
          <aside className="order-first lg:order-last lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#4f9300]">In this guide</p>
              <ol className="mt-5 grid gap-3 text-sm leading-5 text-slate-600">{toc.map((item) => <li key={item}><a href={`#${slugify(item)}`} className="transition hover:text-[#397500]">{item}</a></li>)}</ol>
              <Link href="/contact" className="mt-7 inline-flex w-full justify-center rounded-xl bg-[#8cff00] px-5 py-3 text-sm font-black uppercase tracking-wide text-[#07140f] transition hover:bg-[#a5ff3f]">Request a Production Plan</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#102017] px-6 py-16 text-white lg:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a5ff3f]">Plan sampling, production and delivery together</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] md:text-5xl">Need a realistic custom sock production schedule?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">Share your sock category, artwork, quantity, size range, packaging and required arrival date. PeakMotion can recommend a practical development and bulk-production route.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-[#8cff00] px-7 py-4 font-black uppercase tracking-wide text-[#07140f]">Request a Custom Production Plan</Link>
            <Link href="/socks-manufacturing" className="rounded-full border border-white/35 px-7 py-4 font-black uppercase tracking-wide text-white">View Manufacturing Process</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

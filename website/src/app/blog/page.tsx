import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const siteUrl = 'https://peakmotionsocks.com';
const blogHeroPath = '/assets/blog/blog-hero-soccer-grip.jpg';
const blogHeroUrl = `${siteUrl}${blogHeroPath}`;
const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20a%20quote%20for%20custom%20socks.';

const posts = [
  {
    title: 'Private Label Socks Packaging Guide',
    href: '/blog/private-label-socks-packaging-guide',
    desc: 'Compare paper bands, hang tags, bags, boxes, labels, barcodes, MOQ, cost and freight before approving retail sock packaging.',
    img: '/assets/blog/custom-socks-manufacturing-cost/private-label-socks-packaging-cost-options-1.jpg',
    imageClassName: 'object-contain bg-white',
    category: 'Packaging & Private Label',
    readTime: '20 min read',
  },
  {
    title: 'Custom Sock Sample Cost: What Brands Should Expect Before Bulk Production',
    href: '/blog/custom-sock-sample-cost',
    desc: 'Understand sample fees, revisions, shipping, timelines and approval checks before moving a custom sock design into bulk production.',
    img: '/assets/blog/custom-sock-sample-cost/custom-sock-sample-cost-before-bulk-production.jpg',
    imageClassName: 'object-cover object-center',
    category: 'Sampling & Pricing',
    readTime: '20 min read',
  },
  {
    title: 'How to Choose a Football Socks Manufacturer',
    href: '/blog/how-to-choose-football-socks-manufacturer',
    desc: 'Compare club logo capability, team colors, compression, sock length, sizing, MOQ, quality control and seasonal reorder support.',
    img: '/assets/blog/how-to-choose-football-socks-manufacturer/custom-football-socks-club-logo-team-colors.jpg',
    imageClassName: 'object-cover object-center',
    category: 'Football & Teamwear',
    readTime: '18 min read',
  },
  {
    title: 'Custom Grip Socks for Pilates Studios: Complete Buying Guide',
    href: '/blog/custom-grip-socks-pilates-studios-buying-guide',
    desc: 'Plan custom grip socks for studio retail, welcome packs, member merchandise, branding, margin and repeat orders.',
    img: '/assets/blog/custom-grip-socks-pilates-studios-buying-guide/pilates-studio-green-grip-socks.jpg',
    imageClassName: 'object-cover object-center',
    category: 'Pilates & Wellness',
    readTime: '18 min read',
  },
  {
    title: 'How Much Does It Cost to Manufacture Custom Socks?',
    href: '/blog/custom-socks-manufacturing-cost',
    desc: 'Understand how MOQ, yarn, logos, grip, packaging, samples and freight shape the real cost of a custom sock project.',
    img: '/assets/blog/custom-socks-manufacturing-cost-card.png',
    imageClassName: 'object-cover object-center',
    category: 'MOQ & Pricing',
    readTime: '10 min read',
  },
  {
    title: 'How to Choose a Pilates Grip Socks Supplier',
    href: '/blog/how-to-choose-pilates-grip-socks-supplier',
    desc: 'Compare grip material, sole coverage, fabric, toe construction, branding, MOQ, packaging, QC and repeat-order capability.',
    img: '/assets/blog/how-to-choose-pilates-grip-socks-supplier/pilates-grip-socks-supplier-card.jpg',
    imageClassName: 'object-cover object-bottom',
    category: 'Pilates & Wellness',
    readTime: '14 min read',
  },
  {
    title: 'How to Choose a Private Label Socks Manufacturer: 8 Factors to Compare',
    href: '/blog/how-to-choose-private-label-socks-manufacturer',
    desc: 'Compare MOQ, sampling, materials, customization, quality control, packaging, communication and scalability before choosing an OEM sock partner.',
    img: '/assets/blog/private-label-manufacturer-grip-socks.webp',
    imageClassName: 'object-contain',
    category: 'Private Label',
    readTime: '12 min read',
  },
  {
    title: 'How Much Do Custom Grip Socks Cost? A Complete Pricing Guide',
    href: '/blog/how-much-do-custom-grip-socks-cost',
    desc: 'Plan a custom grip sock project with practical guidance on price ranges, MOQ, materials, silicone grip design and packaging.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog/custom-grip-socks-cost/grip-display-reference.png',
    category: 'MOQ & Pricing',
    readTime: '6 min read',
  },
  {
    title: 'Custom Socks MOQ Explained: Choose the Right Starting Quantity',
    href: '/blog/custom-socks-moq-explained',
    desc: 'Learn what affects custom socks MOQ, compare practical order routes and prepare a clearer first production brief.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog/custom-socks-moq/custom-socks-moq-explained.png',
    category: 'MOQ & Pricing',
    readTime: '5 min read',
  },
  {
    title: 'Custom Running Socks OEM Guide: From Brief to Bulk Production',
    href: '/blog/custom-running-socks-oem-guide',
    desc: 'Prepare a clearer running sock brief with practical guidance on materials, MOQ, samples, packaging and production timing.',
    img: '/assets/products/professional-running-athletic-socks/hero-landing-light.webp',
    category: 'Running OEM',
    readTime: '8 min read',
  },
  {
    title: 'How to Start a Private Label Running Socks Brand',
    href: '/blog/private-label-running-socks-brand-guide',
    desc: 'Plan a focused running sock collection with a clear audience, product story, artwork, packaging and launch brief.',
    img: '/assets/blog/private-label-running-socks-card.webp',
    imageClassName: 'object-cover object-[center_40%]',
    category: 'Private Label',
    readTime: '7 min read',
  },
  {
    title: 'What Are Grip Socks? Benefits, Uses and Buying Guide',
    href: '/blog/what-are-grip-socks',
    desc: 'Learn how grip socks improve stability, performance and comfort across football, Pilates and daily training.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-what-are-grip-socks-wide.jpg',
    category: 'Grip Socks',
    readTime: '7 min read',
  },
  {
    title: 'Custom Sports Socks Manufacturer: Complete OEM Guide',
    href: '/blog/custom-sports-socks-manufacturer-guide',
    desc: 'Understand OEM production, customization choices, sampling and quality control before placing an order.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-oem-guide.jpg',
    category: 'OEM Manufacturing',
    readTime: '5 min read',
  },
  {
    title: 'How to Start a Custom Socks Brand',
    href: '/blog/how-to-start-a-custom-socks-brand',
    desc: 'A practical roadmap for turning a product idea into a private-label sports sock collection.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-how-to-start-brand-card.jpg?v=2',
    category: 'Brand Building',
    readTime: '7 min read',
  },
  {
    title: "Football Socks vs Grip Socks: What's the Difference?",
    href: '/blog/football-socks-vs-grip-socks',
    desc: 'Compare fit, construction and grip performance to choose the right sock for your team.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-football-vs-grip.jpg',
    category: 'Football Socks',
    readTime: '4 min read',
  },
  {
    title: 'Best Materials for Sports Socks',
    href: '/blog/best-materials-for-sports-socks',
    desc: 'Compare cotton, polyester, nylon and performance blends for comfort, durability and moisture control.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-best-materials-card.jpg?v=2',
    category: 'Materials',
    readTime: '6 min read',
  },
  {
    title: 'How Sports Socks Are Manufactured',
    href: '/blog/how-sports-socks-are-manufactured',
    desc: 'Follow the production process from yarn selection and knitting to inspection and packaging.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-manufacturing-process-card.jpg?v=2',
    category: 'Manufacturing',
    readTime: '5 min read',
  },
  {
    title: 'How to Choose Running Socks for Performance',
    href: '/blog/how-to-choose-running-socks',
    desc: 'Choose the right cushioning, fabric and fit for road running, trails and everyday training.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-how-to-choose-running-socks-collection.jpg?v=2',
    category: 'Running Socks',
    readTime: '4 min read',
  },
  {
    title: 'Cycling Socks vs Running Socks: Key Differences',
    href: '/blog/cycling-socks-vs-running-socks',
    desc: 'See how height, ventilation, compression and padding differ between cycling and running socks.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-cycling-vs-running-card-final.jpg?v=2',
    category: 'Buying Guides',
    readTime: '4 min read',
  },
  {
    title: 'Private Label Socks: Everything You Need to Know',
    href: '/blog/private-label-socks-guide',
    desc: 'Plan branding, manufacturing, packaging and distribution for a private-label sock collection.',
    img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-private-label-socks-card.jpg?v=1',
    category: 'Private Label',
    readTime: '5 min read',
  },
  {
    title: 'Sports Socks MOQ Guide for New Brands',
    href: '/blog/sports-socks-moq-guide',
    desc: 'Learn how order quantity affects sampling, unit pricing, color choices and production planning.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200',
    category: 'MOQ & Pricing',
    readTime: '4 min read',
  },
];

const topics = [
  ['Grip Socks', '/custom-grip-socks'],
  ['Football Socks', '/products/mid-calf-football-grip'],
  ['Running Socks', '/custom-running-socks-manufacturer'],
  ['Basketball Socks', '/products/performance-basketball-socks'],
  ['Cycling Socks', '/blog/cycling-socks-vs-running-socks'],
  ['Pilates Socks', '/products/low-cut-yoga-pilates-grip-socks'],
  ['Custom Socks', '/products/custom-logo-embroidery-socks'],
  ['OEM Manufacturing', '/blog/custom-sports-socks-manufacturer-guide'],
  ['Private Label', '/blog/private-label-socks-guide'],
  ['Materials', '/blog/best-materials-for-sports-socks'],
  ['Buying Guides', '/blog/sports-socks-moq-guide'],
] as const;

const faqs = [
  {
    question: 'What topics does the PeakMotion blog cover?',
    answer: 'We cover sports socks, OEM manufacturing, private label services, materials, packaging and practical sourcing guidance.',
  },
  {
    question: 'Are these articles useful for sports brands?',
    answer: 'Yes. The guides are written for sports brands, retailers, distributors and teams sourcing custom socks.',
  },
  {
    question: 'Can PeakMotion manufacture the products featured in the guides?',
    answer: 'Yes. PeakMotion provides product development, sampling, OEM manufacturing, private label and custom packaging support.',
  },
];

export const metadata: Metadata = {
  title: 'Sports Socks Blog & OEM Guides | PeakMotion',
  description: 'Practical sports sock guides covering materials, grip technology, OEM manufacturing, private label, MOQ and product sourcing for global brands.',
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: 'Sports Socks Blog & OEM Guides | PeakMotion',
    description: 'Practical sports sock manufacturing, sourcing and product guides for brands, teams and retailers.',
    url: `${siteUrl}/blog`,
    siteName: 'PeakMotion Socks',
    type: 'website',
    images: [
      {
        url: blogHeroUrl,
        width: 1200,
        height: 630,
        alt: 'PeakMotion sports socks manufacturing guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sports Socks Blog & OEM Guides | PeakMotion',
    description: 'Sports sock manufacturing, sourcing and product guides for brands, teams and retailers.',
    images: [blogHeroUrl],
  },
};

export default function BlogPage() {
  const featured = posts[0];
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${siteUrl}/blog#blog`,
        name: 'PeakMotion Sports Socks Blog',
        url: `${siteUrl}/blog`,
        description: metadata.description,
        publisher: {
          '@type': 'Organization',
          name: 'PeakMotion Socks',
          url: siteUrl,
        },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: `${siteUrl}${post.href}`,
          image: post.img,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="bg-white text-[#0c1713]" data-content-version="2026-08-21-blog-private-label-packaging-cover-v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />

      <section className="relative min-h-[560px] overflow-hidden bg-[#07120c] px-5 py-20 text-white md:px-8 md:py-28">
        <Image src={blogHeroPath} alt="Football player wearing performance grip socks" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex min-h-[390px] max-w-7xl items-end">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b4ff2b]">PeakMotion Knowledge Center</p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">Sports Socks Blog & Manufacturing Guides</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">Practical product, sourcing and OEM knowledge for sports brands, retailers, distributors and teams.</p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <Link href="/custom-grip-socks" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide !text-[#0c1713] transition-colors hover:bg-[#a3e627]">Explore Custom Grip Socks</Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-black/20 px-7 py-4 font-black uppercase tracking-wide !text-white backdrop-blur-sm transition-colors hover:bg-white hover:!text-black">Ask About OEM</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1510px] overflow-hidden rounded-[24px] bg-white shadow-[0_14px_34px_rgba(12,23,19,0.12)] lg:grid-cols-[1fr_1fr]">
        <Link href={featured.href} className="relative block aspect-[4/3] overflow-hidden bg-[#f7f8f6]">
          <Image src={featured.img} alt={featured.title} fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-contain transition-transform duration-500 hover:scale-[1.02]" />
        </Link>
        <div className="flex flex-col justify-center space-y-5 px-7 py-9 md:px-12 md:py-12 lg:px-13 lg:py-14">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
            <span className="rounded-full bg-[#e9f8d2] px-3 py-2 text-[#387116]">Featured Guide</span>
            <span className="text-slate-500">{featured.readTime}</span>
          </div>
          <h2 className="text-3xl font-black leading-[1.08] md:text-5xl xl:text-[3.55rem]">{featured.title}</h2>
          <p className="text-lg leading-relaxed text-slate-600">{featured.desc}</p>
          <Link href={featured.href} className="inline-flex items-center gap-2 border-b-2 border-[#b4ff2b] pb-1 font-black uppercase tracking-wide text-[#0c1713]">Read the guide <span aria-hidden="true">&rarr;</span></Link>
        </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Latest Insights</p><h2 className="mt-2 text-3xl font-black md:text-4xl">Guides for Better Product Decisions</h2></div>
            <p className="max-w-md text-slate-600">Clear answers on materials, manufacturing, performance and private-label sourcing.</p>
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
              <article key={post.href} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_4px_18px_rgba(12,23,19,0.04)] transition-all hover:-translate-y-1 hover:shadow-lg">
                <Link href={post.href} className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image src={post.img} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={`${post.imageClassName ?? 'object-cover'} transition-transform duration-500 hover:scale-105`} />
                </Link>
                <div className="flex min-h-[270px] flex-col p-6">
                  <div className="mb-4 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider"><span className="text-[#4e7e1e]">{post.category}</span><span className="text-slate-400">{post.readTime}</span></div>
                  <h3 className="text-xl font-black leading-snug"><Link href={post.href} className="transition-colors hover:text-[#679a20]">{post.title}</Link></h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.desc}</p>
                  <Link href={post.href} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black uppercase tracking-wide text-[#0c1713]">Read article <span className="text-[#679a20]" aria-hidden="true">&rarr;</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-black md:text-3xl">Explore Topics</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {topics.map(([label, href]) => <Link key={label} href={href} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold transition-colors hover:border-[#b4ff2b] hover:bg-[#b4ff2b]">{label}</Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#b4ff2b]">From Guide to Product</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Explore Socks You Can Customize</h2><p className="mt-4 text-lg leading-relaxed text-gray-300">Compare real product options, then discuss colors, logos, materials, MOQ and packaging with our factory team.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row"><Link href="/custom-grip-socks" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-7 py-4 font-black uppercase tracking-wide !text-[#0c1713] hover:bg-[#a3e627]">Custom Grip Socks</Link><Link href="/products" className="inline-flex items-center justify-center rounded-xl border border-white px-7 py-4 font-black uppercase tracking-wide !text-white hover:bg-white hover:!text-black">Browse Products</Link></div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Factory Knowledge</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Why Brands Trust PeakMotion Insights</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Our guides translate production-floor experience into practical decisions about yarn, knitting, grip, sizing, branding and packaging.</p></div>
          <div className="grid gap-6 sm:grid-cols-3">{[['Factory Expertise', 'Technical guidance grounded in real sock development and production.'], ['OEM Focus', 'Advice for brands planning samples, MOQ, logos and packaging.'], ['Product Ready', 'Every guide connects learning with practical sourcing options.']].map(([title, text]) => <div key={title} className="border-t-4 border-[#b4ff2b] pt-5"><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></div>)}</div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#f7f8f6] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-4xl"><div className="text-center"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">FAQ</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Common Questions</h2></div><div className="mt-10 space-y-4">{faqs.map((faq) => <details key={faq.question} className="group rounded-lg border border-slate-200 bg-white"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{faq.question}</span><span aria-hidden="true" className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary><p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{faq.answer}</p></details>)}</div></div>
      </section>

      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex items-center rounded-full bg-[#b4ff2b] px-5 py-3.5 text-sm font-black !text-[#0c1713] shadow-xl transition-transform hover:scale-105">Get a Free Quote</a>
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PrivateLabelQuoteForm from '@/components/PrivateLabelQuoteForm';
import UKFootballCaseStudyCard from '@/components/UKFootballCaseStudyCard';

const siteUrl = 'https://peakmotionsocks.com';
const pageUrl = `${siteUrl}/private-label-sports-socks`;
const assetBase = 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/private-label-sports-socks';
const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20to%20develop%20private%20label%20sports%20socks.';

export const metadata: Metadata = {
  title: 'Private Label Sports Socks Manufacturer | Start Your Sock Brand | PeakMotion',
  description: 'Launch a custom sports sock collection with private label branding, selected standard styles from 50 pairs, sample planning and retail-ready packaging support.',
  alternates: { canonical: pageUrl },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Private Label Sports Socks Manufacturer | PeakMotion',
    description: 'Private label sports socks for startups, ecommerce brands and retailers. Start with a practical low-MOQ route, then scale with confidence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Label Sports Socks Manufacturer | PeakMotion',
    description: 'Launch custom sports socks with branding, sampling and packaging support.',
  },
};

const productLinks = [
  ['Running Socks', 'Lightweight performance styles for running brands and events.', '/custom-running-socks-manufacturer'],
  ['Grip Socks', 'Studio-ready socks for Pilates, yoga and fitness concepts.', '/yoga-pilates-grip-socks-supplier'],
  ['Football Socks', 'Club, academy and team options with logo-led details.', '/football-socks-manufacturer'],
  ['Training Socks', 'Cushioned sports socks for training and retail collections.', '/custom-basketball-training-socks'],
] as const;

const faqs = [
  ['What is the MOQ for private label sports socks?', 'Selected standard styles can start from 50 pairs. A logo-led standard program is often 100 to 300 pairs, while bespoke construction or custom packaging usually needs a higher quantity.'],
  ['Can you help me if I only have a brand idea?', 'Yes. Send your target customer, reference products, logo if available, preferred colors and launch goal. We will help you turn that into a practical sock brief.'],
  ['Can I approve a sample before production?', 'Yes. Sampling is used to confirm the key design, color, fit, logo method and construction details before bulk production is arranged.'],
  ['What can I customize?', 'You can discuss sock height, yarn colors, jacquard logo details, cushioning, grip, labels, hang tags, bags, boxes and retail-ready packaging.'],
  ['Which sports sock styles can I private label?', 'Popular routes include running socks, grip socks, football socks, basketball and training socks, plus other custom performance styles.'],
  ['How should I prepare for a quotation?', 'Tell us your product type, country or target market, estimated quantity, logo or design direction and packaging needs. We will recommend the suitable MOQ route and next step.'],
] as const;

function Visual({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_55px_rgba(12,23,19,0.09)]">
      <Image src={`${assetBase}/${src}`} alt={alt} width={1600} height={900} priority={priority} className="h-auto w-full" sizes="(max-width: 1280px) 100vw, 1200px" />
    </figure>
  );
}

export default function PrivateLabelSportsSocksPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Private Label Sports Socks Manufacturer | PeakMotion',
        description: metadata.description,
        about: ['Private label sports socks', 'Custom sports socks', 'OEM sock manufacturing'],
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Private Label Sports Socks', item: pageUrl },
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

      <section className="overflow-hidden bg-[#f7f8f6] px-5 py-14 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <div className="max-w-xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Private label sports socks manufacturer</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.04] md:text-6xl">Start your own sock brand with a practical first order.</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">Launch a branded running, football, training or grip sock collection with low-risk order routes, clear sample planning and factory-direct production support.</p>
            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-black text-slate-700 sm:grid-cols-4">
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-3">From 50 pairs*</span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-3">Sample planning</span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-3">Brand packaging</span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-3">Factory direct</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#quote" className="inline-flex items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Create my sock brand</a>
              <a href="#process" className="inline-flex items-center justify-center rounded-xl border border-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide transition-colors hover:bg-[#0c1713] hover:text-white">See how it works</a>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">*Selected standard style. Your final MOQ depends on design, materials, logo method and packaging.</p>
          </div>
          <Visual src="hero-private-label-socks-v2.png" alt="Private label performance socks with custom packaging for a new sports sock brand" priority />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-7 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 text-center sm:grid-cols-4">
          <div><strong className="block text-lg font-black">Your logo</strong><span className="text-sm text-slate-600">on every pair</span></div>
          <div><strong className="block text-lg font-black">Your colors</strong><span className="text-sm text-slate-600">in the knit design</span></div>
          <div><strong className="block text-lg font-black">Your packaging</strong><span className="text-sm text-slate-600">ready for launch</span></div>
          <div><strong className="block text-lg font-black">Your next step</strong><span className="text-sm text-slate-600">planned with clarity</span></div>
        </div>
      </section>

      <section id="moq" className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Visual src="test-market-50-pairs.png" alt="A four-step plan to test a new sports sock brand with a 50-pair selected-standard-style order" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Low MOQ, lower launch risk</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Test the market before you commit to scale.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">A small, selected-standard-style launch gives new brands a more practical way to validate design direction, packaging and customer demand before increasing the order quantity.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex gap-3"><span className="font-black text-[#679a20]">01</span> Start from 50 pairs on selected standard styles.</li>
              <li className="flex gap-3"><span className="font-black text-[#679a20]">02</span> Use customer feedback to refine colors, fit or packaging.</li>
              <li className="flex gap-3"><span className="font-black text-[#679a20]">03</span> Move to a larger production route when the concept is proven.</li>
            </ul>
            <a href="#quote" className="mt-8 inline-flex rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Request an MOQ recommendation</a>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">A clear launch path</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">From your first idea to your first collection.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">We turn your product brief into a practical sequence: choose the right style, define the branding, review a sample and prepare the collection for launch.</p>
          </div>
          <Visual src="how-to-start-sock-brand.png" alt="Private label sock launch process from product style and branding to samples and collection launch" />
        </div>
      </section>

      <section id="products" className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Visual src="sports-sock-types.png" alt="Private label running, grip, football and compression sports sock product options" />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Choose the product line that fits your market</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">Build a focused collection, not a generic catalogue.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Start with one strong product type, or plan a small collection around the customer group you want to serve. Each route connects to the product details buyers need before requesting a quote.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {productLinks.map(([title, description, href]) => (
                <Link key={title} href={href} className="group rounded-xl border border-slate-200 bg-[#f7f8f6] p-5 transition hover:border-[#b4ff2b] hover:bg-white hover:shadow-md">
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                  <span className="mt-4 inline-flex text-xs font-black uppercase tracking-wide text-[#4d7914]">View product page</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Brand-ready details</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Make each pair recognisably yours.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">We can plan the details that carry your brand through the product experience: logo placement, yarn colors, labels, hang tags and packaging.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 md:grid-cols-4">
            {[
              ['01', 'Product direction', 'Sock height, construction, cushioning and the intended use.'],
              ['02', 'Logo and colors', 'Jacquard branding, color placement and practical logo methods.'],
              ['03', 'Labels and packaging', 'Bags, sleeves, hang tags, boxes and barcode-ready details.'],
              ['04', 'Sample review', 'Check fit, color, brand details and presentation before production.'],
            ].map(([number, title, text]) => (
              <article key={number} className="bg-[#0c1713] p-7">
                <p className="text-sm font-black tracking-[0.16em] text-[#b4ff2b]">{number}</p>
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.93fr_1.07fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Packaging that supports your positioning</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">From a simple test order to a retail-ready product.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Packaging can be aligned with the stage of your project. Start with a practical route, then add presentation and retail details as the collection develops.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-[#f7f8f6] p-4"><h3 className="font-black">Basic</h3><p className="mt-2 text-sm text-slate-600">Clean, cost-conscious packing for testing.</p></div>
              <div className="rounded-xl bg-[#f7f8f6] p-4"><h3 className="font-black">Brand package</h3><p className="mt-2 text-sm text-slate-600">Hang tags and branded presentation.</p></div>
              <div className="rounded-xl bg-[#f7f8f6] p-4"><h3 className="font-black">Retail package</h3><p className="mt-2 text-sm text-slate-600">Box, labels and barcode-ready options.</p></div>
            </div>
            <a href="#quote" className="mt-8 inline-flex rounded-xl border border-[#0c1713] px-6 py-4 text-sm font-black uppercase tracking-wide transition-colors hover:bg-[#0c1713] hover:text-white">Discuss packaging options</a>
          </div>
          <Visual src="packaging-options.png" alt="Examples of basic, brand and retail packaging options for private label sports socks" />
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Built for growing brands</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Three common ways brands start.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Whether you serve a fitness niche, sell online or build community merchandise, the product route should match the first market you want to validate.</p>
          </div>
          <Visual src="startup-brand-case-studies.png" alt="Illustrated private label sock launch examples for fitness, online sports and community merchandise brands" />
        </div>
      </section>

      <section id="faq" className="bg-white px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#679a20]">Frequently asked questions</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Questions from new sports sock brands.</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-xl border border-slate-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-black"><span>{question}</span><span className="text-2xl text-[#679a20] transition-transform group-open:rotate-45">+</span></summary>
                <p className="border-t border-slate-100 px-6 py-5 leading-relaxed text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="bg-[#0c1713] px-5 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b4ff2b]">Start your next collection</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">Ready to turn your sock idea into a launch plan?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Tell us your product type, target market, quantity, logo and packaging needs. We will recommend a practical MOQ route and next step for sampling.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-xl border border-white/30 px-6 py-4 text-sm font-black uppercase tracking-wide transition-colors hover:bg-white hover:text-[#0c1713]">Chat on WhatsApp</a>
          </div>
          <PrivateLabelQuoteForm />
        </div>
      </section>

      <UKFootballCaseStudyCard placement="private_label_page_bottom" />
    </main>
  );
}


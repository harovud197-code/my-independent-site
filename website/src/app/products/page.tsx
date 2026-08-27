'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  const [filter, setFilter] = useState('all');

  // Verified Basketball Socks image update to three-color version
  const products = [
    {
      id: 1,
      category: 'grip',
      title: 'Crew Soccer Grip Sports Socks',
      desc: 'Silicone non-slip sole, breathable rib cuff, seamless toe',
      moq: 'From 50 pairs — selected standard styles',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/products-crew-grip-three-colors.jpg?v=1'
    },
    {
      id: 2,
      category: 'pilates',
      title: 'Low Cut Yoga Pilates Grip Socks',
      desc: 'Soft cotton blend, full bottom silicone anti-slip',
      moq: 'From 50 pairs — selected standard styles',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/products-pilates-low-cut-straps-final.jpg?v=1'
    },
    {
      id: 3,
      category: 'sports',
      title: 'Professional Running Athletic Socks',
      desc: 'Quick dry, odor resistant, padded heel & toe',
      moq: 'From 50 pairs — selected standard styles',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/products-running-long-three-colors-final.jpg?v=1'
    },
    {
      id: 4,
      category: 'custom',
      title: 'Custom Logo Embroidery Socks',
      desc: 'OEM private label, custom color & packaging support',
      moq: 'From 50 pairs — selected standard styles',
      img: 'https://sc04.alicdn.com/kf/Hf0227ce04baa4ceeb08555037101cb53W.jpg'
    },
    {
        id: 5,
        category: 'grip',
        title: 'Mid-calf Football Grip Socks',
        desc: 'Advanced grip pattern for maximum stability on turf',
        moq: 'From 50 pairs — selected standard styles',
        img: 'https://sc04.alicdn.com/kf/H6851024185f84be4a0d863d8332f7f60h.jpg'
    },
    {
        id: 6,
        category: 'sports',
        title: 'Performance Basketball Socks',
        desc: 'High-impact cushioning with secure ankle support',
        moq: 'From 50 pairs — selected standard styles',
        img: 'https://sc04.alicdn.com/kf/He5e136ac5cd3410a9851bb16916b6f9cG.jpg'
    },
    {
        id: 7,
        category: 'pilates',
        title: 'Open Top Pilates Studio Socks',
        desc: 'Breathable upper with non-toxic silicone grips',
        moq: 'From 50 pairs — selected standard styles',
        img: 'https://sc04.alicdn.com/kf/H22c08373a4d84baa8f3e4441ae797ec0F.jpg'
    },
    {
        id: 8,
        category: 'custom',
        title: 'Luxury Combed Cotton Casual Socks',
        desc: 'Premium soft handfeel with reinforced heel and toe',
        moq: 'From 50 pairs — selected standard styles',
        img: 'https://sc04.alicdn.com/kf/H805aef31a3cf4a18aaddcda39f77d2c41.jpg'
    },
    {
      id: 9,
      title: "Soccer Sports Socks",
      category: "sports",
      moq: 'From 50 pairs — selected standard styles',
      desc: "Professional-grade football socks with zoned cushioning, dynamic arch support, and moisture-wicking technology for peak performance on the field.",
      img: "https://sc04.alicdn.com/kf/H02660559be2c468ba4a57f26945c2efbx.jpg"
    },
    {
      id: 10,
      title: "Jacquard Custom Socks",
      category: "custom",
      moq: 'From 50 pairs — selected standard styles',
      desc: "Premium jacquard knit socks featuring complex patterns and vibrant colors. Durable, breathable, and perfect for brand merchandising or unique gift sets.",
      img: "https://sc04.alicdn.com/kf/H8e9f793275a54dceae8e1e3822289034Q.jpg"
    },
    {
      id: 11,
      title: 'Trampoline Park Grip Socks',
      category: 'grip',
      moq: 'Typically from 100 pairs — custom logo programs',
      desc: 'Durable anti-slip grip socks for trampoline parks, indoor playgrounds and family entertainment centers.',
      img: '/assets/images/homepage-hero-peakmotion-grip-sock.png',
      tags: ['Custom Logo', 'Kids & Adult Sizes', 'Color Coding', 'Bulk Supply', 'Repeat Orders'],
      cta: 'View Trampoline Park Socks',
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'grip', label: 'Grip Socks' },
    { id: 'sports', label: 'Sports Socks' },
    { id: 'pilates', label: 'Pilates Socks' },
    { id: 'custom', label: 'Custom Socks' },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  const productDetailUrls: Record<number, string> = {
    1: '/products/crew-soccer-grip',
    2: '/products/low-cut-yoga-pilates-grip-socks',
    3: '/products/professional-running-athletic-socks',
    4: '/products/custom-logo-embroidery-socks',
    5: '/products/mid-calf-football-grip',
    6: '/products/performance-basketball-socks',
    7: '/products/open-top-pilates-studio-socks',
    8: '/products/luxury-combed-cotton-casual-socks',
    9: '/products/soccer-sports-socks',
    10: '/products/jacquard-custom-socks',
    11: '/trampoline-park-socks',
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://peakmotionsocks.com/products#collection',
        url: 'https://peakmotionsocks.com/products',
        name: 'Custom Sports Socks Collection',
        description: 'Custom grip, football, running, Pilates, basketball and private-label socks for OEM manufacturing.',
        mainEntity: { '@id': 'https://peakmotionsocks.com/products#product-list' },
      },
      {
        '@type': 'ItemList',
        '@id': 'https://peakmotionsocks.com/products#product-list',
        name: 'PeakMotion Custom Sports Socks',
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://peakmotionsocks.com${productDetailUrls[product.id]}`,
          name: product.title,
          image: product.img,
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        {/* Banner Section */}
        <section className="bg-[#111] py-24 md:py-32 px-5 lg:px-15 text-white">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight uppercase">
              CUSTOM <span className="text-[#b4ff2b]">SPORTS SOCKS</span><br />
              &amp; OEM SOCK STYLES
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Compare grip, football, running, Pilates, basketball and private-label sock styles, then choose the construction that best fits your brand, team or retail collection.
            </p>
            <Link
              href="/custom-grip-socks"
              className="mt-8 inline-flex rounded-xl bg-[#b4ff2b] px-6 py-3.5 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]"
            >
              Explore Custom Grip Socks
            </Link>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="bg-white border-b border-gray-100 py-10 px-5 sticky top-[72px] md:top-[84px] z-40">
          <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3.5 rounded-xl text-[15px] font-bold uppercase tracking-wider transition-all border-2 ${
                  filter === cat.id 
                    ? 'bg-[#b4ff2b] border-[#b4ff2b] text-black shadow-lg' 
                    : 'bg-transparent border-gray-100 text-gray-600 hover:border-[#b4ff2b]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16 px-5 lg:px-15 max-w-[1440px] mx-auto min-h-[600px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">OEM Product Collection</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0c1713] md:text-4xl">Choose a sock category, then build it for your brand</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">Compare grip, football, running, Pilates, basketball and private-label sock options. Every style can be tailored around yarn, construction, logo, color, size range and retail packaging.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-square bg-white">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    unoptimized={product.img.includes('alicdn.com')}
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-900 leading-snug mb-2">{product.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{product.desc}</p>
                    {product.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-[#d9e7c5] bg-[#f3fae8] px-3 py-1.5 text-xs font-extrabold text-[#3f7418]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-auto space-y-4">
                    <div className="text-sm font-extrabold text-gray-800 uppercase tracking-wide">
                      {product.moq}
                    </div>
                    <Link
                      href={productDetailUrls[product.id]}
                      className="block w-full bg-[#b4ff2b] text-black text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#a3e627] transition-all"
                    >
                      {product.cta || 'View Details'}
                    </Link>
                    <a
                      href={`https://wa.me/8617357769219?text=${encodeURIComponent(`Hello PeakMotion Socks, I would like a quote for ${product.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-xl border border-[#8fcf2b] bg-white py-3 text-center text-sm font-black uppercase tracking-wide text-[#234812] transition-colors hover:bg-[#eefbd7]"
                    >
                      Get Quote on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-400 font-bold">
              No products found in this category.
            </div>
          )}
        </section>

        <section className="border-y border-slate-200 bg-white px-5 py-16 md:px-8 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Browse by Application</p><h2 className="mt-3 text-3xl font-black text-[#0c1713] md:text-4xl">Custom sock solutions for different performance needs</h2><p className="mt-4 text-lg leading-relaxed text-slate-600">Use these category paths to reach the product detail page most relevant to your customer, sport or retail collection.</p></div>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['Custom Grip Socks', 'Football, studio, yoga and training grip patterns with OEM branding.', '/custom-grip-socks'],
                ['Football Socks', 'Team and soccer grip socks with performance structure and custom colors.', '/football-socks-manufacturer'],
                ['Running Socks', 'Moisture management, cushioning and support zones for running brands.', '/custom-running-socks-manufacturer'],
                ['Private Label Socks', 'Logo, label, packaging and retail-ready sock collections for new brands.', '/products/custom-logo-embroidery-socks'],
              ].map(([title, description, href]) => (
                <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-[#f7f8f6] p-6 transition-all hover:-translate-y-1 hover:border-[#b4ff2b] hover:shadow-lg">
                  <h3 className="text-lg font-black text-[#0c1713]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
                  <span className="mt-5 inline-flex text-sm font-black uppercase tracking-wide text-[#387116]">Explore solution <span aria-hidden="true" className="ml-2">&rarr;</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0b0b0b] py-24 px-5 lg:px-15 text-center text-white border-t border-gray-800">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase leading-tight">
              Ready To Custom Your <br /><span className="text-[#b4ff2b]">Brand Socks?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              We provide full OEM & private label service with flexible low MOQ, strict quality control and on-time delivery worldwide. Build your exclusive collection today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/custom-grip-socks"
                className="bg-[#0c1713] px-10 py-5 rounded-2xl font-black text-[15px] uppercase tracking-widest hover:bg-black transition-all shadow-xl"
                style={{ color: '#ffffff' }}
              >
                View Custom Grip Socks
              </Link>
              <a 
                href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20want%20to%20know%20more%20about%20your%20wholesale%20pricing%20and%20OEM%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c5ff3d] px-10 py-5 rounded-2xl font-black text-[15px] uppercase tracking-widest hover:bg-[#a3e627] transition-all shadow-xl"
                style={{ color: '#0c1713' }}
              >
                Get Wholesale Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/8617357769219" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 bg-[#25D366] text-white w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-xl z-[1000] hover:scale-110 transition-transform"
      >
        💬
      </a>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: 1,
      category: 'grip',
      title: 'Crew Soccer Grip Sports Socks',
      desc: 'Silicone non-slip sole, breathable rib cuff, seamless toe',
      moq: '50 Pairs',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/products-crew-grip-three-colors.jpg?v=1'
    },
    {
      id: 2,
      category: 'pilates',
      title: 'Low Cut Yoga Pilates Grip Socks',
      desc: 'Soft cotton blend, full bottom silicone anti-slip',
      moq: '50 Pairs',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/products-pilates-low-cut-straps-final.jpg?v=1'
    },
    {
      id: 3,
      category: 'sports',
      title: 'Professional Running Athletic Socks',
      desc: 'Quick dry, odor resistant, padded heel & toe',
      moq: '50 Pairs',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/products-running-long-three-colors-final.jpg?v=1'
    },
    {
      id: 4,
      category: 'custom',
      title: 'Custom Logo Embroidery Socks',
      desc: 'OEM private label, custom color & packaging support',
      moq: '50 Pairs',
      img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/custom-socks-guide-grey.jpg'
    },
    {
        id: 5,
        category: 'grip',
        title: 'Mid-calf Football Grip Socks',
        desc: 'Advanced grip pattern for maximum stability on turf',
        moq: '100 Pairs',
        img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/blog-football-vs-grip.jpg'
    },
    {
        id: 6,
        category: 'sports',
        title: 'Performance Basketball Socks',
        desc: 'High-impact cushioning with secure ankle support',
        moq: '100 Pairs',
        img: 'https://pub-e03187bac82d42569911bb6f89c1d844.r2.dev/sports-socks-basketball.jpg'
    },
    {
        id: 7,
        category: 'pilates',
        title: 'Open Top Pilates Studio Socks',
        desc: 'Breathable upper with non-toxic silicone grips',
        moq: '50 Pairs',
        img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800'
    },
    {
        id: 8,
        category: 'custom',
        title: 'Luxury Combed Cotton Casual Socks',
        desc: 'Premium soft handfeel with reinforced heel and toe',
        moq: '200 Pairs',
        img: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800'
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Banner Section */}
        <section className="bg-[#111] py-24 md:py-32 px-5 lg:px-15 text-white">
          <div className="max-w-[1440px] mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight uppercase">
              CUSTOM <span className="text-[#b4ff2b]">SPORTS SOCKS</span><br />
              MANUFACTURER
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Professional OEM & Private Label custom grip socks, bulk wholesale for global brands. High-performance engineering with flexible low MOQ.
            </p>
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
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-gray-900 leading-snug mb-2">{product.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{product.desc}</p>
                  </div>
                  <div className="mt-auto space-y-4">
                    <div className="text-sm font-extrabold text-gray-800 uppercase tracking-wide">
                      MOQ: {product.moq}
                    </div>
                    <a
                      href={`https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%3A%20${encodeURIComponent(product.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#b4ff2b] text-black text-center py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#a3e627] transition-all"
                    >
                      Get Quote
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
                href="/#inquiry"
                className="bg-white text-black px-10 py-5 rounded-2xl font-black text-[15px] uppercase tracking-widest hover:bg-gray-200 transition-all shadow-xl"
              >
                View Custom Solutions
              </Link>
              <a 
                href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20want%20to%20know%20more%20about%20your%20wholesale%20pricing%20and%20OEM%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b4ff2b] text-black px-10 py-5 rounded-2xl font-black text-[15px] uppercase tracking-widest hover:bg-[#a3e627] transition-all shadow-xl"
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


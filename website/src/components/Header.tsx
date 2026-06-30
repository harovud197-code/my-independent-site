'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#0b0b0b] px-5 lg:px-8 py-4.5 border-b border-[#222] sticky top-0 z-[1000] font-sans">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-white font-bold text-2xl md:text-[26px] tracking-tight hover:text-[#b4ff2b] transition-colors">
          PeakMotion Socks
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-bold tracking-wide uppercase">
          <Link href="/" className="text-white hover:text-[#b4ff2b] transition-colors">HOME</Link>
          <Link href="/#sports-socks" className="text-white hover:text-[#b4ff2b] transition-colors">PRODUCTS</Link>
          <Link href="/#factory" className="text-white hover:text-[#b4ff2b] transition-colors">FACTORY</Link>
          <Link href="/#custom-socks" className="text-white hover:text-[#b4ff2b] transition-colors">OEM</Link>
          <Link href="/blog" className="text-white hover:text-[#b4ff2b] transition-colors">BLOG</Link>
          <Link href="/blog/sports-socks-moq-guide" className="text-white hover:text-[#b4ff2b] transition-colors whitespace-nowrap">MOQ GUIDE</Link>
          <Link href="/#inquiry" className="text-white hover:text-[#b4ff2b] transition-colors">CONTACT</Link>
        </nav>

        {/* CTA BUTTON */}
        <Link 
          href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20custom%20socks." 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#b4ff2b] text-black px-5 py-2.5 rounded-xl font-black text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(184,255,42,0.3)] hover:scale-105 active:scale-95 transition-all"
        >
          GET QUOTE
        </Link>

      </div>
    </header>
  );
}

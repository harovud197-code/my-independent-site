'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header font-sans">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8 nav-wrap">
        
        {/* LOGO */}
        <Link href="/" className="brand hover:opacity-80 transition-opacity">
          PeakMotion Socks
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex main-nav">
          <Link href="/">HOME</Link>
          <Link href="/products">PRODUCTS</Link>
          <Link href="/#factory">FACTORY</Link>
          <Link href="/#custom-socks">OEM</Link>
          <Link href="/blog">BLOG</Link>
          <Link href="/blog/sports-socks-moq-guide" className="whitespace-nowrap">MOQ GUIDE</Link>
          <Link href="/#inquiry">CONTACT</Link>
        </nav>

        {/* CTA BUTTON */}
        <Link 
          href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20custom%20socks." 
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          GET QUOTE
        </Link>

      </div>
    </header>
  );
}

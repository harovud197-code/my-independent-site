'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header font-sans">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8 nav-wrap">
        
        {/* LOGO */}
        <Link href="/" className="brand hover:opacity-80 transition-opacity !text-3xl md:!text-[34px]">
          PeakMotion Socks
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex main-nav !normal-case">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-1 whitespace-nowrap opacity-[.86] transition-opacity hover:opacity-100">
              Factory
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-open:rotate-180"><path d="m5 7 5 5 5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>
            </summary>
            <div className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_16px_40px_rgba(12,23,19,0.16)]">
              <Link href="/#factory" className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-[#f4fbe8] hover:text-[#234812]">Factory Overview</Link>
              <Link href="/private-label-sports-socks" className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-[#f4fbe8] hover:text-[#234812]">Private Label Sports Socks</Link>
              <Link href="/football-socks-manufacturer" className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-[#f4fbe8] hover:text-[#234812]">Football Socks</Link>
              <Link href="/custom-running-socks-manufacturer" className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-[#f4fbe8] hover:text-[#234812]">Custom Running Socks</Link>
              <Link href="/custom-grip-socks" className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-[#f4fbe8] hover:text-[#234812]">Custom Grip Socks</Link>
              <Link href="/yoga-pilates-grip-socks-supplier" className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-[#f4fbe8] hover:text-[#234812]">Yoga &amp; Pilates Grip Socks</Link>
            </div>
          </details>
          <Link href="/#custom-socks">OEM</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/case-studies/uk-football-brand-growth" className="whitespace-nowrap">Case Studies</Link>
          <Link href="/sports-socks-moq-guide" className="whitespace-nowrap">MOQ Guide</Link>
          <Link href="/#inquiry">Contact</Link>
        </nav>

        {/* CTA BUTTON */}
        <Link 
          href="/#inquiry"
          data-analytics-event="quote_cta_click"
          data-analytics-placement="header"
          className="nav-cta hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          START A PROJECT
        </Link>

      </div>
    </header>
  );
}


'use client';

import Link from 'next/link';

type NavItem = {
  href: string;
  label: string;
};

const productLinks: NavItem[] = [
  { href: '/football-socks-manufacturer', label: 'Football Socks' },
  { href: '/yoga-pilates-grip-socks-supplier', label: 'Yoga Grip Socks' },
  { href: '/products', label: 'Sports Socks' },
  { href: '/#custom-socks', label: 'Custom Socks' },
];

const solutionLinks: NavItem[] = [
  { href: '/industries', label: 'Industries We Serve' },
  { href: '/private-label-sports-socks', label: 'Private Label Socks' },
  { href: '/socks-manufacturing#production-process', label: 'OEM Manufacturing' },
  { href: '/socks-manufacturing#custom-development', label: 'Custom Development' },
];

const manufacturingLinks: NavItem[] = [
  { href: '/socks-manufacturing#production-process', label: 'Production Process' },
  { href: '/socks-manufacturing#materials', label: 'Materials' },
  { href: '/socks-manufacturing#quality-control', label: 'Quality Control' },
  { href: '/socks-manufacturing#packaging', label: 'Packaging' },
];

const caseStudyLinks: NavItem[] = [
  { href: '/case-studies/uk-football-brand-growth', label: 'UK Football Brand Growth' },
  { href: '/case-studies/yoga-pilates-socks-development', label: 'Yoga & Pilates Socks Development' },
  { href: '/case-studies/private-label-socks-brand-launch', label: 'Private Label Socks Brand Launch' },
];

const resourceLinks: NavItem[] = [
  { href: '/sports-socks-moq-guide', label: 'MOQ Guide' },
  { href: '/blog', label: 'Blog' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/blog/how-sports-socks-are-manufactured', label: 'Socks Manufacturing Guide' },
];

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180">
      <path d="m5 7 5 5 5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function NavDropdown({ label, items, widthClass = 'w-64' }: { label: string; items: NavItem[]; widthClass?: string }) {
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1 whitespace-nowrap opacity-[.86] transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#679a20]">
        {label}
        <ChevronIcon />
      </summary>
      <div className={`absolute left-1/2 top-full z-50 mt-4 ${widthClass} -translate-x-1/2 rounded-[22px] border border-white/10 bg-[#18201d] p-2.5 shadow-[0_20px_55px_rgba(12,23,19,0.28)]`}>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-2xl px-4 py-3 text-sm font-bold !text-white transition-colors hover:bg-white/10 hover:!text-[#b4ff2b] focus-visible:bg-white/10 focus-visible:!text-[#b4ff2b] focus-visible:outline-none"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function Header() {
  return (
    <header className="site-header font-sans">
      <div className="nav-wrap mx-auto max-w-[1440px] px-5 lg:px-8">
        <Link href="/" className="brand !text-3xl transition-opacity hover:opacity-80 md:!text-[34px]">
          PeakMotion Socks
        </Link>

        <nav aria-label="Primary navigation" className="main-nav hidden !gap-4 !text-sm !normal-case md:flex xl:!gap-5 xl:!text-[15px]">
          <Link href="/">Home</Link>
          <NavDropdown label="Products" items={productLinks} />
          <NavDropdown label="Solutions" items={solutionLinks} />
          <NavDropdown label="Manufacturing" items={manufacturingLinks} />
          <NavDropdown label="Case Studies" items={caseStudyLinks} widthClass="w-80" />
          <NavDropdown label="Resources" items={resourceLinks} widthClass="w-72" />
          <Link href="/contact">Contact</Link>
        </nav>

        <Link
          href="/contact"
          data-analytics-event="quote_cta_click"
          data-analytics-placement="header"
          className="nav-cta shadow-md transition-all hover:scale-105 active:scale-95"
        >
          START A PROJECT
        </Link>
      </div>
    </header>
  );
}

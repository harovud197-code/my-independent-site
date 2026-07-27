import Link from 'next/link';

const productLinks = [
  ['Custom Grip Socks', '/custom-grip-socks'],
  ['Football Grip Socks', '/products/mid-calf-football-grip'],
  ['Custom Running Socks', '/custom-running-socks-manufacturer'],
  ['Yoga & Pilates Grip Socks Supplier', '/yoga-pilates-grip-socks-supplier'],
  ['Private Label Socks', '/products/custom-logo-embroidery-socks'],
] as const;

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <section className="border-t border-slate-200 bg-[#f7f8f6] px-5 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Continue Your Sourcing Research</p>
          <h2 className="mt-2 text-2xl font-black text-[#0c1713] md:text-3xl">Explore Related Custom Sock Products</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">Move from product research to the product page that best matches your category, then request a tailored quotation.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {productLinks.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-black text-[#0c1713] transition-colors hover:border-[#b4ff2b] hover:bg-[#b4ff2b]">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

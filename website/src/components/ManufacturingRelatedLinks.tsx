import Link from 'next/link';

const primaryLinks = [
  { href: '/socks-manufacturing', label: 'Manufacturing' },
  { href: '/private-label-sports-socks', label: 'Private Label' },
  { href: '/yoga-pilates-grip-socks-supplier', label: 'Yoga / Pilates' },
  { href: '/football-socks-manufacturer', label: 'Football Socks' },
] as const;

const caseLinks = [
  { href: '/case-studies/uk-football-brand-growth', label: 'UK Football Growth' },
  { href: '/case-studies/yoga-pilates-socks-development', label: 'Yoga Sock Development' },
  { href: '/case-studies/private-label-socks-brand-launch', label: 'Private Label Launch' },
] as const;

export default function ManufacturingRelatedLinks({ currentPath }: { currentPath: string }) {
  return (
    <nav aria-label="Connected manufacturing and buyer pages" className="border-y border-slate-200 bg-white px-5 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="shrink-0">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Connected buyer pages</p>
            <p className="mt-1 text-sm font-bold text-slate-600">Move from capability to product and proof.</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:ml-auto">
            {primaryLinks.map((item, index) => {
              const active = currentPath === item.href;
              const priority = index < 2;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex items-center rounded-lg border px-4 py-3 text-sm font-black transition-colors ${active ? 'border-[#0c1713] bg-[#0c1713] !text-white' : priority ? 'border-[#8fbd45] bg-[#f1fadf] text-[#274d14] hover:bg-[#e5f6c4]' : 'border-slate-200 bg-[#f7f8f6] text-[#0c1713] hover:border-[#8fbd45]'}`}
                >
                  {index === 1 && <span className="mr-2 text-[10px] uppercase tracking-wider text-[#56851c]">Priority</span>}
                  {item.label}
                </Link>
              );
            })}
            <Link href="/#factory" className="inline-flex items-center rounded-lg border border-slate-200 px-4 py-3 text-sm font-black text-[#0c1713] hover:border-[#8fbd45]">Factory / About</Link>
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-[#b4ff2b] px-4 py-3 text-sm font-black text-[#0c1713] hover:bg-[#a3e627]">Contact</Link>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-sm">
          <span className="font-black text-slate-500">Case studies:</span>
          {caseLinks.map((item) => (
            <Link key={item.href} href={item.href} aria-current={currentPath === item.href ? 'page' : undefined} className={`font-bold underline decoration-[#b4ff2b] decoration-2 underline-offset-4 ${currentPath === item.href ? 'text-[#56851c]' : 'text-[#0c1713] hover:text-[#56851c]'}`}>{item.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

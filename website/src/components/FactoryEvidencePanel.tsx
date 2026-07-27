import Image from 'next/image';

type FactoryEvidencePanelProps = {
  product: string;
  moq: string;
  sampleLeadTime: string;
  bulkLeadTime: string;
};

const evidenceSteps = [
  ['1. Specification review', 'Confirm the product brief, size range, materials, artwork, packaging and target delivery date before sampling.'],
  ['2. Sample approval', 'Approve fit, construction, colors, logo placement and packaging details before bulk production begins.'],
  ['3. In-process checks', 'Review the checkpoints relevant to the approved specification, including measurements, appearance and packing.'],
  ['4. Packing evidence', 'Confirm labels, carton marks and packing method. Dated finished-product and packing photos can be discussed for the order.'],
] as const;

export default function FactoryEvidencePanel({ product, moq, sampleLeadTime, bulkLeadTime }: FactoryEvidencePanelProps) {
  return (
    <section className="border-y border-slate-200 bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Factory and Order Evidence</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Details a sourcing team can verify before placing a {product} order</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">A clear evidence trail matters more than generic factory claims. We confirm the order specification, pre-production sample, relevant quality checks and packing details before shipment.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-3 shadow-[0_16px_40px_rgba(12,23,19,0.07)]">
            <figure className="overflow-hidden rounded-xl bg-slate-100">
              <Image src="/assets/custom-grip-socks/factory/factory-building.jpg" alt="Exterior of Haiyan Huaerte Knitting Co., Ltd. factory" width={1400} height={1050} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-3 py-3 text-xs font-bold text-slate-600">Factory exterior in Haiyan, Zhejiang</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl bg-slate-100">
              <Image src="/assets/custom-grip-socks/factory/boarding-finishing-area.jpg" alt="Sock boarding and finishing area at the factory" width={1400} height={1050} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-3 py-3 text-xs font-bold text-slate-600">Boarding and finishing area</figcaption>
            </figure>
          </div>

          <div className="rounded-2xl bg-[#0c1713] p-7 text-white md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Factory location</p>
            <h3 className="mt-3 text-2xl font-black">Haiyan Huaerte Knitting Co., Ltd.</h3>
            <address className="mt-4 not-italic leading-relaxed text-slate-300">No. 8, Yucai Village Industrial Park, Tongyuan Town, Haiyan County, Zhejiang Province, China</address>
            <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/15 text-center">
              {[
                ['MOQ', moq],
                ['Sample', sampleLeadTime],
                ['Bulk', bulkLeadTime],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#0c1713] px-3 py-4">
                  <span className="block text-[10px] font-black uppercase tracking-[0.13em] text-[#b4ff2b]">{label}</span>
                  <strong className="mt-2 block text-sm leading-snug text-white">{value}</strong>
                </div>
              ))}
            </div>
            <a href="#quote" data-analytics-event="quote_cta_click" data-analytics-placement="factory_evidence" className="mt-7 inline-flex rounded-xl bg-[#b4ff2b] px-5 py-3 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Request order evidence</a>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#679a20]">Documentation</p>
              <h3 className="mt-3 text-2xl font-black">Factory-level certificates available for scope review</h3>
              <p className="mt-3 leading-relaxed text-slate-600">Certificate eligibility depends on materials, product construction and transaction records. Confirm the applicable scope for your order before making any product claim.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href="/assets/football-socks/certifications/oeko-tex-standard-100-sh020-253592.pdf" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 p-5 transition-colors hover:border-[#b4ff2b] hover:bg-[#f4fbe8]">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-[#679a20]">OEKO-TEX STANDARD 100</span>
                <strong className="mt-3 block">Certificate SH020 253592</strong>
                <span className="mt-2 block text-sm text-slate-600">Open the issued document</span>
              </a>
              <a href="/assets/football-socks/certifications/better-cotton-coc-00070076.pdf" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-200 p-5 transition-colors hover:border-[#b4ff2b] hover:bg-[#f4fbe8]">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-[#679a20]">BETTER COTTON CHAIN OF CUSTODY</span>
                <strong className="mt-3 block">License 00070076</strong>
                <span className="mt-2 block text-sm text-slate-600">Open the issued document</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {evidenceSteps.map(([title, text]) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-black text-[#0c1713]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate-500">Customer names, artwork and commercial terms are protected. Where a buyer permits it, we can share relevant anonymized product, packaging or inspection evidence during a quotation discussion.</p>
      </div>
    </section>
  );
}

import Link from 'next/link';

const whatsappUrl = 'https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20would%20like%20to%20discuss%20the%20production%20process%20and%20quality%20checks%20for%20my%20custom%20sock%20project.';

export default function BuyerConfidencePanel({ product }: { product: string }) {
  return (
    <section className="border-y border-slate-100 bg-[#f7f8f6] px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Buyer Review Points</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Know what to confirm before bulk production</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">For a custom {product} project, a clear approval trail helps avoid production surprises. We can review the specification, sample, packaging and shipment requirements with you before bulk production begins.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-placement="buyer_confidence" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#b4ff2b] px-6 py-4 text-sm font-black uppercase tracking-wide !text-[#0c1713] transition-colors hover:bg-[#a3e627] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c1713]">Discuss Quality Checks</a>
            <Link href="/blog/custom-sports-socks-manufacturer-guide" data-analytics-event="view_details_click" data-analytics-placement="buyer_confidence" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:border-[#b4ff2b] hover:bg-[#b4ff2b]">Read the OEM Guide</Link>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Production brief', 'Confirm target use, sizing, yarn, colors, logo and packing requirements.'],
            ['Sample approval', 'Review fit, construction and visual details before bulk production.'],
            ['Quality checkpoints', 'Align on the inspection points that matter for your approved specification.'],
            ['Packing and shipment', 'Confirm labels, carton marks, packing method and delivery destination.'],
          ].map(([title, text], index) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-5">
              <span className="text-sm font-black text-[#679a20]">0{index + 1}</span>
              <h3 className="mt-3 font-black text-[#0c1713]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

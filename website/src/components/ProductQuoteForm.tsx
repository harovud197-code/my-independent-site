'use client';

import type { FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

const whatsappNumber = '8617357769219';

type ProductQuoteFormProps = {
  productName: string;
  productSlug: string;
  productOptions: string[];
};

export default function ProductQuoteForm({ productName, productSlug, productOptions }: ProductQuoteFormProps) {
  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      `Hello PeakMotion Socks, I would like a quote for ${productName}.`,
      `Name: ${formData.get('name') || 'Not provided'}`,
      `Business email: ${formData.get('email') || 'Not provided'}`,
      `Company / club / studio: ${formData.get('company') || 'Not provided'}`,
      `Country or market: ${formData.get('market') || 'Not provided'}`,
      `Product option: ${formData.get('productOption') || 'Not selected'}`,
      `Estimated quantity: ${formData.get('quantity') || 'Not provided'}`,
      `Project details: ${formData.get('requirements') || 'Not provided'}`,
    ];

    trackEvent('quote_submission', { product: productSlug, channel: 'whatsapp' });
    trackEvent('generate_lead', { product: productSlug, channel: 'whatsapp' });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form id="quote" onSubmit={submitQuote} className="rounded-2xl border border-white/15 bg-[#0c1713]/95 p-6 text-white shadow-[0_24px_55px_rgba(0,0,0,0.25)] backdrop-blur md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Request a project quote</p>
      <h2 className="mt-3 text-2xl font-black">Tell us the essentials</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">We will reply with practical guidance on sampling, MOQ, pricing and timing.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <input required name="name" autoComplete="name" placeholder="Your name" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b]" />
        <input required type="email" name="email" autoComplete="email" placeholder="Business email" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b]" />
        <input name="company" placeholder="Company, club or studio" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b]" />
        <input name="market" placeholder="Country or target market" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b]" />
        <select required name="productOption" defaultValue="" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] sm:col-span-2">
          <option value="" disabled>Select your preferred option</option>
          {productOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
        <input required name="quantity" inputMode="numeric" placeholder="Estimated quantity" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b]" />
        <textarea name="requirements" rows={2} placeholder="Logo, colors, sizes, packaging and target delivery" className="resize-y rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b]" />
      </div>
      <button type="submit" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#b4ff2b] px-5 py-3 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Request My Quote</button>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">Your information is used only to respond to this inquiry.</p>
    </form>
  );
}


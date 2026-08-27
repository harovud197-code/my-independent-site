'use client';

import type { FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

type TrampolineQuoteFormProps = { id?: string };

export default function TrampolineQuoteForm({ id = 'quote-form' }: TrampolineQuoteFormProps) {
  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      'Hello PeakMotion Socks, I would like a quote for custom trampoline park grip socks.',
      `Name: ${formData.get('name') || 'Not provided'}`,
      `Business email: ${formData.get('email') || 'Not provided'}`,
      `Company / park: ${formData.get('company') || 'Not provided'}`,
      `Country / market: ${formData.get('country') || 'Not provided'}`,
      `Buyer type: ${formData.get('buyerType') || 'Not selected'}`,
      `Number of locations: ${formData.get('locations') || 'Not selected'}`,
      `Estimated quantity: ${formData.get('quantity') || 'Not selected'}`,
      `Required sizes: ${formData.get('sizes') || 'Not provided'}`,
      `Customization: ${formData.get('customization') || 'Not provided'}`,
      `Need a sample: ${formData.get('sample') || 'Not selected'}`,
      `Target delivery date: ${formData.get('delivery') || 'Not provided'}`,
      `Project details: ${formData.get('details') || 'Not provided'}`,
    ];

    trackEvent('quote_submission', { product: 'trampoline_park_grip_socks', channel: 'email' });
    trackEvent('generate_lead', { product: 'trampoline_park_grip_socks', channel: 'email' });
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=kayzhejiang%40gmail.com&su=${encodeURIComponent('Custom Trampoline Park Grip Socks Inquiry')}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  const fieldClass = 'min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30';

  return (
    <form id={id} onSubmit={submitQuote} className="rounded-2xl bg-[#111e19] p-7 text-white shadow-[0_28px_65px_rgba(0,0,0,0.25)] md:p-9">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Wholesale RFQ</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight">Tell us what your park needs</h2>
      <p className="mt-3 leading-relaxed text-slate-300">Share your quantity, sizes, branding and timing. We will recommend a practical sample and production route.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <input required name="name" placeholder="Your name" autoComplete="name" className={fieldClass} />
        <input required type="email" name="email" placeholder="Business email" autoComplete="email" className={fieldClass} />
        <input required name="company" placeholder="Company / park name" autoComplete="organization" className={fieldClass} />
        <input required name="country" placeholder="Country / market" autoComplete="country-name" className={fieldClass} />
        <select required name="buyerType" defaultValue="" className={fieldClass}>
          <option value="" disabled>Select buyer type</option>
          <option>Trampoline park</option>
          <option>Indoor playground</option>
          <option>Adventure / activity center</option>
          <option>Multi-location operator</option>
          <option>Distributor or FEC supplier</option>
          <option>Other commercial buyer</option>
        </select>
        <select name="locations" defaultValue="" className={fieldClass}>
          <option value="" disabled>Number of locations</option>
          <option>1</option>
          <option>2-5</option>
          <option>6-20</option>
          <option>20+</option>
        </select>
        <select required name="quantity" defaultValue="" className={fieldClass}>
          <option value="" disabled>Estimated order quantity</option>
          <option>Under 500 pairs</option>
          <option>500-1,000 pairs</option>
          <option>1,000-5,000 pairs</option>
          <option>5,000-10,000 pairs</option>
          <option>10,000+ pairs</option>
        </select>
        <select name="sample" defaultValue="" className={fieldClass}>
          <option value="" disabled>Need a sample?</option>
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>
        <input name="sizes" placeholder="Required sizes: kids, youth, adult" className={fieldClass} />
        <input name="delivery" placeholder="Target delivery date" className={fieldClass} />
      </div>
      <input name="customization" placeholder="Logo, colors, grip pattern, size coding, packaging" className={`${fieldClass} mt-3`} />
      <textarea name="details" rows={4} placeholder="Project details, reference product and artwork link" className="mt-3 w-full resize-y rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
      <button type="submit" className="mt-4 inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-[#b4ff2b] px-5 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4ff2b]">Request Wholesale Quote</button>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">If you have logo files, attach them in Gmail after the inquiry draft opens.</p>
    </form>
  );
}

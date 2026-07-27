import type { Metadata } from 'next';
import Link from 'next/link';

const pageUrl = 'https://peakmotionsocks.com/terms-of-service';

export const metadata: Metadata = {
  title: 'Terms of Service | PeakMotion Socks',
  description: 'Terms for using the PeakMotion Socks website and requesting custom sports sock quotations.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-white text-[#0c1713]">
      <article className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">PeakMotion Socks</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Terms of Service</h1>
        <p className="mt-5 text-sm font-bold text-slate-500">Last updated: July 17, 2026</p>
        <div className="mt-10 space-y-10 text-lg leading-relaxed text-slate-700">
          <section><h2 className="text-2xl font-black text-[#0c1713]">Website use</h2><p className="mt-3">This website provides general information about PeakMotion Socks, custom sports sock products and manufacturing support. You may use it for lawful business research and communication purposes.</p></section>
          <section><h2 className="text-2xl font-black text-[#0c1713]">Quotations and product information</h2><p className="mt-3">Website content, product descriptions, MOQ guidance and production timelines are informational. A quotation, specification, sample approval, payment terms and delivery schedule become binding only when confirmed in writing for a specific project.</p></section>
          <section><h2 className="text-2xl font-black text-[#0c1713]">Intellectual property</h2><p className="mt-3">Website content, images and branding may not be copied, republished or used commercially without permission. You are responsible for ensuring that artwork, trademarks and instructions you provide may lawfully be used for your project.</p></section>
          <section><h2 className="text-2xl font-black text-[#0c1713]">Third-party links</h2><p className="mt-3">Links to services such as WhatsApp are provided for communication convenience. Their use is subject to the relevant third party&apos;s terms and privacy practices.</p></section>
          <section><h2 className="text-2xl font-black text-[#0c1713]">Contact</h2><p className="mt-3">Questions about these terms can be sent to <a className="font-bold text-[#387116] underline underline-offset-4" href="mailto:abayacloth@hotmail.com?subject=Website%20Terms%20Question">abayacloth@hotmail.com</a>.</p></section>
          <Link href="/" className="inline-flex font-black text-[#387116] underline underline-offset-4">Return to homepage &rarr;</Link>
        </div>
      </article>
    </main>
  );
}

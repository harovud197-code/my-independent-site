import type { Metadata } from 'next';
import Link from 'next/link';

const pageUrl = 'https://peakmotionsocks.com/privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy | PeakMotion Socks',
  description: 'How PeakMotion Socks handles website inquiries, analytics preferences and contact information.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-[#0c1713]">
      <article className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">PeakMotion Socks</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Privacy Policy</h1>
        <p className="mt-5 text-sm font-bold text-slate-500">Last updated: July 17, 2026</p>
        <div className="mt-10 space-y-10 text-lg leading-relaxed text-slate-700">
          <section><h2 className="text-2xl font-black text-[#0c1713]">Who we are</h2><p className="mt-3">PeakMotion Socks is operated by Haiyan Huaerte Knitting Co., Ltd. We manufacture custom sports socks and respond to business inquiries from brands, teams, retailers and other buyers.</p></section>
          <section><h2 className="text-2xl font-black text-[#0c1713]">Information you choose to provide</h2><p className="mt-3">When you contact us by email, WhatsApp or a quotation form, you may provide your name, company, email address, telephone number, product requirements, artwork references, quantity and delivery information. We use this information to respond to your inquiry, discuss a potential project and provide related customer support.</p></section>
          <section><h2 className="text-2xl font-black text-[#0c1713]">Analytics and cookies</h2><p className="mt-3">With your permission, we use Google Analytics to understand how visitors use our website, such as page visits, navigation and quotation journeys. We do not enable advertising storage through our cookie banner. You can choose <strong>Accept Analytics</strong> or <strong>Essential Only</strong> when the banner appears, and you can change your choice later through Cookie Settings in the footer.</p></section>
          <section><h2 className="text-2xl font-black text-[#0c1713]">Sharing and retention</h2><p className="mt-3">We do not sell personal information. Information may be shared with service providers only where needed to operate the website, communicate with you, arrange a quotation or fulfill a business request. We retain inquiry information only for as long as reasonably necessary for those purposes and applicable record-keeping requirements.</p></section>
          <section><h2 className="text-2xl font-black text-[#0c1713]">Your choices</h2><p className="mt-3">You may ask us to update or delete your contact information, subject to applicable legal or business record requirements. You can also withdraw analytics consent through the Cookie Settings control.</p></section>
          <section><h2 className="text-2xl font-black text-[#0c1713]">Contact</h2><p className="mt-3">For privacy questions, contact <a className="font-bold text-[#387116] underline underline-offset-4" href="mailto:kayzhejiang@gmail.com?subject=Privacy%20Question">kayzhejiang@gmail.com</a> or write to Haiyan Huaerte Knitting Co., Ltd., No. 8, Yucai Village Industrial Park, Tongyuan Town, Haiyan County, Zhejiang Province, China.</p></section>
          <p className="rounded-xl border border-slate-200 bg-[#f7f8f6] p-5 text-sm">This policy explains our website practices and is not a substitute for legal advice. Please obtain legal review for the countries and markets where you operate.</p>
          <Link href="/" className="inline-flex font-black text-[#387116] underline underline-offset-4">Return to homepage &rarr;</Link>
        </div>
      </article>
    </main>
  );
}

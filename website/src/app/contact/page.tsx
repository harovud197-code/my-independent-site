import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Contact PeakMotion Socks | Request a Custom Sock Quote',
  description: 'Tell PeakMotion about your product type, target market, quantity, logo and packaging needs to receive practical custom sock project guidance.',
  alternates: { canonical: 'https://peakmotionsocks.com/#inquiry' },
};

export default function ContactPage() {
  redirect('/#inquiry');
}

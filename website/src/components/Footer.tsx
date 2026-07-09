import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-[#aaa] py-16 px-5 lg:px-15 border-t border-[#222]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
        <div className="space-y-4">
          <h3 className="text-white text-xl font-bold">Haiyan Huaerte Knitting Co., Ltd.</h3>
          <p className="text-sm leading-relaxed">
            Custom Sports Socks Manufacturer | OEM & Private Label Supplier. Delivering high-performance solutions for global sports brands.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-white text-lg font-bold">Contact Details</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#c5ff3d] font-bold shrink-0">Add:</span>
              <span>No. 8, Yucai Village Industrial Park, Tongyuan Town, Haiyan County, Zhejiang Province, China</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#c5ff3d] font-bold shrink-0">Tel:</span>
              <span>+86 573 8657 1288</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#c5ff3d] font-bold shrink-0">Mail:</span>
              <a href="mailto:abayacloth@hotmail.com" className="hover:text-white transition-colors">abayacloth@hotmail.com</a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-lg font-bold">Quick Links</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <Link href="/" className="hover:text-[#c5ff3d] transition-colors">HOME</Link>
            <Link href="/products" className="hover:text-[#c5ff3d] transition-colors">SPORTS SOCKS</Link>
            <Link href="/blog" className="hover:text-[#c5ff3d] transition-colors">BLOG</Link>
            <a href="https://wa.me/8617357769219?text=Hello%20PeakMotion%20Socks%2C%20I%20am%20interested%20in%20getting%20a%20quote%20for%20custom%20socks." target="_blank" rel="noopener noreferrer" className="hover:text-[#c5ff3d] transition-colors text-xs uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">GET QUOTE</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#222] text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 Haiyan Walter Knitting Co., Ltd. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

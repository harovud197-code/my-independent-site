import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation Placeholder */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tight">BrandName</div>
          <div className="hidden space-x-8 md:flex">
            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
            <a href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">Features</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Build Your Future with Our Premium Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Experience the next generation of digital excellence. We provide the tools and expertise to scale your business to new heights.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                >
                  Start Free Trial
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-slate-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          {/* Background Decorative Element */}
          <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent opacity-50" />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Redefining the Industry Standards
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600 text-left md:text-center">
                Our mission is to simplify complex workflows and empower creators through innovative technology. 
                With years of experience in digital transformation, we understand what it takes to succeed in 
                today's fast-paced market.
              </p>
            </div>
          </div>
        </section>

        {/* Feature/Product Section */}
        <section id="features" className="bg-slate-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Core Features</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Everything you need to succeed
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {[
                  {
                    name: 'Lightning Fast',
                    description: 'Optimized for speed and performance, ensuring your users have a seamless experience.',
                    icon: '⚡',
                  },
                  {
                    name: 'Highly Secure',
                    description: 'Enterprise-grade security features built-in from the ground up to protect your data.',
                    icon: '🔒',
                  },
                  {
                    name: 'Full Analytics',
                    description: 'Deep insights into your business performance with our advanced dashboard.',
                    icon: '📊',
                  },
                ].map((feature) => (
                  <div key={feature.name} className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.02]">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                      <span className="text-2xl">{feature.icon}</span>
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to take the next step?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Join thousands of satisfied customers and start your journey today.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 py-12 text-slate-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <span className="text-xl font-bold text-white">BrandName</span>
              <p className="mt-4 max-w-xs text-sm leading-6">
                Leading the way in digital innovation and professional web solutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Solutions</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commerce</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs">
            <p>&copy; 2026 BrandName Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

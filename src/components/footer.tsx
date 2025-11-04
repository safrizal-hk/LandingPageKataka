export function Footer() {
  return (
    // Added background color, base text color, and adjusted border color
    <footer className="w-full bg-[#78959C] py-12 px-6 lg:px-12 border-t border-slate-500 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg text-white">Membasuh</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Premium shoe cleaning service with the highest quality standards in Jakarta.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Regular Clean
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Deep Clean
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Repaint
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Unyellowing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#whychooseus" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Surabaya, Indonesia</li>
              <li>+62 810000000</li>
              <li>hello@kataka.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright section */}
        <div className="pt-8 border-t border-slate-500 text-center">
          <p className="text-sm text-slate-300">© 2024 SneakClean Artsy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
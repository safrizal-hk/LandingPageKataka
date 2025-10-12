export function Footer() {
  return (
    <footer className="w-full py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">SC</span>
              </div>
              <span className="font-bold text-lg">SneakClean Artsy</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Layanan cuci sepatu premium dengan standar kualitas terbaik di Jakarta.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Layanan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cuci Reguler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Deep Clean
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Repaint
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Unyellowing
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Perusahaan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Kontak</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Jakarta, Indonesia</li>
              <li>+62 812-3456-7890</li>
              <li>hello@sneakcleanartsy.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2024 SneakClean Artsy. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

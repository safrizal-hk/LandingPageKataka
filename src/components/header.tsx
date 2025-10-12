"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/components/UseScroll/UseScroll";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasScrolled = useScrollPosition(10);

  const menuItems = [
    { name: "Benefits", href: "#benefits" },
    { name: "Services", href: "#services" },
    { name: "How-To", href: "#how-to" },
    { name: "Contact", href: "#contact" },
  ];

  const whatsappLink = "https://wa.me/6281234567890";

  return (
    <header
      className={`fixed left-0 right-0 z-50 px-6 lg:px-12 transition-all duration-300 ease-in-out ${
        hasScrolled ? "top-4" : "top-6"
      }`}
    >
      <nav
        className={`relative mx-auto flex items-center justify-between px-6 
                    bg-white/50 backdrop-blur-lg 
                    border border-white/30 shadow-lg rounded-full
                    transition-all duration-500 ease-in-out
                    ${
                      hasScrolled
                        ? "py-2 max-w-2xl"
                        : "py-4 max-w-6xl"
                    }
                    ${
                      isMobileMenuOpen
                        ? "scale-95 bg-white/70 backdrop-blur-xl"
                        : "scale-100"
                    }`}
      >
        {/* === Logo === */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="font-bold text-xl tracking-tight text-[#78959C]"
          >
            KATAKA
          </Link>
        </div>

        {/* === Menu Desktop === */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* === CTA & Hamburger === */}
        <div className="flex items-center gap-x-2">
          <Button
            asChild
            variant="outline"
            className="hidden md:flex rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
          >
            <Link href={whatsappLink} target="_blank">
              WhatsApp
            </Link>
          </Button>

          {/* === Hamburger Button === */}
          <button
            className="md:hidden flex flex-col space-y-1.5 p-2 z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* === Menu Mobile === */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 mt-4 rounded-2xl 
                       bg-white/60 backdrop-blur-2xl 
                       border border-white/30 shadow-2xl
                       animate-in fade-in slide-in-from-top-4 duration-300"
          >
            <div className="p-6 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                className="w-full mt-4 rounded-full border-slate-300 text-slate-700"
              >
                <Link href={whatsappLink} target="_blank">
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

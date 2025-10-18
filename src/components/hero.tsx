"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { crimsonText } from "@/lib/fonts";
import Image from "next/image";

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <section className="w-full py-32 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Animasi tambahan */}
        <div data-aos="fade-up" className="w-full">
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl tracking-tight mb-12 ${crimsonText.className}`}
          >
            Clean Shoes, Clean Planet.
          </h2>

          <Image
            src="/Hero image (1).png"
            alt="Clean shoes on rack"
            width={1200}
            height={700}
            className="rounded-[1rem] w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

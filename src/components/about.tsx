"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { crimsonText } from "@/lib/fonts";
import GlareHover from "@/components/GlareHover/GlareHover";
import Image from "next/image";

export function About() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <section id="about" className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* === KOLOM KIRI (Teks dengan animasi) === */}
        <div
          className="space-y-8"
          data-aos="fade-up"
        >
          <div className="space-y-6">
            <h1
              className={`text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-tight ${crimsonText.className}`}
            >
              About Kataka
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Since 2022, we&apos;ve focused on one thing — bringing sneakers
              back to their best condition. With a passion for detail and
              commitment to quality, we provide trusted cleaning services that
              make every pair look clean, fresh, and ready to wear again.
            </p>
          </div>
        </div>

        {/* === KOLOM KANAN (Gambar dengan animasi) === */}
        <div
          className="relative w-full max-w-xl mx-auto aspect-[4/3]"
          data-aos="fade-up"
        >
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.25}
            glareAngle={-35}
            glareSize={250}
            transitionDuration={800}
            playOnce={false}
            className="rounded-3xl overflow-hidden shadow-xl w-full h-full"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
            }}
          >
            <Image
              src="/how-to-clean-mesh-shoes.jpg"
              alt="Proses cuci sepatu mesh"
              fill
              className="object-cover"
            />
          </GlareHover>
        </div>
      </div>
    </section>
  );
}

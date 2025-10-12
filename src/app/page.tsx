"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { About } from "@/components/about";
import { WhyUs } from "@/components/why-us";
import { Services } from "@/components/services";
import { Footer } from "@/components/footer";
import GradualBlur from "@components/GradualBlur/GradualBlur";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== CONTENT SECTIONS ===== */}
      <div className="flex flex-col gap-24">
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Location />
        <Footer />
      </div>

      {/* ===== FIXED GRADUAL BLUR (STICK TO SCREEN) ===== */}
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-40">
        <GradualBlur
          target="page"        // Mengikuti layar, bukan parent
          position="bottom"        // Di bagian bawah viewport
          height="6rem"            // Tinggi area blur
          strength={2}             // Kekuatan efek blur
          divCount={5}             // Jumlah lapisan blur
          curve="bezier"           // Jenis kurva transisi
          exponential={true}       // Efek blur melengkung alami
          opacity={1}              // Blur jelas tapi tetap lembut
        />
      </div>
    </main>
  );
}

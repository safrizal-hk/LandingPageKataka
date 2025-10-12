
import { Crimson_Text } from "next/font/google";
import Image from "next/image";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function Hero() {
  return (
    // 1. Hapus padding horizontal (px-6 lg:px-12) dari sini
    <section className="w-full py-32 lg:py-32 bg-white">
      {/* 2. Tambahkan padding horizontal (px-6 lg:px-12) di sini */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
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
    </section>
  );
}
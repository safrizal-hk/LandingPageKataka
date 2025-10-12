
import { Crimson_Text } from "next/font/google";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export function Location() {
  return (
    <section className="w-full py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <h2
          className={`text-5xl md:text-6xl lg:text-7xl tracking-tight mb-12 ${crimsonText.className}`}
        >
          {/* Anda mungkin ingin mengubah judul ini agar sesuai dengan peta */}
          Location
        </h2>
        
        {/* === BAGIAN YANG DIUBAH === */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.923523169618!2d112.75972645157677!3d-7.271434454181289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbd38ea51a2f%3A0x2640d21feb8c9fd8!2sUniversitas%20Airlangga%20-%20Kampus%20Dharmawangsa%20(B)!5e0!3m2!1sid!2sid!4v1760243094601!5m2!1sid!2sid"
          width="1200"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[1rem] w-full h-[450px] md:h-[600px]"
        ></iframe>
        {/* === AKHIR BAGIAN YANG DIUBAH === */}

      </div>
    </section>
  );
}
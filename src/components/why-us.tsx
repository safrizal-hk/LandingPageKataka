import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Clock, Truck } from "lucide-react";
import { Crimson_Text } from "next/font/google";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const features = [
  {
    icon: Sparkles,
    title: "Premium Wash",
    description:
      "High-quality cleaning and advanced techniques for a like-new finish.",
  },
  {
    icon: Shield,
    title: "Safe Material",
    description:
      "Eco-friendly products safe for all shoe types and materials.",
  },
  {
    icon: Clock,
    title: "Quick Services",
    description:
      "Fast 24-48 hour process with consistent, high-quality results.",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description:
      "Free pickup and delivery across Surabaya and nearby areas.",
  },
];

export function WhyUs() {
  return (
    <section id="whywhooseus" className="w-full py-20 lg:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2
            className={`text-5xl lg:text-7xl tracking-tight text-balance ${crimsonText.className}`}
          >
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are dedicated to providing the best service through safe,
            sustainable cleaning methods combining premium quality with
            eco-friendly care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              // --- PERUBAHAN DI SINI ---
              // Tambahkan `hover:scale-105` untuk membuat kartu membesar 5% saat di-hover
              className="border-border bg-card hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#78959C] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
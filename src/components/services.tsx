import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crimson_Text } from "next/font/google";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// 1. Content translated to English
const services = [
  {
    title: "Regular Wash",
    price: "IDR 25k",
    description: "Comprehensive cleaning for your everyday shoes.",
    features: ["Exterior & interior cleaning", "Natural drying", "7-day warranty"],
  },
  {
    title: "Deep Clean",
    price: "IDR 45k",
    description: "Intensive cleaning for heavily soiled shoes.",
    features: ["Intensive stain treatment", "Material conditioning", "Deep cleaning", "14-day warranty"],
  },
  {
    title: "Repaint",
    price: "IDR 75k",
    description: "Restore the original color with a fresh coat of paint.",
    features: ["Original color analysis", "Premium quality paint", "Professional finishing", "30-day warranty"],
  },
  {
    title: "Unyellowing",
    price: "IDR 65k",
    description: "Removes yellowing from white and translucent soles.",
    features: ["Anti-yellowing treatment", "White color restoration", "UV protection", "21-day warranty"],
  },
];

export function Services() {
  return (
    // 2. Removed padding from the section
    <section id="services" className="w-full py-20 lg:py-32">
      {/* 2. Added a container with the requested max-width and padding */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2
            className={`text-5xl lg:text-7xl tracking-tight text-balance ${crimsonText.className}`}
          >
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the service that best suits your shoe&apos;s needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            // 4. Added hover:scale-105 to make the entire card grow
            <Card key={index} className="border-border bg-card hover:shadow-xl transition-all duration-300 group hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <span className="text-2xl font-bold text-foreground">{service.price}</span>
                </div>
                <p className="text-muted-foreground h-12">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* 3. Changed button background color and hover effect */}
                <Button className="w-full bg-[#78959C] text-white hover:bg-[#78959C]/90 group-hover:scale-105 transition-transform duration-300">
                  Choose Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
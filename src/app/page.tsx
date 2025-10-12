import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Location } from "@/components/location"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Location />
      <Footer />
    </main>
  )
}

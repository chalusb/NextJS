import HeroSlider from "@/components/HeroSlider"
import WelcomeSection from "@/components/WelcomeSection"
import PromotionalBanner from "@/components/PromotionalBanner"
import Services from "@/components/Services"
import ServiceBanner from "@/components/ServiceBanner"
import BlogBanner from "@/components/BlogBanner"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <WelcomeSection />
      <PromotionalBanner />
      <Services />
      <ServiceBanner />
      <BlogBanner />
    </main>
  )
}


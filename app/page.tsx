//import Image from 'next/image'

import FloatingButtons from '@/components/FloatingButtons'
import WhatsAppButton from '@/components/WhatsAppButton'
import QuoteForm from '@/components/QuoteForm'
import PromoCard from '@/components/PromoCard'
import CarCarousel from '@/components/CarCarousel'
import WantVolkswagen from '@/components/WantVolkswagen'
// ... otros imports
import VideoHero from '@/components/VideoHero'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      
      <VideoHero videoSrc="/assets/video/taos-hero.mp4" />

        <FloatingButtons />
        <WhatsAppButton />

        <QuoteForm />      

        <div className="container mx-auto px-4">
          <PromoCard
            title="Virtus"
            image="/assets/img/v1.jpg"
            price="295,300"
            monthly="3,399"
            commission="0% comisión por apertura"
            insurance="Seguro GRATIS"
          />

          <h2 className="text-4xl font-bold text-center my-16">
            Descubre todas las{" "}
            <span className="text-[#001E50]">promociones</span>
          </h2>

          <PromoCard
            title="Volkswagen Polo 2024"
            image="/assets/img/v2.jpg"
            price="279,570"
            monthly="2,799"
            commission="0% comisión por apertura"
            insurance="Seguro promocional"
          />

          <PromoCard
            title="Saveiro Robust 2025"
            image="/assets/img/v3.jpg"
            bonus="9,280"
            price="279,570"
            commission="0% comisión por apertura"
          />
        </div>

        <CarCarousel />
        <WantVolkswagen />
      
      
    </main>
  )
}


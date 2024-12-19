import Image from 'next/image'
import Header from '@/components/Header'
import FloatingButtons from '@/components/FloatingButtons'
import WhatsAppButton from '@/components/WhatsAppButton'
import QuoteForm from '@/components/QuoteForm'
import PromoCard from '@/components/PromoCard'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Video/Image Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Taos"
            alt="Volkswagen Taos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <Header />
        
        <div className="relative z-10 h-full flex flex-col justify-center px-8">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold text-white mb-4">
              Nuevo Taos
            </h1>
            <h2 className="text-4xl font-light text-white mb-2">
              El plan es disfrutar
            </h2>
            <p className="text-2xl text-white/90">
              Más que un S
            </p>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <div className="text-white text-sm">0:09 / 0:11</div>
        </div>
      </div>

      <FloatingButtons />
      <WhatsAppButton />

      <QuoteForm />

      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center my-16">
          Descubre todas las{" "}
          <span className="text-[#001E50]">promociones</span>
        </h2>

        <PromoCard
          title="Virtus"
          image="/assets/img/v1.jpg"
          price="295,300"
          monthly="3,399"
          commission="0% comisión por apertura"
          insurance="Seguro GRATIS"
        />        

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
          price="279,570"
          bonus="9,280"
          commission="0% comisión por apertura"
        />
      </div>
    </main>
  )
}


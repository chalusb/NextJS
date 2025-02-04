import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FinanceBanner() {
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/img/financiamiento/banner.jpg"
        alt="Ford Mustang y Bronco"
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Calcula tu Financiamiento</h2>
          <p className="text-lg md:text-xl text-white/90">
            Precio de Mensualidades y Plazos para adquirir a Crédito tu Vehículo Ford
          </p>
          <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90 text-white px-8 py-6 text-lg">
            <a href="/financiamiento/calcula">Conoce Más</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


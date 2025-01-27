import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PromotionalBanner() {
  return (
    <div className="relative">
      <div className="relative h-[380px] w-full">
        <Image src="/assets/img/image.promociones.jpg" alt="Promociones Ford" fill className="object-cover" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-8" style={{ marginTop: '20%' }}>        
          <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90 text-white px-8 py-6 text-lg mt-8">
            <a href="/promociones">Ver Promociones</a>
          </Button>
        </div>
      </div>
    </div>
  )
}


import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ServiceBanner() {
  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="relative w-full h-[500px]">
          <Image src="/assets/img/image.citaserv.jpg" alt="Ford Service" fill className="object-cover" priority />          
        </div>

        <div className="mt-8 flex flex-col items-center space-y-8">
          <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90 text-white px-8 py-6 text-lg">
            <a href="/agendar-servicio">Agenda una Cita de Servicio</a>
          </Button>

          <p className="text-sm text-[#4d4d4d] text-center">
            Consulta Términos y Condiciones en:{" "}
            <a
              href="https://www.ford.mx/legal/terminos-condiciones/"
              className="text-[#0276b3] hover:text-[#0276b3]/80 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ford.mx/legal/terminos-condiciones/
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}


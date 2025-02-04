import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ServiceAppointment() {
  return (
    <section className="relative bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">MANTÉN TU AUTO EN PERFECTAS CONDICIONES</h2>
            <p className="mb-6 text-gray-600">Realiza el servicio en tu Distribuidor Ford y llega a donde quieras.</p>
            <Button className="w-fit bg-blue-600 text-white hover:bg-blue-700">Agenda una Cita de Servicio</Button>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home-uLHI5puuPxoNJXG2FyaxOwwwqp9OCB.png"
              alt="Ford Service"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


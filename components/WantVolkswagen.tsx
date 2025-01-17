import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function WantVolkswagen() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">¿Quieres un Volkswagen?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/assets/img/banner-2.jpg"
              alt="¿Qué esperas?"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-2xl font-bold mb-2">¿Qué esperas?</h3>
              <Link href="/modelos" className="inline-flex items-center text-white hover:underline">
                Modelos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[250px]">
                <Image
                  src="/assets/img/banner-3.jpg"
                  alt="El modelo que quieres"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">El modelo que quieres, aquí y ahora</h3>
                <Link href="/promociones" className="inline-flex items-center text-[#001E50] hover:underline">
                  Promociones <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[250px]">
                <Image
                  src="/assets/img/banner-4.jpg"
                  alt="Somos tu compañero de viaje"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Somos tu compañero de viaje</h3>
                <Link href="/cita-servicio" className="inline-flex items-center text-[#001E50] hover:underline">
                  Cita de servicio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


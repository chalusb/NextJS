"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { DimensionsTable } from "./dimensions-table"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GalleryModal } from "./gallery-modal"

const cards = [
  {
    image: "/assets/img/Territory 25/des/4 modos de manejo.jpg",
    title: "4 Modos de Manejo",
    description: "Ford Territory 2025 es la SUV ideal para viajes en Carretera y Ciudad, gracias a sus 4 Modos de Manejo que te brindan la mejor experiencia, sólo tendrás que disfrutar el camino."
  },
  {
    image: "/assets/img/Territory 25/des/apariencia elegante y dinamica.jpg",
    title: "Apariencia Elegante y Dinámica",
    description: "Cada elemento del Diseño de Ford Territory 2025 destaca su personalidad, y apariencia distintiva y sofisticada. ¡Descúbrela!"
  }
]

const galleryImages = [
  {
    url: "/assets/img/Territory 25/des/galeria/ford-territory-2025-camioneta-caracteristicas-equipamiento-tecnologia.jpg",
    alt: "Territory frontal",
    title: "Diseño que Impresiona",
    description: "El frente de la Territory 2025 destaca por su imponente parrilla tipo panal y faros LED que le dan una presencia única en el camino. Su diseño aerodinámico y moderno refleja la evolución del lenguaje de diseño Ford."
  },
  {
    url: "/assets/img/Territory 25/des/galeria/ford-territory-2025-camioneta-suv-exterior-rines-llantas-19-pulgadas.jpg",
    alt: "Territory lateral",
    title: "Perfil Dinámico",
    description: "Las líneas laterales fluidas y los rines de aluminio de 19 pulgadas realzan el carácter deportivo de la Territory. Los detalles cromados y las barras de techo funcionales complementan su aspecto premium."
  },
  {
    url: "/assets/img/Territory 25/des/galeria/ford-territory-2025-camioneta-suv-motor-turbo-ecoboost-caballos-fuerza.jpg",
    alt: "Territory interior",
    title: "Interior Tecnológico",
    description: "El interior de la Territory 2025 fusiona confort y tecnología con su pantalla táctil de 12 pulgadas, cluster digital y acabados premium. El espacio interior optimizado ofrece una experiencia de viaje excepcional."
  },
  {
    url: "/assets/img/Territory 25/des/galeria/ford-territory-2025-camioneta-suv-parrilla-rines-dark-edition-version.jpg",
    alt: "Territory detalles",
    title: "Detalles Refinados",
    description: "Cada detalle de la Territory ha sido cuidadosamente diseñado para ofrecer una experiencia premium. Desde sus luces LED hasta sus acabados cromados, todo refleja calidad y sofisticación."
  }
]

export function GallerySection() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section className="relative">
      {/* Promotional Banners */}
      <div className="relative md:h-[400px] h-auto w-full bg-gray-100">
        {/* Desktop */} 
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/assets/img/Territory 25/des/banner-promociones.jpg"
            alt="Ford Territory 2025 Promociones"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Mobile */}
        <div className="block md:hidden w-full">
          <div className="relative w-full h-[300px]">
            <Image
              src="/assets/img/Territory 25/mb/banner-promociones.jpg"
              alt="Ford Territory 2025 Promociones"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="relative md:h-[400px] h-auto w-full bg-gray-100">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center h-full">
          <Image
            src="/assets/img/Territory 25/des/banner-numeralia.jpg"
            alt="Ford Mustang 2024"
            fill
            className="object-cover"
          />
        </div>
        {/* Mobile */}
        <div className="block md:hidden w-full">
          <div className="relative w-full h-[700px]">
            <Image
              src="/assets/img/Territory 25/mb/banner-numeralia.jpg"
              alt="Ford Territory 2025 Numeralia"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative md:h-[800px] h-auto w-full">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center h-full">
          <Image
            src="/assets/img/Territory 25/des/banner-tecnologia.jpg"
            alt="Ford Mustang 2024"
            fill
            className="object-cover"
            priority
            />
        </div>
        {/* Mobile */}
        <div className="block md:hidden w-full">
          <div className="relative w-full h-[700px]">
            <Image
              src="/assets/img/Territory 25/mb/banner-tecnologia.jpg"
              alt="Ford Territory 2025 Tecnología"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center max-w-4xl px-4 mb-4">
            Tecnología en cada kilómetro
          </h2>
          <p className="text-white text-center max-w-4xl px-4 text-xl font-light leading-relaxed">
            Pensada para ofrecerte una conducción de gran control y comodidad, la SUV Ford Territory 2025 está equipada con el conjunto de Asistencias de Manejo Avanzadas Ford Co-Pilot360®, tecnologías que son de gran utilidad al maniobrar y transportarte por la ciudad o la carretera:
            Control de Crucero
            Monitoreo de Punto Ciego BLIS® con Alerta de Tráfico Cruzado
            Sensores de Reversa
          </p>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto">

          {/* Welcome Mat Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-16">
            <div className="relative aspect-video">
              <Image
                src="/assets/img/Territory 25/des/comodidad y conectividad.jpg"
                alt="Ford Territory 2025"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-3xl font-light">Comodidad y Conectividad</h2>
              <p className="text-gray-600">Sincroniza tu Smartphone de manera inalámbrica y mantente siempre alerta al camino con la Pantalla Táctil de 12" con Apple CarPlay® y Android Auto® equipada en Ford Territory 2025 que, en conjunto con el clúster digital de 12"* ofrece un diseño interior Dinámico y Tecnológico.
              <br />
              <br />
              *Consulta el equipamiento por Versiones.
              </p>

            </div>
          </div>
          {/* Espacio Interior */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-16">
            <div className="space-y-4 order-2 md:order-1 md:text-left text-center">
              <h2 className="text-2xl md:text-3xl font-light">Espacio Interior</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Disfruta de la libertad que brinda el gran espacio interior de Ford Territory 2025, para que tanto conductor como todos los pasajeros viajen con gran comodidad
              </p>
            </div>
            <div className="relative aspect-video order-1 md:order-2">
              <Image
                src="/assets/img/Territory 25/des/espacio interior.jpg"
                alt="Ford Territory 2025"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 items-center justify-center text-center">
              <h2 className="text-4xl font-light">
                Cautivador Diseño
              </h2>
              <p className="text-gray-600 leading-relaxed">
                El dinámico Diseño Exterior de Ford Territory 2025, brinda presencia y destaca en cada camino. Gracias a los detalles en color negro de la versión Dark Edition, Ford Territory 2025 refleja tu Estilo y Personalidad únicos.
              </p>
            </div>
          </div>
          <div className="relative md:h-[450px] h-[200px] w-full bg-gray-100">
            <div className="flex items-center justify-center h-full">
              <Image
                src="/assets/img/Territory 25/des/cautivador disenio.jpg"
                alt="Ford Territory 2025"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {cards.map((card, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative h-[300px] mb-6">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-100 w-full h-full flex items-center justify-center rounded-lg">
                        <p className="text-gray-500">Imagen pendiente: {card.title}</p>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-light text-[#002776] mb-4 text-center md:text-left md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center md:text-left">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto">

              {/* Welcome Mat Feature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-16">
                <div className="relative aspect-video">
                  <Image
                    src="/assets/img/Territory 25/des/seguridad.jpg"
                    alt="Ford Territory 2025"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <h2 className="text-2xl font-light md:text-4xl text-center md:text-left">Seguridad</h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center md:text-left">
                    Para cuidar de ti en todo momento, Ford Territory 2025 ofrece una serie de Asistencias de seguridad:
                  </p>

                  <ul className="list-disc ml-4 text-gray-600">
                    <li>6 Bolsas de Aire (frontales y laterales, conductor y pasajero y tipo cortina)</li>
                    <li>Cinturones de seguridad con limitadores</li>
                    <li>Frenos de disco en las 4 ruedas</li>
                    <li>Sistema Antibloqueo ABS</li>
                    <li>Sistema de Distribución Electrónica de Frenado EBD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Galeria */}
          <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-light mb-12 text-center">Galería</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <GalleryModal key={index} image={image} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dimensions Table Component */}
      <DimensionsTable />
    </section>
  )
} 
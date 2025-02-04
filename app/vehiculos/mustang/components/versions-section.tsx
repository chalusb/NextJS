"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const versions = [
  {
    name: "EcoBoost® Premium",
    price: "$1,011,000",
    image: "/assets/img/Mustang 24/web/Versiones/ford-mustang-2024-auto-deportivo-sedan-version-motor-ecoboost-premium.png"
  },
  {
    name: "V8 GT Manual",
    price: "$1,241,000",
    image: "/assets/img/Mustang 24/web/Versiones/ford-mustang-2024-auto-deportivo-version-motor-gtv8-transmision-manual.png"
  },
  {
    name: "V8 GT Automático",
    price: "$1,291,000",
    image: "/assets/img/Mustang 24/web/Versiones/ford-mustang-2024-deportivo-version-motor-gt-v8-transmision-automatica.png"
  },
  {
    name: "V8 GT Automático Convertible",
    price: "$1,396,000",
    image: "/assets/img/Mustang 24/web/Versiones/ford-mustang-2024-deportivo-convertible-version-motor-gt-v8-automatico.png"
  },
  {
    name: "Dark Horse",
    price: "$1,655,000",
    image: "/assets/img/Mustang 24/web/Versiones/ford-mustang-dark-horse-2024-edicion-especial-auto-deportivo-potencia.png"
  }
]

export function VersionesSection() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const showCarousel = versions.length > 4

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="bg-white py-16">
      <div className="mx-auto 2xl:container px-4">
        {/* Desktop */}
        <div className="hidden lg:flex justify-between items-center mb-12">
          <h2 className="text-4xl font-light">
            Versiones de Ford Mustang 2024
          </h2>
          <button
            className="text-[#41B0FC] hover:text-[#002776] transition-colors border border-[#41B0FC] px-8 py-2 rounded-md"
          >
            Comparador de versiones
          </button>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl font-light mx-10 text-center">
            Versiones de Ford Mustang 2024
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden flex flex-col items-center ">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {versions.map((version, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="flex flex-col items-center">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={version.image}
                        alt={version.name}
                        width={300}
                        height={300}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-[#41B0FC] text-xl mb-2 font-extralight">{version.name}</h3>
                    <p className="text-xl font-light mb-4">{version.price}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <button
            className="text-[#41B0FC] hover:text-[#002776] transition-colors border border-[#41B0FC] px-8 py-4"
          >
            Comparador de versiones
          </button>

        </div>



        {/* Desktop View */}
        <div className="hidden lg:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: showCarousel ? 1 : 4,
              startIndex: 0,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {versions.map((version, index) => (
                <CarouselItem key={index} className="basis-1/4">
                  <div className="flex flex-col">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={version.image}
                        alt={version.name}
                        width={300}
                        height={300}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-[#41B0FC] text-xl mb-2">{version.name}</h3>
                    <p className="text-2xl font-light mb-4">{version.price}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>


        {/* Dots Navigation - Visible en móvil y en desktop cuando hay más de 4 elementos */}
        <div className={`flex justify-center gap-2 mt-8 ${!showCarousel && 'lg:hidden'}`}>
          {versions.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${current === index ? 'bg-[#41B0FC]' : 'bg-gray-300'
                }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Ir a versión ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="/assets/img/Mustang 24/web/Catalogo/ford-mustang-2024-catalogo-descargable.pdf"
            download
            className="bg-[#2d96cd] text-white hover:bg-white hover:text-[#2d96cd] text-sm hover:border-[#2d96cd] px-8 py-2 hover:border-2 cursor-pointer"
          >
            Catálogo Descargable
          </a>
        </div>
      </div>
    </section>
  )
} 
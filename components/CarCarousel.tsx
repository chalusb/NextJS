'use client'

import Image from 'next/image'
//import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface CarModel {
  name: string
  image: string
  price: string
  year: string
}

const carModels: CarModel[] = [
  {
    name: "Volkswagen Polo",
    image: "/assets/img/carrousel/vw-modelos-VOLKSWAGEN-POLO-2024.png",
    price: "279,570",
    year: "2024"
  },
  {
    name: "Nuevo Saveiro",
    image: "/assets/img/carrousel/vw-modelos-NUEVO-SAVEIRO-2025.png",
    price: "333,182",
    year: "2025"
  },
  {
    name: "Nuevo Saveiro Extreme",
    image: "/assets/img/carrousel/vw-modelos-NUEVO-SAVEIRO-EXTREME-2025.png",
    price: "423,082",
    year: "2025"
  },
  {
    name: "Virtus",
    image: "/assets/img/carrousel/vw-modelos-VIRTUS-2024.png",
    price: "312,070",
    year: "2024"
  }
]

export default function CarCarousel() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl font-bold">
            Elige tu<br />
            <span className="text-4xl">Volkswagen</span>
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {carModels.map((car, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{car.name} {car.year}</h3>
                    <p className="text-sm text-gray-600 mb-4">Desde: ${car.price}</p>
                    <div className="space-y-2">
                      <Button className="w-full bg-[#001E50] hover:bg-[#001E50]/90">
                        Quiero cotizarlo
                      </Button>
                      <Button variant="outline" className="w-full border-[#001E50] text-[#001E50]">
                        Descúbrelo
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}


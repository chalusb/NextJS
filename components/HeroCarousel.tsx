"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const slides = [
  {
    image: "/placeholder.svg?height=600&width=1600&text=Ford+100+Years",
    title: "100 AÑOS ABRIENDO CAMINO EN MÉXICO",
    description: "Celebrando un siglo de innovación y excelencia",
  },
  // Add more slides as needed
]

export default function HeroCarousel() {
  return (
    <Carousel className="relative w-full">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[600px] w-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover brightness-75"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <Image
                  src="/placeholder.svg?height=100&width=200&text=Ford"
                  alt="Ford Logo"
                  width={200}
                  height={100}
                  className="mb-8"
                />
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
    </Carousel>
  )
}


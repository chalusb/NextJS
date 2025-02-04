"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useState, useEffect as ReactuseEffect } from "react"
import { cn } from "@/lib/utils"
import type { CarouselApi } from "@/components/ui/carousel"

const options = [
  {
    id: 1,
    title: "Estrena el Ford Ideal para Ti",
    description:
      "Encuentra Autos, SUVs, Camiones, Híbridos y Vehículos Comerciales que podrás financiar con Ford Credit.",
    image: "/assets/img/financiamiento/financeoptions (2).jpg",
    buttonText: "Conoce más",
    buttonHref: "/financiamiento/",
  },
  {
    id: 2,
    title: "Promociones en Vehículos Ford",
    description:
      "Encuentra Descuentos, Meses sin Intereses, Bonos y otros beneficios de comprar tu Vehículo Ford con el Financiamiento Automotriz Ford Credit.",
    image: "/assets/img/financiamiento/financeoptions (1).jpg",
    buttonText: "Conoce más",
    buttonHref: "/financiamiento/",
  },
]

export function FinanceOptions() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  // Update the active slide when the carousel changes
  ReactuseEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setActiveSlide(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {options.map((option) => (
            <div key={option.id} className="space-y-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src={option.image || "/placeholder.svg"} alt={option.title} fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-[#4d4d4d] font-medium">{option.title}</h2>
                <p className="text-[#4d4d4d] leading-relaxed">{option.description}</p>
                <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90">
                  <a href={option.buttonHref}>{option.buttonText}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {options.map((option) => (
                <CarouselItem key={option.id}>
                  <div className="space-y-6">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src={option.image || "/placeholder.svg"}
                        alt={option.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-2xl text-[#4d4d4d] font-medium">{option.title}</h2>
                      <p className="text-[#4d4d4d] leading-relaxed">{option.description}</p>
                      <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90">
                        <a href={option.buttonHref}>{option.buttonText}</a>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {options.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  activeSlide === index ? "bg-[#0276b3]" : "bg-gray-300",
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


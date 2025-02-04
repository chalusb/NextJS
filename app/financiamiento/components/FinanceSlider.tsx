"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
    {
        id: 1,
        title: "Plan Multiopción",
        subtitle: "Plan de Financiamiento Automotriz a tu Medida",
        image: "/assets/img/financiamiento/financiamiento (1).jpg", 
        ctaText: "Conoce Más",
        ctaLink: "/financiamiento/multiopcion",
    },
    {
        id: 2,
        title: "Educación Financiera",
        subtitle: "Información para tu Crédito Automotriz",
        image: "/assets/img/financiamiento/financiamiento (2).jpg", 
        ctaText: "Conoce Más",
        ctaLink: "/financiamiento/educacion",
    },
  
]

export function FinanceSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Background Image */}
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white">{slide.title}</h1>
              <p className="text-xl md:text-3xl text-white font-light">{slide.subtitle}</p>
              <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90 text-white mt-4 px-8 py-6 text-lg">
                <a href={slide.ctaLink}>{slide.ctaText}</a>
              </Button>
            </div>
          </div>          
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentSlide ? "bg-white" : "bg-white/50",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


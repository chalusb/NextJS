"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/assets/img/slider/slider (1).jpg?height=400&width=1400",
    title: "",
    ctaText: "",
    ctaLink: "",
  },
  {
    id: 2,
    image: "/assets/img/slider/slider (3).jpg?height=400&width=1400",
    title: "Ford Mustang GTD",
    ctaText: "Descúbrelo",
    ctaLink: "/vehiculos",
  },
  {
    id: 3,
    image: "/assets/img/slider/slider (2).jpg?height=400&width=1400",
    title: "",
    ctaText: "",
    ctaLink: "",
  },
  // More slides can be added here
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-[400px] w-full overflow-hidden  ">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="h-full flex flex-col mt-7">
              <div className="max-w-xl">
                {slide.title && (
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">{slide.title}</h1>
                )}
                {slide.ctaText && slide.ctaLink && (
                  <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90 text-white px-8 py-6 text-lg">
                    <a href={slide.ctaLink}>{slide.ctaText}</a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-4 md:px-8">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-white/80 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-white/80 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#0276b3]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


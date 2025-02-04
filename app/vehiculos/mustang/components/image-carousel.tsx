"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = Array.from({ length: 40 }, (_, i) => ({
  src: `/assets/img/Mustang 24/web/360/${(i + 1).toString().padStart(2, '0')}.png`,
  alt: `Ford Mustang 2024 vista ${i + 1}`
}))

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="md:text-3xl text-xl font-light">Exterior 360°</h2>
        
        <div className="relative">
          {/* Controles */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-16 -translate-y-1/2 p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-16 -translate-y-1/2 p-2 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          {/* Imagen Principal */}
          <div className="relative aspect-[16/9]">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority={currentIndex === 0}
            />
          </div>

          {/* Miniaturas
          <div className="mt-4 flex gap-2 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 relative w-24 h-16 rounded-lg overflow-hidden ${
                  currentIndex === index ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
} 
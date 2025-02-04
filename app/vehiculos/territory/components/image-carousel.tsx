"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = Array.from({ length: 36 }, (_, i) => ({
  src: `/assets/img/Territory 25/des/360/${(i + 1).toString().padStart(2, '0')}.jpg`,
  alt: `Ford Territory 2025 vista ${i + 1}`
}))

// /assets/img/Territory 25/mb/interiores/01.jpg

const interiorImages = [
  {
    desktop: "/assets/img/Territory 25/des/interiores/01.jpg",
    mobile: "/assets/img/Territory 25/mb/interiores/01.jpg",
    alt: "Asientos de Tela en Color Negro",
    title: "Asientos de Tela en Color Negro",
    description: "Disponible en versiones: Ambiente y Trend"
  },
  {
    desktop: "/assets/img/Territory 25/des/interiores/02.jpg",
    mobile: "/assets/img/Territory 25/mb/interiores/02.jpg",
    alt: "Asientos Vinipiel",
    title: "Asientos Vinipiel en Color Arena (también disponibles en Negro)",
    description: "Disponible en versiones: Trend"
  },
  {
    desktop: "/assets/img/Territory 25/des/interiores/03.jpg",
    mobile: "/assets/img/Territory 25/mb/interiores/03.jpg",
    alt: "Asientos en Piel Bitono Arena/Negro",
    title: "Asientos en Piel Bitono Color Arena/Negro",
    description: "Disponible en versión: Titanium"
  },
  {
    desktop: "/assets/img/Territory 25/des/interiores/04.jpg",
    mobile: "/assets/img/Territory 25/mb/interiores/04.jpg",
    alt: "Asientos en Piel Bitono Negro/Azul",
    title: "Asientos en Piel Bitono Color Negro/Azul",
    description: "Disponible en versión: Titanium"
  }
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentInteriorIndex, setCurrentInteriorIndex] = useState(0)

  // Funciones para el slider 360
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

  // Funciones para el slider de interiores
  const nextInteriorSlide = () => {
    setCurrentInteriorIndex((prevIndex) =>
      prevIndex === interiorImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevInteriorSlide = () => {
    setCurrentInteriorIndex((prevIndex) =>
      prevIndex === 0 ? interiorImages.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="bg-white">
      {/* Slider Interiores */}
      <section className="py-8">
        <div className="mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">Interiores de Ford Territory 2025</h2>

          <div className="relative">
            {/* Flechas solo visibles en desktop */}
            <button
              onClick={prevInteriorSlide}
              className="hidden md:block absolute top-1/2 -left-16 -translate-y-1/2 p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button
              onClick={nextInteriorSlide}
              className="hidden md:block absolute top-1/2 -right-16 -translate-y-1/2 p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="relative aspect-[16/9] h-full md:h-[500px] w-full">
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image
                  src={interiorImages[currentInteriorIndex].desktop}
                  alt={interiorImages[currentInteriorIndex].alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src={interiorImages[currentInteriorIndex].mobile}
                  alt={interiorImages[currentInteriorIndex].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Título y descripción */}
            <div className="text-center mt-6">
              <h3 className="text-xl md:text-2xl font-light text-[#002776]">
                {interiorImages[currentInteriorIndex].title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-2">
                {interiorImages[currentInteriorIndex].description}
              </p>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {interiorImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${currentInteriorIndex === index ? 'bg-[#41B0FC]' : 'bg-gray-300'
                    }`}
                  onClick={() => setCurrentInteriorIndex(index)}
                  aria-label={`Ir a interior ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Slider 360° */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light">Vista 360°</h2>

          <div className="relative">
            {/* Flechas solo visibles en desktop */}
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

            <div className="relative aspect-[16/9] -mx-4 md:mx-0">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain md:object-cover"
                priority={currentIndex === 0}
              />
            </div>
          </div>
        </div>
      </section>


    </div>
  )
} 
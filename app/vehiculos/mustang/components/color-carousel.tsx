"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"

const colors = [
  {
    name: "Azul Icónico",
    image: "/assets/img/Mustang 24/web/Colores/AzulIcnico.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/AzulIcnico.png"
  },
  {
    name: "Azul Atlas",
    image: "/assets/img/Mustang 24/web/Colores/AzulAtlas.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/AzulAtlas.png"
  },
  {
    name: "Negro Ocaso",
    image: "/assets/img/Mustang 24/web/Colores/NegroOcaso.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/NegroOcaso.png"
  },
  {
    name: "Gris Magneto",
    image: "/assets/img/Mustang 24/web/Colores/GrisMagneto.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/GrisMagneto.png"
  },
  {
    name: "Plata",
    image: "/assets/img/Mustang 24/web/Colores/Plata.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/Plata.png"
  },
  {
    name: "Gris Carbono",
    image: "/assets/img/Mustang 24/web/Colores/GrisCarbono.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/GrisCarbono.png"
  },
  {
    name: "Azul Nébula",
    image: "/assets/img/Mustang 24/web/Colores/AzulNbula.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/AzulNbula.png"
  },
  {
    name: "Blanco Oxford",
    image: "/assets/img/Mustang 24/web/Colores/BlancoOxford.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/BlancoOxford.png"
  },
  {
    name: "Amarillo Solar",
    image: "/assets/img/Mustang 24/web/Colores/AmarilloSolar.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/AmarilloSolar.png"
  },
  {
    name: "Rojo Racing",
    image: "/assets/img/Mustang 24/web/Colores/RojoRacing.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/RojoRacing.png"
  },
  {
    name: "Rojo Cereza",
    image: "/assets/img/Mustang 24/web/Colores/RojoCereza.png",
    thumb: "/assets/img/Mustang 24/web/Colores/Thumb/RojoCereza.png"
  },
]

export default function ColorCarousel() {
  const [selectedColor, setSelectedColor] = useState(colors[0])

  return (
    <section className="py-8 bg-white">
      <div className="mx-auto px-4">
        <h2 className="md:text-2xl text-lg font-light text-center mb-2">Disponible en</h2>
        <p className="md:text-xl text-lg font-light text-gray-400 text-center">Elige el color de tu preferencia</p>
        
        <div className="mx-auto max-w-[1920px]">
          <h3 className="text-xl font-medium text-center mt-4">{selectedColor.name}</h3>

          {/* Imagen principal más grande */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] xl:aspect-[28/9]">
            <Image
              src={selectedColor.image}
              alt={`Mustang en color ${selectedColor.name}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Selector de colores en dos filas para móvil */}
          <div className="flex flex-wrap justify-center max-w-[300px] mx-auto md:max-w-none md:flex-nowrap gap-2 md:gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className="relative w-10 h-10 md:w-16 md:h-16"
              >
                <div className={`relative w-full h-full rounded-full overflow-hidden ${
                  selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-blue-600' : ''
                }`}>
                  <Image
                    src={color.thumb}
                    alt={color.name}
                    fill
                    className="object-cover"
                  />
                  {selectedColor.name === color.name && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/30">
                      <Check className="w-6 h-6 md:w-10 md:h-10 text-blue-400 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-2 md:gap-4 mt-8">
            <button className="text-lg font-light text-white hover:text-[#2D96CD] bg-[#2D96CD] hover:bg-white transition-colors border border-gray-300 md:px-12 md:py-2 px-24 py-2">
              Configura
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 
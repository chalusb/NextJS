"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const blogPosts = [
  {
    image: "/assets/img/Mustang 24/web/Blog/formustang56aos.png", // Placeholder para la imagen con el avión
    title: "Ford Mustang:",
    subtitle: "56 años de ser un Pilar en el Automovilismo",
    link: "#"
  },
  {
    image: "/assets/img/Mustang 24/web/Blog/Los5FordMustangmas.png", // Placeholder para la imagen de los 5 Mustangs
    title: "Los 5 Ford Mustang más",
    subtitle: "Emblemáticos de la Historia",
    link: "#"
  },
  {
    image: "/assets/img/Mustang 24/web/Blog/FordMustangelmusclecar.png", // Placeholder para la imagen del Mustang amarillo
    title: "Ford Mustang,",
    subtitle: "el Muscle Car más vendido del mundo",
    link: "#"
  }
]

export function BlogSection() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      {/* Blog Section */}
      <section className="bg-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-light text-center mb-12">
            Descubre más Información en el Blog de Ford de México
          </h2>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="flex flex-col h-full bg-white rounded-lg">
                  <div className="relative h-[200px] w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-6 text-center">
                    <div className="flex-grow flex flex-col justify-center min-h-[120px]">
                      <h3 className="text-[#41B0FC] text-2xl font-light leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-[#41B0FC] text-2xl font-light mt-2">
                        {post.subtitle}
                      </p>
                    </div>
                    <div className="mt-6">
                      <button className="bg-[#41B0FC] text-white px-8 py-2 rounded hover:bg-[#2d96cd] transition-colors w-full md:w-auto">
                        Leer más
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={setApi}
            >
              <CarouselContent>
                {blogPosts.map((post, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col h-full">
                      <div className="flex flex-col h-full bg-white rounded-lg">
                        <div className="relative h-[200px] w-full">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col flex-grow p-6 text-center">
                          <div className="flex-grow flex flex-col justify-center min-h-[120px]">
                            <h3 className="text-[#41B0FC] text-2xl font-light leading-tight">
                              {post.title}
                            </h3>
                            <p className="text-[#41B0FC] text-2xl font-light mt-2">
                              {post.subtitle}
                            </p>
                          </div>
                          <div className="mt-6">
                            <button className="bg-[#41B0FC] text-white px-8 py-2 rounded hover:bg-[#2d96cd] transition-colors w-full">
                              Leer más
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {blogPosts.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    current === index ? 'bg-[#41B0FC]' : 'bg-gray-300'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Ir a post ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#1B394E] py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-2 gap-16 items-center justify-center">
            {/* Cotízalo - Desktop */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-[#3093CD] rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/assets/img/Mustang 24/web/Iconos/04.png"
                      alt="Cotízalo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-[#3093CD] text-2xl font-light">Cotízalo</h3>
            </div>

            {/* Catálogo - Desktop */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 relative">
                <div className="absolute inset-0 bg-[#3093CD] rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/assets/img/Mustang 24/web/Iconos/05.png"
                      alt="Catálogo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-[#3093CD] text-2xl font-light">Catálogo Descargable</h3>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Cotízalo - Mobile */}
            <div className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-[#3093CD] rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/assets/img/Mustang 24/web/Iconos/04.png"
                      alt="Cotízalo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-[#3093CD] text-lg font-light">Cotízalo</h3>
            </div>

            {/* Catálogo - Mobile */}
            <div className="flex flex-row items-center gap-4">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-[#3093CD] rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/assets/img/Mustang 24/web/Iconos/05.png"
                      alt="Catálogo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-[#3093CD] text-lg font-light">Catálogo Descargable</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 
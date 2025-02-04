"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const features = [
    {
        icon: "/assets/img/Territory 25/mb/iconos/01.png",
        title: "Asistencias Ford Co-Pilot360®",
        description: "Tecnologías de Seguridad Ford Co-Pilot360® para un Máximo Confort"
    },
    {
        icon: "/assets/img/Territory 25/mb/iconos/02.png",
        title: "Diseño y Confort",
        description: "Experiencia dinámica y cómodo equipamiento de gran tecnología"
    },
    {
        icon: "/assets/img/Territory 25/mb/iconos/03.png",
        title: "Gran Rendimiento para la Ciudad",
        description: "Motor 1.8L Turbo EcoBoost® I4 de 187HP Y 236 lb-pie de Torque"
    }
]

export function DetailsSection() {
    const [api, setApi] = useState<any>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) return
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <section className="bg-white py-12">
            <div className="mx-auto 2xl:container">
                {/* Mobile view */}
                <div className="md:hidden grid grid-cols-1 gap-8 px-4">
                    {/* Precio */}
                    <div className="space-y-2 border-b pb-8">
                        <h3 className="text-gray-600">Precio</h3>
                        <p className="text-lg font-light">
                            $599,000 - $795,000
                        </p>
                    </div>

                    {/* Motor 2.3L */}
                    <div className="flex flex-row pb-8 gap-16">
                        <div>
                            <h3 className="text-gray-600">Motor 1.8L Turbo</h3>
                            <p className="text-sm">EcoBoost® 14</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium">de 187HP</p>
                            <p className="text-sm font-medium">y 236 lb-pie</p>
                            <p className="text-sm font-medium">de Torque</p>
                        </div>
                    </div>


                    {/* Pasajeros */}
                    <div className="flex flex-row justify-between border-b pb-8">
                        <h3 className="text-gray-600 text-sm">Pasajeros</h3>
                        <p className="text-sm font-light">5</p>
                    </div>
                </div>

                {/* Desktop view */}
                <div className="hidden md:grid md:grid-cols-6 gap-8 px-4">
                    {/* Precio - ocupa 3 columnas (mitad del espacio) */}
                    <div className="md:col-span-4 space-y-2">
                        <h3 className="text-gray-600">Precio</h3>
                        <p className="text-3xl font-light">
                            $599,000 - $795,000
                        </p>
                    </div>

                    {/* Motor 2.3L - ocupa 1 columna */}
                    <div className="space-y-2">
                        <h3 className="text-gray-600">Motor 1.8L Turbo</h3>
                        <p className="text-lg">
                            EcoBoost® 14
                            <br />
                            de 187HP
                            <br />
                            y 236 lb-pie
                            <br />
                            de Torque
                        </p>
                    </div>

                    {/* Pasajeros - ocupa 1 columna */}
                    <div className="space-y-2">
                        <h3 className="text-gray-600">Pasajeros</h3>
                        <p className="text-3xl font-light">5</p>
                    </div>
                </div>

                {/* Título y descripción */}
                <div className="mt-16 px-4 text-center">
                    <h2 className="md:text-4xl text-2xl font-light mb-6">
                        Ford Territory 2025: Tecnología y Rendimiento en una SUV
                    </h2>
                    <p className="md:text-lg text-sm font-light text-gray-400 max-w-4xl mx-auto mb-16">
                        Disfruta de viajes seguros y placenteros con tu familia gracias al amplio espacio y moderno diseño de Ford Territory 2025, SUV de Gran Tecnología que ofrece todo lo que necesitas para convertir cada viaje en una experiencia inolvidable.
                    </p>

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
                                {features.map((feature, index) => (
                                    <CarouselItem key={index} className="w-full">
                                        <div className="flex flex-col items-center px-4">
                                            <Image src={feature.icon} alt={feature.title} width={60} height={60} className="mb-4" />
                                            <h3 className="text-[#002776] text-lg mb-4">{feature.title}</h3>
                                            <p className="text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>

                        {/* Dots Navigation */}
                        <div className="flex justify-center gap-2 mt-8">
                            {features.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${current === index ? 'bg-[#41B0FC]' : 'bg-gray-300'
                                        }`}
                                    onClick={() => api?.scrollTo(index)}
                                    aria-label={`Ir a característica ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center">
                            <Image src={feature.icon} alt={feature.title} width={80} height={80} className="mb-4" />
                            <h3 className="text-[#002776] text-2xl mb-4">{feature.title}</h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 
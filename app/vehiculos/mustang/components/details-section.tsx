"use client"
import Image from "next/image"
import { Car, Gauge, Cog } from "lucide-react"
import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const features = [
    {
        icon: "/assets/img/Mustang 24/web/Iconos/icono-01.png",
        title: "Nuevo Diseño",
        description: "Descubre el Diseño y Equipamiento de Ford Mustang 2024, la 7ª Generación del Auto Deportivo"
    },
    {
        icon: "/assets/img/Mustang 24/web/Iconos/icono-02.png",
        title: "Potencia Inigualable",
        description: "Domina las pistas con el Gran Desempeño del Motor 5.0L V8 de 486HP y 418 lb-pie Torque"
    },
    {
        icon: "/assets/img/Mustang 24/web/Iconos/icono-03.png",
        title: "Conducción Tecnológica",
        description: "Desde su Clúster Digital y Modos de Manejo hasta su equipamiento de FordPass® Connect"
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
                            $1,011,000 - $1,655,000
                        </p>
                    </div>

                    {/* Motor 2.3L */}
                    <div className="flex flex-row pb-8 gap-16">
                        <div>
                            <h3 className="text-gray-600 text-sm">Motor 2.3L</h3>
                            <p className="text-sm">EcoBoost®</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium">con 315HP</p>
                            <p className="text-sm font-medium">y 350 lb-pie</p>
                            <p className="text-sm font-medium">de Torque</p>
                        </div>
                    </div>

                    {/* Motor 5.0L */}
                    <div className="flex flex-row pb-8 gap-16">
                        <div>
                            <h3 className="text-gray-600 text-sm">Motor 5.0L V8</h3>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium">de 486HP</p>
                            <p className="text-sm font-medium">y 418 lb-pie</p>
                            <p className="text-sm font-medium">de Torque</p>
                        </div>
                    </div>

                    {/* Pasajeros */}
                    <div className="flex flex-row justify-between border-b pb-8">
                        <h3 className="text-gray-600 text-sm">Pasajeros</h3>
                        <p className="text-xl font-light">4</p>
                    </div>
                </div>

                {/* Desktop view */}
                <div className="hidden md:grid md:grid-cols-6 gap-8 px-4">
                    {/* Precio - ocupa 3 columnas (mitad del espacio) */}
                    <div className="md:col-span-3 space-y-2">
                        <h3 className="text-gray-600">Precio</h3>
                        <p className="text-3xl font-light">
                            $1,011,000 - $1,655,000
                        </p>
                    </div>

                    {/* Motor 2.3L - ocupa 1 columna */}
                    <div className="space-y-2">
                        <h3 className="text-gray-600">Motor 2.3L EcoBoost®</h3>
                        <p className="text-lg">
                            con 315HP
                            <br />
                            y 350 lb-pie
                            <br />
                            de Torque
                        </p>
                    </div>

                    {/* Motor 5.0L - ocupa 1 columna */}
                    <div className="space-y-2">
                        <h3 className="text-gray-600">Motor 5.0L V8</h3>
                        <p className="text-lg">
                            de 486HP
                            <br />
                            y 418 lb-pie
                            <br />
                            de Torque
                        </p>
                    </div>

                    {/* Pasajeros - ocupa 1 columna */}
                    <div className="space-y-2">
                        <h3 className="text-gray-600">Pasajeros</h3>
                        <p className="text-3xl font-light">4</p>
                    </div>
                </div>

                {/* Título y descripción */}
                <div className="mt-16 px-4 text-center">
                    <h2 className="md:text-4xl text-2xl font-light mb-6">
                        Ford Mustang 2024: 7 Generaciones de Deportividad
                    </h2>
                    <p className="md:text-lg text-sm font-light text-gray-400 max-w-4xl mx-auto mb-16">
                        Conoce al Heredero de la Tradición de los Muscle Car; Ford Mustang 2024, que en su Séptima Generación es el Vehículo Deportivo ideal para los entusiastas de una conducción Dinámica y Deportiva. Enamórate de las líneas de su espectacular rediseño y descubre cada elemento que ofrece a este Poderoso Auto.
                    </p>

                    {/* Mobile Carousel */}
                    {/* <div className="md:hidden">
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
                                            <feature.icon className="w-12 h-12 text-[#002776] mb-4" />
                                            <h3 className="text-[#002776] text-2xl mb-4">{feature.title}</h3>
                                            <p className="text-gray-600">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel> */}

                        {/* Dots Navigation */}
                        {/* <div className="flex justify-center gap-2 mt-8">
                            {features.map((_, index) => (
                                <button 
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        current === index ? 'bg-[#41B0FC]' : 'bg-gray-300'
                                    }`}
                                    onClick={() => api?.scrollTo(index)}
                                    aria-label={`Ir a característica ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div> */}

                    {/* Desktop Grid */}
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
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
"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = 72 // altura del header principal
            const scrollPosition = window.scrollY
            
            setIsSticky(scrollPosition > headerHeight)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="relative h-full min-h-[700px]">
            {/* Background Image */}
            

            <div className="absolute inset-0 hidden md:block">
                <Image
                    src="/assets/img/Territory 25/des/banner-header.jpg"
                    alt="Ford Territory 2025"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Mobile Hero */}
            <div className="absolute inset-0 block md:hidden">
                <Image
                    src="/assets/img/Territory 25/mb/banner-header.jpg"
                    alt="Ford Territory 2025"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Top Navigation */}
            <div className={`${
                isSticky 
                    ? 'fixed top-0' 
                    : 'relative'
                } left-0 right-0 z-40 flex bg-gradient-to-b from-black/50 to-transparent transition-all duration-200`}
            >
                {/* Left side - Dark blue */}
                <div className="bg-[#002776] flex-1">
                    <div className="flex">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="flex items-center gap-2 text-white h-16 px-6 hover:text-gray-300"
                        >
                            {isMenuOpen ? (
                                <ChevronUp className="h-6 w-6" />
                            ) : (
                                <ChevronDown className="h-6 w-6" />
                            )}
                            <span className="font-light">Ford</span>
                            <span className="font-medium">Territory</span>
                            <span className="font-light">2025</span>
                        </button>
                    </div>
                </div>

                {/* Right side - Light blue */}
                <div className="bg-[#41B0FC] flex-[3]">
                    <div className="flex justify-end h-16 pr-6">
                        <Link 
                            href="/vehiculos/mustang/cotizar"
                            className="flex items-center gap-2 px-2 py-2 text-white hover:text-[#002776] transition-colors"
                        >
                            <span>Cotízalo</span>
                        </Link>
                        <Link 
                            href="/vehiculos/mustang/prueba"
                            className="flex items-center gap-2 px-2 py-2 text-white hover:text-[#002776] transition-colors"
                        >
                            <span>Manéjalo</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Menú desplegable */}
            {isMenuOpen && (
                <div className={`${
                    isSticky 
                        ? 'fixed top-16' 
                        : 'absolute'
                    } z-40 md:w-[25%] w-full bg-white border-t border-blue-800`}
                >
                    <div className="mx-auto 2xl:container px-4 py-2">
                        <div className="flex flex-col text-black">
                            <Link 
                                href="/vehiculos/territory" 
                                className="py-3 px-4 hover:bg-blue-800 hover:text-white transition-colors"
                            >
                                Territory 2025
                            </Link>
                            <Link 
                                href="/vehiculos/territory" 
                                className="py-3 px-4 hover:bg-blue-800 hover:text-white transition-colors"
                            >
                                Versiones y Precios
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Hero Content */}
            <div className="relative z-10 h-[300px] flex flex-col items-center text-center text-white px-4 mt-10">
                <h1 className="md:text-4xl text-2xl font-bold mb-4">Ford Territory 2025</h1>
                <p className="md:text-lg text-base mb-4 font-light text-gray-400">
                    La SUV que Tú Defines
                </p>
                <a
                    href="/assets/img/Territory 25/des/ford-territory-2025-catalogo-descargable.pdf"
                    download
                    className="bg-[#2d96cd] text-white hover:bg-white hover:text-[#2d96cd] text-sm hover:border-[#2d96cd] px-8 py-2 cursor-pointer"
                >
                    Catálogo Descargable
                </a>
            </div>
        </section>
    )
} 
"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { ShareModal } from "./share-modal"

interface GalleryImage {
  url: string
  alt: string
  title: string
  description: string
}

interface GalleryModalProps {
  image: GalleryImage
}

export function GalleryModal({ image }: GalleryModalProps) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative h-[150px] md:h-[300px] cursor-pointer group overflow-hidden rounded-lg">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] md:max-w-[70vw] p-0 bg-transparent border-none">
        <div className="relative h-[50vh] md:h-[80vh] mt-8 md:mt-0">
          <div className={`relative h-full w-full transition-transform duration-300 ${showDetails ? '-translate-y-40' : ''}`}>
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="absolute bottom-1 left-0 right-0">
            <div className="bg-white text-black p-4">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <p className="text-sm md:text-base">{image.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-sm md:text-base transition-colors"
                  >
                    {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
                    <ChevronDown className={`h-4 w-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </div>

            {showDetails && (
              <div className="bg-white text-black p-4 transition-all">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col gap-4">
                    <p className="text-sm md:text-lg">{image.description}</p>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
                        <Button className="bg-[#2C96CD] text-white px-4 md:px-8 py-2 hover:bg-white hover:text-[#2C96CD] transition-colors border border-[#2C96CD] text-sm md:text-base w-full md:w-auto">
                          Cotízala
                        </Button>
                        <Button className="bg-[#2C96CD] text-white px-4 md:px-8 py-2 hover:bg-white hover:text-[#2C96CD] transition-colors border border-[#2C96CD] text-sm md:text-base w-full md:w-auto">
                          Versiones y Precios
                        </Button>
                      </div>
                      <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-center">
                        <ShareModal 
                          url={window.location.href} 
                          title={`Ford Territory 2025 - ${image.title}`} 
                        />
                        <button className="flex items-center gap-2 text-sm md:text-base">
                          <span>Descargar</span>
                          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 16L12 24L20 16M12 0V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
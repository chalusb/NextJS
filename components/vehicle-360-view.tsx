"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState } from "react"

interface Vehicle360ViewProps {
  model: string
  color: string
  images: string[]
}

export function Vehicle360View({ model, color, images }: Vehicle360ViewProps) {
  const [currentColor, setCurrentColor] = useState(color)

  return (
    <div className="w-full">
      <Carousel
        opts={{
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-[4/3] relative">
                <img
                  src={image}
                  alt={`${model} ${currentColor} - Vista ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
} 
"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const vehicleTypes = [
  { id: "suvs", name: "SUV's" },
  { id: "camion", name: "Camión" },
  { id: "mustang", name: "Mustang" },
]

export function PlanSelector() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null)

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#4d4d4d]">¿Cuál es el plan ideal para ti?</h2>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#0276b3] text-white flex items-center justify-center">1</div>
            <div className="w-8 border-t-2 border-dotted border-gray-300" />
            <div className="w-8 h-8 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center">
              2
            </div>
            <div className="w-8 border-t-2 border-dotted border-gray-300" />
            <div className="w-8 h-8 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl text-[#4d4d4d]">Tipo de vehículo de interés:</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vehicleTypes.map((vehicle) => (
              <button
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle.id)}
                className={cn(
                  "py-4 px-8 rounded border-2 transition-all duration-200",
                  selectedVehicle === vehicle.id
                    ? "bg-[#0276b3] text-white border-[#0276b3]"
                    : "bg-white text-[#4d4d4d] border-gray-300 hover:bg-[#0276b3] hover:text-white hover:border-[#0276b3]",
                )}
              >
                {vehicle.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


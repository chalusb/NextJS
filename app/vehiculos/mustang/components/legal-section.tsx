"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function LegalSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white border-t border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 flex items-center justify-center gap-2 text-[#2D96CD] hover:text-[#1B394E] transition-colors"
      >
        <span className="text-lg">LEGALES</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="px-4 py-6 text-sm text-gray-600 space-y-4">
          <p>
            *Los precios publicados en este SITIO WEB son de referencia, aplicables sólo en el territorio nacional (Estados Unidos Mexicanos), no constituyen una oferta vinculante y pueden ser modificados por FORD en cualquier momento y sin previo aviso. Asimismo, están expresados en Pesos mexicanos (Moneda Nacional) y los mismos no incluyen impuestos, aditamentos y/o accesorios, placas, seguro, ni nada adicional a lo expresamente indicado.
          </p>
          <p>
            La información sobre rendimiento de combustible se refiere al valor que se obtuvo en condiciones controladas de laboratorio en términos de la NOM-163-SEMARNAT-ENER-SCFI-2013, que pueden no ser reproducibles en condiciones y hábitos de manejo convencional, debido a condiciones climatológicas, topográficas, tipo de combustible y otros factores.
          </p>
          <p>
            Este vehículo contiene los dispositivos de seguridad obligatorios de conformidad con la NOM-194-SE-2021
          </p>
        </div>
      )}
    </div>
  )
} 
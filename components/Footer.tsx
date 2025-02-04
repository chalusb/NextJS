"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const footerLinks = {
  vehiculos: {
    title: "Vehículos",
    links: [
      { name: "SUVs & Crossovers", href: "#" },
      { name: "Autos", href: "#" },
      { name: "Híbridos y Eléctricos", href: "#" },
      { name: "Camiones", href: "#" },
      { name: "Performance", href: "#" },
      { name: "Ediciones Especiales", href: "#" },
      { name: "Próximos Lanzamientos", href: "#" },
    ],
  },
  compra: {
    title: "Compra",
    links: [
      { name: "Cotízalos", href: "#" },
      { name: "Manéjalos", href: "#" },
      { name: "Promociones", href: "#" },
      { name: "Catálogos", href: "#" },
      { name: "Ford Credit", href: "#" },
      { name: "Vehículos Comerciales", href: "#" },
      { name: "Descubre tu Ford", href: "#" },
      { name: "Localiza un distribuidor", href: "#" },
      { name: "Seminuevos Certificados", href: "#" },
    ],
  },
  propietarios: {
    title: "Propietarios",
    links: [
      { name: "Beneficios de Servicio", href: "#" },
      { name: "Extensión Garantía", href: "#" },
      { name: "Ford D-Tect", href: "#" },
      { name: "Colisión y partes originales", href: "#" },
      { name: "Precio de Mantenimiento", href: "#" },
      { name: "Programa de Mantenimiento", href: "#" },
      { name: "Vehículos Comerciales", href: "#" },
      { name: "Motorcraft®", href: "#" },
      { name: "Mi Ford", href: "#" },
      { name: "Cita de Servicio", href: "#" },
      { name: "Historial de Servicio", href: "#" },
      { name: "Promociones de Servicio", href: "#" },
      { name: "Llamado a Revisión", href: "#" },
      { name: "Manuales del Propietario", href: "#" },
      { name: "Garantía en Partes", href: "#" },
      { name: "Soporte Técnico", href: "#" },
    ],
  },
  experiencia: {
    title: "Experiencia Ford",
    links: [
      { name: "Corporativo", href: "#" },
      { name: "Acerca de Ford", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Noticias", href: "#" },
      { name: "Bolsa de Trabajo", href: "#" },
      { name: "Escuelas Ford", href: "#" },
      { name: "Proveedores", href: "#" },
      { name: "Tecnologías", href: "#" },
      { name: "Empleados Retirados", href: "#" },
      { name: "Términos y Condiciones Mensajería SMS Ford", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Aviso de Privacidad Ford de México", href: "#" },
      { name: "Legales Ford de México", href: "#" },
      { name: "Términos y Condiciones Ford de México", href: "#" },
      { name: "Aspectos Legales Ford Credit", href: "#" },
      { name: "Aviso de Privacidad Ford Credit", href: "#" },
      { name: "Unidad Especializada Ford Credit", href: "#" },
      { name: "Aviso de Privacidad FordPass®", href: "#" },
      { name: "Términos y Condiciones FordPass®", href: "#" },
      { name: "Aviso de Privacidad de Vehículos Conectados", href: "#" },
      { name: "Consulta los Costos y Comisiones de nuestros productos", href: "#" },
    ],
  },
}

export default function Footer() {
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className="text-white w-full">
        <div className="max-w-[1440px] bg-[#242424] mx-auto px-4 md:px-6 py-12">
          {/* Desktop Version */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-medium mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Version with Collapsible Sections */}
          <div className="md:hidden space-y-2">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="border-b border-gray-700">
                <button
                  className="flex items-center justify-between w-full py-4"
                  onClick={() => toggleSection(key)}
                >
                  <h3 className="text-lg font-medium">{section.title}</h3>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 transition-transform",
                      openSections.includes(key) && "rotate-180"
                    )}
                  />
                </button>
                {openSections.includes(key) && (
                  <ul className="space-y-2 pb-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm block py-1">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="w-full ">
        <div className="max-w-[1440px] bg-[#1a3644] py-4 mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Texto y redes sociales */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-white text-sm">Síguenos en:</span>
            <div className="flex flex-wrap gap-3 justify-center">
              <Image src="/assets/img/redes (6).png" alt="Facebook" width={30} height={30} />
              <Image src="/assets/img/redes (7).png" alt="Twitter" width={30} height={30} />
              <Image src="/assets/img/redes (2).png" alt="YouTube" width={30} height={30} />
              <Image src="/assets/img/redes (5).png" alt="Instagram" width={30} height={30} />
              <Image src="/assets/img/redes (3).png" alt="Ford Blog" width={30} height={30} />
              <Image src="/assets/img/redes (4).png" alt="Spotify" width={30} height={30} />
              <Image src="/assets/img/redes (1).png" alt="TikTok" width={30} height={30} />
            </div>
          </div>

          {/* Comentarios link  */}
          <Link href="/comentarios" className="text-white text-sm hover:text-gray-200">
            Comentarios
          </Link>
        </div>
      </div>


      {/* Copyright Bar */}
      <div className="bg-white py-12 w-full">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[#242424] text-sm">
            <span>Copyright © 2025 Ford Motor Company - Todos los derechos reservados.</span>
            <div className="flex gap-4">
              <Link href="/legales" className="hover:underline">
                Legales
              </Link>
              <Link href="/terminos" className="hover:underline">
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" className="hover:underline">
                Privacidad
              </Link>
            </div>
          </div>
          <Image src="/assets/img/fmx-logo-header.png" alt="Ford Logo" width={80} height={25} />
        </div>
      </div>
    </footer>
  )
}


import Image from "next/image"
import Link from "next/link"

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
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div className=" text-white w-full">
        <div className="max-w-[1440px] bg-[#242424] mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="w-full">
        <div className="max-w-[1440px] bg-[#1a3644] py-4  mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-white text-sm">Síguenos en:</span>
            <div className="flex gap-3">
              <Image src="/assets/img/redes (6).png" alt="Facebook" width={40} height={40} />
              <Image src="/assets/img/redes (7).png" alt="Twitter" width={40} height={40} />
              <Image src="/assets/img/redes (2).png" alt="YouTube" width={40} height={40} />
              <Image src="/assets/img/redes (5).png" alt="Instagram" width={40} height={40} />
              <Image src="/assets/img/redes (3).png" alt="Ford Blog" width={40} height={40} />
              <Image src="/assets/img/redes (4).png" alt="Spotify" width={40} height={40} />
              <Image src="/assets/img/redes (1).png" alt="TikTok" width={40} height={40} />
            </div>
          </div>
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
          <Image src="/assets/img/fmx-logo-header.png" alt="Ford Logo" width={190} height={50} className=" w-auto" />
        </div>
      </div>
    </footer>
  )
}


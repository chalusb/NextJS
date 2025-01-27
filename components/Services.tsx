import { Button } from "@/components/ui/button"
import Image from 'next/image';


const services = [
  {
    icon: "/assets/img/Service (1).jpg?height=150&width=150",
    title: "Cotízalos",
    description: "Configura y recibe información del auto que deseas.",
    href: "#",
  },
  {
    icon: "/assets/img/Service (2).jpg?height=150&width=150",
    title: "Financiamiento",
    description: "Descubre Planes y Opciones de Compra.",
    href: "#",
  },
  {
    icon: "/assets/img/Service (3).jpg?height=150&width=150",
    title: "Localiza tu Distribuidor",
    description: "Encuentra tu Distribuidor Autorizado Ford más cercano.",
    href: "#",
  },
  {
    icon: "/assets/img/Service (4).jpg?height=150&width=150",
    title: "Cita de Servicio",
    description: "Agenda una Cita para el mantenimiento de tu auto.",
    href: "#",
  },
]

export default function Services() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Services Section */}
        <h2 className="text-3xl md:text-4xl text-[#4d4d4d] text-center mb-16">
          Estrena el Auto o Camioneta Ford que siempre has deseado
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 w-3/4 mx-auto" >
          {services.map((service) => (
            <a key={service.title} href={service.href} className="flex flex-col items-center text-center group">
              <div className="mb-4 ">                
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-contain"
                  width={150} 
                  height={150} 
                />
              </div>
              <h3 className="text-[#0276b3] text-xl font-medium mb-2 group-hover:text-[#0276b3]/80">{service.title}</h3>
              <p className="text-[#4d4d4d] leading-relaxed">{service.description}</p>
            </a>
          ))}
        </div>

        {/* Vehicle Review Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl text-[#4d4d4d] mb-8">Entérate si tu Vehículo tiene Llamado a Revisión</h2>
          <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90 text-white px-8 py-6 text-lg">
            <a href="/mas-informacion">Más información</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


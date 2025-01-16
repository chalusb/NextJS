import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'

const scheduleColumns = [
  {
    title: "Teléfonos y Horarios de Autos Nuevos",
    phone: "555 222 4400",
    ext: "Ext. 7234",
    whatsapp: "5512345678",
    hours: [
      { days: "Lunes - Viernes", time: "09:00 am - 07:00 pm" },
      { days: "Sábado", time: "11:00 am - 07:00 pm" },
      { days: "Domingo", time: "11:00 am - 07:00 pm" },
    ]
  },
  {
    title: "Teléfonos y Horarios de Servicio",
    phone: "555 222 4400",
    ext: "Ext. 7234",
    whatsapp: "5512345678",
    hours: [
      { days: "Lunes - Viernes", time: "09:00 am - 07:00 pm" },
      { days: "Sábado", time: "11:00 am - 07:00 pm" },
    ]
  },
  {
    title: "Teléfonos y Horarios de Refacciones",
    phone: "555 222 4400",
    ext: "Ext. 7234",
    whatsapp: "5512345678",
    hours: [
      { days: "Lunes - Viernes", time: "09:00 am - 07:00 pm" },
      { days: "Sábado", time: "11:00 am - 07:00 pm" },
    ]
  },
  {
    title: "Teléfonos y Horarios de Seminuevos",
    phone: "555 222 4400",
    ext: "Ext. 7234",
    whatsapp: "5512345678",
    hours: [
      { days: "Lunes - Viernes", time: "09:00 am - 07:00 pm" },
      { days: "Sábado", time: "11:00 am - 07:00 pm" },
    ]
  },
  {
    title: "Teléfonos y Horarios de Carrocería y Pintura",
    phone: "555 222 4400",
    ext: "Ext. 7234",
    whatsapp: "5512345678",
    hours: [
      { days: "Lunes - Viernes", time: "09:00 am - 07:00 pm" },
      { days: "Sábado", time: "11:00 am - 07:00 pm" },
    ]
  },
]

export default function Footer() {
  return (
    <footer className="bg-white pt-8 pb-4 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Matrix Column */}
          <div className="lg:col-span-1">
            <h3 className="font-bold mb-4">Matriz</h3>
            <div className="space-y-2 text-sm">
              <p>Carretera Nacional #1100 Col.</p>
              <p>Los Cristales, Monterrey,</p>
              <p>Nuevo León</p>
              <div className="flex items-center gap-2 mt-4">
                <MapPin className="h-4 w-4" />
                <Link href="#" className="text-[#001E50] hover:underline">
                  Cómo llegar
                </Link>
              </div>
            </div>
          </div>

          {/* Schedule Columns */}
          {scheduleColumns.map((column, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-bold mb-4 text-sm">{column.title}</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <div>
                    <p>{column.phone}</p>
                    <p className="text-gray-600">{column.ext}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp: {column.whatsapp}</span>
                </div>
                <div className="space-y-2">
                  {column.hours.map((schedule, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="min-w-[6px] h-[6px] mt-2 rounded-full bg-gray-400" />
                      <div>
                        <p className="font-bold">{schedule.days}</p>
                        <p>{schedule.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex justify-end gap-4 mb-8">
          <Link href="#" className="text-[#001E50] hover:text-[#001E50]/80">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-[#001E50] hover:text-[#001E50]/80">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>

        {/* Legal */}
        <div className="text-xs text-gray-600 space-y-2">
          <div className="flex items-center gap-2">
            <Link href="#" className="hover:underline">Normativa Legal y Aviso de Privacidad</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Volkswagen - Aviso de Privacidad</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Instalación Nacional de Concesionarios del Grupo Volkswagen, A.C. 2024</Link>
          </div>
          <p>© Volkswagen 2024</p>
        </div>

        {/* Development Credit */}
        <div className="text-center text-xs text-gray-500 mt-8">
          desarrollo @ exagono.software
        </div>
      </div>
    </footer>
  )
}


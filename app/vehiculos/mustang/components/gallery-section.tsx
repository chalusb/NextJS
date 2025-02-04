"use client"

import Image from "next/image"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { DimensionsTable } from "./dimensions-table"

const cards = [
  {
    image: "/assets/img/Mustang 24/web/Galeria/Velocidadycomfort.png",
    title: "Velocidad y Confort",
    description: "La experiencia deportiva de conducción en Ford Mustang 2024 ofrece cómodos asientos ajustables con control de clima para conductor y pasajeros que harán de tus viajes algo espectacular, además, podrás disfrutar de iluminación ambiental interior multicolor para una conducción única y confortable."
  },
  {
    image: "/assets/img/Mustang 24/web/Galeria/Coloresquerobanmiradas.png",
    title: "Colores que roban miradas",
    description: "El espectacular Nuevo Diseño de Ford Mustang 2024 luce aun más dinámico con su gama de colores vibrantes y llenos de fuerza, que le dan la apariencia de estar siempre listo para la acción, sin perder el estilo."
  }
]

export function GallerySection() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative md:h-[600px] h-[750px] w-full">
        {/* Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/assets/img/Mustang 24/web/Galeria/Unemblemaquetrasciendedegeneracinengeneracin.png"
            alt="Ford Mustang 2024"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile */}
        <div className="absolute inset-0 block md:hidden">
          <Image
            src="/assets/img/Mustang 24/mov/Galeria/unemblemaquetrasciende.png"
            alt="Ford Mustang 2024"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 flex flex-col gap-4 items-center mt-16">
          <h2 className="text-4xl md:text-4xl font-bold text-white text-center max-w-4xl px-4">
            Un emblema que trasciende de generación en generación
          </h2>
          <p className="text-gray-300 text-center max-w-4xl px-4 text-sm md:text-base">
            Maravilla a todos a tu paso con el clásico distintivo de Pony que, con su diseño dinámico y atractivo, anuncia a todos la llegada de la Poderosa Nueva Generación de Ford Mustang: el auto deportivo que ha hecho historia.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative h-[200px] md:h-[300px] mb-6">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-gray-100 w-full h-full flex items-center justify-center rounded-lg">
                    <p className="text-gray-500">Imagen pendiente: {card.title}</p>
                  </div>
                )}
              </div>
              <h3 className="text-2xl md:text-4xl font-light text-[#002776] mb-4 text-center md:text-left">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center md:text-left text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 items-center justify-center text-center">
          <h2 className="text-2xl md:text-4xl font-light">
            Selecciona tu Modo de Manejo y Triunfa en la Pista
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Elige, según la situación, el Modo de Manejo ideal al conducir tu Ford Mustang 2024. Ya sea Normal, Resbaladizo, Deportivo, Pista, Tira de Arrastre o MyMode.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Cada configuración te permitirá ser uno solo con tu auto deportivo, personalizando tus viajes y ofreciendo una conducción de adrenalina pura.</p>
        </div>
      </div>

      {/* Digital Dashboard Image */}
      <div className="relative md:h-[400px] h-auto w-full">
        {/* Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/assets/img/Mustang 24/web/Galeria/1693867150502.webp"
            alt="Ford Mustang 2024"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile */}
        <div className="relative aspect-video inset-0 block md:hidden">
          <Image
            src="/assets/img/Mustang 24/mov/Galeria/small.webp"
            alt="Ford Mustang 2024"
            fill
            className="object-cover h-[200px]"
            priority
          />
        </div>
      </div>

      {/* Features with side images */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto">
          {/* Remote Start Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-16">
            <div className="space-y-4 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-light text-center md:text-left">Encendido Remoto</h2>
              <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                Calienta motores incluso antes de llegar a tu Auto, con el Encendido Remoto
                de Ford Mustang 2024, y haz rugir el poderoso motor de hasta 486 Caballos
                de Fuerza.
              </p>
            </div>
            <div className="relative aspect-video order-1 md:order-2">
              <Image
                src="/assets/img/Mustang 24/web/Galeria/EncendidoRemoto.png"
                alt="Ford Mustang 2024"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Welcome Mat Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-16">
            <div className="relative aspect-video order-1">
              <Image
                src="/assets/img/Mustang 24/web/Galeria/Tapetedebienvenida.png"
                alt="Ford Mustang 2024"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-2">
              <h2 className="text-2xl md:text-3xl font-light text-center md:text-left">Tapete de bienvenida</h2>
              <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                Atrapa las miradas, incluso antes de abordar a tu Deportivo, con el Tapete de
                Bienvenida de Ford Mustang 2024; un detalle de elegancia y dinamismo que
                te da la bienvenida.
              </p>
            </div>
          </div>
          {/* Cálipers Deportivos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-16">
            <div className="space-y-4 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-light text-center md:text-left">Cálipers Deportivos</h2>
              <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                Para que tu experiencia al manejar sea como la de los pilotos profesionales, Ford Mustang 2024 cuenta con Componentes Deportivos como los Cálipers delanteros que, además de llamar la atención de los conocedores, ofrecen una sensación de control y precisión.
              </p>
            </div>
            <div className="relative aspect-video">
              <Image
                src="/assets/img/Mustang 24/web/Galeria/ClipersDeportivos.png"
                alt="Ford Mustang 2024"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[700px] w-full">
        <Image
          src="/assets/img/Mustang 24/web/Galeria/Tuseguridadeslaprioridad.png"
          alt="Ford Mustang 2024"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center mt-16 gap-4">
          <h2 className="text-4xl md:text-4xl font-bold text-white text-center max-w-4xl px-4">
            Tu seguridad es la prioridad
          </h2>
          <p className="text-white leading-relaxed text-center max-w-4xl px-4 text-sm md:text-base">
            Diseñado para brindarte equipamiento de seguridad en todo momento y para todos los ocupantes del vehículo, Ford Mustang 2024 cuenta con 8 Bolsas de Aire (frontales, laterales y de rodilla para conductor y pasajero, tipo cortina en 1a y 2a fila).
          </p>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto">

          {/* Welcome Mat Feature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-16">
            <div className="relative aspect-video order-2 md:order-1">
              <Image
                src="/assets/img/Mustang 24/web/Galeria/FordPassConnect.png"
                alt="Ford Mustang 2024"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-light text-center md:text-left">FordPass® Connect</h2>
              <p className="text-gray-600 text-sm md:text-base text-center md:text-left">Experiencia dinámica y tecnológica con FordPass® Connect, la aplicación para acceder desde un Smartphone a la información de tu Ford Mustang 2024. Utilízala sin necesidad exclusiva de Wi-Fi y mantente conectado siempre que lo necesites, accediendo a funciones como:
              </p>
              <ul className="list-disc ml-4 text-gray-600">
                <li>Encendido y Apagado de Motor</li>
                <li>Encendidos Programados</li>
                <li>Localiza tu Ford</li>
                <li>Asistencia las 24 Horas</li>
                <li>Centro de Mensajes</li>
                <li>Niveles de Combustible y Aceite</li>
                <li>Alertas de Salud del Vehículo</li>
                <li>Monitoreo de Presión de Neumáticos (TPMS)</li>
              </ul>
            </div>
          </div>
          {/* Ford Co-Pilot360® */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-16">
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-light text-center md:text-left">Ford Co-Pilot360®</h2>
              <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                Ford Mustang 2024 equipa el Conjunto de Tecnologías Semiautónomas Ford Co-Pilot360®*:
              </p>
              <ul className="list-disc ml-4 text-gray-600">
                <li>Asistencia de Pre-Colisión con Freno de Emergencia Automático y Detección de Peatones</li>
                <li>Cámara de Reversa con Sensores</li>
                <li>Monitoreo de Punto Ciego BLIS®</li>
                <li>Sistema de Preservación de Carril</li>
              </ul>
            </div>
            <div className="relative aspect-video order-1 md:order-2">
              <Image
                src="/assets/img/Mustang 24/web/Galeria/FordCo-Pilot360.png"
                alt="Ford Mustang 2024"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 items-center justify-center text-center">
              <h2 className="text-2xl md:text-4xl font-light">
                Nuevo Clúster de Instrumentos Digital de 12.4 Pulgadas LCD
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Permanece fiel a tus instintos y disfruta del espectacular Ford Mustang 2024, el Auto Deportivo que equipa un Clúster de Instrumentos Digital con pantalla LCD de 12.4 pulgadas.

              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Personaliza los Modos de Manejo que deseas visualizar y lleva al límite tus emociones en la pista.</p>
            </div>
          </div>
          <div className="relative h-[200px] md:h-[400px] w-full">
            {/* Desktop */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src="/assets/img/Mustang 24/web/Galeria/1693867788020.jpg"
                alt="Ford Mustang 2024"
                fill
                className="object-cover"
              />
            </div>
            {/* Mobile */}
            <div className="absolute aspect-video inset-0 block md:hidden">
              <Image
                src="/assets/img/Mustang 24/mov/Galeria/nuevocluster.png"
                alt="Ford Mustang 2024"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-white pt-16">
            <div className="max-w-7xl mx-auto">

              {/* SYNC® 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mb-16">
                <div className="relative aspect-video order-2 md:order-1">
                  <Image
                    src="/assets/img/Mustang 24/web/Galeria/TecnologaSYNC4.png"
                    alt="Ford Mustang 2024"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 md:order-2">
                  <h2 className="text-2xl md:text-3xl font-lightt text-center md:text-left">Tecnología SYNC®4</h2>
                  <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                    Para brindar gran comodidad y conectividad en cada recorrido, conoce el Sistema de infoentretenimiento SYNC®4 con Reconocimiento de Voz y AppLink® compatible con Apple CarPlay® y Android Auto® que podrás visualizar en la pantalla táctil de 13.2 pulgadas de tu nuevo Ford Mustang 2024.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 items-center justify-center text-center">
              <h2 className="text-2xl md:text-4xl font-light">
                Ford Mustang 2024: Séptima Generación del Icónico Auto
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Sé parte del nuevo capítulo en la historia de los Autos Deportivos: Ford Mustang 2024, cuyo rediseño llega a imponer nuevos paradigmas con un espectacular desempeño y diseño exterior vanguardista.
              </p>
            </div>
          </div>
          <div className="relative w-full h-full md:h-[550px]">
            <div className="relative aspect-video">
              <video 
                src="/assets/img/Mustang 24/web/Video/Mustang_2024_Deportivo_Nueva_Generación___Ford_México (3).mp4" 
                controls 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full md:h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dimensions Table Component */}
      <DimensionsTable />
    </section>
  )
} 
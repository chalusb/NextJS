import Image from "next/image"

const sections = [
  {
    title: "Beneficios",
    benefits: [
      "Financiamiento Ford especializado",
      "Planes de financiamiento con tasa anual fija",
      "Corto tiempo de respuesta para el análisis de crédito",
      "Planes de financiamiento compartido con un coobligado",
      "Financiamiento a Personas Físicas, Personas Físicas con Actividad Empresarial y Personas Morales",
    ],
    image: "/assets/img/financiamiento/beneficios (1).jpg", 
    imageAlt: "Beneficios Ford",
    bgGray: true,
    imageRight: true,
  },
  {
    title: "Planes de Financiamiento",
    description: "Conoce las opciones que Ford Credit brinda para adquirir el vehículo Ford de tus sueños:",
    plans: [
      { name: "Plan Tradicional", superscript: "1" },
      { name: "Plan Multiopción", superscript: "2" },
      { name: "Plan Independientes", superscript: "3" },
      { name: "Plan Verde", superscript: "4" },
      { name: "Plan Seminuevos", superscript: "5" },
      { name: "Plan Enganche 40%", superscript: "6" },
    ],
    image: "/assets/img/financiamiento/beneficios (2).jpg",
    imageAlt: "Ford vehículos",
    bgGray: false,
    imageRight: false,
  },
]

export function FinanceBenefits() {
  return (
    <>
      {sections.map((section, idx) => (
        <section key={idx} className={`py-16 px-4 ${section.bgGray ? "bg-gray-50" : ""}`}>
          <div className="max-w-[1440px] mx-auto">
            <div
              className={`flex flex-col md:flex-row gap-8 items-center ${section.imageRight ? "" : "md:flex-row-reverse"}`}
            >
              <div className="w-full md:w-1/2 md:order-none order-first">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl text-[#4d4d4d] mb-8">{section.title}</h2>

                {section.benefits ? (
                  <ul className="space-y-4">
                    {section.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#0276b3] mr-2">•</span>
                        <span className="text-lg text-[#4d4d4d] leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="text-lg text-[#4d4d4d] mb-6">{section.description}</p>
                    <ul className="space-y-4">
                      {section.plans?.map((plan, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#0276b3] mr-2">•</span>
                          <span className="text-lg text-[#4d4d4d] leading-relaxed">
                            {plan.name}
                            <sup>{plan.superscript}</sup>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-8 bg-[#0276b3] text-white px-8 py-3 rounded hover:bg-[#0276b3]/90 transition-colors">
                      Conoce más
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}


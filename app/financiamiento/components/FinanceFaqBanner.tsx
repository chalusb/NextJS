import { Banner } from "@/components/ui/banner"

export function FinanceFaqBanner() {
  return (
    <Banner
      image="/assets/img/financiamiento/bannerpreguntas.jpg"
      imageAlt="Personas revisando información de Ford Credit"
      title="¿Tienes Preguntas sobre tu Financiamiento de Ford Credit?"
      description="Accede a información útil para clientes del Crédito Automotriz para vehículos Ford y conoce todos los beneficios con los que obtendrás la mejor experiencia al adquirir tu auto o flotilla Ford."
      buttonText="Conoce más"
      buttonHref="/financiamiento/faq"
      height="lg"
    />
  )
}


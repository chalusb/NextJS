import { NavBar } from "@/components/ui/nav-bar"
import { FinanceSlider } from "@/app/financiamiento/components/FinanceSlider"
import { FinanceIntro } from "@/app/financiamiento/components/FinanceIntro"
import { FinanceBenefits } from "@/app/financiamiento/components/FinanceBenefits"
import { PlanSelector } from "@/app/financiamiento/components/PlanSelector"
import { FinanceOptions } from "@/app/financiamiento/components/FinanceOptions"
import { FinanceFaqBanner } from "@/app/financiamiento/components/FinanceFaqBanner"
import { Banner } from "@/components/ui/banner"

const leftMenu = {
  title: "Ford Credit",
  items: [
    { name: "Home", href: "/financiamiento" },
    { name: "Planes de Financiamiento", href: "/financiamiento/planes" },
    { name: "Cotiza tu Ford", href: "/financiamiento/cotiza" },
    { name: "Preguntas Frecuentes", href: "/financiamiento/faq" },
  ],
}

const rightMenu = [
  { name: "Inicio", href: "/financiamiento" },
  { name: "Cotiza tu Ford", href: "/financiamiento/cotiza" },
  { name: "Planes de Financiamiento", href: "/financiamiento/planes" },
]

export default function FinancePage() {
  return (
    <div className="w-full">
      <NavBar leftMenu={leftMenu} rightMenu={rightMenu} />
      <FinanceSlider />
      <FinanceIntro 
        title="Ford Credit: Financiamiento Automotriz"
        description="Con el respaldo de Ford Motor Company, Ford Credit es la Entidad Financiera que brinda Planes de Financiamiento Automotriz a tu medida; ya que ofrece ventajas como: descuentos, bonos, mensualidades sin intereses, seguro gratis, atractivos enganches y flexibilidad de pago.
        Ford Credit es el Financiamiento Automotriz ideal para comprar un Auto, SUV, Camión, Vehículo Híbrido o Comercial."  
        buttonText=""
        buttonHref=""      
      />
      <FinanceBenefits />
      <PlanSelector />
      <Banner 
        image="/assets/img/financiamiento/banner (1).jpg"
        imageAlt="Ford Mustang y Bronco"
        title="Calcula tu Financiamiento"
        description="Precio de Mensualidades y Plazos para adquirir a Crédito tu Vehículo Ford"
        buttonText="Conoce Más"
        buttonHref="/financiamiento/" 
       />
       <FinanceIntro 
        title="Educación Financiera"
        description="Encuentra información con herramientas que te ayudarán a elegir las estrategias y prácticas adecuadas para mantener tus finanzas saludables al adquirir un Auto, SUV o Camión con ayuda del Financiamiento Automotriz de Ford Credit."
        buttonText="Conoce más"
        buttonHref="/financiamiento/educacion/herramientas"
      />
      <Banner 
        image="/assets/img/financiamiento/banner (2).jpg"
        imageAlt="Educación Financiera"
        title=""
        description=""
        buttonText=""
        buttonHref="" 
       />
       <FinanceIntro 
        title="Herramientas de Compra"
        description="Encuentra información y opciones para adquirir tu nuevo vehículo Ford con un Financiamiento Automotriz que se adapte a tus necesidades."  
        buttonText=""
        buttonHref=""      
      />
      <FinanceOptions />
      <FinanceFaqBanner />
    </div>
  )
}


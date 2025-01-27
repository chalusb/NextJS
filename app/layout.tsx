import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Ford México | Nuevos Autos, SUVs, Pickups y Camiones",
  description:
    "Conoce la Nueva Gama de Vehículos Ford: SUVs, Camiones de Trabajo, Autos Deportivos y Pickups. Con Motor de Tecnología Eléctrica, Híbrida o Gasolina",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white overflow-x-hidden font-['FordAntennaWGL-Regular']">
        <div className="max-w-[1440px] mx-auto border-x border-gray-200">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}


import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
//import Script from 'next/script'
import { DataProvider } from "@/context/DataContext"
import { QueryProvider } from "@/context/QueryProvider";


export const metadata: Metadata = {
  title: "VW QA |  1.0",
  description:
    "Conoce la Nueva Gama de Vehículos VW: SUVs, Camiones de Trabajo, Autos Deportivos y Pickups. Con Motor de Tecnología Eléctrica, Híbrida o Gasolina",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white overflow-x-hidden font-fordAntenaLight">
        <QueryProvider>
        <DataProvider>
        <div className="max-w-[1440px] mx-auto border-x border-gray-200">
          <Header />
          {children}
          <Footer />
        </div>
        {/* <Script
          src="https://assets.adobedtm.com/248d63c2ff6b/bec206858ddf/launch-64309b53b8ca.min.js"
          strategy="lazyOnload"
        />  */}        
       
        </DataProvider>
        </QueryProvider>
      </body>
    </html>
  )
}


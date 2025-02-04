import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Script from 'next/script'
import { DataProvider } from "@/context/DataContext"
import { QueryProvider } from "@/context/QueryProvider";
import ChatModal from "@/components/chat-model"

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
        <QueryProvider>
        <DataProvider>
        <div className="max-w-[1440px] mx-auto border-x border-gray-200">
          <Header />
          {children}
        </div>
        <Script
          src="https://assets.adobedtm.com/248d63c2ff6b/bec206858ddf/launch-64309b53b8ca.min.js"
          strategy="lazyOnload"
        /> 
        <Footer />
        <ChatModal />
        </DataProvider>
        </QueryProvider>
      </body>
    </html>
  )
}


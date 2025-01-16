import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Volkswagen Villautosur',
  description: 'Concesionario Volkswagen en México',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Script
          src="https://assets.adobedtm.com/248d63c2ff6b/bec206858ddf/launch-64309b53b8ca.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}


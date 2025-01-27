"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Vehículos", href: "/vehiculos" },
  { name: "Compra", href: "/compra" },
  { name: "Propietarios", href: "/propietarios" },
  { name: "Tecnologías", href: "/tecnologias" },
  { name: "Financiamiento", href: "/financiamiento" },
  { name: "FordPass®", href: "/fordpass" },
  { name: "Iniciar Sesión", href: "/Sesion" },
]

export default function Header() {
  return (
    <header className="bg-white w-full border-b border-gray-200">
      <nav className="w-full" aria-label="Top">
        <div className="flex w-full items-center justify-between py-2">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/img/fmx-logo-header.png"
                alt="Ford Logo"
                width={190}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm  text-[#0276b3] hover:text-[#0276b3]/80"
                style={{ fontSize: "17px" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-gray-700 hover:text-[#0276b3] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}                 
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}


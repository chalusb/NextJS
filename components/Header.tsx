"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronRight, Car, Tag, Power, Wallet, Wrench, User, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useData } from "@/context/DataContext";

const navigation = [
  { name: "Compra", href: "/" },
  { name: "Propietarios", items: true, href: "/" },
  { name: "Tecnologías", href: "/" },
  { name: "Financiamiento", href: "/financiamiento/" },
  { name: "FordPass®", href: "/" },
  { name: "Iniciar Sesión", href: "/" },
];

const vehicleCategories = [
  {
    title: "SUVs & Crossovers",
    vehicles: [
      { 
        name: "Territory 2025", 
        href: "/vehiculos/territory",
        image: "/assets/img/Vehiculos/SUVs & Crossovers/Territory 2025/ford-territory-2025-camioneta-suv-tecnologica-equipada-informacion.png"
      },
    ],
  },
  {
    title: "Autos",
    vehicles: [
      { 
        name: "Mustang 2024", 
        href: "/vehiculos/mustang",
        image: "/assets/img/Vehiculos/Autos/Mustang 2024/ford-mustang-2024.png"
      }
    ],
  },
];

const vehicleTypes = [
  "SUVs & Crossovers",
  "Autos",
  "Híbridos y Eléctricos",
  "Camiones",
  "Performance",
  "Ediciones Especiales",
];

const propietariosCategories = [
  {
    title: "Servicios",
    items: [
      { name: "Garantía Extendida", href: "/extension-garantia" },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPropietariosOpen, setIsPropietariosOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeType, setActiveType] = useState("SUVs & Crossovers");
  const headerRef = useRef<HTMLElement>(null);
  const [mobileVehicleOpen, setMobileVehicleOpen] = useState(false);
  const [mobilePropietariosOpen, setMobilePropietariosOpen] = useState(false);
  const [mobileActiveType, setMobileActiveType] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("SUV & Crossovers");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsPropietariosOpen(false);
      }
    };

    let timeout = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (menu: 'vehicles' | 'propietarios') => {
    if (menu === 'vehicles') {
      setIsPropietariosOpen(false);
      setIsOpen(!isOpen);
      if (!isOpen) {
        setActiveType("SUVs & Crossovers");
      }
    } else {
      setIsOpen(false);
      setIsPropietariosOpen(!isPropietariosOpen);
    }
  };

  const handleTypeClick = (type: string) => {
    setActiveType(activeType === type ? "" : type);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setMobileVehicleOpen(false);
    setMobilePropietariosOpen(false);
    setMobileActiveType("");
  };

  const handleMobileVehicleToggle = () => {
    setMobileVehicleOpen(!mobileVehicleOpen);
    setMobilePropietariosOpen(false);
    setMobileActiveType("");
  };

  const handleMobilePropietariosToggle = () => {
    setMobilePropietariosOpen(!mobilePropietariosOpen);
    setMobileVehicleOpen(false);
    setMobileActiveType("");
  };

  const handleMobileTypeClick = (type: string) => {
    setMobileActiveType(mobileActiveType === type ? "" : type);
  };
  const { data, isLoading, error } = useData();

  // if (isLoading) return <p>Cargando datos...</p>;
  // if (error) return <p>Error: {error}</p>;
  return (
    <header ref={headerRef} className="bg-white w-full border-b border-gray-200">
      <nav className="w-full" aria-label="Top">
        <div className="flex w-full items-center justify-between py-2 px-5 flex-row flex-nowrap">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/img/fmx-logo-header.png"
              alt="Ford Logo"
              width={80}
              height={25}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* <Button
              variant="ghost"
              className={cn("hover:bg-transparent hover:text-blue-600", isOpen && "text-blue-600")}
              onClick={() => setIsOpen(!isOpen)}
            >
              {data?.siteInfo?.name ?? "Cargando..."}
            </Button> */}
            <Button
              variant="ghost"
              className={cn(
                "text-[#008cba] hover:bg-transparent hover:text-gray-600",
                isOpen ? "text-gray-600" : "text-[#008cba]"
              )}
              onClick={() => handleMenuToggle('vehicles')}
            >
              Vehículos
            </Button>
            {navigation.map((link) => (
              link.items ? (
                <Button
                  key={link.name}
                  variant="ghost"
                  className={cn(
                    "text-[#008cba] hover:bg-transparent hover:text-gray-600",
                    isPropietariosOpen ? "text-gray-600" : "text-[#008cba]"
                  )}
                  onClick={() => handleMenuToggle('propietarios')}
                >
                  {link.name}
                </Button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#008cba] hover:text-gray-600"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <Image
                      src="/assets/img/fmx-logo-header.png"
                      alt="Ford Logo"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 overflow-auto">
                    {/* Vehículos Button */}
                    <button
                      className="flex items-center justify-between w-full p-4 text-left border-b"
                      onClick={handleMobileVehicleToggle}
                    >
                      <div className="flex items-center gap-3">
                        <Car className="h-5 w-5 text-blue-600" />
                        <span>Vehículos</span>
                      </div>
                      <ChevronDown
                        className={cn("h-5 w-5 transition-transform", mobileVehicleOpen && "rotate-180")}
                      />
                    </button>

                    {/* Vehículos Dropdown */}
                    {mobileVehicleOpen && (
                      <div className="bg-gray-50">
                        {vehicleTypes.map((type) => (
                          <div key={type}>
                            <button
                              className={cn(
                                "flex items-center justify-between w-full p-4 text-left border-t",
                                mobileActiveType === type && "text-blue-600"
                              )}
                              onClick={() => handleMobileTypeClick(type)}
                            >
                              <span className="text-sm">{type}</span>
                              <ChevronRight 
                                className={cn("h-4 w-4", mobileActiveType === type && "rotate-90")} 
                              />
                            </button>
                            {mobileActiveType === type && (
                              <div className="bg-white">
                                {vehicleCategories
                                  .filter(category => category.title === type)
                                  .map(category => (
                                    <div key={category.title}>
                                      {category.vehicles.map(vehicle => (
                                        <Link
                                          key={vehicle.name}
                                          href={vehicle.href}
                                          className="group flex flex-col items-center text-center"
                                        >
                                          <div className="relative w-48 h-32 mb-2 overflow-hidden rounded">
                                            <Image
                                              src={vehicle.image}
                                              alt={vehicle.name}
                                              fill
                                              className="object-cover transition-transform group-hover:scale-105"
                                            />
                                          </div>
                                          <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">
                                            {vehicle.name}
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  ))}
                                {/* Botón Todos los vehículos en móvil */}
                                <Link
                                  href="/vehiculos"
                                  className="block px-8 py-3 text-sm text-blue-600 hover:text-blue-800 border-t"
                                  onClick={handleMobileMenuClose}
                                >
                                  Ver todos los vehículos →
                                </Link>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Navigation Items */}
                    {navigation.map((link) => (
                      link.items ? (
                        <div key={link.name}>
                          <button
                            className="flex items-center justify-between w-full p-4 text-left border-b"
                            onClick={handleMobilePropietariosToggle}
                          >
                            <div className="flex items-center gap-3">
                              <User className="h-5 w-5 text-blue-600" />
                              <span>{link.name}</span>
                            </div>
                            <ChevronDown
                              className={cn("h-5 w-5 transition-transform", mobilePropietariosOpen && "rotate-180")}
                            />
                          </button>
                          {mobilePropietariosOpen && (
                            <div className="bg-gray-50">
                              {propietariosCategories.map(category => (
                                category.items.map(item => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600"
                                    onClick={handleMobileMenuClose}
                                  >
                                    {item.name}
                                  </Link>
                                ))
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center gap-3 p-4 border-b"
                          onClick={handleMobileMenuClose}
                        >
                          {link.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Desktop Dropdown for Vehicles */}
      {isOpen && (
        <div className="absolute w-full bg-white border-b shadow-lg hidden lg:block z-50">
          <div className="border-b">
            <div className="container">
              <nav className="flex space-x-8">
                {vehicleTypes.map((type) => (
                  <button
                    key={type}
                    className={cn(
                      "px-4 py-3 text-sm font-medium transition-colors",
                      "hover:text-blue-600",
                      activeType === type && "text-blue-600 border-b-2 border-blue-600"
                    )}
                    onClick={() => setActiveType(type)}
                  >
                    {type}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="container py-6">
            {vehicleCategories.map(
              (category) =>
                category.title === activeType && (
                  <div key={category.title}>
                    <div className="hidden lg:flex flex-row flex-wrap gap-8">
                      {category.vehicles.map((vehicle) => (
                        <Link
                          key={vehicle.name}
                          href={vehicle.href}
                          className="group flex flex-col items-center text-center"
                        >
                          <div className="relative w-48 h-32 mb-2 overflow-hidden rounded">
                            <Image
                              src={vehicle.image}
                              alt={vehicle.name}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm">
                            {vehicle.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    {/* Mantener vista móvil como estaba */}
                    <div className="flex lg:hidden flex-col space-y-6">
                      {category.vehicles.map((vehicle) => (
                        <Link
                          key={vehicle.name}
                          href={vehicle.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                        >
                          {vehicle.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
            )}
            {/* Botón Todos los vehículos */}
            <div className="mt-8 pt-6 border-t">
              <Link
                href="/vehiculos"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Ver todos los vehículos →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Dropdown for Propietarios */}
      {isPropietariosOpen && (
        <div className="absolute w-full bg-white border-b shadow-lg hidden lg:block z-50">
          <div className="container py-6">
            {propietariosCategories.map((category) => (
              <div key={category.title}>
                <div className="flex flex-col space-y-6">
                  {category.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex gap-8">
              {/* Categorías */}
              <div className="w-1/4">
                {vehicleTypes.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveSubmenu(category)}
                    className={`w-full text-left py-2 px-4 ${
                      activeSubmenu === category 
                        ? 'text-[#2D96CD] bg-gray-100' 
                        : 'text-gray-600 hover:text-[#2D96CD]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Submenú */}
              <div className="w-3/4">
                {activeSubmenu === "SUV & Crossovers" && (
                  <div className="grid grid-cols-3 gap-8">
                    <Link href="/vehiculos/territory" className="group">
                      <div className="relative aspect-video mb-2">
                        <Image
                          src="/assets/img/territory.png"
                          alt="Territory"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-gray-800 group-hover:text-[#2D96CD]">Territory</h3>
                    </Link>
                    {/* Agregar más SUVs aquí */}
                  </div>
                )}
                {/* Agregar más submenús para otras categorías */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

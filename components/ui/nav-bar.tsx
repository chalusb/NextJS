"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

interface NavBarProps {
  leftMenu: {
    title: string;
    items?: NavItem[];
  };
  rightMenu: NavItem[];
}

export function NavBar({ leftMenu, rightMenu }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex">
        {/* Left Section - Menú Lateral (Siempre visible en web) */}
        <div className="relative w-64 bg-[#1a3644] text-white lg:block hidden">
          <button
            className="flex items-center justify-between w-full px-4 py-3 text-white hover:bg-[#122d3c] transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="font-medium">{leftMenu.title}</span>
            <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
          </button>

          {/* Contenido del Menú - Se despliega en web y móvil */}
          <div
            className={cn(
              "absolute left-0 top-full w-64 bg-white border border-gray-300 shadow-lg origin-top transition-all duration-300 lg:block z-10",
              isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
            )}
          >
            <div className="flex flex-col">
              {leftMenu.items?.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-[#0276b3] hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Desktop (Siempre visible en web) */}
        <div className="hidden lg:flex flex-1 bg-[#0276b3] text-white justify-end pr-6">
          <div className="flex items-center space-x-6">
            {rightMenu.map((item) => (
              <Link key={item.name} href={item.href} className="text-white hover:text-white/90 py-2 text-sm">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Version - Full Width Dropdown */}
        <div className="lg:hidden w-full">
          <button
            className="flex items-center justify-between w-full px-4 py-3 bg-[#1a3644] text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="font-medium">{leftMenu.title}</span>
            <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")} />
          </button>

          {/* Menú Desplegable en Móvil */}
          <div
            className={cn(
              "absolute right-0 left-auto w-full bg-white border border-gray-300 shadow-lg origin-top transition-all duration-300 lg:hidden z-10",
              isOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
            )}
          >
            <div className="flex flex-col">
              {leftMenu.items?.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-[#0276b3] hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Menú Derecho en Móvil */}
            <div className="w-full bg-[#0276b3] p-4">
              {rightMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white text-center py-3 hover:bg-[#015b8a]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

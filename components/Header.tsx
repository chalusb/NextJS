import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="h-6 w-6" />
        </Button>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image 
            src="/assets/img/Volkswagen_logo.png"
            alt="Volkswagen Logo"
            width={40}
            height={40}
            // className="invert"
          />
        </div>

        <div className="flex items-center text-white">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">Volkswagen Villauto Sur</span>
        </div>
      </div>
    </header>
  )
}


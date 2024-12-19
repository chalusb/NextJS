import { Calculator, Car, Phone, PenToolIcon as Tool } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
      <Button size="icon" className="rounded-full bg-sky-400 hover:bg-sky-500">
        <Calculator className="h-5 w-5" />
      </Button>
      <Button size="icon" className="rounded-full bg-sky-400 hover:bg-sky-500">
        <Car className="h-5 w-5" />
      </Button>
      <Button size="icon" className="rounded-full bg-sky-400 hover:bg-sky-500">
        <Tool className="h-5 w-5" />
      </Button>
      <Button size="icon" className="rounded-full bg-sky-400 hover:bg-sky-500">
        <Phone className="h-5 w-5" />
      </Button>
    </div>
  )
}


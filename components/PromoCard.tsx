import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface PromoCardProps {
  title: string
  image: string
  price: string
  monthly?: string
  bonus?: string
  commission?: string
  insurance?: string
}

export default function PromoCard({
  title,
  image,
  price,
  monthly,
  bonus,
  commission = "0% comisión por apertura",
  insurance = "Seguro promocional"
}: PromoCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center my-16">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">{title}</h2>
        {bonus ? (
          <p className="text-lg">
            Bono de ${bonus}
            <br />+<br />
            {commission}
          </p>
        ) : (
          <>
            <p className="text-lg">Desde ${price}</p>
            {monthly && (
              <p className="text-lg">
                Mensualidades desde ${monthly} a través de Volkswagen ¡Ya!
              </p>
            )}
            <p className="text-lg">{commission}</p>
            <p className="text-lg">{insurance}</p>
          </>
        )}
        
        <div className="flex gap-4">
          <Button className="bg-[#001E50] hover:bg-[#001E50]/90">
            Quiero cotizarlo
          </Button>
          <Button variant="outline" className="border-[#001E50] text-[#001E50]">
            Descúbrelo
          </Button>
        </div>
        
        <Button 
          variant="link" 
          className="text-[#001E50] p-0 h-auto"
        >
          Consulta términos y condiciones aquí
        </Button>
      </div>
      
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}


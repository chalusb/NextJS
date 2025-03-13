import { Button } from "@/components/ui/button"
import Image from "next/image"

interface BannerProps {
  image: string
  imageAlt?: string
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
  height?: "sm" | "md" | "lg"
}

const heightClasses = {
  sm: "h-[300px]",
  md: "h-[400px] md:h-[500px]",
  lg: "h-[500px] md:h-[600px]",
}

export function Banner({
  image,
  imageAlt = "Banner image",
  title,
  description,
  buttonText,
  buttonHref,
  height = "md",
}: BannerProps) {
  const hasContent = title || description || (buttonText && buttonHref)

  return (
    <section className={`relative w-full overflow-hidden ${heightClasses[height]}`}>
      {/* Background Image */}
      <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />

      {/* Content - Only rendered if there's content to show */}
      {hasContent && (
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-[1440px] mx-auto">
          <div className="max-w-2xl space-y-6">
            {title && <h2 className="text-3xl md:text-5xl font-bold text-white">{title}</h2>}
            {description && <p className="text-lg md:text-xl text-white/90">{description}</p>}
            {buttonText && buttonHref && (
              <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90 text-white px-8 py-6 text-lg">
                <div className="cursor-pointer">{buttonText}</div>
              </Button>
            )}
          </div>
        </div>
      )}
    </section>
  )
}


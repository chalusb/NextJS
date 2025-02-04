import { Button } from "@/components/ui/button"

interface FinanceIntroProps {
  title: string
  description: string | string[]
  buttonText: string
  buttonHref: string
}

export function FinanceIntro({ title, description, buttonText, buttonHref }: FinanceIntroProps) {
  // Convert description to array if it's a single string
  const descriptions = Array.isArray(description) ? description : [description]

  return (
    <section className="py-16 px-4">
      <div className="max-w-[1440px] mx-auto text-center">
        <h1 className="text-3xl md:text-5xl text-[#0276b3] mb-8">{title}</h1>
        <div className="max-w-4xl mx-auto space-y-6">
          {descriptions.map((text, index) => (
            <p key={index} className="text-lg md:text-xl text-[#4d4d4d] leading-relaxed">
              {text}
            </p>
          ))}
          {buttonText && buttonHref && (
            <div className="mt-8">
              <Button asChild className="bg-[#0276b3] hover:bg-[#0276b3]/90 text-white px-8 py-6 text-lg">
                <a href={buttonHref}>{buttonText}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}


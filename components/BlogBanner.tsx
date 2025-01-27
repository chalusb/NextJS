import Image from "next/image"

export default function BlogBanner() {
  return (
    <section className="py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#4d4d4d] mb-6">Visita Ford Blog</h2>
          <p className="text-lg text-[#4d4d4d]  mx-auto">
            Entérate de temas de actualidad del mundo automotriz, lanzamientos, reseñas, consejos sobre cómo mantener en
            excelentes condiciones tu auto y noticias acerca de Ford. ¡Descúbrelo!
          </p>
        </div>

        <a href="/blog" className="block relative w-full h-[300px] group overflow-hidden rounded-lg">
          <Image src="/assets/img/images.blog.jpg" alt="Visita Ford Blog" fill className="object-cover" priority />        
        </a>
      </div>
    </section>
  )
}


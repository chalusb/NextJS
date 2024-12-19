import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Contacto</h3>
            <p>Teléfono: (55) 1234-5678</p>
            <p>Email: info@vw-villautosur.com.mx</p>
            <p>Dirección: Av. Principal 123, Ciudad de México</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Enlaces rápidos</h3>
            <ul>
              <li><Link href="/modelos" className="hover:text-blue-400">Modelos</Link></li>
              <li><Link href="/promociones" className="hover:text-blue-400">Promociones</Link></li>
              <li><Link href="/servicios" className="hover:text-blue-400">Servicios</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-400">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i> Facebook</a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i> Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Volkswagen Villautosur. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


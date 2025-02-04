import Image from "next/image"
import Link from "next/link"
import { vehicleCategories } from "./data/vehicles"

interface Vehicle {
    name: string;
    price?: string;
    href: string;
    image?: string;
}

export default function VehiculosPage() {
    return (
        <div className="min-h-screen flex flex-col">


            <main className="flex-1 container py-8">
                <h1 className="text-2xl font-medium mb-8">TODOS</h1>

                {vehicleCategories.map((category) => (
                    <section key={category.title} className="mb-12">
                        <h2 className="text-xl font-medium text-blue-600 mb-6">
                            {category.title}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {category.vehicles.map((vehicle) => (
                                <Link
                                    key={vehicle.name}
                                    href={vehicle.href}
                                    className="group relative block"
                                >
                                    <div className="flex flex-col">
                                        <div className="aspect-[4/3] mb-4 relative">
                                            {vehicle.image ? (
                                                <Image
                                                    src={vehicle.image}
                                                    alt={vehicle.name}
                                                    fill
                                                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="text-gray-400">Imagen no disponible</span>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                            {vehicle.name}
                                        </h3>
                                        <p className="text-xs text-gray-600 mt-1 mb-4">
                                            {vehicle.price}
                                        </p>
                                        <div className="flex flex-col gap-2 lg:absolute lg:left-0 lg:right-0 lg:top-[calc(100%-80px)] lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all lg:duration-300 lg:bg-white lg:z-10">
                                            <button className="w-full py-2 bg-[#2d96cd] text-white hover:bg-white hover:text-[#2d96cd] transition-colors border border-[#2d96cd]">
                                                Cotízalo
                                            </button>
                                            <button className="w-full py-2 bg-[#2d96cd] text-white hover:bg-white hover:text-[#2d96cd] transition-colors border border-[#2d96cd]">
                                                Conócelo
                                            </button>
                                            <button className="w-full py-2 bg-[#2d96cd] text-white hover:bg-white hover:text-[#2d96cd] transition-colors border border-[#2d96cd]">
                                                Manéjalo
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </main>


        </div>
    )
} 
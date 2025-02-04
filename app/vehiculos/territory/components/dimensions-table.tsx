import Image from "next/image"

export function DimensionsTable() {
    const dimensions = [
        {
            label: "Largo (mm)",
            ambiente: "4625",
            trend: "4625",
            titanium: "4625",
            darkEdition: "4625"
        },
        {
            label: "Ancho con espejos (mm)",
            ambiente: "1934",
            trend: "1934",
            titanium: "1934",
            darkEdition: "1934"
        },
        {
            label: "Altura (mm)",
            ambiente: "1707",
            trend: "1707",
            titanium: "1707",
            darkEdition: "1707"
        },
        {
            label: "Capacidad de Tanque de combustible (L)",
            ambiente: "60",
            trend: "60",
            titanium: "60",
            darkEdition: "60"
        },
        {
            label: "Capacidad de Cajuela (L)",
            ambiente: "448",
            trend: "448",
            titanium: "448",
            darkEdition: "448"
        }
    ]

    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-light text-center mb-12">
                    Dimensiones exteriores de Ford Territory 2025
                </h2>

                {/* Car Image */}
                <div className="relative h-[400px] w-full mb-8">
                    <Image
                        src="/assets/img/Territory 25/des/dimensiones.jpg"
                        alt="Dimensiones Ford Territory 2025"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Desktop Table - Hidden on Mobile */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-[#002776]">Versión</th>
                                <th className="px-4 py-3 text-right text-[#002776]">Ambiente</th>
                                <th className="px-4 py-3 text-right text-[#002776]">Trend</th>
                                <th className="px-4 py-3 text-right text-[#002776]">Titanium</th>
                                <th className="px-4 py-3 text-right text-[#002776]">Dark Edition</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {dimensions.map((dim, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-3 text-[#002776]">{dim.label}</td>
                                    <td className="px-4 py-3 text-right">{dim.ambiente}</td>
                                    <td className="px-4 py-3 text-right">{dim.trend}</td>
                                    <td className="px-4 py-3 text-right">{dim.titanium}</td>
                                    <td className="px-4 py-3 text-right">{dim.darkEdition}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Version - Sections stacked vertically */}
                <div className="md:hidden space-y-6">
                    {/* Ambiente Section */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="bg-gray-100 px-4 py-3">
                            <h3 className="text-[#002776] font-medium">Ambiente</h3>
                        </div>
                        <div className="divide-y">
                            {dimensions.map((dim, index) => (
                                <div key={index} className="px-4 py-3 flex justify-between">
                                    <span className="text-[#002776]">{dim.label}</span>
                                    <span>{dim.ambiente}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trend Section */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="bg-gray-100 px-4 py-3">
                            <h3 className="text-[#002776] font-medium">Trend</h3>
                        </div>
                        <div className="divide-y">
                            {dimensions.map((dim, index) => (
                                <div key={index} className="px-4 py-3 flex justify-between">
                                    <span className="text-[#002776]">{dim.label}</span>
                                    <span>{dim.trend}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Titanium Section */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="bg-gray-100 px-4 py-3">
                            <h3 className="text-[#002776] font-medium">Titanium</h3>
                        </div>
                        <div className="divide-y">
                            {dimensions.map((dim, index) => (
                                <div key={index} className="px-4 py-3 flex justify-between">
                                    <span className="text-[#002776]">{dim.label}</span>
                                    <span>{dim.titanium}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dark Edition Section */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="bg-gray-100 px-4 py-3">
                            <h3 className="text-[#002776] font-medium">Dark Edition</h3>
                        </div>
                        <div className="divide-y">
                            {dimensions.map((dim, index) => (
                                <div key={index} className="px-4 py-3 flex justify-between">
                                    <span className="text-[#002776]">{dim.label}</span>
                                    <span>{dim.darkEdition}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
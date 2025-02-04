import Image from "next/image"

export function DimensionsTable() {
    const dimensions = [
        {
            label: "Largo (mm)",
            gtV8: "4,810.76",
            gtConvertible: "4,810.76"
        },
        {
            label: "Alto (mm)",
            gtV8: "1,397",
            gtConvertible: "1,391.92"
        },
        {
            label: "Ancho sin espejos (mm)",
            gtV8: "1,915.16",
            gtConvertible: "1,915.16"
        },
        {
            label: "Ancho con espejos (mm)",
            gtV8: "2,080.26",
            gtConvertible: "2,080.26"
        }
    ]

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-light text-center">
                    Dimensiones y Capacidades de Ford Mustang 2024
                </h2>

                {/* Car Image */}
                <div className="relative aspect-video w-full h-auto">
                    <Image
                        src="/assets/img/Mustang 24/web/Dimensiones/dimensiones.png"
                        alt="Dimensiones Ford Mustang 2024"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Desktop Table - Hidden on Mobile */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-[#002776]">Versiones</th>
                                <th className="px-4 py-3 text-right text-[#002776]">GT V8 TM / TA</th>
                                <th className="px-4 py-3 text-right text-[#002776]">GT Convertible</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {dimensions.map((dim, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-3 text-[#002776]">{dim.label}</td>
                                    <td className="px-4 py-3 text-right">{dim.gtV8}</td>
                                    <td className="px-4 py-3 text-right">{dim.gtConvertible}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Version - Sections stacked vertically */}
                <div className="md:hidden space-y-6">
                    {/* GT V8 TM / TA Section */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="bg-gray-100 px-4 py-3">
                            <h3 className="text-[#002776] font-medium">GT V8 TM / TA</h3>
                        </div>
                        <div className="divide-y">
                            {dimensions.map((dim, index) => (
                                <div key={index} className="px-4 py-3 flex justify-between">
                                    <span className="text-[#002776]">{dim.label}</span>
                                    <span>{dim.gtV8}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* GT Convertible Section */}
                    <div className="bg-white rounded-lg shadow">
                        <div className="bg-gray-100 px-4 py-3">
                            <h3 className="text-[#002776] font-medium">GT Convertible</h3>
                        </div>
                        <div className="divide-y">
                            {dimensions.map((dim, index) => (
                                <div key={index} className="px-4 py-3 flex justify-between">
                                    <span className="text-[#002776]">{dim.label}</span>
                                    <span>{dim.gtConvertible}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
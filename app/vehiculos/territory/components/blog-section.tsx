"use client"

import Image from "next/image"

export function BlogSection() {
    return (
        <div className="flex flex-col">
            {/* Desktop */}
            <div className="hidden md:block relative w-full h-[388px] mt-4">
                <Image
                    src="https://www.ford.mx/content/ford/mx/es_mx/home/suv/territory/2025/jcr:content/par/billboard_1904096701/imageComponent/image.imgs.full.high.jpg"
                    alt="Ford Territory 2025"
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                />
            </div>
            {/* Mobile */}
            <div className="block md:hidden relative w-full h-[388px] mt-4">
                <Image
                    src="/assets/img/Territory 25/mb/blog/banner-blog.jpg"
                    alt="Ford Territory 2025"
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                />
            </div>

            {/* Call to Action Section */}
            <section className="bg-[#1B394E] py-8 md:py-16">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Desktop */}
                    <div className="hidden md:grid md:grid-cols-2 gap-16 items-center justify-center">
                        {/* Cotízalo - Desktop */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6 relative">
                                <div className="absolute inset-0 bg-[#3093CD] rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image
                                            src="/assets/img/Mustang 24/web/Iconos/04.png"
                                            alt="Cotízalo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-[#3093CD] text-2xl font-light">Cotízalo</h3>
                        </div>

                        {/* Catálogo - Desktop */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 mb-6 relative">
                                <div className="absolute inset-0 bg-[#3093CD] rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <Image
                                            src="/assets/img/Mustang 24/web/Iconos/05.png"
                                            alt="Catálogo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-[#3093CD] text-2xl font-light">Catálogo Descargable</h3>
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden flex flex-col gap-6">
                        {/* Cotízalo - Mobile */}
                        <div className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 relative">
                                <div className="absolute inset-0 bg-[#3093CD] rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <Image
                                            src="/assets/img/Mustang 24/web/Iconos/04.png"
                                            alt="Cotízalo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-[#3093CD] text-lg font-light">Cotízalo</h3>
                        </div>

                        {/* Catálogo - Mobile */}
                        <div className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 relative">
                                <div className="absolute inset-0 bg-[#3093CD] rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <Image
                                            src="/assets/img/Mustang 24/web/Iconos/05.png"
                                            alt="Catálogo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-[#3093CD] text-lg font-light">Catálogo Descargable</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 
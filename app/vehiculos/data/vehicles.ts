export interface Vehicle {
    name: string;
    price?: string;
    href: string;
    image?: string;
}

export const vehicleCategories: { title: string; vehicles: Vehicle[] }[] = [
    {
        title: "Autos",
        vehicles: [
            {
                name: "Mustang 2024",
                price: "Precio desde $1,199,000",
                href: "/vehiculos/mustang",
                image: "/assets/img/Vehiculos/Autos/Mustang 2024/ford-mustang-2024.png"
            },
        ],
    },
    {
        title: "SUVs & Crossovers",
        vehicles: [
            {
                name: "Territory 2025",
                price: "Precio desde $589,999",
                href: "/vehiculos/territory",
                image: "/assets/img/Vehiculos/SUVs & Crossovers/Territory 2025/ford-territory-2025-camioneta-suv-tecnologica-equipada-informacion.png"
            },
            {
                name: "Bronco Sport 2024",
                price: "Precio desde $759,999",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/SUVs & Crossovers/Bronco sport 2024/ford-bronco-sport-2024-suv-todoterreno-camioneta-offroad-equipamiento.png"
            },
            {
                name: "Bronco 2024",
                price: "Precio desde $959,999",
                href: "/vehiculos/bronco",
                image: "/assets/img/Vehiculos/SUVs & Crossovers/Bronco 2024/ford-bronco-2024-camioneta-suv-todoterreno-caracteristicas-equipadas.png"
            },
            {
                name: "Explorer 2025",
                price: "Precio desde $1,089,999",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/SUVs & Crossovers/Explorer 2025/ford-explorer-2025-camioneta-suv-3-filas-nueva-tecnologia-lujo-info.png"
            },
            {
                name: "Explorer Police Interceptor 2025",
                price: "Precio desde $920,000",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/SUVs & Crossovers/Explorer police interceptor 2025/ford-explorer-police-interceptor-caracteristicas-conversion-patrulla.png"
            },
            {
                name: "Expedition 2024",
                price: "Precio desde $1,569,999",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/SUVs & Crossovers/Expedition 2024/ford-expedition-2024-camioneta-suv-equipamiento-caracteristicas-precio.png"
            },
        ],
    },
    {
        title: "Híbridos y Eléctricos",
        vehicles: [
            {
                name: "Escape Híbrida 2024",
                price: "Precio desde $778,000",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Hibridos y Electricos/Escape Hibrida 2024/ford-escape-2024-suv-hibrida-especificaciones-capacidad-ficha-tecnica.png"
            },
            {
                name: "Mustang Mach-E 2024",
                price: "Precio desde $1,399,999",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Hibridos y Electricos/Mustang Match E 2024/ford-mustang-mach-e-2024-suv-electrica-deportiva-caracteristica-equipa.png"
            },
            {
                name: "Lobo HEV 2024",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Hibridos y Electricos/Lobo HEV 2024/ford-lobo-hibrida-2024-hev-camioneta-pickup-eficiente-potente-trabajo.png"
            },
            {
                name: "Maverick Híbrida 2024",
                price: "Precio desde $679,999",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Hibridos y Electricos/Maverick Hibrida 2024/ford-maverick-hibrida-2024-camioneta-pickup-eficiente-compacta-info.png"
            },
            {
                name: "E-Transit 2024",
                price: "Precio desde $1,595,900",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Hibridos y Electricos/E Transit 2024/ford-etransit-2023-electrica-trabajo-caracteristica-versiones-precio.png"
            }
        ],
    },
    {
        title: "Camiones",
        vehicles: [
            {
                name: "Maverick 2024",
                price: "Precio desde $599,999",
                href: "/vehiculos/maverick",
                image: "/assets/img/Vehiculos/Camiones/Maverick 2024/ford-maverick-2024-pickup-camioneta-versatil-compacta-caracteristicas.png"
            },
            {
                name: "Ranger 2024",
                price: "Precio desde $699,999",
                href: "/vehiculos/ranger",
                image: "/assets/img/Vehiculos/Camiones/Ranger 2024/ford-ranger-2024-pickup-camioneta-caracteristicas-equipo-precio-info.png"
            },
            {
                name: "Ranger 2025",
                price: "Precio desde $785,000",
                href: "/vehiculos/ranger",
                image: "/assets/img/Vehiculos/Camiones/Ranger 2025/ford-ranger-2024-pickup-camioneta-caracteristicas-equipo-precio-info.png"
            },
            {
                name: "F-150 2024",
                price: "Precio desde $989,999",
                href: "/vehiculos/f-150",
                image: "/assets/img/Vehiculos/Camiones/F-150 2024/ford-f150-2024-camioneta-pickup-nueva-caracteristicas-especificaciones.png"
            },
            {
                name: "Lobo 2024",
                price: "Precio desde $1,366,900",
                href: "/vehiculos/lobo",
                image: "/assets/img/Vehiculos/Camiones/Lobo 2024/ford-lobo-2024-camioneta-pickup-carga-trabajo-lujo-caracterisiticas.png"
            },
            {
                name: "Super Duty F-250 2024",
                price: "Precio desde $1,493,000",
                href: "/vehiculos/super-duty",
                image: "/assets/img/Vehiculos/Camiones/Super Duty F 250 2024/ford-superduty-f250-2024-camioneta-pickup-potencia-caracteristica.png"
            },
            {
                name: "Super Duty Chasis 2024",
                price: "Precio desde $1,059,000",
                href: "/vehiculos/super-duty",
                image: "/assets/img/Vehiculos/Camiones/Super Duty Chasis 2024/ford-superduty-chasis-2024-camion-trabajo-especificaciones-capacidad.png"
            },
            {
                name: "Transit Custom 2024",
                price: "Precio desde $850,000",
                href: "/vehiculos/transit",
                image: "/assets/img/Vehiculos/Camiones/Transit Custom 2024/ford-transit-custom-2024-van-comercial-nuevo-diseno-caracteristicas.png"
            },
            {
                name: "Transit Van 2024",
                price: "Precio desde $987,000",
                href: "/vehiculos/transit",
                image: "/assets/img/Vehiculos/Camiones/Transit Van 2024/ford-transit-van-2024-camioneta-carga-caracteristicas-versiones-info.png"
            },
            {
                name: "Transit Van 2025",
                price: "Precio desde $1,030,000",
                href: "/vehiculos/transit",
                image: "/assets/img/Vehiculos/Camiones/Transit van 2025/ford-transit-2025-van-comercial-trabajo-carga-caracteristicas-info.png"
            },
            {
                name: "Transit Chasis 2024",
                price: "Precio desde $787,000",
                href: "/vehiculos/transit",
                image: "/assets/img/Vehiculos/Camiones/Transit Chasis 2024/ford-transit-chasis-2024-camion-adaptable-empresa-carga-negocio.png"
            },
            {
                name: "Transit Chasis 2025",
                price: "Precio desde $820,000",
                href: "/vehiculos/transit",
                image: "/assets/img/Vehiculos/Camiones/Transit chasis 2025/ford-transit-chasis-2025-vehiculo-comercial-flotilla-carga-trabajo.png"
            },
            {
                name: "Transit Pasajeros 2024",
                price: "Precio desde $1,015,000",
                href: "/vehiculos/transit",
                image: "/assets/img/Vehiculos/Camiones/Transit Pasajeros 2024/ford-transit-pasajeros-2024-van-camioneta-furgoneta-vehiculo-comercial.png"
            },
            {
                name: "Transit Pasajeros 2025",
                price: "Precio desde $1,050,000",
                href: "/vehiculos/transit",
                image: "/assets/img/Vehiculos/Camiones/Transit Pasajeros 2025/ford-transit-pasajeros-2024-van-camioneta-furgoneta-vehiculo-comercial.png"
            }
        ],
    },
    {
        title: "Performance",
        vehicles: [
            {
                name: "Mustang GTD 2025",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Performance/Mustang GTD 2025/ford-mustang-gtd-auto-deportivo-edicion-limitada-supercar-performance.png"
            },
            {
                name: "Explorer ST 2025",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Performance/Explorer ST 2025/ford-explorer-st-2025-camioneta-suv-deportiva-alto-desempeno-diseno.png"
            },
            {
                name: "Bronco Raptor 2024",
                price: "Precio desde $2,271,600",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Performance/Bronco Raptor 2024/ford-bronco-raptor-2024-vehiculo-todoterreno-caracteristicas-camioneta.png"
            },
            {
                name: "Ranger Raptor 2024",
                price: "Precio desde $1,368,000",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Performance/Ranger Raptor 2024/ford-ranger-raptor-2024-pickup-4x4-caracteristicas-equipo-precio-info.png"
            },
            {
                name: "Lobo Raptor 2024",
                price: "Precio desde $2,335,900",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Performance/Lobo Raptor 2024/ford-lobo-raptor-2024-camioneta-pickup-deportiva-potente-performance-.png"
            },
        ],
    },
    {
        title: "Ediciones Especiales",
        vehicles: [

            {
                name: "Mustang Dark Horse 2024",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Ediciones Especiales/Mustang Dark Horse/ford-mexico-mustang-dark-horse-showroom.png"
            },
            {
                name: "Bronco Everglades 2024",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Ediciones Especiales/Bronco Everglades 2024/ford-bronco-everglades-2024-suv-4x4-todoterreno-equipamiento-info.png"
            },
            {
                name: "Bronco Sport Black Appearance 2024",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Ediciones Especiales/Bronco Sport Black Appearance 2024/ford-bronco-sport-black-appearance-2024-camioneta-suv-edicion-especial.png"
            },
            {
                name: "Maverick Tremor 2024",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Ediciones Especiales/Maverick Tremor 2024/ford-maverick-tremor-2024-camioneta-pickup-offroad-precio-equipamiento.png"
            },
            {
                name: "Expedition Timberline 2024",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Ediciones Especiales/Expedition Timberline 2024/ford-expedition-timberline-camioneta-suv-offroad-edicion-especial.png"
            },
            {
                name: "Expedition Stealth Performance 2024",
                href: "/vehiculos/",
                image: "/assets/img/Vehiculos/Ediciones Especiales/Expedition Stealth Performance 2024/ford-expedition-stealth-performance-suv-deportiva-edicion-especial.png"
            },
        ],
    },
]


import { Button } from "@/components/ui/button"
import { Vehicle360View } from "@/components/vehicle-360-view"
import { BlogSection } from "../territory/components/blog-section"
import { DetailsSection } from "../territory/components/details-section"
import { GallerySection } from "../territory/components/gallery-section"
import { HeroSection } from "../territory/components/hero-section"
import { VersionesSection } from "../territory/components/versions-section"
import ColorCarousel from "./components/color-carousel"
import ImageCarousel from "./components/image-carousel"
import { LegalSection } from "./components/legal-section"

export default function TerritoryPage() {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden">


            <main className="flex-1">
                <HeroSection />
                <DetailsSection />
                <ColorCarousel />
                <ImageCarousel />
                <VersionesSection />
                <GallerySection />
                <BlogSection />
                <LegalSection />



            </main>

        </div>
    )
} 
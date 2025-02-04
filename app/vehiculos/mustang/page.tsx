"use client"

import { HeroSection } from "./components/hero-section"
import { DetailsSection } from "./components/details-section"
import { GallerySection } from "./components/gallery-section"
import { VersionesSection } from "./components/versions-section"
import { BlogSection } from "./components/blog-section"
import ImageCarousel from "./components/image-carousel"
import ColorCarousel from "./components/color-carousel"
import { LegalSection } from "./components/legal-section"

export default function MustangPage() {
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
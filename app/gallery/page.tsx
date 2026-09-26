import PageTopSection from "@/components/common/PageTopSection";
import GallerySection from "@/sections/GallerySection";
import siteData from "@/data/index";

export default function GalleryPage() {
    const galleryData = siteData.gallery;

    return (
        <main>
            <PageTopSection
                title="Gallery"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Gallery", href: "/gallery" },
                ]}
            />
            <GallerySection data={galleryData} />
        </main>
    );
}
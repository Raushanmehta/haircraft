import NotFoundSection from "@/sections/NotFoundSection";
import site from "@/data";

export default function NotFoundPage() {
    return (
        <main className="relative bg-[#fcfbfa]">
            {/* Top Dark Gradient Header Overlay - Perfectly feathered multi-stop gradient for desktop (lg) & mobile */}
            <div
                className="absolute top-0 left-0 right-0 h-32 sm:h-40 lg:h-64 pointer-events-none z-30"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(18,18,18,0.72) 0%, rgba(18,18,18,0.52) 25%, rgba(18,18,18,0.30) 50%, rgba(18,18,18,0.12) 75%, rgba(18,18,18,0.03) 90%, transparent 100%)",
                }}
                aria-hidden="true"
            />
            <NotFoundSection data={site.notFound} />
        </main>
    );
}
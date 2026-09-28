import NotFoundSection from "@/sections/NotFoundSection";
import site from "@/data";

export default function NotFoundPage() {
    return (
        <main>
            <NotFoundSection data={site.notFound} />
        </main>
    );
}
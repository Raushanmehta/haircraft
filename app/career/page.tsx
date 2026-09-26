import PageTopSection from "@/components/common/PageTopSection";
import CareerSection from "@/sections/CareerSection";
import siteData from "@/data/index";

export default function CareerPage() {
    const careerData = siteData.career;

    return (
        <main>
            <PageTopSection
                title="Career"
                breadcrumbs={
                    [
                        { label: "Home", href: "/" },
                        { label: "Career", href: "/career" },
                    ]
                }
            />
            <CareerSection data={careerData} />
        </main>
    );
}
import PageTopSection from "@/components/common/PageTopSection";
import ProcessSection from "@/sections/home/ProcessSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";

export default function WhyChooseUsPage() {
    return (
        <main>
            <PageTopSection title="Why Choose Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why Choose Us", href: "/why-choose-us" },]} />
            <WhyChooseUsSection />
            <ProcessSection />
        </main>
    )
}
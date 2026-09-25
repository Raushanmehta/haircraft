import PageTopSection from "@/components/common/PageTopSection";
import AboutSection from "@/sections/home/AboutSection";
import ProcessSection from "@/sections/home/ProcessSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";

export default function AboutPage() {
    return (
        <main>
            <PageTopSection title="About Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" },]} />
            <AboutSection />
            <WhyChooseUsSection />
            <ProcessSection />
        </main>
    )
}
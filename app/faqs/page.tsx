import PageTopSection from "@/components/common/PageTopSection";
import FAQsSection from "@/sections/FaqsSection";
import site from "@/data";

export default function FAQsPage() {
    return (
        <main>
            <PageTopSection
                title="FAQs"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "FAQs", href: "/faqs" },
                ]}
            />
            <FAQsSection data={site.faqs} />
        </main>
    );
}
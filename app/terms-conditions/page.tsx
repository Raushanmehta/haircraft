import PageTopSection from "@/components/common/PageTopSection";
import LegalSection from "@/sections/LegalSection";
import site from "@/data";

export default function TermsAndConditionsPage() {
    return (
        <main>
            <PageTopSection
                title="Terms And Conditions"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Terms And Conditions", href: "/terms-conditions" },
                ]}
            />
            <LegalSection data={site.legal.termsAndConditions} />
        </main>
    );
}
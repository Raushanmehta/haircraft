import PageTopSection from "@/components/common/PageTopSection";
import LegalSection from "@/sections/LegalSection";
import site from "@/data";

export default function CancellationPolicyPage() {
    return (
        <main>
            <PageTopSection
                title="Cancellation Policy"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cancellation Policy", href: "/cancellation-policy" },
                ]}
            />
            <LegalSection data={site.legal.cancellationPolicy} />
        </main>
    );
}
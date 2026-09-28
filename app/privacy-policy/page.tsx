import PageTopSection from "@/components/common/PageTopSection";
import LegalSection from "@/sections/LegalSection";
import site from "@/data";

export default function PrivacyPolicyPage() {
    return (
        <main>
            <PageTopSection
                title="Privacy Policy"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Privacy Policy", href: "/privacy-policy" },
                ]}
            />
            <LegalSection data={site.legal.privacyPolicy} />
        </main>
    );
}
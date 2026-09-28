import PageTopSection from "@/components/common/PageTopSection";
import ContactSection from "@/sections/ContactSection";
import site from "@/data";

export default function ContactUsPage() {
    return (
        <main>
            <PageTopSection
                title="Contact Us"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us", href: "/contact-us" },
                ]}
            />
            <ContactSection data={site.contact} />
        </main>
    );
}
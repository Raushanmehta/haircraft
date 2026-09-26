import PageTopSection from "@/components/common/PageTopSection";
import ServiceDetailSection from "@/pages/ServiceDetailSection";
import siteData from "@/data/index";

export function generateStaticParams() {
    const serviceList = (siteData.services as any).ServiceItem || (siteData.services as any).list || [];
    return serviceList.map((service: any) => ({
        slug: service.id,
    }));
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { services } = siteData;
    const serviceList = (services as any).ServiceItem || (services as any).list || [];
    const activeService = serviceList.find((s: any) => s.id === slug) || serviceList[0];

    return (
        <main>
            <PageTopSection
                title={activeService?.name || activeService?.title || "Service Details"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: activeService?.name || activeService?.title || "Details", href: `/services/${slug}` },
                ]}
            />
            <ServiceDetailSection
                service={activeService}
                allServices={serviceList}
                appointmentCard={activeService?.appointmentCard || (services as any).appointmentCard}
                needHelpCard={activeService?.needHelpCard || (services as any).needHelpCard}
            />
        </main>
    );
}
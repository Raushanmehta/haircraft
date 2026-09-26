import PageTopSection from "@/components/common/PageTopSection";
import CareerDetailSection from "@/pages/CareerDetailSection";
import siteData, { JobOpening } from "@/data/index";

export function generateStaticParams() {
    const jobs = siteData.career?.jobs || [];
    return jobs.map((job: JobOpening) => ({
        slug: job.id,
    }));
}

export default async function CareerDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const careerData = siteData.career;
    const activeJob =
        careerData?.jobs?.find((job: JobOpening) => job.id === slug) || careerData?.jobs?.[0];

    return (
        <main>
            <PageTopSection
                title={activeJob?.title || "Career Details"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: careerData?.pageTop?.title || "Career", href: "/career" },
                    { label: activeJob?.title || "Details", href: `/career/${slug}` },
                ]}
            />
            <CareerDetailSection
                job={activeJob}
                detailConfig={careerData?.detailPage}
                formConfig={careerData?.applicationForm}
            />
        </main>
    );
}
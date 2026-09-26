import PageTopSection from "@/components/common/PageTopSection";

export default function BlogPage() {
    return (
        <main>
            <PageTopSection
                title="Blog"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                ]}
            />
        </main>
    );
}
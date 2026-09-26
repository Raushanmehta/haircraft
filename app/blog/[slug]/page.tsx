import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailSection from "@/pages/BlogDetailSection";

export default function BlogDetailPage() {
    return (
        <main>
            <PageTopSection
                title="Blog"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                ]}
            />
            <BlogDetailSection />
        </main>
    );
}
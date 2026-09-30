import PageTopSection from "@/components/common/PageTopSection";
import BlogDetailSection from "@/pages/BlogDetailSection";
import siteData from "@/data/index";

export function generateStaticParams() {
    const posts = siteData.blog?.posts || [];
    return posts.map((post: any) => ({
        slug: post.slug.replace("/blog/", ""),
    }));
}

export default async function BlogDetailPage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ category?: string }>;
}) {
    const { slug } = await params;
    const resolvedSearchParams = searchParams ? await searchParams : undefined;
    const initialCategory = resolvedSearchParams?.category;

    const blogData = siteData.blog;
    const posts = blogData?.posts || [];
    const activePost =
        posts.find(
            (p: any) => p.slug === `/blog/${slug}` || p.slug === slug || p.id === slug
        ) || posts[0];

    return (
        <main>
            <PageTopSection
                title={"Blog Details"}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog Detail", href: "/blog Details" },

                ]}
            />
            <BlogDetailSection
                post={activePost}
                detailConfig={blogData?.detailPage}
                metaIcons={blogData?.metaIcons}
                recentPosts={posts}
                initialCategory={initialCategory}
            />
        </main>
    );
}
import PageTopSection from "@/components/common/PageTopSection";
import GetAQuoteSection from "@/sections/GetAQuoteSection";
import siteData from "@/data/index";

export default function GetAQuotePage() {
    const quoteData = siteData.getAQuote;

    return (
        <main>
            <PageTopSection
                title="Get A Quote"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Get A Quote", href: "/get-a-quote" },
                ]}
            />
            <GetAQuoteSection data={quoteData} />
        </main>
    );
}
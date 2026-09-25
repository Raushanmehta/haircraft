import PageTopSection from "@/components/common/PageTopSection";
import TeamDetailSection from "@/pages/TeamDetailSection";
import siteData from "@/data/index";

export function generateStaticParams() {
    return siteData.team.members.map((member) => ({
        slug: member.id,
    }));
}

export default async function TeamDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const { team } = siteData;
    const member = team.members.find((m) => m.id === slug) || team.members[0];

    const mappedSkills = [];
    if (member.stack) {
        if (member.stack.name1) mappedSkills.push({ name: member.stack.name1, percentage: member.stack.percentage1 });
        if (member.stack.name2) mappedSkills.push({ name: member.stack.name2, percentage: member.stack.percentage2 });
        if (member.stack.name3) mappedSkills.push({ name: member.stack.name3, percentage: member.stack.percentage3 });
        if (member.stack.name4) mappedSkills.push({ name: member.stack.name4, percentage: member.stack.percentage4 });
    }

    return (
        <main>
            <PageTopSection
                title="Team Details"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Detail", href: "/our-team" },
                ]}
            />
            <TeamDetailSection
                name={member.name}
                role={member.role}
                subtitle={member.subtitle}
                description={member.description}
                bioParagraphs={member.bioParagraphs}
                experience={member.experience}
                specialization={member.specialization}
                location={member.location}
                email={member.email}
                phone={member.phone}
                image={member.image}
                socials={member.socials}
                skills={mappedSkills.length > 0 ? mappedSkills : undefined}
            />
        </main>
    );
}
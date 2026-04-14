import { PageTitle } from "@/components/ui/page-title";
import { TeamMembers } from "@/components/ui/team-members";
import { JsonLd } from "@/components/ui/json-ld";
import {
  aboutPageJsonLd,
  createPageMetadata,
  organizationJsonLd,
  absoluteUrl,
} from "@/lib/seo";
import { getTeam } from "@/app/about/utils";

export const metadata = createPageMetadata({
  title: "Founder-Led Software Consultancy",
  description:
    "Treehouse Technology is a founder-led software consultancy with deep startup experience across product, engineering, and delivery.",
  canonicalPath: "/about",
});

export default function Page() {
  const team = getTeam();

  return (
    <section className="space-y-6">
      <JsonLd
        data={[
          organizationJsonLd(),
          aboutPageJsonLd({
            description:
              "Treehouse Technology is a founder-led software consultancy with deep startup experience across product, engineering, and delivery.",
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Treehouse Technology team",
            itemListElement: team.map((member, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Person",
                name: member.metadata.name,
                jobTitle: member.metadata.role,
                image: absoluteUrl(member.metadata.image),
              },
            })),
          },
        ]}
      />

      <div>
        <PageTitle title="About Treehouse Technology" />

        <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">{`Treehouse Technology was founded in 2023 to bring startup agility to small and medium teams. We combine product development experience, technical strategy, and hands-on implementation so teams can move quickly without losing reliability.`}</p>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">{`The focus is practical: understand the business goal, define the smallest useful build, and deliver software that can grow with the product. That makes the site a better representation of the kind of work we actually do with clients.`}</p>
      </div>

      <TeamMembers />
    </section>
  );
}

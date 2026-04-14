import { Metadata } from "next";
import { PageTitle } from "@/components/ui/page-title";
import { TeamMembers } from "@/components/ui/team-members";

export const metadata: Metadata = {
  title: "About Treehouse Technology",
  description:
    "Treehouse Technology is a founder-led software consultancy with deep startup experience across product, engineering, and delivery.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return (
    <section className="space-y-6">
      <div>
        <PageTitle title="About Treehouse Technology" />

        <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">{`Treehouse Technology was founded in 2023 to bring startup agility to small and medium teams. We combine product development experience, technical strategy, and hands-on implementation so teams can move quickly without losing reliability.`}</p>
        <p className="mt-4 max-w-2xl text-neutral-700 dark:text-neutral-300">{`The focus is practical: understand the business goal, define the smallest useful build, and deliver software that can grow with the product. That makes the site a better representation of the kind of work we actually do with clients.`}</p>
      </div>

      <TeamMembers />
    </section>
  );
}

import { PageTitle } from "@/components/ui/page-title";
import { TeamMembers } from "@/components/ui/team-members";

export const metadata = {
  title: "About",
  description: "About Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <div>
        <PageTitle title="About" />

        <p>{`Treehouse Technology was founded in 2023 with the goal of bringing 
      start-up agility to small and medium teams through real-world product development
      experience and processes.`}</p>
      </div>

      <TeamMembers />
    </section>
  );
}

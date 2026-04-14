import { getTeam } from "@/app/about/utils";
import Image from "next/image";
import { MdxContent } from "@/components/ui/mdx-content";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  cvLink?: string;
  cvLabel: "Experience" | "CV";
}

function getProfileContent({
  description,
  cvLink,
  cvLabel,
}: Pick<TeamMemberProps, "description" | "cvLink" | "cvLabel">) {
  if (!cvLink?.trim()) {
    return description;
  }

  return `${description}

**${cvLabel}:** [${cvLabel}](${cvLink.trim()})`;
}

async function TeamMember({
  image,
  name,
  role,
  description,
  cvLink,
  cvLabel,
}: TeamMemberProps) {
  return (
    <article className="grid gap-5 rounded-3xl border border-neutral-200 bg-white/75 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/70 sm:grid-cols-[150px_1fr] sm:items-start">
      <Image
        className="rounded-[18px] border border-neutral-200 dark:border-neutral-800"
        src={image}
        alt={name}
        width="150"
        height="150"
      />
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            {name}
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {role}
          </p>
        </div>
        <MdxContent
          source={getProfileContent({ description, cvLink, cvLabel })}
          className="prose prose-article"
        />
      </div>
    </article>
  );
}

export async function TeamMembers() {
  const team = getTeam();

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        Team
      </h3>
      <div className="space-y-4">
        {team.map((teamMember, index) => (
          <TeamMember
            key={`${teamMember.metadata.name}-${teamMember.metadata.role}-${index}`}
            image={teamMember.metadata.image}
            name={teamMember.metadata.name}
            role={teamMember.metadata.role}
            description={teamMember.content}
            cvLink={teamMember.metadata.cvLink}
            cvLabel={teamMember.metadata.cvLabel}
          />
        ))}
      </div>
    </div>
  );
}

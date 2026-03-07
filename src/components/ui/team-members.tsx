import { Fragment } from "react";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import { getTeam } from "@/app/about/utils";
import Image from "next/image";

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
  const { default: MDXContent } = await evaluate(
    getProfileContent({ description, cvLink, cvLabel }),
    {
      ...runtime,
      Fragment,
    }
  );

  return (
    <div className="grid grid-flow-col grid-rows-2 gap-4">
      <Image
        className="row-span-2"
        src={image}
        alt={name}
        width="150"
        height="150"
        style={{ borderRadius: "10%" }}
      />
      <div>
        <h3 className="font-semibold text-med">{name}</h3>
        <h4>
          <i>{role}</i>
        </h4>
        <MDXContent />
      </div>
    </div>
  );
}

export async function TeamMembers() {
  const team = getTeam();

  return (
    <div>
      <h3 className="font-semibold text-2xl mt-8 mb-4">Team</h3>
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
  );
}

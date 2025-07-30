import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import { getTeam } from "@/app/about/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

async function TeamMember({ name, role, description }: TeamMemberProps) {
  const { default: MDXContent } = await evaluate(description, runtime);

  return (
    <div>
      <h3 className="font-semibold text-med">{name}</h3>
      <h4>
        <i>{role}</i>
      </h4>
      <MDXContent />
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
          name={teamMember.metadata.name}
          role={teamMember.metadata.role}
          description={teamMember.content}
        />
      ))}
    </div>
  );
}

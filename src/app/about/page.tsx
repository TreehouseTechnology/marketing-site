import TeamMember from "@/components/team-member";

export const metadata = {
  title: "About",
  description: "About Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <div>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
        <p>{`Treehouse Technology was founded in 2023 with the goal of bringing 
      start-up agility to small and medium teams through real-world product development
      experience and processes.`}</p>
      </div>

      <div>
        <h3 className="font-semibold text-large mt-8 mb-4">Team</h3>

        <div>
          <h3>Justin Makaila</h3>
          <p>
            {`Justin is an experienced full-stack engineer and founder with 13 years of experience. 
              Justin has worked at start-ups his career, leading teams and developing processes to help scale
              companies from 0 to hundreds of thousands of users. In his free time, Justin plays golf and simraces,
              and is an organizer/founder at `}
            <a href="https://ftr.events">FTR Events</a>
          </p>
        </div>
      </div>
    </section>
  );
}

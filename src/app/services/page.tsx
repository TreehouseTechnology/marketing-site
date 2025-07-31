import Link from "next/link";
import ServiceOffering from "@/components/ui/service-offering";
import { PageTitle } from "@/components/ui/page-title";

export const metadata = {
  title: "Services",
  description: "Services by Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <PageTitle title="Services" />

      <p>{`Treehouse Technology designs, develops, and delivers scalable, full-stack mobile and web applications
      tailored to your business needs. From MVPs to production-grade systems, we provide end-to-end technical 
      expertise to turn your ideas into high-quality software.`}</p>

      <div className="flex flex-col gap-8 mt-8 mb-8">
        <ServiceOffering
          title="Mobile App Development"
          items={[
            "Native app development (iOS & Android & React Native)",
            "Native and hybrid app development (React Native & Expo)",
            "Existing application maintenance",
          ]}
        />

        <ServiceOffering
          title="Web Application Development"
          items={[
            "Front-end development via Next.js, React, and other modern frameworks",
            "Back-end APIs with Node.js and Python",
            "Real-time APIs with WebSockets and gRPC",
            "Existing application maintenance",
          ]}
        />

        <ServiceOffering
          title="Full-stack Architecture"
          items={[
            "Scalable and maintainable architecture for all applications and use-cases",
            "RESTful, GraphQL, and gRPC APIs with full coverage and schema documentation",
            "Authentication and authorization and security best-practices, for all cloud providers.",
          ]}
        />

        <ServiceOffering
          title="Cloud Infrastructure and DevOps"
          items={[
            "Cloud deployment (AWS, Vercel, Firebase, etc)",
            "CI/D pipeline setup (CircleCI, TravisCI, Github Actions, Bitbucket Pipelines)",
            "Infrastructure-as-code and containerization (Docker)",
          ]}
        />

        <ServiceOffering
          title="Consulting and Technical Strategy"
          items={[
            "MVP scoping and rapid prototyping",
            "Technical audits and code review",
            "Team augmentation and technical leadership",
          ]}
        />
      </div>

      <Link href="/contact">Interested? Get in touch!</Link>
    </section>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import ServiceOffering from "@/components/ui/service-offering";
import { PageTitle } from "@/components/ui/page-title";

export const metadata: Metadata = {
  title: "Mobile and Web App Development Services",
  description:
    "Treehouse Technology provides MVP delivery, architecture, DevOps, and technical strategy for startups and small teams.",
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return (
    <section className="space-y-6">
      <PageTitle title="Mobile and Web App Development Services" />

      <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">{`Treehouse Technology designs, develops, and delivers scalable mobile and web applications tailored to your business needs. From MVPs to production-grade systems, we provide end-to-end technical expertise that helps teams ship faster and stay maintainable.`}</p>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">
          What we help with
        </h2>
        <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
          We work across product delivery, platform architecture, and
          operational readiness. That includes the build itself, but also the
          decisions that make the build durable.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <ServiceOffering
          title="Mobile App Development"
          items={[
            "iOS and Android app development with React Native and Expo",
            "Native and hybrid app development for new products and existing apps",
            "Existing application maintenance",
          ]}
        />

        <ServiceOffering
          title="Web Application Development"
          items={[
            "Front-end development with Next.js, React, and modern component systems",
            "Back-end APIs with Node.js and Python",
            "Real-time APIs with WebSockets and gRPC",
            "Existing application maintenance",
          ]}
        />

        <ServiceOffering
          title="Full-stack Architecture"
          items={[
            "Scalable and maintainable architecture for all applications and use-cases",
            "RESTful, GraphQL, and gRPC APIs with schema documentation",
            "Authentication, authorization, and security best practices across cloud providers",
          ]}
        />

        <ServiceOffering
          title="Cloud Infrastructure and DevOps"
          items={[
            "Cloud deployment (AWS, Vercel, Firebase, etc)",
            "CI/CD pipeline setup (CircleCI, Travis CI, GitHub Actions, Bitbucket Pipelines)",
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

      <div className="space-y-3">
        <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
          If you need one partner to help define the scope, build the product,
          and support the launch, we can help. We are especially useful for
          teams that need startup speed with stronger engineering discipline.
        </p>
        <Link className="underline decoration-neutral-400 underline-offset-4" href="/contact">
          Interested? Get in touch.
        </Link>
      </div>
    </section>
  );
}

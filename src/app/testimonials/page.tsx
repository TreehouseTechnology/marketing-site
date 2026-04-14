import { Metadata } from "next";
import { ComingSoon } from "@/components/ui/coming-soon";
import { PageTitle } from "@/components/ui/page-title";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client references and testimonials from Treehouse Technology engagements.",
  alternates: {
    canonical: "/testimonials",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <section className="space-y-6">
      <PageTitle title="Testimonials" />
      <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
        Public testimonials are still being collected. If you are evaluating a
        project with us, we can share relevant references directly and talk
        through prior work in more detail.
      </p>
      <ComingSoon />
    </section>
  );
}

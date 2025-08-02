import { Metadata } from "next";
import { ComingSoon } from "@/components/ui/coming-soon";
import { PageTitle } from "@/components/ui/page-title";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Testimonials from working with Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <PageTitle title="Testimonials" />
      <ComingSoon />
    </section>
  );
}

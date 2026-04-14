import ContactForm from "@/components/containers/contact-form";
import { PageTitle } from "@/components/ui/page-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Treehouse Technology",
  description:
    "Contact Treehouse Technology about mobile, web, and full-stack development work.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <section className="space-y-6">
      <PageTitle title="Contact Treehouse Technology" />
      <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
        Tell us what you are building, what stage you are at, and where you
        need help. Typical conversations include MVP scoping, technical audits,
        product delivery, and short-term engineering support.
      </p>
      <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
        If you want to skip the form,{" "}
        <a
          href="https://calendly.com/justin-treehousetechnology/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-4 hover:text-neutral-700 dark:text-neutral-100 dark:hover:text-neutral-300"
        >
          book a 30-minute call
        </a>
        .
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}

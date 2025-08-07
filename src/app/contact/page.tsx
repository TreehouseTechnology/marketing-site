import ContactForm from "@/components/containers/contact-form";
import { PageTitle } from "@/components/ui/page-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <PageTitle title="Contact" />
      <p>Interested in working with us? Reach out!</p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}

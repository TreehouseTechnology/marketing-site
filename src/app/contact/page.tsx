import ContactForm from "@/components/containers/contact-form";
import { PageTitle } from "@/components/ui/page-title";

export const metadata = {
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

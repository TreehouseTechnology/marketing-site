import Contact from "@/components/contact-form";
import { sendEmail } from "../actions";

export const metadata = {
  title: "Contact",
  description: "Contact Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <p>Interested in working with us? Reach out!</p>
      <Contact onSubmit={sendEmail} />
    </section>
  );
}

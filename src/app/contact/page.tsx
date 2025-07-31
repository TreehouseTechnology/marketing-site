import ContactForm from "@/components/containers/contact-form";

export const metadata = {
  title: "Contact",
  description: "Contact Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
      <p>Interested in working with us? Reach out!</p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}

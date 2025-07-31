import { ComingSoon } from "@/components/ui/coming-soon";

export const metadata = {
  title: "Testimonials",
  description: "Testimonials from working with Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Testimonials
      </h1>
      <ComingSoon />
    </section>
  );
}

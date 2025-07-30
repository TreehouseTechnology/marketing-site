import { ComingSoon } from "@/components/coming-soon";

export const metadata = {
  title: "Services",
  description: "Services by Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Services</h1>
      <ComingSoon />
    </section>
  );
}

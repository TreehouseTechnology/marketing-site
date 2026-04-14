import { Metadata } from "next";
import { PageTitle } from "@/components/ui/page-title";
import { ProductListings } from "@/components/ui/product-listings";

export const metadata: Metadata = {
  title: "Products and Platform Work",
  description:
    "Selected products and platform work built by Treehouse Technology.",
  alternates: {
    canonical: "/products",
  },
};

export default function Page() {
  return (
    <section className="space-y-6">
      <PageTitle title="Products and Platform Work" />
      <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
        These projects show the kind of engineering work Treehouse Technology
        can deliver: products with real users, practical architecture, and a
        bias toward shipping. Some public projects are listed below, while other
        client work remains private.
      </p>
      <ProductListings />
    </section>
  );
}

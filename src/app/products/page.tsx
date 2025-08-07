import { Metadata } from "next";
import { PageTitle } from "@/components/ui/page-title";
import { ProductListings } from "@/components/ui/product-listings";

export const metadata: Metadata = {
  title: "Products",
  description: "Products by Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <PageTitle title="Products" />
      <ProductListings />
    </section>
  );
}

import { ProductListings } from "@/components/product-listings";

export const metadata = {
  title: "Products",
  description: "Products by Treehouse Technology.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Products</h1>
      <ProductListings />
    </section>
  );
}

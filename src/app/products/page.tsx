import { PageTitle } from "@/components/ui/page-title";
import { ProductListings } from "@/components/ui/product-listings";
import { JsonLd } from "@/components/ui/json-ld";
import {
  collectionPageJsonLd,
  createPageMetadata,
  organizationJsonLd,
} from "@/lib/seo";
import { getProductListings } from "@/app/products/utils";

export const metadata = createPageMetadata({
  title: "Software Products & Open-Source Projects",
  description:
    "Selected software products and open-source projects built by Treehouse Technology.",
  canonicalPath: "/products",
});

export default function Page() {
  const products = getProductListings();

  return (
    <section className="space-y-6">
      <JsonLd
        data={[
          organizationJsonLd(),
          collectionPageJsonLd({
            name: "Software Products & Open-Source Projects",
            description:
              "Selected software products and open-source projects built by Treehouse Technology.",
            pathname: "/products",
            items: products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type":
                  product.metadata.type === "open-source"
                    ? "SoftwareSourceCode"
                    : "SoftwareApplication",
                name: product.metadata.title,
                ...(product.metadata.link
                  ? { url: product.metadata.link }
                  : {}),
              },
            })),
          }),
        ]}
      />

      <PageTitle title="Software Products & Open-Source Projects" />
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

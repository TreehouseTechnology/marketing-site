import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import { getProductListings } from "@/app/products/utils";

interface ProductListingProps {
  title: string;
  link?: string;
  linkText?: string;
  description: string;
}

async function ProductListing({
  title,
  link,
  linkText,
  description,
}: ProductListingProps) {
  const { default: MDXContent } = await evaluate(description, runtime);

  return (
    <div>
      <h3 className="font-semibold text-med mb-4 tracking-tighter">
        {title} (<a href={link}>{linkText}</a>)
      </h3>
      <MDXContent />
    </div>
  );
}

export function ProductListings() {
  const allListings = getProductListings();

  return (
    <div className="flex flex-col gap-8 mt-8">
      {allListings.map((product, index) => (
        <ProductListing
          key={`${product.metadata.title}-${index}`}
          title={product.metadata.title}
          link={product.metadata.link}
          linkText={product.metadata.linkText}
          description={product.content}
        />
      ))}
    </div>
  );
}

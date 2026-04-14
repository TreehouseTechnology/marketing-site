import { getProductListings } from "@/app/products/utils";
import { MdxContent } from "@/components/ui/mdx-content";

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
  return (
    <div>
      <h3 className="font-semibold text-med mb-4 tracking-tighter">
        {title}
        {link && (
          <>
            {" "}
            (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkText}
            </a>
            )
          </>
        )}
      </h3>
      <MdxContent source={description} className="prose" />
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

import { getProductListings } from "@/app/products/utils";
import { MdxContent } from "@/components/ui/mdx-content";

interface ProductListingProps {
  title: string;
  link?: string;
  linkText?: string;
  type: "product" | "open-source";
  description: string;
}

async function ProductListing({
  title,
  link,
  linkText,
  type,
  description,
}: ProductListingProps) {
  const typeLabel = type === "open-source" ? "open-source" : "product";

  return (
    <article className="rounded-3xl border border-neutral-200 bg-white/75 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/70">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
            {typeLabel}
          </p>
          <h3 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
            {title}
          </h3>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-100 dark:hover:text-neutral-100"
          >
            {linkText ?? "link"}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      <div className="mt-5">
        <MdxContent source={description} className="prose prose-entry" />
      </div>
    </article>
  );
}

export function ProductListings() {
  const allListings = getProductListings();

  return (
    <div className="mt-8 flex flex-col gap-6">
      {allListings.map((product, index) => (
        <ProductListing
          key={`${product.metadata.title}-${index}`}
          title={product.metadata.title}
          link={product.metadata.link}
          linkText={product.metadata.linkText}
          type={product.metadata.type}
          description={product.content}
        />
      ))}
    </div>
  );
}

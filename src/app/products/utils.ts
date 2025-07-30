import path from "path";
import { ProductMetadataSchema } from "@/utils/schema";
import { getMDXData } from "@/utils/mdx";

export function getProductListings() {
  return getMDXData(
    path.join(process.cwd(), "src", "app", "products", "listings"),
    ProductMetadataSchema
  );
}

import React from "react";
import ComingSoon from "@/components/ComingSoon";

export interface ProductsProps {}

export const Products: React.FC<ProductsProps> = () => (
  <ComingSoon title="products" />
);

export default Products;

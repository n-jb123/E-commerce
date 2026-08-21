import { SelectChangeEvent } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { product } from "../../cart/types/typesCart";

export type CompareObjectsSelectorType = {
  product1: string;
  product2: string;
  handleChange1: (event: SelectChangeEvent) => void;
  handleChange2: (event: SelectChangeEvent) => void;
  products: NoInfer<any[]> | undefined;
};

export type MdCompareObjectsCardType = {
  findProduct1: product;
  findProduct2: product;
  router: AppRouterInstance;
  addToCart: (product: product) => void;
  productsFavorite: product[];
  toggleFavorite: (product: product) => void;
};

export type xsCompareObjectsCardType = {
  findProduct1: product;
  findProduct2: product;
  addToCart: (product: product) => void;
  router: AppRouterInstance;
  productsFavorite: product[];
  toggleFavorite: (product: product) => void;
};

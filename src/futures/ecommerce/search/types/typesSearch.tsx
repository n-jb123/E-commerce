
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
import { categories } from "../../home/types/typesHome";
import { product } from "../../cart/types/typesCart";

export type FilterValues = {
  category: string | null;
  price: [number, number];
  rating: number;
};

export type searchFilterType = {
  filters: FilterValues;
  setFilters: Dispatch<SetStateAction<FilterValues>>;
  handleReset: () => void;
  categories:NoInfer<categories[]> | undefined
};

export type searchProductsType = {
  products: product[];
  addToCart: (product: product) => void;
  router: AppRouterInstance;
  toggleFavorite: (product: product) => void;
  productsFavorite: product[];
  loading: boolean;
};

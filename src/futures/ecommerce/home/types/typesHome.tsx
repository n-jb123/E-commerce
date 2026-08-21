import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { product } from "../../cart/types/typesCart";

export type homeSwiperType = {
  products: product[] | undefined;
  router: AppRouterInstance;
  addToCart: (product: product) => void;
  toggleFavorite: (product: product) => void;
  productsFavorite: product[];
  isLoading:boolean
  categories:NoInfer<categories[]> | undefined
};
export type HomeCategoriesType={
  router: AppRouterInstance;
  isLoading: boolean;
  categories:NoInfer<categories[]> | undefined
}
export type categories={
  id:number
  title:string
  link:string
  img:string
}

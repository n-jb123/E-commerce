import { product } from "@/ecommerce/cart/types/typesCart";

export type FavoriteDrawerType = {
  productsFavorite: product[];
  isFavoriteDrawerOpen: boolean;
  closeFavoriteDrawer: () => void;
  openFavoriteDrawer: () => void;
  toggleFavorite: (product: product) => void;
  clearFavorite: () => void;
  isFavorite: (id: number) => boolean;
  OpenSnackBar:(value:string,color:string)=>void
};

export type favoriteType = {
  productsFavorite: product[];
  isFavoriteDrawerOpen: boolean;
  openFavoriteDrawer: () => void;
  closeFavoriteDrawer: () => void;
  toggleFavorite: (product: product) => void;
  clearFavorite: () => void;
};

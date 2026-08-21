import { product } from "@/futures/ecommerce/cart/types/typesCart";
import { categories } from "@/futures/ecommerce/home/types/typesHome";
import { PaletteMode } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type ecommerceFooterType = {
  handleToggleTheme: () => void;
  Mode: PaletteMode;
  openCollapse: boolean;
  openDrawer: boolean;
  handleClickM: () => void;
  toggleDrawer: (newOpen: boolean) => () => void;
  productsFavorite: product[];
  isFavoriteDrawerOpen: boolean;
  closeFavoriteDrawer: () => void;
  openFavoriteDrawer: () => void;
  toggleFavorite: (product: product) => void;
  clearFavorite: () => void;
  isFavorite: (id: number) => boolean;
  user: any;
  OpenSnackBar:(value:string,color:string)=>void
};
export type ecommerceHeaderType = {
  handleToggleTheme: () => void;
  Mode: PaletteMode;
  productsFavorite: product[];
  isFavoriteDrawerOpen: boolean;
  closeFavoriteDrawer: () => void;
  toggleFavorite: (product: product) => void;
  openFavoriteDrawer: () => void;
  clearFavorite: () => void;
  isFavorite: (id: number) => boolean;
  OpenSnackBar:(value:string,color:string)=>void
};

export type ecommerceMenuType = {
  openCollapse: boolean;
  openDrawer: boolean;
  handleClick: () => void;
  toggleDrawer: (newOpen: boolean) => () => void;
};

export type ecommerceSidebarType = {
  router: AppRouterInstance;
  open: boolean;
  handleClick: () => void;
  user:any
  categories: NoInfer<categories[]> | undefined
};

import { PaletteMode } from "@mui/material";
import "@mui/material/styles";
import {
  MouseEventHandler,
  SyntheticEvent,
  ReactNode,
} from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
// import { cartProduct, product } from "@/ecommerce/cart/types/typesCart";

export type ButtonType = {
  children: ReactNode;
  width?: string | { xs: string; md: string };
  height?: string | { xs: string; md: string };
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: string;
  disabled?: boolean;
};

export type cardType = {
  children?: ReactNode;
  height?: string | { xs: string; md: string };
  width?: string | { xs: string; md: string };
};
// interim
export type CardItemType = {
  product: any
  addToCart: (product: any) => void;
  router: AppRouterInstance;
  toggleFavorite: (product: any) => void;
  productsFavorite: any[];
};

export type dividerType = {
  height: string | { xs: string; md: string };
  width: string | { xs: string; md: string };
};

export type logoType = {
  width?: string;
  height?: string ;
};

export type QTYType = {
  id: number;
  decreaseQty: (id: number) => void;
  increaseQty: (id: number) => void;
  productsCart: any[];
};

export type ratingType = {
  value: number;
  max?: number;
  size?: number;
  showValue?: boolean;
  onChange?: (
    _: SyntheticEvent<Element, Event>,
    newValue: number | null,
  ) => void;
};

export type swiperType = {
  products?: any[];
  category: string;
  router: AppRouterInstance;
  addToCart: (product: any) => void;
  toggleFavorite: (product: any) => void;
  productsFavorite: any[];
};

export type SwitchModeType = {
  handleToggleTheme: () => void;
  Mode: PaletteMode;
};

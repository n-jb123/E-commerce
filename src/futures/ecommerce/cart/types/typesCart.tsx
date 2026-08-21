import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export type ProductsCartType = {
  productsCart: cartProduct[];
  removeFromCart: (id: number) => void;
  decreaseQty: (id: number) => void;
  increaseQty: (id: number) => void;
  OpenSnackBar:(value:string,color:string)=>void
  isLoading:boolean
};

export type SummaryCartType = {
  totalPrice: number;
  clearCart: () => void;
  router: AppRouterInstance;
  productsCart: cartProduct[];
  OpenSnackBar:(value:string,color:string)=>void
};

export type cartType = {
  productsCart: cartProduct[];
  AddToCart: (product: product) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
};

export type product = {
  id: number;
  title: string;
  images: string[];
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  quantity?: number;
  costPrice:number;
  NumberOfPieces:number

};
export interface cartProduct extends product {
  quantity: number;
}
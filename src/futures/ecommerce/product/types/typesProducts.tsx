import { product } from "../../cart/types/typesCart";

export type mdProductType = {
  product: product;
  setThumbsSwiper: any;
  thumbsSwiper: any | null;
  addToCart: (product: product) => void;
  OpenSnackBar:(value:string,color:string)=>void
  isFavorite:(id:number)=>boolean;
  toggleFavorite:(product:product)=>void
}
export type xsProductType = {
  product: product;
  addToCart: (product: product) => void;
  OpenSnackBar:(value:string,color:string)=>void
  isFavorite:(id:number)=>boolean
  toggleFavorite:(product:product)=>void
};

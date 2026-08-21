import { UUID } from "crypto";
import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import { product } from "../../cart/types/typesCart";

export type order = {
  id: UUID;
  user_id: UUID;
  total: number;
  phoneNumber: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  postCode: string;
  products: product[];
  created_at: Timestamp;
};

export type orderDrawerType = {
  openOrder: boolean;
  closeOrderDrawer: () => void;
  selectOrder: order | null;
};

export type ordersTableType = {
  orders: NoInfer<any[]> | undefined;
  setSelectOrder: (order: order) => void;
  openOrderDrawer: () => void;
  closeOrderDrawer: () => void;
  openOrder: boolean;
  selectOrder: order | null;
};
export type user={
  email:string;
  password:string;
  user_metadata:{
    firstName:string;
    lastName:string;
    phone:string
  }
}
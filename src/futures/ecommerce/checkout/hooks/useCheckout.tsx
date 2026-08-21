import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CheckoutStateType } from "../types/typesCheckout";

const initialState: Omit<
  CheckoutStateType,
  "setProducts" | "setContact" | "setPayment" | "setShippingAddress" | "clear"
> = {
  product: [],
  contact: { email: "", phoneNumber: "" },
  payment: { cardNumber: "", expiryDate: "", cvc: "" },
  shippingAddress: {
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    postCode: "",
  },
};

export const useCheckout = create<CheckoutStateType>()(
  persist(
    (set) => ({
      ...initialState,

      setProducts: (data) => set({ product: data }),
      setContact: (data) => set({ contact: data }),
      setPayment: (data) => set({ payment: data }),
      setShippingAddress: (data) => set({ shippingAddress: data }),

      clear: () => set(initialState),
    }),
    { name: "checkout" },
  ),
);

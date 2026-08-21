import { create } from "zustand";
import { persist } from "zustand/middleware";
import { cartType } from "../types/typesCart";

export const useCart = create<cartType>()(
  persist(
    (set, get) => ({
      productsCart: [],
      removeFromCart: (id) => {
        set({
          productsCart: get().productsCart.filter((p) => p.id !== id),
        });
      },
      AddToCart: (product) => {
        const productsCart = get().productsCart;
        const existing = productsCart.find((p) => p.id === product.id);
        if (existing) {
          set({
            productsCart: productsCart.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
            ),
          });
        } else {
          set({
            productsCart: [...productsCart, { ...product, quantity: 1 }],
          });
        }
      },
      increaseQty: (id) => {
        set({
          productsCart: get().productsCart.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
          ),
        });
      },
      decreaseQty: (id) => {
        set({
          productsCart: get()
            .productsCart.map((p) =>
              p.id === id ? { ...p, quantity: p.quantity - 1 } : p,
            )
            .filter((p) => p.quantity > 0),
        });
      },
      clearCart: () => {
        set({
          productsCart: [],
        });
      },
    }),
    {
      name: "cart",
    },
  ),
);

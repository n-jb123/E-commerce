import { create } from "zustand";
import { persist } from "zustand/middleware";
import { favoriteType } from "../types/typesFavorite";

export const useFavorite = create<favoriteType>()(
  persist(
    (set, get) => ({
      productsFavorite: [],
      isFavoriteDrawerOpen: false,
      openFavoriteDrawer: () => set({ isFavoriteDrawerOpen: true }),
      closeFavoriteDrawer: () => set({ isFavoriteDrawerOpen: false }),
      toggleFavorite: (product) => {
        const productsFavorite = get().productsFavorite;
        const existing = productsFavorite.find((p) => p.id === product.id);
        if (existing) {
          set({
            productsFavorite: productsFavorite.filter(
              (p) => p.id !== product.id,
            ),
          });
        } else {
          set({
            productsFavorite: [...productsFavorite, product],
          });
        }
      },
      clearFavorite: () => set({ productsFavorite: [] }),
    }),
    {
      name: "favorite",
    },
  ),
);

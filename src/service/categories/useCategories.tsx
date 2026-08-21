
"use client";
import { useQuery } from "@tanstack/react-query";
import { CategoriesFn } from "./categoriesFn";
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: CategoriesFn,
  });
};
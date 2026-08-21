"use client";
import { useQuery } from "@tanstack/react-query";
import ProductsFn from "./productsFn";
export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: ProductsFn,
  });
};

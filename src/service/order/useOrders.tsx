"use client";
import { useQuery } from "@tanstack/react-query";
import { OrdersFn } from "./ordersFn";
export const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: OrdersFn,
  });
};

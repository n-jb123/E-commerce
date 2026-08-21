"use client";
import { useState } from "react";
import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { FilterValues } from "../types/typesSearch";
import { product } from "../../cart/types/typesCart";
export const useSearch = ({ query }: { query: string | null }) => {
  const supabase=createClient()
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<FilterValues>({
    category: null,
    price: [0, 3000],
    rating: 0,
  });
  const [products, setProducts] = useState<product[]>([]);
  const handleReset = (): void => {
    setFilters((prev) => ({
      ...prev,
      category: null,
      price: [0, 3000],
      rating: 0,
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const cleanQuery = query?.trim().replace(/\s+/g, " ");

      let request = supabase.from("Products").select("*");

      // 1. SEARCH (Full Text Search)
      if (cleanQuery !== "") {
        request = request.or(
          `title.ilike.%${cleanQuery}%,description.ilike.%${cleanQuery}%`,
        );
      }
      // 2. CATEGORY FILTER
      if (filters?.category) {
        request = request.eq("category", filters.category);
      }

      // 3. PRICE FILTER
      request = request
        .gte("price", filters?.price[0] ?? 0)
        .lte("price", filters?.price[1] ?? 999999);

      // 4. RATING FILTER
      if (filters?.rating) {
        request = request.gte("rating", filters.rating);
      }

      const { data, error } = await request;

      if (!error) {
        setLoading(false);
        setProducts(data || []);
      }
    };

    fetchProducts();
  }, [filters, query]);
  return { products, handleReset, filters, setFilters, loading };
};

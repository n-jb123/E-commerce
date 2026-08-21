"use client";

import { Stack } from "@mui/material";
import SearchFilter from "./searchFilter";
import { useRouter, useSearchParams } from "next/navigation";
import { useSearch } from "../hooks/useSearch";
import { SearchProducts } from "./searchProducts";
import { useCart } from "../../cart/hooks/useCart";
import { useFavorite } from "../../favorite/hooks/useFavorite";
import { useCategories } from "@/service/categories/useCategories";
import { EcommerceLayout } from "@/layout/ecommerce/page/ecommerceLayout";
import { Divider } from "@/component/divider/divider";

export const SearchClient = () => {
  const addToCart = useCart((state) => state.AddToCart);

  const router = useRouter();

  const toggleFavorite = useFavorite((state) => state.toggleFavorite);
  const productsFavorite = useFavorite((state) => state.productsFavorite);

  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const { products, handleReset, filters, setFilters, loading } = useSearch({
    query,
  });

  const {data:categories}=useCategories()
  return (
    <EcommerceLayout>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <SearchFilter
          filters={filters}
          setFilters={setFilters}
          handleReset={handleReset}
          categories={categories}
        />

        <Divider
          width={{ xs: "70vw", md: "2px" }}
          height={{ xs: "2px", md: "70vh" }}
        />
        <SearchProducts
          products={products}
          router={router}
          toggleFavorite={toggleFavorite}
          productsFavorite={productsFavorite}
          addToCart={addToCart}
          loading={loading}
        />
      </Stack>
    </EcommerceLayout>
  );
};

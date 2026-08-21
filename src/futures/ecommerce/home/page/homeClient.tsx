"use client";
import { Box } from "@mui/material";
import { HomeImage } from "./homeImage";
import { HomeCategories } from "./homeCategories";
import { HomeSwiper } from "./homeSwiper";
import { useRouter } from "next/navigation";
import { useTheme } from "@/theme/provider/themeProvider";
import { EcommerceLayout } from "@/layout/ecommerce/page/ecommerceLayout";
import { useCart } from "../../cart/hooks/useCart";
import { useFavorite } from "../../favorite/hooks/useFavorite";
import { useProducts } from "@/service/products/useProducts";
import { useCategories } from "@/service/categories/useCategories";

export const HomeClient = () => {
  const addToCart = useCart((state:any) => state.AddToCart);
  const router = useRouter();
  const { data: products, error, isLoading } = useProducts();

  const { data: categories, isLoading: isLoadingCategories } = useCategories();
  const { Mode } = useTheme();
  const toggleFavorite = useFavorite((state:any) => state.toggleFavorite);
  const productsFavorite = useFavorite((state:any) => state.productsFavorite);
  return (
    <EcommerceLayout>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <HomeImage Mode={Mode} isLoading={isLoading} />
        <HomeCategories
          router={router}
          isLoading={isLoadingCategories}
          categories={categories}
        />
        <HomeSwiper
          categories={categories}
          products={products}
          router={router}
          addToCart={addToCart}
          toggleFavorite={toggleFavorite}
          productsFavorite={productsFavorite}
          isLoading={isLoading}
        />
      </Box>
    </EcommerceLayout>
  );
};

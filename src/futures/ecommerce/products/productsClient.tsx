"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCart } from "../cart/hooks/useCart";
import { useFavorite } from "../favorite/hooks/useFavorite";
import { product } from "../cart/types/typesCart";
import { useProducts } from "@/service/products/useProducts";
import { EcommerceLayout } from "@/layout/ecommerce/page/ecommerceLayout";
import { CardItem } from "@/component/card/cardItem";


export const ProductsClient = ({ category }: { category: string }) => {
  const toggleFavorite = useFavorite((state) => state.toggleFavorite);
  const productsFavorite = useFavorite((state) => state.productsFavorite);
  const addToCart = useCart((state) => state.AddToCart);
  const router = useRouter();
  const { data: products, error, isLoading } = useProducts();
  const productsFilter = products?.filter(
    (product:product) => product.category === category,
  );

  return (
    <EcommerceLayout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          width: "100%",
          p: "50px",
          justifyContent: "center",
        }}
      >
        {productsFilter?.map((product:product) => {
          console.log(productsFilter);
          return (
            <Box sx={{ width: "400px" }} key={product.id}>
              <CardItem
                product={product}
                router={router}
                addToCart={addToCart}
                toggleFavorite={toggleFavorite}
                productsFavorite={productsFavorite}
              />
            </Box>
          );
        })}
      </Box>
    </EcommerceLayout>
  );
};

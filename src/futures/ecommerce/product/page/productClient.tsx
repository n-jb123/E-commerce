"use client";
import { Box } from "@mui/material";
import { XsProduct } from "./xsProduct";
import { useState } from "react";
import { MdProduct } from "./MdProduct";
import { useCart } from "../../cart/hooks/useCart";
import { product } from "../../cart/types/typesCart";
import { useFavorite } from "../../favorite/hooks/useFavorite";
import { useProducts } from "@/service/products/useProducts";
import { useSnackBar } from "@/component/state/snackBar/hooks/useSnackBar";
import { EcommerceLayout } from "@/layout/ecommerce/page/ecommerceLayout";

type ProductProps = {
  id: string;
};
export const ProductClient = ({ id }: ProductProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const addToCart = useCart((state) => state.AddToCart);
  const { data: products, error, isLoading } = useProducts();
  const product = products?.find(
    (product:product) => String(product.id) === String(id),
  );
  const OpenSnackBar=useSnackBar(state=>state.OpenSnackBar)
  const productsFavorite=useFavorite(state=>state.productsFavorite)
  const isFavorite = (id: number) => productsFavorite.some((p) => p.id === id);
  const toggleFavorite=useFavorite(state=>state.toggleFavorite)
  return (
    <EcommerceLayout>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: "100%",
          height: "90vh",
        }}
      >
        <XsProduct product={product} addToCart={addToCart} OpenSnackBar={OpenSnackBar} isFavorite={isFavorite} toggleFavorite={toggleFavorite}/>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "100%",
          height: "80vh",
        }}
      >
        <MdProduct
          product={product}
          thumbsSwiper={thumbsSwiper}
          setThumbsSwiper={setThumbsSwiper}
          addToCart={addToCart}
          isFavorite={isFavorite}
          OpenSnackBar={OpenSnackBar}
          toggleFavorite={toggleFavorite}
        />
      </Box>
    </EcommerceLayout>
  );
};

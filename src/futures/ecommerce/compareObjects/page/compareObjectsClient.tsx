"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { CompareObjectsTitle } from "./CompareObjectsTitle";
import { CompareObjectsSelector } from "./CompareObjectsSelector";
import { XsCompareObjectsCard } from "./xsCompareObjectsCard";
import { MdCompareObjectsCard } from "./MdCompareObjectsCard";
import { useRouter } from "next/navigation";
import { useCart } from "../../cart/hooks/useCart";
import { useFavorite } from "../../favorite/hooks/useFavorite";
import { useProducts } from "@/service/products/useProducts";
import { EcommerceLayout } from "@/layout/ecommerce/page/ecommerceLayout";

export const CompareObjectsClient = () => {
  const router = useRouter();
  const addToCart = useCart((state) => state.AddToCart);
  const { data: products, error, isLoading } = useProducts();
  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const handleChange1 = (event: SelectChangeEvent) => {
    setProduct1(event.target.value as string);
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setProduct2(event.target.value as string);
  };
  const findProduct1 = products?.find((product:any) => product.id === product1);
  const findProduct2 = products?.find((product:any) => product.id === product2);

  const productsFavorite = useFavorite((state) => state.productsFavorite);
  const toggleFavorite = useFavorite((state) => state.toggleFavorite);
  return (
    <EcommerceLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <CompareObjectsTitle />

        <CompareObjectsSelector
          product1={product1}
          product2={product2}
          products={products}
          handleChange1={handleChange1}
          handleChange2={handleChange2}
        />
        <Box sx={{ width: "80%" }}>
          {product1 && product2 ? (
            <Box>
              <MdCompareObjectsCard
                findProduct1={findProduct1}
                findProduct2={findProduct2}
                addToCart={addToCart}
                router={router}
                productsFavorite={productsFavorite}
                toggleFavorite={toggleFavorite}
              />
              <XsCompareObjectsCard
                findProduct1={findProduct1}
                findProduct2={findProduct2}
                addToCart={addToCart}
                router={router}
                productsFavorite={productsFavorite}
                toggleFavorite={toggleFavorite}
              />
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </EcommerceLayout>
  );
};

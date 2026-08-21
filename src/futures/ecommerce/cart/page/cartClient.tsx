"use client";
import { Box, Stack } from "@mui/material";
import { ProductsCart } from "./productsCart";
import { SummaryCart } from "./summaryCart";
import { useRouter } from "next/navigation";
import { useCart } from "../hooks/useCart";
import { HeaderCart } from "./headerCart";
import { useSnackBar } from "@/component/state/snackBar/hooks/useSnackBar";
import { useProducts } from "@/service/products/useProducts";
import { EcommerceLayout } from "@/layout/ecommerce/page/ecommerceLayout";
import { Divider } from "@/component/divider/divider";

export const CartClient = () => {
  const OpenSnackBar = useSnackBar((state) => state.OpenSnackBar);
  const router = useRouter();
  const productsCart = useCart((state) => state.productsCart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const increaseQty = useCart((state) => state.increaseQty);
  const decreaseQty = useCart((state) => state.decreaseQty);
  const clearCart = useCart((state) => state.clearCart);
  const totalPrice = productsCart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const {isLoading}=useProducts()
  return (
    <EcommerceLayout>
      <Stack
        direction={"column"}
        spacing={2}
        sx={{
          position: "relative",
          width: { xs: "100%", md: "100%" },
          height: { xs: "95vh", md: "80vh" },
          overflow: "hidden",
          p: "24px",
        }}
      >
        <Box sx={{ height: "15vh" }}>
          <HeaderCart router={router}/>
        </Box>

        <Box
          sx={{ width: "100%", display: { xs: "", md: "flex" }, gap: "16px" }}
        >
          <Box
            sx={{
              height: { xs: "45vh", md: "65vh" },
              overflow: "auto",
              width: { xs: "100%", md: "70%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ProductsCart
              OpenSnackBar={OpenSnackBar}
              decreaseQty={decreaseQty}
              increaseQty={increaseQty}
              productsCart={productsCart}
              removeFromCart={removeFromCart}
              isLoading={isLoading}
            />
          </Box>
          <Divider
            width={{ xs: "50vw", md: "2px" }}
            height={{ xs: "2px", md: "55vh" }}
          />
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              height: "100%",
              width: "30%",
            }}
          >
            <SummaryCart
              OpenSnackBar={OpenSnackBar}
              totalPrice={totalPrice}
              clearCart={clearCart}
              router={router}
              productsCart={productsCart}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              height: "35vh",
              gap: "16px",
            }}
          >
            <SummaryCart
              OpenSnackBar={OpenSnackBar}
              totalPrice={totalPrice}
              clearCart={clearCart}
              router={router}
              productsCart={productsCart}
            />
          </Box>
        </Box>
      </Stack>
    </EcommerceLayout>
  );
};

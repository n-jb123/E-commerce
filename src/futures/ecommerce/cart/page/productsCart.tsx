import { Stack, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProductsCartType } from "../types/typesCart";
import Loading from "@/component/state/loading/loading";
import { QTY } from "@/component/QTY/QTY";

export const ProductsCart = ({
  productsCart,
  removeFromCart,
  decreaseQty,
  increaseQty,
  OpenSnackBar,
  isLoading,
}: ProductsCartType) => (
  <Stack direction={"column"} spacing={2} sx={{overflowX:'hidden'}}>
    {productsCart.map((product) => {
      if (isLoading) {
        return (
            <Loading width="600px" height="200px" />
        );
      } else {
        return (
          <Stack
            key={product.id}
            direction={"row"}
            spacing={2}
            sx={{
              alignItems: "center",
              border: "1px solid",
              borderRadius: "8px",
              width: "100%",
            }}
          >
            <Box sx={{ width: "30%", height: "200px" }}>
              <img src={product.images[0]} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "65%",
                height: "200px",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "24px" }}>{product.title}</Typography>
              <Typography className="webkitText" sx={{ fontSize: "16px" }}>
                {product.description}
              </Typography>
              <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <QTY
                  id={product.id}
                  decreaseQty={decreaseQty}
                  increaseQty={increaseQty}
                  productsCart={productsCart}
                />
                <Typography sx={{ fontSize: "32px" }}>
                  $ {product.price * product.quantity}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "5%",
                height: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <IconButton
                onClick={() => {
                  OpenSnackBar(
                    "The product has been removed from the cart.",
                    "warning.main",
                  );
                  removeFromCart(product.id);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Stack>
        );
      }
    })}
  </Stack>
);

import { Box, Typography, Divider } from "@mui/material";
import { SummaryCartType } from "../types/typesCart";
import PrimaryButton from "@/component/buttons/PrimaryButtons";
import { OutlineButton } from "@/component/buttons/OutlineButton";

export const SummaryCart = ({
  totalPrice,
  clearCart,
  router,
  productsCart,
  OpenSnackBar,
}: SummaryCartType) => (
  <Box sx={{ backgroundColor: "background.paper", p: "16px" }}>
    <Typography sx={{ fontSize: "32px", fontFamily: "Tangerine" }}>
      Order Summary
    </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography>Subtotal</Typography>
        <Typography>Complimentary Shipping</Typography>
        <Typography>Taxes (calculated at checkout)</Typography>
      </Box>
      <Box>
        <Typography>$ {totalPrice.toFixed(2)}</Typography>
        <Typography>free</Typography>
        <Typography>-</Typography>
      </Box>
    </Box>
    <Divider />
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>total</Typography>
      <Typography sx={{ fontSize: "32px" }}>
        $ {totalPrice.toFixed(2)}
      </Typography>
    </Box>
    <PrimaryButton
      disabled={productsCart.length <= 0}
      onClick={() => router.push("/ecommerce/checkout")}
    >
      checkout
    </PrimaryButton>
    <OutlineButton
      onClick={() => {
        OpenSnackBar("All cart items have been removed.", "warning.main");
        clearCart();
      }}
    >
      clear Cart
    </OutlineButton>
  </Box>
);

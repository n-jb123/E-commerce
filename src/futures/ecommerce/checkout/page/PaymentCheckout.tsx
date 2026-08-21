import { Stack, TextField } from "@mui/material";
import { PaymentCheckoutType } from "../types/typesCheckout";

export const PaymentCheckout = ({ paymentForm }: PaymentCheckoutType) => (
  <form
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      margin: "32px 0",
    }}
  >
    <Stack spacing={2}>
      {/* cardNumber */}
      <TextField
        id="cardNumber"
        label="cardNumber"
        type="text"
        variant="outlined"
        autoComplete="current-cardNumber"
        error={!!paymentForm.formState.errors.cardNumber}
        helperText={paymentForm.formState.errors.cardNumber?.message}
        {...paymentForm.register("cardNumber")}
        sx={{
          boxShadow: "0 0 10px",
          shadowColor: "primary.activeNavigation",
          width: "100%",
          "&:hover": { boxShadow: "0 0 20px" },
          "& label": { color: "#fff" },
          "& label.Mui-focused": { fontSize: "24px" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.main",
            },
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
              fontSize: "24px",
            },
          },
        }}
      />
      <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
        {/* expiryDate */}
        <TextField
          id="expiryDate"
          label="expiryDate"
          type="text"
          variant="outlined"
          autoComplete="current-expiryDate"
          error={!!paymentForm.formState.errors.expiryDate}
          helperText={paymentForm.formState.errors.expiryDate?.message}
          {...paymentForm.register("expiryDate")}
          sx={{
            boxShadow: "0 0 10px",
            shadowColor: "primary.activeNavigation",

            width: "50%",
            "&:hover": { boxShadow: "0 0 20px" },
            "& label": { color: "#fff" },
            "& label.Mui-focused": { fontSize: "24px" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
                fontSize: "24px",
              },
            },
          }}
        />
        {/* cvc */}
        <TextField
          id="cvc"
          label="cvc"
          type="cvc"
          variant="outlined"
          autoComplete="current-cvc"
          error={!!paymentForm.formState.errors.cvc}
          helperText={paymentForm.formState.errors.cvc?.message}
          {...paymentForm.register("cvc")}
          sx={{
            width: "50%",
            boxShadow: "0 0 10px",
            shadowColor: "primary.activeNavigation",

            "&:hover": { boxShadow: "0 0 20px", },
            "& label": { color: "#fff" },
            "& label.Mui-focused": { fontSize: "24px" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
                fontSize: "24px",
              },
            },
          }}
        />
      </Stack>
    </Stack>
  </form>
);

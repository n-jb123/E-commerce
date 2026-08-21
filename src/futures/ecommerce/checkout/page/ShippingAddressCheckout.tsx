import { Stack, TextField, Box } from "@mui/material";
import { ShippingAddressCheckoutType } from "../types/typesCheckout";

export const ShippingAddressCheckout = ({
  shippingForm,
}: ShippingAddressCheckoutType) => (
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
      <Stack spacing={2} direction={"row"}>
        {/* firstName */}
        <TextField
          label="firstName"
          type="text"
          variant="outlined"
          autoComplete="current-firstName"
          error={!!shippingForm.formState.errors.firstName}
          helperText={shippingForm.formState.errors.firstName?.message}
          {...shippingForm.register("firstName")}
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
        {/* lastName */}
        <TextField
          label="lastName"
          type="text"
          variant="outlined"
          autoComplete="current-lastName"
          error={!!shippingForm.formState.errors.lastName}
          helperText={shippingForm.formState.errors.lastName?.message}
          {...shippingForm.register("lastName")}
          //   color="#fff"
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
      </Stack>
      <Box>
        <TextField
          label="streetAddress"
          type="text"
          variant="outlined"
          autoComplete="current-streetAddress"
          error={!!shippingForm.formState.errors.streetAddress}
          helperText={shippingForm.formState.errors.streetAddress?.message}
          {...shippingForm.register("streetAddress")}
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
      </Box>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="city"
          type="text"
          variant="outlined"
          autoComplete="current-city"
          error={!!shippingForm.formState.errors.city}
          helperText={shippingForm.formState.errors.city?.message}
          {...shippingForm.register("city")}
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
        <TextField
          label="postCode"
          type="text"
          variant="outlined"
          autoComplete="current-postCode"
          error={!!shippingForm.formState.errors.postCode}
          helperText={shippingForm.formState.errors.postCode?.message}
          {...shippingForm.register("postCode")}
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
      </Stack>
    </Stack>
  </form>
);

import { TextField } from "@mui/material";
import {} from "react-hook-form";
import { ContactCheckoutType } from "../types/typesCheckout";

export const ContactCheckout = ({ contactForm }: ContactCheckoutType) => (
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
    {/* email */}
    <TextField
      id="email"
      label="email"
      type="email"
      variant="outlined"
      autoComplete="current-Email"
      error={!!contactForm.formState.errors.email}
      helperText={contactForm.formState.errors.email?.message}
      {...contactForm.register("email")}
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
    {/* phoneNumber */}
    <TextField
      id="phoneNumber"
      label="phoneNumber"
      type="phoneNumber"
      variant="outlined"
      autoComplete="current-phoneNumber"
      error={!!contactForm.formState.errors.phoneNumber}
      helperText={contactForm.formState.errors.phoneNumber?.message}
      {...contactForm.register("phoneNumber")}
      sx={{
        width: "100%",
        boxShadow: "0 0 10px",
        shadowColor: "primary.activeNavigation",

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
  </form>
);

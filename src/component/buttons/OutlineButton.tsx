import { Button, Typography } from "@mui/material";
import { ButtonType } from "../types/typesComponent";

export const OutlineButton = ({
  children,
  width = "100%",
  height = "100%",
  onClick,
  disabled,
  type='',
}: ButtonType) => (
  <Button
    onClick={onClick}
    variant="outlined"
    disabled={disabled}
    type={type}
    sx={{
      borderColor: "border.outline",
      width: width,
      height: height,
      borderRadius: "0.5rem",
      boxShadow: "0px 0px 10px ",
      shadowColor: "primary.activeNavigation",
      padding: "16px",
      transition: "all 0.5s ease",
      "&:hover": {
        boxShadow: "0px 0px 20px ",
        scale: 1.05,
      },
    }}
  >
    <Typography>{children}</Typography>
  </Button>
);

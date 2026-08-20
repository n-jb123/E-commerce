import { Button, Typography } from "@mui/material";
import { ButtonType } from "../types/typesComponent";

export default function PrimaryButton({
  children,
  height = "100%",
  width = "100%",
  onClick,
  type,
  disabled = false,
}: ButtonType) {
  return (
    <Button
      disabled={disabled}
      type={type}
      onClick={onClick}
      sx={{
        width: width,
        height: height,
        backgroundColor: "primary.main",
        color: "text.inverseOnSurface",
        borderRadius: "0.5rem",
        padding: "16px",
        boxShadow: "0 0 10px",
        shadowColor: "primary.activeNavigation",
        transition: "all 0.5s ease",
        "&:hover": {
          boxShadow: "0 0 20px",
          scale: 1.05,
        },
      }}
    >
      <Typography>{children}</Typography>
    </Button>
  );
}

import { Box, IconButton, Typography } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { QTYType } from "../types/typesComponent";

export const QTY = ({
  id,
  productsCart,
  increaseQty,
  decreaseQty,
}: QTYType) => {
  const product = productsCart.find((item) => item.id === id);
  if (!product) return null;
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1,
        py: 0.5,
        borderRadius: "999px",
        backdropFilter: "blur(14px)",
        background: theme.palette.background.paper,
        border: "1px solid rgba(55,255,255,0.12)",
        boxShadow: theme.palette.shadow.primary,
        width: "fit-content",
      })}
    >
      <IconButton
        onClick={() => decreaseQty(id)}
        sx={(theme) => ({
          width: 34,
          height: 34,
          transition: "all 0.3s ease",
          borderRadius: "50%",
          color: theme.palette.error.main,
          border: "1px solid rgba(255,255,255,0.08)",
          "&:hover": {
            background: "linear-gradient(135deg, #fc8a8a9a, #630404ff)",
            color: "#fff",
            boxShadow: "0 0 15px rgba(95, 54, 0, 0.5)",
            scale: 1.1,
          },
        })}
      >
        <RemoveRoundedIcon fontSize="small" />
      </IconButton>
      <Typography
        sx={(theme) => ({
          minWidth: 30,
          textAlign: "center",
          fontWeight: 700,
          fontSize: "0.95rem",
          background: theme.palette.text.secondary,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        })}
      >
        {product.quantity}
      </Typography>

      <IconButton
        onClick={() => increaseQty(id)}
        sx={(theme) => ({
          width: 34,
          height: 34,
          transition: "all 0.3s ease",
          borderRadius: "50%",
          color: theme.palette.success.main,
          border: "1px solid rgba(255,255,255,0.08)",
          "&:hover": {
            background: "linear-gradient(135deg, #a5fca2ff, #034e1a86)",
            color: "#fff",
            boxShadow: "0 0 15px rgba(2, 46, 4, 0.72)",
            scale: 1.1,
          },
        })}
      >
        <AddRoundedIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

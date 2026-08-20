import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Card } from "./card";
import Rating from "../rating/rating";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardItemType } from "../types/typesComponent";
import { useSnackBar } from "../state/snackBar/hooks/useSnackBar";

export const CardItem = ({
  product,
  addToCart,
  router,
  toggleFavorite,
  productsFavorite,
}: CardItemType) => {
  const OpenSnackBar = useSnackBar((state:any) => state.OpenSnackBar);
  const oldPrice = product?.price / (1-product.discountPercentage/100);
  const isFavorite = (id: number) => productsFavorite.some((p) => p.id === id);
  return (
    <Card height="max-content">
      <Stack direction={"column"}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "200px",
          }}
        >
          <img src={product?.images?.[0]} style={{ objectFit: "scale-down" }} />
        </Box>
        <Box
          sx={{
            height: "200px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Typography sx={{ fontSize: "24px" }}>{product.title}</Typography>
          <Typography className="webkitText">{product.description}</Typography>
          <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Typography sx={{ fontSize: "32px", color: "primary.main" }}>
              ${product.price.toFixed(2)}
            </Typography>
            {product.discountPercentage === 0 ? (
              ""
            ) : (
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "error.main",
                  textDecoration: "line-through",
                }}
              >
                ${oldPrice.toFixed(2)}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Rating value={product.rating} />
            <Box sx={{ display: "flex", gap: "6px" }}>
              <IconButton
                disabled={product.NumberOfPieces < 20}
                onClick={() => {
                  OpenSnackBar(
                    "Successfully added to the cart.",
                    "success.main",
                  );
                  addToCart(product);
                }}
                sx={{
                  p: "8px",
                  border: "1px solid",
                  borderRadius: "8px",
                  backgroundColor: "primary.main",
                }}
              >
                <AddIcon />
              </IconButton>
              {isFavorite(product.id) ? (
                <IconButton
                  onClick={() => {
                    OpenSnackBar(
                      "The product has been removed from Favorites.",
                      "warning.main",
                    );
                    toggleFavorite(product);
                  }}
                  sx={{
                    p: "8px",
                    border: "1px solid",
                    borderRadius: "8px",
                    backgroundColor: "error.main",
                  }}
                >
                  <FavoriteIcon sx={{ color: "#ff0000" }} />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    OpenSnackBar(
                      "The product has been added to Favorites.",
                      "success.main",
                    );
                    toggleFavorite(product);
                  }}
                  sx={{
                    p: "8px",
                    border: "1px solid",
                    borderRadius: "8px",
                    backgroundColor: "primary.main",
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              )}

              <IconButton
                sx={{
                  p: "8px",
                  border: "1px solid",
                  borderRadius: "8px",
                  backgroundColor: "primary.main",
                }}
                onClick={() => router.push(`/ecommerce/product/${product.id}`)}
              >
                <VisibilityOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
};

import {
  Box,
  IconButton,
  Badge,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteDrawerType } from "../types/typesFavorite";
import RatingUi from "@/component/rating/rating";

export const FavoriteDrawer = ({
  productsFavorite,
  isFavoriteDrawerOpen,
  closeFavoriteDrawer,
  toggleFavorite,
  openFavoriteDrawer,
  clearFavorite,
  isFavorite,
  OpenSnackBar,
}: FavoriteDrawerType) => {
  return (
    <Box>
      <IconButton onClick={openFavoriteDrawer}>
        <Badge color="primary" badgeContent={productsFavorite.length} max={99}>
          <FavoriteBorderOutlinedIcon />
        </Badge>
      </IconButton>
      <Drawer
        open={isFavoriteDrawerOpen}
        onClose={closeFavoriteDrawer}
        sx={{
          height: "100vh",
          overflow: "auto",
          ".mui-fejuix-MuiPaper-root-MuiDrawer-paper": {
            width: "25%",
            minWidth: "400px",
          },
        }}
      >
        <Box
          sx={{
            height: "10vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontFamily: "Tangerine", fontSize: "64px" }}>
            favorite
          </Typography>
          <Typography
            sx={{
              border: "1px solid",
              height: "max-content",
              p: "16px",
              borderRadius: "16px",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={()=>{
              OpenSnackBar('All products have been removed from your favorites.','warning.main')
              clearFavorite()}}
          >
            clear Favorite
          </Typography>
        </Box>
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {productsFavorite.map((product) => {
            return (
              <Box
                key={product.id}
                sx={{
                  backgroundColor: "background.paper",
                  height: "15vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Stack
                  direction={"row"}
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Box
                    sx={{ width: "100px", height: "100px", overflow: "hidden" }}
                  >
                    <img
                      src={product.images[0]}
                      style={{ objectFit: "scale-down" }}
                    />
                  </Box>
                  <Box sx={{ width: "50%" }}>
                    <Typography>{product.title}</Typography>
                    <RatingUi value={product.rating} />
                    <Typography>{product.price.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ width: "25%" }}>
                    <IconButton
                      sx={{ p: "4px", border: "1px solid" }}
                      onClick={() => {
                        isFavorite(product.id)
                          ? OpenSnackBar(
                              "The product has been removed from Favorites.",
                              "warning.main",
                            )
                          : OpenSnackBar(
                              "The product has been added to Favorites.",
                              "success.main",
                            );
                        toggleFavorite(product);
                      }}
                    >
                      {isFavorite(product.id) ? (
                        <FavoriteIcon sx={{ color: "error.main" }} />
                      ) : (
                        <FavoriteBorderOutlinedIcon />
                      )}
                    </IconButton>
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Box>
      </Drawer>
    </Box>
  );
};

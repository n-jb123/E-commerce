import { Stack, Box } from "@mui/material";
import { MdCompareObjectsCardType } from "../types/typesCompareObjects";
import { CardItem } from "@/component/card/cardItem";

export const MdCompareObjectsCard = ({
  findProduct1,
  findProduct2,
  addToCart,
  router,
  productsFavorite,
  toggleFavorite,
}: MdCompareObjectsCardType) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <CardItem
          product={findProduct1}
          router={router}
          addToCart={addToCart}
          productsFavorite={productsFavorite}
          toggleFavorite={toggleFavorite}
        />
      </Box>
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <CardItem
          product={findProduct2}
          router={router}
          addToCart={addToCart}
          productsFavorite={productsFavorite}
          toggleFavorite={toggleFavorite}
        />
      </Box>
    </Stack>
  );
};

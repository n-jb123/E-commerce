import { Box, Typography } from "@mui/material";
import { CardItem } from "@/component/card/cardItem";
import { searchProductsType } from "../types/typesSearch";

export const SearchProducts = ({
  products,
  addToCart,
  router,
  toggleFavorite,
  productsFavorite,
  loading,
}: searchProductsType) => {
  
 if(loading){
  return(
    <Typography>loading...</Typography>
  )
 }
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "75%" },
        height: { xs: "60vh", md: "80vh" },
      }}
    >
      <Typography sx={{ fontFamily: "Tangerine", fontSize: "64px" }}>
        product
      </Typography>
      <Box sx={{ display: "flex", gap: " 16px", flexWrap: "wrap" }}>
        {products?.map((product) => (
          <Box
            key={product.id}
            sx={{
              maxWidth: "400px",
            }}
          >
            <CardItem
              product={product}
              addToCart={addToCart}
              router={router}
              toggleFavorite={toggleFavorite}
              productsFavorite={productsFavorite}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

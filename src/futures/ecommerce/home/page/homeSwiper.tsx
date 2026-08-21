import Loading from "@/component/state/loading/loading";
import { homeSwiperType } from "../types/typesHome";
import { Box } from "@mui/material";
import { SwiperUi } from "@/component/swiper/swiper";


export const HomeSwiper = ({
  products,
  router,
  addToCart,
  toggleFavorite,
  productsFavorite,
  isLoading,
  categories
}: homeSwiperType) => {
  return (
    <>
      {categories?.map((category) => {
        if (isLoading) {
          return (
            <Box key={ category.title}>
              <Loading width="100%" height="300px" />
            </Box>
          );
        } else
          return (
            <SwiperUi
              key={category.title}
              category={category.title}
              products={products}
              router={router}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              productsFavorite={productsFavorite}
            />
          );
      })}
    </>
  );
};

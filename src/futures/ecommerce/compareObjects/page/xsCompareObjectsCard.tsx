import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import { xsCompareObjectsCardType } from "../types/typesCompareObjects";
import { CardItem } from "@/component/card/cardItem";

export const XsCompareObjectsCard = ({
  findProduct1,
  findProduct2,
  router,
  addToCart,
  productsFavorite,
  toggleFavorite,
}: xsCompareObjectsCardType) => {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <Swiper
        style={{ height: "500px", overflow: "hidden", padding: "16px" }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardItem
            product={findProduct1}
            router={router}
            addToCart={addToCart}
            productsFavorite={productsFavorite}
            toggleFavorite={toggleFavorite}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            product={findProduct2}
            router={router}
            addToCart={addToCart}
            productsFavorite={productsFavorite}
            toggleFavorite={toggleFavorite}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

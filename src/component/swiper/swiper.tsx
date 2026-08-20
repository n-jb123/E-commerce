import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Box, Stack, Typography } from "@mui/material";
import { OutlineButton } from "../buttons/OutlineButton";
import { CardItem } from "../card/cardItem";
import { swiperType } from "../types/typesComponent";

export const SwiperUi = ({
  products,
  category,
  router,
  addToCart,
  toggleFavorite,
  productsFavorite,
}: swiperType) => {
  const categoryProducts = products?.filter(
    (product) => product.category === category,
  );
  return (
    <Box>
      <Stack direction={"row"}>
        <Box
          sx={{
            position: "relative",
            height: "60px",
            ml: "24px",
            p: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            "&::after": {
              content: '""',
              position: "absolute",
              height: "100%",
              width: "20px",
              backgroundColor: "primary.main",
              top: 0,
              left: 0,
              borderRadius: "4px",
            },
          }}
        >
          <Typography sx={{ fontSize: "64px", fontFamily: "Tangerine" }}>
            {category}
          </Typography>
          <OutlineButton
            width="max-content"
            onClick={() => router.push(`/ecommerce/products/${category}`)}
          >
            viewAll
          </OutlineButton>
        </Box>
      </Stack>
      <Swiper
        style={{ height: "500px", overflow: "hidden", padding: "16px" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        loop={true}
        navigation={true}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
          type: "progressbar",
        }}
        modules={[FreeMode, Pagination, Navigation]}
      >
        {/* interim */}
        {categoryProducts?.map((p:any) => {
          return (
            <SwiperSlide
            key={p.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CardItem
                product={p}
                addToCart={addToCart}
                router={router}
                toggleFavorite={toggleFavorite}
                productsFavorite={productsFavorite}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

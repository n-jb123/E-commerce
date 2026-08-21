import {
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { useId } from "react";
import { mdProductType } from "../types/typesProducts";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PrimaryButton from "@/component/buttons/PrimaryButtons";
export const MdProduct = ({
  product,
  setThumbsSwiper,
  thumbsSwiper,
  addToCart,
  isFavorite,
  OpenSnackBar,
  toggleFavorite,
}: mdProductType) => {
  const id = useId();
  const slidesPerView = product?.images?.length | 1;
  return (
    <Stack direction={"row"} spacing={2} sx={{ width: "100%", height: "100%" }}>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          border: "1px solid",
          borderRadius: "8px",
          backgroundColor: "secondary.categories",
        }}
      >
        <Swiper
          style={{
            width: "100%",
            height: "80%",
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Autoplay]}
        >
          {product?.images?.map((img:string) => (
            <SwiperSlide>
              <img src={img} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          style={{
            width: "100%",
            height: "20%",
            border: "1px solid",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Autoplay]}
        >
          {product?.images?.map((img:string) => (
            <SwiperSlide>
              <img src={img} style={{ maxWidth: "200px" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "50%",
          height: "100%",
        }}
      >
        <Typography sx={{ fontSize: "64px", fontFamily: "Tangerine" }}>
          {product?.title}
        </Typography>
        <Typography sx={{ fontSize: "64px" }}>${product?.price}</Typography>
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel1-content`}
            id={`${id}-panel1-header`}
          > */}
            <Typography sx={{ fontSize: "32px" }}>description</Typography>
          {/* </AccordionSummary> */}
          <Typography>{product?.description}</Typography>
        {/* </Accordion> */}
        <Stack direction={"row"} spacing={2}>
          <PrimaryButton
            disabled={product?.NumberOfPieces<20}
            height="max-content"
            width="70%"
            onClick={() => {
              OpenSnackBar("Successfully added to the cart.", "success.main");
              addToCart(product);
            }}
          >
            add to cart
          </PrimaryButton>
          <IconButton
            onClick={() => {
              isFavorite(product?.id)
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
            sx={{
              border: "1px solid",
              borderRadius: "8px",
              backgroundColor: "primary.main",
            }}
          >
            {isFavorite(product?.id) ? (
              <FavoriteIcon sx={{ color: "error.main" }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
};

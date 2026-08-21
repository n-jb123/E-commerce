import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  IconButton,
} from "@mui/material";
import { useId } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { xsProductType } from "../types/typesProducts";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PrimaryButton from "@/component/buttons/PrimaryButtons";
export const XsProduct = ({
  product,
  addToCart,
  OpenSnackBar,
  isFavorite,
  toggleFavorite,
}: xsProductType) => {
  const id = useId();
  return (
    <Stack spacing={1}>
      <Box sx={{ width: "100%", height: "50%" }}>
        <Swiper
          style={{ height: "500px", overflow: "hidden", padding: "16px" }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          {product?.images?.map((img: string) => (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          height: "50%",
          p: " 0 16px",
        }}
      >
        <Typography sx={{ fontSize: "64px", fontFamily: "Tangerine" }}>
          {product?.title}
        </Typography>
        <Typography sx={{ fontSize: "64px" }}>${product?.price}</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${id}-panel1-content`}
            id={`${id}-panel1-header`}
          >
            <Typography sx={{ fontSize: "32px" }}>description</Typography>
          </AccordionSummary>
          <AccordionDetails>{product?.description}</AccordionDetails>
        </Accordion>
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

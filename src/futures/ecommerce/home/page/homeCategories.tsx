import { Box, Typography } from "@mui/material";
import { HomeCategoriesType } from "../types/typesHome";
import Loading from "@/component/state/loading/loading";

export const HomeCategories = ({
  router,
  isLoading,
  categories,
}: HomeCategoriesType) => {
  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {categories?.map((category) => {
          if (isLoading) {
            return (
              <Box key={category.title}>
                <Loading width={"400px"} height={"300px"} />
              </Box>
            );
          } else {
            return (
              <Box
                key={category.title}
                sx={{
                  position: "relative",
                  width: "400px",
                  height: "300px",

                  "& .img": {
                    transition: "all 0.5s ease",
                    borderRadius: "16px",
                    boxShadow: "0 0 10px",
                    shadowColor: "primary.activeNavigation",
                    filter: "grayscale(100%)",
                  },
                  "&:hover .img": {
                    scale: 1.05,
                    cursor: "pointer",
                    boxShadow: "0 0 20px",
                    filter: "grayscale(0%)",
                  },
                }}
              >
                <img
                  onClick={() =>
                    router.push(`/ecommerce/products/${category.title}`)
                  }
                  className="img"
                  src={category.img}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    fontFamily: "Tangerine",
                    fontSize: "64px",
                    color: "secondary.categories",
                    backgroundColor: "background.inversePaper",
                    borderRadius: "16px",
                    padding: "16px",
                    opacity: 0.7,
                  }}
                >
                  {category.title}
                </Typography>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
};

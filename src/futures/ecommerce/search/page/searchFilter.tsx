import { Box, Typography, Chip, Stack, Slider, Rating } from "@mui/material";
import { searchFilterType } from "../types/typesSearch";
import { Divider } from "@/component/divider/divider";
import { OutlineButton } from "@/component/buttons/OutlineButton";


export default function SearchFilter({
  filters,
  setFilters,
  handleReset,
  categories
}: searchFilterType) {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "25%" },
        height: { xs: "50vh", md: "80vh" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          p: "8px",
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "Tangerine", fontSize: "64px" }}>
            Filter
          </Typography>
        </Box>
        <Divider width="70%" height="2px" />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column", gap: "16px" },
          }}
        >
          {/* Categories */}
          <Typography sx={{ fontSize: "24px" }}>Category</Typography>

          <Stack direction="row" sx={{ flexWrap: "wrap" }}>
            {categories?.map((cat) => (
              <Chip
                key={cat.title}
                label={cat.title}
                clickable
                color={filters?.category === cat.title ? "primary" : "default"}
                variant={
                  filters?.category === cat.title ? "filled" : "outlined"
                }
                onClick={() =>
                  setFilters((prev) => ({ ...prev, category: cat.title }))
                }
              />
            ))}
          </Stack>
          {/* Rating */}
          <Typography sx={{ fontSize: "24px" }}>rating</Typography>

          <Rating
            value={filters?.rating}
            onChange={(_: React.SyntheticEvent, newValue) => {
              setFilters((prev) => ({ ...prev, rating: newValue ?? 0 }));
            }}
            sx={{
              "& .MuiRating-icon": {
                background: "linear-gradient(135deg, #d0ff00ff, #fae68bff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "all 0.5s ease",
                filter: "drop-shadow(0 0 6px rgba(229, 255, 0, 0.6))",
              },
              "& .MuiRating-iconHover": {
                transform: "rotate(10deg)",
                scale: 1.35,
              },
            }}
          />
        </Box>

        {/* Price */}
        <Typography sx={{ fontSize: "24px" }}>price</Typography>

        <Slider
          value={filters?.price}
          onChange={(_: Event, newValue) => {
            setFilters((prev) => ({
              ...prev,
              price: newValue as [number, number],
            }));
          }}
          valueLabelDisplay="auto"
          min={0}
          max={3000}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
            gap: "16px",
          }}
        >
          <Typography variant="caption">From {filters?.price[0]}$</Typography>
          <Typography variant="caption">To {filters?.price[1]}$</Typography>
        </Box>

        {/* Actions */}
        <Box
          sx={{
            px: 2,
          }}
        >
          <Stack direction="row" spacing={1}>
            <OutlineButton onClick={handleReset}>Reset</OutlineButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

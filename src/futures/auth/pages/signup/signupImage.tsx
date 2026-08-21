
import { Layer } from "@/component/layer/layer";
import { Box, Typography } from "@mui/material";
export const SignupImage = () => (
  <Box
    sx={{
      width: { xs: "100%", md: "50%" },
      position: "relative",
      height: { xs: "50vh", md: "100vh" },
    }}
  >
    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRa56fRWTWHBZ-3zAmQ3qQDG_6xuY4IQ4U7MYaRiVgunigyDsQRj-boVkRUMUzh4O7QFthTmz8Uj4MRtae_-KRAqHtR0kfso35Cr0xNuDZMg_t64ixKWligQLeYlyT499FnBxMqQazAJMEh1E8klInDnJEXB65Wsfkg9PZb893JLpPI9r1binFKojQRBMhipZ62HSgV-QaJDXxMTBN4L6FL04riqRyOtlpmL4bOGxsqwpIcfzpOtJGWrkaz2x5fKYRUqo6k3zEdZc" />
    <Box
      sx={{
        position: "absolute",
        bottom: "100px",
        left: "50px",
        width: "50%",
        p: "24px",
        zIndex: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Tangerine",
          fontSize: "32px",
          color: "text.secondary",
        }}
      >
        The Essence of Night
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
          color: "text.primary",
        }}
      >
        Unlock a world of curated, high-end olfactory experiences.
      </Typography>
    </Box>
    <Layer/>
  </Box>
);

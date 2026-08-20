import { Box } from "@mui/material";
export const Layer = () => (
  <Box
    sx={{
      backgroundColor: "background.default",
      opacity: 0.7,
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
    }}
  />
);

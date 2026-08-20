import { Box } from "@mui/material";
import { dividerType } from "../types/typesComponent";

export const Divider = ({ height, width }: dividerType) => (
  <Box
    sx={{
      mt: 1,
      
      height,
      width,
      borderRadius: "10px",
      background: "linear-gradient(90deg, #ff8800ff, #faef8bff, transparent)",
      opacity: 0.6,
    }}
  />
);

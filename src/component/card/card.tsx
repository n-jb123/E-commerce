import { Box, Stack } from "@mui/material";
import { Divider } from "../divider/divider";
import { cardType } from "../types/typesComponent";

export const Card = ({
  children,
  height = "100%",
  width = "100%",
}: cardType) => (
  <Box
    sx={{
      height,
      width,
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: "24px",
      backdropFilter: "blur(4px)",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow: "0 20px 60px rgba(170, 104, 6, 0.35)",
      textAlign: "center",
      padding: "16px",
      cursor: "pointer",
      transformStyle: "preserve-3d",
      "&:before": {
        content: '""',
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at 20% 20%, rgba(237, 159, 58, 0.25), transparent 50%), radial-gradient(circle at 80% 30%, rgba(255, 238, 0, 0.15), transparent 55%)",
        opacity: 0.8,
        zIndex: 0,
      },
      "&:after": {
        content: '""',
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.08), transparent 70%)",
        transform: "translateX(-120%)",
        transition: "0.6s",
      },
      "&:hover:after": {
        transform: "translateX(130%)",
      },
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: -40,
        right: -40,
        width: 120,
        height: 120,
        borderRadius: "50%",
        filter: "blur(30px)",
      }}
    />
    <Stack spacing={1} sx={{ position: "relative", zIndex: 2, width: "100%" }}>
      <Divider width={"100%"} height={"2px"} />
      {children}
      <Divider width={"100%"} height={"2px"} />
    </Stack>
  </Box>
);

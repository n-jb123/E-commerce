"use client";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }`;
export default function Loading({
  width = '100%',
  height = "20px",
  radius = "12px",
}: {
  width: { xs: string; md: string } | string;
  height: { xs: string; md: string } | string;
  radius?: string;
}) {
  return (
    <Box
      sx={{
        width,
        height,
        borderRadius: radius,
        position: "relative",
        overflow: "hidden",

        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, transparent 20%, rgba(255, 102, 0, 0.25), rgba(250, 211, 139, 0.25), transparent 80%)",
          backgroundSize: "200% 100%",
          animation: `${shimmer} 2.5s infinite linear`,
        },

        boxShadow: "0 0 20px rgba(237, 144, 58, 0.15)",
      }}
    />
  );
}

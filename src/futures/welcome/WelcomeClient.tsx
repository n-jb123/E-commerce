"use client";
import { HeroImage } from "./HeroImage";
import { AbsoluteCard } from "./AbsoluteCard";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { Layer } from "@/component/layer/layer";
import WelcomeLayout from "@/layout/welcome/page/WelcomeLayout";
import { useTheme } from "@/theme/provider/themeProvider";

export const WelcomeClient = () => {
  const { handleToggleTheme, Mode } = useTheme();
  const router = useRouter();

  return (
    <WelcomeLayout
      handleToggleTheme={handleToggleTheme}
      Mode={Mode}
      router={router}
    >
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <HeroImage />
        <Layer/>
        <AbsoluteCard router={router} />
      </Box>
    </WelcomeLayout>
  );
};

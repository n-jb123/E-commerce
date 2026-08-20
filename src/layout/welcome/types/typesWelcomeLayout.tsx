import { PaletteMode } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReactNode } from "react";

export type welcomeHeaderType = {
  router: AppRouterInstance;
  handleToggleTheme: () => void;
  Mode: PaletteMode;
};

export type welcomeLayoutType = {
  children: ReactNode;
  handleToggleTheme: () => void;
  Mode: PaletteMode;
  router: AppRouterInstance;
};

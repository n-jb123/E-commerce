"use client";
import { ReactNode, useContext, useState } from "react";
import { PaletteMode } from "@mui/material";
import { ThemeModContext } from "./themeContext";

import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from "../createTheme/getTheme";
import { ThemeContextType } from "../types/typesTheme";
export default function ThemeModProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [Mode, setMode] = useState<PaletteMode>("dark");

  const handleToggleTheme = (): void => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeModContext.Provider value={{ Mode, handleToggleTheme }}>
      <ThemeProvider theme={getTheme(Mode)}>{children}</ThemeProvider>
    </ThemeModContext.Provider>
  );
}
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeModContext);
  if (!context) {
    throw new Error("use theme must be used within themeModeProvider");
  }
  return context;
}

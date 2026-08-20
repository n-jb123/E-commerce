import { PaletteMode } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { darkColor, lightColor } from "../token/color";
export const getTheme = (Mode: PaletteMode) => {
  const ModeColor = Mode === "dark" ? darkColor : lightColor;
  return createTheme({
    palette: {
      mode: Mode,
      primary: {
        main: ModeColor.primary.main,
        links: ModeColor.primary.links,
        activeNavigation: ModeColor.primary.activeNavigation,
        highlight: ModeColor.primary.highlight,
      },
      secondary: {
        main: ModeColor.secondary.main,
        filters: ModeColor.secondary.filters,
        categories: ModeColor.secondary.categories,
      },
      tertiary: {
        main: ModeColor.tertiary.main,
        tags: ModeColor.tertiary.tags,
      },
      error: {
        main: ModeColor.error.main,
        alerts: ModeColor.error.alerts,
      },
      warning: {
        main: ModeColor.warning.main,
      },
      success: {
        main: ModeColor.success.main,
      },
      background: {
        default: ModeColor.background.default,
        paper: ModeColor.background.paper,
        inversePaper: ModeColor.background.inversePaper,
      },
      text: {
        primary: ModeColor.text.primary,
        secondary: ModeColor.text.secondary,
        inverseOnSurface: ModeColor.text.inverseOnSurface,
      },
      border: {
        outline: ModeColor.border.outline,
        outlineVariant: ModeColor.border.outlineVariant,
      },
      shadow: {
        primary: `0px 0px 10px ${ModeColor.primary.activeNavigation}`,
        hover: `0px 0px 20px ${ModeColor.primary.activeNavigation}`,
        text: `0px 0px 40px ${ModeColor.primary.activeNavigation}`,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: ModeColor.background.default,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "100vh",
          },
        },
      },
    },
  });
};

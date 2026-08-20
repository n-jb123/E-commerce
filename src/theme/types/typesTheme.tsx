import { PaletteMode } from "@mui/material";

export type ThemeContextType = {
  Mode: PaletteMode;
  handleToggleTheme: () => void;
};
declare module "@mui/material/styles" {
  interface Palette {
    tertiary: {
      main: string;
      tags: string;
    };
    border: {
      outline: string;
      outlineVariant: string;
    };
    shadow: {
      primary: string;
      hover: string;
      text: string;
    };
  }

  interface PaletteOptions {
    tertiary?: {
      main?: string;
      tags?: string;
    };
    border?: {
      outline?: string;
      outlineVariant?: string;
    };
    shadow?: {
      primary?: string;
      hover?: string;
      text?: string;
    };
  }

  interface PaletteColor {
    links?: string;
    activeNavigation?: string;
    highlight?: string;

    filters?: string;
    categories?: string;

    alerts?: string;
  }

  interface SimplePaletteColorOptions {
    links?: string;
    activeNavigation?: string;
    highlight?: string;

    filters?: string;
    categories?: string;

    alerts?: string;
  }

  interface TypeText {
    inverseOnSurface?: string;
  }

  interface TypeBackground {
    inversePaper?: string;
    darkPaper?: string;
  }
}

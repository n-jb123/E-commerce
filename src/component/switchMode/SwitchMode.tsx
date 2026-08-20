import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { SwitchModeType } from "../types/typesComponent";

export const SwitchMode = ({ handleToggleTheme, Mode }: SwitchModeType) => {
  return (
    <IconButton onClick={handleToggleTheme}>
      {Mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

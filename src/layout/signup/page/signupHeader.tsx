import { Logo } from "@/component/Logo/Logo";
import { SwitchMode } from "@/component/switchMode/SwitchMode";
import { signHeaderType } from "@/futures/auth/types/typesAuth";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
export const SignupHeader = ({ handleToggleTheme, Mode }: signHeaderType) => (
  <Stack
    direction={"row"}
    sx={{
      justifyContent: "space-between",
      p: "24px",
      alignItems: "center",
      height: "10vh",
      backgroundColor: "background.paper",
    }}
  >
    <Link href={"/"}>
      <Logo />
    </Link>
    <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Link href={"/signin"}>
        <Typography sx={{ color: "text.secondary" }}>signin</Typography>
      </Link>
      <SwitchMode handleToggleTheme={handleToggleTheme} Mode={Mode} />
    </Box>
  </Stack>
);

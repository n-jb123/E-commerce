import { Box, Stack, Typography } from "@mui/material";
import { Logo } from "@/component/Logo/Logo";
import { SwitchMode } from "@/component/switchMode/SwitchMode";
import Link from "next/link";
import { signHeaderType } from "@/futures/auth/types/typesAuth";

export const SigninHeader = ({ handleToggleTheme, Mode }: signHeaderType) => (
  <Stack
    direction={"row"}
    sx={{
      justifyContent: "space-between",
      alignItems: "center",
      p: "24px",
      height: "10vh",
      backgroundColor: "background.paper",
    }}
  >
    <Link href={"/"}>
      <Logo />
    </Link>

    <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Link href={"/auth/signup"}>
        <Typography sx={{ color: "text.secondary" }}>Create Account</Typography>
      </Link>

      <SwitchMode handleToggleTheme={handleToggleTheme} Mode={Mode} />
    </Box>
  </Stack>
);

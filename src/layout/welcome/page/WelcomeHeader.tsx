import { Stack, Box } from "@mui/material";
import { Logo } from "@/component/Logo/Logo";
import PrimaryButton from "@/component/buttons/PrimaryButtons";
import { OutlineButton } from "@/component/buttons/OutlineButton";
import { SwitchMode } from "@/component/switchMode/SwitchMode";
import Link from "next/link";
import { welcomeHeaderType } from "../types/typesWelcomeLayout";

export const WelcomeHeader = ({
  router,
  handleToggleTheme,
  Mode,
}: welcomeHeaderType) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
        height: "10vh",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "32px",
        zIndex: 4,
        backgroundColor: "background.paper",
      }}
    >
      <Link href={"/"}>
        <Logo />
      </Link>

      <Stack direction={"row"} sx={{ gap: "16px" }}>
        <Box
          sx={{
            width: { xs: "70px", sm: "100px" },
            height: { xs: "35px", sm: "50px" },
          }}
        >
          <PrimaryButton onClick={() => router.push("/auth/signup")}>
            signup
          </PrimaryButton>
        </Box>
        <Box
          sx={{
            width: { xs: "70px", sm: "100px" },
            height: { xs: "35px", sm: "50px" },
          }}
        >
          <OutlineButton onClick={() => router.push("/auth/signin")}>
            signin
          </OutlineButton>
        </Box>
        <SwitchMode handleToggleTheme={handleToggleTheme} Mode={Mode} />
      </Stack>
    </Stack>
  );
};

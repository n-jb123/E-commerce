import { WelcomeHeader } from "./WelcomeHeader";
import { WelcomeFooter } from "./WelcomeFooter";
import { Box, Stack } from "@mui/material";
import { welcomeLayoutType } from "../types/typesWelcomeLayout";

export default function WelcomeLayout({
  children,
  handleToggleTheme,
  Mode,
  router,
}: welcomeLayoutType) {
  return (
    <Stack direction="column" sx={{ height: "100vh" ,overflow:'hidden'}}>
      <WelcomeHeader
        handleToggleTheme={handleToggleTheme}
        Mode={Mode}
        router={router}
      />
      <Stack direction={"row"}>
        <Box sx={{ width: "100%", height: "80vh" }}>{children}</Box>
      </Stack>
      <WelcomeFooter />
    </Stack>
  );
}

import { Box } from "@mui/material";
import { SigninHeader } from "./signinHeader";
import { SignLayoutType } from "@/futures/auth/types/typesAuth";

export const SigninLayout = ({
  children,
  handleToggleTheme,
  Mode,
}: SignLayoutType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <SigninHeader handleToggleTheme={handleToggleTheme} Mode={Mode} />
      <Box>{children}</Box>
    </Box>
  );
};

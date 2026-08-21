import { Box } from "@mui/material";
import { SignupHeader } from "./signupHeader";
import { SignLayoutType } from "@/futures/auth/types/typesAuth";

export const SignupLayout = ({
  handleToggleTheme,
  Mode,
  children,
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
      <SignupHeader handleToggleTheme={handleToggleTheme} Mode={Mode} />
      <Box>{children}</Box>
    </Box>
  );
};

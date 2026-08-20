import { Stack, Box, Typography } from "@mui/material";
import { Logo } from "@/component/Logo/Logo";
export const WelcomeFooter = () => (
  <Box>
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "10vh",
        alignItems: "center",
        justifyContent: "space-between",
        color: "text.inverseOnSurface",
        backgroundColor: "background.inversePaper",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          p: "0 24px",
        }}
      >
        <Box>
          <Logo width="200px" height="50px" />
        </Box>
        <Stack direction={"row"} sx={{ gap: "16px" }}>
          <Typography>privacy</Typography>
          <Typography>terms</Typography>
          <Typography>Atelier</Typography>
        </Stack>
      </Stack>

      <Box>
        <Typography>© 2024 AURA. All rights reserved.</Typography>
      </Box>
    </Stack>
    <Stack
      direction="row"
      sx={{
        width: "100%",
        height: "10vh",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "background.paper",
      }}
    ></Stack>
  </Box>
);

import { Stack, Box, Typography } from "@mui/material";
import { UpdateUserName } from "./updateUserName";
import { ProfileUserNamePage } from "../types/typesProfile";
export const ProfileUserName = ({
  user,
  userName,
  handleOnSubmitUserName,
  openDialogUserName,
  handleOpenDialogUserName,
  handleCloseDialogUserName,
}:ProfileUserNamePage) => (
  <Stack
    direction={{ xs: "row", md: "column" }}
    sx={{
      justifyContent: { xs: "space-between", md: "flex-start" },
      alignItems: { xs: "center", md: "start" },
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{
          width: "140px",
          fontSize: "18px",
          color: "text.secondary",
        }}
      >
        User Name:
      </Typography>
      <UpdateUserName
        userName={userName}
        handleOnSubmitUserName={handleOnSubmitUserName}
        openDialogUserName={openDialogUserName}
        handleOpenDialogUserName={handleOpenDialogUserName}
        handleCloseDialogUserName={handleCloseDialogUserName}
      />
    </Box>

    <Typography sx={{ fontSize: "32px" }}>
      {`${user?.user_metadata.firstName} ${user?.user_metadata.lastName}`.trim()}
    </Typography>
  </Stack>
);

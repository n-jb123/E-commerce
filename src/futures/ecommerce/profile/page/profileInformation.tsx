import { Paper, Typography, Stack, Box } from "@mui/material";
import { UpdatePhoneNumber } from "./updatePhoneNumber";
import { ProfileUserName } from "./profileUserName";
import { ProfileInformationType } from "../types/typesProfile";
import Loading from "@/component/state/loading/loading";
import { OutlineButton } from "@/component/buttons/OutlineButton";

export const ProfileInformation = ({
  userName,
  handleOnSubmitUserName,
  openDialogUserName,
  handleOpenDialogUserName,
  handleCloseDialogUserName,
  user,
  phoneNumber,
  handleOnSubmitPhoneNumber,
  openDialogPhoneNumber,
  handleOpenDialogPhoneNumber,
  handleCloseDialogPhoneNumber,
  CreateAt,
  router,
  logout,
  isLoading,
  errorMessage
}: ProfileInformationType) => {
  if (isLoading) {
    return <Loading width={"400px"} height={"600px"} />;
  }
  return (
    <Paper sx={{ border: "2px solid", p: "16px", borderRadius: "8px" , width:'400px' , height:'600px' ,display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}>
      <Typography sx={{ fontFamily: "Tangerine", fontSize: "64px" }}>
        Personal Information
      </Typography>
      <ProfileUserName
        user={user}
        userName={userName}
        handleOnSubmitUserName={handleOnSubmitUserName}
        openDialogUserName={openDialogUserName}
        handleOpenDialogUserName={handleOpenDialogUserName}
        handleCloseDialogUserName={handleCloseDialogUserName}
      />

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
            phon Number:
          </Typography>
          <UpdatePhoneNumber
            phoneNumber={phoneNumber}
            handleOnSubmitPhoneNumber={handleOnSubmitPhoneNumber}
            openDialogPhoneNumber={openDialogPhoneNumber}
            handleOpenDialogPhoneNumber={handleOpenDialogPhoneNumber}
            handleCloseDialogPhoneNumber={handleCloseDialogPhoneNumber}
          />
        </Box>

        {user?.user_metadata.phone ? (
          <Typography sx={{ fontSize: "32px" }}>{user?.user_metadata.phone}</Typography>
        ) : (
          <Typography>The phone number has not been entered yet.</Typography>
        )}
      </Stack>
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
            Email:
          </Typography>
        </Box>

        <Typography sx={{ fontSize: "32px" }}>{user?.email}</Typography>
      </Stack>
      <Stack
        direction={{ xs: "row", md: "column" }}
        sx={{
          justifyContent: { xs: "space-between", md: "flex-start" },
          alignItems: { xs: "center", md: "start" },
        }}
      >
        <Typography
          sx={{
            width: "140px",
            fontSize: "18px",
            color: "text.secondary",
          }}
        >
          created at:
        </Typography>
        <Typography sx={{ fontSize: "32px" }}>{CreateAt}</Typography>
      </Stack>
      <OutlineButton
      height={'max-content'}

        onClick={() => {
          router.push("/");
          logout();
        }}
      >
        logout
      </OutlineButton>
      {errorMessage? errorMessage:''}
    </Paper>
  );
};

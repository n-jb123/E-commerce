import { Box, Avatar } from "@mui/material";
import { UpdateImage } from "./updateImage";
import { profileImagePage } from "../types/typesProfile";
import Loading from "@/component/state/loading/loading";
export const ProfileImage = ({
  user,
  handleOpenDialogImage,
  handleOnSubmitImage,
  openDialogImage,
  handleCloseDialogImage,
  image,
}: profileImagePage) => {
  return (
    <Box
      sx={{
        width: "400px",
        height: "400px",
        p: "16px",
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        alignItems: "center",
        gap: "4px",
      }}
    >
      {user?.img ? (
        <Avatar
          onClick={() => handleOpenDialogImage()}
          src={user?.img}
          sx={{
            width: "400px",
            height: "400px",
            borderRadius: "8px",
            fontSize: "120px",
          }}
        />
      ) : (
        <Avatar
          onClick={() => handleOpenDialogImage()}
          sx={{
            width: "400px",
            height: "400px",
            borderRadius: "8px",
            fontSize: "120px",
          }}
        >
          {`${user?.first_name?.[0]} ${user?.last_name?.[0]}`.trim()}
        </Avatar>
      )}
      <UpdateImage
        image={image}
        handleOnSubmitImage={handleOnSubmitImage}
        openDialogImage={openDialogImage}
        handleCloseDialogImage={handleCloseDialogImage}
      />
    </Box>
  );
};

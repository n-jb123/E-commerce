"use client";
import { Box, Stack } from "@mui/material";

import {
  useUpdateImage,
  useUpdatePhoneNumber,
  useUpdateUserName,
} from "../hooks/useUpdateProfileForm";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import { useRouter } from "next/navigation";
import { ProfileImage } from "./profileImage";
import { ProfileInformation } from "./profileInformation";

import { Card } from "@/component/card/card";
import { useProfileClient } from "@/service/profile/useProfile";
import { useSignout } from "@/futures/auth/hooks/useSignout";
import { EcommerceLayout } from "@/layout/ecommerce/page/ecommerceLayout";
export const ProfileClient = () => {
  const router = useRouter();
  const { userName, handleOnSubmitUserName } = useUpdateUserName();
  const { phoneNumber, handleOnSubmitPhoneNumber } = useUpdatePhoneNumber();
  const { image, handleOnSubmitImage } = useUpdateImage();
  const {
    openDialogUserName,
    handleOpenDialogUserName,
    handleCloseDialogUserName,
    openDialogPhoneNumber,
    handleOpenDialogPhoneNumber,
    handleCloseDialogPhoneNumber,
    openDialogImage,
    handleOpenDialogImage,
    handleCloseDialogImage,
  } = useUpdateProfile();
  const {errorMessage,loading,HandleOnSignout}=useSignout()
  const {  user } = useProfileClient();
  const CreateAt = new Date(user?.created_at).toLocaleDateString("en-GB");
  return (
    <EcommerceLayout>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Card width={"max-content"} height="max-content">
          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            <ProfileImage
              user={user}
              handleOpenDialogImage={handleOpenDialogImage}
              handleOnSubmitImage={handleOnSubmitImage}
              openDialogImage={openDialogImage}
              handleCloseDialogImage={handleCloseDialogImage}
              image={image}
            />
            <ProfileInformation
              userName={userName}
              handleOnSubmitUserName={handleOnSubmitUserName}
              openDialogUserName={openDialogUserName}
              handleOpenDialogUserName={handleOpenDialogUserName}
              handleCloseDialogUserName={handleCloseDialogUserName}
              user={user}
              phoneNumber={phoneNumber}
              handleOnSubmitPhoneNumber={handleOnSubmitPhoneNumber}
              openDialogPhoneNumber={openDialogPhoneNumber}
              handleOpenDialogPhoneNumber={handleOpenDialogPhoneNumber}
              handleCloseDialogPhoneNumber={handleCloseDialogPhoneNumber}
              CreateAt={CreateAt}
              router={router}
              logout={HandleOnSignout}
              isLoading={loading}
              errorMessage={errorMessage}
            />
          </Stack>
        </Card>
      </Box>
    </EcommerceLayout>
  );
};

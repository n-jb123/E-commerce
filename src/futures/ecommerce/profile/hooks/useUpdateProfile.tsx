import { useState } from "react";
export const useUpdateProfile = () => {
  const [openDialogUserName, setOpenDialogUserName] = useState<boolean>(false);
  const handleOpenDialogUserName = () => {
    setOpenDialogUserName(true);
  };
  const handleCloseDialogUserName = () => {
    setOpenDialogUserName(false);
  };
  const [openDialogPhoneNumber, setOpenDialogPhoneNumber] =
    useState<boolean>(false);
  const handleOpenDialogPhoneNumber = () => {
    setOpenDialogPhoneNumber(true);
  };
  const handleCloseDialogPhoneNumber = () => {
    setOpenDialogPhoneNumber(false);
  };
  const [openDialogImage, setOpenDialogImage] = useState<boolean>(false);
  const handleOpenDialogImage = () => {
    setOpenDialogImage(true);
  };
  const handleCloseDialogImage = () => {
    setOpenDialogImage(false);
  };
  return {
    openDialogUserName,
    handleOpenDialogUserName,
    handleCloseDialogUserName,
    openDialogPhoneNumber,
    handleOpenDialogPhoneNumber,
    handleCloseDialogPhoneNumber,
    openDialogImage,
    handleOpenDialogImage,
    handleCloseDialogImage,
  };
};

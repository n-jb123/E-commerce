import { Fragment } from "react/jsx-runtime";
import EditIcon from "@mui/icons-material/Edit";
import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { UpdateUserNamePage } from "../types/typesProfile";

export const UpdateUserName = ({
  openDialogUserName,
  handleOpenDialogUserName,
  handleCloseDialogUserName,
  userName,
  handleOnSubmitUserName
}: UpdateUserNamePage) => {
  return (
    <Fragment>
      <IconButton
        sx={{ border: "1px solid", borderRadius: "8px" }}
        onClick={handleOpenDialogUserName}
      >
        <EditIcon />
      </IconButton>
      <Dialog open={openDialogUserName} onClose={handleCloseDialogUserName}>
        <DialogTitle>update user Name</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => {
              handleOnSubmitUserName()}}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography>update first Name</Typography>
              <TextField
                id="firstName"
                label="firstName"
                type="text"
                error={!!userName.formState.errors.firstName?.message}
                helperText={userName.formState.errors.firstName?.message}
                {...userName.register("firstName")}
                variant="standard"
                sx={{ width: "100%" }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography>update last Name</Typography>
              <TextField
                id="lastName"
                label="lastName"
                type="text"
                error={!!userName.formState.errors.lastName?.message}
                helperText={userName.formState.errors.lastName?.message}
                {...userName.register("lastName")}
                variant="standard"
                sx={{ width: "100%" }}
              />
            </Box>
            <Button type="submit">update</Button>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

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
import { UpdatePhoneNumberPage } from "../types/typesProfile";

export const UpdatePhoneNumber = ({
  openDialogPhoneNumber,
  handleOpenDialogPhoneNumber,
  handleCloseDialogPhoneNumber,
  handleOnSubmitPhoneNumber,
  phoneNumber,
}: UpdatePhoneNumberPage) => {
  return (
    <Fragment>
      <IconButton
        sx={{ border: "1px solid", borderRadius: "8px" }}
        onClick={handleOpenDialogPhoneNumber}
      >
        <EditIcon />
      </IconButton>
      <Dialog
        open={openDialogPhoneNumber}
        onClose={handleCloseDialogPhoneNumber}
      >
        <DialogTitle>update phoneNumber</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => {
              handleOnSubmitPhoneNumber()}}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Typography>inter new phoneNumber</Typography>
              <TextField
                id="phoneNumber"
                label="phoneNumber"
                type="phoneNumber"
                error={!!phoneNumber.formState.errors.phoneNumber?.message}
                helperText={phoneNumber.formState.errors.phoneNumber?.message}
                {...phoneNumber.register("phoneNumber")}
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

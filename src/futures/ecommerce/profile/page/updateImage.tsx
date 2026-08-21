import {
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { updateImagePage } from "../types/typesProfile";

export const UpdateImage = ({
  handleCloseDialogImage,
  openDialogImage,
  image,
  handleOnSubmitImage,
}: updateImagePage) => (
  <Fragment>
    <Dialog open={openDialogImage} onClose={handleCloseDialogImage}>
      <DialogTitle>update image</DialogTitle>
      <DialogContent>
        <form
          onSubmit={() => handleOnSubmitImage()}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography>
              Enter the link to the image you want to set as your profile
              picture.
            </Typography>
            <TextField
              id="URL"
              label="URL"
              type="text"
              error={!!image.formState.errors.image?.message}
              helperText={image.formState.errors.image?.message}
              {...image.register("image")}
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>

          <Button type="submit">Edit</Button>
        </form>
      </DialogContent>
    </Dialog>
  </Fragment>
);

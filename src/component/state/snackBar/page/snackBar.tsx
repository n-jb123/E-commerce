'use client'
import { Snackbar, Alert } from "@mui/material";
import { useSnackBar } from "../hooks/useSnackBar";
export const SnackBar = () => {
  const isSnackBarOpen=useSnackBar(state=>state.isSnackBarOpen)
   const closeSnackBar=useSnackBar(state=>state.closeSnackBar)
   const valueSnackBar=useSnackBar(state=>state.valueSnackBar)
   const colorSnackBar=useSnackBar(state=>state.colorSnackBar)
  return (
    <Snackbar
      open={isSnackBarOpen}
      autoHideDuration={3500}
      onClose={closeSnackBar}
    >
      <Alert
        onClose={closeSnackBar}
        severity={colorSnackBar.split('.')[0] as 'error' | 'success' | 'warning' | 'info'}
        variant="filled"
        sx={(theme)=>({
          border: "1px solid",
          boxShadow:theme.palette.shadow.primary,
          background:  colorSnackBar ,
          backdropFilter: "blur(12px)",
          color: "#fff",
          width: "500px",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow:theme.palette.shadow.hover,
          },
        })}
      >
        {valueSnackBar}
      </Alert>
    </Snackbar>
  );
};

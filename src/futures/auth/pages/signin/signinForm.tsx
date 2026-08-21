
import PrimaryButton from "@/component/buttons/PrimaryButtons";
import { Box, Stack, Typography, TextField } from "@mui/material";
import { SigninFormType } from "../../types/typesAuth";


export const SigninForm = ({
  register,
  HandleOnSubmit,
  errors,
  errorMessage,
  loading,
}: SigninFormType) => {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      sx={{
        width: { xs: "100%", md: "50%" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Tangerine",
            fontSize: "64px",
            color: "text.secondary",
          }}
        >
          Welcome Back
        </Typography>
        <Typography sx={{ color: "text.inverseOnSurface" }}>
          Sign in to your private gallery.
        </Typography>
      </Box>
      <form
        onSubmit={HandleOnSubmit}
        style={{
          gap: "24px",
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <TextField
          id="email"
          label="email"
          type="email"
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          {...register("email")}
          variant="standard"
          sx={{ width: "100%" }}
        />
        <TextField
          id="password"
          label="password"
          type="password"
          error={!!errors.password?.message}
          helperText={errors.password?.message}
          {...register("password")}
          variant="standard"
          style={{ width: "100%" }}
        />
        {errorMessage && (
          <Typography sx={(theme) => ({ color: theme.palette.error.main })}>
            {errorMessage}
          </Typography>
        )}
        <PrimaryButton onClick={HandleOnSubmit} disabled={loading}>
          {loading ? "loading..." : "Signin"}
        </PrimaryButton>
      </form>
    </Stack>
  );
};

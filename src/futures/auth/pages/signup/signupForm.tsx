import { Box, Stack, Typography, TextField } from "@mui/material";
import { SignupFormType } from "../../types/typesAuth";
import PrimaryButton from "@/component/buttons/PrimaryButtons";


export const SignupForm = ({
  register,
  errors,
  errorMessage,
  handleOnSubmit,
  loading,
}: SignupFormType) => {
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
          Welcome 
        </Typography>
        <Typography sx={{ color: "text.inverseOnSurface" }}>
          Register now for your own exhibition.
        </Typography>
      </Box>
      <form
        onSubmit={handleOnSubmit}
        style={{
          gap: "24px",
          display: "flex",
          flexWrap: "wrap",
          width: "50%",
        }}
      >
        <Stack direction={"column"} spacing={2}>
          <TextField
              id="phone"
              label="phone"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              {...register("phone")}
              variant="standard"
              sx={{ width: "100%" }}
            />
          <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
            <TextField
              id="firstName"
              label="firstName"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...register("firstName")}
              variant="standard"
              sx={{ width: "100%" }}
            />
            <TextField
              id="lastName"
              label="lastName"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              {...register("lastName")}
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
            <TextField
              id="email"
              label="email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
              variant="standard"
              sx={{ width: "100%" }}
            />
            <TextField
              id="password"
              label="password"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password")}
              variant="standard"
              sx={{ width: "100%" }}
            />
          </Box>
        </Stack>
        {errorMessage && (
          <Typography sx={(theme) => ({ color: theme.palette.error.main })}>
            {errorMessage}
          </Typography>
        )}
        <PrimaryButton
          onClick={handleOnSubmit}
          disabled={loading}
          height="max-content"
        >
          {loading ? "loading..." : "Signup"}
        </PrimaryButton>
      </form>
    </Stack>
  );
};

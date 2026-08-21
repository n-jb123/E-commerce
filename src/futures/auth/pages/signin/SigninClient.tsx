"use client";
import { Stack } from "@mui/material";
import { SigninForm } from "./signinForm";
import { SigninImage } from "./signinImage";
import { useSignin } from "../../hooks/useSignin";
import { useTheme } from "@/theme/provider/themeProvider";
import { SigninLayout } from "@/layout/Signin/page/SigninLayout";

export const SigninClient = () => {
  const { register, HandleOnSubmit, errors, errorMessage, loading } =
    useSignin();
  const { Mode, handleToggleTheme } = useTheme();
  return (
    <SigninLayout handleToggleTheme={handleToggleTheme} Mode={Mode}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <SigninImage />
        <SigninForm
          register={register}
          HandleOnSubmit={HandleOnSubmit}
          errors={errors}
          errorMessage={errorMessage}
          loading={loading}
        />
      </Stack>
    </SigninLayout>
  );
};

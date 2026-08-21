"use client";
import { Stack } from "@mui/material";
import { SignupForm } from "./signupForm";
import { SignupImage } from "./signupImage";

import { useSignup } from "../../hooks/useSignup";
import { useTheme } from "@/theme/provider/themeProvider";
import { SignupLayout } from "@/layout/signup/page/signupLayout";

export const SignupClient = () => {
  const { handleToggleTheme, Mode } = useTheme();
  const { handleOnSubmit, errorMessage, errors, register, loading } =
    useSignup();

  return (
    <SignupLayout handleToggleTheme={handleToggleTheme} Mode={Mode}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <SignupImage />
        <SignupForm
          register={register}
          handleOnSubmit={handleOnSubmit}
          errors={errors}
          errorMessage={errorMessage}
          loading={loading}
        />
      </Stack>
    </SignupLayout>
  );
};

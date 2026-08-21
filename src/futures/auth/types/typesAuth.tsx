import type { User, Session } from "@supabase/supabase-js";
import {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import {
  BaseSyntheticEvent,
  ReactNode,
} from "react";
import { PaletteMode } from "@mui/material";

export type authType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
}
export type signinType = {
  email: string;
  password: string;
};
export type signupType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type SigninFormType = {
  register: UseFormRegister<{
    email: string;
    password: string;
  }>;
  HandleOnSubmit:(e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void | undefined>
  errors: FieldErrors<{
    email: string;
    password: string;
  }>;
  errorMessage: string | null;
  loading: boolean;
};
export type signHeaderType = {
  handleToggleTheme: () => void;
  Mode: PaletteMode;
};
export type SignLayoutType = {
  children: ReactNode;
  handleToggleTheme: () => void;
  Mode: PaletteMode;
};
export type SignupFormType = {
  register: UseFormRegister<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>;
  handleOnSubmit:  (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void | undefined>
  errors: FieldErrors<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>;
  errorMessage: string | null;
  loading: boolean;
};
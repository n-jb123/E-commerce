"use client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
const signinShame = yup.object({
  email: yup
    .string()
    .email("What you wrote is not in email format.")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "The password must be 6 characters or more.")
    .required("Password is required"),
});
export const useSignin = () => {
    const supabase=createClient()
    const [loading,setLoading]=useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinShame) });
  const onSubmit = async (formData: { email: string; password: string }) => {
    setLoading(true);
    const { email, password } = formData;
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data?.user) {
      setErrorMessage(error?.message || "Login failed");
      setLoading(false);
      return;
    }else{
        data.user.user_metadata.role==='admin'?
        router.push('dashboard/home'):router.push('/ecommerce/home')
        setLoading(false)
    }
  };
  const HandleOnSubmit = handleSubmit(onSubmit);
  return { register, HandleOnSubmit, errors, errorMessage ,loading};
};

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
const signupShame = yup.object({
 phone: yup
  .string()
  .required('Phone number is required')
  .matches(
    /^\+[1-9]\d{1,14}$/,
    'Phone number must be in international format (e.g. +201012345678)'
  ),
  firstName: yup.string().required("firstName is required"),
  lastName: yup.string().required("lastName is required"),
  email: yup
    .string()
    .email("What you wrote is not in email format.")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "The password must be 6 characters or more.")
    .required("Password is required"),
});
export const useSignup = () => {
  
  const supabase = createClient();
  const [loading, setLoading] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupShame) });
  const onSubmit = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone:string
  }) => {
    setLoading(true);
    const {phone, firstName, lastName, email, password } = formData;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName: firstName,
          lastName: lastName,
          phone:phone
        },
      },
    });

    if (error || !data?.user) {
      setErrorMessage(error?.message || "signup failed");
      setLoading(false);
      return;
    }
   
    setLoading(false);
    router.push("/signin");
  };
  const handleOnSubmit = handleSubmit(onSubmit);
  return { register, errors, errorMessage, handleOnSubmit, loading };
};

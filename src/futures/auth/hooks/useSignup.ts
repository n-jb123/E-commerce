import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
const signupShema = yup.object({
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
  } = useForm({ resolver: yupResolver(signupShema) });
  const onSubmit = async (formData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const { firstName, lastName, email, password } = formData;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: "user",
          firstName: firstName,
          lastName: lastName,
        },
      },
    });

    if (error || !data?.user) {
      setErrorMessage(error?.message || "signup failed");
      setLoading(false);
      return;
    }
    await supabase
      .from("profiles")
      .insert({
        id: data?.user.id,
        user_name: firstName + " " + lastName,
        role: "user",
      });
    setLoading(false);
    router.push("/signin");
  };
  const handleOnSubmit = handleSubmit(onSubmit);
  return { register, errors, errorMessage, handleOnSubmit, loading };
};

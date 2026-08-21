import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useProfileClient } from "@/service/profile/useProfile";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

// ==================== First & Last Name ====================
const updateUserNameShame = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
});
export type userNameInput = yup.Asserts<typeof updateUserNameShame>;
export type userNameOutput = yup.InferType<typeof updateUserNameShame>;

export const useUpdateUserName = () => {
  const { user } = useProfileClient();
  const userName = useForm<userNameInput, any, userNameOutput>({
    resolver: yupResolver(updateUserNameShame),
    defaultValues: {
      firstName: user?.user_metadata?.firstName ?? "",
      lastName: user?.user_metadata?.lastName ?? "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: userNameOutput) => {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
      },
    });

    if (error) {
      console.error(error.message);
      return;
    }
    console.log(data.user);
  };

  const handleOnSubmit = userName.handleSubmit(onSubmit);
  return {
    userName,
    handleOnSubmitUserName: handleOnSubmit,
  };
};

// ==================== Phone Number ====================
const phoneNumberShame = yup.object({
  phoneNumber: yup
    .string()
    .matches(
      /^\+[1-9]\d{1,14}$/,
      "Phone number must be in international format (e.g. +201012345678)"
    )
    .notRequired(),
});
export type PhoneNumberInput = yup.Asserts<typeof phoneNumberShame>;
export type PhoneNumberOutput = yup.InferType<typeof phoneNumberShame>;

export const useUpdatePhoneNumber = () => {
  const { user } = useProfileClient();
  const phoneNumber = useForm<PhoneNumberInput, any, PhoneNumberOutput>({
    resolver: yupResolver(phoneNumberShame),
    defaultValues: {
      phoneNumber: user?.phone ?? "",
    },
    mode: "onChange",
  });

  const onSubmit = async () => {
    const { data, error } = await supabase.auth.updateUser({
      data:{
        phone: phoneNumber
      }
      
    });

    if (error) {
      console.error(error.message);
      return;
    }
    console.log(data.user);
  };

  const handleOnSubmit = phoneNumber.handleSubmit(onSubmit);
  return {
    phoneNumber,
    handleOnSubmitPhoneNumber: handleOnSubmit,
  };
};

// ==================== Email ====================
const emailShame = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});
export type emailInput = yup.Asserts<typeof emailShame>;
export type emailOutput = yup.InferType<typeof emailShame>;

export const useUpdateEmail = () => {
  const { user } = useProfileClient();
  const email = useForm<emailInput, any, emailOutput>({
    resolver: yupResolver(emailShame),
    defaultValues: {
      email: user?.email ?? "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: emailOutput) => {
    const { data, error } = await supabase.auth.updateUser({
      email: values.email,
    });

    if (error) {
      console.error(error.message);
      return;
    }
    console.log(data.user);
  };

  const handleOnSubmit = email.handleSubmit(onSubmit);
  return {
    email,
    handleOnSubmitEmail: handleOnSubmit,
  };
};

// ==================== Image ====================
const imageShame = yup.object({
  image: yup.string(),
});
export type imageInput = yup.Asserts<typeof imageShame>;
export type imageOutput = yup.InferType<typeof imageShame>;

export const useUpdateImage = () => {
  const { user } = useProfileClient();
  const image = useForm<imageInput, any, imageOutput>({
    resolver: yupResolver(imageShame),
    defaultValues: {
      image: user?.user_metadata?.avatar_url ?? "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: imageOutput) => {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        avatar_url: values.image,
      },
    });

    if (error) {
      console.error(error.message);
      return;
    }
    console.log(data.user);
  };

  const handleOnSubmit = image.handleSubmit(onSubmit);
  return {
    image,
    handleOnSubmitImage: handleOnSubmit,
  };
};
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCheckout } from "../hooks/useCheckout";
import { contact } from "../types/typesCheckout";
const schema = yup.object({
  email: yup.string().email().required(),
  phoneNumber: yup
    .string()
    .matches(/^09\d{8}$/, "The number you entered is invalid.")
    .required("Email is required."),
});

export const useContactForm = () => {
  const setContact = useCheckout((s) => s.setContact);

  const form = useForm<contact>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      phoneNumber: "",
    },
    mode: "onChange",
  });
  const ValidateAndSave = async () => {
    const isValid = await form.trigger();
    if (!isValid) return false;
    setContact(form.getValues());
    return true;
  };
  return {
    register: form.register,
    formState: form.formState,
    trigger: form.trigger,
    getValues: form.getValues,
    ValidateAndSave,
  };
};

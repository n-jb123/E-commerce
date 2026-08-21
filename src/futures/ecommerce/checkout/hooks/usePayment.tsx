import { useCheckout } from "../hooks/useCheckout";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { payment } from "../types/typesCheckout";
export const usePaymentForm = () => {
  const setPayment = useCheckout((s) => s.setPayment);
  const PaymentShame = yup.object({
    cardNumber: yup
      .string()
      .matches(/^\d{12}$/, "It must consist of 12 numbers")
      .required("card Number is required"),

    expiryDate: yup
      .string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format must be MM/YY")
      .required("expiry date is required"),

    cvc: yup
      .string()
      .matches(/^\d{3}$/, "CVC must be 3 digits")
      .required("cvc is required"),
  });
  const form = useForm<payment>({
    resolver: yupResolver(PaymentShame),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });
  const ValidateAndSave = async () => {
    const isValid = await form.trigger();
    if (!isValid) return false;
    setPayment(form.getValues());
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

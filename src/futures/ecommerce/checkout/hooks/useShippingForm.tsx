import { useCheckout } from "../hooks/useCheckout";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { shippingAddress } from "../types/typesCheckout";
const ShippingAddressShame = yup.object({
  firstName: yup.string().required("First Name is required."),
  lastName: yup.string().required("Last Name is required."),
  streetAddress: yup.string().required("Street Address is required."),
  city: yup.string().required("City is required."),
  postCode: yup.string().required("Post Code is required."),
});
export const useShippingForm = () => {
  const setShipping = useCheckout((s) => s.setShippingAddress);

  const form = useForm<shippingAddress>({
    resolver: yupResolver(ShippingAddressShame),
  });

  const ValidateAndSave = async () => {
    const isValid = await form.trigger();
    if (!isValid) return false;
    setShipping(form.getValues());
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

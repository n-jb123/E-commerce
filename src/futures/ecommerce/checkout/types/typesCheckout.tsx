import {  
  UseFormRegister,
  FormState,
  UseFormGetValues,
  UseFormTrigger,
} from "react-hook-form";
import { cartProduct, product } from "../../cart/types/typesCart";
export type contact = {
  email: string;
  phoneNumber: string;
};
export interface payment {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}
export interface shippingAddress {
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  postCode: string;
}

export type ContactCheckoutType = {
  contactForm: {
    register: UseFormRegister<contact>;
    formState: FormState<contact>;
    trigger: UseFormTrigger<contact>;
    getValues: UseFormGetValues<contact>;
    ValidateAndSave: () => Promise<boolean>;
  };
};

export type PaymentCheckoutType = {
  paymentForm: {
    register: UseFormRegister<payment>;
    formState: FormState<payment>;
    trigger: UseFormTrigger<payment>;
    getValues: UseFormGetValues<payment>;
    ValidateAndSave: () => Promise<boolean>;
  };
};
export type ProductsCheckoutType = {
  productsCart: cartProduct[];
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  isLoading:boolean
};

export type ShippingAddressCheckoutType = {
  shippingForm: {
    register: UseFormRegister<shippingAddress>;
    formState: FormState<shippingAddress>;
    trigger: UseFormTrigger<shippingAddress>;
    getValues: UseFormGetValues<shippingAddress>;
    ValidateAndSave: () => Promise<boolean>;
  };
};
export type StepperType = {
  activeStep: number;
  steps: string[];
};

export type CheckoutStateType = {
  product: product[];
  contact: contact;
  payment: payment;
  shippingAddress: shippingAddress;
  setProducts: (data: product[]) => void;
  setContact: (data: contact) => void;
  setPayment: (data: payment) => void;
  setShippingAddress: (data: shippingAddress) => void;
  clear: () => void;
};

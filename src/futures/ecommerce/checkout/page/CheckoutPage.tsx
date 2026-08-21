"use client";
import { useStepper } from "../hooks/useStepper";
import { useCart } from "../../cart/hooks/useCart";
import { useCheckout } from "../hooks/useCheckout";
import { useContactForm } from "../hooks/useContact";
import { usePaymentForm } from "../hooks/usePayment";
import { useShippingForm } from "../hooks/useShippingForm";
import { Box } from "@mui/material";
import { ProductsCheckout } from "./ProductsCheckout";
import { ContactCheckout } from "./ContactCheckout";
import { PaymentCheckout } from "./PaymentCheckout";
import { ShippingAddressCheckout } from "./ShippingAddressCheckout";
import { useRouter } from "next/navigation";
import { StepperUi } from "./Stepper";
import { createClient } from "@/lib/supabase/client";
import { useProducts } from "@/service/products/useProducts";
import { useSnackBar } from "@/component/state/snackBar/hooks/useSnackBar";
import { Card } from "@/component/card/card";
import PrimaryButton from "@/component/buttons/PrimaryButtons";
import { OutlineButton } from "@/component/buttons/OutlineButton";

export const CheckoutClient = () => {
  const supabase=createClient()
  const { data: products, isLoading } = useProducts();

  const { activeStep, next, back } = useStepper();

  const router = useRouter();
  const OpenSnackBar = useSnackBar((state) => state.OpenSnackBar);
  const { productsCart } = useCart();
  const { increaseQty } = useCart();
  const { decreaseQty } = useCart();
  const { removeFromCart } = useCart();
  const setProducts = useCheckout((s) => s.setProducts);
  const clearCart = useCart((state) => state.clearCart);

  const contactForm = useContactForm();
  const paymentForm = usePaymentForm();
  const shippingForm = useShippingForm();

  const steps = ["Products", "Contact", "Payment", "Shipping", "Finish"];

  const totalPrice = productsCart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const handleNext = async () => {
    if (activeStep === 0) {
      setProducts(productsCart);
      next();
      return;
    }
    if (activeStep === 1) {
      const ok = await contactForm.ValidateAndSave();
      if (!ok) return;
      next();
      return;
    }
    if (activeStep === 2) {
      const ok = await paymentForm.ValidateAndSave();
      if (!ok) return;
      next();
      return;
    }
    if (activeStep === 3) {
      const ok = await shippingForm.ValidateAndSave();
      if (!ok) return;
      clearCart();
      const data = useCheckout.getState();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const user = session?.user;
      const { error } = await supabase.from("orders").insert([
        {
          total: totalPrice.toFixed(2),
          user_id: user?.id,
          phoneNumber: data.contact.phoneNumber,
          cardNumber: data.payment.cardNumber,
          expiryDate: data.payment.expiryDate,
          cvc: data.payment.cvc,
          firstName: data.shippingAddress.firstName,
          lastName: data.shippingAddress.lastName,
          streetAddress: data.shippingAddress.streetAddress,
          city: data.shippingAddress.city,
          postCode: data.shippingAddress.postCode,
          products: data.product,
          created_at: new Date().toLocaleDateString(),
        },
      ]);
      for (const item of data.product) {
        const { error: stockError } = await supabase
          .from("Products")
          .update({
            NumberOfPieces: Number(item.NumberOfPieces) - Number(item.quantity),
          })
          .eq("id", item.id);

        if (stockError) {
          OpenSnackBar("Error updating product stock", "error.main");
          return;
        }
      }

      OpenSnackBar(
        "The checkout process was completed successfully.",
        "success",
      );
      router.push("/ecommerce/home");
      return;
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card width={{ xs: "100%", md: "70%" }} height="max-content">
        <StepperUi steps={steps} activeStep={activeStep} />
        {/* STEP 0 */}
        {/* ProductsCheckout */}
        {activeStep === 0 && (
          <ProductsCheckout
            productsCart={productsCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeFromCart={removeFromCart}
            isLoading={isLoading}
          />
        )}

        {/* STEP 1 */}
        {/* ContactCheckout */}
        {activeStep === 1 && <ContactCheckout contactForm={contactForm} />}

        {/* STEP 2 */}
        {/* PaymentCheckout */}
        {activeStep === 2 && <PaymentCheckout paymentForm={paymentForm} />}

        {/* STEP 3 */}
        {/* ShippingAddressCheckout */}
        {activeStep === 3 && (
          <ShippingAddressCheckout shippingForm={shippingForm} />
        )}

        {/* NAVIGATION */}

        <PrimaryButton onClick={handleNext}>Next</PrimaryButton>
        <OutlineButton onClick={back} disabled={activeStep === 0}>
          Back
        </OutlineButton>
      </Card>
    </Box>
  );
};

import { Stepper, Step, StepLabel } from "@mui/material";
import { StepperType } from "../types/typesCheckout";

export const StepperUi = ({ activeStep, steps }: StepperType) => (
  <Stepper activeStep={activeStep}>
    {steps.map((s) => (
      <Step key={s}>
        <StepLabel>{s}</StepLabel>
      </Step>
    ))}
  </Stepper>
);

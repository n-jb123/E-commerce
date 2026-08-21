"use client";
import { useState } from "react";

export const useStepper = (maxStep = 4) => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxStep));
  };

  const back = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const reset = () => setActiveStep(0);

  return { activeStep, next, back, reset };
};

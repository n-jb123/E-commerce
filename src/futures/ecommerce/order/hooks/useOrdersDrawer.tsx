import { useState } from "react";
import { order } from "../types/typesOrder";

export const useOrdersDrawer = () => {
  const [openOrder, setOpenOrder] = useState<boolean>(false);
  const [selectOrder, setSelectOrder] = useState<order | null>(null);
  const openOrderDrawer = () => {
    setOpenOrder(true);
  };
  const closeOrderDrawer = () => {
    setOpenOrder(false);
  };
  return {
    openOrder,
    openOrderDrawer,
    closeOrderDrawer,
    selectOrder,
    setSelectOrder,
  };
};

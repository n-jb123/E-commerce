"use client";
import { useOrdersDrawer } from "../hooks/useOrdersDrawer";
import { Box } from "@mui/material";
import { OrdersTable } from "./ordersTable";

import { order } from "../types/typesOrder";
import { useProfileClient } from "@/service/profile/useProfile";
import { useOrders } from "@/service/order/useOrders";
import { Card } from "@/component/card/card";
import { EcommerceLayout } from "@/layout/ecommerce/page/ecommerceLayout";
export const OrderClient = () => {
  const { data: orders, error, isLoading } = useOrders();
  const {user}=useProfileClient()
  const {
    openOrder,
    openOrderDrawer,
    closeOrderDrawer,
    setSelectOrder,
    selectOrder,
  } = useOrdersDrawer();
  const myOrder=orders?.filter((order:order)=>order?.user_id===user?.id)
  return (
    <EcommerceLayout>
      <Box sx={{ display: "grid", placeItems: "center", height: "100%" }}>
        <Card width="70%" height="max-content">
          <Box sx={{ width: "100%" }}>
            <OrdersTable
              openOrder={openOrder}
              openOrderDrawer={openOrderDrawer}
              orders={myOrder}
              selectOrder={selectOrder}
              setSelectOrder={setSelectOrder}
              closeOrderDrawer={closeOrderDrawer}
            />
          </Box>
        </Card>
      </Box>
    </EcommerceLayout>
  );
};

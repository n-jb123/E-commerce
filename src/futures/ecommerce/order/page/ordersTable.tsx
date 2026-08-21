import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { OrderDrawer } from "./orderDrawer";
import { ordersTableType } from "../types/typesOrder";

export const OrdersTable = ({
  orders,
  setSelectOrder,
  openOrderDrawer,
  closeOrderDrawer,
  openOrder,
  selectOrder,
}: ordersTableType) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        overflow: "auto",
        height: "50VH",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              sx={{
                backgroundColor: "background.default",
                color: "background.inversePaper",
                fontSize: 14,
              }}
            >
              #order
            </TableCell>
            <TableCell
              align="center"
              sx={{
                backgroundColor: "background.default",
                color: "background.inversePaper",
                fontSize: 14,
              }}
            >
              Price
            </TableCell>
            <TableCell
              align="right"
              sx={{
                backgroundColor: "background.default",
                color: "background.inversePaper",
                fontSize: 14,
              }}
            >
              Date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order, i) => {
            return (
              <TableRow
                key={order.id}
                onClick={() => {
                  setSelectOrder(order);
                  openOrderDrawer();
                }}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(255,255,255,0.2)",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell
                  align="left"
                  sx={{
                    backgroundColor: "background.paper",
                    color: "primary.main",
                    fontSize: 14,
                  }}
                >
                  {i + 1}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "background.paper",
                    color: "primary.main",
                    fontSize: 14,
                  }}
                >
                  {order.total}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    backgroundColor: "background.paper",
                    color: "primary.main",
                    fontSize: 14,
                  }}
                >
                  {order.created_at}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <OrderDrawer
          openOrder={openOrder}
          closeOrderDrawer={closeOrderDrawer}
          selectOrder={selectOrder}
        />
      </Table>
    </TableContainer>
  );
};

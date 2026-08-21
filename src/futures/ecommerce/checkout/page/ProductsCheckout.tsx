import {
  Stack,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductsCheckoutType } from "../types/typesCheckout";
import Loading from "@/component/state/loading/loading";
import { QTY } from "@/component/QTY/QTY";

export const ProductsCheckout = ({
  productsCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  isLoading,
}: ProductsCheckoutType) => {
  return (
    <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
      <TableContainer
        component={Paper}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxHeight: "50vh",
          overflowX: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar": { width: "16px" },
          "&::-webkit-scrollbar-track": { borderRadius: "16px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
      >
        <Table
          sx={{ minWidth: 250, position: "relative" }}
          aria-label="Product Table"
        >
          <TableHead>
            <TableRow>
              <TableCell>product</TableCell>
              <TableCell>quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>clear</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsCart.map((product) => {
              if (isLoading) {
                return <Loading width='1400px' height={'200px'}/>;
              } else {
                const allPrice = product.price * product.quantity;
                return (
                  <TableRow key={product.id}>
                    <TableCell
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        overflow: "hidden",
                        gap: "8px",
                      }}
                    >
                      <Box sx={{ width: "50px", height: "50px" }}>
                        <img src={product.images?.[0]} alt={product.title} />
                      </Box>
                      <Box>
                        <Typography>{product.title}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <QTY
                        id={product.id}
                        increaseQty={increaseQty}
                        decreaseQty={decreaseQty}
                        productsCart={productsCart}
                      />
                    </TableCell>
                    <TableCell>{allPrice.toFixed(2)}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => removeFromCart(product.id)}>
                        <DeleteIcon
                          sx={{
                            color: "primary.main",
                            transition: "all 0.5s ease",
                            "&:hover": {
                              color: "error.main",
                            },
                          }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

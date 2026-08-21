import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { CompareObjectsSelectorType } from "../types/typesCompareObjects";
import { product } from "../../cart/types/typesCart";

export const CompareObjectsSelector = ({
  product1,
  handleChange1,
  products,
  product2,
  handleChange2,
}: CompareObjectsSelectorType) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      sx={{ width: "80%" }}
    >
      <FormControl sx={{ width: { xs: "100%", md: "50%" } }}>
        <InputLabel id="product1">product1</InputLabel>
        <Select
          labelId="product1"
          id="product1"
          value={product1}
          label="product1"
          onChange={handleChange1}
        >
          {products?.map((product: product) => (
            <MenuItem value={product.id}>{product.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: { xs: "100%", md: "50%" } }}>
        <InputLabel id="product2">product2</InputLabel>
        <Select
          labelId="product2"
          id="product2"
          value={product2}
          label="product2"
          onChange={handleChange2}
        >
          {products?.map((product: product) => (
            <MenuItem value={product.id}>{product.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

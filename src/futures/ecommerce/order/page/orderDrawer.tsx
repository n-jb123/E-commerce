import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import Rating from "@/component/rating/rating";
import { orderDrawerType } from "../types/typesOrder";

export const OrderDrawer = ({
  openOrder,
  closeOrderDrawer,
  selectOrder,
}: orderDrawerType) => (
  <Drawer
    open={openOrder}
    onClose={() => closeOrderDrawer()}
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      ".mui-fejuix-MuiPaper-root-MuiDrawer-paper": {
        width: "25%",
        minWidth: "400px",
        height: "100vh",
        overflow: "auto",
      },
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        p: "16px",
      }}
    >
      <Typography sx={{ fontFamily: "Tangerine", fontSize: "64px" }}>
        product section
      </Typography>
      {selectOrder?.products.map((product) => (
        <Stack
        key={product.id}
          direction={"row"}
          spacing={2}
          sx={{
            border: "1px solid",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100px", height: "150px" }}>
            <img src={product.images[0]} />
          </Box>
          <Stack direction={"column"} sx={{ width: "50%" }}>
            <Typography>{product.title}</Typography>
            <Typography className="webkitText">
              {product.description}
            </Typography>
            <Rating value={product.rating} />
          </Stack>
          <Typography sx={{ width: "25%" }}>
            {product.price.toFixed(2)}
          </Typography>
        </Stack>
      ))}
    </Box>
    <Divider />
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          p: "16px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Tangerine",
            fontSize: "64px",
          }}
        >
          payment section
        </Typography>
        <Stack sx={{ border: "1px solid", p: "8px" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography>cardNumber</Typography>
            <Typography>{selectOrder?.cardNumber}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography>expiryDate</Typography>
            <Typography>{selectOrder?.expiryDate}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography>cvc</Typography>
            <Typography>{selectOrder?.cvc}</Typography>
          </Box>
        </Stack>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          p: "16px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Tangerine",
            fontSize: "64px",
          }}
        >
          person section
        </Typography>
        <Stack sx={{ border: "1px solid", p: "8px" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography>firstName</Typography>
            <Typography>{selectOrder?.firstName}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography>lastName</Typography>
            <Typography>{selectOrder?.lastName}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography>phoneNumber</Typography>
            <Typography>{selectOrder?.phoneNumber}</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  </Drawer>
);

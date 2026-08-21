import { Stack, Box, Typography, IconButton, Badge } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { EcommerceMenu } from "./ecommerceMenu";
import { useRouter } from "next/navigation";
import { ecommerceFooterType } from "../types/typesEcommerceLayout";
import { useCart } from "@/futures/ecommerce/cart/hooks/useCart";
import { Logo } from "@/component/Logo/Logo";
import { FavoriteDrawer } from "@/futures/ecommerce/favorite/page/favoriteDrawer";
import { SwitchMode } from "@/component/switchMode/SwitchMode";

export const EcommerceFooter = ({
  handleToggleTheme,
  Mode,
  openCollapse,
  openDrawer,
  handleClickM,
  toggleDrawer,
  productsFavorite,
  isFavoriteDrawerOpen,
  closeFavoriteDrawer,
  openFavoriteDrawer,
  toggleFavorite,
  clearFavorite,
  isFavorite,
  user,
  OpenSnackBar
}: ecommerceFooterType) => {
  const router = useRouter();
  const productsCart = useCart((State:any) => State.productsCart);
  return (
    <Box>
      <Stack
        direction="column"
        sx={{
          width: "100%",
          height: "10vh",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 2,
          backgroundColor: "background.inversePaper",
          color: "text.inverseOnSurface",
          boxShadow: "0 0 40px",
          shadowColor: "primary.activeNavigation",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            p: "0 24px",
          }}
        >
          <Box>
            <Logo width="200px" height="50px" />
          </Box>
          <Stack direction={"row"} sx={{ gap: "16px" }}>
            <Typography>privacy</Typography>
            <Typography>terms</Typography>
            <Typography>Atelier</Typography>
          </Stack>
        </Stack>

        <Box>
          <Typography>© 2024 Dynacode. All rights reserved.</Typography>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
          height: "5vh",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 2,
          backgroundColor: "background.paper",
          color: "inverseOnSurface",
          boxShadow: "0 0 40px",
          shadowColor: "primary.activeNavigation",
          display: { xs: "flex", md: "none" },
        }}
      >
        <Box sx={{ display: "flex", gap: "16px" }}>
          <EcommerceMenu
            openCollapse={openCollapse}
            openDrawer={openDrawer}
            handleClick={handleClickM}
            toggleDrawer={toggleDrawer}
          />
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => router.push("/ecommerce/profile")}
          >
            {user?.img ? (
              <Avatar src={user?.img} />
            ) : (
              <Avatar>
                {`${user?.first_name?.[0]} ${user?.last_name?.[0]}`.trim()}
              </Avatar>
            )}
            <Typography>
              {`${user?.first_name} ${user?.last_name}`.trim()}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <IconButton onClick={() => router.push("/ecommerce/cart")}>
            <Badge color="primary" badgeContent={productsCart.length} max={99}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <FavoriteDrawer
            productsFavorite={productsFavorite}
            isFavoriteDrawerOpen={isFavoriteDrawerOpen}
            closeFavoriteDrawer={closeFavoriteDrawer}
            toggleFavorite={toggleFavorite}
            openFavoriteDrawer={openFavoriteDrawer}
            clearFavorite={clearFavorite}
            isFavorite={isFavorite}
            OpenSnackBar={OpenSnackBar}
          />
          <SwitchMode handleToggleTheme={handleToggleTheme} Mode={Mode} />
        </Box>
      </Stack>
    </Box>
  );
};

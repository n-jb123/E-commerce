import { Stack, Box, IconButton, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ecommerceHeaderType } from "../types/typesEcommerceLayout";
import { useCart } from "@/futures/ecommerce/cart/hooks/useCart";
import { Logo } from "@/component/Logo/Logo";
import { SearchBar } from "@/component/searchBar/searchBar";
import { FavoriteDrawer } from "@/futures/ecommerce/favorite/page/favoriteDrawer";
import { SwitchMode } from "@/component/switchMode/SwitchMode";


export const EcommerceHeader = ({
  handleToggleTheme,
  Mode,
  productsFavorite,
  isFavoriteDrawerOpen,
  closeFavoriteDrawer,
  toggleFavorite,
  openFavoriteDrawer,
  clearFavorite,
  isFavorite,
  OpenSnackBar
}: ecommerceHeaderType) => {
  const router = useRouter();
  const productsCart = useCart((state:any) => state.productsCart);
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        p: "24px",
        height: "10vh",
        zIndex: 2,
        backgroundColor: "background.paper",
        boxShadow: "0 0 40px",
        shadowColor: "primary.activeNavigation",
      }}
    >
      <Link href={"/ecommerce/home"}>
        <Box>
          <Logo/>
        </Box>
      </Link>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <SearchBar/>
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
  );
};

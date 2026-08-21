"use client";
import { Box, Stack } from "@mui/material";
import { EcommerceHeader } from "./ecommerceHeader";
import { EcommerceFooter } from "./ecommerceFooter";
import { EcommerceSidebar } from "./ecommerceSidebar";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { useFavorite } from "@/futures/ecommerce/favorite/hooks/useFavorite";
import { product } from "@/futures/ecommerce/cart/types/typesCart";
import { useSnackBar } from "@/component/state/snackBar/hooks/useSnackBar";
import { useTheme } from "@/theme/provider/themeProvider";
import { useProfileClient } from "@/service/profile/useProfile";
import { categories } from "@/futures/ecommerce/home/types/typesHome";
import { useCategories } from "@/service/categories/useCategories";

export const EcommerceLayout = ({ children }: { children: ReactNode }) => {
  const  {user}=useProfileClient()
  const {data:categories}=useCategories()
  const { handleToggleTheme, Mode } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [openCollapse, setOpenCollapse] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleClickM = () => {
    setOpenCollapse(!openCollapse);
  };
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const toggleFavorite = useFavorite((state:any) => state.toggleFavorite);
  const isFavoriteDrawerOpen = useFavorite(
    (state:any) => state.isFavoriteDrawerOpen,
  );
  const openFavoriteDrawer = useFavorite((state:any) => state.openFavoriteDrawer);
  const closeFavoriteDrawer = useFavorite((state:any) => state.closeFavoriteDrawer);
  const productsFavorite = useFavorite((state:any) => state.productsFavorite);
  const clearFavorite = useFavorite((state:any) => state.clearFavorite);
  const isFavorite = (id: number) => productsFavorite.some((p:product) => p.id === id);
  const router = useRouter();
  const OpenSnackBar=useSnackBar((state:any)=>state.OpenSnackBar)
  return (
    <Stack direction={"column"}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <EcommerceHeader
          handleToggleTheme={handleToggleTheme}
          Mode={Mode}
          productsFavorite={productsFavorite}
          isFavoriteDrawerOpen={isFavoriteDrawerOpen}
          closeFavoriteDrawer={closeFavoriteDrawer}
          toggleFavorite={toggleFavorite}
          openFavoriteDrawer={openFavoriteDrawer}
          clearFavorite={clearFavorite}
          isFavorite={isFavorite}
          OpenSnackBar={OpenSnackBar}
        />
      </Box>

      <Box sx={{ display: "flex", height: { xs: "95vh", md: "80vh" } }}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: "30%",
            maxWidth: "300px",
          }}
        >
          <EcommerceSidebar
            router={router}
            open={open}
            handleClick={handleClick}
            user={user}
            categories={categories}
          />
        </Box>

        <Box
          sx={{
            height: { xs: "95vh", md: "80vh" },
            overflowY: "auto",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
      <EcommerceFooter
        handleToggleTheme={handleToggleTheme}
        Mode={Mode}
        openCollapse={openCollapse}
        openDrawer={openDrawer}
        handleClickM={handleClickM}
        toggleDrawer={toggleDrawer}
        productsFavorite={productsFavorite}
        isFavoriteDrawerOpen={isFavoriteDrawerOpen}
        closeFavoriteDrawer={closeFavoriteDrawer}
        toggleFavorite={toggleFavorite}
        openFavoriteDrawer={openFavoriteDrawer}
        clearFavorite={clearFavorite}
        isFavorite={isFavorite}
        user={user}
        OpenSnackBar={OpenSnackBar}
      />
    </Stack>
  );
};

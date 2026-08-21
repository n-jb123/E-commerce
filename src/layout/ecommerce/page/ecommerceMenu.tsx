import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ecommerceMenuType } from "../types/typesEcommerceLayout";
import { SearchBar } from "@/component/searchBar/searchBar";
import {ListData} from '@/data/List'


export const EcommerceMenu = ({
  openCollapse,
  openDrawer,
  handleClick,
  toggleDrawer,
}: ecommerceMenuType) => {
  const router = useRouter();
  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <Box>
            <SearchBar/>
          </Box>
          <List>
            {ListData.map((i) => {
              return i.collapse ? (
                <Box
                  key={i.id}
                  sx={(theme) => ({
                    background: theme.palette.background.default,
                    borderRadius: "8px",
                    boxShadow: theme.palette.shadow.primary,
                    color: theme.palette.text.primary,
                  })}
                >
                  <ListItemButton onClick={handleClick}>
                    <ListItemText primary={i.title} />
                    {openCollapse ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {i.collapse
                        .filter((p) => p.type === "collapseItem")
                        .map((p) => {
                          {
                            return (
                              <ListItemButton
                                sx={(theme) => ({
                                  pl: 4,
                                  borderBottom:
                                    "1px solid rgba(255,255,255,0.15)",
                                  transition: "all 0.5s",
                                  color: theme.palette.text.inverseOnSurface,
                                  background:
                                    theme.palette.background.inversePaper,
                                  "&:hover": {
                                    background:
                                      theme.palette.background.darkPaper,
                                    color: theme.palette.text.secondary,
                                  },
                                })}
                                key={p.id}
                                onClick={() => router.push(p.link)}
                              >
                                <ListItemText primary={p.title} />
                              </ListItemButton>
                            );
                          }
                        })}
                    </List>
                  </Collapse>
                </Box>
              ) : (
                <ListItemButton
                  key={i.id}
                  onClick={() => router.push(i.link)}
                  sx={(theme) => ({
                    background: theme.palette.background.default,
                    borderRadius: "8px",
                    boxShadow: theme.palette.shadow.primary,
                    transition: "all 0.5s",
                    color: theme.palette.text.primary,
                    "&:hover": {
                      background: theme.palette.background.inversePaper,
                      color: theme.palette.text.inverseOnSurface,
                    },
                  })}
                >
                  <ListItemText primary={i.title} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Stack,
  Avatar,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ecommerceSidebarType } from "../types/typesEcommerceLayout";
import { Divider } from "@/component/divider/divider";
import { ListData } from "@/data/List";
export const EcommerceSidebar = ({
  router,
  open,
  handleClick,
  user,
  categories
}: ecommerceSidebarType) => {
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "background.paper",
        boxShadow: "0 0 10px",
        boxShadowColor: "primary.activeNavigation",
        justifyContent:'space-between',
        pb:'16px'
      }}
    >
      <List>
        {ListData.map((i) => {
          return i.collapse ? (
            <Box
              key={i.id}
              sx={{
                backgroundColor: "background.default",
                borderRadius: "8px",
                boxShadow: "0 0 10px",
                boxShadowColor: "primary.activeNavigation",
                color: "text.primary",
              }}
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText primary={i.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {categories?.map((p) => {
                      {
                        return (
                          <Box key={p?.id}>
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
                              onClick={() => router.push(p.link)}
                            >
                              <ListItemText primary={p.title} />
                            </ListItemButton>
                          </Box>
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
      <Stack spacing={2}>
        <Divider width={'100%'} height={'2px'}/>
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
                {`${user?.user_metadata?.firstName?.[0]} ${user?.user_metadata?.lastName?.[0]}`.trim()}
              </Avatar>
            )}
            <Typography>
              {user?.user_metadata?.firstName} {user?.user_metadata?.lastName}
            </Typography>
          </Box>
      </Stack>
    </Box>
  );
};

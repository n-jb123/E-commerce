import { Box, Stack, Typography } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export const HeaderCart = ({router}:{router:AppRouterInstance}) => (
  <Stack direction={'row'} sx={{justifyContent:'space-between' , alignItems:'center'}}>
    <Box>
    <Typography sx={{ fontSize: "64px", fontFamily: "Tangerine" }}>
      Shopping Bag
    </Typography>
    <Typography sx={{ fontSize: "24px" }}>Refining your selection</Typography>
  </Box>
  
  <Typography onClick={()=>router.back()} sx={{cursor:'pointer',transition:'all 0.3s ease','&:hover':{color:'warning.main'}}}>Close</Typography>
  </Stack>
  
);

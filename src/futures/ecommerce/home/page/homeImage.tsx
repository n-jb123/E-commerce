

import Loading from "@/component/state/loading/loading";
import { Box, Card, PaletteMode, Typography } from "@mui/material";

export const HomeImage = ({
  Mode,
  isLoading,
}: {
  Mode: PaletteMode;
  isLoading: boolean;
}) => {
  return (
    <>
      {isLoading ? (
        <Loading width="100%" height="100vh" />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: { xs: "95vh", md: "80vh" },
            position: "relative",
          }}
        >
          {Mode === "dark" && (
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfowXbaVV78EpDlDo-KX6ZLNWCAXlT9g9uyAXm6cX5iOLCP8vGhMxzYSduqNxOAzbFFjyVv2dho4mp3zFrbHhfr6CAYw_VCFC8JhVYvzffBBhrJ3t2vG8oaLZk9aPANDVdzRXrsBrqOjVN56-2VSIwp6JK1V5fJiIG2wEYkjZch3XLq1qsJa0T1rYo4t8PiXkvSI4r8v3ITeZKwiPIRNdDJu1sT4HMx9Ndfm5CjF13YVEcsEuKRsiSE_jaOnV89iSQXb78fjA3JYE"
              style={{ opacity: "0.5", objectFit:'cover' }}
            />
          )}
          {Mode === "light" && (
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6vGzdYwjBl9AyvC2MxeH06QlkPRyX8DPHS6DJmby_NS9ob2FBoyQQkfhbHIgqdEwTOdLIPSAUGQZgC5nc1YzisISSYtaF7AJrISeQCbVI5OuGYuUPhPFZ0hhSLtsX363A3Ivy84mbqXb-kxpjpiHeFXV4cJyccg6_zbJRNfywRfwyiKTRaaJLL1GtZO4B_ZZDpWRGn-N2WNFxxVtsvG1CA04RcYecUYie9nRIFs0tst6vybrt5iDYRQwfUNwO3NquwUbhpTS526M"
              style={{ opacity: "0.5", objectFit:'cover' }}
            />
          )}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Card>
              <Box
                sx={{
                  width: "100%",
                  height: "max-content",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>
                  New Collection
                </Typography>
                <Typography sx={{ fontFamily: "Tangerine", fontSize: "64px" }}>
                  The Earthly Essences
                </Typography>
                <Typography sx={{ fontSize: "24px" }}>
                  Discover a curated selection of fragrances and home objects
                  inspired by the raw beauty of natural elements.
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      )}
    </>
  );
};

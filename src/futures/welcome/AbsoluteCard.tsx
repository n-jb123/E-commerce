import PrimaryButton from "@/component/buttons/PrimaryButtons";
import { Card } from "@/component/card/card";
import { Box, Typography } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const AbsoluteCard = ({ router }: { router: AppRouterInstance }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 3,
        height: "max-content",
        width: "90%",
      }}
    >
      <Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "64px",
              fontStyle: "italic",
              fontFamily: "Tangerine",
              color: theme.palette.primary.dark,
              textShadow: theme.palette.shadow.text,
            })}
          >
            The Art of Living
          </Typography>
          <Typography
            sx={(theme) => ({
              fontSize: "32px",
              color: theme.palette.text.primary,
            })}
          >
            Quiet luxury for the modern sanctuary. Curated essentials designed
            to elevate your everyday rituals.
          </Typography>
          <Box sx={{ width: "max-content" }}>
            <PrimaryButton onClick={() => router.push("/auth/signin")}>
              Discover the Collection
            </PrimaryButton>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

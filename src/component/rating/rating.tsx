import { Rating } from "@mui/material";
import { ratingType } from "../types/typesComponent";

export default function RatingUi({ value = 0, onChange }: ratingType) {
  return (
    <Rating
      defaultValue={value}
      precision={0.1}
      onChange={() => onChange}
      sx={{
        "& .MuiRating-icon": {
          background: "linear-gradient(135deg, #d0ff00ff, #fae68bff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "all 0.5s ease",
          filter: "drop-shadow(0 0 6px rgba(229, 255, 0, 0.6))",
        },
        "& .MuiRating-iconHover": {
          transform: "rotate(10deg)",
          scale: 1.35,
        },
      }}
    />
  );
}

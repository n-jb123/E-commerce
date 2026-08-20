"use client";

import { Box } from "@mui/material";
import { logoType } from "../types/typesComponent";
import { useId } from "react";
export const Logo = ({ width = "200px", height = "60px" }: logoType) => {
  const logoDynagrad=useId()
  return (
    <Box>
      <svg
        width={width}
        height={height}
        viewBox="0 0 520 140"
        xmlns="http://www.w3.org/2000/svg"
        // style={{background:'red'}}
      >
        <defs>
          <linearGradient id={logoDynagrad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6A3B1F" />
            <stop offset="50%" stopColor="#C68642" />
            <stop offset="100%" stopColor="#FFD9B8" />
          </linearGradient>
        </defs>

        <g transform="translate(20,20)">
          <path
            d="M50 0 L92 25 L92 75 L50 100 L8 75 L8 25 Z"
            fill="none"
            stroke={`url(#${logoDynagrad})`}
            strokeWidth="4"
          />

          <path
            d="M38 25 L38 75 Q38 82 45 82 L55 82 Q75 82 75 50 Q75 18 55 18 L45 18 Q38 18 38 25 Z"
            fill="none"
            stroke={`url(#${logoDynagrad})`}
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M25 40 L15 50 L25 60"
            fill="none"
            stroke={`url(#${logoDynagrad})`}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M83 40 L93 50 L83 60"
            fill="none"
            stroke={`url(#${logoDynagrad})`}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        <text
          x="140"
          y="78"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="40"
          fontWeight="700"
          fill={`url(#${logoDynagrad})`}
          letterSpacing="1"
        >
          {"Dynacode"}
        </text>

        <line
          x1="140"
          y1="92"
          x2="360"
          y2="92"
          stroke={`url(#${logoDynagrad})`}
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    </Box>
  );
};

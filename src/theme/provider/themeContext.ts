"use client";
import { createContext } from "react";
import { ThemeContextType } from "../types/typesTheme";
export const ThemeModContext = createContext<ThemeContextType | null>(null);

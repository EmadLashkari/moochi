"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const yekan = localFont({
  src: "./../app/fonts/Far_Yekan.ttf",
  variable: "--font-yekan",
  weight: "100 200 300 400 500 600 700 800 900",
});

const commonColors = {
  charcoalGray: "#333333",
  warmWhite: "#F5F5F5",
  gold: "#C89B3C",
  darkOlive: "#4A4A2A",
  richGreen: "#2A9D8F",
};

const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: { main: commonColors.gold },
    secondary: { main: commonColors.darkOlive },
    background: { default: commonColors.warmWhite, paper: "#FFFFFF" },
    text: {
      primary: commonColors.charcoalGray,
      secondary: commonColors.darkOlive,
    },
    action: { active: commonColors.gold },
    success: { main: commonColors.richGreen },
    error: { main: "#E63946" },
  },
  typography: {
    fontFamily: yekan.style.fontFamily,
    h1: { color: commonColors.charcoalGray },
    body1: { color: commonColors.charcoalGray },
    button: { color: "#FFFFFF" },
  },
});

const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: { main: commonColors.gold },
    secondary: { main: commonColors.darkOlive },
    background: { default: commonColors.charcoalGray, paper: "#333333" },
    text: { primary: commonColors.warmWhite, secondary: commonColors.gold },
    action: { active: commonColors.gold },
    success: { main: commonColors.richGreen },
    error: { main: "#E63946" },
  },
  typography: {
    fontFamily: yekan.style.fontFamily,
    h1: { color: commonColors.warmWhite },
    body1: { color: commonColors.warmWhite },
    button: { color: "#FFFFFF" },
  },
});

export { lightTheme, darkTheme };

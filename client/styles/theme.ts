"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const commonColors = {
  charcoalGray: "#333333",
  warmWhite: "#F5F5F5",
  gold: "#C89B3C",
  darkOlive: "#4A4A2A",
  richGreen: "#2A9D8F",
};

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: commonColors.gold,
    },
    secondary: {
      main: commonColors.darkOlive,
    },
    background: {
      default: commonColors.warmWhite,
      paper: "#FFFFFF",
    },
    text: {
      primary: commonColors.charcoalGray,
      secondary: commonColors.darkOlive,
    },
    action: {
      active: commonColors.gold,
    },
    success: {
      main: commonColors.richGreen,
    },
    error: {
      main: "#E63946",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      color: commonColors.charcoalGray,
    },
    h2: {
      color: commonColors.charcoalGray,
    },
    h3: {
      color: commonColors.charcoalGray,
    },
    h4: {
      color: commonColors.charcoalGray,
    },
    h5: {
      color: commonColors.charcoalGray,
    },
    h6: {
      color: commonColors.charcoalGray,
    },
    body1: {
      color: commonColors.charcoalGray,
    },
    body2: {
      color: commonColors.charcoalGray,
    },
    button: {
      color: "#FFFFFF", // Button text color
    },
  },
});

export default theme;

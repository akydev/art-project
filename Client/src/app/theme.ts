"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#111827", //Black
    },
    secondary: {
      main: "#F2F2F2", //white
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;

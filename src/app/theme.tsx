"use client";
import { Roboto } from "next/font/google";

import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    common: {
      white: "#6A6970",
      black: "#6A6970",
    },
    text: {
      primary: grey[400],
      secondary: grey[500],
    },
    primary: {
      main: grey[700],
      contrastText: "#D0D0D1",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default darkTheme;

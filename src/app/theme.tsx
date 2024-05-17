"use client";
import { Roboto } from "next/font/google";

import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6A6970",
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

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import createTheme from "@mui/material/styles/createTheme";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": {
            padding: "16px",
            overflow: "hidden",
            width: "100%",
            maxWidth: "100%",
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": {
            width: "100%",
            // maxWidth: "100vw",
            overflow: "hidden",
          },
        },
      },
    },
  },
});

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

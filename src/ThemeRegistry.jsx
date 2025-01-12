import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import createTheme from "@mui/material/styles/createTheme";
import {orange} from "@mui/material/colors";

const theme = createTheme({
    status: {
        danger: orange[500],
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

// components/Home.jsx
import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Topbar from "../../Components/Topbar";
import Sidebar from "../../Components/Sidebar";
import Dashboard from "./Dashboard";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Topbar />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            ml: 0,
            mt: "64px",
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Dashboard />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

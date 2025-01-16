// components/Layout.jsx
import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

const Layout = () => {
  return (
    <Box
      sx={{
        // width: "100%",
        // maxWidth: "100vw",
        // overflow: "hidden",
        "@media (max-width:600px)": {
          "& .MuiContainer-root": {
            px: 2,
          },
          "& .MuiBox-root": {
            // width: "100%",
            // maxWidth: "100vw",
            // overflow: "hidden",
          },
        },
      }}
    >
      <Topbar />
      <Box
        sx={{
          display: "flex",
          // width: "100%",
          // maxWidth: "100vw",
          // overflow: "hidden",
        }}
      >
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // width: "100%",
            // maxWidth: "100vw",
            // overflow: "hidden",
            // px: { xs: 2, md: 3 },
            // py: 3,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
export default Layout;

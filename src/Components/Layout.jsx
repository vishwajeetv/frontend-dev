// components/Layout.jsx
import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

const Layout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Topbar />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            ml: { xs: 0 },
            // mt: "64px",
            bgcolor: "#f5f6fa",
            transition: `margin-left ${theme.transitions.duration.standard}ms ${theme.transitions.easing.sharp}`,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
export default Layout;

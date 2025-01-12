import AppBar from "@mui/material/AppBar";
import Topbar from "../../Components/TopBar.jsx";
import { Box } from "@mui/material";
import Sidebar from "../../Components/Sidebar.jsx";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Topbar />
        <Box sx={{ display: "flex", flex: 1 }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
        </Box>
      </Box>
    </>
  );
}

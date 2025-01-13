import React from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import EditProfile from "./EditProfile";
import { useTheme, useMediaQuery } from "@mui/material";

const Settings = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ p: 3, bgcolor: "#f5f6fa", ml: "160px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <Typography variant="h6" sx={{ color: "#2F3349" }}>
          Setting
        </Typography>
      </Box>

      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: "0.95rem",
            minWidth: "auto",
            px: { xs: 2, md: 3 },
            color: "#9e9e9e",
          },
          "& .Mui-selected": {
            color: "#2F3349",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#2F3349",
          },
        }}
      >
        <Tab label="Edit Profile" />
        <Tab label="Preferences" />
        <Tab label="Security" />
      </Tabs>

      {activeTab === 0 && <EditProfile />}
    </Box>
  );
};

export default Settings;

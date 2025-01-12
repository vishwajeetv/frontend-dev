// components/Topbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import {
  Search as SearchIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #eee",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box component="img" src="/logo.svg" sx={{ height: 24 }} />
        </Box>

        <Typography sx={{ color: "#1a237e", ml: 4 }}>Overview</Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgColor: "#f5f6fa",
            borderRadius: 1,
            px: 2,
            py: 0.5,
            width: "400px",
            mr: 2,
          }}
        >
          <SearchIcon sx={{ color: "#9e9e9e", mr: 1 }} />
          <InputBase
            placeholder="Search for something"
            sx={{ color: "#9e9e9e", width: "100%" }}
          />
        </Box>

        <IconButton sx={{ color: "#9e9e9e" }}>
          <SettingsIcon />
        </IconButton>

        <IconButton sx={{ color: "#9e9e9e" }}>
          <NotificationsIcon />
        </IconButton>

        <Avatar
          sx={{
            width: 35,
            height: 35,
            ml: 1,
          }}
          alt="Profile"
          src="/avatar.jpg"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

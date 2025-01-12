import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Avatar,
} from "@mui/material";
import {
  Search as SearchIcon,
  Settings,
  Notifications,
} from "@mui/icons-material";

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box component="img" src="/logo.svg" sx={{ height: 24 }} />
          </Box>

          <Typography sx={{ color: "#1a237e", fontWeight: 500 }}>
            Overview
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#f5f6fa",
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
            sx={{
              color: "#9e9e9e",
              width: "100%",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton sx={{ color: "#9e9e9e" }}>
            <Settings />
          </IconButton>

          <IconButton sx={{ color: "#9e9e9e" }}>
            <Notifications />
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

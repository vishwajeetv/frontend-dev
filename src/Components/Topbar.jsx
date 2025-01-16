import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Search as SearchIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

const Topbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
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
          <Box
            component="img"
            src="/Logo.svg"
            sx={{ height: 24, ml: { xs: 2, md: 0 } }}
          />
        </Box>

        <Typography sx={{ color: "#1a237e", ml: 4 }}>Overview</Typography>

        <Box sx={{ flexGrow: 1 }} />

        {!isMobile && (
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
              sx={{ color: "#9e9e9e", width: "100%" }}
            />
          </Box>
        )}

        {!isMobile && (
          <IconButton sx={{ color: "#9e9e9e" }}>
            <SettingsIcon />
          </IconButton>
        )}

        {!isMobile && (
          <IconButton sx={{ color: "#9e9e9e" }}>
            <NotificationsIcon />
          </IconButton>
        )}

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
      {isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
            borderRadius: 1,
            px: 2,
            py: 2,
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
      )}
    </AppBar>
  );
};

export default Topbar;

// Sidebar.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  IconButton,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home,
  AccountBalance,
  Person,
  ShowChart,
  CreditCard,
  AccountBalanceWallet,
  Build,
  Stars,
  Settings,
} from "@mui/icons-material";

const menuItems = [
  { text: "Dashboard", icon: <Home />, path: "/" },
  { text: "Transactions", icon: <AccountBalance />, path: "/transactions" },
  { text: "Accounts", icon: <Person />, path: "/accounts" },
  { text: "Investments", icon: <ShowChart />, path: "/investments" },
  { text: "Credit Cards", icon: <CreditCard />, path: "/credit-cards" },
  { text: "Loans", icon: <AccountBalanceWallet />, path: "/loans" },
  { text: "Services", icon: <Build />, path: "/services" },
  { text: "My Privileges", icon: <Stars />, path: "/privileges" },
  { text: "Setting", icon: <Settings />, path: "/settings" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ px: 2, py: 1 }}>
      {menuItems.map((item) => (
        <ListItem
          button
          key={item.text}
          onClick={() => {
            navigate(item.path);
            if (isMobile) handleDrawerToggle();
          }}
          sx={{
            py: 1.5,
            px: 2,
            borderRadius: "8px",
            mb: 0.5,
            color: location.pathname === item.path ? "#2F3349" : "#94A3B8",
            bgcolor:
              location.pathname === item.path ? "#F1F5F9" : "transparent",
            "&:hover": {
              bgcolor: "#F8FAFC",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: location.pathname === item.path ? "#2F3349" : "#94A3B8",
              minWidth: "32px",
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            sx={{
              "& .MuiTypography-root": {
                fontWeight: location.pathname === item.path ? 600 : 400,
                fontSize: "0.95rem",
              },
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  if (isMobile) {
    return (
      <>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            left: 16,
            top: 16,
            zIndex: 2000,
            bgcolor: "white",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
            "&:hover": {
              bgcolor: "white",
            },
          }}
        >
          <MenuIcon sx={{ color: "#2F3349" }} />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: "100%",
              mt: "0px",
              bgcolor: "white",
              borderRight: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
      </>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "120px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "260px",
          boxSizing: "border-box",
          bgcolor: "white",
          borderRight: "1px solid #f0f0f0",
          mt: "64px",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default Sidebar;

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
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
  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      sx={{
        width: "120px",
        "& .MuiDrawer-paper": {
          width: "260px",
          boxSizing: "border-box",
          bgcolor: "white",
          borderRight: "none",
          mt: "64px",
        },
      }}
    >
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              py: 1.5,
              px: 2,
              borderRadius: "8px",
              mb: 0.5,
              color: location.pathname === item.path ? "#2F3349" : "#9e9e9e",
              bgcolor:
                location.pathname === item.path ? "#f5f6fa" : "transparent",
              "&:hover": {
                bgcolor: "#f5f6fa",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: location.pathname === item.path ? "#2F3349" : "#9e9e9e",
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
    </Drawer>
  );
};
export default Sidebar;

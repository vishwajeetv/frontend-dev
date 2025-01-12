import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Home as HomeIcon,
  AccountBalance as TransactionsIcon,
  Person as AccountsIcon,
  ShowChart as InvestmentsIcon,
  CreditCard as CreditCardsIcon,
  AccountBalanceWallet as LoansIcon,
  Build as ServicesIcon,
  Stars as PrivilegesIcon,
  Settings as SettingIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(!isMobile);

  const menuItems = [
    { text: "Dashboard", icon: <HomeIcon /> },
    { text: "Transactions", icon: <TransactionsIcon /> },
    { text: "Accounts", icon: <AccountsIcon /> },
    { text: "Investments", icon: <InvestmentsIcon /> },
    { text: "Credit Cards", icon: <CreditCardsIcon /> },
    { text: "Loans", icon: <LoansIcon /> },
    { text: "Services", icon: <ServicesIcon /> },
    { text: "My Privileges", icon: <PrivilegesIcon /> },
    { text: "Setting", icon: <SettingIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            position: "fixed",
            left: open ? 240 : 10,
            top: 12,
            zIndex: 1300,
            backgroundColor: "white",
            border: "1px solid #eee",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          width: 240,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#f5f6fa",
            borderRight: "none",
            marginTop: isMobile ? 0 : "64px",
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              sx={{
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#9e9e9e", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiTypography-root": {
                    color: "#666",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;

import React from "react";
import {
  Box,
  List,
  ListItem,
  Avatar,
  Typography,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

const Transactions = ({ transactions }) => {
  return (
    <Box
      sx={{
        bgColor: "white",
        borderRadius: 2,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <List>
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            sx={{
              py: 2,
              px: 3,
              "&:not(:last-child)": {
                borderBottom: "1px solid #f5f6fa",
              },
            }}
          >
            <Avatar
              src={transaction.avatar}
              sx={{
                mr: 2,
                width: 40,
                height: 40,
              }}
            />
            <ListItemText
              primary={transaction.name}
              secondary={transaction.date}
              sx={{
                "& .MuiTypography-root": {
                  color: "#1a237e",
                  fontWeight: 500,
                },
                "& .MuiTypography-body2": {
                  color: "#9e9e9e",
                  fontSize: "0.875rem",
                },
              }}
            />
            <ListItemSecondaryAction>
              <Typography
                sx={{
                  color: transaction.amount > 0 ? "#4caf50" : "#f44336",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                {transaction.amount > 0 ? "+" : "-"}$
                {Math.abs(transaction.amount)}
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Transactions;

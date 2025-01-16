import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const Transactions = ({ transactions }) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: 3,
        p: 3,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {transactions.map((transaction) => (
          <Box
            key={transaction.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: transaction.iconBg || "#f5f6fa",
                }}
                src={transaction.avatar}
              />
              <Box>
                <Typography
                  sx={{
                    color: "#2F3349",
                    fontWeight: 500,
                    mb: 0.5,
                  }}
                >
                  {transaction.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#9e9e9e",
                    fontSize: "0.875rem",
                  }}
                >
                  {transaction.date}
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                color: transaction.amount > 0 ? "#4caf50" : "#f44336",
                fontWeight: 600,
              }}
            >
              {transaction.amount > 0 ? "+" : "-"}$
              {Math.abs(transaction.amount).toLocaleString()}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Transactions;

import React from "react";
import { Box, Typography } from "@mui/material";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";

const BalanceHistory = ({ data }) => {
  return (
    <Box
      sx={{
        ml: 3,
      }}
    >
      <Typography variant="h6" mb={3}>
        Balance History
      </Typography>
      <Box
        sx={{
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2196f3"
              dot={{ r: 4 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default BalanceHistory;

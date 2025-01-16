import React from "react";
import { Box, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  YAxis,
  AreaChart,
  Area,
} from "recharts";

const BalanceHistory = ({ data }) => {
  return (
    <Box>
      <Typography variant="h6" mb={3}>
        Balance History
      </Typography>
      <Box
        sx={{
          bgcolor: "white",
          p: { md: 3, xs: 1 },
          borderRadius: 3,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <XAxis dataKey="month" />
            <YAxis dataKey="balance" />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D60FF40" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2D60FF00" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#1814F3"
              strokeWidth={3}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default BalanceHistory;

import React from "react";
import { Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Legend,
} from "recharts";

const WeeklyActivity = ({ data }) => {
  return (
    <Box>
      <Typography variant="h6" mb={3}>
        Weekly Activity
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
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis dataKey="deposit" />
            {/*<YAxis dataKey="withdraw" />*/}
            <Bar dataKey="deposit" fill="#2196f3" name="Deposit" />
            <Bar dataKey="withdraw" fill="#000000" name="Withdraw" />
            <Legend layout="horizontal" verticalAlign="top" align="right" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default WeeklyActivity;

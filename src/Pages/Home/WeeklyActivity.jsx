import React from "react";
import { Box, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const WeeklyActivity = ({ data }) => {
  return (
    <Box
      sx={{
        ml: 3,
      }}
    >
      <Typography variant="h6" mb={3}>
        Weekly Activity
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
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <Bar dataKey="deposit" fill="#2196f3" name="Deposit" />
            <Bar dataKey="withdraw" fill="#000000" name="Withdraw" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default WeeklyActivity;

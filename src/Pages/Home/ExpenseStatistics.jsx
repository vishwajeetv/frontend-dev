import React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#2196f3", "#4caf50", "#ff9800", "#9c27b0"];

const ExpenseStatistics = ({ data }) => {
  return (
    <Box sx={{ ml: 3 }}>
      <Typography variant="h6" mb={3}>
        Expense Statistics
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
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default ExpenseStatistics;

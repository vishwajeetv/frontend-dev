import React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#2196f3", "#4caf50", "#ff9800", "#e91e63"];

const ExpenseStatistics = ({ data }) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    name,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text
          x={x}
          y={y - 8}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
          }}
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
        <text
          x={x}
          y={y + 8}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fontSize: "12px",
            fontWeight: 500,
            filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2))",
          }}
        >
          {name}
        </text>
      </>
    );
  };

  return (
    <Box>
      <Typography variant="h6" mb={3}>
        Expense Statistics
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
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={120}
              paddingAngle={4}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="white"
                  strokeWidth={2}
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

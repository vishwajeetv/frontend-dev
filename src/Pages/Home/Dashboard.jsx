import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  TextField,
  Button,
} from "@mui/material";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import mockData from "../../mockdata.js";
import CreditCard from "./CreditCard.jsx";
import CardsWrapper from "./CardsWrapper.jsx";
import TransactionsWrapper from "./TransactionsWrapper.jsx";

import BalanceHistory from "./BalanceHistory.jsx";
import ExpenseStatistics from "./ExpenseStatistics.jsx";
import WeeklyActivity from "./WeeklyActivity.jsx";
import QuickTransfer from "./QuickTransfer.jsx";

const Dashboard = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "#f5f6fa" }}>
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <CardsWrapper cardsData={mockData.cards} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <TransactionsWrapper transactionsData={mockData.transactions} />
        </Grid>

        <Grid item xs={12} md={6}>
          <WeeklyActivity data={mockData.weeklyActivity} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ExpenseStatistics data={mockData.expenseStats} />
        </Grid>

        <Grid item xs={12} md={6}>
          <QuickTransfer contacts={mockData.quickTransfer} />
        </Grid>

        <Grid item xs={12} md={6}>
          <BalanceHistory data={mockData.balanceHistory} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

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
import mockData from "../../mockData";
import CreditCard from "../../Components/CreditCard.jsx";
import CardsWrapper from "../../Components/CardsWrapper.jsx";
import TransactionsWrapper from "../../Components/TransactionsWrapper.jsx";

import BalanceHistory from "../../Components/BalanceHistory.jsx";
import ExpenseStatistics from "../../Components/ExpenseStatistics.jsx";
import WeeklyActivity from "../../Components/WeeklyActivity.jsx";
import QuickTransfer from "../../Components/QuickTransfer.jsx";

const Dashboard = () => {
  return (
    <Box sx={{ p: 3, bgColor: "#f5f6fa" }}>
      <Grid container spacing={3}>
        <CardsWrapper cardsData={mockData.cards} />
        <TransactionsWrapper transactionsData={mockData.transactions} />

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

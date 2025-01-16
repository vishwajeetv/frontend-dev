import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  List,
  ListItem,
  TextField,
  Button,
  Skeleton,
  CircularProgress,
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
import CreditCard from "./CreditCard.jsx";
import CardsWrapper from "./CardsWrapper.jsx";
import TransactionsWrapper from "./TransactionsWrapper.jsx";

import BalanceHistory from "./BalanceHistory.jsx";
import ExpenseStatistics from "./ExpenseStatistics.jsx";
import WeeklyActivity from "./WeeklyActivity.jsx";
import QuickTransfer from "./QuickTransfer.jsx";
import SummaryService from "../../Services/SummaryService.js";

const Dashboard = () => {
  const [summaryData, setSummaryData] = React.useState(null);
  const [loading, setLoading] = React.useState("not-started");
  const [errorMessage, setErrorMessage] = React.useState(null);

  useEffect(() => {
    setLoading("started");
    SummaryService.getSummaryData()
      .then((responseData) => {
        if (responseData?.data) {
          setSummaryData(responseData.data);
        }
        setLoading("done");
      })
      .catch((error) => {
        setErrorMessage("Something went wrong. Please try again later.");
        setLoading("done");
      });
  }, []);

  return (
    <Box
      sx={{
        p: { md: 3, xs: 2 },
        bgcolor: { md: "#f5f6fa", xs: "white" },
        ml: { md: 2.5 },
      }}
    >
      {loading === "started" && (
        <Grid
          container
          sx={{ height: "600px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress sx={{ left: "50%", top: "50%" }} />
        </Grid>
      )}
      {loading === "done" && errorMessage && (
        <Typography>{errorMessage}</Typography>
      )}
      {loading === "done" && summaryData && (
        <Grid container spacing={{ md: 3, xs: 3 }}>
          <Grid item sm={8} xs={12}>
            <CardsWrapper cardsData={summaryData.cards} />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TransactionsWrapper transactionsData={summaryData.transactions} />
          </Grid>

          <Grid item xs={12} md={6}>
            <WeeklyActivity data={summaryData.weeklyActivity} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ExpenseStatistics data={summaryData.expenseStats} />
          </Grid>

          <Grid item xs={12} md={6}>
            <QuickTransfer contacts={summaryData.quickTransfer} />
          </Grid>

          <Grid item xs={12} md={6}>
            <BalanceHistory data={summaryData.balanceHistory} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Dashboard;

import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Transactions from "./Transactions";

export default function TransactionsWrapper({ transactionsData }) {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Recent Transaction</Typography>
        <Typography
          sx={{
            color: "primary.main",
            cursor: "pointer",
            fontSize: "0.875rem",
          }}
        >
          See All
        </Typography>
      </Box>
      <Transactions transactions={transactionsData} />
    </Grid>
  );
}

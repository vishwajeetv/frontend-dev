import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DateField } from "@mui/x-date-pickers";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const DatePickerInput = ({ label, ...props }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        sx={{
          mb: 1,
          color: "#2F3349",
          fontSize: "0.875rem",
        }}
      >
        {label}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateField
          variant={`outlined`}
          size={"small"}
          fullWidth={true}
          {...props}
        />
      </LocalizationProvider>
    </Box>
  );
};
export default DatePickerInput;

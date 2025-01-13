import React from "react";
import { TextField, Typography, Box } from "@mui/material";

const InputField = ({ label, ...props }) => {
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
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "#f5f6fa",
            "& fieldset": {
              border: "1px solid #e0e0e0",
            },
            "&:hover fieldset": {
              borderColor: "#2F3349",
            },
          },
        }}
        {...props}
      />
    </Box>
  );
};

export default InputField;

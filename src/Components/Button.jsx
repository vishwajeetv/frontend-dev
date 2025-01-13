import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, variant = "contained", ...props }) => {
  return (
    <MuiButton
      variant={variant}
      sx={{
        textTransform: "none",
        borderRadius: "8px",
        py: 1.5,
        px: 4,
        fontSize: "0.875rem",
        fontWeight: 500,
        boxShadow: "none",
        minWidth: "120px",
        ...(variant === "contained" && {
          bgcolor: "#2F3349",
          color: "white",
          "&:hover": {
            bgcolor: "#1E2231",
            boxShadow: "none",
          },
        }),
        ...(variant === "outlined" && {
          borderColor: "#2F3349",
          color: "#2F3349",
          "&:hover": {
            borderColor: "#1E2231",
            bgcolor: "rgba(47, 51, 73, 0.04)",
          },
        }),
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;

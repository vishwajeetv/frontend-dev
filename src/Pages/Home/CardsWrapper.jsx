import { Box, Typography } from "@mui/material";
import React from "react";
import CreditCard from "./CreditCard.jsx";

export default function CardsWrapper({ cardsData }) {
  return (
    <Box sx={{ overflowX: "auto", whiteSpace: "nowrap", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          px: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#1a237e",
            fontSize: { xs: "1.1rem", md: "1.25rem" },
          }}
        >
          My Cards
        </Typography>
        <Typography
          sx={{
            color: "primary.main",
            fontSize: "0.875rem",
            cursor: "pointer",
          }}
        >
          See All
        </Typography>
      </Box>

      <Box
        sx={{
          overflowX: "auto",
          width: "100%",
          "::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          px: { xs: 2, md: 3 },
          pb: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: "max-content",
          }}
        >
          {cardsData.map((card, index) => (
            <CreditCard key={index} cardData={card} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

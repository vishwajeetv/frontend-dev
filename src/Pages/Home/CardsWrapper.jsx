import { Box, Typography } from "@mui/material";
import CreditCard from "./CreditCard.jsx";

const CardsWrapper = ({ cardsData }) => {
  return (
    <Box sx={{ width: "100%", mt: { xs: 6, md: 0 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">My Cards</Typography>
        <Typography sx={{ color: "primary.main" }}>See All</Typography>
      </Box>

      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          flexWrap: { sm: "wrap" },
          gap: 2,
          width: { xs: "calc(100% + 32px)", sm: "100%" },
          margin: { xs: "0 -16px", sm: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: { xs: "auto", sm: "visible" },
            padding: { xs: "0 16px", sm: 0 },
            pb: 1,
            "::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cardsData.map((card, index) => (
            <Box
              key={index}
              sx={{
                flex: { xs: "0 0 280px", sm: "0 0 auto" },
                width: { xs: "100%", sm: "350px" },
              }}
            >
              <CreditCard cardData={card} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default CardsWrapper;

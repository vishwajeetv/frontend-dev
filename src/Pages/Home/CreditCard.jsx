import { Box, Typography } from "@mui/material";

const CreditCard = ({ cardData }) => {
  return (
    <Box
      sx={{
        width: { xs: "265px", md: "350px" },
        height: { xs: "170px", md: "235px" },
        bgcolor: cardData.isSecondary ? "#ffffff" : "#2F3349",
        borderRadius: "16px",
        p: 2.5,
        color: cardData.isSecondary ? "#2F3349" : "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: cardData.isSecondary
          ? "none"
          : "linear-gradient(to bottom right, #2F3349, #1E2231)",
        position: "relative",
        border: cardData.isSecondary ? "1px solid #eef0f7" : "none",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Box>
        <Typography
          variant="caption"
          sx={{
            color: cardData.isSecondary
              ? "rgba(47, 51, 73, 0.6)"
              : "rgba(255, 255, 255, 0.6)",
            display: "block",
            mb: 0.5,
          }}
        >
          Balance
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          ${cardData.balance}
        </Typography>
      </Box>

      <Box>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="caption"
            sx={{
              color: cardData.isSecondary
                ? "rgba(47, 51, 73, 0.6)"
                : "rgba(255, 255, 255, 0.6)",
              display: "block",
              mb: 0.5,
            }}
          >
            CARD HOLDER
          </Typography>
          <Typography>{cardData.cardHolder}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>{cardData.cardNumber}</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography>{cardData.validThru}</Typography>
            <Box
              component="img"
              src={
                cardData.isSecondary
                  ? "/CreditCardLogoDark.svg"
                  : "/CreditCardLogoLight.svg"
              }
              sx={{
                width: 32,
                height: "auto",
                opacity: 0.8,
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 20,
          top: 20,
          width: 35,
          height: 25,
          bgcolor: cardData.isSecondary
            ? "rgba(47, 51, 73, 0.1)"
            : "rgba(255, 255, 255, 0.1)",
          borderRadius: 1,
        }}
      />
    </Box>
  );
};
export default CreditCard;

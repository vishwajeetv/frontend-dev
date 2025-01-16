import { Box, Typography } from "@mui/material";

const CreditCard = ({ cardData }) => {
  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "1.586",
        bgcolor: cardData.isSecondary ? "#ffffff" : "#2F3349",
        borderRadius: "16px",
        p: { xs: 2.5, sm: 3 },
        color: cardData.isSecondary ? "#2F3349" : "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: cardData.isSecondary
          ? "none"
          : "linear-gradient(145deg, #2F3349 0%, #1E2231 100%)",
        position: "relative",
        border: cardData.isSecondary ? "1px solid #eef0f7" : "none",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: cardData.isSecondary
              ? "rgba(47, 51, 73, 0.6)"
              : "rgba(255, 255, 255, 0.6)",
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            mb: 0.5,
          }}
        >
          Balance
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.75rem", sm: "2rem" },
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          ${cardData.balance}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: cardData.isSecondary
                ? "rgba(47, 51, 73, 0.6)"
                : "rgba(255, 255, 255, 0.6)",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              mb: 0.5,
            }}
          >
            CARD HOLDER
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "1rem", sm: "1.125rem" }, mb: 0.5 }}
          >
            {cardData.cardHolder}
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" }, mt: 2 }}>
            {cardData.cardNumber}
          </Typography>
        </Box>

        <Box sx={{ textAlign: "right" }}>
          <Typography
            sx={{
              color: cardData.isSecondary
                ? "rgba(47, 51, 73, 0.6)"
                : "rgba(255, 255, 255, 0.6)",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              mb: 0.5,
            }}
          >
            VALID THRU
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" }, mb: 2 }}>
            {cardData.validThru}
          </Typography>
          <Box
            component="img"
            src={
              cardData.isSecondary
                ? "/CreditCardLogoDark.svg"
                : "/CreditCardLogoLight.svg"
            }
            sx={{
              width: { xs: 35, sm: 40 },
              height: "auto",
              opacity: 0.8,
            }}
          />
        </Box>
      </Box>

      <Box
        component="img"
        src={
          cardData?.isSecondary
            ? "/ChipCardLogoDark.svg"
            : "/ChipCardLogoLight.svg"
        }
        sx={{
          position: "absolute",
          right: { xs: 16, sm: 20 },
          top: { xs: 16, sm: 20 },
          width: { xs: 32, sm: 40 },
          height: "auto",
        }}
      />
    </Box>
  );
};
export default CreditCard;

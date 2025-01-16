import React from "react";
import { Box, Typography, Avatar, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const QuickTransfer = ({ contacts }) => {
  return (
    <Box
      sx={{
        ml: 3,
      }}
    >
      <Typography variant="h6" mb={3}>
        Quick Transfer
      </Typography>

      <Box
        sx={{
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, mb: 3, overflowX: "auto" }}>
          {contacts.map((contact) => (
            <Box
              key={contact.id}
              sx={{ textAlign: "center", minWidth: "fit-content" }}
            >
              <Avatar
                src={contact.avatar}
                sx={{ width: 56, height: 56, mb: 1, mx: "auto" }}
              />
              <Typography
                variant="body2"
                sx={{ fontWeight: contact?.highlighted ? 700 : 500 }}
              >
                {contact.name}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: contact?.highlighted ? 700 : 500 }}
              >
                {contact.role}
              </Typography>
            </Box>
          ))}
        </Box>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography variant={"body2"} sx={{ alignSelf: "center" }}>
              Write Amount
            </Typography>
            <TextField
              size="small"
              sx={{
                flex: 1,
                bgcolor: "#f5f6fa",
              }}
              required
              slotProps={{
                input: {
                  type: "number",
                },
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type={"submit"}
              sx={{
                bgcolor: "black",
                "&:hover": { bgColor: "black" },
                px: 3,
              }}
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default QuickTransfer;

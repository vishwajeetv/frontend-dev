import React from "react";
import { Box, Typography, Avatar, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const QuickTransfer = ({ contacts }) => {
  return (
    <Box
      sx={{
        bgColor: "white",
        p: 3,
        borderRadius: 2,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Typography variant="h6" mb={3}>
        Quick Transfer
      </Typography>

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
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {contact.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {contact.role}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          placeholder="Write Amount"
          size="small"
          sx={{
            flex: 1,
            bgColor: "#f5f6fa",
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            bgColor: "black",
            "&:hover": { bgColor: "black" },
            px: 3,
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default QuickTransfer;

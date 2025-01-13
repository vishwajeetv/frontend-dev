import React from "react";
import { Box, Grid, Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";

const EditProfile = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: 2,
        p: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
          position: "relative",
          width: "fit-content",
          mx: "auto",
        }}
      >
        <Avatar
          src="/path-to-profile-image.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <IconButton
          sx={{
            position: "absolute",
            right: -10,
            bottom: -10,
            bgcolor: "#f5f6fa",
            "&:hover": { bgcolor: "#e0e0e0" },
          }}
        >
          <EditIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField label="Your Name" defaultValue="Charlene Reed" />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField label="User Name" defaultValue="Charlene Reed" />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Email"
            defaultValue="charlenereed@gmail.com"
            type="email"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Password"
            defaultValue="********"
            type="password"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField label="Date of Birth" defaultValue="25 January 1990" />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Present Address"
            defaultValue="San Jose, California, USA"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            label="Permanent Address"
            defaultValue="San Jose, California, USA"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField label="City" defaultValue="San Jose" />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField label="Postal Code" defaultValue="45962" />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField label="Country" defaultValue="USA" />
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#2F3349",
            color: "white",
            px: 4,
            "&:hover": {
              bgcolor: "#1a1f2e",
            },
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditProfile;

import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Avatar,
  IconButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";
import { DatePicker } from "@mui/x-date-pickers";
import DatePickerInput from "../../Components/DatePickerInput.jsx";
import dayjs from "dayjs";
import SummaryService from "../../Services/SummaryService.js";
import UserService from "../../Services/UserService.js";

const EditProfile = () => {
  const [profileData, setProfileData] = React.useState(null);
  const [loading, setLoading] = React.useState("not-started");
  const [errorMessage, setErrorMessage] = React.useState(null);
  useEffect(() => {
    setLoading("started");
    UserService.getUserDetails()
      .then((responseData) => {
        if (responseData?.data) {
          setProfileData(responseData.data);
        }
        setLoading("done");
      })
      .catch((error) => {
        setErrorMessage("Something went wrong. Please try again later.");
        setLoading("done");
      });
  }, []);
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: 2,
        p: { xs: 2, md: 3 },
      }}
    >
      {loading === "started" && (
        <Grid
          container
          sx={{ height: "600px" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress sx={{ left: "50%", top: "50%" }} />
        </Grid>
      )}
      {loading === "done" && errorMessage && (
        <Typography>{errorMessage}</Typography>
      )}
      {loading === "done" && profileData && (
        <>
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
              src={profileData.avatarImage}
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

          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            {" "}
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <InputField
                  label="Your Name"
                  defaultValue={profileData.name}
                  type={"text"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  label="User Name"
                  defaultValue={profileData.userName}
                  type={"text"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  label="Email"
                  defaultValue={profileData.email}
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
                <DatePickerInput
                  label="Date of Birth"
                  defaultValue={dayjs(profileData.dateOfBirth)}
                  // type={"date"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  label="Present Address"
                  defaultValue={profileData.presentAddress}
                  type={"text"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  label="Permanent Address"
                  defaultValue={profileData.permanentAddress}
                  type={"text"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  label="City"
                  defaultValue={profileData.city}
                  type={"text"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  label="Postal Code"
                  defaultValue={profileData.postalCode}
                  type={"number"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  label="Country"
                  defaultValue={profileData.country}
                  type={"text"}
                />
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
                type="submit"
              >
                Save
              </Button>
            </Box>
          </form>
        </>
      )}
    </Box>
  );
};

export default EditProfile;

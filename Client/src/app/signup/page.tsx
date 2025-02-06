import React from "react";
import Navbar from "../components/Navbar";
import Footerbar from "../components/Footerbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

const page = () => {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          <Card
            sx={{
              padding: "30px 20px",
              width: 500,
              borderRadius: "15px",
              boxShadow:
                "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  textAlign: "center",
                  textTransform: "uppercase",
                  // padding: "20px 0px 20px 0px",
                }}
              >
                Sign up
              </Typography>
            </CardContent>
            <form>
              <Box mb={2}>
                <TextField
                  label="FirstName"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="LastName"
                  variant="outlined"
                  fullWidth
                  required
                  type="text"
                />
              </Box>
              <Box mb={2}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
              </Box>
              <Box mb={3}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  type="password"
                />
              </Box>
              <Box mb={3}>
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  required
                  type="password"
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Sign Up
              </Button>
            </form>
            <CardContent sx={{fontSize:"12px", fontWeight: "bold", textAlign: "center" }}>
              Already have an account?
              <a href="/signin" className="link-primary fw-semibold">
                {" "}
                Sign in
              </a>{" "}
              here
            </CardContent>
          </Card>
        </Grid2>
      </Container>
      <Footerbar />
    </>
  );
};

export default page;

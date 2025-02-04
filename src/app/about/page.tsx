"use client";
import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import { ThemeProvider } from "@emotion/react";
import SocialMediaLinks from "../components/SocialMediaLinks";
import Footerbar from "../components/Footerbar";
import theme from "../theme";

const page = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box>
        <Typography>This is about us page!</Typography>
      </Box>
      <SocialMediaLinks />
      <Footerbar />
    </ThemeProvider>
  );
};

export default page;

"use client";
import { CssBaseline } from "@mui/material";
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
      <ContactForm />
      <SocialMediaLinks />
      <Footerbar />
    </ThemeProvider>
  );
};

export default page;

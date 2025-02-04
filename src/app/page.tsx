"use client";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid2,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import SocialMediaLinks from "./components/SocialMediaLinks";
import Hero from "./components/HeroSection";
import ArtworkGallery from "./components/ArtWorkGallery";
import ContactForm from "./components/ContactForm";
import Footerbar from "./components/Footerbar";
import AnimatedCard from "./components/AnimatedCard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <ArtworkGallery />
      <section style={{ backgroundColor: "#000000" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "40px 0px 0px 0px",
              }}
            >
              our work
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              padding: "80px 40px",
            }}
          >
            <Typography>
              We strive to bring innovation and creativity to every project we
              undertake. Our team of experts works closely with our clients to
              understand their needs and deliver outstanding solutions. We are
              dedicated to creating products that exceed our clients'
              expectations.
            </Typography>
          </Box>
        </Container>
      </section>
      <Grid2>
        <Container>
          <AnimatedCard />
        </Container>
      </Grid2>
      <section style={{ backgroundColor: "#000000" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
                padding: "40px 0px 0px 0px",
              }}
            >
              who we are
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              padding: "12px 40px 40px 40px",
            }}
          >
            <Typography>
              We specialize in crafting exceptional digital experiences to help
              our clients achieve their business goals.
            </Typography>
            <Button variant="contained" color="secondary" href="#gallery">
              Get for Free
            </Button>
          </Box>
        </Container>
      </section>
      {/* <section style={{ backgroundColor: "#fafafa" }}>
        <ContactForm />
      </section> */}
      <ContactForm />
      <SocialMediaLinks />
      <Footerbar />
    </ThemeProvider>
  );
}

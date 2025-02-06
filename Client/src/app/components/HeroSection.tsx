import { Box, Typography, Button } from "@mui/material";

const Hero = () => (
  <Box
    sx={{
      height: "100vh",
      backgroundImage: 'url("/images/hero-background.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
    }}
  >
    <Box sx={{ maxWidth: "100%", overflowX: "hidden" }}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 3,
          fontWeight: "regular",
          textAlign: "left",
          padding: "40px 40px",
        }}
      >
        We specialize in crafting exceptional digital experiences to help our
        clients achieve their business goals.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: "84px",
          fontWeight: "bold",
          textAlign: "left",
          padding: "40px 40px",
        }}
      >
        Product Design Experience
      </Typography>
      <Button variant="contained" color="primary" href="#gallery">
        View Gallery
      </Button>
    </Box>
  </Box>
);

export default Hero;

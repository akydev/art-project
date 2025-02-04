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
    {/* <Box sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        Welcome to Ai-Art Portfolio
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Explore stunning digital art
      </Typography>
      <Button variant="contained" color="primary" href="#gallery">
        View Gallery
      </Button>
    </Box> */}
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
    </Box>
  </Box>
);

export default Hero;

// "use client";
// import Image from "next/image";
// import styles from "./page.module.css";

// import {
//   Grid,
//   Typography,
//   Button,
//   Container,
//   Card,
//   CardMedia,
//   CardContent,
//   Box,
// } from "@mui/material";
// import { useState } from "react";

// export default function Home() {
//   const [artPieces, setArtPieces] = useState([
//     { title: "Art 1", image: "/art1.jpg" },
//     { title: "Art 2", image: "/art2.jpg" },
//     { title: "Art 3", image: "/art3.jpg" },
//   ]);

//   return (
//     <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh", py: 4 }}>
//       {/* Navigation Bar */}
//       <Box sx={{ backgroundColor: "#2c3e50", padding: "20px" }}>
//         <Container maxWidth="lg">
//           <Grid container justifyContent="space-between" alignItems="center">
//             <Typography variant="h5" color="white">
//               Art Gallery
//             </Typography>
//             <Button variant="outlined" color="inherit">
//               Contact
//             </Button>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Hero Section */}
//       {/* <Box
//         sx={{
//           backgroundImage: "url(/hero-bg.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           py: 10,
//         }}
//       >
//         <Container maxWidth="lg">
//           <Typography
//             variant="h2"
//             align="center"
//             sx={{ color: "white", fontWeight: "bold" }}
//           >
//             Welcome to Our Art Gallery
//           </Typography>
//           <Typography
//             variant="h5"
//             align="center"
//             sx={{ color: "white", mt: 2 }}
//           >
//             Explore unique and beautiful pieces of art by renowned artists.
//           </Typography>
//           <Box mt={4} textAlign="center">
//             <Button variant="contained" color="primary" size="large">
//               Browse Art
//             </Button>
//           </Box>
//         </Container>
//       </Box> */}

//       {/* Art Gallery Grid */}
//       <Container maxWidth="lg" sx={{ mt: 8 }}>
//         <Grid container spacing={4}>
//           {artPieces.map((art, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={art.image}
//                   alt={art.title}
//                 />
//                 <CardContent>
//                   <Typography variant="h6" color="text.primary">
//                     {art.title}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Footer */}
//       <Box sx={{ backgroundColor: "#2c3e50", py: 4, mt: 8 }}>
//         <Container maxWidth="lg">
//           <Typography variant="body1" color="white" align="center">
//             © 2025 Art Gallery. All rights reserved.
//           </Typography>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// pages/index.tsx
"use client";
import {
  Box,
  Container,
  CssBaseline,
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
      {/* <section style={{ backgroundColor: "#fafafa" }}>
        <ContactForm />
      </section> */}
      <ContactForm />
      <SocialMediaLinks />
      <Footerbar />
    </ThemeProvider>
  );
}

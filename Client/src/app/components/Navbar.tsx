// components/Navbar.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import Link from "next/link";

const Navbar = () => (
  <AppBar
    position="sticky"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "blur(5px)",
      boxShadow:
        "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)", // Custom shadow effect
      zIndex: 1100,
    }}
  >
    <Container>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ flexGrow: 1 }}
        >
          <Link href="/">
            <img
              src="logo/logo.png"
              alt="Logo"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "8px",
                borderRadius: "50%",
              }}
            />
          </Link>
          <Typography
            variant="h6"
            sx={{
              // fontFamily: "Poppins",
              fontFamily: "Roboto",
              textTransform: "uppercase",
              flexGrow: 1,
              fontWeight: "bold",
            }}
          >
            Ai-Art
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          {" "}
          {/* This creates space between the items */}
          <Link href="/about">
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "14px", // Adjust font size
                fontWeight: "400", // Make the text bold
                textTransform: "uppercase", // Prevent uppercase transformation
                backgroundColor: "#4CAF50", // Custom background color
                "&:hover": {
                  backgroundColor: "#45a049", // Hover effect
                },
              }}
            >
              About
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "14px", // Adjust font size
                fontWeight: "400", // Make the text bold
                textTransform: "uppercase", // Prevent uppercase transformation
              }}
            >
              services
            </Button>
          </Link>
          <Link href="/gallery">
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "14px", // Adjust font size
                fontWeight: "400", // Make the text bold
                textTransform: "uppercase", // Prevent uppercase transformation
              }}
            >
              gallery
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "14px", // Adjust font size
                fontWeight: "400", // Make the text bold
                textTransform: "uppercase", // Prevent uppercase transformation
              }}
            >
              contact
            </Button>
          </Link>
          <Link href="/signin">
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "14px", // Adjust font size
                fontWeight: "400", // Make the text bold
                textTransform: "uppercase", // Prevent uppercase transformation
              }}
            >
              sign-in
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "14px", // Adjust font size
                fontWeight: "400", // Make the text bold
                textTransform: "uppercase", // Prevent uppercase transformation
                // letterSpacing: "4px",
              }}
            >
              sign-up
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;

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
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Ai-Art
          </Typography>
        </Box>

        <Box display="flex" gap={2}>
          {" "}
          {/* This creates space between the items */}
          <Link href="/about">
            <Button variant="contained" color="primary">
              About
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="contained" color="primary">
              services
            </Button>
          </Link>
          <Link href="/gallery">
            <Button variant="contained" color="primary">
              gallery
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="contained" color="primary">
              contact
            </Button>
          </Link>
          <Link href="/signin">
            <Button variant="contained" color="primary">
              sign-in
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="contained" color="primary">
              sign-up
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;

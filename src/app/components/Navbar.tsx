// components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

const Navbar = () => (
  <AppBar position="sticky">
    <Container>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ai-Art
        </Typography>
        <Button color="inherit" href="#contact">
          About
        </Button>
        <Button color="inherit" href="#gallery">
          Gallery
        </Button>
        <Button color="inherit" href="#contact">
          Services
        </Button>
        <Button color="inherit" href="#contact">
          Contact
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;

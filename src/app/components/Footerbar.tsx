import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footerbar = () => {
  return (
    /* Footer */
    <Box sx={{ backgroundColor: "#000000", py: 4, height: "24px" }}>
      <Container maxWidth="lg">
        <Typography variant="body1" color="white" align="center" height="4px">
          © 2025 Art Gallery. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footerbar;

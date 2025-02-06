import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footerbar = () => {
  return (
    /* Footer */

    <Box
      sx={{
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "56px",
      }}
    >
      <Typography variant="body1" color="white" align="center">
        © 2025 Art Gallery. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footerbar;

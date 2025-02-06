import { Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = () => (
  <Box sx={{ padding: "3rem 0" }}>
    <Typography variant="h4" align="center" gutterBottom>
      Get in Touch
    </Typography>
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  </Box>
);

export default ContactForm;

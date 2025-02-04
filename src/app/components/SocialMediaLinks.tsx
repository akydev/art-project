import { Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMediaLinks = () => (
  <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
    <IconButton href="https://instagram.com" target="_blank" color="primary">
      <InstagramIcon />
    </IconButton>
    <IconButton href="https://twitter.com" target="_blank" color="primary">
      <TwitterIcon />
    </IconButton>
    <IconButton href="https://linkedin.com" target="_blank" color="primary">
      <LinkedInIcon />
    </IconButton>
  </Box>
);

export default SocialMediaLinks;

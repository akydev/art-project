import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid2,
  Container,
} from "@mui/material";
import AnimatedCard from "./AnimatedCard";

const ArtworkGallery = () => (
  <Box sx={{ padding: "3rem 0" }}>
    <Typography variant="h4" align="center" gutterBottom>
      Artwork Showcase
    </Typography>
    <Grid2
      container
      spacing={2}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      }}
    >
      <Grid2>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image="/images/art1.jpg"
            alt="Art 1"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Artwork Title 1
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Short description of the artwork.
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image="/images/art2.jpg"
            alt="Art 2"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Artwork Title 2
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Short description of the artwork.
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image="/images/art3.jpg"
            alt="Art 3"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Artwork Title 3
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Short description of the artwork.
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image="/images/art1.jpg"
            alt="Art 1"
          />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Artwork Title 1
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Short description of the artwork.
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>

    <Grid2>
      <Container>
        <AnimatedCard />
      </Container>
    </Grid2>
  </Box>
);

export default ArtworkGallery;

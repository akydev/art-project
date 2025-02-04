import { motion } from "framer-motion";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const AnimatedCard = () => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
    <Card>
      <CardMedia
        component="img"
        height="250"
        image="/images/art1.jpg"
        alt="Artwork"
      />
      <CardContent>
        <Typography variant="h6">Title of Artwork</Typography>
        <Typography variant="body2">Description</Typography>
      </CardContent>
    </Card>
  </motion.div>
);

export default AnimatedCard;

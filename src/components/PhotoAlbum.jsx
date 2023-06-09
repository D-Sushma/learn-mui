import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
// ** icon for Navigation Bar
import { PhotoCamera } from "@mui/icons-material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PhotoAlbum() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        {/* mr:2 => mr: "16px" */}
        <Toolbar>
          <PhotoCamera sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      {/* SEMANTIC HTML --> ex- main that clearly defines its content */}
      <main>
        <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <Typography
              // component='h1'
              variant="h2"
              align="center"
              // color="textPrimary"      //old
              color="text.primary" //new
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              // color="textSecondary"    //old
              color="text.secondary" //new
              paragraph
            >
              Hello everyone This is a photo album and I'm trying to make this
              sentence as long as possible so we can see how does it look like
              on the screen.
            </Typography>

            {/* Grid container --> for parent wrapper, item --> for child or item */}
            <div style={{ marginTop: "40px" }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" size="medium">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" size="medium">
                    Secondary actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Box>
        <Container maxWidth="md" sx={{ py: 8, px: 0 }}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                  // component="div"
                  // 16:9 ratio
                    sx={{ pt: "56.25%" }} 
                    image="https://source.unsplash.com/random?wallpaper"
                    // image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent sx={{ p: 2, flexGrow: 1}}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer style={{ backgroundColor: "whitesmoke", padding: "50px 0px" }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography 
        variant="subtitle1" 
        align="center" 
        color="textSecondary"
        component="footer"
        >
          something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </>
  );
}

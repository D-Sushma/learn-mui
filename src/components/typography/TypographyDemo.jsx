// ** Typography is MUI component & it just a any text element.
// ** CssBaseline --> provide some different styling in App for MUI
// ** Grid --> for responsive design and positioning
// ** AppBar --> for Navigation Bar,
// ** Toolbar --> has bydefault m & p
// ** you don't want to put css style , you want to put separate style in MUI App
// BEST WAY---> but its deprecated.....!!! 
// ** 1. import makeStyles, 2. for use it we create Hook called useStyles, 3.than inside it makeStyles fun have callback fun that return an Object, 4. in here we also get access the theme which you can used to provide diff. styling.
// ** 5. now, use useStyles we have to create "classes" Obj out ot it. To do that you need to go inside component and say "** const classes = useStyles(); **"
// ** 6. and this classes obj provide an element ex. className = {classes.container}
// ** 7. this classes obj need to create as a new obj called "container" & this container obj define inside useStyles, 8. & inside this we "provide diff style for element"
import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  // makeStyles,
} from "@mui/material";
// ** icon for Navigation Bar
import { PhotoCamera } from "@mui/icons-material";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   icon: {
//     marginRight: '20px',
//   },
//   button: {
//     marginTop: '40px',
//   },
// }));

export default function PhotoAlbum() {
  // const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <PhotoCamera className={classes.icon} /> */}
          <PhotoCamera  />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      {/* SEMANTIC HTML --> ex- main that clearly defines its content */}
      <main>
        {/* <div className={classes.container}> */}
        <div style={{ backgroundColor: "whiteSmoke", padding: "8px 6px" }}>
          <Container maxWidth="sm" sx={{ mt: "100px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone This is a photo album and I'm trying to make this
              sentence as long as possible so we can see how does it look like
              on the screen
            </Typography>

            {/* Grid container --> for parent wrapper, item --> for child or item */}
            {/* <div className={classes.button}> */}
            <div >
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary" size="small">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" size="small">
                    Secondary actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* <Container className ={classes.cardGrid} > */}
        <Container >
          <Card>
            <CardMedia><img src="#" alt=""/></CardMedia>
            <CardContent><Typography><h2>photo</h2></Typography></CardContent>
            <CardActions>
              <Button>
                <a href="/">see more </a>
                {/* <Link to="/">see more</Link> */}
              </Button>
            </CardActions>
          </Card>
        </Container>
      </main>
    </>
  );
}

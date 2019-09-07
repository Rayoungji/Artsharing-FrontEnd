

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import useStyles from "../../styles/FrameIndex2"
import {BrowserRouter, Route} from "react-router-dom"
import ArtistList from "../../containers/ArtistList/ArtistList"
import RentList from "../../containers/RentList/RentList"
import Profile from "../../containers/Profile"
import SignUp from "../../containers/SignUp"
import ArtItemList from '../../containers/ArtItemList/ArtItemLIst'
import ArtistOnly from '../../containers/ArtistOnly'
import ArtItemMore from '../../containers/ArtItemList/ArtItemMore'

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <main>
          Main featured post
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Title of a longer featured blog post
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    Continue reading…
                  </Link>
                </div>
              </Grid>
            </Grid>
 <div className={classes.heroContent}>
          <Container>
            <BrowserRouter>
              <Route exact path="/artItemList" component={ArtItemList} /> {/*작품리스트*/}
              <Route exact path="/artist" component={ArtistList} />{/*작가리스트*/}
              <Route exact path='/artistOnly' component={ArtistOnly} />{/*작품관리*/}
              <Route exact path="/rentList" component={RentList} />{/*작품대여*/}
              <Route exact path="/profile" component={Profile} />{/*회원정보란*/}
              <Route exact path="/signup" component={SignUp} />{/*회원가입*/}
              <Route exact path="/ArtItemMore/:id" component={ArtItemMore} />{/*작품상세화면*/}
            </BrowserRouter>
          </Container>
        </div>
          </Paper>
          {/* End main featured post */}    
        </main>
      </Container>
     
    </React.Fragment>
  );
}
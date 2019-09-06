import React from 'react'
import Container from '@material-ui/core/Container'
import useStyles from "../../styles/Frameindex"
import {BrowserRouter, Route} from "react-router-dom"
import Artist from "../../containers/Artist"
import RentalArtist from "../../containers/RentalArtist"
import Profile from "../../containers/Profile"
import SignUp from "../../containers/SignUp"
import Art from '../../containers/ArtItem/Art'
import RentalArt from '../../containers/RentalArt'

export default function Album() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container>
            <BrowserRouter>
              <Route exact path="/art" component={Art} />
              <Route exact path="/artist" component={Artist} />
              <Route exact path='/rentalArt' component={RentalArt} />
              <Route exact path="/rentalArtist" component={RentalArtist} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/signup" component={SignUp} />
            </BrowserRouter>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
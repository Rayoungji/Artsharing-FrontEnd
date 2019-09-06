import React from 'react'
import Container from '@material-ui/core/Container'
import useStyles from "../../styles/Frameindex"
import {BrowserRouter, Route} from "react-router-dom"
import Artist from "../../containers/Artist"
import RentalArtist from "../../containers/RentalArtist"
import Profile from "../../containers/Profile"
import SignUp from "../../containers/SignUp"
import ArtItemList from '../../containers/ArtItem/ArtItemLIst'
import RentalArt from '../../containers/RentalArt'
import ArtItemMore from '../../containers/ArtItem/ArtItemMore'
import material from '../../containers/material'
export default function Album() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container>
            <BrowserRouter>
              <Route exact path="/art" component={ArtItemList} />
              <Route exact path="/artist" component={Artist} />
              <Route exact path='/rentalArt' component={RentalArt} />
              <Route exact path="/rentalArtist" component={RentalArtist} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/ArtItemMore/:id" component={ArtItemMore} />
              <Route exaxact path='/material' component={material} />
            </BrowserRouter>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
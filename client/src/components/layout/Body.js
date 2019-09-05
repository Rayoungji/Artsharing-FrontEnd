import React from 'react'
import Container from '@material-ui/core/Container'
import useStyles from "../../styles/Frameindex"
import {BrowserRouter, Route} from "react-router-dom"
import ArtWork from "../../containers/ArtWork"
import RentalArtist from "../../containers/RentalArtist"
import Profile from "../../containers/Profile"
import SignUp from "../../containers/SignUp"
import Login from "../../containers/Login"
import ArtItemList from '../../containers/ArtItemLIst'

export default function Album() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container>
            <BrowserRouter>
              <Route exact path="/artist" component={ArtItemList} />
              <Route exact path="/work" component={ArtWork} />
              <Route exact path="/rental" component={RentalArtist} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
            </BrowserRouter>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
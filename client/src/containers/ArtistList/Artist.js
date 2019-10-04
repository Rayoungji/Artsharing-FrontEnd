import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import ArtistMore from './ArtistMore'
import ArtistList from './ArtistLIst'

export default class Art extends Component {
    render() {
        return (
            <div>
                <ArtistList />       
                <BrowserRouter>
                    <Route exact path="/ArtistMore/:id" component={ArtistMore} />
                </BrowserRouter>
            </div>
        )
    }
}
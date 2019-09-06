import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import ArtItemMore from './ArtItemMore'
import ArtItemList from './ArtItemLIst'

export default class Art extends Component {
    render() {
        return (
            <div>
         <ArtItemList />       
        <BrowserRouter>
        <Route exact path="/ArtItemMore/:id" component={ArtItemMore} />
        </BrowserRouter>
            </div>
        )
    }
}

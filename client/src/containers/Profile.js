//회원정보
import React, { useState, Component, Fragment} from 'react';
import useStyles from '../styles/ArtItemMoreIndex';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import { Container, CardMedia } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Card } from '@material-ui/core';


class Profile extends Component {

    state={
        profiles: [
            {
        image:"https://bit.ly/2WNi2Ml",
        name:'현재호',
        age:'24',
        sex:'남',
        belong:'개인'}
    ]
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    render(){

        const {profiles} = this.state;
        const classes = useStyles.bind();

        return(

            <div>
           {profiles.map(c => (
                <Card>
                    <CardMedia
                    component="img"
                    height="250"
                    className={classes.cardmedia}
                    img="https://bit.ly/2WNi2Ml"/>
              </Card>))}
                </div>
        )    
    }
}
export default Profile;    

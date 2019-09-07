import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from "../../styles/ArtItemListIndex";
import CardActionArea from '@material-ui/core/CardActionArea';


class ArtItem extends Component {

    render() {
        const {artItems} = this.props;
        const classes = useStyles.bind();
        
        return (
            <div>
                <Grid container spacing={4}>
                {artItems.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>   
                  
                    <Card className={classes.card}>
                    <CardActionArea> 
                        <CardMedia
                            component="img"
                            height="140"
                            className={classes.cardmedia}
                            image={card.image}
                            title={card.title}
                        />
                        <CardContent className={classes.cardContent} >
                            <Typography gutterBottom variant="h5" component="h2">
                                작품명: {card.title}
                            </Typography>
                            <Typography>
                                작가: {card.artist}
                            </Typography>
                        </CardContent>
                    
                        <CardActions>
                            <Button href={`/ArtItemMore/${card.id}`} size="small" color="primary">
                                작품 상세보기
                            </Button >
                        </CardActions>                  
                    </CardActionArea>
                    </Card>
                     
                    </Grid>
                ))}

                </Grid>
            </div>
        )
    }
}
export default ArtItem;

import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import useStyles from '../../styles/ArtItemMoreIndex'

const ArtItemMore =({match}) => {

    const classes = useStyles.bind();
    console.log(match.params.id)

        return (
            <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={8}>
                <Grid item>
                  <Card className={classes.image}>
                    <img className={classes.img} alt="complex" src="https://bit.ly/2WNi2Ml" />
                  </Card>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        작품명: 무서운 공룡사진
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        작가: 라영지
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        작품설명: 이것은 무서운 공룡사진입니다. 무섭죠?
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        대여기간: 2018.10.12~2018.10.30
                      </Typography>
                      <Button  size="small" color="primary">
                       대여신청
                      </Button >
                    </Grid>
                  </Grid>
                  </Grid>
              </Grid>
            </Paper>
          </div>
        );
    
}
export default ArtItemMore
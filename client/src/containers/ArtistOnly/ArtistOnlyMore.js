//상세페이지에서 id값을 넘겨주는 것까지함 
//axios연결하는 거 하기.
import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import useStyles from '../../styles/ArtItemMoreIndex';
import ArtistOnlyMoreDelete from './ArtistOnlyMoreDelet'




    const ArtistOnlyMore =({match}) => {

    const classes = useStyles.bind();
    console.log(match.params.id);

        return (
            <div className={classes.root}>
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
                        작품명: 자화상
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        작가: 빈센트 반 고흐
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        작품설명: 셀프 초상화는 인상주의 화가 인 빈센트 반 고흐 (Vincent van Gogh)가 캔버스에 그린 1889 년 오일입니다. <br/>
                        반 고흐의 마지막 초상화 였을지도 모르는이 그림은 그 해 9 월 프랑스 남부의 세인트 - 레미 - 프로방스를 떠나기 직전에 그렸습니다.
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        대여기간: 2018.10.12~2018.10.30
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container xs= {12} direction="row" justify="flex-end" alignItems="flex-start">
                <Grid>
                  <Button variant="contained" color="secondary" style = {{marginRight: 20,}}>수정하기</Button>
                 </Grid>
                 <Grid>
                    <ArtistOnlyMoreDelete/>
                  {/* <Button variant="contained" color="secondary" onClick = {this.handleClick}>삭제</Button> */}
                 </Grid>
               </Grid>
              
              
          </div>
        );
    
}
export default ArtistOnlyMore



// import React, { Component } from 'react'

// export default class ArtistOnlyMore extends Component {
//   render() {
//     const getID =({match}) => {
//       console.log("아이디: "+match.params.id);
//       console.log("들어오나요");
      
//     }
//     return (
//       <div>
//         {getID}
//       </div>
//     )
//   }
// }
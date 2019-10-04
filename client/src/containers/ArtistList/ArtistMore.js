// 상세페이지에서 id값을 넘겨주는 것까지함
// axios연결하는 거 하기.
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import useStyles from "../../styles/ArtItemMoreIndex";


// 서버에서 id에 해당하는 작품 값을 받아와서 출력
// 작가정보
// 작가이름, 작가사진, 등록된작품?
const ArtistMore = ({ match }) => {
    const classes = useStyles.bind();
    const { id } = match.params;
    console.log(id);

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
                        작품명:
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                        작가: 빈센트 반 고흐
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                        작품설명: 셀프 초상화는 인상주의 화가 인 빈센트 반 고흐 (Vincent van Gogh)가 캔버스에 그린 1889 년 오일입니다. <br />
                        반 고흐의 마지막 초상화 였을지도 모르는이 그림은 그 해 9 월 프랑스 남부의 세인트 - 레미 - 프로방스를 떠나기 직전에 그렸습니다.
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                        대여기간: 2018.10.12~2018.10.30
                            </Typography>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
};
export default ArtistMore;

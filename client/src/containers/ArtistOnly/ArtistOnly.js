import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

import ArtItemAddButton from './ArtItemAddButton';
import ArtistOnlyItem from './ArtistOnlyItem';

//작가로 로그인 시, 작품관리(삭제,수정) 하는 컴포넌트
//서버에서 작가에 대한 작품리스트를 받아서 리스트로 출력 ** 일단은 임시로 state값 지정
//수정 삭제 후 다시 저장
class ArtistOnly extends Component {


    //서버와 연결
    /* 
    [데이터형식]
    id  작품아이디번호 number
    title   작품명
    artist  작가명
    image   작품이미지  
    rentalToggle 대여상태 boolean
    descript   작품설명
    price   1일대여가 number
    */


    state = {

        artItems : [ 
            {
            id: 1,
            title: "별이 빛나는 밤",
            artist: "빈센트 반 고흐",
            image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
            // rentalDate: "date",
            rentalToggle: true,
            descript: "1번 작품입니다.",
            price: 1000,
     
           },

           {
            id: 2,
           title: "모나리자",
           artist: "레오나르도 다빈치",
           image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
        //    rentalDate: "date",
           rentalToggle: false,
           descript: "2번 작품입니다.",
           price: 2000,
    
    
          },
        ]
    }


    render() {
        return (
            <div>
                <Grid 
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="flex-end"
                    style = {{marginBottom: 20,}}>
                <ArtItemAddButton />
                </Grid>
                <Grid>
                <ArtistOnlyItem artItems = {this.state.artItems}/>
                </Grid>
            </div>
        )
    }
}
export default ArtistOnly;
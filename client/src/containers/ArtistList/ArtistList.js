import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { CssBaseline } from "@material-ui/core";
import ArtistListForm from "./ArtistListForm";
import ArtistItem from "./ArtistItem";


class ArtistList extends Component {
  state = {
      keyword: "",


      artItems: [
          {
              id: "1",
              title: "별이 빛나는 밤",
              artist: "빈센트 반 고흐",
              image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "1번 작품입니다.",
              price: "1000",

          },

          {
              id: "2",
              title: "모나리자",
              artist: "레오나르도 다빈치",
              image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "2번 작품입니다.",
              price: "1000",


          },

          {
              id: "3",
              title: "베누스의 탄생",
              artist: "산드로 보티첼리",
              image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "3번 작품입니다.",
              price: "1000",


          },

          {
              id: "4",
              title: "샘",
              artist: "마르쉘 뒤샹",
              image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "4번 작품입니다.",
              price: "1000",


          },

          {
              id: "5",
              title: "진주 귀걸이를 한 소녀",
              artist: "요하네스 페르메이르",
              image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "5번 작품입니다.",
              price: "1000",


          },

          {
              id: "6",
              title: "아담의 창조",
              artist: "미켈란젤로 부오나로티",
              image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "6번 작품입니다.",
              price: "1000",


          },

          {
              id: "7",
              title: "최후의 만찬",
              artist: "레오나르도 다빈치",
              image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "7번 작품입니다.",
              price: "1000",


          },

          {
              id: "8",
              title: "자화상",
              artist: "빈센트 반 고흐",
              image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "8번 작품입니다.",
              price: "1000",


          },

          {
              id: "9",
              title: "다다익선",
              artist: "백남준",
              image: "https://g.co/arts/Qepu8eSEoi7EPjNQA",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "9번 작품입니다.",
              price: "1000",


          },

          {
              id: "10",
              title: "두번째 페이지로 넘어가야하는지 무한 페이지스크롤링인지",
              artist: "전대식",
              image: "https://bit.ly/2WNi2Ml",
              rentalDate: "date",
              rentalToggle: "true",
              descript: "10번 작품입니다.",
              price: "1000",


          },

      ],
  }

  // ArtItemListFrom의 검색어값 받아오는 메소드.
  // 서버로 키워드 넘겨줘
  handleChange = (data) => {
      this.setState({
          keyword: data.searchKeyword,
      });

      console.log(`ArtItemList의 키워드: ${this.state.keyword}`);
  }

  // ArtItem으로 state값(작품목록들) 넘겨줌
   mapToComponents = (data) => {
       data.sort();
       data = data.filter(contact => contact.title.toLowerCase().indexOf(this.state.keyword) > -1);
       return <ArtistItem artItems={data} />;
   }


   render() {
       return (
           <div>
               <CssBaseline />
               <Container maxWidth="md">
                   <ArtistListForm onData={this.handleChange} />

                   {this.mapToComponents(this.state.artItems)}


               </Container>
           </div>
       );
   }
}

export default ArtistList;

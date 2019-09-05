import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import ArtItemListForm from './ArtItemListForm';
import ArtItem from './ArtItem';
import { CssBaseline } from '@material-ui/core';
import {BrowserRouter, Route} from "react-router-dom"
import ArtItemMore from './ArtItemMore'
import axios from 'axios';

//ArtItemList
class ArtItemList extends Component {

//   state={
//     //keyword:'',
//     id:'',
//     artitems: []
// }

state = {
  keyword: '',

  artItems : [   
    {
     id: "1",
     title: "My first post",
     artist: "신가은",
     image: "https://bit.ly/2WNi2Ml",
     rentalDate: "date",
     rentalToggle: "true",
     descript: "1번 작품입니다.",

    },
   
    {
      id: "2",
     title: "My second post",
     artist: "라영지",
     image: "https://bit.ly/2WNi2Ml",
     rentalDate: "date",
     rentalToggle: "true",
     descript: "2번 작품입니다.",

    },
   
    {
      id: "3",
     title: "My third post",
     artist: "김수연",
     image: "https://bit.ly/2WNi2Ml",
     rentalDate: "date",
     rentalToggle: "true",
     descript: "3번 작품입니다.",

    },
   
    {
      id: "4",
     title: "My fourth post",
     artist: "박선형",
     image: "https://bit.ly/2WNi2Ml",
     rentalDate: "date",
     rentalToggle: "true",
     descript: "4번 작품입니다.",

    },
   
    {
      id: "5",
     title: "My fifth post",
     artist: "홍영준",
     image: "https://bit.ly/2WNi2Ml",
     rentalDate: "date",
     rentalToggle: "true",
     descript: "5번 작품입니다.",

    },
   
    {
      id: "6",
     title: "My sixth post",
     artist: "조정석",
     image: "https://bit.ly/2WNi2Ml",
     rentalDate: "date",
     rentalToggle: "true",
     descript: "6번 작품입니다.",

    },
  
    {
      id: "7",
        title: "My fourth post",
        artist: "공유",
        image: "https://bit.ly/2WNi2Ml",
        rentalDate: "date",
        rentalToggle: "true",
        descript: "7번 작품입니다.",

       },
  
       {
        id: "8",
        title: "My fourth post",
        artist: "현재호",
        image: "https://bit.ly/2WNi2Ml",
        rentalDate: "date",
        rentalToggle: "true",
        descript: "8번 작품입니다.",

       },
  
       {
        id: "9",
        title: "My fourth post",
        artist: "전대식",
        image: "https://bit.ly/2WNi2Ml",
        rentalDate: "date",
        rentalToggle: "true",
        descript: "9번 작품입니다.",

       },
  
       {
        id: "10",
        title: "두번째 페이지로 넘어가야하는지 무한 페이지스크롤링인지",
        artist: "전대식",
        image: "https://bit.ly/2WNi2Ml",
        rentalDate: "date",
        rentalToggle: "true",
        descript: "10번 작품입니다.",

       },
   ]
}

// componentDidMount(){ this.getList(); }

// getList= ()=>{

//     const apiUrl = 'dummy/ArtItemList.json';
//     axios.get(apiUrl)
//         .then(data => {
//             //가지고 온 리스트를 state에 저장합니다.
//             this.setState({
//                 artitems : data.data.artitems
//             });
//         })
//         .catch(error => {
//             console.log(error);
//         });

// }

  render() {
  
    return (
      <div>
        <CssBaseline/>
        <Container maxWidth="md">
          <ArtItemListForm />
          <ArtItem artItems = {this.state.artitems} /> 
        </Container>
        <BrowserRouter>
        <Route exact path="/artItemMore/:id" component={ArtItemMore} />
        </ BrowserRouter>
      </div>
    )
  }
}

export default ArtItemList;
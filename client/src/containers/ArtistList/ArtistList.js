import React, { Component } from "react";
import Artist from "./Artist";
import axios from "../../lib";

export default class ArtistList extends Component {
    state={

        Artworks: [],
        // Artworks: [
        //     {
        //         id: 1,
        //         image: "https://placeimg.com/64/64/1",
        //         ArtName: "1번작품",
        //         Customer: "라영지",
        //         RentalDate: "2019.09.10~2019.09.15",
        //     },
        //     {
        //         id: 2,
        //         image: "https://placeimg.com/64/64/1",
        //         ArtName: "2번작품",
        //         Customer: "신가은",
        //         RentalDate: "2019.09.15~2019.09.20",
        //     },
        //     {
        //         id: 3,
        //         image: "https://placeimg.com/64/64/1",
        //         ArtName: "3번작품",
        //         Customer: "홍영준",
        //         RentalDate: "2019.09.21~2019.09.25",
        //     },
        // ],
    }

    componentDidMount=async () => {
        try {
            const response = await axios.get("/artSharing/sign/artistList");
            const { status, data } = response;
            if (status == 200) {
                console.log(data);
                const { state } = this;
                this.setState({
                    ...state,
                    Artworks: data,
                });
            }
        } catch (e) {

        }
    }

    render() {
        return (

            <Artist artistList={this.state.Artworks} />

        );
    }
}

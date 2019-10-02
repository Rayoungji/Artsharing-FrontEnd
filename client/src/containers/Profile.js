// 회원정보
import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import { Container } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Axios from "axios";


class Artist extends React.Component {
    state={
        data: {
            affiliation: "",
            age: "",
            id: "",
            mno: 0,
            name: "",
            phone: "",
            role: "",
            sex: "",
        },
        isLoading: true,
    }

    componentDidMount =async () => {
        try {
            const response = await Axios.get("/artSharing/sign");
            const { data } = response;
            console.log(response);
            this.setState({
                data,
                isLoading: false,
            });
        } catch (error) {
            const { data } = this.state;
            this.setState({
                data,
                isLoading: false,
            });
        }
    }

    handleChange=(e) => {
        const { data, isLoading } = this.state;
        console.log(this.state);
        this.setState({
            data: {
                ...data,
                [e.target.name]: e.target.value,
            },
            isLoading,

        });
    }

    render() {
        //     const [name, setName] = useState();
        //     const [date, setDate] = useState();
        //     const [sex, setSex] = useState();
        //     const [affiliation, setAffiliation] = useState();


        //     const setNameText = e => {
        //         setName(e.target.value);
        //     };
        //     const setDateText = e => {
        //       setDate(e.target.value);
        //   };

        //     const setSexText = e => {
        //         setSex(e.target.value);
        //     };


        //     const setAffiliationText = e => {
        //         setAffiliation(e.target.value);
        //     };
        //     const save = e => {
        //         e.preventDefault();
        //         const isKorean = /[A-Za-z0-9]/;


        //     };


        const { isLoading, data } = this.state;

        return (
            <React.Fragment>
                {isLoading === false
                && (
                    <React.Fragment>
                        <h1>회원정보</h1>

                        <div className="Artist">
                            <Card>
                                <img alt="complex" src="https://bit.ly/2WNi2Ml" />
                            </Card>
                            <div>
                                <input type="file" name="file" onChange={null} />


                            </div>

                            <form>
                                <FormLabel htmlFor="name">이름</FormLabel>
                                <Input
                                    type="text"
                                    value={data.name}
                                    name="name"
                                    id="name"
                                    placeholder=""
                                    onChange={this.handleChange}
                                />

                                <FormLabel htmlFor="sex">성별</FormLabel>
                                <Input
                                    id="sex"
                                    value={data.sex}
                                    name="sex"
                                // onChange={setSexText}
                                />

                                <br />


                                <FormLabel htmlFor="affiliation">소속</FormLabel>
                                <Input
                                    value={data.affiliation}
                                    name="affiliation"
                                    id="affiliation"
                                    placeholder=" "
                                    // onChange={setAffiliationText}
                                />

                                <br />
                                <Input type="submit" value="수정" />
                            </form>

                        </div>
                    </React.Fragment>
                )
                }
                {isLoading === true && <div>Loading</div>}
            </React.Fragment>
        );
    }
}
export default Artist;

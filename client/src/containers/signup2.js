//회원가입
import React, { useState} from 'react';
import Input from "@material-ui/core/Input";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormLabel from "@material-ui/core/FormLabel";

const Artist = () => {
    const [name, setName] = useState();
    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");
    const [sex, setSex] = useState("선택");
    const [date, setDate] = useState();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [affiliation, setAffiliation] = useState();


    const setNameText = e => {
        setName(e.target.value);
    };
    const setIDText = e => {
        setID(e.target.value);
        
    };
    const setPWText = e => {
        setPW(e.target.value);
    };
    const setSexText = e => {
        setSex(e.target.value);
    };
    const setDateText = e => {
        setDate(e.target.value);
    };
    const setPhoneNumberText = e => {
        setPhoneNumber(e.target.value);
    };
    const setAffiliationText = e => {
        setAffiliation(e.target.value);
    };
    const save = e => {
        e.preventDefault();
        const isKorean = /[A-Za-z0-9]/;
        const isNumber = /[0-9]/;

        if(isKorean.test(name)){
            alert("이름을 다시 확인하세요.");
        } else if(!isNumber.test(phoneNumber) || phoneNumber.length !==13){
            alert("휴대폰 번호를 다시 확인하세요.");
        }
    };


    return (
        <>
        <h1>회원가입</h1>
        <div className="Artist">
            <form onSubmit={save}>
                <FormLabel htmlFor="name">이름</FormLabel>
                <Input
                name="name"
                id="name"
                placeholder="김수연"
                onChange={setNameText}
                />
                <br />
                <FormLabel htmlFor="ID">아이디</FormLabel>
                <Input
                name="ID"
                id="ID"
                placeholder="suyeon"
                onChange={setIDText}
                value={ID}
                />
                <br />
                <FormLabel htmlFor="PW">비밀번호</FormLabel>
                <Input
                name="PW"
                id="PW"
                placeholder="0000"
                onChange={setPWText}
                />
                <br />
                <FormLabel htmlFor="sex">성별</FormLabel>
                <NativeSelect id="sex" name="sex" onChange={setSexText}>
                    <option value={sex}>선택</option>
                    <option value="man">남자</option>
                    <option value="woman">여자</option>

                </NativeSelect>
                <br />
                <FormLabel htmlFor="date">생년월일</FormLabel>
                <Input type="date" name="date" onChange={setDateText} />
                <br />
                <FormLabel htmlFor="phoneNumber">휴대폰 번호</FormLabel>
                <Input
                name="phoneNumber"
                id="phoneNumber"
                placeholder="010-1234-5678"
                onChange={setPhoneNumberText}
                value={phoneNumber}
                />
                <br />
                <FormLabel htmlFor="affiliation">소속</FormLabel>
                <Input
                name="affiliation"
                id="affiliation"
                placeholder=" "
                onChange={setAffiliationText}
                />

                <br />
                <Input type="submit" value="저장" />
                </form>
                
                </div>
                </>
    );
                
    };
    

export default Artist;
//회원정보
import React, { useState} from 'react';
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import { Container } from '@material-ui/core';
import { Card } from '@material-ui/core';


const Artist = () => {
  
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [sex, setSex] = useState();
    const [affiliation, setAffiliation] = useState();


    const setNameText = e => {
        setName(e.target.value);
    };
    const setDateText = e => {
      setDate(e.target.value);
  };
    
    const setSexText = e => {
        setSex(e.target.value);
    };
   
   
    const setAffiliationText = e => {
        setAffiliation(e.target.value);
    };
    const save = e => {
        e.preventDefault();
        const isKorean = /[A-Za-z0-9]/;
     

        
    };
   


    return (
        <>
        <h1>회원정보</h1>
        <div className="Artist">
        <Card >
                    <img  alt="complex" src="https://bit.ly/2WNi2Ml" />
                  </Card>
          <div>
              <input type="file" name="file" onChange={null}/>
              

          </div>
          
            <form onSubmit={save}>
                <FormLabel htmlFor="name">이름</FormLabel>
                <Input
                name="name"
                id="name"
                placeholder=""
                onChange={setNameText}
                />
                <br />
                <FormLabel htmlFor="date">생년월일</FormLabel>
                <Input id="date" name="date" onChange={setDateText} />
                <br />
                <FormLabel htmlFor="sex">성별</FormLabel>
                <Input id="sex" name="sex" onChange={setSexText}/>
                  
                <br />
                
                
                <FormLabel htmlFor="affiliation">소속</FormLabel>
                <Input
                name="affiliation"
                id="affiliation"
                placeholder=" "
                onChange={setAffiliationText}
                />

                <br />
                <Input type="submit" value="수정" />
                </form>
                
                </div>
                </>
    );
                
    };
    

export default Artist;
//작품등록

import React, { Component, } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

class ArtItemAdd extends Component {

  //서버로 데이터 보내주기 -> handleSubmit에서 구현
  /*
  [데이터형식]
  image 작품이미지 img
  title 작품명 
  artist 작가
  price 1일대여가 number
  desript 작품설명
  regdate 작품등록날짜 date : 사용자가 설정하는것 x
  */
  state={
    price: 0,
    desript:'',
    image:'기본값',
    title:'',
    artist:'',
    regdate: Date(),
    // rentaldate:'',

    open:false,  //dialog 창이 열려있는지 유무
    
}

//버튼클릭시
  handleClickOpen= ()=> {
    this.setState({
      open: true  //Dialog 창을 열어준다
    });
  }

  handleClose= ()=> {
    this.setState({
      open: false  //Dialog 텍스트를 초기화 하고 닫아준다
    })
  }

  handleValueChange= (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    });
    
  }

 //axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
  handleFormSubmit= (e)=> {
    e.preventDefault() 
    this.setState({
      // regdate: 
      open: false
      
      
    })

    let data = {
      title: this.state.title,
      artist: this.state.artist,
      price: this.state.price,
      descript: this.state.descript,
    }

    console.log("title:"+data.title);
    console.log("artist: "+data.artist);
    console.log("price:"+data.price);
    console.log("descript: "+data.descript);

    console.log("handleFormSubmit에 들어왔음.");
    
  }

  //파일업로드 start
  handleFileInput(e){
    this.setState({
      image : e.target.file[0],
    })
  }
  
  //파일업로드 end


render() {
  

    return (
        <div>
        <Button variant="contained" color="secondary" onClick={this.handleClickOpen}
                style = {{paddingLeft: 15, paddingRight: 15, fontSize: 17, margin: 15, }}>
             작품등록
        </Button>

        <Dialog open={this.state.open} onClose={this.handleClose} 
                fullWidth={true}
                maxWidth={'sm'}>
        <DialogTitle >작품등록</DialogTitle>

        <form onSubmit={this.handleFormSubmit}>
            <DialogContent>
                {/* 사진을 등록해주세요 .. <br/>
                <input type="file" name="file" onChange={e => this.handleFileInput(e)}/><br/>  */}
                <input
                  name = "image" //state변수명 -> handleFileInupt으로??
                  accept="image/*" //파일확장자 설정하는 부분.
                  style = {{ display: 'none',}}
                  id="contained-button-file"
                  multiple
                  type="file"
                  
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span" >
                    사진을 등록해주세요 ...
                  </Button>
                </label>
            </DialogContent>
            <DialogContent>
                <TextField 
                  style={{marginBottom: 15,}}
                  variant="outlined"
                  autoFocus
                  fullWidth
                  // helperText="작품명" 
                  label="작품명" 
                  type="text" 
                  name="title" 
                  value={this.state.title} 
                  onChange={this.handleValueChange} 
                  /><br/>
                <TextField 
                  style={{marginBottom: 15,}}
                  variant="outlined"
                  fullWidth 
                  // helperText="작가"
                  label="작가" 
                  type="text" 
                  name="artist" 
                  value={this.state.artist} 
                  onChange={this.handleValueChange} 
                  /><br/>

                <TextField
                        id="outlined-adornment-weight"
                        // className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                        label="대여가"
                        type="number"
                        name="price"
                        onChange={this.handleValueChange} 
                        helperText="대여가 (1일기준)"
                        InputProps={{
                          endAdornment: <InputAdornment position="end">₩(원)</InputAdornment>,
                        }}
                      />

                <TextField
                  style={{marginBottom: 15,}}
                  fullWidth 
                  label="작품설명" 
                  rows="6"  
                  multiline 
                  margin="normal" 
                  variant="filled" 
                  name="descript" 
                  value={this.state.descript} 
                  onChange={this.handleValueChange} 
                  /><br/>
            </DialogContent>
            
            <DialogActions>
                <Button variant="outlined" color="primary" onClick={this.handleClose}>취소</Button>
                <Button type="submit" variant="contained" color="secondary" >등록</Button>
            </DialogActions>
        </form>
        </Dialog>
        </div>
    )
  }

  
}
export default ArtItemAdd;
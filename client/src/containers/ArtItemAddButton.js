import React, { Component, } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

//rentaldate을 string으로 하는지?

class ArtItemAddButton extends Component {

    state={
        price:'',
        desript:'',
        image:'기본값',
        title:'',
        artist:'',
        rentaldate:'',
        open:false,  //dialog 창이 열려있는지 유무
    
    }

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
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

 
  handleFormSubmit= (e)=> {
    e.preventDefault() //axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
    this.setState({
      open: false
    })
  }

  //파일업로드 start
  handleFileInput(e){
    this.setState({
      image : e.target.files[0],
    })
  }
  handleFile=(e)=>{
    e.preventDefault() //axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
    this.setState({
        
    })
    console.log("handleFile함수가열렸음")
  }
  //파일업로드 end

render() {

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                 작품등록
            </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>작품등록</DialogTitle>
        <DialogContent>
        사진을 등록해주세요 ..<br />   
            <input type="file" name="file" onChange={e => this.handleFileInput(e)}/>
        </DialogContent>
        <DialogContent>
            <TextField label="title" type="text" name="title" value={this.state.title} onChange={this.handleValueChange} /><br/>
            <TextField label="artist" type="text" name="artist" value={this.state.artist} onChange={this.handleValueChange} /><br/>
            <TextField label="price" type="text" name="price" value={this.state.price} onChange={this.handleValueChange} /><br/>
            <TextField label="rentaldate" type="text" name="rentaldate" value={this.state.rentaldate} onChange={this.handleValueChange} /><br/>
            <TextField margin="normal" variant="filled" multiline rows="4" label="descript" name="descript" value={this.state.descript} onChange={this.handleValueChange} /><br/>
        </DialogContent>
        
        <DialogActions>
            <Button variant="outlined" color="primary" onClick={this.handleFormSubmit}>취소</Button>
            <Button variant="outlined" color="primary" onClick={this.handleClose}>등록</Button>
        </DialogActions>
        </Dialog>
        </div>
    );
}
  }
export default ArtItemAddButton;
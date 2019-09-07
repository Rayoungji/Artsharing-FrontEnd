import React, { Component, } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Login extends Component {

  state={
    id:'',
    password:'',
    open:false  //dialog 창이 열려있는지 유무
}

handleClickOpen= ()=> {
    this.setState({
      open: true  //Dialog 창을 열어준다
    });
  }

  handleClose= ()=> {
    this.setState({
      아이디:'',
      비밀번호:'',
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
        id:'',
        password:'',
      open: false
    })
  }


render() {

    return (
        <div>
            <Button color="inherit" onClick={this.handleClickOpen}>
                 로그인
            </Button>
      <Dialog open={this.state.open} onClose={this.handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
        <TextField label="id" type="text" name="id" value={this.state.id} onChange={this.handleValueChange} /><br/>
          <TextField label="pw" type="password" name="password" value={this.state.password} onChange={this.handleValueChange} /><br/>
            </DialogContent>
            <DialogActions>
            <Button variant="outlined" color="primary" onClick={this.handleFormSubmit}>ok</Button>
          <Button variant="outlined" color="primary" onClick={this.handleClose}>close</Button>
        </DialogActions>
        </Dialog>
        </div>
    )
}
  }
export default Login;
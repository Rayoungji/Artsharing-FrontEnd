import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ArtistOnlyMoreDelete extends Component {

    state = {
        open: false,
        setOpen: false,
    }
  

  handleClickOpen = () => {
      this.setState({
        setOpen: true,
        open: true,
        });
    }

  handleClose = () => {
    this.setState({
        setOpen: false,
        open: false,

        });
    }


  render() {
      

        return (


            <div>
            <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                삭제하기
            </Button>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"해당 작품을 영구적으로 삭제하시겠습니까 ?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    해당 작품을 영구적으로 삭제하시겠습니까 ?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleClose} color="secondary" autofocus>
                    취소
                </Button>
                <Button onClick={this.handleClose} color="secondary" variant = "contained">
                    삭제하기
                </Button>
                </DialogActions>
            </Dialog>
            </div>
        )
    }
}
export default ArtistOnlyMoreDelete;
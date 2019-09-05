import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../styles/ArtListFormIndex';

class ArtItemListForm extends Component {

state={keyword: ''};
  
handleChange = (e) => {
let nextState={};
nextState[e.target.name]=e.target.value;
  this.setState(nextState);
}


  render() {

  const classes = useStyles.bind();

  return (

    <Paper className={classes.root}>
      <InputBase
        name="keyword"
        className={classes.input}
        placeholder="작품명을 입력하세요"
        value={this.state.name}
        onChange={this.handleChange} />
      <IconButton className={classes.iconButton} aria-label="search" >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
  }
}
export default ArtItemListForm;


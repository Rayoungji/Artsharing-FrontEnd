import React, { Component } from 'react';
import useStyles from '../../styles/ArtListFormIndex';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class CustomizedInputBase extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.handleValueChange = this.handleValueChange.bind(this)
  }
    
  handleValueChange(e)  {
   
    this.setState({ [e.target.name]: e.target.value});

    this.props.onData(this.state.searchKeyword);

  }
  

  render() {
    const classes = useStyles.bind();
      
    return(
      <Paper className={classes.root}>
     
        <InputBase
          className={classes.input}
          placeholder="검색어를 입력하세요.."
          name="searchKeyword"
          value={this.state.searchKeyword}
          onChange={this.handleValueChange}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      
    </Paper>   
    );
  };

    
}
export default CustomizedInputBase;
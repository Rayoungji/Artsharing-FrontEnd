import React, { Component } from 'react';
import useStyles from '../../styles/ArtListFormIndex';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';

//검색어(searchKeyword)를 ArtItemList의 state인 keyword의 값으로 setState.

class ArtistListForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchKeyword:'',
    }

    this.handleValueChange = this.handleValueChange.bind(this)
  }
    
  handleValueChange = (e) =>  {
   
    this.setState({ [e.target.name]: e.target.value});

    console.log("ArtItemListForm 키워드: "+this.state.searchKeyword);

    let data = {
      searchKeyword: this.state.searchKeyword,
    }

    this.props.onData(data);

  }

  

  render() {
    const classes = useStyles.bind();
      
    return(
      <div>
      <Grid container spacing={3} direction="row">

        <Grid className={classes.root} item xs/>   
        <Grid className={classes.root} item xs/> 
        <Grid className={classes.root} item xs>

          {/* 검색어 입력칸 */}
          <Paper style={{marginBottom: 15,}}>
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>

            <TextField
              label="작가검색"
              placeholder="검색어를 입력하세요..."
              // variant="outlined"
              name="searchKeyword"
              value={this.state.searchKeyword}
              onChange={this.handleValueChange}
              />       
          </Paper>
        </Grid>   
        
      </Grid>
    </div>
    );
  };

    
}
export default ArtistListForm;
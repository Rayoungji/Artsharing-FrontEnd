import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from "../../styles";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Login from '../../containers/Login';


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Art Sharing
          </Typography>
          <Button color="inherit" href="/work">작품</Button>
          <Button color="inherit" href="/artist">작가</Button>
          <Button color="inherit" href="/rental">마이페이지</Button>
          <Select value='마이페이지'>
            <MenuItem><Button href="/work">작품관리</Button></MenuItem>
            <MenuItem><Button href="/rental">대여관리</Button></MenuItem>
            <MenuItem><Button href="/profile">회원정보</Button></MenuItem>
          </Select>
          <Button color="inherit" href="/SignUp">회원가입</Button>
          <Login/>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}



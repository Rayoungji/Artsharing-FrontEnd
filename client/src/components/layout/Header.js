import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useStyles from "../../styles/FrameIndex2";
 import MenuItem from '@material-ui/core/MenuItem';
 import Select from '@material-ui/core/Select';
// import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Login from '../../containers/Login';

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button align='center' href={`/`}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            SK-Art-sharing
          </Typography>
          </Button>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button>
            <Login />
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        <Button color="inherit" noWrap   variant="body2"  className={classes.toolbarLink}  href="/artItemList">작품보기</Button>
          <Button color="inherit" href="/artistList">작가보기</Button>
          <Button color="inherit">마이페이지</Button>
          <Select value='마이페이지'>
            <MenuItem><Button href="/artistOnly">작품관리</Button></MenuItem>
            <MenuItem><Button href="/rentList">대여관리</Button></MenuItem>
            <MenuItem><Button href="/profile">회원정보</Button></MenuItem>
          </Select>
          <Button color="inherit" href="/SignUp">회원가입</Button>
        </Toolbar>
      </Container>
    </React.Fragment>
  );
}
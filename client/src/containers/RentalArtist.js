//작가 작품대여관리현황
import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import RentalArtistList from './RentalArtistList';
import style from '../styles/RentalIndex';

export default class RentalArtist extends Component {
    render() {

        const classes = style.bind();
        const Artworks= [
            {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'ArtName': '1번작품',
            'Customer': '라영지',
            'RentalDate': '2019.09.10~2019.09.15',
            },
            {
                'id': 2,
                'image': 'https://placeimg.com/64/64/1',
                'ArtName': '2번작품',
                'Customer': '신가은',
                'RentalDate': '2019.09.15~2019.09.20',
            },
            {
                'id': 3,
                'image': 'https://placeimg.com/64/64/1',
                'ArtName': '3번작품',
                'Customer': '홍영준',
                'RentalDate': '2019.09.21~2019.09.25',
            }
        ]

        return (
            
            <Paper className={classes.root}>
            <Table className={classes.table}>
            <TableHead>
            <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>작품이름</TableCell>
            <TableCell>대여인아이디</TableCell>
            <TableCell>대여기간</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {Artworks.map(c => {
            return <RentalArtistList key={c.id} id={c.id} image={c.image} ArtName={c.ArtName} Customer={c.Customer} RentalDate={c.RentalDate}  />
            })}
            </TableBody>
            </Table>
            </Paper>
           
        );
    }
}


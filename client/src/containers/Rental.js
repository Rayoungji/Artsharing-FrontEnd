//대여관리 https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/tables/SimpleTable.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '130%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: '100%',
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', "신가은", "2019/02/10-2020/02/10", "승인", "입금완료"),
  createData('Ice cream sandwich', "라영지", "2020/05/03-2022/05/03", "승인", "입금전"),
  createData('Eclair', "홍영준", "2019/12/17-2020/12/17", "승인요청", "-"),
  createData('Cupcake', "김수연", "2019/04/22-2020/04/22", "승인실패", "-"),
  createData('Gingerbread', "박선형", "2021/05/07-2022/05/07", "승인요청", "-"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>작품명</TableCell>
            <TableCell align="right">작가</TableCell>
            <TableCell align="right">대여기간</TableCell>
            <TableCell align="right">승인관리</TableCell>
            <TableCell align="right">입금완료</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
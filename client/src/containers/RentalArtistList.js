import React, { Component } from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default class RentalArtistList extends Component {
    render() {
        return (
            <TableRow>
<TableCell>{this.props.id}</TableCell>
<TableCell><img src={this.props.image} alt="profile"/></TableCell>
<TableCell>{this.props.ArtName}</TableCell>
<TableCell>{this.props.Customer}</TableCell>
<TableCell>{this.props.RentalDate}</TableCell>
</TableRow>
        )
    }
}

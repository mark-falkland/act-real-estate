import React, { Component, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class DataGrid extends Component {

  unhighlightRow = (event) => {
    let row = event.target.parentNode
    row.className = 'row'
  }

  highlightRow = (event) => {
    let row = event.target.parentNode
    row.className = 'row-hover'
  }

  onRowClick = (event) => {
    let street_number = this.props.properties[event.target.parentNode.id].street_number
    let street = this.props.properties[event.target.parentNode.id].street
    let suburb = this.props.properties[event.target.parentNode.id].suburb
    let location = street_number + ' ' + street + ',' + suburb + ' Canberra, ACT'
    this.props.showProperty(event.target.parentNode.id, location)
  }

  render() {
    return (
      <Table style={{ maxWidth: '500px' }}>
        <TableHead style={{ maxWidth: '500px' }}>
          <TableRow className='row-header' style={{ maxWidth: '500px' }}>
            <TableCell style={{ maxWidth: '160px' }} className="cell-suburb">Address</TableCell>
            <TableCell style={{ maxWidth: '30px' }} >Suburb</TableCell>
            <TableCell style={{ maxWidth: '20px' }} >Price</TableCell>
            <TableCell style={{ maxWidth: '30px', paddingRight: '50px' }} align="left" >Bedrooms</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            this.props.properties &&
            this.props.properties.map((row, index) => {
              return (
                <TableRow key={row.id} id={index} className='row' onMouseEnter={this.highlightRow} onMouseLeave={this.unhighlightRow} onClick={this.onRowClick}
                >
                  <TableCell style={{ minWidth: '200px' }}>{row.street_number} {row.street}</TableCell>
                  <TableCell style={{ maxWidth: '30px' }}>{row.suburb}</TableCell>
                  <TableCell style={{ maxWidth: '40px' }} align="right">{row.price}</TableCell>
                  <TableCell style={{ maxWidth: '40px' }} align="center">{row.bedrooms}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table >
    );
  }
}

export default DataGrid

